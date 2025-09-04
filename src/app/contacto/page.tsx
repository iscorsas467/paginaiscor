'use client';

import { useState } from 'react';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nombre: '',
        email: '',
        empresa: '',
        telefono: '',
        servicio: '',
        mensaje: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      name: 'Dirección',
      value: 'Calle 15 # 23-45, Barrio Centro, Bogotá, Colombia',
      icon: MapPinIcon,
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Teléfono Principal',
      value: '+57 (1) 234-5678',
      icon: PhoneIcon,
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      name: 'Celular',
      value: '+57 300 123-4567',
      icon: PhoneIcon,
      gradient: 'from-purple-600 to-indigo-600'
    },
    {
      name: 'Email Principal',
      value: 'info@iscor.com.co',
      icon: EnvelopeIcon,
      gradient: 'from-orange-600 to-red-600'
    },
    {
      name: 'Email Comercial',
      value: 'comercial@iscor.com.co',
      icon: EnvelopeIcon,
      gradient: 'from-yellow-600 to-orange-600'
    },
    {
      name: 'Email Técnico',
      value: 'tecnico@iscor.com.co',
      icon: EnvelopeIcon,
      gradient: 'from-pink-600 to-rose-600'
    },
    {
      name: 'Horario de Atención',
      value: 'Lun - Vie: 8:00 AM - 6:00 PM | Sáb: 8:00 AM - 12:00 PM',
      icon: ClockIcon,
      gradient: 'from-slate-600 to-gray-600'
    },
  ];

  const services = [
    'Montacargas',
    'Control del Fuego',
    'Planes de emergencia',
    'Brigada de emergencia',
    'Materiales Peligrosos',
    'Tareas de alto riesgo',
    'Seguridad acuática',
    'Seguridad física',
    'Primeros auxilios',
    'Gestión de calidad',
    'Inspecciones certificadas',
    'Reintegro laboral',
    'Alturas',
    'Lockout tagout',
    'Espacios confinados',
    'Buceo',
    'Otro'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Estilo IBM/Cisco Profesional */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Background Pattern - Estilo Siemens */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Geometric Shapes - Estilo GE/Boeing */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rotate-45"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 transform rotate-12"></div>
          <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-white/10 transform -rotate-45"></div>
        </div>

        {/* Gradient Overlay - Estilo Lockheed Martin */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/60 to-slate-900/80"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge - Estilo Cisco */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
              <EnvelopeIcon className="h-5 w-5 mr-3" />
              Estamos aquí para ayudarte
            </div>
            
            {/* Main Heading - Estilo IBM */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
              <span className="text-white">Contáctanos</span>
            </h1>

            {/* Subtitle - Estilo Siemens */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              ¿Necesitas servicios de seguridad industrial? Estamos aquí para proteger a tu equipo y cumplir con las normativas de seguridad.
            </p>

            {/* Stats - Estilo Boeing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">24h</div>
                <div className="text-sm text-gray-300 font-medium">Respuesta Garantizada</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-sm text-gray-300 font-medium">Cumplimiento Normativo</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">18+</div>
                <div className="text-sm text-gray-300 font-medium">Años de Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info - Estilo Siemens Profesional */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Contact Form */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8">
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-lg mr-4">
                    <EnvelopeIcon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                    Envíanos un Mensaje
                  </h2>
                </div>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                    <CheckCircleIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-900 mb-2">
                      ¡Mensaje Enviado!
                    </h3>
                    <p className="text-green-700 text-lg">
                      Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="group">
                        <label htmlFor="nombre" className="block text-sm font-semibold text-slate-700 mb-3">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          name="nombre"
                          id="nombre"
                          required
                          value={formData.nombre}
                          onChange={handleChange}
                          className="block w-full rounded-xl border-2 border-slate-300 px-4 py-4 text-slate-900 shadow-lg placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white"
                          placeholder="Tu nombre completo"
                        />
                      </div>

                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full rounded-xl border-2 border-slate-300 px-4 py-4 text-slate-900 shadow-lg placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="group">
                        <label htmlFor="empresa" className="block text-sm font-semibold text-slate-700 mb-3">
                          Empresa
                        </label>
                        <input
                          type="text"
                          name="empresa"
                          id="empresa"
                          value={formData.empresa}
                          onChange={handleChange}
                          className="block w-full rounded-xl border-2 border-slate-300 px-4 py-4 text-slate-900 shadow-lg placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white"
                          placeholder="Nombre de tu empresa"
                        />
                      </div>

                      <div className="group">
                        <label htmlFor="telefono" className="block text-sm font-semibold text-slate-700 mb-3">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          name="telefono"
                          id="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          className="block w-full rounded-xl border-2 border-slate-300 px-4 py-4 text-slate-900 shadow-lg placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white"
                          placeholder="+57 300 123 4567"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="servicio" className="block text-sm font-semibold text-slate-700 mb-3">
                        Servicio de Interés
                      </label>
                      <select
                        name="servicio"
                        id="servicio"
                        value={formData.servicio}
                        onChange={handleChange}
                        className="block w-full rounded-xl border-2 border-slate-300 px-4 py-4 text-slate-900 shadow-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white"
                      >
                        <option value="">Selecciona un servicio</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="group">
                      <label htmlFor="mensaje" className="block text-sm font-semibold text-slate-700 mb-3">
                        Mensaje *
                      </label>
                      <textarea
                        name="mensaje"
                        id="mensaje"
                        rows={4}
                        required
                        value={formData.mensaje}
                        onChange={handleChange}
                        className="block w-full rounded-xl border-2 border-slate-300 px-4 py-4 text-slate-900 shadow-lg placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white resize-none"
                        placeholder="Cuéntanos sobre tu proyecto..."
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-center text-lg font-semibold text-white shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-cyan-700 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        Enviar Mensaje
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8">
              <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8">
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-lg mr-4">
                    <PhoneIcon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                    Información de Contacto
                  </h2>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div 
                      key={item.name} 
                      className="group flex items-start p-6 rounded-2xl bg-slate-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-100"
                    >
                      <div className="flex-shrink-0">
                        <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-bold text-slate-900 mb-1">{item.name}</h3>
                        <p className="text-sm text-slate-600 font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-12">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg mr-3">
                      <MapPinIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Ubicación</h3>
                  </div>
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg border border-slate-200">
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-50 to-blue-100">
                      <div className="text-center">
                        <MapPinIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                        <span className="text-slate-600 font-medium">Mapa de ubicación</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-12 p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg border border-slate-200">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl shadow-lg mr-3">
                      <CheckCircleIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      ¿Por qué elegir ISCOR?
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'Respuesta en menos de 24 horas',
                      'Evaluación gratuita de riesgos',
                      'Personal certificado y experto',
                      'Cumplimiento normativo garantizado',
                      'Seguimiento continuo y auditorías'
                    ].map((benefit, index) => (
                      <li 
                        key={benefit}
                        className="flex items-center text-sm text-slate-700 font-medium"
                      >
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Estilo GE Profesional */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
              <CheckCircleIcon className="h-5 w-5 mr-3" />
              Preguntas Frecuentes
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              ¿Tienes dudas?
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Resolvemos tus inquietudes sobre nuestros servicios de seguridad industrial.
            </p>
          </div>
          
          <div className="mx-auto mt-8 max-w-2xl lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2">
              {[
                {
                  question: '¿Cuánto tiempo toma implementar un programa de seguridad?',
                  answer: 'El tiempo varía según el alcance del programa. Capacitaciones básicas pueden tomar 1-2 días, mientras que programas completos de seguridad pueden requerir 2-4 semanas de implementación.',
                },
                {
                  question: '¿Ofrecen seguimiento y auditorías continuas?',
                  answer: 'Sí, ofrecemos auditorías periódicas, seguimiento de cumplimiento y soporte continuo para mantener los estándares de seguridad en tu empresa.',
                },
                {
                  question: '¿Trabajan con empresas de cualquier sector?',
                  answer: 'Absolutamente. Trabajamos con empresas industriales, comerciales, de servicios y construcción. Adaptamos nuestros servicios a las necesidades específicas de cada sector.',
                },
                {
                  question: '¿Cuál es el proceso de implementación de seguridad?',
                  answer: 'Nuestro proceso incluye: evaluación inicial de riesgos, diseño del programa, capacitación del personal, implementación de protocolos y seguimiento continuo.',
                },
              ].map((faq, index) => (
                <div
                  key={faq.question}
                  className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200"
                >
                  <dt className="text-xl font-bold leading-7 text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {faq.question}
                  </dt>
                  <dd className="text-base leading-7 text-slate-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section - Estilo Lockheed Martin Profesional */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/10 rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white/10 transform rotate-12"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
              <StarIcon className="h-5 w-5 mr-3" />
              Comienza Hoy
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              ¿Listo para proteger a tu equipo?
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a implementar las mejores prácticas de seguridad industrial en tu empresa.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a
                href="tel:+573001234567"
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center text-lg">
                  Llamar Ahora
                  <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </a>
              
              <a
                href="mailto:info@iscor.com.co"
                className="px-10 py-5 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-lg"
              >
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
