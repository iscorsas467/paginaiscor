'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown,
  Car,
  AlertTriangle,
  Flame,
  BookOpen,
  MapPin,
  Shield,
  Building,
  Users,
  Video,
  Headphones,
  Truck,
  Lock,
  Zap,
  Wrench,
  Heart,
  Camera,
  Eye,
  Briefcase
} from 'lucide-react';

// Datos específicos de Seguridad y Salud en el Trabajo
const safetyHealthServices = [
  {
    id: 'conductores-transportan',
    title: 'Certificación de conductores que transportan',
    icon: Car,
    description: 'Capacitación especializada para conductores que transportan materiales peligrosos, incluyendo normativas de seguridad vial, manejo de emergencias y protocolos de seguridad específicos.',
    details: 'Este curso incluye formación en normativas nacionales e internacionales, identificación de materiales peligrosos, protocolos de emergencia y certificación válida por 2 años.'
  },
  {
    id: 'control-derrames',
    title: 'Control de derrames',
    icon: AlertTriangle,
    description: 'Capacitación en técnicas de contención y limpieza de derrames de sustancias químicas, incluyendo equipos de protección personal y protocolos de seguridad.',
    details: 'Formación práctica en técnicas de contención, uso de equipos especializados, protocolos de emergencia y manejo seguro de residuos contaminados.'
  },
  {
    id: 'control-extincion-incendios',
    title: 'Control y extinción de incendios',
    icon: Flame,
    description: 'Curso completo de prevención, control y extinción de incendios, incluyendo uso de extintores, sistemas de detección y protocolos de evacuación.',
    details: 'Capacitación teórica y práctica en tipos de fuego, agentes extintores, sistemas de detección temprana, planes de evacuación y simulacros de emergencia.'
  },
  {
    id: 'procedimientos-nfpa',
    title: 'Procedimientos operativos normalizados NFPA',
    icon: BookOpen,
    description: 'Implementación de estándares NFPA para procedimientos operativos seguros en instalaciones industriales y comerciales.',
    details: 'Desarrollo e implementación de procedimientos basados en estándares internacionales NFPA, incluyendo capacitación del personal y auditorías de cumplimiento.'
  },
  {
    id: 'plan-emergencias',
    title: 'Plan de emergencias',
    icon: AlertTriangle,
    description: 'Desarrollo e implementación de planes integrales de emergencia para empresas, incluyendo protocolos de respuesta y coordinación con autoridades.',
    details: 'Elaboración de planes personalizados según el tipo de industria, capacitación de brigadas de emergencia y coordinación con organismos de socorro.'
  },
  {
    id: 'analisis-vulnerabilidad',
    title: 'Análisis de vulnerabilidad',
    icon: Eye,
    description: 'Evaluación integral de vulnerabilidades en instalaciones industriales para identificar riesgos y desarrollar medidas de mitigación.',
    details: 'Análisis detallado de infraestructura, procesos y entorno, identificación de amenazas, evaluación de impactos y desarrollo de estrategias de mitigación.'
  },
  {
    id: 'plan-evacuacion',
    title: 'Plan de evacuación',
    icon: MapPin,
    description: 'Diseño e implementación de planes de evacuación eficientes y seguros para diferentes tipos de instalaciones y emergencias.',
    details: 'Desarrollo de rutas de evacuación, señalización, puntos de encuentro, capacitación del personal y realización de simulacros periódicos.'
  },
  {
    id: 'plan-contingencia',
    title: 'Plan de contingencia',
    icon: Shield,
    description: 'Desarrollo de planes de contingencia para diferentes escenarios de emergencia, incluyendo continuidad operativa y recuperación.',
    details: 'Elaboración de planes específicos para diferentes tipos de emergencias, protocolos de comunicación, activación de recursos y recuperación post-emergencia.'
  },
  {
    id: 'continuidad-negocios',
    title: 'Continuidad de los negocios',
    icon: Building,
    description: 'Implementación de estrategias para mantener la continuidad operativa durante y después de situaciones de emergencia.',
    details: 'Desarrollo de planes de continuidad, identificación de procesos críticos, estrategias de respaldo y protocolos de recuperación rápida.'
  },
  {
    id: 'brigadas-emergencia',
    title: 'Brigadas de emergencia',
    icon: Users,
    description: 'Formación y capacitación de brigadas de emergencia especializadas en diferentes áreas de respuesta y rescate.',
    details: 'Capacitación especializada en primeros auxilios, combate de incendios, rescate, evacuación y coordinación con organismos de socorro.'
  },
  {
    id: 'simulaciones-emergencias',
    title: 'Simulaciones de emergencias',
    icon: Video,
    description: 'Realización de simulacros y simulaciones de emergencias para evaluar la efectividad de los planes y capacitar al personal.',
    details: 'Diseño y ejecución de simulacros realistas, evaluación de tiempos de respuesta, identificación de mejoras y capacitación continua del personal.'
  },
  {
    id: 'sci-comando-incidentes',
    title: 'SCI – Sistema Comando de Incidentes',
    icon: Headphones,
    description: 'Capacitación en el Sistema de Comando de Incidentes para la gestión eficiente de emergencias y coordinación de recursos.',
    details: 'Formación en estructura organizacional del SCI, roles y responsabilidades, comunicación efectiva y coordinación interinstitucional.'
  },
  {
    id: 'materiales-peligrosos',
    title: 'Materiales peligrosos',
    icon: AlertTriangle,
    description: 'Capacitación especializada en identificación, manejo y transporte seguro de materiales peligrosos según normativas internacionales.',
    details: 'Formación en clasificación de materiales peligrosos, etiquetado, almacenamiento seguro, transporte y protocolos de emergencia específicos.'
  },
  {
    id: 'mercancias-peligrosas',
    title: 'Mercancías peligrosas',
    icon: Truck,
    description: 'Capacitación en manejo y transporte de mercancías peligrosas, incluyendo normativas de transporte y protocolos de seguridad.',
    details: 'Formación en normativas de transporte, documentación requerida, equipos de protección, protocolos de carga y descarga segura.'
  },
  {
    id: 'control-emergencias-quimicas',
    title: 'Control de emergencias químicas',
    icon: AlertTriangle,
    description: 'Capacitación especializada en respuesta a emergencias químicas, incluyendo contención, neutralización y evacuación.',
    details: 'Formación en identificación de sustancias químicas, técnicas de contención, equipos de protección especializados y protocolos de descontaminación.'
  },
  {
    id: 'certificacion-proteccion-caidas',
    title: 'Certificación en protección contra caídas',
    icon: Shield,
    description: 'Capacitación en sistemas de protección contra caídas para trabajos en altura, incluyendo equipos y técnicas de seguridad.',
    details: 'Formación en uso de arneses, líneas de vida, anclajes, técnicas de rescate y mantenimiento de equipos de protección contra caídas.'
  },
  {
    id: 'seguridad-espacios-confinados',
    title: 'Seguridad en espacios confinados',
    icon: Lock,
    description: 'Capacitación especializada en trabajos seguros en espacios confinados, incluyendo evaluación de riesgos y protocolos de entrada.',
    details: 'Formación en identificación de espacios confinados, evaluación de atmósferas, equipos de ventilación, rescate y protocolos de trabajo seguro.'
  },
  {
    id: 'seguridad-trabajos-caliente',
    title: 'Seguridad en trabajos en caliente',
    icon: Flame,
    description: 'Capacitación en prevención de incendios durante trabajos en caliente como soldadura, corte y otras actividades que generen calor.',
    details: 'Formación en permisos de trabajo en caliente, evaluación de riesgos, medidas preventivas, equipos de protección y protocolos de monitoreo.'
  },
  {
    id: 'seguridad-energias-peligrosas',
    title: 'Seguridad en trabajos con energías peligrosas',
    icon: Zap,
    description: 'Capacitación en trabajos seguros con sistemas eléctricos y otras fuentes de energía, incluyendo protocolos de bloqueo y etiquetado.',
    details: 'Formación en identificación de fuentes de energía, técnicas de bloqueo y etiquetado (LOTO), equipos de protección y protocolos de trabajo seguro.'
  },
  {
    id: 'loto-bloqueo-etiquetado',
    title: 'LOTO – Bloqueo y etiquetado',
    icon: Lock,
    description: 'Capacitación especializada en procedimientos de bloqueo y etiquetado para trabajos en equipos con fuentes de energía.',
    details: 'Formación en procedimientos LOTO, tipos de dispositivos de bloqueo, etiquetado, verificación de aislamiento y protocolos de liberación.'
  },
  {
    id: 'seguridad-izaje-cargas',
    title: 'Seguridad en el izaje de cargas',
    icon: Wrench,
    description: 'Capacitación en operación segura de equipos de izaje, incluyendo grúas, polipastos y sistemas de elevación.',
    details: 'Formación en operación de equipos de izaje, inspección de equipos, cálculo de cargas, señalización y protocolos de trabajo seguro.'
  },
  {
    id: 'certificacion-operarios-montacargas',
    title: 'Certificación de operarios de montacargas',
    icon: Truck,
    description: 'Capacitación y certificación para operarios de montacargas, incluyendo manejo seguro y mantenimiento preventivo.',
    details: 'Formación en operación segura de montacargas, inspección pre-operacional, mantenimiento básico, carga y descarga segura.'
  },
  {
    id: 'certificacion-armado-andamios',
    title: 'Certificación de armado seguro de andamios',
    icon: Building,
    description: 'Capacitación en armado, desarmado y uso seguro de andamios, incluyendo inspección y mantenimiento.',
    details: 'Formación en tipos de andamios, procedimientos de armado, inspección de componentes, uso seguro y protocolos de desarmado.'
  },
  {
    id: 'primer-respondiente-emergencias-medicas',
    title: 'Curso de primer respondiente en emergencias médicas',
    icon: Heart,
    description: 'Capacitación en atención inicial de emergencias médicas, incluyendo primeros auxilios y estabilización de pacientes.',
    details: 'Formación en evaluación de pacientes, técnicas de reanimación, manejo de heridas, fracturas, quemaduras y protocolos de traslado.'
  },
  {
    id: 'programa-seguridad-piscinas',
    title: 'Programa de seguridad para piscinas',
    icon: Users,
    description: 'Capacitación en seguridad acuática y prevención de accidentes en piscinas y áreas de recreación acuática.',
    details: 'Formación en prevención de ahogamientos, técnicas de rescate acuático, primeros auxilios específicos y protocolos de emergencia.'
  },
  {
    id: 'entrenamiento-rescate-salvamento-acuatico',
    title: 'Entrenamiento en rescate y salvamento acuático',
    icon: Users,
    description: 'Capacitación especializada en técnicas de rescate y salvamento en ambientes acuáticos, incluyendo equipos especializados.',
    details: 'Formación en técnicas de rescate, uso de equipos de salvamento, primeros auxilios acuáticos y coordinación con servicios de emergencia.'
  },
  {
    id: 'certificacion-buceo-scuba-diver',
    title: 'Certificación de buceo scuba diver',
    icon: Users,
    description: 'Capacitación y certificación en buceo autónomo para trabajos subacuáticos y actividades recreativas seguras.',
    details: 'Formación en técnicas de buceo, uso de equipos, fisiología del buceo, planificación de inmersiones y protocolos de seguridad.'
  },
  {
    id: 'capacitacion-primeros-auxilios',
    title: 'Capacitación en primeros auxilios básicos y avanzados',
    icon: Heart,
    description: 'Capacitación integral en primeros auxilios, desde técnicas básicas hasta procedimientos avanzados de estabilización.',
    details: 'Formación en evaluación de pacientes, reanimación cardiopulmonar, manejo de emergencias médicas y protocolos de atención prehospitalaria.'
  },
  {
    id: 'curso-administracion-oxigeno',
    title: 'Curso de administración de oxígeno para emergencias',
    icon: Heart,
    description: 'Capacitación especializada en administración segura de oxígeno en situaciones de emergencia médica.',
    details: 'Formación en indicaciones del oxígeno, equipos de administración, técnicas de aplicación y protocolos de seguridad en el uso de oxígeno.'
  },
  {
    id: 'sistemas-gestion-sst',
    title: 'Diseño, implementación y administración de sistemas de gestión SST',
    icon: Briefcase,
    description: 'Desarrollo integral de sistemas de gestión de seguridad y salud en el trabajo según normativas nacionales e internacionales.',
    details: 'Implementación de sistemas SST, desarrollo de políticas, procedimientos, capacitación del personal y auditorías de cumplimiento normativo.'
  }
];

export default function ModernSafetyHealthCards() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center rounded-full bg-primary-50 text-primary-700 px-4 py-2 text-sm font-medium mb-4">
            Seguridad y Salud en el Trabajo
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Servicios Especializados en SST
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Soluciones integrales para la protección de trabajadores y el cumplimiento de normativas de seguridad y salud ocupacional
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyHealthServices.map((service, index) => {
            const IconComponent = service.icon;
            const isExpanded = expandedCard === service.id;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-600 overflow-hidden">
                  {/* Card Header */}
                  <button
                    onClick={() => toggleCard(service.id)}
                    className="w-full p-6 text-left focus:outline-none focus:ring-4 focus:ring-primary-500/20 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        {/* Icon */}
                        <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                          <IconComponent className="h-8 w-8 text-primary-600" />
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {service.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      {/* Chevron */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 ml-4"
                      >
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-gray-100 bg-gray-50">
                          <div className="pt-4">
                            <h4 className="text-sm font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                              Detalles del Servicio
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {service.details}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              ¿Necesitas servicios de SST personalizados?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Desarrollamos soluciones específicas de seguridad y salud en el trabajo según las necesidades de tu empresa, 
              cumpliendo con todas las normativas legales y estándares internacionales.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=director@iscorcolombia.com&su=Solicitud de Cotización - Servicios SST - ISCOR Colombia&body=Estimado Director,%0D%0A%0D%0AMe pongo en contacto con usted para solicitar una cotización de servicios de Seguridad y Salud en el Trabajo.%0D%0A%0D%0ADetalles de la solicitud:%0D%0A- Empresa: [Nombre de su empresa]%0D%0A- Servicio de interés: [Especifique el servicio SST]%0D%0A- Número de participantes: [Cantidad]%0D%0A- Fecha estimada: [Fecha deseada]%0D%0A- Ubicación: [Ciudad/Departamento]%0D%0A%0D%0AInformación adicional:%0D%0A[Describa sus necesidades específicas en SST]%0D%0A%0D%0AEspero su respuesta.%0D%0A%0D%0ASaludos cordiales,%0D%0A[Nombre]%0D%0A[Teléfono]%0D%0A[Email]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary-500/20"
              >
                Solicitar Cotización SST
                <ChevronDown className="ml-2 h-5 w-5 rotate-[-90deg]" />
              </a>
              <a 
                href="/Portafolio ISCOR general V2.pdf"
                download="Portafolio ISCOR general V2.pdf"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-500/20"
              >
                Ver Portafolio Completo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

