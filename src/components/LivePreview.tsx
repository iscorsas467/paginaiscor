'use client';

import React from 'react';
import Image from 'next/image';
import { 
  CheckCircleIcon,
  ClockIcon,
  UserIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

interface LivePreviewProps {
  section: string;
  subsection: string;
  data: any;
}

export default function LivePreview({ section, subsection, data }: LivePreviewProps) {
  const renderHomePreview = () => {
    switch (subsection) {
      case 'hero':
        return (
          <div className="space-y-6">
            <div className="text-center py-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white">
              <span className="inline-block px-4 py-2 bg-blue-500 rounded-full text-sm font-medium mb-4">
                {data.badge || 'Empresa Líder'}
              </span>
              <h1 className="text-4xl font-bold mb-4">
                {data.title || 'ISCOR - Ingeniería, Seguridad y Control de Riesgos'}
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                {data.subtitle || 'Soluciones integrales en seguridad industrial y capacitación profesional'}
              </p>
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                {data.stats && Object.entries(data.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold">{value as string}</div>
                    <div className="text-sm text-blue-200 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'services':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {data.title || 'Nuestros Servicios'}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                {data.description || 'Ofrecemos una amplia gama de servicios en seguridad industrial'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.items && data.items.map((item: any, index: number) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {item.name || `Servicio ${index + 1}`}
                  </h3>
                  <p className="text-slate-600">
                    {item.description || 'Descripción del servicio'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {data.title || 'Características Principales'}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                {data.description || 'Descripción de características'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.items && data.items.map((item: any, index: number) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {item.title || `Característica ${index + 1}`}
                  </h3>
                  <p className="text-slate-600">
                    {item.description || 'Descripción de la característica'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'testimonials':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {data.title || 'Testimonios de Clientes'}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                {data.description || 'Lo que dicen nuestros clientes'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.items && data.items.map((item: any, index: number) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                  <p className="text-slate-600 mb-4 italic">
                    "{item.content || 'Testimonio del cliente'}"
                  </p>
                  <div>
                    <div className="font-semibold text-slate-900">{item.name || 'Cliente'}</div>
                    <div className="text-sm text-slate-600">{item.position || 'Cargo'} - {item.company || 'Empresa'}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-8">
            <p className="text-slate-600">Vista previa para {subsection}</p>
          </div>
        );
    }
  };

  const renderCompanyPreview = () => {
    switch (subsection) {
      case 'hero':
        return (
          <div className="space-y-6">
            <div className="text-center py-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white">
              <h1 className="text-4xl font-bold mb-4">
                {data.title || 'Sobre ISCOR'}
              </h1>
              <p className="text-xl text-purple-100 mb-4">
                {data.subtitle || 'Líderes en seguridad industrial'}
              </p>
              <p className="text-lg text-purple-200 max-w-3xl mx-auto">
                {data.description || 'ISCOR es una empresa especializada en ingeniería, seguridad y control de riesgos, comprometida con la excelencia y la innovación en el sector industrial.'}
              </p>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {data.title || 'Sobre Nuestra Empresa'}
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                {data.description || 'Descripción detallada de la empresa'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Servicios</h3>
                <ul className="space-y-2">
                  {data.services && data.services.map((service: string, index: number) => (
                    <li key={index} className="flex items-center text-slate-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Certificaciones</h3>
                <ul className="space-y-2">
                  {data.certifications && data.certifications.map((cert: string, index: number) => (
                    <li key={index} className="flex items-center text-slate-600">
                      <ShieldCheckIcon className="h-4 w-4 text-blue-500 mr-2" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 'mission':
        return (
          <div className="space-y-6">
            <div className="text-center py-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {data.title || 'Nuestra Misión'}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {data.description || 'Descripción de la misión'}
              </p>
            </div>
          </div>
        );

      case 'vision':
        return (
          <div className="space-y-6">
            <div className="text-center py-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {data.title || 'Nuestra Visión'}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {data.description || 'Descripción de la visión'}
              </p>
            </div>
          </div>
        );

      case 'strengths':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {data.title || 'Nuestras Fortalezas'}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                {data.description || 'Descripción de fortalezas'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.items && data.items.map((item: any, index: number) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {item.title || `Fortaleza ${index + 1}`}
                  </h3>
                  <p className="text-slate-600">
                    {item.description || 'Descripción de la fortaleza'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'values':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {data.title || 'Nuestros Valores'}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                {data.description || 'Descripción de valores'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.items && data.items.map((item: any, index: number) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {item.title || `Valor ${index + 1}`}
                  </h3>
                  <p className="text-slate-600">
                    {item.description || 'Descripción del valor'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-8">
            <p className="text-slate-600">Vista previa para {subsection}</p>
          </div>
        );
    }
  };

  const renderTeamPreview = () => {
    switch (subsection) {
      case 'hero':
        return (
          <div className="space-y-6">
            <div className="text-center py-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl text-white">
              <h1 className="text-4xl font-bold mb-4">
                {data.title || 'Nuestro Equipo'}
              </h1>
              <p className="text-xl text-orange-100 mb-4">
                {data.subtitle || 'Profesionales comprometidos'}
              </p>
              <p className="text-lg text-orange-200 mb-8 max-w-3xl mx-auto">
                {data.description || 'Contamos con un equipo de expertos altamente calificados en seguridad industrial y capacitación profesional.'}
              </p>
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                {data.stats && Object.entries(data.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold">{value as string}</div>
                    <div className="text-sm text-orange-200 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'leadership':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {data.title || 'Equipo de Liderazgo'}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                {data.description || 'Nuestros líderes'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.members && data.members.map((member: any, index: number) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <UserIcon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {member.name || `Miembro ${index + 1}`}
                  </h3>
                  <p className="text-slate-600 mb-2">{member.position || 'Cargo'}</p>
                  <p className="text-sm text-slate-500">{member.bio || 'Biografía'}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'departments':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {data.title || 'Departamentos'}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                {data.description || 'Nuestros departamentos'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.items && data.items.map((dept: any, index: number) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {dept.name || `Departamento ${index + 1}`}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {dept.description || 'Descripción del departamento'}
                  </p>
                  <div className="flex items-center text-sm text-slate-500">
                    <UserGroupIcon className="h-4 w-4 mr-2" />
                    {dept.members || 0} miembros
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-8">
            <p className="text-slate-600">Vista previa para {subsection}</p>
          </div>
        );
    }
  };

  const renderContactPreview = () => {
    switch (subsection) {
      case 'hero':
        return (
          <div className="space-y-6">
            <div className="text-center py-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white">
              <h1 className="text-4xl font-bold mb-4">
                {data.title || 'Contáctanos'}
              </h1>
              <p className="text-xl text-blue-100 mb-4">
                {data.subtitle || 'Estamos aquí para ayudarte'}
              </p>
              <p className="text-lg text-blue-200 mb-8 max-w-3xl mx-auto">
                {data.description || 'Nuestro equipo está disponible para responder tus consultas y brindarte la mejor asesoría en seguridad industrial.'}
              </p>
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                {data.stats && Object.entries(data.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-semibold">{value as string}</div>
                    <div className="text-sm text-blue-200 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'form':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {data.title || 'Formulario de Contacto'}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                {data.description || 'Envíanos un mensaje'}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <form className="space-y-4">
                {data.fields && data.fields.map((field: any, index: number) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {field.name || `Campo ${index + 1}`}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows={4}
                        placeholder={field.placeholder || 'Ingresa tu mensaje'}
                      />
                    ) : (
                      <input
                        type={field.type || 'text'}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={field.placeholder || `Ingresa ${field.name}`}
                      />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        );

      case 'info':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {data.title || 'Información de Contacto'}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                {data.description || 'Nuestros datos de contacto'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.items && data.items.map((item: any, index: number) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {item.title || `Contacto ${index + 1}`}
                  </h3>
                  <p className="text-slate-600">
                    {item.description || 'Información de contacto'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'faq':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {data.title || 'Preguntas Frecuentes'}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                {data.description || 'Respuestas a preguntas comunes'}
              </p>
            </div>
            <div className="space-y-4">
              {data.items && data.items.map((item: any, index: number) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {item.question || `Pregunta ${index + 1}`}
                  </h3>
                  <p className="text-slate-600">
                    {item.answer || 'Respuesta a la pregunta'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-8">
            <p className="text-slate-600">Vista previa para {subsection}</p>
          </div>
        );
    }
  };

  const renderGlobalPreview = () => {
    switch (subsection) {
      case 'company':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Información de la Empresa
              </h2>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Nombre de la Empresa</label>
                  <p className="text-lg font-semibold text-slate-900">{data.name || 'ISCOR'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Slogan</label>
                  <p className="text-slate-600">{data.slogan || 'Slogan de la empresa'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Logo</label>
                  <div className="w-32 h-16 bg-slate-100 rounded-lg flex items-center justify-center">
                    <BuildingOfficeIcon className="h-8 w-8 text-slate-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Información de Contacto
              </h2>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-slate-600" />
                  <span className="text-slate-900">{data.phone || '+57 300 123 4567'}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-slate-600" />
                  <span className="text-slate-900">{data.email || 'contacto@iscor.com'}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="h-5 w-5 text-slate-600" />
                  <span className="text-slate-900">{data.address || 'Bogotá, Colombia'}</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'seo':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Configuración SEO
              </h2>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Título SEO</label>
                  <p className="text-slate-900">{data.title || 'Título SEO'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Descripción SEO</label>
                  <p className="text-slate-600">{data.description || 'Descripción SEO'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Palabras Clave</label>
                  <p className="text-slate-600">{data.keywords || 'Palabras clave'}</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-8">
            <p className="text-slate-600">Vista previa para {subsection}</p>
          </div>
        );
    }
  };

  switch (section) {
    case 'home':
      return renderHomePreview();
    case 'company':
      return renderCompanyPreview();
    case 'team':
      return renderTeamPreview();
    case 'contact':
      return renderContactPreview();
    case 'global':
      return renderGlobalPreview();
    default:
      return (
        <div className="text-center py-8">
          <p className="text-slate-600">Vista previa no disponible para esta sección</p>
        </div>
      );
  }
}
