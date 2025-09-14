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
  },
  {
    name: 'Procedimientos Operativos Normalizados NFPA',
    description: 'Implementación de procedimientos operativos normalizados según estándares NFPA para emergencias.',
    icon: DocumentCheckIcon,
    gradient: 'from-red-600 to-orange-600',
    duration: '24 horas',
    certification: 'Válido 2 años',
    students: 680,
    rating: 4.8,
    category: 'Emergencias'
  },
  {
    name: 'Plan de Emergencias',
    description: 'Desarrollo e implementación de planes de emergencia y evacuación adaptados a cada empresa.',
    icon: ShieldCheckIcon,
    gradient: 'from-yellow-600 to-orange-600',
    duration: '24 horas',
    certification: 'Válido 2 años',
    students: 520,
    rating: 4.7,
    category: 'Emergencias'
  },
  {
    name: 'Análisis de Vulnerabilidad',
    description: 'Evaluación y análisis de vulnerabilidades en instalaciones industriales y comerciales.',
    icon: ChartBarIcon,
    gradient: 'from-purple-600 to-indigo-600',
    duration: '32 horas',
    certification: 'Válido 3 años',
    students: 380,
    rating: 4.8,
    category: 'Seguridad Industrial'
  },
  {
    name: 'Plan de Evacuación',
    description: 'Diseño e implementación de planes de evacuación eficientes y seguros.',
    icon: ArrowRightIcon,
    gradient: 'from-green-600 to-emerald-600',
    duration: '16 horas',
    certification: 'Válido 2 años',
    students: 450,
    rating: 4.7,
    category: 'Emergencias'
  },
  {
    name: 'Plan de Contingencia',
    description: 'Desarrollo de planes de contingencia para diferentes escenarios de emergencia.',
    icon: ExclamationTriangleIcon,
    gradient: 'from-orange-600 to-red-600',
    duration: '20 horas',
    certification: 'Válido 2 años',
    students: 320,
    rating: 4.6,
    category: 'Emergencias'
  },
  {
    name: 'Continuidad de los Negocios',
    description: 'Planificación para la continuidad de operaciones empresariales durante crisis.',
    icon: CpuChipIcon,
    gradient: 'from-blue-600 to-cyan-600',
    duration: '28 horas',
    certification: 'Válido 3 años',
    students: 280,
    rating: 4.8,
    category: 'Gestión'
  },
  {
    name: 'Simulaciones de Emergencias',
    description: 'Ejecución de simulacros y simulaciones de emergencias para validar procedimientos.',
    icon: UserGroupIcon,
    gradient: 'from-indigo-600 to-purple-600',
    duration: '16 horas',
    certification: 'Válido 1 año',
    students: 650,
    rating: 4.9,
    category: 'Emergencias'
  },
  {
    name: 'SCI - Sistema Comando de Incidentes',
    description: 'Implementación del Sistema de Comando de Incidentes para gestión de emergencias.',
    icon: ShieldCheckIcon,
    gradient: 'from-red-600 to-pink-600',
    duration: '24 horas',
    certification: 'Válido 2 años',
    students: 420,
    rating: 4.7,
    category: 'Emergencias'
  },
  {
    name: 'Control de Emergencias Químicas',
    description: 'Manejo y control de emergencias químicas y derrames de sustancias peligrosas.',
    icon: BeakerIcon,
    gradient: 'from-yellow-600 to-orange-600',
    duration: '32 horas',
    certification: 'Válido 3 años',
    students: 380,
    rating: 4.8,
    category: 'Ambiental'
  },
  {
    name: 'Certificación de Conductores que Transportan',
    description: 'Certificación para conductores que transportan materiales peligrosos.',
    icon: TruckIcon,
    gradient: 'from-blue-600 to-cyan-600',
    duration: '40 horas',
    certification: 'Válido 3 años',
    students: 520,
    rating: 4.7,
    category: 'Transporte'
  },
  {
    name: 'Control Derrames, Escapes y Vertimientos Accidentales',
    description: 'Control y mitigación de derrames, escapes y vertimientos accidentales con químicos.',
    icon: ExclamationTriangleIcon,
    gradient: 'from-red-600 to-orange-600',
    duration: '24 horas',
    certification: 'Válido 2 años',
    students: 450,
    rating: 4.8,
    category: 'Ambiental'
  },
  {
    name: 'Certificación de Armado Seguro de Andamios',
    description: 'Certificación de armado seguro de andamios multidireccionales y sistemas de acceso.',
    icon: BuildingOfficeIcon,
    gradient: 'from-orange-600 to-red-600',
    duration: '32 horas',
    certification: 'Válido 2 años',
    students: 380,
    rating: 4.7,
    category: 'Construcción'
  },
  {
    name: 'Curso de Primer Respondiente en Emergencias Médicas',
    description: 'Formación como primer respondiente en emergencias médicas y atención prehospitalaria.',
    icon: HeartIcon,
    gradient: 'from-green-600 to-emerald-600',
    duration: '20 horas',
    certification: 'Válido 1 año',
    students: 680,
    rating: 4.9,
    category: 'Emergencias'
  },
  {
    name: 'Programa de Seguridad para Piscinas',
    description: 'Programa integral de seguridad para piscinas y espacios acuáticos recreativos.',
    icon: GlobeAltIcon,
    gradient: 'from-cyan-600 to-blue-600',
    duration: '16 horas',
    certification: 'Válido 2 años',
    students: 320,
    rating: 4.6,
    category: 'Acuático'
  },
  {
    name: 'Curso de Administración de Oxígeno para Emergencias',
    description: 'Capacitación en administración segura de oxígeno para emergencias médicas.',
    icon: HeartIcon,
    gradient: 'from-blue-600 to-cyan-600',
    duration: '12 horas',
    certification: 'Válido 1 año',
    students: 450,
    rating: 4.8,
    category: 'Emergencias'
  },
  {
    name: 'Sistemas de Gestión de Seguridad y Salud en el Trabajo',
    description: 'Diseño, implementación y administración de sistemas de gestión SST.',
    icon: ShieldCheckIcon,
    gradient: 'from-green-600 to-teal-600',
    duration: '40 horas',
    certification: 'Válido 3 años',
    students: 280,
    rating: 4.8,
    category: 'Gestión'
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
    'Sistema de Gestión ISO 9001': '/control_de_calidad.png',
    'Plan de Emergencias': '/plandeemergencia.png',
    'Certificación de Armado Seguro de Andamios': '/alturas.png',
    'Programa de Seguridad para Piscinas': '/seguridad_acuatica.png',
    'Sistemas de Gestión de Seguridad y Salud en el Trabajo': '/control_de_calidad.png',
    'Inspecciones Certificadas': '/inspecciones_certificadas.png',
    'Reintegro Laboral': '/reintegro_laboral.png',
    'Seguridad Física': '/seguridad_fisica.png',
    'Tareas de Alto Riesgo': '/tareas_de_alto_riesgo.png'
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
    'Seguridad en Trabajos en Caliente': 'seguridad-trabajos-caliente',
    'Sistema de Gestión ISO 9001': 'sistema-gestion-iso-9001',
    'Seguridad en el Izaje de Cargas': 'seguridad-izaje-cargas',
    'Buceo Scuba Diver': 'buceo-scuba-diver',
    'Rescate y Salvamento Acuático': 'rescate-salvamento-acuatico',
    'Sistema de Gestión ISO 14001': 'sistema-gestion-iso-14001',
    'Seguridad Alimentaria ISO 22000': 'seguridad-alimentaria-iso-22000',
    'Supervivencia Básico y Avanzado': 'supervivencia-basico-avanzado',
    'Procedimientos Operativos Normalizados NFPA': 'procedimientos-operativos-normalizados-nfpa',
    'Plan de Emergencias': 'plan-emergencias',
    'Análisis de Vulnerabilidad': 'analisis-vulnerabilidad',
    'Plan de Evacuación': 'plan-evacuacion',
    'Plan de Contingencia': 'plan-contingencia',
    'Continuidad de los Negocios': 'continuidad-negocios',
    'Simulaciones de Emergencias': 'simulaciones-emergencias',
    'SCI - Sistema Comando de Incidentes': 'sci-sistema-comando-incidentes',
    'Control de Emergencias Químicas': 'control-emergencias-quimicas',
    'Certificación de Conductores que Transportan': 'certificacion-conductores-transportan',
    'Control Derrames, Escapes y Vertimientos Accidentales': 'control-derrames-escapes-vertimientos',
    'Certificación de Armado Seguro de Andamios': 'certificacion-armado-seguro-andamios',
    'Curso de Primer Respondiente en Emergencias Médicas': 'primer-respondiente-emergencias-medicas',
    'Programa de Seguridad para Piscinas': 'programa-seguridad-piscinas',
    'Curso de Administración de Oxígeno para Emergencias': 'administracion-oxigeno-emergencias',
    'Sistemas de Gestión de Seguridad y Salud en el Trabajo': 'sistemas-gestion-seguridad-salud-trabajo'
  };
  
  return slugMap[courseName] || courseName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

export default function ServiciosPage() {
  const router = useRouter();

  const handleCourseClick = (courseName: string) => {
    const slug = getCourseSlug(courseName);
    router.push(`/cursos/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rotate-45"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 transform rotate-12"></div>
          <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-white/10 transform -rotate-45"></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/60 to-slate-900/80"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
              <ShieldCheckIcon className="h-5 w-5 mr-3" />
              Servicios Profesionales
            </div>
            
            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
              <span className="text-white">Nuestros</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Servicios</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Módulos especializados en seguridad industrial y control de riesgos. 
              Más de 29 servicios profesionales para proteger a tu equipo y cumplir con las normativas de seguridad.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">29+</div>
                <div className="text-sm text-gray-300 font-medium">Servicios Especializados</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-sm text-gray-300 font-medium">Cumplimiento Normativo</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-sm text-gray-300 font-medium">Soporte Técnico</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
              <AcademicCapIcon className="h-5 w-5 mr-3" />
              Cursos Disponibles
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Servicios de Seguridad Industrial
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Ofrecemos una gama completa de servicios especializados para proteger a su empresa y cumplir con las normativas de seguridad industrial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const courseImage = getCourseImage(course.name);
              const IconComponent = course.icon;
              
              return (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  onClick={() => handleCourseClick(course.name)}
                >
                  {/* Image container */}
                  {courseImage && (
                    <div className="w-16 h-16 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                      <Image
                        src={courseImage}
                        alt={course.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  {/* Icon fallback */}
                  {!courseImage && (
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  )}
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {course.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                    {course.description}
                  </p>

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {course.category}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                    <span className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-2" />
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 mr-2" />
                      {course.certification}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                    <span className="flex items-center">
                      <UserGroupIcon className="h-4 w-4 mr-2" />
                      {course.students.toLocaleString()} estudiantes
                    </span>
                    <span className="flex items-center">
                      <TrophyIcon className="h-4 w-4 mr-2" />
                      ⭐ {course.rating}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <div className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg group-hover:shadow-xl flex items-center justify-center">
                    Más Información
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
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
              <ShieldCheckIcon className="h-5 w-5 mr-3" />
              Comienza Hoy
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              ¿Listo para implementar una cultura de seguridad?
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a proteger a tu equipo y cumplir con las normativas de seguridad industrial.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href="/contacto"
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center text-lg">
                  Contactar Ahora
                  <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
              
              <Link
                href="/la-empresa"
                className="px-10 py-5 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-lg"
              >
                Conoce Nuestra Empresa
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
