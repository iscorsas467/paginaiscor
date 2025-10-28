'use client';

import { useState, useEffect } from 'react';
import { 
  PencilIcon, 
  TrashIcon, 
  PlusIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import FooterSection from './FooterSection';
import TestimonialsManager from './TestimonialsManager';
import ContactFaqManager from './ContactFaqManager';

interface ContactItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  order: number;
}

interface ContactInfo {
  id: string;
  title: string;
  description: string;
  contact_info_items: ContactItem[];
}

export default function ContentManager() {
  const [activeTab, setActiveTab] = useState<'contact' | 'footer' | 'testimonials' | 'faq'>('contact');
  const [contactData, setContactData] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    items: [] as ContactItem[]
  });

  useEffect(() => {
    loadContactData();
  }, []);

  const loadContactData = async () => {
    try {
      const response = await fetch('/api/page-content?page=contact');
      if (response.ok) {
        const data = await response.json();
        setContactData(data.data?.contactInfo);
        if (data.data?.contactInfo) {
          setFormData({
            title: data.data.contactInfo.title || '',
            description: data.data.contactInfo.description || '',
            items: data.data.contactInfo.contact_info_items || []
          });
        }
      }
    } catch (error) {
      console.error('Error loading contact data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const response = await fetch('/api/contact-info', {
        method: contactData ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: contactData?.id,
          title: formData.title,
          description: formData.description,
          items: formData.items
        }),
      });

      if (response.ok) {
        await loadContactData();
        setEditing(false);
        alert('Información guardada exitosamente');
      } else {
        alert('Error al guardar la información');
      }
    } catch (error) {
      console.error('Error saving contact data:', error);
      alert('Error al guardar la información');
    }
  };

  const addContactItem = () => {
    const newItem: ContactItem = {
      id: `temp-${Date.now()}`,
      title: '',
      description: '',
      icon: '📞',
      gradient: 'from-blue-500 to-blue-600',
      order: formData.items.length
    };
    setFormData({
      ...formData,
      items: [...formData.items, newItem]
    });
  };

  const updateContactItem = (index: number, field: keyof ContactItem, value: string) => {
    const updatedItems = [...formData.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setFormData({ ...formData, items: updatedItems });
  };

  const removeContactItem = (index: number) => {
    const updatedItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: updatedItems });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Cargando contenido...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('contact')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'contact'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Información de Contacto
          </button>
          <button
            onClick={() => setActiveTab('footer')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'footer'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Pie de Página
          </button>
          <button
            onClick={() => setActiveTab('testimonials')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'testimonials'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Testimonios
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'faq'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Preguntas Frecuentes
          </button>
        </nav>
      </div>

      {/* Contenido de las tabs */}
      {activeTab === 'footer' ? (
        <FooterSection />
      ) : activeTab === 'testimonials' ? (
        <TestimonialsManager />
      ) : activeTab === 'faq' ? (
        <ContactFaqManager />
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">Gestión de Contenido de Contacto</h3>
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
        <div className="bg-white shadow rounded-lg p-6">
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
                placeholder="Título de la sección"
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
                placeholder="Descripción de la sección"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Información de Contacto
                </label>
                <button
                  onClick={addContactItem}
                  className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200"
                >
                  <PlusIcon className="h-4 w-4 mr-1" />
                  Agregar
                </button>
              </div>

              <div className="space-y-4">
                {formData.items.map((item, index) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Título
                        </label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => updateContactItem(index, 'title', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Ej: Línea Nacional"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Descripción
                        </label>
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => updateContactItem(index, 'description', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Ej: 314 807 08 53"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Icono
                        </label>
                        <input
                          type="text"
                          value={item.icon}
                          onChange={(e) => updateContactItem(index, 'icon', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Ej: 📞"
                        />
                      </div>
                    </div>
                    <div className="mt-3 flex justify-end">
                      <button
                        onClick={() => removeContactItem(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
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
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                <CheckIcon className="h-4 w-4 mr-2" />
                Guardar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg p-6">
          <h4 className="text-lg font-medium text-gray-900 mb-4">
            {contactData?.title || 'Información de Contacto'}
          </h4>
          <p className="text-gray-600 mb-6">
            {contactData?.description || 'Descripción de la sección de contacto'}
          </p>
          
          <div className="space-y-4">
            {contactData?.contact_info_items?.map((item) => (
              <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-medium text-gray-900">{item.title}</div>
                  <div className="text-gray-600">{item.description}</div>
                </div>
              </div>
            )) || (
              <p className="text-gray-500 italic">No hay información de contacto configurada</p>
            )}
          </div>
        </div>
      )}
        </>
      )}
    </div>
  );
}
