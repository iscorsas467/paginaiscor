'use client';

import { useState, useEffect } from 'react';
import { 
  PencilIcon, 
  TrashIcon, 
  PlusIcon,
  CheckIcon,
  XMarkIcon,
  StarIcon,
  Bars3Icon
} from '@heroicons/react/24/outline';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  order: number;
}

interface TestimonialsData {
  id: string;
  title: string;
  description: string;
  home_testimonial_items: Testimonial[];
}

// Componente para cada item de testimonio sortable
function SortableTestimonialItem({ 
  testimonial, 
  onEdit, 
  onDelete 
}: { 
  testimonial: Testimonial; 
  onEdit: (testimonial: Testimonial) => void;
  onDelete: (id: string) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: testimonial.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-start space-x-4 p-4 border border-gray-200 rounded-lg ${
        isDragging ? 'shadow-lg bg-blue-50' : 'bg-white'
      }`}
    >
      {/* Handle de arrastre */}
      <div
        {...attributes}
        {...listeners}
        className="flex-shrink-0 cursor-grab active:cursor-grabbing p-2 text-gray-400 hover:text-gray-600"
      >
        <Bars3Icon className="h-5 w-5" />
      </div>
      
      {/* Avatar */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
      </div>
      
      {/* Contenido */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.position}</p>
            <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-700 line-clamp-2">
          "{testimonial.content}"
        </p>
      </div>
      
      {/* Botones de acción */}
      <div className="flex-shrink-0 flex space-x-2">
        <button
          onClick={() => onEdit(testimonial)}
          className="p-2 text-gray-400 hover:text-blue-600"
        >
          <PencilIcon className="h-4 w-4" />
        </button>
        <button
          onClick={() => onDelete(testimonial.id)}
          className="p-2 text-gray-400 hover:text-red-600"
        >
          <TrashIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default function TestimonialsManager() {
  const [testimonialsData, setTestimonialsData] = useState<TestimonialsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [editingSection, setEditingSection] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  // Configuración de sensores para drag & drop
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Datos por defecto
  const defaultData: TestimonialsData = {
    id: 'home-testimonials-1',
    title: 'Lo que dicen nuestros clientes',
    description: 'La confianza de nuestros clientes es nuestro mayor logro. Conoce las experiencias de quienes han confiado en ISCOR.',
    home_testimonial_items: []
  };

  const [sectionForm, setSectionForm] = useState({
    title: '',
    description: ''
  });

  const [testimonialForm, setTestimonialForm] = useState({
    name: '',
    position: '',
    company: '',
    content: '',
    rating: 5
  });

  useEffect(() => {
    fetchTestimonialsData();
  }, []);

  const fetchTestimonialsData = async () => {
    try {
      const response = await fetch('/api/home-testimonials');
      const result = await response.json();
      
      if (result.success && result.data) {
        setTestimonialsData(result.data);
        setSectionForm({
          title: result.data.title,
          description: result.data.description
        });
      } else {
        setTestimonialsData(defaultData);
        setSectionForm({
          title: defaultData.title,
          description: defaultData.description
        });
      }
    } catch (error) {
      console.error('Error fetching testimonials data:', error);
      setTestimonialsData(defaultData);
      setSectionForm({
        title: defaultData.title,
        description: defaultData.description
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSection = async () => {
    if (!testimonialsData) return;

    setSaving(true);
    setMessage(null);

    try {
      const response = await fetch('/api/home-testimonials', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: testimonialsData.id,
          title: sectionForm.title,
          description: sectionForm.description
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ type: 'success', text: 'Sección actualizada correctamente' });
        setEditingSection(false);
        await fetchTestimonialsData();
      } else {
        setMessage({ type: 'error', text: result.error || 'Error al actualizar' });
      }
    } catch (error) {
      console.error('Error saving section:', error);
      setMessage({ type: 'error', text: 'Error de conexión' });
    } finally {
      setSaving(false);
    }
  };

  const handleSaveTestimonial = async () => {
    if (!testimonialsData) return;

    setSaving(true);
    setMessage(null);

    try {
      const url = editingTestimonial 
        ? `/api/home-testimonial-items?id=${editingTestimonial}`
        : '/api/home-testimonial-items';
      
      const method = editingTestimonial ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...(editingTestimonial && { id: editingTestimonial }),
          ...(editingTestimonial ? {} : { testimonialsId: testimonialsData.id }),
          ...testimonialForm
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ type: 'success', text: 'Testimonio guardado correctamente' });
        setEditingTestimonial(null);
        setShowAddForm(false);
        setTestimonialForm({
          name: '',
          position: '',
          company: '',
          content: '',
          rating: 5
        });
        await fetchTestimonialsData();
      } else {
        setMessage({ type: 'error', text: result.error || 'Error al guardar' });
      }
    } catch (error) {
      console.error('Error saving testimonial:', error);
      setMessage({ type: 'error', text: 'Error de conexión' });
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteTestimonial = async (id: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este testimonio?')) return;

    setSaving(true);
    setMessage(null);

    try {
      const response = await fetch(`/api/home-testimonial-items?id=${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ type: 'success', text: 'Testimonio eliminado correctamente' });
        await fetchTestimonialsData();
      } else {
        setMessage({ type: 'error', text: result.error || 'Error al eliminar' });
      }
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      setMessage({ type: 'error', text: 'Error de conexión' });
    } finally {
      setSaving(false);
    }
  };

  const handleEditTestimonial = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial.id);
    setTestimonialForm({
      name: testimonial.name,
      position: testimonial.position,
      company: testimonial.company,
      content: testimonial.content,
      rating: testimonial.rating
    });
  };

  const handleAddTestimonial = () => {
    setShowAddForm(true);
    setEditingTestimonial(null);
    setTestimonialForm({
      name: '',
      position: '',
      company: '',
      content: '',
      rating: 5
    });
  };

  const handleCancelEdit = () => {
    setEditingSection(false);
    setEditingTestimonial(null);
    setShowAddForm(false);
    setTestimonialForm({
      name: '',
      position: '',
      company: '',
      content: '',
      rating: 5
    });
  };

  // Función para manejar el reordenamiento por drag & drop
  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (!testimonialsData || !over || active.id === over.id) {
      return;
    }

    const oldIndex = testimonialsData.home_testimonial_items.findIndex(
      (item) => item.id === active.id
    );
    const newIndex = testimonialsData.home_testimonial_items.findIndex(
      (item) => item.id === over.id
    );

    if (oldIndex === -1 || newIndex === -1) {
      return;
    }

    // Actualizar el estado local inmediatamente para feedback visual
    const newItems = arrayMove(testimonialsData.home_testimonial_items, oldIndex, newIndex);
    setTestimonialsData({
      ...testimonialsData,
      home_testimonial_items: newItems
    });

    // Actualizar el orden en la base de datos
    try {
      const itemsWithNewOrder = newItems.map((item, index) => ({
        id: item.id,
        order: index
      }));

      const response = await fetch('/api/home-testimonial-items', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: itemsWithNewOrder
        }),
      });

      const result = await response.json();

      if (!result.success) {
        // Si falla, revertir el cambio local
        setTestimonialsData(testimonialsData);
        setMessage({ type: 'error', text: 'Error al actualizar el orden' });
      } else {
        setMessage({ type: 'success', text: 'Orden actualizado correctamente' });
      }
    } catch (error) {
      console.error('Error reordering testimonials:', error);
      // Revertir el cambio local
      setTestimonialsData(testimonialsData);
      setMessage({ type: 'error', text: 'Error de conexión' });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!testimonialsData) {
    return (
      <div className="text-center p-8 text-gray-500">
        No se pudo cargar la información de testimonios
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Mensaje de estado */}
      {message && (
        <div className={`p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {message.text}
        </div>
      )}

      {/* Sección de Información General */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Información de la Sección</h3>
          {!editingSection ? (
            <button
              onClick={() => setEditingSection(true)}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100"
            >
              <PencilIcon className="h-4 w-4 mr-2" />
              Editar
            </button>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={handleCancelEdit}
                className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <XMarkIcon className="h-4 w-4 mr-2" />
                Cancelar
              </button>
              <button
                onClick={handleSaveSection}
                disabled={saving}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
              >
                <CheckIcon className="h-4 w-4 mr-2" />
                Guardar
              </button>
            </div>
          )}
        </div>

        {editingSection ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título
              </label>
              <input
                type="text"
                value={sectionForm.title}
                onChange={(e) => setSectionForm({ ...sectionForm, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ej: Lo que dicen nuestros clientes"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descripción
              </label>
              <textarea
                value={sectionForm.description}
                onChange={(e) => setSectionForm({ ...sectionForm, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ej: La confianza de nuestros clientes es nuestro mayor logro..."
              />
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <h4 className="text-lg font-medium text-gray-900">{testimonialsData.title}</h4>
            <p className="text-gray-600">{testimonialsData.description}</p>
          </div>
        )}
      </div>

      {/* Lista de Testimonios */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Testimonios ({testimonialsData.home_testimonial_items.length})
          </h3>
          <button
            onClick={handleAddTestimonial}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            <PlusIcon className="h-4 w-4 mr-2" />
            Agregar Testimonio
          </button>
        </div>

        {/* Formulario de Agregar/Editar Testimonio */}
        {(showAddForm || editingTestimonial) && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="text-md font-medium text-gray-900 mb-4">
              {editingTestimonial ? 'Editar Testimonio' : 'Agregar Nuevo Testimonio'}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  value={testimonialForm.name}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ej: María González"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cargo *
                </label>
                <input
                  type="text"
                  value={testimonialForm.position}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, position: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ej: Gerente de Seguridad"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa *
                </label>
                <input
                  type="text"
                  value={testimonialForm.company}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, company: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ej: Constructora ABC"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Calificación *
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setTestimonialForm({ ...testimonialForm, rating })}
                      className={`p-1 ${
                        rating <= testimonialForm.rating 
                          ? 'text-yellow-400' 
                          : 'text-gray-300'
                      }`}
                    >
                      <StarIcon className="h-6 w-6 fill-current" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Testimonio *
              </label>
              <textarea
                value={testimonialForm.content}
                onChange={(e) => setTestimonialForm({ ...testimonialForm, content: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Escribe el testimonio del cliente..."
              />
            </div>
            
            <div className="flex justify-end space-x-3 mt-4">
              <button
                onClick={handleCancelEdit}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <XMarkIcon className="h-4 w-4 mr-2" />
                Cancelar
              </button>
              <button
                onClick={handleSaveTestimonial}
                disabled={saving || !testimonialForm.name || !testimonialForm.position || !testimonialForm.company || !testimonialForm.content}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
              >
                <CheckIcon className="h-4 w-4 mr-2" />
                {editingTestimonial ? 'Actualizar' : 'Agregar'}
              </button>
            </div>
          </div>
        )}

        {/* Lista de Testimonios con Drag & Drop */}
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={testimonialsData.home_testimonial_items.map(item => item.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-4">
              {testimonialsData.home_testimonial_items.map((testimonial) => (
                <SortableTestimonialItem
                  key={testimonial.id}
                  testimonial={testimonial}
                  onEdit={handleEditTestimonial}
                  onDelete={handleDeleteTestimonial}
                />
              ))}
              
              {testimonialsData.home_testimonial_items.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <p>No hay testimonios configurados</p>
                  <p className="text-sm">Haz clic en "Agregar Testimonio" para comenzar</p>
                </div>
              )}
            </div>
          </SortableContext>
        </DndContext>

        {/* Instrucciones de uso */}
        {testimonialsData.home_testimonial_items.length > 1 && (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-700">
              💡 <strong>Tip:</strong> Arrastra el ícono de las líneas (≡) para reordenar los testimonios. 
              El orden se actualizará automáticamente en el carrusel del sitio web.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
