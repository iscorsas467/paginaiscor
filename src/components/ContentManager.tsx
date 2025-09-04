'use client';

import React, { useState, useEffect } from 'react';
import { 
  XMarkIcon, 
  EyeIcon, 
  PencilIcon,
  CheckIcon,
  PlusIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

interface ContentManagerProps {
  onClose: () => void;
  onSave: (content: any) => void;
  section: string;
  subsection?: string;
  initialContent?: any;
}

export default function ContentManager({ 
  onClose, 
  onSave, 
  section, 
  subsection, 
  initialContent 
}: ContentManagerProps) {
  const [content, setContent] = useState<any>(initialContent || getDefaultContent(section, subsection));
  const [showPreview, setShowPreview] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setContent(initialContent || getDefaultContent(section, subsection));
  }, [section, subsection, initialContent]);

  function getDefaultContent(section: string, subsection?: string) {
    const defaults: any = {
      home: {
        hero: {
          badge: 'Empresa líder en seguridad industrial',
          title: 'ISCOR - Seguridad Industrial',
          subtitle: 'Capacitación y certificación profesional en seguridad industrial',
          stats: {
            experience: '15+ años',
            companies: '500+',
            certifications: '10,000+'
          },
          ctaButtons: {
            primary: { text: 'Ver Cursos', link: '/cursos' },
            secondary: { text: 'Contactar', link: '/contacto' }
          }
        },
        services: {
          title: 'Nuestros Servicios',
          description: 'Ofrecemos una amplia gama de servicios de seguridad industrial',
          items: [
            { id: '1', name: 'Capacitación', description: 'Cursos certificados', icon: '🎓', gradient: 'from-blue-500 to-cyan-500' },
            { id: '2', name: 'Certificación', description: 'Documentos oficiales', icon: '📜', gradient: 'from-green-500 to-emerald-500' },
            { id: '3', name: 'Consultoría', description: 'Asesoría especializada', icon: '💼', gradient: 'from-purple-500 to-pink-500' }
          ]
        },
        features: {
          title: '¿Por qué elegirnos?',
          description: 'Ventajas que nos distinguen en el mercado',
          items: [
            { id: '1', title: 'Experiencia', description: 'Más de 15 años en el sector', icon: '⭐', color: 'text-yellow-500' },
            { id: '2', title: 'Certificación', description: 'Aprobados por autoridades', icon: '✅', color: 'text-green-500' },
            { id: '3', title: 'Flexibilidad', description: 'Adaptamos a tus necesidades', icon: '🔄', color: 'text-blue-500' }
          ]
        },
        testimonials: {
          title: 'Lo que dicen nuestros clientes',
          description: 'Testimonios de empresas que confían en nosotros',
          items: [
            { id: '1', name: 'Carlos Rodríguez', position: 'Gerente de Seguridad', company: 'Industrias ABC', content: 'Excelente servicio y profesionales muy capacitados', rating: 5 },
            { id: '2', name: 'María González', position: 'Directora de RRHH', company: 'Corporación XYZ', content: 'La mejor inversión en seguridad para nuestra empresa', rating: 5 }
          ]
        }
      },
      company: {
        hero: {
          title: 'Sobre ISCOR',
          subtitle: 'Líderes en seguridad industrial',
          description: 'Somos una empresa especializada en capacitación y certificación en seguridad industrial'
        },
        about: {
          title: 'Nuestra Historia',
          description: 'Más de 15 años de experiencia en el sector de seguridad industrial',
          services: ['Capacitación', 'Certificación', 'Consultoría'],
          certifications: ['ISO 9001', 'OHSAS 18001', 'ISO 14001'],
          experience: '15+ años'
        },
        mission: {
          title: 'Nuestra Misión',
          description: 'Proporcionar soluciones integrales de seguridad industrial que protejan vidas y bienes'
        },
        vision: {
          title: 'Nuestra Visión',
          description: 'Ser la empresa líder en Latinoamérica en capacitación y certificación de seguridad industrial'
        },
        strengths: {
          title: 'Nuestras Fortalezas',
          description: 'Factores que nos distinguen en el mercado',
          items: [
            { id: '1', title: 'Experiencia', description: '15+ años en el sector', icon: '⭐', gradient: 'from-yellow-500 to-orange-500' },
            { id: '2', title: 'Certificación', description: 'Aprobados por autoridades', icon: '✅', gradient: 'from-green-500 to-emerald-500' },
            { id: '3', title: 'Innovación', description: 'Metodologías modernas', icon: '💡', gradient: 'from-blue-500 to-cyan-500' }
          ]
        },
        values: {
          title: 'Nuestros Valores',
          description: 'Principios que guían nuestro trabajo',
          items: [
            { id: '1', title: 'Excelencia', description: 'Calidad en todo lo que hacemos', icon: '🏆', gradient: 'from-yellow-500 to-orange-500' },
            { id: '2', title: 'Integridad', description: 'Honestidad y transparencia', icon: '🤝', gradient: 'from-blue-500 to-cyan-500' },
            { id: '3', title: 'Compromiso', description: 'Dedicación total al cliente', icon: '❤️', gradient: 'from-red-500 to-pink-500' }
          ]
        }
      },
      team: {
        hero: {
          title: 'Nuestro Equipo',
          subtitle: 'Profesionales expertos',
          description: 'Conoce a los especialistas que hacen posible nuestra misión',
          stats: {
            members: '25+',
            departments: '5',
            experience: '10+ años'
          }
        },
        leadership: {
          title: 'Equipo de Liderazgo',
          description: 'Directivos con amplia experiencia en seguridad industrial',
          members: [
            { id: '1', name: 'Dr. Juan Pérez', position: 'Director General', bio: 'Especialista en seguridad industrial con 20 años de experiencia', phone: '+57 300 123 4567', email: 'juan.perez@iscor.com', linkedin: 'linkedin.com/in/juanperez', image: '/team/juan.jpg', gradient: 'from-blue-500 to-cyan-500' },
            { id: '2', name: 'Ing. Ana Martínez', position: 'Directora Técnica', bio: 'Ingeniera industrial especializada en normativas de seguridad', phone: '+57 300 123 4568', email: 'ana.martinez@iscor.com', linkedin: 'linkedin.com/in/anamartinez', image: '/team/ana.jpg', gradient: 'from-purple-500 to-pink-500' }
          ]
        },
        departments: {
          title: 'Departamentos',
          description: 'Estructura organizacional especializada',
          items: [
            { id: '1', name: 'Capacitación', description: 'Desarrollo de programas formativos', members: 8, icon: '🎓', gradient: 'from-blue-500 to-cyan-500' },
            { id: '2', name: 'Certificación', description: 'Gestión de certificaciones oficiales', members: 5, icon: '📜', gradient: 'from-green-500 to-emerald-500' },
            { id: '3', name: 'Consultoría', description: 'Asesoría especializada', members: 6, icon: '💼', gradient: 'from-purple-500 to-pink-500' }
          ]
        },
        fullTeam: {
          title: 'Equipo Completo',
          description: 'Todos nuestros profesionales especializados',
          members: [
            { id: '1', name: 'Carlos Mendoza', position: 'Instructor Senior', bio: 'Especialista en trabajos en altura', phone: '+57 300 123 4569', email: 'carlos.mendoza@iscor.com', linkedin: 'linkedin.com/in/carlosmendoza', image: '/team/carlos.jpg', gradient: 'from-orange-500 to-red-500' },
            { id: '2', name: 'María González', position: 'Coordinadora de Certificaciones', bio: 'Experta en normativas internacionales', phone: '+57 300 123 4570', email: 'maria.gonzalez@iscor.com', linkedin: 'linkedin.com/in/mariagonzalez', image: '/team/maria.jpg', gradient: 'from-green-500 to-teal-500' }
          ]
        }
      },
      contact: {
        hero: {
          title: 'Contáctanos',
          subtitle: 'Estamos aquí para ayudarte',
          description: 'Comunícate con nuestro equipo de especialistas',
          stats: {
            phone: '+57 300 123 4567',
            email: 'contacto@iscor.com',
            location: 'Bogotá, Colombia'
          }
        },
        form: {
          title: 'Envíanos un mensaje',
          description: 'Completa el formulario y nos pondremos en contacto contigo',
          fields: [
            { id: '1', name: 'nombre', type: 'text', placeholder: 'Tu nombre completo', required: true },
            { id: '2', name: 'email', type: 'email', placeholder: 'Tu correo electrónico', required: true },
            { id: '3', name: 'telefono', type: 'tel', placeholder: 'Tu número de teléfono', required: false },
            { id: '4', name: 'mensaje', type: 'textarea', placeholder: 'Tu mensaje', required: true }
          ]
        },
        info: {
          title: 'Información de Contacto',
          description: 'Diferentes formas de contactarnos',
          items: [
            { id: '1', title: 'Oficina Principal', description: 'Calle 123 #45-67, Bogotá', icon: '🏢', gradient: 'from-blue-500 to-cyan-500' },
            { id: '2', title: 'Teléfono', description: '+57 300 123 4567', icon: '📞', gradient: 'from-green-500 to-emerald-500' },
            { id: '3', title: 'Email', description: 'contacto@iscor.com', icon: '✉️', gradient: 'from-purple-500 to-pink-500' }
          ]
        },
        faq: {
          title: 'Preguntas Frecuentes',
          description: 'Resolvemos tus dudas más comunes',
          items: [
            { id: '1', question: '¿Qué certificaciones ofrecen?', answer: 'Ofrecemos certificaciones en trabajos en altura, espacios confinados, primeros auxilios y más.' },
            { id: '2', question: '¿Cuánto duran los cursos?', answer: 'Los cursos varían entre 16 y 80 horas dependiendo del tipo de certificación.' },
            { id: '3', question: '¿Los certificados son oficiales?', answer: 'Sí, todos nuestros certificados son oficiales y reconocidos por las autoridades competentes.' }
          ]
        }
      },
      global: {
        company: {
          name: 'ISCOR',
          slogan: 'Seguridad Industrial Integral',
          logo: '/iscor_logo_colores.svg',
          favicon: '/favicon.ico'
        },
        contact: {
          phone: '+57 300 123 4567',
          email: 'contacto@iscor.com',
          address: 'Calle 123 #45-67, Bogotá, Colombia',
          whatsapp: '+57 300 123 4567',
          social: {
            facebook: 'https://facebook.com/iscor',
            instagram: 'https://instagram.com/iscor',
            linkedin: 'https://linkedin.com/company/iscor',
            twitter: 'https://twitter.com/iscor'
          }
        },
        seo: {
          title: 'ISCOR - Seguridad Industrial | Capacitación y Certificación',
          description: 'Empresa líder en capacitación y certificación en seguridad industrial. Cursos certificados en trabajos en altura, espacios confinados, primeros auxilios y más.',
          keywords: 'seguridad industrial, capacitación, certificación, trabajos en altura, espacios confinados, primeros auxilios, montacargas, buceo industrial'
        }
      }
    };

    if (subsection) {
      return defaults[section]?.[subsection] || {};
    }
    return defaults[section] || {};
  }

  const handleInputChange = (field: string, value: any) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setContent((prev: any) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setContent((prev: any) => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleArrayChange = (field: string, index: number, value: any) => {
    setContent((prev: any) => ({
      ...prev,
      [field]: prev[field].map((item: any, i: number) => 
        i === index ? { ...item, ...value } : item
      )
    }));
  };

  const addArrayItem = (field: string, newItem: any) => {
    setContent((prev: any) => ({
      ...prev,
      [field]: [...prev[field], { ...newItem, id: Date.now().toString() }]
    }));
  };

  const removeArrayItem = (field: string, index: number) => {
    setContent((prev: any) => ({
      ...prev,
      [field]: prev[field].filter((_: any, i: number) => i !== index)
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    onSave(content);
    setIsSaving(false);
  };

  const renderInput = (field: string, label: string, type: string = 'text', placeholder?: string) => {
    const getValue = (field: string) => {
      if (field.includes('.')) {
        const [parent, child] = field.split('.');
        return content[parent]?.[child] || '';
      }
      return content[field] || '';
    };

    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-700">{label}</label>
        {type === 'textarea' ? (
          <textarea
            value={getValue(field)}
            onChange={(e) => handleInputChange(field, e.target.value)}
            placeholder={placeholder}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
          />
        ) : (
          <input
            type={type}
            value={getValue(field)}
            onChange={(e) => handleInputChange(field, e.target.value)}
            placeholder={placeholder}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        )}
      </div>
    );
  };

  const renderArrayField = (field: string, label: string, fields: string[]) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-slate-700">{label}</label>
        <button
          onClick={() => addArrayItem(field, fields.reduce((acc, f) => ({ ...acc, [f]: '' }), {}))}
          className="p-1 text-blue-600 hover:bg-blue-50 rounded"
        >
          <PlusIcon className="h-4 w-4" />
        </button>
      </div>
      {content[field]?.map((item: any, index: number) => (
        <div key={index} className="p-4 border border-slate-200 rounded-lg space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-600">Elemento {index + 1}</span>
            <button
              onClick={() => removeArrayItem(field, index)}
              className="p-1 text-red-600 hover:bg-red-50 rounded"
            >
              <TrashIcon className="h-4 w-4" />
            </button>
          </div>
          {fields.map((fieldName) => (
            <input
              key={fieldName}
              value={item[fieldName] || ''}
              onChange={(e) => handleArrayChange(field, index, { [fieldName]: e.target.value })}
              placeholder={`${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ))}
        </div>
      ))}
    </div>
  );

  const renderPreview = () => {
         const sectionTitle = {
       home: 'Página de Inicio',
       company: 'Página de Empresa',
       team: 'Página de Equipo',
       contact: 'Página de Contacto',
       global: 'Configuración Global'
     }[section];

     const subsectionTitle = {
       hero: 'Sección Hero',
       services: 'Servicios Destacados',
       features: 'Características Principales',
       testimonials: 'Testimonios de Clientes',
       about: 'Información de la Empresa',
       mission: 'Misión y Visión',
       strengths: 'Fortalezas y Valores',
       leadership: 'Equipo de Liderazgo',
       departments: 'Departamentos',
       fullTeam: 'Equipo Completo',
       form: 'Formulario de Contacto',
       info: 'Información de Contacto',
       faq: 'Preguntas Frecuentes',
       company: 'Información de la Empresa',
       contact: 'Información de Contacto',
       seo: 'Configuración SEO'
     }[subsection || ''];

    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h4 className="text-lg font-semibold text-slate-900 mb-4">
          Vista Previa: {sectionTitle} - {subsectionTitle}
        </h4>
        <div className="space-y-4">
          {subsection === 'hero' && (
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
                {content.badge || 'Badge'}
              </span>
              <h1 className="text-3xl font-bold mb-2">{content.title || 'Título'}</h1>
              <p className="text-lg mb-6">{content.subtitle || 'Subtítulo'}</p>
              {content.stats && (
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(content.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold">{value as string}</div>
                      <div className="text-sm opacity-90">{key}</div>
                    </div>
                  ))}
                </div>
              )}
              {content.ctaButtons && (
                <div className="flex gap-4">
                  <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium">
                    {content.ctaButtons.primary?.text || 'Botón Principal'}
                  </button>
                  <button className="px-6 py-2 border border-white text-white rounded-lg font-medium">
                    {content.ctaButtons.secondary?.text || 'Botón Secundario'}
                  </button>
                </div>
              )}
            </div>
          )}

          {(subsection === 'services' || subsection === 'features') && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {content.items?.map((item: any, index: number) => (
                <div key={index} className="p-4 border border-slate-200 rounded-lg">
                  <div className="text-2xl mb-2">{item.icon || '📋'}</div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.name || item.title || 'Título'}</h3>
                  <p className="text-sm text-slate-600">{item.description || 'Descripción'}</p>
                </div>
              ))}
            </div>
          )}

          {subsection === 'testimonials' && (
            <div className="space-y-4">
              {content.items?.map((item: any, index: number) => (
                <div key={index} className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>{i < (item.rating || 5) ? '★' : '☆'}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-700 mb-2">"{item.content || 'Testimonio'}"</p>
                  <div className="text-sm text-slate-600">
                    <strong>{item.name || 'Nombre'}</strong> - {item.position || 'Cargo'} en {item.company || 'Empresa'}
                  </div>
                </div>
              ))}
            </div>
          )}

          {subsection === 'about' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">{content.title || 'Título'}</h2>
              <p className="text-slate-700">{content.description || 'Descripción'}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Servicios</h3>
                  <ul className="list-disc list-inside text-sm text-slate-600">
                    {content.services?.map((service: string, index: number) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Certificaciones</h3>
                  <ul className="list-disc list-inside text-sm text-slate-600">
                    {content.certifications?.map((cert: string, index: number) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {(subsection === 'mission' || subsection === 'vision') && (
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{content.title || 'Título'}</h2>
              <p className="text-slate-700 text-lg">{content.description || 'Descripción'}</p>
            </div>
          )}

          {(subsection === 'strengths' || subsection === 'values') && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {content.items?.map((item: any, index: number) => (
                <div key={index} className="p-4 border border-slate-200 rounded-lg text-center">
                  <div className="text-3xl mb-2">{item.icon || '📋'}</div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title || 'Título'}</h3>
                  <p className="text-sm text-slate-600">{item.description || 'Descripción'}</p>
                </div>
              ))}
            </div>
          )}

          {subsection === 'leadership' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.members?.map((member: any, index: number) => (
                <div key={index} className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-3 text-lg">
                      {member.name?.charAt(0) || 'U'}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{member.name || 'Nombre'}</h3>
                      <p className="text-sm text-slate-600">{member.position || 'Cargo'}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 mb-2">{member.bio || 'Biografía'}</p>
                  <div className="text-xs text-slate-500">
                    <div>{member.phone || 'Teléfono'}</div>
                    <div>{member.email || 'Email'}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {subsection === 'departments' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {content.items?.map((dept: any, index: number) => (
                <div key={index} className="p-4 border border-slate-200 rounded-lg">
                  <div className="text-2xl mb-2">{dept.icon || '🏢'}</div>
                  <h3 className="font-semibold text-slate-900 mb-1">{dept.name || 'Departamento'}</h3>
                  <p className="text-sm text-slate-600 mb-2">{dept.description || 'Descripción'}</p>
                  <div className="text-xs text-slate-500">{dept.members || 0} miembros</div>
                </div>
              ))}
            </div>
          )}

          {subsection === 'form' && (
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{content.title || 'Formulario'}</h2>
              <p className="text-slate-600 mb-6">{content.description || 'Descripción'}</p>
              <div className="space-y-4">
                {content.fields?.map((field: any, index: number) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      {field.name?.charAt(0).toUpperCase() + field.name?.slice(1) || 'Campo'}
                      {field.required && <span className="text-red-500">*</span>}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        placeholder={field.placeholder || 'Placeholder'}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                        rows={4}
                      />
                    ) : (
                      <input
                        type={field.type || 'text'}
                        placeholder={field.placeholder || 'Placeholder'}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                      />
                    )}
                  </div>
                ))}
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
                  Enviar Mensaje
                </button>
              </div>
            </div>
          )}

          {subsection === 'info' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {content.items?.map((item: any, index: number) => (
                <div key={index} className="p-4 border border-slate-200 rounded-lg text-center">
                  <div className="text-3xl mb-2">{item.icon || '📋'}</div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title || 'Título'}</h3>
                  <p className="text-sm text-slate-600">{item.description || 'Descripción'}</p>
                </div>
              ))}
            </div>
          )}

                     {subsection === 'faq' && (
             <div className="space-y-4">
               {content.items?.map((item: any, index: number) => (
                 <div key={index} className="border border-slate-200 rounded-lg">
                   <div className="p-4 bg-slate-50">
                     <h3 className="font-semibold text-slate-900">{item.question || 'Pregunta'}</h3>
                   </div>
                   <div className="p-4">
                     <p className="text-slate-700">{item.answer || 'Respuesta'}</p>
                   </div>
                 </div>
               ))}
             </div>
           )}

           {subsection === 'company' && (
             <div className="space-y-4">
               <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                 <h2 className="text-2xl font-bold text-slate-900 mb-4">Información de la Empresa</h2>
                 <div className="space-y-3">
                   <div>
                     <span className="font-semibold text-slate-700">Nombre:</span>
                     <p className="text-slate-600">{content.name || 'Nombre de la empresa'}</p>
                   </div>
                   <div>
                     <span className="font-semibold text-slate-700">Slogan:</span>
                     <p className="text-slate-600">{content.slogan || 'Slogan de la empresa'}</p>
                   </div>
                   <div>
                     <span className="font-semibold text-slate-700">Logo:</span>
                     <p className="text-slate-600">{content.logo || '/logo.svg'}</p>
                   </div>
                   <div>
                     <span className="font-semibold text-slate-700">Favicon:</span>
                     <p className="text-slate-600">{content.favicon || '/favicon.ico'}</p>
                   </div>
                 </div>
               </div>
             </div>
           )}

           {subsection === 'contact' && (
             <div className="space-y-4">
               <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                 <h2 className="text-2xl font-bold text-slate-900 mb-4">Información de Contacto</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                     <span className="font-semibold text-slate-700">Teléfono:</span>
                     <p className="text-slate-600">{content.phone || '+57 300 123 4567'}</p>
                   </div>
                   <div>
                     <span className="font-semibold text-slate-700">Email:</span>
                     <p className="text-slate-600">{content.email || 'contacto@iscor.com'}</p>
                   </div>
                   <div>
                     <span className="font-semibold text-slate-700">Dirección:</span>
                     <p className="text-slate-600">{content.address || 'Bogotá, Colombia'}</p>
                   </div>
                   <div>
                     <span className="font-semibold text-slate-700">WhatsApp:</span>
                     <p className="text-slate-600">{content.whatsapp || '+57 300 123 4567'}</p>
                   </div>
                 </div>
                 {content.social && (
                   <div className="mt-4">
                     <h3 className="font-semibold text-slate-700 mb-2">Redes Sociales:</h3>
                     <div className="grid grid-cols-2 gap-2 text-sm">
                       <div>Facebook: {content.social.facebook || 'N/A'}</div>
                       <div>Instagram: {content.social.instagram || 'N/A'}</div>
                       <div>LinkedIn: {content.social.linkedin || 'N/A'}</div>
                       <div>Twitter: {content.social.twitter || 'N/A'}</div>
                     </div>
                   </div>
                 )}
               </div>
             </div>
           )}

           {subsection === 'seo' && (
             <div className="space-y-4">
               <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                 <h2 className="text-2xl font-bold text-slate-900 mb-4">Configuración SEO</h2>
                 <div className="space-y-4">
                   <div>
                     <span className="font-semibold text-slate-700">Título:</span>
                     <p className="text-slate-600">{content.title || 'Título SEO'}</p>
                   </div>
                   <div>
                     <span className="font-semibold text-slate-700">Descripción:</span>
                     <p className="text-slate-600">{content.description || 'Descripción SEO'}</p>
                   </div>
                   <div>
                     <span className="font-semibold text-slate-700">Palabras Clave:</span>
                     <p className="text-slate-600">{content.keywords || 'Palabras clave SEO'}</p>
                   </div>
                 </div>
               </div>
             </div>
           )}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <PencilIcon className="h-5 w-5 text-white" />
            </div>
            <div>
                             <h3 className="text-xl font-semibold text-slate-900">
                 Editando: {section === 'home' ? 'Página de Inicio' : 
                            section === 'company' ? 'Página de Empresa' :
                            section === 'team' ? 'Página de Equipo' :
                            section === 'contact' ? 'Página de Contacto' :
                            section === 'global' ? 'Configuración Global' : 'Contenido'}
                 {subsection && ` - ${subsection}`}
               </h3>
              <p className="text-sm text-slate-600">Edita el contenido y ve los cambios en vivo</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                showPreview 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <EyeIcon className="h-4 w-4 mr-2 inline" />
              {showPreview ? 'Ocultar Vista Previa' : 'Mostrar Vista Previa'}
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
        <div className="flex h-[calc(95vh-120px)]">
          {/* Editor Panel */}
          <div className={`${showPreview ? 'w-1/2' : 'w-full'} p-6 overflow-y-auto border-r border-slate-200`}>
            <div className="space-y-6">
              {subsection === 'hero' && (
                <>
                  {renderInput('badge', 'Badge', 'text', 'Texto del badge')}
                  {renderInput('title', 'Título Principal', 'text', 'Título principal')}
                  {renderInput('subtitle', 'Subtítulo', 'text', 'Subtítulo descriptivo')}
                  {content.stats && (
                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-slate-700">Estadísticas</label>
                      {Object.keys(content.stats).map((stat) => (
                        <input
                          key={stat}
                          value={content.stats[stat] || ''}
                          onChange={(e) => handleInputChange('stats', { ...content.stats, [stat]: e.target.value })}
                          placeholder={stat}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      ))}
                    </div>
                  )}
                  {content.ctaButtons && (
                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-slate-700">Botones CTA</label>
                      {Object.keys(content.ctaButtons).map((button) => (
                        <div key={button} className="space-y-2">
                          <input
                            value={content.ctaButtons[button]?.text || ''}
                            onChange={(e) => handleInputChange('ctaButtons', { 
                              ...content.ctaButtons, 
                              [button]: { ...content.ctaButtons[button], text: e.target.value }
                            })}
                            placeholder={`Texto del botón ${button}`}
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <input
                            value={content.ctaButtons[button]?.link || ''}
                            onChange={(e) => handleInputChange('ctaButtons', { 
                              ...content.ctaButtons, 
                              [button]: { ...content.ctaButtons[button], link: e.target.value }
                            })}
                            placeholder={`Enlace del botón ${button}`}
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {(subsection === 'services' || subsection === 'features') && (
                <>
                  {renderInput('title', 'Título de la sección', 'text', 'Título')}
                  {renderInput('description', 'Descripción', 'textarea', 'Descripción de la sección')}
                  {renderArrayField('items', 'Elementos', ['name', 'description', 'icon'])}
                </>
              )}

              {subsection === 'testimonials' && (
                <>
                  {renderInput('title', 'Título de la sección', 'text', 'Título')}
                  {renderInput('description', 'Descripción', 'textarea', 'Descripción de la sección')}
                  {renderArrayField('items', 'Testimonios', ['name', 'position', 'company', 'content', 'rating'])}
                </>
              )}

              {subsection === 'about' && (
                <>
                  {renderInput('title', 'Título', 'text', 'Título de la sección')}
                  {renderInput('description', 'Descripción', 'textarea', 'Descripción de la empresa')}
                  {renderInput('experience', 'Años de experiencia', 'text', 'Ej: 15+ años')}
                  {renderArrayField('services', 'Servicios', ['service'])}
                  {renderArrayField('certifications', 'Certificaciones', ['certification'])}
                </>
              )}

              {(subsection === 'mission' || subsection === 'vision') && (
                <>
                  {renderInput('title', 'Título', 'text', 'Misión o Visión')}
                  {renderInput('description', 'Descripción', 'textarea', 'Descripción detallada')}
                </>
              )}

              {(subsection === 'strengths' || subsection === 'values') && (
                <>
                  {renderInput('title', 'Título de la sección', 'text', 'Título')}
                  {renderInput('description', 'Descripción', 'textarea', 'Descripción de la sección')}
                  {renderArrayField('items', 'Elementos', ['title', 'description', 'icon'])}
                </>
              )}

              {subsection === 'leadership' && (
                <>
                  {renderInput('title', 'Título de la sección', 'text', 'Título')}
                  {renderInput('description', 'Descripción', 'textarea', 'Descripción de la sección')}
                  {renderArrayField('members', 'Miembros del equipo', ['name', 'position', 'bio', 'phone', 'email', 'linkedin'])}
                </>
              )}

              {subsection === 'departments' && (
                <>
                  {renderInput('title', 'Título de la sección', 'text', 'Título')}
                  {renderInput('description', 'Descripción', 'textarea', 'Descripción de la sección')}
                  {renderArrayField('items', 'Departamentos', ['name', 'description', 'members', 'icon'])}
                </>
              )}

              {subsection === 'form' && (
                <>
                  {renderInput('title', 'Título del formulario', 'text', 'Título')}
                  {renderInput('description', 'Descripción', 'textarea', 'Descripción del formulario')}
                  {renderArrayField('fields', 'Campos del formulario', ['name', 'type', 'placeholder', 'required'])}
                </>
              )}

              {subsection === 'info' && (
                <>
                  {renderInput('title', 'Título de la sección', 'text', 'Título')}
                  {renderInput('description', 'Descripción', 'textarea', 'Descripción de la sección')}
                  {renderArrayField('items', 'Elementos de información', ['title', 'description', 'icon'])}
                </>
              )}

                             {subsection === 'faq' && (
                 <>
                   {renderInput('title', 'Título de la sección', 'text', 'Título')}
                   {renderInput('description', 'Descripción', 'textarea', 'Descripción de la sección')}
                   {renderArrayField('items', 'Preguntas frecuentes', ['question', 'answer'])}
                 </>
               )}

               {subsection === 'company' && (
                 <>
                   {renderInput('name', 'Nombre de la empresa', 'text', 'Nombre de la empresa')}
                   {renderInput('slogan', 'Slogan', 'text', 'Slogan de la empresa')}
                   {renderInput('logo', 'Ruta del logo', 'text', '/logo.svg')}
                   {renderInput('favicon', 'Ruta del favicon', 'text', '/favicon.ico')}
                 </>
               )}

               {subsection === 'contact' && (
                 <>
                   {renderInput('phone', 'Teléfono', 'tel', '+57 300 123 4567')}
                   {renderInput('email', 'Email', 'email', 'contacto@iscor.com')}
                   {renderInput('address', 'Dirección', 'text', 'Bogotá, Colombia')}
                   {renderInput('whatsapp', 'WhatsApp', 'tel', '+57 300 123 4567')}
                   <div className="space-y-4">
                     <label className="block text-sm font-medium text-slate-700">Redes Sociales</label>
                     {content.social && (
                       <>
                         {renderInput('social.facebook', 'Facebook', 'url', 'https://facebook.com/iscor')}
                         {renderInput('social.instagram', 'Instagram', 'url', 'https://instagram.com/iscor')}
                         {renderInput('social.linkedin', 'LinkedIn', 'url', 'https://linkedin.com/company/iscor')}
                         {renderInput('social.twitter', 'Twitter', 'url', 'https://twitter.com/iscor')}
                       </>
                     )}
                   </div>
                 </>
               )}

               {subsection === 'seo' && (
                 <>
                   {renderInput('title', 'Título SEO', 'text', 'Título para motores de búsqueda')}
                   {renderInput('description', 'Descripción SEO', 'textarea', 'Descripción para motores de búsqueda')}
                   {renderInput('keywords', 'Palabras clave', 'text', 'palabras, clave, separadas, por, comas')}
                 </>
               )}

              {/* Save Button */}
              <div className="pt-6 border-t border-slate-200">
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center"
                >
                  {isSaving ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Guardando...
                    </>
                  ) : (
                    <>
                      <CheckIcon className="h-4 w-4 mr-2" />
                      Guardar Cambios
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          {showPreview && (
            <div className="w-1/2 p-6 overflow-y-auto bg-slate-50">
              {renderPreview()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
