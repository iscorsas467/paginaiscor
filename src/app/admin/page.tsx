'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ContentEditor from '@/components/ContentEditor';
import CourseManager from '@/components/CourseManager';
import ContentManager from '@/components/ContentManager';
import AdminDataLoader from '@/components/AdminDataLoader';
import { 
  ChartBarIcon,
  UsersIcon,
  DocumentTextIcon,
  CogIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  CalendarIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  UserGroupIcon,
  InformationCircleIcon,
  PhotoIcon,
  DocumentIcon,
  AdjustmentsHorizontalIcon,
  XMarkIcon,
  HomeIcon,
  NewspaperIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightOnRectangleIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

// Interfaces para el contenido editable del sitio
interface SiteContent {
  home: HomeContent;
  company: CompanyContent;
  team: TeamContent;
  contact: ContactContent;
  global: GlobalContent;
}

interface HomeContent {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    stats: {
      experience: string;
      companies: string;
      certifications: string;
    };
    ctaButtons: {
      primary: { text: string; link: string };
      secondary: { text: string; link: string };
    };
  };
  certificateVerification: {
    title: string;
    description: string;
    placeholder: string;
  };
  services: {
    title: string;
    description: string;
    items: ServiceItem[];
  };
  features: {
    title: string;
    description: string;
    items: FeatureItem[];
  };
  testimonials: {
    title: string;
    description: string;
    items: TestimonialItem[];
  };
  stats: {
    title: string;
    items: StatItem[];
  };
  cta: {
    title: string;
    description: string;
    button: { text: string; link: string };
  };
}

interface CompanyContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  about: {
    title: string;
    description: string;
    services: string[];
    certifications: string[];
    experience: string;
  };
  mission: {
    title: string;
    description: string;
  };
  vision: {
    title: string;
    description: string;
  };
  strengths: {
    title: string;
    description: string;
    items: StrengthItem[];
  };
  values: {
    title: string;
    description: string;
    items: ValueItem[];
  };
}

interface TeamContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    stats: {
      members: string;
      departments: string;
      experience: string;
    };
  };
  leadership: {
    title: string;
    description: string;
    members: TeamMember[];
  };
  departments: {
    title: string;
    description: string;
    items: DepartmentItem[];
  };
  fullTeam: {
    title: string;
    description: string;
    members: TeamMember[];
  };
}

interface ContactContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    stats: {
      phone: string;
      email: string;
      location: string;
    };
  };
  form: {
    title: string;
    description: string;
    fields: FormField[];
  };
  info: {
    title: string;
    description: string;
    items: ContactItem[];
  };
  faq: {
    title: string;
    description: string;
    items: FAQItem[];
  };
}

interface GlobalContent {
  company: {
    name: string;
    slogan: string;
    logo: string;
    favicon: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    whatsapp: string;
    social: {
      facebook: string;
      instagram: string;
      linkedin: string;
      twitter: string;
    };
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

// Interfaces auxiliares
interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
}

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface TestimonialItem {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: string;
}

interface StrengthItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  phone: string;
  email: string;
  linkedin: string;
  image: string;
  gradient: string;
}

interface DepartmentItem {
  id: string;
  name: string;
  description: string;
  members: number;
  icon: string;
  gradient: string;
}

interface FormField {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
}

interface ContactItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface Course {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  duration: string;
  certification: string;
  gradient: string;
  detailedDescription: string;
  objectives: string[];
  benefits: string[];
  requirements: string[];
  modules: string[];
  instructor: string;
  price: string;
  location: string;
  schedule: string;
}

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [showCourseManager, setShowCourseManager] = useState(false);
  const [editingCourse, setEditingCourse] = useState<any>(null);
  const [showContentManager, setShowContentManager] = useState(false);
  const [editingContent, setEditingContent] = useState<any>(null);
  const [editingSection, setEditingSection] = useState<string>('');
  const [editingSubsection, setEditingSubsection] = useState<string>('');
  const router = useRouter();

  // Datos de ejemplo para el dashboard
  const stats = {
    totalUsers: 1247,
    totalCourses: 16,
    activeCertifications: 892,
    pendingRequests: 23
  };

  // Datos de ejemplo para cursos - Todos los servicios del portafolio
  const courses: Course[] = [
    {
      id: '1',
      name: 'Montacargas',
      slug: 'montacargas',
      image: '/montacargas.png', // <- sin espacio
      description: 'Capacitación y certificación en operación segura de montacargas, cumpliendo normativas de seguridad industrial.',
      duration: '40 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-orange-600 to-red-600',
      detailedDescription: 'Curso completo de operación segura de montacargas que incluye teoría y práctica para garantizar la seguridad en el manejo de equipos.',
      objectives: ['Aprender operación segura de montacargas', 'Conocer normativas vigentes de seguridad', 'Desarrollar habilidades prácticas'],
      benefits: ['Certificación oficial reconocida', 'Mejores oportunidades laborales', 'Reducción de accidentes laborales'],
      requirements: ['Mayor de 18 años', 'Documentos de identidad', 'Experiencia básica en equipos'],
      modules: ['Teoría de montacargas', 'Práctica operacional', 'Normativas de seguridad', 'Mantenimiento preventivo'],
      instructor: 'Ing. Carlos Mendoza',
      price: '$450.000 COP',
      location: 'Bogotá, Colombia',
      schedule: 'Lunes a Viernes 8:00 AM - 5:00 PM'
    },
    {
      id: '2',
      name: 'Control del Fuego',
      slug: 'control-del-fuego',
      image: '/fuego.png',
      description: 'Sistemas de prevención, detección y extinción de incendios con equipos certificados y personal capacitado.',
      duration: '32 horas',
      certification: 'Certificado válido por 3 años',
      gradient: 'from-red-600 to-orange-600',
      detailedDescription: 'Capacitación integral en prevención y control de incendios para entornos industriales.',
      objectives: ['Prevenir incendios industriales', 'Manejar equipos de extinción', 'Implementar protocolos de emergencia'],
      benefits: ['Certificación de bomberos', 'Seguridad laboral mejorada', 'Cumplimiento normativo'],
      requirements: ['Mayor de 18 años', 'Buen estado físico', 'Disponibilidad completa'],
      modules: ['Prevención de incendios', 'Equipos de extinción', 'Protocolos de emergencia', 'Prácticas de evacuación'],
      instructor: 'Cpt. Juan Ramírez',
      price: '$380.000 COP',
      location: 'Bogotá, Colombia',
      schedule: 'Lunes a Viernes 8:00 AM - 4:00 PM'
    },
    {
      id: '3',
      name: 'Planes de emergencia',
      slug: 'planes-de-emergencia',
      image: '/plandeemergencia.png',
      description: 'Desarrollo e implementación de planes de emergencia y evacuación adaptados a cada empresa.',
      duration: '24 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-yellow-600 to-orange-600',
      detailedDescription: 'Desarrollo de planes de emergencia personalizados para diferentes tipos de empresas.',
      objectives: ['Crear planes de emergencia', 'Implementar protocolos', 'Capacitar personal'],
      benefits: ['Cumplimiento legal', 'Reducción de riesgos', 'Preparación organizacional'],
      requirements: ['Conocimientos básicos de seguridad', 'Responsabilidad organizacional'],
      modules: ['Análisis de riesgos', 'Desarrollo de protocolos', 'Capacitación de brigadas', 'Simulacros'],
      instructor: 'Ing. María González',
      price: '$320.000 COP',
      location: 'Bogotá, Colombia',
      schedule: 'Lunes a Viernes 9:00 AM - 3:00 PM'
    },
    {
      id: '4',
      name: 'Brigada de emergencia',
      slug: 'brigada-de-emergencia',
      image: '/brigada_de_emergencia.png',
      description: 'Formación y entrenamiento de brigadas de emergencia para respuesta rápida ante incidentes.',
      duration: '48 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-red-600 to-pink-600',
      detailedDescription: 'Formación completa de brigadas de emergencia para respuesta efectiva ante incidentes.',
      objectives: ['Formar brigadas de emergencia', 'Capacitar en primeros auxilios', 'Entrenar en evacuación'],
      benefits: ['Respuesta rápida a emergencias', 'Reducción de daños', 'Seguridad organizacional'],
      requirements: ['Buen estado físico', 'Disponibilidad 24/7', 'Compromiso con la seguridad'],
      modules: ['Primeros auxilios', 'Evacuación y rescate', 'Control de emergencias', 'Coordinación de brigadas'],
      instructor: 'Dr. Ana Martínez',
      price: '$520.000 COP',
      location: 'Bogotá, Colombia',
      schedule: 'Lunes a Viernes 8:00 AM - 6:00 PM'
    },
    {
      id: '5',
      name: 'Materiales Peligrosos',
      slug: 'materiales-peligrosos',
      image: '/materiales_peligrosos.png',
      description: 'Manejo seguro de materiales peligrosos, almacenamiento y transporte según normativas vigentes.',
      duration: '40 horas',
      certification: 'Certificado válido por 3 años',
      gradient: 'from-yellow-600 to-orange-600',
      detailedDescription: 'Capacitación especializada en el manejo seguro de materiales peligrosos.',
      objectives: ['Manejar materiales peligrosos', 'Implementar protocolos de seguridad', 'Cumplir normativas'],
      benefits: ['Certificación HAZMAT', 'Seguridad en el trabajo', 'Cumplimiento legal'],
      requirements: ['Mayor de 18 años', 'Experiencia en logística', 'Conocimientos de química básica'],
      modules: ['Clasificación de materiales', 'Protocolos de manejo', 'Almacenamiento seguro', 'Transporte especializado'],
      instructor: 'Qco. Roberto Silva',
      price: '$480.000 COP',
      location: 'Bogotá, Colombia',
      schedule: 'Lunes a Viernes 8:00 AM - 5:00 PM'
    },
    {
      id: '6',
      name: 'Tareas de alto riesgo',
      slug: 'tareas-de-alto-riesgo',
      image: '/tareas_de_alto_riesgo.png',
      description: 'Supervisión y control de trabajos en altura, espacios confinados y otras tareas de alto riesgo.',
      duration: '56 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-purple-600 to-indigo-600',
      detailedDescription: 'Capacitación integral para trabajos en altura y espacios confinados.',
      objectives: ['Realizar trabajos en altura', 'Supervisar espacios confinados', 'Implementar medidas de seguridad'],
      benefits: ['Certificación de altura', 'Seguridad en trabajos críticos', 'Cumplimiento normativo'],
      requirements: ['Buen estado físico', 'Sin vértigo', 'Experiencia en construcción'],
      modules: ['Trabajos en altura', 'Espacios confinados', 'Equipos de protección', 'Supervisión de seguridad'],
      instructor: 'Ing. Luis Herrera',
      price: '$650.000 COP',
      location: 'Bogotá, Colombia',
      schedule: 'Lunes a Viernes 8:00 AM - 6:00 PM'
    },
    {
      id: '7',
      name: 'Seguridad acuática',
      slug: 'seguridad-acuatica',
      image: '/seguridad_acuatica.png',
      description: 'Protocolos de seguridad para trabajos en entornos acuáticos y actividades subacuáticas.',
      duration: '32 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-blue-600 to-cyan-600',
      detailedDescription: 'Capacitación especializada en seguridad para trabajos en entornos acuáticos.',
      objectives: ['Trabajar en entornos acuáticos', 'Implementar protocolos de seguridad', 'Manejar equipos subacuáticos'],
      benefits: ['Certificación acuática', 'Seguridad en trabajos marítimos', 'Especialización profesional'],
      requirements: ['Buen nadador', 'Estado físico óptimo', 'Sin problemas cardíacos'],
      modules: ['Seguridad acuática', 'Equipos subacuáticos', 'Protocolos de emergencia', 'Trabajos marítimos'],
      instructor: 'Cpt. Marina Acuática',
      price: '$420.000 COP',
      location: 'Cartagena, Colombia',
      schedule: 'Lunes a Viernes 8:00 AM - 4:00 PM'
    },
    {
      id: '8',
      name: 'Seguridad fisica',
      slug: 'seguridad-fisica',
      image: '/seguridad_fisica.png',
      description: 'Implementación de medidas de seguridad física y control de acceso en instalaciones industriales.',
      duration: '24 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-gray-600 to-slate-600',
      detailedDescription: 'Capacitación en seguridad física y control de acceso para instalaciones industriales.',
      objectives: ['Implementar seguridad física', 'Controlar accesos', 'Proteger instalaciones'],
      benefits: ['Seguridad organizacional', 'Protección de activos', 'Cumplimiento normativo'],
      requirements: ['Experiencia en seguridad', 'Conocimientos de sistemas', 'Responsabilidad'],
      modules: ['Sistemas de seguridad', 'Control de acceso', 'Vigilancia electrónica', 'Protocolos de seguridad'],
      instructor: 'Ing. Seguridad Física',
      price: '$350.000 COP',
      location: 'Bogotá, Colombia',
      schedule: 'Lunes a Viernes 9:00 AM - 3:00 PM'
    },
    {
      id: '9',
      name: 'Primeros auxilios',
      slug: 'primeros-auxilios',
      image: '/primeros_auxilios.png',
      description: 'Capacitación en primeros auxilios y atención prehospitalaria para emergencias médicas.',
      duration: '16 horas',
      certification: 'Certificado válido por 1 año',
      gradient: 'from-green-600 to-emerald-600',
      detailedDescription: 'Capacitación básica en primeros auxilios para atención de emergencias médicas.',
      objectives: ['Aplicar primeros auxilios', 'Atender emergencias', 'Estabilizar pacientes'],
      benefits: ['Certificación en primeros auxilios', 'Capacidad de respuesta', 'Seguridad laboral'],
      requirements: ['Mayor de 18 años', 'Buen estado de salud', 'Disposición para ayudar'],
      modules: ['Evaluación primaria', 'RCP básico', 'Control de hemorragias', 'Inmovilización'],
      instructor: 'Dr. Emergencias',
      price: '$280.000 COP',
      location: 'Bogotá, Colombia',
      schedule: 'Sábados 8:00 AM - 4:00 PM'
    },
    {
      id: '10',
      name: 'Gestión de calidad',
      slug: 'gestion-de-calidad',
      image: '/control_de_calidad.png',
      description: 'Sistemas de gestión de calidad ISO 9001 y auditorías para optimizar procesos empresariales.',
      duration: '40 horas',
      certification: 'Certificado válido por 3 años',
      gradient: 'from-blue-600 to-cyan-600',
      detailedDescription: 'Implementación de sistemas de gestión de calidad ISO 9001.',
      objectives: ['Implementar ISO 9001', 'Realizar auditorías', 'Optimizar procesos'],
      benefits: ['Certificación ISO', 'Mejora de procesos', 'Competitividad empresarial'],
      requirements: ['Conocimientos de gestión', 'Experiencia empresarial', 'Compromiso organizacional'],
      modules: ['Fundamentos ISO 9001', 'Implementación de SGC', 'Auditorías internas', 'Mejora continua'],
      instructor: 'Ing. Calidad Total',
      price: '$580.000 COP',
      location: 'Bogotá, Colombia',
      schedule: 'Lunes a Viernes 8:00 AM - 5:00 PM'
    },
    {
      id: '11',
      name: 'Inspecciones certificadas',
      slug: 'inspecciones-certificadas',
      image: '/inspecciones_certificadas.png',
      description: 'Inspecciones técnicas certificadas de equipos, instalaciones y cumplimiento normativo.',
      duration: '24 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-indigo-600 to-purple-600',
      detailedDescription: 'Capacitación en inspecciones técnicas certificadas para equipos e instalaciones.',
      objectives: ['Realizar inspecciones técnicas', 'Certificar equipos', 'Cumplir normativas'],
      benefits: ['Certificación técnica', 'Cumplimiento legal', 'Seguridad operacional'],
      requirements: ['Ingeniería técnica', 'Experiencia en inspecciones', 'Conocimientos normativos'],
      modules: ['Normativas técnicas', 'Procedimientos de inspección', 'Certificación de equipos', 'Reportes técnicos'],
      instructor: 'Ing. Inspector Certificado',
      price: '$420.000 COP',
      location: 'Bogotá, Colombia',
      schedule: 'Lunes a Viernes 9:00 AM - 3:00 PM'
    },
    {
      id: '12',
      name: 'Reintegro laboral',
      slug: 'reintegro-laboral',
      image: '/reintegro_laboral.png',
      description: 'Programas de reintegro laboral y adaptación de puestos de trabajo para trabajadores lesionados.',
      duration: '16 horas',
      certification: 'Certificado válido por 1 año',
      gradient: 'from-green-600 to-teal-600',
      detailedDescription: 'Programas especializados para reintegro laboral de trabajadores lesionados.',
      objectives: ['Reintegrar trabajadores', 'Adaptar puestos de trabajo', 'Prevenir nuevas lesiones'],
      benefits: ['Reintegración exitosa', 'Reducción de ausentismo', 'Cumplimiento legal'],
      requirements: ['Evaluación médica', 'Disposición del trabajador', 'Compromiso empresarial'],
      modules: ['Evaluación de capacidades', 'Adaptación de puestos', 'Seguimiento médico', 'Prevención de recaídas'],
      instructor: 'Dr. Rehabilitación Laboral',
      price: '$320.000 COP',
      location: 'Bogotá, Colombia',
      schedule: 'Lunes a Viernes 9:00 AM - 3:00 PM'
    },
    {
      id: '13',
      name: 'Alturas',
      slug: 'alturas',
      image: '/alturas.png',
      description: 'Capacitación y certificación en trabajos en altura con equipos de protección personal.',
      duration: '40 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-orange-600 to-red-600',
      detailedDescription: 'Capacitación especializada en trabajos en altura con equipos de protección personal.',
      objectives: ['Trabajar en altura', 'Usar equipos de protección', 'Implementar medidas de seguridad'],
      benefits: ['Certificación de altura', 'Seguridad en trabajos críticos', 'Cumplimiento normativo'],
      requirements: ['Buen estado físico', 'Sin vértigo', 'Experiencia en construcción'],
      modules: ['Trabajos en altura', 'Equipos de protección', 'Protocolos de seguridad', 'Rescate en altura'],
      instructor: 'Ing. Alturas Especializado',
      price: '$480.000 COP',
      location: 'Bogotá, Colombia',
      schedule: 'Lunes a Viernes 8:00 AM - 5:00 PM'
    },
    {
      id: '14',
      name: 'Lockout tagout',
      slug: 'lockout-tagout',
      image: '/Lockout_tagout.png',
      description: 'Procedimientos de bloqueo y etiquetado para mantenimiento seguro de equipos energizados.',
      duration: '24 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-slate-600 to-gray-600',
      detailedDescription: 'Capacitación en procedimientos de bloqueo y etiquetado para mantenimiento seguro.',
      objectives: ['Implementar LOTO', 'Mantener equipos energizados', 'Prevenir accidentes'],
      benefits: ['Seguridad en mantenimiento', 'Prevención de accidentes', 'Cumplimiento OSHA'],
      requirements: ['Personal de mantenimiento', 'Conocimientos eléctricos', 'Responsabilidad'],
      modules: ['Procedimientos LOTO', 'Equipos de bloqueo', 'Protocolos de seguridad', 'Mantenimiento seguro'],
      instructor: 'Ing. Mantenimiento Industrial',
      price: '$380.000 COP',
      location: 'Bogotá, Colombia',
      schedule: 'Lunes a Viernes 9:00 AM - 3:00 PM'
    },
    {
      id: '15',
      name: 'Espacios confinados',
      slug: 'espacios-confinados',
      image: '/Espacios_confinados.png',
      description: 'Entrenamiento y supervisión para trabajos en espacios confinados con protocolos de seguridad.',
      duration: '40 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-purple-600 to-indigo-600',
      detailedDescription: 'Capacitación especializada para trabajos en espacios confinados.',
      objectives: ['Trabajar en espacios confinados', 'Supervisar operaciones', 'Implementar protocolos'],
      benefits: ['Certificación especializada', 'Seguridad en trabajos críticos', 'Cumplimiento normativo'],
      requirements: ['Buen estado físico', 'Sin claustrofobia', 'Experiencia industrial'],
      modules: ['Identificación de espacios confinados', 'Protocolos de entrada', 'Supervisión de seguridad', 'Rescate en espacios confinados'],
      instructor: 'Ing. Espacios Confinados',
      price: '$520.000 COP',
      location: 'Bogotá, Colombia',
      schedule: 'Lunes a Viernes 8:00 AM - 5:00 PM'
    },
    {
      id: '16',
      name: 'Buceo',
      slug: 'buceo',
      image: '/buceo.png',
      description: 'Servicios de buceo industrial y comercial con equipos certificados y personal especializado.',
      duration: '80 horas',
      certification: 'Certificado válido por 3 años',
      gradient: 'from-blue-600 to-cyan-600',
      detailedDescription: 'Capacitación completa en buceo industrial y comercial con equipos certificados.',
      objectives: ['Bucear en entornos industriales', 'Manejar equipos especializados', 'Realizar trabajos subacuáticos'],
      benefits: ['Certificación de buceo', 'Especialización profesional', 'Trabajos especializados'],
      requirements: ['Excelente estado físico', 'Experiencia en natación', 'Sin problemas cardíacos'],
      modules: ['Teoría del buceo', 'Equipos especializados', 'Trabajos subacuáticos', 'Seguridad en buceo'],
      instructor: 'Cpt. Buceo Industrial',
      price: '$850.000 COP',
      location: 'Cartagena, Colombia',
      schedule: 'Lunes a Viernes 8:00 AM - 6:00 PM'
    }
  ];

  const handleLogout = () => {
    router.push('/login');
  };

  const handleEditSection = (section: string, subsection?: string, content?: any) => {
    setEditingSection(section);
    setEditingSubsection(subsection || '');
    
    // Pasar el contenido real de la sección
    if (subsection && content?.[section]?.[subsection]) {
      setEditingContent(content[section][subsection]);
    } else if (content?.[section]) {
      setEditingContent(content[section]);
    } else {
      setEditingContent(null);
    }
    
    setShowContentManager(true);
  };

  const handleCourseEdit = (course?: Course) => {
    setEditingCourse(course || null);
    setShowCourseManager(true);
  };

  const handleCourseSave = async (course: Course) => {
    setIsSaving(true);
    setSaveMessage('');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSaveMessage('Curso guardado exitosamente');
    setIsSaving(false);
    setShowCourseManager(false);
    setEditingCourse(null);
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleCourseDelete = async (courseId: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este curso?')) {
      setIsSaving(true);
      setSaveMessage('');
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSaveMessage('Curso eliminado exitosamente');
      setIsSaving(false);
      setTimeout(() => setSaveMessage(''), 3000);
    }
  };

  const handleContentSave = async (content: any, reload: () => void) => {
    // El ContentManager ya hizo la llamada al API, solo manejamos la notificación
    setSaveMessage('Contenido guardado exitosamente');
    setShowContentManager(false);
    setEditingContent(null);
    setEditingSection('');
    setEditingSubsection('');
    
    // Recargar los datos para mostrar los cambios actualizados
    reload();
    
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const getSectionIcon = (section: string) => {
    switch (section) {
      case 'home': return HomeIcon;
      case 'company': return BuildingOfficeIcon;
      case 'team': return UserGroupIcon;
      case 'contact': return ChatBubbleLeftRightIcon;
      case 'courses': return AcademicCapIcon;
      case 'global': return CogIcon;
      default: return DocumentIcon;
    }
  };

  const getSectionColor = (section: string) => {
    switch (section) {
      case 'home': return 'from-green-500 to-emerald-500';
      case 'company': return 'from-purple-500 to-pink-500';
      case 'team': return 'from-orange-500 to-red-500';
      case 'contact': return 'from-blue-500 to-cyan-500';
      case 'courses': return 'from-indigo-500 to-purple-500';
      case 'global': return 'from-gray-500 to-slate-500';
      default: return 'from-blue-500 to-cyan-500';
    }
  };

  return (
    <AdminDataLoader>
      {({ content, loading, error, saveContent, reload }) => (
        <>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-slate-200/50 sticky top-0 z-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Image
                        src="/iscor_logo_colores.svg"
                        alt="ISCOR Logo"
                        width={140}
                        height={70}
                        className="h-14 w-auto"
                      />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Panel de Administración
                      </h1>
                      <p className="text-sm text-slate-600 font-medium">Gestión integral de ISCOR</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-green-50 rounded-lg border border-green-200">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-green-700">Sistema Activo</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center transform hover:scale-105"
                    >
                      <ArrowRightOnRectangleIcon className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                      Cerrar Sesión
                    </button>
                  </div>
                </div>
              </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Navigation Tabs */}
              <div className="mb-10">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-slate-200/50">
                  <nav className="flex space-x-2">
                    {[
                      { 
                        id: 'dashboard', 
                        name: 'Dashboard', 
                        icon: ChartBarIcon,
                        description: 'Vista general del sistema',
                        color: 'from-blue-500 to-blue-600'
                      },
                      { 
                        id: 'content', 
                        name: 'Contenido', 
                        icon: DocumentIcon,
                        description: 'Gestionar contenido del sitio',
                        color: 'from-green-500 to-green-600'
                      },
                      { 
                        id: 'courses', 
                        name: 'Cursos', 
                        icon: AcademicCapIcon,
                        description: 'Gestión de cursos y certificaciones',
                        color: 'from-purple-500 to-purple-600'
                      },
                      { 
                        id: 'global', 
                        name: 'Configuración', 
                        icon: CogIcon,
                        description: 'Configuración global del sistema',
                        color: 'from-orange-500 to-orange-600'
                      }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`group relative flex-1 flex flex-col items-center px-6 py-4 rounded-xl transition-all duration-300 ${
                          activeTab === tab.id
                            ? 'bg-white shadow-lg transform scale-105'
                            : 'hover:bg-white/50 hover:shadow-md'
                        }`}
                      >
                        <div className={`flex items-center justify-center w-12 h-12 rounded-xl mb-3 transition-all duration-300 ${
                          activeTab === tab.id 
                            ? `bg-gradient-to-r ${tab.color} shadow-lg` 
                            : 'bg-slate-100 group-hover:bg-slate-200'
                        }`}>
                          <tab.icon className={`h-6 w-6 transition-colors duration-300 ${
                            activeTab === tab.id ? 'text-white' : 'text-slate-600 group-hover:text-slate-700'
                          }`} />
                        </div>
                        <span className={`text-sm font-semibold transition-colors duration-300 ${
                          activeTab === tab.id ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-800'
                        }`}>
                          {tab.name}
                        </span>
                        <span className={`text-xs transition-colors duration-300 ${
                          activeTab === tab.id ? 'text-slate-500' : 'text-slate-400 group-hover:text-slate-500'
                        }`}>
                          {tab.description}
                        </span>
                        {activeTab === tab.id && (
                          <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r ${tab.color} rounded-full`}></div>
                        )}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Save Message */}
              {saveMessage && (
                <div className="mb-8 animate-in slide-in-from-top-2 duration-500">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <CheckCircleIcon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-green-900">¡Éxito!</h3>
                        <p className="text-sm text-green-700 font-medium">{saveMessage}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Dashboard Content */}
              {activeTab === 'dashboard' && (
                <div className="space-y-10">
                  {/* Welcome Section */}
                  <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">¡Bienvenido al Panel de Administración!</h2>
                        <p className="text-blue-100 text-lg">Gestiona todo el contenido de ISCOR desde un solo lugar</p>
                      </div>
                      <div className="hidden lg:block">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <ShieldCheckIcon className="h-12 w-12 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Total Usuarios</p>
                          <p className="text-3xl font-bold text-slate-900 mt-2">{stats.totalUsers.toLocaleString('en-US')}</p>
                          <p className="text-xs text-green-600 font-medium mt-1">↗ +12% este mes</p>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <UsersIcon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Cursos Activos</p>
                          <p className="text-3xl font-bold text-slate-900 mt-2">{stats.totalCourses}</p>
                          <p className="text-xs text-blue-600 font-medium mt-1">16 cursos disponibles</p>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <AcademicCapIcon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Certificaciones</p>
                          <p className="text-3xl font-bold text-slate-900 mt-2">{stats.activeCertifications.toLocaleString()}</p>
                          <p className="text-xs text-purple-600 font-medium mt-1">↗ +8% este mes</p>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <DocumentTextIcon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Pendientes</p>
                          <p className="text-3xl font-bold text-slate-900 mt-2">{stats.pendingRequests}</p>
                          <p className="text-xs text-orange-600 font-medium mt-1">Requieren atención</p>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <ClockIcon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions & Info */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Quick Actions */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg">
                          <AdjustmentsHorizontalIcon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 ml-4">Acciones Rápidas</h3>
                      </div>
                      <div className="space-y-4">
                        <button 
                          onClick={() => setActiveTab('courses')}
                          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 border border-blue-200/50"
                        >
                          <div className="flex items-center">
                            <div className="p-2 bg-blue-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                              <AcademicCapIcon className="h-5 w-5 text-white" />
                            </div>
                            <div className="ml-3">
                              <span className="text-sm font-semibold text-blue-900">Gestionar Cursos</span>
                              <p className="text-xs text-blue-600">Agregar y editar cursos</p>
                            </div>
                          </div>
                          <ArrowRightIcon className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        
                        <button 
                          onClick={() => setActiveTab('content')}
                          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-300 border border-green-200/50"
                        >
                          <div className="flex items-center">
                            <div className="p-2 bg-green-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                              <PencilIcon className="h-5 w-5 text-white" />
                            </div>
                            <div className="ml-3">
                              <span className="text-sm font-semibold text-green-900">Editar Contenido</span>
                              <p className="text-xs text-green-600">Modificar páginas del sitio</p>
                            </div>
                          </div>
                          <ArrowRightIcon className="h-5 w-5 text-green-600 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        
                        <button 
                          onClick={() => setActiveTab('global')}
                          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 border border-purple-200/50"
                        >
                          <div className="flex items-center">
                            <div className="p-2 bg-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                              <CogIcon className="h-5 w-5 text-white" />
                            </div>
                            <div className="ml-3">
                              <span className="text-sm font-semibold text-purple-900">Configuración</span>
                              <p className="text-xs text-purple-600">Ajustes globales del sistema</p>
                            </div>
                          </div>
                          <ArrowRightIcon className="h-5 w-5 text-purple-600 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>

                    {/* Contact Info & Links */}
                    <div className="space-y-6">
                      {/* Contact Info */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50 p-8">
                        <div className="flex items-center mb-6">
                          <div className="p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl shadow-lg">
                            <InformationCircleIcon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 ml-4">Información de Contacto</h3>
                        </div>
                        <div className="space-y-4">
                          {content?.contact?.info?.items?.slice(0, 3).map((item: any) => (
                            <div key={item.id} className="flex items-center p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                              <div className="text-2xl mr-4">{item.icon}</div>
                              <div>
                                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                                <p className="text-sm text-slate-600">{item.description}</p>
                              </div>
                            </div>
                          )) || (
                            <>
                              <div className="flex items-center p-3 bg-slate-50 rounded-xl">
                                <BuildingOfficeIcon className="h-6 w-6 text-slate-400 mr-4" />
                                <div>
                                  <p className="text-sm font-semibold text-slate-900">Oficina Principal</p>
                                  <p className="text-sm text-slate-600">Bogotá, Colombia</p>
                                </div>
                              </div>
                              <div className="flex items-center p-3 bg-slate-50 rounded-xl">
                                <PhoneIcon className="h-6 w-6 text-slate-400 mr-4" />
                                <div>
                                  <p className="text-sm font-semibold text-slate-900">Teléfono</p>
                                  <p className="text-sm text-slate-600">+57 300 123 4567</p>
                                </div>
                              </div>
                              <div className="flex items-center p-3 bg-slate-50 rounded-xl">
                                <EnvelopeIcon className="h-6 w-6 text-slate-400 mr-4" />
                                <div>
                                  <p className="text-sm font-semibold text-slate-900">Email</p>
                                  <p className="text-sm text-slate-600">admin@iscor.com</p>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Quick Links */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50 p-8">
                        <div className="flex items-center mb-6">
                          <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-lg">
                            <GlobeAltIcon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 ml-4">Enlaces Rápidos</h3>
                        </div>
                        <div className="space-y-3">
                          <Link href="/" className="group flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-200">
                            <span className="text-sm font-medium text-slate-700">Ver Sitio Web</span>
                            <ArrowRightIcon className="h-4 w-4 text-slate-600 group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                          <Link href="/contacto" className="group flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-200">
                            <span className="text-sm font-medium text-slate-700">Página de Contacto</span>
                            <ArrowRightIcon className="h-4 w-4 text-slate-600 group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                          <Link href="/portafolio" className="group flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-200">
                            <span className="text-sm font-medium text-slate-700">Portafolio de Cursos</span>
                            <ArrowRightIcon className="h-4 w-4 text-slate-600 group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Contenido del Sitio */}
              {activeTab === 'content' && (
                <div className="space-y-10">
                  {/* Header Section */}
                  <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 text-white shadow-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">Gestión de Contenido</h2>
                        <p className="text-green-100 text-lg">Edita y personaliza todo el contenido de tu sitio web</p>
                      </div>
                      <div className="hidden lg:block">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <DocumentIcon className="h-12 w-12 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Sections */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Página de Inicio */}
                    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50 p-8 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <HomeIcon className="h-8 w-8 text-white" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-bold text-slate-900">Página de Inicio</h3>
                          <p className="text-sm text-slate-600">Contenido principal del sitio</p>
                        </div>
                      </div>
                      <p className="text-slate-600 mb-6 leading-relaxed">Edita el contenido principal de la página de inicio, incluyendo hero, servicios, características y testimonios.</p>
                      <div className="space-y-3">
                        <button
                          onClick={() => handleEditSection('home', 'hero', content)}
                          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-300 border border-green-200/50"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            <span className="text-sm font-semibold text-green-900">Sección Hero</span>
                          </div>
                          <span className="text-xs text-green-600">Título, subtítulo, estadísticas</span>
                        </button>
                        <button
                          onClick={() => handleEditSection('home', 'services', content)}
                          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 border border-blue-200/50"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            <span className="text-sm font-semibold text-blue-900">Servicios Destacados</span>
                          </div>
                          <span className="text-xs text-blue-600">Lista de servicios principales</span>
                        </button>
                        <button
                          onClick={() => handleEditSection('home', 'features', content)}
                          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 border border-purple-200/50"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                            <span className="text-sm font-semibold text-purple-900">Características</span>
                          </div>
                          <span className="text-xs text-purple-600">Características principales</span>
                        </button>
                        <button
                          onClick={() => handleEditSection('home', 'testimonials', content)}
                          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl hover:from-orange-100 hover:to-orange-200 transition-all duration-300 border border-orange-200/50"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            <span className="text-sm font-semibold text-orange-900">Testimonios</span>
                          </div>
                          <span className="text-xs text-orange-600">Testimonios de clientes</span>
                        </button>
                      </div>
                    </div>

                    {/* Página de Empresa */}
                    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50 p-8 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <BuildingOfficeIcon className="h-8 w-8 text-white" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-bold text-slate-900">Página de Empresa</h3>
                          <p className="text-sm text-slate-600">Información corporativa</p>
                        </div>
                      </div>
                      <p className="text-slate-600 mb-6 leading-relaxed">Modifica la información sobre la empresa, misión, visión, fortalezas y valores corporativos.</p>
                      <div className="space-y-3">
                        <button
                          onClick={() => handleEditSection('company', 'hero', content)}
                          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 border border-purple-200/50"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                            <span className="text-sm font-semibold text-purple-900">Sección Hero</span>
                          </div>
                          <span className="text-xs text-purple-600">Título y descripción</span>
                        </button>
                        <button
                          onClick={() => handleEditSection('company', 'about', content)}
                          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 border border-blue-200/50"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            <span className="text-sm font-semibold text-blue-900">Información</span>
                          </div>
                          <span className="text-xs text-blue-600">Datos de la empresa</span>
                        </button>
                        <button
                          onClick={() => handleEditSection('company', 'mission', content)}
                          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-300 border border-green-200/50"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            <span className="text-sm font-semibold text-green-900">Misión y Visión</span>
                          </div>
                          <span className="text-xs text-green-600">Propósito corporativo</span>
                        </button>
                        <button
                          onClick={() => handleEditSection('company', 'strengths', content)}
                          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl hover:from-orange-100 hover:to-orange-200 transition-all duration-300 border border-orange-200/50"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            <span className="text-sm font-semibold text-orange-900">Fortalezas</span>
                          </div>
                          <span className="text-xs text-orange-600">Fortalezas y valores</span>
                        </button>
                      </div>
                    </div>

                    {/* Página de Equipo */}
                    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50 p-8 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <div className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <UserGroupIcon className="h-8 w-8 text-white" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-bold text-slate-900">Página de Equipo</h3>
                          <p className="text-sm text-slate-600">Gestión del equipo humano</p>
                        </div>
                      </div>
                      <p className="text-slate-600 mb-6 leading-relaxed">Gestiona la información del equipo, perfiles profesionales y estructura organizacional.</p>
                      <div className="space-y-3">
                        <button
                          onClick={() => handleEditSection('team', 'hero', content)}
                          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl hover:from-orange-100 hover:to-orange-200 transition-all duration-300 border border-orange-200/50"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            <span className="text-sm font-semibold text-orange-900">Sección Hero</span>
                          </div>
                          <span className="text-xs text-orange-600">Título y estadísticas</span>
                        </button>
                        <button
                          onClick={() => handleEditSection('team', 'leadership', content)}
                          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 border border-blue-200/50"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            <span className="text-sm font-semibold text-blue-900">Liderazgo</span>
                          </div>
                          <span className="text-xs text-blue-600">Equipo directivo</span>
                        </button>
                        <button
                          onClick={() => handleEditSection('team', 'departments', content)}
                          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-300 border border-green-200/50"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            <span className="text-sm font-semibold text-green-900">Departamentos</span>
                          </div>
                          <span className="text-xs text-green-600">Áreas organizacionales</span>
                        </button>
                        <button
                          onClick={() => handleEditSection('team', 'fullTeam', content)}
                          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 border border-purple-200/50"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                            <span className="text-sm font-semibold text-purple-900">Equipo Completo</span>
                          </div>
                          <span className="text-xs text-purple-600">Todos los miembros</span>
                        </button>
                      </div>
                    </div>

                    {/* Página de Contacto */}
                    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50 p-8 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-bold text-slate-900">Página de Contacto</h3>
                          <p className="text-sm text-slate-600">Información y comunicación</p>
                        </div>
                      </div>
                      <p className="text-slate-600 mb-6 leading-relaxed">Actualiza la información de contacto, ubicación, formularios y preguntas frecuentes.</p>
                      <div className="space-y-3">
                        <button
                          onClick={() => handleEditSection('contact', 'hero', content)}
                          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 border border-blue-200/50"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            <span className="text-sm font-semibold text-blue-900">Sección Hero</span>
                          </div>
                          <span className="text-xs text-blue-600">Título e información</span>
                        </button>
                        <button
                          onClick={() => handleEditSection('contact', 'form', content)}
                          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-300 border border-green-200/50"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            <span className="text-sm font-semibold text-green-900">Formulario</span>
                          </div>
                          <span className="text-xs text-green-600">Formulario de contacto</span>
                        </button>
                        <button
                          onClick={() => handleEditSection('contact', 'info', content)}
                          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 border border-purple-200/50"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                            <span className="text-sm font-semibold text-purple-900">Información</span>
                          </div>
                          <span className="text-xs text-purple-600">Datos de contacto</span>
                        </button>
                        <button
                          onClick={() => handleEditSection('contact', 'faq', content)}
                          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl hover:from-orange-100 hover:to-orange-200 transition-all duration-300 border border-orange-200/50"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            <span className="text-sm font-semibold text-orange-900">FAQ</span>
                          </div>
                          <span className="text-xs text-orange-600">Preguntas frecuentes</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Gestión de Cursos */}
              {activeTab === 'courses' && (
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-slate-900">Gestión de Cursos</h2>
                    <button
                      onClick={() => handleCourseEdit()}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <PlusIcon className="h-5 w-5 mr-2 inline" />
                      Agregar Nuevo Curso
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {courses.map((course) => (
                      <div key={course.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-shadow duration-200">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <Image
                              src={course.image}
                              alt={course.name}
                              width={80}
                              height={80}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div>
                              <h3 className="text-lg font-semibold text-slate-900">{course.name}</h3>
                              <p className="text-sm text-slate-600">{course.duration} • {course.certification}</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleCourseEdit(course)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                              title="Editar curso"
                            >
                              <PencilIcon className="h-4 w-4" />
                            </button>
                            <button 
                              onClick={() => handleCourseDelete(course.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                              title="Eliminar curso"
                            >
                              <TrashIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        
                        <p
                          className="text-slate-600 mb-4 text-sm"
                          style={{ 
                            display: '-webkit-box', 
                            WebkitLineClamp: 2, 
                            WebkitBoxOrient: 'vertical', 
                            overflow: 'hidden' 
                          }}
                        >
                          {course.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                          <div>
                            <span className="font-medium text-slate-700">Instructor:</span>
                            <p className="text-slate-600">{course.instructor}</p>
                          </div>
                          <div>
                            <span className="font-medium text-slate-700">Precio:</span>
                            <p className="text-slate-600">{course.price}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span className="flex items-center">
                            <MapPinIcon className="h-3 w-3 mr-1" />
                            {course.location}
                          </span>
                          <span className="flex items-center">
                            <ClockIcon className="h-3 w-3 mr-1" />
                            {course.schedule}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Configuración Global */}
              {activeTab === 'global' && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-slate-900">Configuración Global</h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Información de la Empresa */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-r ${getSectionColor('global')} rounded-lg flex items-center justify-center`}>
                          <BuildingOfficeIcon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">Información de la Empresa</h3>
                      </div>
                      <p className="text-slate-600 mb-4">Configura el nombre, slogan, logo y favicon de la empresa.</p>
                      <button
                        onClick={() => handleEditSection('global', 'company', content)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        <PencilIcon className="h-4 w-4 mr-2 inline" />
                        Editar Información
                      </button>
                    </div>

                    {/* Información de Contacto */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-r ${getSectionColor('global')} rounded-lg flex items-center justify-center`}>
                          <PhoneIcon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">Información de Contacto</h3>
                      </div>
                      <p className="text-slate-600 mb-4">Actualiza teléfonos, emails, dirección y redes sociales.</p>
                      <button
                        onClick={() => handleEditSection('global', 'contact', content)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        <PencilIcon className="h-4 w-4 mr-2 inline" />
                        Editar Contacto
                      </button>
                    </div>

                    {/* Configuración SEO */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-r ${getSectionColor('global')} rounded-lg flex items-center justify-center`}>
                          <GlobeAltIcon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">Configuración SEO</h3>
                      </div>
                      <p className="text-slate-600 mb-4">Configura títulos, descripciones y palabras clave para SEO.</p>
                      <button
                        onClick={() => handleEditSection('global', 'seo', content)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        <PencilIcon className="h-4 w-4 mr-2 inline" />
                        Editar SEO
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Course Manager Modal - dentro del render prop */}
          {showCourseManager && (
            <CourseManager
              onClose={() => {
                setShowCourseManager(false);
                setEditingCourse(null);
              }}
              onSave={handleCourseSave}
              initialCourse={editingCourse}
            />
          )}

          {/* Content Manager Modal - dentro del render prop */}
          {showContentManager && (
            <ContentManager
              onClose={() => {
                setShowContentManager(false);
                setEditingContent(null);
                setEditingSection('');
                setEditingSubsection('');
              }}
              onSave={(content) => handleContentSave(content, reload)}
              section={editingSection}
              subsection={editingSubsection}
              initialContent={editingContent}
            />
          )}
        </>
      )}
    </AdminDataLoader>
  );
}
