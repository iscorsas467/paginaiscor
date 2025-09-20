'use client';

import { useState, useEffect } from 'react';
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
import CallModal from '@/components/CallModal';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [contactData, setContactData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  // Cargar datos de contacto desde la API
  useEffect(() => {
    const loadContactData = async () => {
      try {
        const response = await fetch('/api/page-content?page=contact');
        if (response.ok) {
          const data = await response.json();
          setContactData(data.data);
        }
      } catch (error) {
        console.error('Error loading contact data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContactData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Enviar datos al panel de administración
      const response = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseName: formData.servicio ? `Contacto General - ${formData.servicio}` : 'Contacto General',
          courseSlug: 'contacto-general',
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          empresa: formData.empresa || null,
          mensaje: `Servicio de interés: ${formData.servicio || 'No especificado'}\n\nMensaje: ${formData.mensaje}`
        })
      });

      if (response.ok) {
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
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al enviar el mensaje');
      }
    } catch (error: any) {
      setSubmitError(error.message);
      console.error('Error enviando formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Horarios de atención
  const businessHours = [
    { day: 'Lunes a Viernes', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sábados', hours: '8:00 AM - 12:00 PM' },
    { day: 'Emergencias', hours: '24/7' }
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
                <div className="text-4xl font-bold text-blue-400 mb-2">29</div>
                <div className="text-sm text-gray-300 font-medium">Cursos Especializados</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">20+</div>
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

                    {submitError && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                        <p className="text-red-700 font-medium">
                          {submitError}
                        </p>
                      </div>
                    )}

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-center text-lg font-semibold text-white shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-cyan-700 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Enviando...
                          </span>
                        ) : (
                          'Enviar Mensaje'
                        )}
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
                  {loading ? (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                      <p className="text-slate-600 mt-2">Cargando información de contacto...</p>
                    </div>
                  ) : contactData?.contactInfo?.contact_info_items ? (
                    contactData.contactInfo.contact_info_items.map((item: any) => (
                      <div 
                        key={item.id} 
                        className="group flex items-start p-6 rounded-2xl bg-slate-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-100"
                      >
                        <div className="flex-shrink-0">
                          <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-2xl">{item.icon}</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                          <p className="text-sm text-slate-600 font-medium">{item.description}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    // Fallback con datos estáticos si no hay datos en BD
                    [
                      {
                        id: 1,
                        title: 'Línea Nacional',
                        description: '314 807 08 53',
                        icon: '📞',
                        gradient: 'from-blue-500 to-blue-600'
                      },
                      {
                        id: 2,
                        title: 'Bogotá',
                        description: 'Cl. 95 #20-28 Torre 1 Of. 702',
                        icon: '📍',
                        gradient: 'from-green-500 to-green-600'
                      },
                      {
                        id: 3,
                        title: 'Cali',
                        description: 'Cl. 58 norte #5 BN 75 Torre 7 Of. 503',
                        icon: '📍',
                        gradient: 'from-purple-500 to-purple-600'
                      },
                      {
                        id: 4,
                        title: 'Correo Electrónico',
                        description: 'iscr@iscrcolombia.com.co',
                        icon: '✉️',
                        gradient: 'from-orange-500 to-orange-600'
                      },
                      {
                        id: 5,
                        title: 'Sitio Web',
                        description: 'www.iscrcolombia.com.co',
                        icon: '🌐',
                        gradient: 'from-cyan-500 to-cyan-600'
                      }
                    ].map((item) => (
                      <div 
                        key={item.id} 
                        className="group flex items-start p-6 rounded-2xl bg-slate-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-100"
                      >
                        <div className="flex-shrink-0">
                          <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-2xl">{item.icon}</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                          <p className="text-sm text-slate-600 font-medium">{item.description}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Horarios de Atención */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-slate-200">
                  <div className="flex items-center mb-4">
                    <ClockIcon className="h-6 w-6 text-blue-600 mr-3" />
                    <h4 className="text-lg font-semibold text-slate-900">
                      Horarios de Atención
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium text-slate-700">{schedule.day}:</span>
                        <span className="text-slate-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
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
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsCallModalOpen(true);
                }}
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center text-lg">
                  Llamar Ahora
                  <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </a>
              
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=director@iscorcolombia.com&su=Consulta de Servicios - ISCOR Colombia&body=Estimado Director,%0D%0A%0D%0AMe pongo en contacto con usted para solicitar información sobre los servicios de seguridad industrial de ISCOR Colombia.%0D%0A%0D%0AInformación de la consulta:%0D%0A- Empresa: [Nombre de su empresa]%0D%0A- Servicio de interés: [Especifique el servicio]%0D%0A- Número de empleados: [Cantidad aproximada]%0D%0A- Ubicación: [Ciudad/Departamento]%0D%0A- Fecha estimada: [Fecha deseada para el servicio]%0D%0A%0D%0ADetalles adicionales:%0D%0A[Describa sus necesidades específicas y cualquier requerimiento especial]%0D%0A%0D%0AEspero su respuesta para coordinar una reunión o llamada.%0D%0A%0D%0ASaludos cordiales,%0D%0A[Nombre]%0D%0A[Teléfono]%0D%0A[Email]"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-lg"
              >
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de llamada */}
      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        phoneNumber="3148070853"
      />
    </div>
  );
}
