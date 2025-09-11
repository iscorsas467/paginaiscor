'use client';

import Image from 'next/image';
import { useState, use } from 'react';
import { 
  ShieldCheckIcon, 
  ArrowRightIcon, 
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ClockIcon,
  StarIcon,
  CogIcon,
  GlobeAltIcon,
  TrophyIcon,
  AcademicCapIcon,
  MapPinIcon,
  CalendarIcon,
  ArrowLeftIcon,
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
import Link from 'next/link';

interface Course {
  name: string;
  slug: string;
  image: string;
  description: string;
  detailedDescription: string;
  duration: string;
  certification: string;
  gradient: string;
  icon: any;
  objectives: string[];
  benefits: string[];
  requirements: string[];
  modules: string[];
  instructor: string;
  price: string;
  location: string;
  schedule: string;
  category: string;
  students: number;
  rating: number;
}

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  servicio: string;
  mensaje: string;
}

const courses: Course[] = [
  {
    name: 'Trabajo en Alturas',
    slug: 'trabajo-en-alturas',
    image: '/alturas.png',
    description: 'Certificación en protección contra caídas en trabajos en alturas según normativas nacionales e internacionales.',
    detailedDescription: 'Nuestro curso de Trabajo en Alturas está diseñado para proporcionar a los participantes los conocimientos teóricos y prácticos necesarios para realizar trabajos seguros en altura. El programa incluye formación en equipos de protección personal, sistemas de anclaje, evaluación de riesgos y procedimientos de rescate.',
    duration: '40 horas',
    certification: 'Válido 2 años',
    gradient: 'from-orange-500 to-red-500',
    icon: BuildingOfficeIcon,
    objectives: [
      'Comprender las normativas de seguridad para trabajos en altura',
      'Desarrollar habilidades prácticas para trabajos seguros',
      'Aprender a usar equipos de protección personal',
      'Conocer sistemas de anclaje y líneas de vida',
      'Obtener certificación oficial reconocida'
    ],
    benefits: [
      'Reducción significativa de accidentes por caídas',
      'Cumplimiento de normativas de seguridad industrial',
      'Mejora en la eficiencia y seguridad del trabajo',
      'Certificación reconocida a nivel nacional',
      'Actualización continua en técnicas de seguridad'
    ],
    requirements: [
      'Mayor de 18 años',
      'Documento de identidad vigente',
      'Certificado médico ocupacional',
      'Buen estado de salud física',
      'Sin vértigo o acrofobia'
    ],
    modules: [
      'Fundamentos de Trabajos en Altura',
      'Equipos de Protección Personal',
      'Sistemas de Anclaje y Líneas de Vida',
      'Evaluación de Riesgos',
      'Procedimientos de Trabajo Seguro',
      'Rescate en Altura',
      'Prácticas Supervisadas'
    ],
    instructor: 'Ing. Carlos Rodríguez - Especialista en Seguridad Industrial',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Seguridad Industrial',
    students: 1250,
    rating: 4.9
  },
  {
    name: 'Espacios Confinados',
    slug: 'espacios-confinados',
    image: '/Espacios_confinados.png',
    description: 'Seguridad en espacios confinados con protocolos de entrada, trabajo y rescate especializado.',
    detailedDescription: 'El curso de Espacios Confinados capacita a los participantes en trabajos seguros en espacios confinados. Incluye formación en evaluación de riesgos, equipos de protección, procedimientos de entrada y rescate especializado.',
    duration: '40 horas',
    certification: 'Válido 2 años',
    gradient: 'from-purple-500 to-indigo-500',
    icon: CogIcon,
    objectives: [
      'Identificar espacios confinados y sus riesgos',
      'Aplicar procedimientos de seguridad específicos',
      'Manejar equipos de protección y ventilación',
      'Coordinar equipos de trabajo y rescate',
      'Implementar protocolos de emergencia'
    ],
    benefits: [
      'Prevención de accidentes en espacios confinados',
      'Cumplimiento de normativas de seguridad',
      'Protección del personal especializado',
      'Certificación reconocida',
      'Mejora en la eficiencia operativa'
    ],
    requirements: [
      'Mayor de 18 años',
      'Buen estado de salud física',
      'Sin claustrofobia',
      'Capacidad de trabajo en equipo',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Identificación de Espacios Confinados',
      'Evaluación de Riesgos Atmosféricos',
      'Equipos de Protección y Ventilación',
      'Procedimientos de Entrada Segura',
      'Vigilancia y Supervisión',
      'Rescate en Espacios Confinados',
      'Prácticas de Campo'
    ],
    instructor: 'Ing. Ana Martínez - Especialista en Espacios Confinados',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Seguridad Industrial',
    students: 980,
    rating: 4.8
  },
  {
    name: 'Control y Extinción de Incendios',
    slug: 'control-extincion-incendios',
    image: '/fuego.png',
    description: 'Control y extinción de incendios con procedimientos operativos normalizados NFPA y brigadas de emergencia.',
    detailedDescription: 'El curso de Control y Extinción de Incendios proporciona formación integral en prevención, detección y extinción de incendios. Los participantes aprenderán sobre los diferentes tipos de fuego, sistemas de detección, equipos de extinción y protocolos de emergencia.',
    duration: '32 horas',
    certification: 'Válido 3 años',
    gradient: 'from-red-500 to-orange-500',
    icon: FireIcon,
    objectives: [
      'Identificar los diferentes tipos de fuego',
      'Aprender técnicas de prevención de incendios',
      'Manejar equipos de detección y extinción',
      'Desarrollar protocolos de emergencia',
      'Formar brigadas de emergencia competentes'
    ],
    benefits: [
      'Prevención efectiva de incendios industriales',
      'Respuesta rápida ante emergencias',
      'Cumplimiento de normativas de seguridad',
      'Protección de vidas y bienes',
      'Reducción de pérdidas materiales'
    ],
    requirements: [
      'Mayor de 18 años',
      'Buen estado de salud física',
      'Capacidad de trabajo en equipo',
      'Disponibilidad para prácticas nocturnas',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos del Fuego y Combustión',
      'Tipos de Fuego y Agentes Extintores',
      'Sistemas de Detección y Alarma',
      'Equipos de Extinción Portátiles',
      'Sistemas Fijos de Extinción',
      'Protocolos de Emergencia',
      'Prácticas de Extinción Real'
    ],
    instructor: 'Cpt. Roberto Silva - Bombero Profesional Certificado',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR y campo de prácticas',
    schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
    category: 'Emergencias',
    students: 1100,
    rating: 4.9
  },
  {
    name: 'Primeros Auxilios Básicos y Avanzados',
    slug: 'primeros-auxilios-basicos-avanzados',
    image: '/primeros_auxilios.png',
    description: 'Capacitación en primeros auxilios básicos y avanzados con administración de oxígeno para emergencias.',
    detailedDescription: 'Nuestro curso de Primeros Auxilios Básicos y Avanzados proporciona formación integral en atención prehospitalaria y primeros auxilios. Los participantes aprenderán técnicas de reanimación, manejo de heridas y atención de emergencias médicas.',
    duration: '16 horas',
    certification: 'Válido 1 año',
    gradient: 'from-green-500 to-emerald-500',
    icon: HeartIcon,
    objectives: [
      'Aplicar técnicas de primeros auxilios',
      'Realizar reanimación cardiopulmonar',
      'Manejar emergencias médicas',
      'Proporcionar atención prehospitalaria',
      'Coordinar con servicios médicos'
    ],
    benefits: [
      'Salvamento de vidas',
      'Respuesta rápida ante emergencias',
      'Reducción de secuelas',
      'Cumplimiento normativo',
      'Mejora en la seguridad laboral'
    ],
    requirements: [
      'Mayor de 18 años',
      'Buen estado de salud física',
      'Capacidad de trabajo bajo presión',
      'Disponibilidad para prácticas',
      'Compromiso con la salud'
    ],
    modules: [
      'Fundamentos de Primeros Auxilios',
      'Reanimación Cardiopulmonar',
      'Manejo de Heridas y Hemorragias',
      'Atención de Fracturas',
      'Emergencias Médicas',
      'Administración de Oxígeno',
      'Prácticas de Simulación'
    ],
    instructor: 'Dr. María López - Médico de Emergencias',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Emergencias',
    students: 2100,
    rating: 4.9
  },
  {
    name: 'Materiales y Mercancías Peligrosas',
    slug: 'materiales-mercancias-peligrosas',
    image: '/materiales_peligrosos.png',
    description: 'Manejo seguro de materiales peligrosos y mercancías peligrosas con control de emergencias químicas.',
    detailedDescription: 'Nuestro curso de Materiales y Mercancías Peligrosas proporciona formación integral en el manejo, almacenamiento y transporte de sustancias peligrosas. Los participantes aprenderán sobre clasificación, etiquetado y procedimientos de seguridad.',
    duration: '40 horas',
    certification: 'Válido 3 años',
    gradient: 'from-yellow-500 to-orange-500',
    icon: BeakerIcon,
    objectives: [
      'Identificar materiales peligrosos',
      'Aplicar procedimientos de seguridad',
      'Manejar equipos de protección',
      'Implementar protocolos de emergencia',
      'Cumplir normativas de transporte'
    ],
    benefits: [
      'Prevención de accidentes químicos',
      'Cumplimiento normativo',
      'Protección del personal',
      'Reducción de riesgos ambientales',
      'Certificación reconocida'
    ],
    requirements: [
      'Mayor de 18 años',
      'Conocimientos básicos de química',
      'Buen estado de salud',
      'Capacidad de atención al detalle',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Clasificación de Materiales Peligrosos',
      'Etiquetado y Documentación',
      'Equipos de Protección Personal',
      'Almacenamiento Seguro',
      'Transporte de Materiales Peligrosos',
      'Protocolos de Emergencia',
      'Legislación y Normativas'
    ],
    instructor: 'Qco. Laura Fernández - Especialista en Química Industrial',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Ambiental',
    students: 750,
    rating: 4.7
  },
  {
    name: 'Operación Segura de Montacargas',
    slug: 'operacion-segura-montacargas',
    image: '/montacargas .png',
    description: 'Certificación de operarios de montacargas con técnicas de manejo seguro y mantenimiento preventivo.',
    detailedDescription: 'Nuestro curso de Operación Segura de Montacargas está diseñado para proporcionar a los participantes los conocimientos teóricos y prácticos necesarios para operar montacargas de manera segura y eficiente. El programa incluye formación en normativas de seguridad, mantenimiento preventivo, y procedimientos de emergencia.',
    duration: '24 horas',
    certification: 'Válido 2 años',
    gradient: 'from-blue-500 to-cyan-500',
    icon: TruckIcon,
    objectives: [
      'Comprender las normativas de seguridad para operación de montacargas',
      'Desarrollar habilidades prácticas para operación segura',
      'Aprender procedimientos de mantenimiento preventivo',
      'Conocer protocolos de emergencia y primeros auxilios',
      'Obtener certificación oficial reconocida'
    ],
    benefits: [
      'Reducción significativa de accidentes laborales',
      'Cumplimiento de normativas de seguridad industrial',
      'Mejora en la eficiencia operativa',
      'Certificación reconocida a nivel nacional',
      'Soporte técnico continuo post-certificación'
    ],
    requirements: [
      'Mayor de 18 años',
      'Documento de identidad vigente',
      'Certificado médico ocupacional',
      'Experiencia básica en operación de equipos (deseable)',
      'Compromiso con la seguridad laboral'
    ],
    modules: [
      'Normativas y Legislación de Seguridad',
      'Anatomía y Funcionamiento del Montacargas',
      'Procedimientos de Operación Segura',
      'Mantenimiento Preventivo y Correctivo',
      'Protocolos de Emergencia y Evacuación',
      'Prácticas Supervisadas en Campo',
      'Evaluación Teórica y Práctica'
    ],
    instructor: 'Ing. Carlos Rodríguez - Especialista en Seguridad Industrial',
    price: 'Consultar',
    location: 'Instalaciones del cliente o centro de entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM | Sábados: 8:00 AM - 12:00 PM',
    category: 'Operaciones',
    students: 850,
    rating: 4.8
  },
  {
    name: 'LOTO - Bloqueo y Etiquetado',
    slug: 'loto-bloqueo-etiquetado',
    image: '/Lockout_tagout.png',
    description: 'Seguridad en trabajos con energías peligrosas mediante procedimientos de bloqueo y etiquetado.',
    detailedDescription: 'El curso de LOTO - Bloqueo y Etiquetado proporciona formación en procedimientos de bloqueo y etiquetado para mantenimiento seguro de equipos energizados. Incluye protocolos de seguridad y prevención de accidentes.',
    duration: '16 horas',
    certification: 'Válido 2 años',
    gradient: 'from-gray-500 to-slate-600',
    icon: LockClosedIcon,
    objectives: [
      'Aplicar procedimientos LOTO',
      'Identificar fuentes de energía',
      'Implementar bloqueos seguros',
      'Prevenir energización accidental',
      'Coordinar mantenimiento seguro'
    ],
    benefits: [
      'Prevención de accidentes eléctricos',
      'Mantenimiento seguro',
      'Cumplimiento normativo',
      'Protección del personal',
      'Reducción de riesgos'
    ],
    requirements: [
      'Mayor de 18 años',
      'Conocimientos básicos de electricidad',
      'Experiencia en mantenimiento',
      'Capacidad de atención al detalle',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Lockout Tagout',
      'Identificación de Fuentes de Energía',
      'Procedimientos de Bloqueo',
      'Equipos de Bloqueo',
      'Protocolos de Seguridad',
      'Coordinación de Mantenimiento',
      'Prácticas de Campo'
    ],
    instructor: 'Ing. Carlos Rodríguez - Especialista en Mantenimiento',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Mantenimiento',
    students: 650,
    rating: 4.8
  },
  {
    name: 'Brigadas de Emergencia',
    slug: 'brigadas-emergencia',
    image: '/brigada_de_emergencia.png',
    description: 'Formación de brigadas de emergencia con simulaciones y sistema comando de incidentes (SCI).',
    detailedDescription: 'El curso de Brigadas de Emergencia capacita a los participantes para formar parte de equipos de respuesta rápida ante emergencias. Incluye formación en extinción de incendios, rescate y primeros auxilios.',
    duration: '32 horas',
    certification: 'Válido 2 años',
    gradient: 'from-indigo-500 to-purple-500',
    icon: UserGroupIcon,
    objectives: [
      'Formar brigadistas competentes',
      'Desarrollar habilidades de respuesta',
      'Capacitar en extinción de incendios',
      'Enseñar técnicas de rescate',
      'Implementar primeros auxilios'
    ],
    benefits: [
      'Respuesta inmediata ante emergencias',
      'Protección del personal',
      'Cumplimiento de normativas',
      'Reducción de daños',
      'Mejora en la seguridad'
    ],
    requirements: [
      'Mayor de 18 años',
      'Buen estado de salud física',
      'Capacidad de trabajo en equipo',
      'Disponibilidad 24/7',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Brigadas de Emergencia',
      'Extinción de Incendios',
      'Técnicas de Rescate',
      'Primeros Auxilios Avanzados',
      'Coordinación de Emergencias',
      'Equipos y Herramientas',
      'Prácticas de Campo'
    ],
    instructor: 'Cpt. Roberto Silva - Bombero Profesional',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Sábado: 8:00 AM - 6:00 PM',
    category: 'Emergencias',
    students: 920,
    rating: 4.9
  },
  {
    name: 'Buceo Scuba Diver',
    slug: 'buceo-scuba-diver',
    image: '/buceo.png',
    description: 'Certificación de buceo scuba diver, advanced y máster scuba diver con instructor internacional NAUI.',
    detailedDescription: 'El curso de Buceo Scuba Diver proporciona formación especializada en buceo recreativo y comercial. Incluye formación en equipos de buceo, procedimientos de seguridad y técnicas especializadas.',
    duration: '40 horas',
    certification: 'Válido 2 años',
    gradient: 'from-cyan-500 to-blue-500',
    icon: GlobeAltIcon,
    objectives: [
      'Realizar buceo seguro',
      'Manejar equipos de buceo',
      'Aplicar técnicas especializadas',
      'Prevenir accidentes subacuáticos',
      'Coordinar operaciones de buceo'
    ],
    benefits: [
      'Buceo seguro y profesional',
      'Certificación reconocida',
      'Trabajo en entornos acuáticos',
      'Cumplimiento normativo',
      'Especialización técnica'
    ],
    requirements: [
      'Mayor de 18 años',
      'Excelente estado de salud física',
      'Capacidad de natación avanzada',
      'Sin problemas cardíacos',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Buceo',
      'Equipos de Buceo',
      'Fisiología del Buceo',
      'Técnicas de Buceo',
      'Buceo Recreativo',
      'Emergencias Subacuáticas',
      'Prácticas en Agua'
    ],
    instructor: 'Cpt. Roberto Silva - Buzo Profesional Certificado',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR y piscina',
    schedule: 'Lunes a Sábado: 8:00 AM - 6:00 PM',
    category: 'Especializado',
    students: 320,
    rating: 4.9
  },
  {
    name: 'Sistema de Gestión ISO 9001',
    slug: 'sistema-gestion-iso-9001',
    image: '/control_de_calidad.png',
    description: 'Sistema de gestión de la calidad ISO 9001 con implementación y auditorías internas.',
    detailedDescription: 'El curso de Sistema de Gestión ISO 9001 proporciona formación en sistemas de gestión de calidad ISO 9001. Los participantes aprenderán sobre implementación, auditorías y mejora continua de procesos.',
    duration: '40 horas',
    certification: 'Válido 3 años',
    gradient: 'from-blue-600 to-indigo-600',
    icon: DocumentCheckIcon,
    objectives: [
      'Implementar sistemas de calidad ISO 9001',
      'Realizar auditorías de calidad',
      'Desarrollar procesos de mejora continua',
      'Gestionar documentación de calidad',
      'Preparar para certificación ISO'
    ],
    benefits: [
      'Mejora en la calidad de productos',
      'Certificación ISO 9001',
      'Optimización de procesos',
      'Satisfacción del cliente',
      'Competitividad empresarial'
    ],
    requirements: [
      'Mayor de 18 años',
      'Conocimientos básicos de gestión',
      'Experiencia en procesos empresariales',
      'Capacidad de análisis',
      'Compromiso con la calidad'
    ],
    modules: [
      'Fundamentos de Gestión de Calidad',
      'Norma ISO 9001:2015',
      'Implementación de SGC',
      'Auditorías de Calidad',
      'Mejora Continua',
      'Documentación de Calidad',
      'Preparación para Certificación'
    ],
    instructor: 'Ing. David García - Auditor ISO Certificado',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Calidad',
    students: 650,
    rating: 4.8
  }
];

export default function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    servicio: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Desenvolver los parámetros usando React.use()
  const { slug } = use(params);
  
  // Encontrar el curso basado en el slug
  const course = courses.find(c => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Curso no encontrado</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/60 to-slate-900/80"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors duration-200"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Volver al Inicio
            </Link>

            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
                <course.icon className="h-5 w-5 mr-3" />
                {course.category}
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
                {course.name}
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
                {course.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{course.duration}</div>
                  <div className="text-sm text-gray-300 font-medium">Duración del Curso</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{course.certification}</div>
                  <div className="text-sm text-gray-300 font-medium">Certificación</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{course.students}+</div>
                  <div className="text-sm text-gray-300 font-medium">Estudiantes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8">
                <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <Image
                    src={course.image}
                    alt={course.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Descripción Detallada</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {course.detailedDescription}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Objetivos del Curso</h3>
                <ul className="space-y-3">
                  {course.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Beneficios</h3>
                <ul className="space-y-3">
                  {course.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <StarIcon className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Contenido del Curso
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Módulos especializados diseñados para proporcionar una formación integral y práctica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {course.modules.map((module, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${course.gradient} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <AcademicCapIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Módulo {index + 1}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {module}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements and Info Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Requisitos de Admisión</h2>
              <ul className="space-y-4">
                {course.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Información del Curso</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <UserIcon className="h-6 w-6 text-blue-400 mr-3" />
                    <span className="text-gray-300"><strong>Instructor:</strong> {course.instructor}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-6 w-6 text-blue-400 mr-3" />
                    <span className="text-gray-300"><strong>Ubicación:</strong> {course.location}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-6 w-6 text-blue-400 mr-3" />
                    <span className="text-gray-300"><strong>Horario:</strong> {course.schedule}</span>
                  </div>
                  <div className="flex items-center">
                    <TrophyIcon className="h-6 w-6 text-blue-400 mr-3" />
                    <span className="text-gray-300"><strong>Inversión:</strong> {course.price}</span>
                  </div>
                  <div className="flex items-center">
                    <StarIcon className="h-6 w-6 text-blue-400 mr-3" />
                    <span className="text-gray-300"><strong>Calificación:</strong> ⭐ {course.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              ¿Interesado en este curso?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Completa el formulario y nos pondremos en contacto contigo para brindarte toda la información necesaria.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">
                      Nombre Completo *
                    </label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        placeholder="Ingrese su nombre completo"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Correo Electrónico *
                    </label>
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        placeholder="correo@ejemplo.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-slate-700 mb-2">
                      Teléfono *
                    </label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        placeholder="+57 300 123 4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-slate-700 mb-2">
                      Empresa
                    </label>
                    <div className="relative">
                      <BuildingOfficeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        placeholder="Nombre de su empresa"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 mb-2">
                    Mensaje Adicional
                  </label>
                  <div className="relative">
                    <ChatBubbleLeftRightIcon className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      rows={4}
                      className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                      placeholder="Cuéntenos más sobre sus necesidades específicas..."
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <p className="text-sm text-slate-500">
                    * Campos obligatorios
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-blue-700 hover:to-cyan-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white inline mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      'Solicitar Información'
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-3xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">¡Solicitud Enviada!</h3>
                <p className="text-green-700 text-lg mb-6">
                  Gracias por su interés en el curso de {course.name}. Nos pondremos en contacto con usted en las próximas 24 horas.
                </p>
                <Link
                  href="/"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
                >
                  Ver Otros Cursos
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
