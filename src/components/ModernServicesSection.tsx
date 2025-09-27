'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  ShieldCheckIcon,
  GlobeAltIcon,
  DocumentCheckIcon,
  LockClosedIcon,
  FireIcon,
  BeakerIcon,
  TruckIcon,
  UserGroupIcon,
  EyeIcon,
  HeartIcon,
  BoltIcon,
  CogIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowRightIcon,
  WrenchScrewdriverIcon,
  ExclamationTriangleIcon,
  BuildingOfficeIcon,
  ClipboardDocumentListIcon,
  UserIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const serviceCategories = [
  {
    title: 'Seguridad y Salud en el Trabajo',
    icon: ShieldCheckIcon,
    gradient: 'from-blue-500 to-blue-600',
    color: 'blue',
    services: [
      'Certificación de conductores que transportan',
      'Control de derrames',
      'Control y extinción de incendios',
      'Procedimientos operativos normalizados NFPA',
      'Plan de emergencias',
      'Análisis de vulnerabilidad',
      'Plan de evacuación',
      'Plan de contingencia',
      'Continuidad de los negocios',
      'Brigadas de emergencia',
      'Simulaciones de emergencias',
      'SCI – Sistema Comando de Incidentes',
      'Materiales peligrosos',
      'Mercancías peligrosas',
      'Control de emergencias químicas',
      'Certificación en protección contra caídas',
      'Seguridad en espacios confinados',
      'Seguridad en trabajos en caliente',
      'Seguridad en trabajos con energías peligrosas',
      'LOTO – Bloqueo y etiquetado',
      'Seguridad en el izaje de cargas',
      'Certificación de operarios de montacargas',
      'Certificación de armado seguro de andamios',
      'Curso de primer respondiente en emergencias médicas',
      'Programa de seguridad para piscinas',
      'Entrenamiento en rescate y salvamento acuático',
      'Certificación de buceo scuba diver',
      'Capacitación en primeros auxilios básicos y avanzados',
      'Curso de administración de oxígeno para emergencias',
      'Diseño, implementación y administración de sistemas de gestión SST'
    ]
  },
  {
    title: 'Medio Ambiente',
    icon: GlobeAltIcon,
    gradient: 'from-green-500 to-green-600',
    color: 'green',
    services: [
      'Estudios de impacto ambiental y planes de manejo ambiental',
      'Estudios hidrobiológicos y monitoreo calidad de agua',
      'Estudios de flora y fauna',
      'Proyectos ambientales',
      'Gestión ambiental y auditoría',
      'Capacitación en manejo de residuos peligrosos',
      'Capacitación de la nueva guía de manejo ambiental',
      'Implementación del plan de manejo ambiental',
      'Capacitación de accidentes ofídicos y manejo de serpientes',
      'Sistema de Gestión de administración ambiental ISO 14001',
      'Programas de educación ambiental',
      'Programas de gestión ambiental, inocuidad y rutas de saneamiento',
      'Control de roedores y otros vertebrados',
      'Control de artrópodos',
      'Tecnologías limpias y controles biológicos',
      'Desinfecciones',
      'Tratamiento de granos almacenados',
      'Evaluaciones microbiológicas y fisicoquímicas del ambiente',
      'Medición de gases de combustión',
      'Plan de manejo de residuos sólidos',
      'Diseños de plantas de tratamiento de aguas residuales industriales',
      'Capacitación en impacto ambiental y manejo de residuos'
    ]
  },
  {
    title: 'Calidad',
    icon: ClipboardDocumentListIcon,
    gradient: 'from-purple-500 to-purple-600',
    color: 'purple',
    services: [
      'Sistema de gestión de la calidad ISO 9001',
      'Sistema de gestión seguridad alimentaria ISO 22000',
      'Sistema de peligros y puntos críticos control',
      'Aseguramiento de la inocuidad alimentaria'
    ]
  },
  {
    title: 'Seguridad Física',
    icon: BuildingOfficeIcon,
    gradient: 'from-red-500 to-red-600',
    color: 'red',
    services: [
      'Seguridad física y protección de instalaciones',
      'Análisis de vulnerabilidad y evaluación de riesgos',
      'Diseño de sistemas de seguridad física',
      'Implementación de medidas de protección',
      'Capacitación en seguridad física',
      'Auditorías de seguridad física'
    ]
  },
  {
    title: 'Emergencias',
    icon: ExclamationTriangleIcon,
    gradient: 'from-orange-500 to-orange-600',
    color: 'orange',
    services: [
      'Control y extinción de incendios',
      'Brigadas de emergencia',
      'Simulaciones de emergencias',
      'Plan de emergencias',
      'Primeros auxilios básicos y avanzados',
      'Rescate y salvamento acuático'
    ]
  },
  {
    title: 'Capacitación',
    icon: LightBulbIcon,
    gradient: 'from-indigo-500 to-indigo-600',
    color: 'indigo',
    services: [
      'Capacitación especializada en seguridad integral',
      'Programas de entrenamiento personalizados',
      'Certificaciones profesionales',
      'Formación de instructores',
      'Desarrollo de competencias',
      'Evaluación y seguimiento'
    ]
  }
];

export default function ModernServicesSection() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
      
      {/* Patrón sutil */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
            <ShieldCheckIcon className="h-5 w-5 mr-3" />
            Servicios Especializados
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
            Nuestros <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Servicios</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Soluciones integrales en seguridad, medio ambiente y calidad diseñadas para proteger y optimizar tu organización
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Card principal */}
              <div 
                className="relative bg-white rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2"
                onClick={() => toggleCategory(index)}
              >
                {/* Header con gradiente */}
                <div className={`bg-gradient-to-br ${category.gradient} p-8 text-white relative overflow-hidden`}>
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10" />
                  <div className="absolute inset-0 bg-black/5" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                        <category.icon className="h-8 w-8" />
                      </div>
                      <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                        {expandedCategory === index ? (
                          <ChevronUpIcon className="h-6 w-6" />
                        ) : (
                          <ChevronDownIcon className="h-6 w-6" />
                        )}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                    <p className="text-white/90 text-sm font-medium">
                      {category.services.length} servicios especializados
                    </p>
                  </div>
                </div>

                {/* Contenido desplegable */}
                <AnimatePresence>
                  {expandedCategory === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 bg-gradient-to-b from-slate-50 to-white">
                        <div className="space-y-4 mb-8">
                          {category.services.map((service, serviceIndex) => (
                            <motion.div
                              key={serviceIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: serviceIndex * 0.03 }}
                              className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200"
                            >
                              <div className={`p-2 bg-${category.color}-100 rounded-lg flex-shrink-0`}>
                                <CheckCircleIcon className={`h-5 w-5 text-${category.color}-600`} />
                              </div>
                              <span className="text-slate-700 text-sm leading-relaxed font-medium">{service}</span>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Botón de acción */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          className="mt-8"
                        >
                          <button className={`w-full bg-gradient-to-r ${category.gradient} text-white font-bold py-4 px-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105`}>
                            <span className="flex items-center justify-center">
                              Solicitar Información
                              <ArrowRightIcon className="ml-2 h-5 w-5" />
                            </span>
                          </button>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA final */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 rounded-3xl p-12 text-white overflow-hidden">
            {/* Efectos de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold mb-8">
                <ShieldCheckIcon className="h-5 w-5 mr-3" />
                Soluciones Personalizadas
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold mb-6">¿Necesitas un servicio personalizado?</h3>
              <p className="text-blue-100 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
                Desarrollamos soluciones a medida según las necesidades específicas de tu empresa, 
                cumpliendo con todas las normativas legales y estándares internacionales.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=director@iscorcolombia.com&su=Solicitud de Cotización - ISCOR Colombia&body=Estimado Director,%0D%0A%0D%0AMe pongo en contacto con usted para solicitar una cotización de sus servicios de seguridad integral.%0D%0A%0D%0ADetalles de la solicitud:%0D%0A- Empresa: [Nombre de su empresa]%0D%0A- Servicio de interés: [Especifique el servicio]%0D%0A- Número de participantes: [Cantidad]%0D%0A- Fecha estimada: [Fecha deseada]%0D%0A- Ubicación: [Ciudad/Departamento]%0D%0A%0D%0AInformación adicional:%0D%0A[Describa sus necesidades específicas]%0D%0A%0D%0AEspero su respuesta.%0D%0A%0D%0ASaludos cordiales,%0D%0A[Nombre]%0D%0A[Teléfono]%0D%0A[Email]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
                >
                  <span className="flex items-center">
                    Solicitar Cotización
                    <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
