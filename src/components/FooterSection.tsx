'use client';

import { useState, useEffect } from 'react';
import { PhoneIcon, EnvelopeIcon, ShareIcon } from '@heroicons/react/24/outline';

interface SocialData {
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
}

interface GlobalContactData {
  id: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  phone_title: string | null;
  phone_description: string | null;
  email_title: string | null;
  email_description: string | null;
  social_title: string | null;
  social_description: string | null;
  global_social: SocialData | null;
}

export default function FooterSection() {
  const [data, setData] = useState<GlobalContactData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Datos por defecto (iguales a los actuales del footer)
  const defaultData: GlobalContactData = {
    id: 'global-contact-1',
    phone: '3126567077',
    email: 'iscor@iscorcolombia.com',
    address: 'Calle 123 #45-67, Bogotá, Colombia',
    whatsapp: '3126567077',
    phone_title: 'Hablar con nosotros',
    phone_description: 'Interesado en nuestro servicio? Simplemente levante el teléfono y llámenos.',
    email_title: 'Contacto correo',
    email_description: 'A veces necesitas un poco de orientación. No se preocupe, estamos aquí para ayudarlo.',
    social_title: 'Síguenos',
    social_description: 'Mantente conectado con nosotros a través de nuestras redes sociales.',
    global_social: {
      facebook: 'https://facebook.com/ISCORColombia',
      instagram: 'https://instagram.com/iscorcolombia',
      linkedin: 'https://linkedin.com/in/iscor-colombia',
      twitter: 'https://twitter.com/iscorcolombia'
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/global-contact');
      const result = await response.json();
      
      if (result.success && result.data) {
        setData(result.data);
      } else {
        // Si no hay datos en BD, usar datos por defecto
        setData(defaultData);
      }
    } catch (error) {
      console.error('Error fetching footer data:', error);
      setData(defaultData);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!data) return;

    setSaving(true);
    setMessage(null);

    try {
      const response = await fetch('/api/global-contact', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: data.id,
          phone: data.phone,
          email: data.email,
          address: data.address,
          whatsapp: data.whatsapp,
          phone_title: data.phone_title,
          phone_description: data.phone_description,
          email_title: data.email_title,
          email_description: data.email_description,
          social_title: data.social_title,
          social_description: data.social_description,
          socialData: data.global_social
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ type: 'success', text: 'Información del footer actualizada correctamente' });
        setData(result.data);
      } else {
        setMessage({ type: 'error', text: result.error || 'Error al actualizar' });
      }
    } catch (error) {
      console.error('Error saving footer data:', error);
      setMessage({ type: 'error', text: 'Error de conexión' });
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (field: keyof GlobalContactData, value: string) => {
    if (!data) return;
    setData({ ...data, [field]: value });
  };

  const handleSocialChange = (field: keyof SocialData, value: string) => {
    if (!data || !data.global_social) return;
    setData({
      ...data,
      global_social: {
        ...data.global_social,
        [field]: value
      }
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center p-8 text-gray-500">
        No se pudo cargar la información del footer
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

      {/* Sección de Teléfono */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center mb-4">
          <PhoneIcon className="h-6 w-6 text-blue-600 mr-3" />
          <h3 className="text-lg font-semibold text-gray-900">Columna de Teléfono</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Título
            </label>
            <input
              type="text"
              value={data.phone_title || ''}
              onChange={(e) => handleInputChange('phone_title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej: Hablar con nosotros"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Número de Teléfono
            </label>
            <input
              type="text"
              value={data.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej: 3126567077"
            />
          </div>
        </div>
        
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Descripción
          </label>
          <textarea
            value={data.phone_description || ''}
            onChange={(e) => handleInputChange('phone_description', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej: Interesado en nuestro servicio? Simplemente levante el teléfono y llámenos."
          />
        </div>
      </div>

      {/* Sección de Email */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center mb-4">
          <EnvelopeIcon className="h-6 w-6 text-blue-600 mr-3" />
          <h3 className="text-lg font-semibold text-gray-900">Columna de Email</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Título
            </label>
            <input
              type="text"
              value={data.email_title || ''}
              onChange={(e) => handleInputChange('email_title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej: Contacto correo"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej: iscor@iscorcolombia.com"
            />
          </div>
        </div>
        
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Descripción
          </label>
          <textarea
            value={data.email_description || ''}
            onChange={(e) => handleInputChange('email_description', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej: A veces necesitas un poco de orientación. No se preocupe, estamos aquí para ayudarlo."
          />
        </div>
      </div>

      {/* Sección de Redes Sociales */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center mb-4">
          <ShareIcon className="h-6 w-6 text-blue-600 mr-3" />
          <h3 className="text-lg font-semibold text-gray-900">Columna de Redes Sociales</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Título
            </label>
            <input
              type="text"
              value={data.social_title || ''}
              onChange={(e) => handleInputChange('social_title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej: Síguenos"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descripción
            </label>
            <textarea
              value={data.social_description || ''}
              onChange={(e) => handleInputChange('social_description', e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej: Mantente conectado con nosotros a través de nuestras redes sociales."
            />
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Enlaces de Redes Sociales</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Enlace de Facebook
              </label>
              <input
                type="url"
                value={data.global_social?.facebook || ''}
                onChange={(e) => handleSocialChange('facebook', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://facebook.com/ISCORColombia"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Enlace de Instagram
              </label>
              <input
                type="url"
                value={data.global_social?.instagram || ''}
                onChange={(e) => handleSocialChange('instagram', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://instagram.com/iscorcolombia"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Enlace de LinkedIn
              </label>
              <input
                type="url"
                value={data.global_social?.linkedin || ''}
                onChange={(e) => handleSocialChange('linkedin', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://linkedin.com/in/iscor-colombia"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Enlace de Twitter
              </label>
              <input
                type="url"
                value={data.global_social?.twitter || ''}
                onChange={(e) => handleSocialChange('twitter', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://twitter.com/iscorcolombia"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Botón de Guardar */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          {saving ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Guardando...
            </>
          ) : (
            'Guardar Cambios'
          )}
        </button>
      </div>
    </div>
  );
}
