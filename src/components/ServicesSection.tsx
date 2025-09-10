'use client';

import { motion } from 'framer-motion';
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
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const serviceCategories = [
  {
    title: 'Seguridad y Salud en el Trabajo',
    icon: ShieldCheckIcon,
    gradient: 'from-blue-500 to-blue-600',
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
    icon: DocumentCheckIcon,
    gradient: 'from-purple-500 to-purple-600',
    services: [
      'Sistema de gestión de la calidad ISO 9001',
      'Sistema de gestión seguridad alimentaria ISO 22000',
      'Sistema de peligros y puntos críticos control',
      'Aseguramiento de la inocuidad alimentaria'
    ]
  },
  {
    title: 'Seguridad Física',
    icon: LockClosedIcon,
    gradient: 'from-gray-500 to-gray-600',
    services: [
      'Visitas domiciliarias',
      'Estudios de seguridad',
      'Seguridad con armas de fuego'
    ]
  },
  {
    title: 'Inspección de Equipos',
    icon: EyeIcon,
    gradient: 'from-orange-500 to-orange-600',
    services: [
      'Seguridad electrónica y CCTV circuito cerrado de televisión',
      'Entrenamiento de escoltas y guardas de seguridad privada',
      'Curso de supervivencia básico y avanzado',
      'Polígrafo (detector de mentiras)',
      'Inspección de equipos de protección contra caídas',
      'Inspección de equipos para trabajos en espacios confinados',
      'Inspección de equipos para rescate y salvamento',
      'Inspección visual de cilindros SCBA y SCUBA',
      'Pruebas hidrostáticas para cilindros SCBA y SCUBA',
      'Posicheck para SCBA',
      'Llenado de aire comprimido para SCBA y SCUBA'
    ]
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-8"
          >
            <AcademicCapIcon className="h-5 w-5 mr-3" />
            Nuestros Servicios Integrales
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8"
          >
            Servicios Especializados
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8"
          >
            Diseñamos, implementamos, administramos y auditamos sus sistemas integrados de 
            <span className="font-semibold text-blue-600"> CALIDAD</span>, 
            <span className="font-semibold text-green-600"> MEDIO AMBIENTE</span> y 
            <span className="font-semibold text-purple-600"> SEGURIDAD Y SALUD EN EL TRABAJO</span>
          </motion.p>
        </div>

        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * categoryIndex }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200"
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center mr-6`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-slate-600">
                    {category.services.length} servicios especializados
                  </p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 * serviceIndex }}
                    className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300"
                  >
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm font-medium leading-relaxed">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              ¿Necesitas servicios personalizados?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Desarrollamos soluciones a medida según las necesidades específicas de tu empresa, 
              cumpliendo con todas las normativas legales y estándares internacionales.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                Solicitar Cotización
                <AcademicCapIcon className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                Ver Portafolio Completo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
