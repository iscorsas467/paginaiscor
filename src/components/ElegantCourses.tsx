'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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

// Función para obtener la imagen correspondiente al curso
const getCourseImage = (courseName: string) => {
  const imageMap: { [key: string]: string } = {
    'Trabajo en Alturas': '/alturas.png',
    'Espacios Confinados': '/Espacios_confinados.png',
    'Control y Extinción de Incendios': '/fuego.png',
    'Primeros Auxilios Básicos y Avanzados': '/primeros_auxilios.png',
    'Materiales y Mercancías Peligrosas': '/materiales_peligrosos.png',
    'Operación Segura de Montacargas': '/montacargas .png',
    'LOTO - Bloqueo y Etiquetado': '/Lockout_tagout.png',
    'Brigadas de Emergencia': '/brigada_de_emergencia.png',
    'Buceo Scuba Diver': '/buceo.png',
    'Sistema de Gestión ISO 9001': '/control_de_calidad.png'
  };
  return imageMap[courseName] || null;
};

// Función para convertir nombres de cursos a slugs válidos
const getCourseSlug = (courseName: string) => {
  const slugMap: { [key: string]: string } = {
    'Trabajo en Alturas': 'trabajo-en-alturas',
    'Espacios Confinados': 'espacios-confinados',
    'Control y Extinción de Incendios': 'control-extincion-incendios',
    'Primeros Auxilios Básicos y Avanzados': 'primeros-auxilios-basicos-avanzados',
    'Materiales y Mercancías Peligrosas': 'materiales-mercancias-peligrosas',
    'Operación Segura de Montacargas': 'operacion-segura-montacargas',
    'LOTO - Bloqueo y Etiquetado': 'loto-bloqueo-etiquetado',
    'Brigadas de Emergencia': 'brigadas-emergencia',
    'Seguridad en Trabajos en Caliente': 'control-extincion-incendios',
    'Sistema de Gestión ISO 9001': 'sistema-gestion-iso-9001',
    'Seguridad en el Izaje de Cargas': 'trabajo-en-alturas',
    'Buceo Scuba Diver': 'buceo-scuba-diver',
    'Rescate y Salvamento Acuático': 'primeros-auxilios-basicos-avanzados',
    'Sistema de Gestión ISO 14001': 'sistema-gestion-iso-9001',
    'Seguridad Alimentaria ISO 22000': 'sistema-gestion-iso-9001',
    'Supervivencia Básico y Avanzado': 'brigadas-emergencia'
  };
  return slugMap[courseName] || null;
};

export default function ElegantCourses() {
  const router = useRouter();
  console.log('ElegantCourses se está ejecutando');
  
  const handleCourseClick = (courseName: string) => {
    console.log('Botón clickeado para:', courseName);
    const slug = getCourseSlug(courseName);
    console.log('Slug encontrado:', slug);
    if (slug) {
      console.log('Navegando a:', `/servicios/${slug}`);
      router.push(`/servicios/${slug}`);
    } else {
      alert('Información detallada de ' + courseName + ' próximamente disponible');
    }
  };

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
            <div 
              key={course.name}
              className="group bg-white rounded-2xl border-4 border-blue-900 p-6 hover:shadow-2xl hover:border-yellow-500 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col h-full"
            >
              
              {/* Icon */}
              {getCourseImage(course.name) ? (
                <div className="flex items-center justify-center w-24 h-24 mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <Image
                    src={getCourseImage(course.name)!}
                    alt={course.name}
                    width={96}
                    height={96}
                    className="object-contain rounded-xl"
                  />
                </div>
              ) : (
                <div className={`flex items-center justify-center w-24 h-24 bg-gradient-to-r ${course.gradient} rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}>
                  <course.icon className="h-12 w-12 text-white" />
                </div>
              )}
              
              {/* Title */}
              <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300 leading-tight">
                {course.name}
              </h3>
              
              {/* Description */}
              <p className="text-blue-900 text-sm leading-relaxed mb-4 line-clamp-3">
                {course.description}
              </p>

              {/* Details */}
              <div className="space-y-2 mb-4 flex-grow">
                <div className="flex items-center justify-between text-xs text-blue-900">
                  <span className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1 text-blue-900" />
                    {course.duration}
                  </span>
                  <span className="flex items-center">
                    <AcademicCapIcon className="h-4 w-4 mr-1 text-blue-900" />
                    {course.certification}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-blue-900">
                  <span className="font-medium">{course.students.toLocaleString('en-US')}+ estudiantes</span>
                  <span className="flex items-center font-medium text-blue-900">
                    ⭐ {course.rating}
                  </span>
                </div>
              </div>

              {/* Botón Ver Más Información */}
              <button 
                onClick={() => {
                  const slug = getCourseSlug(course.name);
                  if (slug) {
                    router.push(`/cursos/${slug}`);
                  } else {
                    alert('Información detallada de ' + course.name + ' próximamente disponible');
                  }
                }}
                className="w-3/4 py-2 px-3 bg-blue-600 hover:bg-white hover:text-blue-600 text-white text-sm font-semibold rounded-md cursor-pointer mt-auto transition-all duration-200 border-2 border-blue-600 hover:border-blue-600 mx-auto block"
              >
                Ver más información
              </button>

            </div>
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

