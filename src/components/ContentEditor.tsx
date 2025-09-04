'use client';

import React, { useState, useEffect } from 'react';
import { 
  PencilIcon, 
  EyeIcon, 
  XMarkIcon,
  PlusIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
import LivePreview from './LivePreview';

interface ContentEditorProps {
  section: string;
  subsection: string;
  initialData: any;
  onSave: (data: any) => void;
  onClose: () => void;
}

export default function ContentEditor({ 
  section, 
  subsection, 
  initialData, 
  onSave, 
  onClose 
}: ContentEditorProps) {
  const [formData, setFormData] = useState(initialData);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field: string, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item: any, i: number) => 
        i === index ? value : item
      )
    }));
  };

  const addArrayItem = (field: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_: any, i: number) => i !== index)
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    await onSave(formData);
    setIsSaving(false);
  };

  const renderField = (key: string, value: any, label: string) => {
    if (Array.isArray(value)) {
      return (
        <div key={key} className="space-y-3">
          <label className="block text-sm font-medium text-slate-700">
            {label}
          </label>
          {value.map((item: string, index: number) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                value={item}
                onChange={(e) => handleArrayChange(key, index, e.target.value)}
                className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={`${label} ${index + 1}`}
              />
              <button
                onClick={() => removeArrayItem(key, index)}
                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
              >
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>
          ))}
          <button
            onClick={() => addArrayItem(key)}
            className="flex items-center px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
          >
            <PlusIcon className="h-4 w-4 mr-2" />
            Agregar {label}
          </button>
        </div>
      );
    }

    if (typeof value === 'string') {
      if (value.length > 100) {
        return (
          <div key={key} className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">
              {label}
            </label>
            <textarea
              value={value}
              onChange={(e) => handleInputChange(key, e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={`Ingresa ${label.toLowerCase()}`}
            />
          </div>
        );
      }
      
      return (
        <div key={key} className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">
            {label}
          </label>
          <input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(key, e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={`Ingresa ${label.toLowerCase()}`}
          />
        </div>
      );
    }

    if (typeof value === 'object' && value !== null) {
      return (
        <div key={key} className="space-y-4 p-4 border border-slate-200 rounded-lg">
          <h4 className="text-sm font-semibold text-slate-800">{label}</h4>
          {Object.entries(value).map(([subKey, subValue]) => 
            renderField(`${key}.${subKey}`, subValue, subKey.charAt(0).toUpperCase() + subKey.slice(1))
          )}
        </div>
      );
    }

    return null;
  };

  const renderPreview = () => {
    return <LivePreview section={section} subsection={subsection} data={formData} />;
  };



  const getSectionData = () => {
    const sectionData = {
      home: {
        hero: {
          badge: 'Empresa Líder',
          title: 'ISCOR - Ingeniería, Seguridad y Control de Riesgos',
          subtitle: 'Soluciones integrales en seguridad industrial y capacitación profesional',
          stats: {
            experience: '15+ años',
            companies: '500+',
            certifications: '10,000+'
          }
        },
        services: {
          title: 'Nuestros Servicios',
          description: 'Ofrecemos una amplia gama de servicios en seguridad industrial',
          items: [
            { name: 'Capacitación en Montacargas', description: 'Certificación oficial para operadores' },
            { name: 'Seguridad en Alturas', description: 'Cursos especializados en trabajo en alturas' },
            { name: 'Primeros Auxilios', description: 'Capacitación en atención prehospitalaria' }
          ]
        }
      },
      company: {
        hero: {
          title: 'Sobre ISCOR',
          subtitle: 'Líderes en seguridad industrial',
          description: 'ISCOR es una empresa especializada en ingeniería, seguridad y control de riesgos, comprometida con la excelencia y la innovación en el sector industrial.'
        },
        mission: {
          title: 'Nuestra Misión',
          description: 'Proporcionar soluciones integrales en seguridad industrial que protejan a las personas y optimicen los procesos empresariales.'
        }
      },
      team: {
        hero: {
          title: 'Nuestro Equipo',
          subtitle: 'Profesionales comprometidos',
          description: 'Contamos con un equipo de expertos altamente calificados en seguridad industrial y capacitación profesional.',
          stats: {
            members: '25+',
            departments: '5',
            experience: '20+ años'
          }
        }
      },
      contact: {
        hero: {
          title: 'Contáctanos',
          subtitle: 'Estamos aquí para ayudarte',
          description: 'Nuestro equipo está disponible para responder tus consultas y brindarte la mejor asesoría en seguridad industrial.',
          stats: {
            phone: '+57 300 123 4567',
            email: 'contacto@iscor.com',
            location: 'Bogotá, Colombia'
          }
        }
      }
    };

    return sectionData[section as keyof typeof sectionData]?.[subsection as any] || {};
  };

  const currentData = getSectionData();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <PencilIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Editando: {section === 'home' ? 'Página de Inicio' : 
                           section === 'company' ? 'Página de Empresa' :
                           section === 'team' ? 'Página de Equipo' :
                           section === 'contact' ? 'Página de Contacto' : 'Contenido'} - {subsection}
              </h3>
              <p className="text-sm text-slate-600">Edita el contenido y ve los cambios en vivo</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 disabled:opacity-50"
            >
              {isSaving ? 'Guardando...' : 'Guardar Cambios'}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors duration-200"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex h-[calc(90vh-120px)]">
          {/* Editor Panel */}
          <div className="w-1/2 p-6 overflow-y-auto border-r border-slate-200">
            <div className="space-y-6">
              {Object.entries(currentData).map(([key, value]) => 
                renderField(key, value, key.charAt(0).toUpperCase() + key.slice(1))
              )}
            </div>
          </div>

          {/* Preview Panel */}
          <div className="w-1/2 p-6 overflow-y-auto bg-slate-50">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <EyeIcon className="h-5 w-5 mr-2 text-blue-600" />
                Vista Previa
              </h4>
              {renderPreview()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
