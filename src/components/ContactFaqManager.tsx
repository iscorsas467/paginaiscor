'use client';

import { useState, useEffect } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
  CheckIcon,
  XMarkIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import SortableFaqItem from './SortableFaqItem';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  order: number;
}

interface FaqData {
  id: string;
  title: string;
  description: string;
  contact_faq_items: FaqItem[];
}

export default function ContactFaqManager() {
  const [faqData, setFaqData] = useState<FaqData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });
  const [itemFormData, setItemFormData] = useState({
    question: '',
    answer: '',
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    fetchFaqData();
  }, []);

  const fetchFaqData = async () => {
    try {
      const response = await fetch('/api/contact-faq');
      const result = await response.json();

      if (result.success && result.data) {
        setFaqData(result.data);
        setFormData({
          title: result.data.title || '',
          description: result.data.description || '',
        });
      } else {
        // Datos por defecto si no existe en BD
        setFaqData({
          id: 'contact-faq-1',
          title: '¿Tienes dudas?',
          description: 'Resolvemos tus inquietudes sobre nuestros servicios de seguridad integral.',
          contact_faq_items: []
        });
        setFormData({
          title: '¿Tienes dudas?',
          description: 'Resolvemos tus inquietudes sobre nuestros servicios de seguridad integral.',
        });
      }
    } catch (error) {
      console.error('Error fetching FAQ data:', error);
      setFaqData({
        id: 'contact-faq-1',
        title: '¿Tienes dudas?',
        description: 'Resolvemos tus inquietudes sobre nuestros servicios de seguridad integral.',
        contact_faq_items: []
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!faqData) return;
    setSaving(true);
    setMessage(null);

    try {
      const response = await fetch('/api/contact-faq', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: faqData.id,
          title: formData.title,
          description: formData.description,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ type: 'success', text: 'Configuración de FAQ guardada exitosamente.' });
        setEditing(false);
        fetchFaqData(); // Recargar datos
      } else {
        setMessage({ type: 'error', text: `Error al guardar: ${result.message}` });
      }
    } catch (error) {
      console.error('Error saving FAQ data:', error);
      setMessage({ type: 'error', text: 'Error de conexión al guardar la configuración de FAQ.' });
    } finally {
      setSaving(false);
    }
  };

  const handleAddItem = async () => {
    if (!faqData || !itemFormData.question || !itemFormData.answer) return;

    try {
      const response = await fetch('/api/contact-faq-items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          faqId: faqData.id,
          question: itemFormData.question,
          answer: itemFormData.answer,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setItemFormData({ question: '', answer: '' });
        fetchFaqData(); // Recargar datos
        setMessage({ type: 'success', text: 'Pregunta agregada exitosamente.' });
      } else {
        setMessage({ type: 'error', text: `Error al agregar pregunta: ${result.message}` });
      }
    } catch (error) {
      console.error('Error adding FAQ item:', error);
      setMessage({ type: 'error', text: 'Error de conexión al agregar la pregunta.' });
    }
  };

  const handleEditItem = async (id: string) => {
    if (!itemFormData.question || !itemFormData.answer) return;

    try {
      const response = await fetch('/api/contact-faq-items', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          question: itemFormData.question,
          answer: itemFormData.answer,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setItemFormData({ question: '', answer: '' });
        setEditingItem(null);
        fetchFaqData(); // Recargar datos
        setMessage({ type: 'success', text: 'Pregunta actualizada exitosamente.' });
      } else {
        setMessage({ type: 'error', text: `Error al actualizar pregunta: ${result.message}` });
      }
    } catch (error) {
      console.error('Error updating FAQ item:', error);
      setMessage({ type: 'error', text: 'Error de conexión al actualizar la pregunta.' });
    }
  };

  const handleDeleteItem = async (id: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar esta pregunta?')) return;

    try {
      const response = await fetch(`/api/contact-faq-items?id=${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (result.success) {
        fetchFaqData(); // Recargar datos
        setMessage({ type: 'success', text: 'Pregunta eliminada exitosamente.' });
      } else {
        setMessage({ type: 'error', text: `Error al eliminar pregunta: ${result.message}` });
      }
    } catch (error) {
      console.error('Error deleting FAQ item:', error);
      setMessage({ type: 'error', text: 'Error de conexión al eliminar la pregunta.' });
    }
  };

  const handleDragEnd = async (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id && faqData) {
      const oldIndex = faqData.contact_faq_items.findIndex((item) => item.id === active.id);
      const newIndex = faqData.contact_faq_items.findIndex((item) => item.id === over.id);

      const newItems = arrayMove(faqData.contact_faq_items, oldIndex, newIndex);
      
      // Actualizar orden localmente primero (optimistic update)
      setFaqData({
        ...faqData,
        contact_faq_items: newItems.map((item, index) => ({ ...item, order: index }))
      });

      // Enviar actualización al servidor
      try {
        const response = await fetch('/api/contact-faq-items', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            items: newItems.map((item, index) => ({ id: item.id, order: index }))
          }),
        });

        if (!response.ok) {
          // Si falla, revertir cambios
          fetchFaqData();
        }
      } catch (error) {
        console.error('Error reordering FAQ items:', error);
        fetchFaqData();
      }
    }
  };

  const startEditItem = (item: FaqItem) => {
    setEditingItem(item.id);
    setItemFormData({
      question: item.question,
      answer: item.answer,
    });
  };

  const cancelEditItem = () => {
    setEditingItem(null);
    setItemFormData({ question: '', answer: '' });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Cargando configuración de FAQ...</span>
      </div>
    );
  }

  if (!faqData) {
    return <div className="text-center p-8 text-red-600">Error: No se pudieron cargar los datos de FAQ.</div>;
  }

  return (
    <div className="space-y-6">
      {/* Configuración Principal */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Configuración de FAQ</h3>
          {!editing && (
            <button
              onClick={() => setEditing(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <PencilIcon className="h-4 w-4 mr-2" />
              Editar
            </button>
          )}
        </div>

        {editing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título Principal
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ej: ¿Tienes dudas?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descripción
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ej: Resolvemos tus inquietudes sobre nuestros servicios..."
              ></textarea>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setEditing(false)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <XMarkIcon className="h-4 w-4 mr-2" />
                Cancelar
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 disabled:opacity-50"
              >
                <CheckIcon className="h-4 w-4 mr-2" />
                {saving ? 'Guardando...' : 'Guardar'}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-900">{faqData.title}</h4>
            <p className="text-gray-600">{faqData.description}</p>
          </div>
        )}
      </div>

      {/* Gestión de Preguntas */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Preguntas Frecuentes</h3>

        {/* Formulario para agregar/editar pregunta */}
        <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h4 className="text-md font-semibold text-gray-800 mb-4">
            {editingItem ? 'Editar Pregunta' : 'Agregar Nueva Pregunta'}
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pregunta
              </label>
              <input
                type="text"
                value={itemFormData.question}
                onChange={(e) => setItemFormData({ ...itemFormData, question: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ej: ¿Cuánto tiempo toma implementar un programa de seguridad?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Respuesta
              </label>
              <textarea
                value={itemFormData.answer}
                onChange={(e) => setItemFormData({ ...itemFormData, answer: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ej: El tiempo varía según el alcance del programa..."
              ></textarea>
            </div>
            <div className="flex justify-end space-x-3">
              {editingItem && (
                <button
                  onClick={cancelEditItem}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  <XMarkIcon className="h-4 w-4 mr-2" />
                  Cancelar
                </button>
              )}
              <button
                onClick={editingItem ? () => handleEditItem(editingItem) : handleAddItem}
                disabled={!itemFormData.question || !itemFormData.answer}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
              >
                <PlusIcon className="h-4 w-4 mr-2" />
                {editingItem ? 'Actualizar' : 'Agregar'} Pregunta
              </button>
            </div>
          </div>
        </div>

        {/* Lista de preguntas con drag & drop */}
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={faqData.contact_faq_items.map(item => item.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-4">
              {faqData.contact_faq_items.map((item) => (
                <SortableFaqItem
                  key={item.id}
                  item={item}
                  onEdit={() => startEditItem(item)}
                  onDelete={() => handleDeleteItem(item.id)}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>

        {faqData.contact_faq_items.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <QuestionMarkCircleIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>No hay preguntas frecuentes configuradas.</p>
            <p className="text-sm">Agrega la primera pregunta usando el formulario de arriba.</p>
          </div>
        )}
      </div>

      {/* Mensajes */}
      {message && (
        <div
          className={`mt-4 p-3 rounded-md ${
            message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}
