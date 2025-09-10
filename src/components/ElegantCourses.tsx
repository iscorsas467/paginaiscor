'use client';

import { motion } from 'framer-motion';
import { 
  BuildingOfficeIcon,
  CogIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  TrophyIcon,
  ArrowRightIcon,
  ClockIcon,
  AcademicCapIcon,
  FireIcon,
  ExclamationTriangleIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  BeakerIcon,
  DocumentCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  CpuChipIcon,
  BoltIcon,
  EyeIcon,
  HeartIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

const courses = [
  {
    name: 'Trabajo en Alturas',
    description: 'Certificación en protección contra caídas en trabajos en alturas según normativas nacionales e internacionales.',
    icon: BuildingOfficeIcon,
    gradient: 'from-orange-500 to-red-500',
    duration: '40 horas',
    certification: 'Válido 2 años',
    students: 1250,
    rating: 4.9,
    category: 'Seguridad Industrial'
  },
  {
    name: 'Espacios Confinados',
    description: 'Seguridad en espacios confinados con protocolos de entrada, trabajo y rescate especializado.',
    icon: CogIcon,
    gradient: 'from-purple-500 to-indigo-500',
    duration: '40 horas',
    certification: 'Válido 2 años',
    students: 980,
    rating: 4.8,
    category: 'Seguridad Industrial'
  },
  {
    name: 'Control y Extinción de Incendios',
    description: 'Control y extinción de incendios con procedimientos operativos normalizados NFPA y brigadas de emergencia.',
    icon: FireIcon,
    gradient: 'from-red-500 to-orange-500',
    duration: '32 horas',
    certification: 'Válido 3 años',
    students: 1100,
    rating: 4.9,
    category: 'Emergencias'
  },
  {
    name: 'Primeros Auxilios Básicos y Avanzados',
    description: 'Capacitación en primeros auxilios básicos y avanzados con administración de oxígeno para emergencias.',
    icon: HeartIcon,
    gradient: 'from-green-500 to-emerald-500',
    duration: '16 horas',
    certification: 'Válido 1 año',
    students: 2100,
    rating: 4.9,
    category: 'Emergencias'
  },
  {
    name: 'Materiales y Mercancías Peligrosas',
    description: 'Manejo seguro de materiales peligrosos y mercancías peligrosas con control de emergencias químicas.',
    icon: BeakerIcon,
    gradient: 'from-yellow-500 to-orange-500',
    duration: '40 horas',
    certification: 'Válido 3 años',
    students: 750,
    rating: 4.7,
    category: 'Ambiental'
  },
  {
    name: 'Operación Segura de Montacargas',
    description: 'Certificación de operarios de montacargas con técnicas de manejo seguro y mantenimiento preventivo.',
    icon: TruckIcon,
    gradient: 'from-blue-500 to-cyan-500',
    duration: '24 horas',
    certification: 'Válido 2 años',
    students: 850,
    rating: 4.8,
    category: 'Operaciones'
  },
  {
    name: 'LOTO - Bloqueo y Etiquetado',
    description: 'Seguridad en trabajos con energías peligrosas mediante procedimientos de bloqueo y etiquetado.',
    icon: LockClosedIcon,
    gradient: 'from-gray-500 to-slate-600',
    duration: '16 horas',
    certification: 'Válido 2 años',
    students: 650,
    rating: 4.8,
    category: 'Mantenimiento'
  },
  {
    name: 'Brigadas de Emergencia',
    description: 'Formación de brigadas de emergencia con simulaciones y sistema comando de incidentes (SCI).',
    icon: UserGroupIcon,
    gradient: 'from-indigo-500 to-purple-500',
    duration: '32 horas',
    certification: 'Válido 2 años',
    students: 920,
    rating: 4.9,
    category: 'Emergencias'
  },
  {
    name: 'Seguridad en Trabajos en Caliente',
    description: 'Procedimientos seguros para trabajos en caliente con control de riesgos de incendio.',
    icon: FireIcon,
    gradient: 'from-orange-500 to-red-500',
    duration: '16 horas',
    certification: 'Válido 2 años',
    students: 580,
    rating: 4.7,
    category: 'Seguridad Industrial'
  },
  {
    name: 'Sistema de Gestión ISO 9001',
    description: 'Sistema de gestión de la calidad ISO 9001 con implementación y auditorías internas.',
    icon: DocumentCheckIcon,
    gradient: 'from-blue-600 to-indigo-600',
    duration: '40 horas',
    certification: 'Válido 3 años',
    students: 650,
    rating: 4.8,
    category: 'Calidad'
  },
  {
    name: 'Seguridad en el Izaje de Cargas',
    description: 'Operación segura de grúas para izaje de cargas con certificación de operarios especializados.',
    icon: BoltIcon,
    gradient: 'from-yellow-400 to-orange-500',
    duration: '32 horas',
    certification: 'Válido 2 años',
    students: 720,
    rating: 4.8,
    category: 'Operaciones'
  },
  {
    name: 'Buceo Scuba Diver',
    description: 'Certificación de buceo scuba diver, advanced y máster scuba diver con instructor internacional NAUI.',
    icon: GlobeAltIcon,
    gradient: 'from-cyan-500 to-blue-500',
    duration: '40 horas',
    certification: 'Válido 2 años',
    students: 320,
    rating: 4.9,
    category: 'Especializado'
  },
  {
    name: 'Rescate y Salvamento Acuático',
    description: 'Entrenamiento en rescate y salvamento acuático con programa de seguridad para piscinas.',
    icon: HeartIcon,
    gradient: 'from-blue-400 to-cyan-500',
    duration: '24 horas',
    certification: 'Válido 2 años',
    students: 450,
    rating: 4.8,
    category: 'Emergencias'
  },
  {
    name: 'Sistema de Gestión ISO 14001',
    description: 'Sistema de gestión de administración ambiental ISO 14001 con programas de educación ambiental.',
    icon: GlobeAltIcon,
    gradient: 'from-green-500 to-emerald-500',
    duration: '32 horas',
    certification: 'Válido 3 años',
    students: 380,
    rating: 4.7,
    category: 'Ambiental'
  },
  {
    name: 'Seguridad Alimentaria ISO 22000',
    description: 'Sistema de gestión seguridad alimentaria ISO 22000 con HACCP y aseguramiento de inocuidad.',
    icon: ShieldCheckIcon,
    gradient: 'from-green-600 to-emerald-600',
    duration: '24 horas',
    certification: 'Válido 2 años',
    students: 280,
    rating: 4.8,
    category: 'Calidad'
  },
  {
    name: 'Supervivencia Básico y Avanzado',
    description: 'Curso de supervivencia básico y avanzado para tripulaciones aéreas de combate y personal especializado.',
    icon: ExclamationTriangleIcon,
    gradient: 'from-orange-600 to-red-600',
    duration: '40 horas',
    certification: 'Válido 3 años',
    students: 150,
    rating: 4.9,
    category: 'Especializado'
  }
];

export default function ElegantCourses() {
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
            Programas de Capacitación Certificados
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8"
          >
            Programas Especializados
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8"
          >
            Diseñados para profesionales que buscan la excelencia en 
            <span className="font-semibold text-blue-600"> seguridad industrial</span>, 
            <span className="font-semibold text-green-600"> salud ocupacional</span> y 
            <span className="font-semibold text-purple-600"> gestión de calidad</span>
          </motion.p>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">15+</div>
              <div className="text-sm text-slate-600">Programas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">15,000+</div>
              <div className="text-sm text-slate-600">Estudiantes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">500+</div>
              <div className="text-sm text-slate-600">Empresas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">18+</div>
              <div className="text-sm text-slate-600">Años</div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {courses.map((course, index) => (
            <motion.div 
              key={course.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-4">
                {course.category}
              </div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${course.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <course.icon className="h-7 w-7 text-white" />
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                {course.name}
              </h3>
              
              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                {course.description}
              </p>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {course.duration}
                  </span>
                  <span className="flex items-center">
                    <AcademicCapIcon className="h-4 w-4 mr-1" />
                    {course.certification}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium">{course.students.toLocaleString()}+ estudiantes</span>
                  <span className="flex items-center font-medium">
                    ⭐ {course.rating}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full flex items-center justify-center px-4 py-3 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-all duration-200 group-hover:shadow-md">
                Más información
                <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              ¿Necesitas un programa personalizado?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Desarrollamos programas de capacitación a medida según las necesidades específicas de tu empresa, 
              cumpliendo con todas las normativas legales y estándares internacionales.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                Ver Todos los Programas
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                Solicitar Cotización
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
