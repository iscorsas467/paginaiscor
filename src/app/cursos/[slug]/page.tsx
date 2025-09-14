'use client';

import Image from 'next/image';
import { useState, use, useEffect } from 'react';
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
  },
  {
    name: 'Seguridad en Trabajos en Caliente',
    slug: 'seguridad-trabajos-caliente',
    image: '/fuego.png',
    description: 'Procedimientos seguros para trabajos en caliente con control de riesgos de incendio.',
    detailedDescription: 'El curso de Seguridad en Trabajos en Caliente proporciona formación en procedimientos seguros para trabajos que generan calor, chispas o llamas. Incluye evaluación de riesgos, permisos de trabajo y medidas de prevención.',
    duration: '16 horas',
    certification: 'Válido 2 años',
    gradient: 'from-orange-500 to-red-500',
    icon: FireIcon,
    objectives: [
      'Identificar riesgos de trabajos en caliente',
      'Aplicar procedimientos de seguridad',
      'Implementar permisos de trabajo',
      'Manejar equipos de protección',
      'Prevenir incendios industriales'
    ],
    benefits: [
      'Prevención de incendios',
      'Cumplimiento normativo',
      'Protección del personal',
      'Reducción de riesgos',
      'Certificación reconocida'
    ],
    requirements: [
      'Mayor de 18 años',
      'Buen estado de salud física',
      'Experiencia en soldadura o trabajos similares',
      'Capacidad de atención al detalle',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Trabajos en Caliente',
      'Identificación de Riesgos',
      'Permisos de Trabajo',
      'Equipos de Protección',
      'Medidas de Prevención',
      'Procedimientos de Emergencia',
      'Prácticas Supervisadas'
    ],
    instructor: 'Ing. Carlos Rodríguez - Especialista en Prevención de Incendios',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Seguridad Industrial',
    students: 580,
    rating: 4.7
  },
  {
    name: 'Seguridad en el Izaje de Cargas',
    slug: 'seguridad-izaje-cargas',
    image: '/alturas.png',
    description: 'Operación segura de grúas para izaje de cargas con certificación de operarios especializados.',
    detailedDescription: 'El curso de Seguridad en el Izaje de Cargas proporciona formación especializada en operación segura de grúas y equipos de izaje. Incluye evaluación de cargas, señales de mano y procedimientos de seguridad.',
    duration: '32 horas',
    certification: 'Válido 2 años',
    gradient: 'from-yellow-400 to-orange-500',
    icon: BoltIcon,
    objectives: [
      'Operar grúas de manera segura',
      'Evaluar cargas y capacidades',
      'Aplicar señales de mano',
      'Implementar procedimientos de seguridad',
      'Prevenir accidentes de izaje'
    ],
    benefits: [
      'Operación segura de grúas',
      'Prevención de accidentes',
      'Certificación reconocida',
      'Cumplimiento normativo',
      'Mejora en la eficiencia'
    ],
    requirements: [
      'Mayor de 18 años',
      'Buen estado de salud física',
      'Experiencia en operación de equipos',
      'Capacidad de concentración',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Izaje',
      'Tipos de Grúas y Equipos',
      'Evaluación de Cargas',
      'Señales de Mano',
      'Procedimientos de Seguridad',
      'Mantenimiento Preventivo',
      'Prácticas de Campo'
    ],
    instructor: 'Ing. Roberto Silva - Operador de Grúas Certificado',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Operaciones',
    students: 720,
    rating: 4.8
  },
  {
    name: 'Rescate y Salvamento Acuático',
    slug: 'rescate-salvamento-acuatico',
    image: '/seguridad_acuatica.png',
    description: 'Entrenamiento en rescate y salvamento acuático con programa de seguridad para piscinas.',
    detailedDescription: 'El curso de Rescate y Salvamento Acuático proporciona formación especializada en técnicas de rescate en entornos acuáticos. Incluye primeros auxilios acuáticos, uso de equipos de rescate y protocolos de emergencia.',
    duration: '24 horas',
    certification: 'Válido 2 años',
    gradient: 'from-blue-400 to-cyan-500',
    icon: HeartIcon,
    objectives: [
      'Realizar rescates acuáticos seguros',
      'Aplicar primeros auxilios acuáticos',
      'Manejar equipos de rescate',
      'Coordinar operaciones de salvamento',
      'Prevenir accidentes acuáticos'
    ],
    benefits: [
      'Salvamento de vidas',
      'Prevención de ahogamientos',
      'Certificación reconocida',
      'Trabajo en piscinas y playas',
      'Cumplimiento normativo'
    ],
    requirements: [
      'Mayor de 18 años',
      'Excelente capacidad de natación',
      'Buen estado de salud física',
      'Capacidad de trabajo bajo presión',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Rescate Acuático',
      'Técnicas de Natación de Rescate',
      'Primeros Auxilios Acuáticos',
      'Equipos de Rescate',
      'Protocolos de Emergencia',
      'Prevención de Accidentes',
      'Prácticas en Agua'
    ],
    instructor: 'Cpt. María López - Rescatista Acuática Certificada',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR y piscina',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Emergencias',
    students: 450,
    rating: 4.8
  },
  {
    name: 'Sistema de Gestión ISO 14001',
    slug: 'sistema-gestion-iso-14001',
    image: '/control_de_calidad.png',
    description: 'Sistema de gestión de administración ambiental ISO 14001 con programas de educación ambiental.',
    detailedDescription: 'El curso de Sistema de Gestión ISO 14001 proporciona formación en sistemas de gestión ambiental. Los participantes aprenderán sobre implementación, auditorías y mejora continua de procesos ambientales.',
    duration: '32 horas',
    certification: 'Válido 3 años',
    gradient: 'from-green-500 to-emerald-500',
    icon: GlobeAltIcon,
    objectives: [
      'Implementar sistemas ambientales ISO 14001',
      'Realizar auditorías ambientales',
      'Desarrollar programas ambientales',
      'Gestionar aspectos ambientales',
      'Preparar para certificación ISO'
    ],
    benefits: [
      'Mejora en el desempeño ambiental',
      'Certificación ISO 14001',
      'Cumplimiento normativo',
      'Reducción de impactos ambientales',
      'Competitividad empresarial'
    ],
    requirements: [
      'Mayor de 18 años',
      'Conocimientos básicos de gestión ambiental',
      'Experiencia en procesos empresariales',
      'Capacidad de análisis',
      'Compromiso con el medio ambiente'
    ],
    modules: [
      'Fundamentos de Gestión Ambiental',
      'Norma ISO 14001:2015',
      'Implementación de SGA',
      'Auditorías Ambientales',
      'Aspectos e Impactos Ambientales',
      'Programas de Educación Ambiental',
      'Preparación para Certificación'
    ],
    instructor: 'Ing. Laura Fernández - Auditor Ambiental Certificada',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Ambiental',
    students: 380,
    rating: 4.7
  },
  {
    name: 'Seguridad Alimentaria ISO 22000',
    slug: 'seguridad-alimentaria-iso-22000',
    image: '/control_de_calidad.png',
    description: 'Sistema de gestión seguridad alimentaria ISO 22000 con HACCP y aseguramiento de inocuidad.',
    detailedDescription: 'El curso de Seguridad Alimentaria ISO 22000 proporciona formación en sistemas de gestión de seguridad alimentaria. Incluye implementación de HACCP, análisis de peligros y puntos críticos de control.',
    duration: '24 horas',
    certification: 'Válido 2 años',
    gradient: 'from-green-600 to-emerald-600',
    icon: ShieldCheckIcon,
    objectives: [
      'Implementar sistemas de seguridad alimentaria',
      'Aplicar principios HACCP',
      'Identificar peligros alimentarios',
      'Establecer puntos críticos de control',
      'Gestionar la inocuidad alimentaria'
    ],
    benefits: [
      'Aseguramiento de inocuidad alimentaria',
      'Certificación ISO 22000',
      'Cumplimiento normativo',
      'Protección del consumidor',
      'Mejora en la calidad alimentaria'
    ],
    requirements: [
      'Mayor de 18 años',
      'Conocimientos básicos de alimentación',
      'Experiencia en industria alimentaria',
      'Capacidad de atención al detalle',
      'Compromiso con la seguridad alimentaria'
    ],
    modules: [
      'Fundamentos de Seguridad Alimentaria',
      'Norma ISO 22000:2018',
      'Principios HACCP',
      'Análisis de Peligros',
      'Puntos Críticos de Control',
      'Programas de Prerrequisitos',
      'Auditorías de Seguridad Alimentaria'
    ],
    instructor: 'Qco. Ana Martínez - Especialista en Seguridad Alimentaria',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Calidad',
    students: 280,
    rating: 4.8
  },
  {
    name: 'Supervivencia Básico y Avanzado',
    slug: 'supervivencia-basico-avanzado',
    image: '/tareas_de_alto_riesgo.png',
    description: 'Curso de supervivencia básico y avanzado para tripulaciones aéreas de combate y personal especializado.',
    detailedDescription: 'El curso de Supervivencia Básico y Avanzado proporciona formación especializada en técnicas de supervivencia en diferentes entornos. Incluye supervivencia en selva, desierto, montaña y condiciones extremas.',
    duration: '40 horas',
    certification: 'Válido 3 años',
    gradient: 'from-orange-600 to-red-600',
    icon: ExclamationTriangleIcon,
    objectives: [
      'Desarrollar habilidades de supervivencia',
      'Aplicar técnicas en diferentes entornos',
      'Manejar situaciones de emergencia',
      'Construir refugios y obtener agua',
      'Coordinar rescates y evacuaciones'
    ],
    benefits: [
      'Supervivencia en condiciones extremas',
      'Preparación para emergencias',
      'Certificación especializada',
      'Trabajo en entornos remotos',
      'Desarrollo de liderazgo'
    ],
    requirements: [
      'Mayor de 18 años',
      'Excelente estado de salud física',
      'Capacidad de trabajo en condiciones extremas',
      'Experiencia en actividades al aire libre',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Supervivencia',
      'Supervivencia en Selva',
      'Supervivencia en Desierto',
      'Supervivencia en Montaña',
      'Construcción de Refugios',
      'Obtención de Agua y Alimento',
      'Técnicas de Rescate'
    ],
    instructor: 'Cpt. Roberto Silva - Instructor de Supervivencia Militar',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR y campo',
    schedule: 'Lunes a Domingo: 24 horas',
    category: 'Especializado',
    students: 150,
    rating: 4.9
  },
  {
    name: 'Procedimientos Operativos Normalizados NFPA',
    slug: 'procedimientos-operativos-normalizados-nfpa',
    image: '/fuego.png',
    description: 'Implementación de procedimientos operativos normalizados según estándares NFPA para emergencias.',
    detailedDescription: 'El curso de Procedimientos Operativos Normalizados NFPA proporciona formación en la implementación de procedimientos estándar según las normas NFPA. Incluye protocolos de emergencia, procedimientos de respuesta y coordinación de equipos.',
    duration: '24 horas',
    certification: 'Válido 2 años',
    gradient: 'from-red-600 to-orange-600',
    icon: DocumentCheckIcon,
    objectives: [
      'Implementar procedimientos NFPA',
      'Aplicar protocolos de emergencia',
      'Coordinar equipos de respuesta',
      'Gestionar recursos de emergencia',
      'Cumplir estándares internacionales'
    ],
    benefits: [
      'Cumplimiento de estándares NFPA',
      'Procedimientos estandarizados',
      'Mejora en la respuesta a emergencias',
      'Certificación reconocida',
      'Coordinación efectiva de equipos'
    ],
    requirements: [
      'Mayor de 18 años',
      'Experiencia en emergencias',
      'Conocimientos básicos de seguridad',
      'Capacidad de liderazgo',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos NFPA',
      'Procedimientos Operativos',
      'Protocolos de Emergencia',
      'Coordinación de Equipos',
      'Gestión de Recursos',
      'Comunicaciones de Emergencia',
      'Prácticas de Campo'
    ],
    instructor: 'Cpt. Roberto Silva - Especialista NFPA',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Emergencias',
    students: 680,
    rating: 4.8
  },
  {
    name: 'Plan de Emergencias',
    slug: 'plan-emergencias',
    image: '/plandeemergencia.png',
    description: 'Desarrollo e implementación de planes de emergencia y evacuación adaptados a cada empresa.',
    detailedDescription: 'El curso de Plan de Emergencias proporciona formación en el desarrollo e implementación de planes de emergencia empresariales. Incluye evaluación de riesgos, procedimientos de evacuación y coordinación con autoridades.',
    duration: '24 horas',
    certification: 'Válido 2 años',
    gradient: 'from-yellow-600 to-orange-600',
    icon: ShieldCheckIcon,
    objectives: [
      'Desarrollar planes de emergencia',
      'Evaluar riesgos empresariales',
      'Implementar procedimientos de evacuación',
      'Coordinar con autoridades',
      'Capacitar al personal'
    ],
    benefits: [
      'Preparación ante emergencias',
      'Reducción de riesgos',
      'Cumplimiento normativo',
      'Protección del personal',
      'Continuidad operativa'
    ],
    requirements: [
      'Mayor de 18 años',
      'Conocimientos en gestión empresarial',
      'Experiencia en seguridad',
      'Capacidad de planificación',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Planes de Emergencia',
      'Evaluación de Riesgos',
      'Procedimientos de Evacuación',
      'Coordinación con Autoridades',
      'Capacitación del Personal',
      'Simulacros y Prácticas',
      'Actualización de Planes'
    ],
    instructor: 'Ing. Ana Martínez - Especialista en Gestión de Emergencias',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Emergencias',
    students: 520,
    rating: 4.7
  },
  {
    name: 'Análisis de Vulnerabilidad',
    slug: 'analisis-vulnerabilidad',
    image: '/tareas_de_alto_riesgo.png',
    description: 'Evaluación y análisis de vulnerabilidades en instalaciones industriales y comerciales.',
    detailedDescription: 'El curso de Análisis de Vulnerabilidad proporciona formación en la evaluación y análisis de vulnerabilidades en instalaciones. Incluye metodologías de evaluación, identificación de amenazas y desarrollo de medidas de mitigación.',
    duration: '32 horas',
    certification: 'Válido 3 años',
    gradient: 'from-purple-600 to-indigo-600',
    icon: ChartBarIcon,
    objectives: [
      'Evaluar vulnerabilidades de instalaciones',
      'Identificar amenazas potenciales',
      'Desarrollar medidas de mitigación',
      'Aplicar metodologías de análisis',
      'Elaborar informes de vulnerabilidad'
    ],
    benefits: [
      'Identificación de riesgos',
      'Mejora en la seguridad',
      'Prevención de incidentes',
      'Certificación especializada',
      'Optimización de recursos'
    ],
    requirements: [
      'Mayor de 18 años',
      'Conocimientos en seguridad',
      'Experiencia en instalaciones industriales',
      'Capacidad de análisis',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Análisis de Vulnerabilidad',
      'Metodologías de Evaluación',
      'Identificación de Amenazas',
      'Evaluación de Activos',
      'Medidas de Mitigación',
      'Elaboración de Informes',
      'Prácticas de Campo'
    ],
    instructor: 'Ing. David García - Especialista en Análisis de Riesgos',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Seguridad Industrial',
    students: 380,
    rating: 4.8
  },
  {
    name: 'Plan de Evacuación',
    slug: 'plan-evacuacion',
    image: '/plandeemergencia.png',
    description: 'Diseño e implementación de planes de evacuación eficientes y seguros.',
    detailedDescription: 'El curso de Plan de Evacuación proporciona formación en el diseño e implementación de planes de evacuación. Incluye diseño de rutas, señalización, capacitación del personal y coordinación con servicios de emergencia.',
    duration: '16 horas',
    certification: 'Válido 2 años',
    gradient: 'from-green-600 to-emerald-600',
    icon: ArrowRightIcon,
    objectives: [
      'Diseñar planes de evacuación',
      'Establecer rutas de evacuación',
      'Implementar señalización',
      'Capacitar al personal',
      'Coordinar con servicios de emergencia'
    ],
    benefits: [
      'Evacuación eficiente y segura',
      'Reducción de tiempo de evacuación',
      'Cumplimiento normativo',
      'Protección del personal',
      'Mejora en la respuesta'
    ],
    requirements: [
      'Mayor de 18 años',
      'Conocimientos en seguridad',
      'Experiencia en gestión empresarial',
      'Capacidad de planificación',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Evacuación',
      'Diseño de Rutas',
      'Señalización de Emergencia',
      'Capacitación del Personal',
      'Coordinación con Servicios',
      'Simulacros de Evacuación',
      'Actualización de Planes'
    ],
    instructor: 'Ing. Ana Martínez - Especialista en Evacuación',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Emergencias',
    students: 450,
    rating: 4.7
  },
  {
    name: 'Plan de Contingencia',
    slug: 'plan-contingencia',
    image: '/plandeemergencia.png',
    description: 'Desarrollo de planes de contingencia para diferentes escenarios de emergencia.',
    detailedDescription: 'El curso de Plan de Contingencia proporciona formación en el desarrollo de planes de contingencia para diferentes escenarios. Incluye identificación de escenarios, desarrollo de respuestas y coordinación de recursos.',
    duration: '20 horas',
    certification: 'Válido 2 años',
    gradient: 'from-orange-600 to-red-600',
    icon: ExclamationTriangleIcon,
    objectives: [
      'Desarrollar planes de contingencia',
      'Identificar escenarios de riesgo',
      'Establecer respuestas específicas',
      'Coordinar recursos disponibles',
      'Implementar procedimientos de activación'
    ],
    benefits: [
      'Preparación ante diferentes escenarios',
      'Respuesta rápida y efectiva',
      'Cumplimiento normativo',
      'Protección de activos',
      'Continuidad operativa'
    ],
    requirements: [
      'Mayor de 18 años',
      'Conocimientos en gestión de riesgos',
      'Experiencia en planificación',
      'Capacidad de análisis',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Contingencia',
      'Identificación de Escenarios',
      'Desarrollo de Respuestas',
      'Coordinación de Recursos',
      'Procedimientos de Activación',
      'Pruebas y Simulacros',
      'Actualización de Planes'
    ],
    instructor: 'Ing. David García - Especialista en Contingencia',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Emergencias',
    students: 320,
    rating: 4.6
  },
  {
    name: 'Continuidad de los Negocios',
    slug: 'continuidad-negocios',
    image: '/control_de_calidad.png',
    description: 'Planificación para la continuidad de operaciones empresariales durante crisis.',
    detailedDescription: 'El curso de Continuidad de los Negocios proporciona formación en la planificación para mantener operaciones durante crisis. Incluye identificación de procesos críticos, desarrollo de alternativas y recuperación de operaciones.',
    duration: '28 horas',
    certification: 'Válido 3 años',
    gradient: 'from-blue-600 to-cyan-600',
    icon: CpuChipIcon,
    objectives: [
      'Planificar continuidad de negocios',
      'Identificar procesos críticos',
      'Desarrollar alternativas operativas',
      'Establecer planes de recuperación',
      'Implementar medidas de mitigación'
    ],
    benefits: [
      'Continuidad operativa',
      'Reducción de pérdidas',
      'Cumplimiento normativo',
      'Protección de la reputación',
      'Competitividad empresarial'
    ],
    requirements: [
      'Mayor de 18 años',
      'Conocimientos en gestión empresarial',
      'Experiencia en planificación estratégica',
      'Capacidad de análisis',
      'Compromiso con la continuidad'
    ],
    modules: [
      'Fundamentos de Continuidad',
      'Identificación de Procesos Críticos',
      'Análisis de Impacto',
      'Desarrollo de Alternativas',
      'Planes de Recuperación',
      'Pruebas y Simulacros',
      'Actualización de Planes'
    ],
    instructor: 'Ing. Laura Fernández - Especialista en Continuidad',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Gestión',
    students: 280,
    rating: 4.8
  },
  {
    name: 'Simulaciones de Emergencias',
    slug: 'simulaciones-emergencias',
    image: '/brigada_de_emergencia.png',
    description: 'Ejecución de simulacros y simulaciones de emergencias para validar procedimientos.',
    detailedDescription: 'El curso de Simulaciones de Emergencias proporciona formación en la ejecución de simulacros y simulaciones. Incluye diseño de escenarios, coordinación de equipos y evaluación de respuestas.',
    duration: '16 horas',
    certification: 'Válido 1 año',
    gradient: 'from-indigo-600 to-purple-600',
    icon: UserGroupIcon,
    objectives: [
      'Diseñar simulacros de emergencia',
      'Coordinar equipos de respuesta',
      'Evaluar procedimientos',
      'Identificar áreas de mejora',
      'Capacitar al personal'
    ],
    benefits: [
      'Validación de procedimientos',
      'Mejora en la respuesta',
      'Capacitación práctica',
      'Identificación de debilidades',
      'Preparación efectiva'
    ],
    requirements: [
      'Mayor de 18 años',
      'Experiencia en emergencias',
      'Conocimientos en seguridad',
      'Capacidad de liderazgo',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Simulacros',
      'Diseño de Escenarios',
      'Coordinación de Equipos',
      'Ejecución de Simulacros',
      'Evaluación de Respuestas',
      'Análisis de Resultados',
      'Mejora de Procedimientos'
    ],
    instructor: 'Cpt. Roberto Silva - Especialista en Simulacros',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Emergencias',
    students: 650,
    rating: 4.9
  },
  {
    name: 'SCI - Sistema Comando de Incidentes',
    slug: 'sci-sistema-comando-incidentes',
    image: '/brigada_de_emergencia.png',
    description: 'Implementación del Sistema de Comando de Incidentes para gestión de emergencias.',
    detailedDescription: 'El curso de SCI - Sistema Comando de Incidentes proporciona formación en la implementación del sistema de comando unificado. Incluye estructura organizacional, roles y responsabilidades, y coordinación de recursos.',
    duration: '24 horas',
    certification: 'Válido 2 años',
    gradient: 'from-red-600 to-pink-600',
    icon: ShieldCheckIcon,
    objectives: [
      'Implementar sistema de comando',
      'Establecer estructura organizacional',
      'Definir roles y responsabilidades',
      'Coordinar recursos de emergencia',
      'Gestionar comunicaciones'
    ],
    benefits: [
      'Coordinación efectiva',
      'Gestión unificada de incidentes',
      'Optimización de recursos',
      'Certificación reconocida',
      'Mejora en la respuesta'
    ],
    requirements: [
      'Mayor de 18 años',
      'Experiencia en emergencias',
      'Conocimientos en liderazgo',
      'Capacidad de coordinación',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos del SCI',
      'Estructura Organizacional',
      'Roles y Responsabilidades',
      'Coordinación de Recursos',
      'Gestión de Comunicaciones',
      'Planes de Acción',
      'Prácticas de Campo'
    ],
    instructor: 'Cpt. Roberto Silva - Especialista en SCI',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Emergencias',
    students: 420,
    rating: 4.7
  },
  {
    name: 'Control de Emergencias Químicas',
    slug: 'control-emergencias-quimicas',
    image: '/materiales_peligrosos.png',
    description: 'Manejo y control de emergencias químicas y derrames de sustancias peligrosas.',
    detailedDescription: 'El curso de Control de Emergencias Químicas proporciona formación especializada en el manejo de emergencias químicas. Incluye identificación de sustancias, procedimientos de contención y descontaminación.',
    duration: '32 horas',
    certification: 'Válido 3 años',
    gradient: 'from-yellow-600 to-orange-600',
    icon: BeakerIcon,
    objectives: [
      'Identificar sustancias químicas peligrosas',
      'Aplicar procedimientos de contención',
      'Manejar equipos de protección',
      'Implementar descontaminación',
      'Coordinar con especialistas'
    ],
    benefits: [
      'Control efectivo de emergencias químicas',
      'Protección del personal',
      'Minimización de impactos',
      'Certificación especializada',
      'Cumplimiento normativo'
    ],
    requirements: [
      'Mayor de 18 años',
      'Conocimientos básicos de química',
      'Experiencia en manejo de químicos',
      'Buen estado de salud física',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Emergencias Químicas',
      'Identificación de Sustancias',
      'Procedimientos de Contención',
      'Equipos de Protección',
      'Técnicas de Descontaminación',
      'Coordinación con Especialistas',
      'Prácticas de Campo'
    ],
    instructor: 'Qco. Laura Fernández - Especialista en Química Industrial',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Ambiental',
    students: 380,
    rating: 4.8
  },
  {
    name: 'Certificación de Conductores que Transportan',
    slug: 'certificacion-conductores-transportan',
    image: '/montacargas .png',
    description: 'Certificación para conductores que transportan materiales peligrosos.',
    detailedDescription: 'El curso de Certificación de Conductores que Transportan proporciona formación especializada para conductores de vehículos que transportan materiales peligrosos. Incluye normativas de transporte, procedimientos de seguridad y manejo de emergencias.',
    duration: '40 horas',
    certification: 'Válido 3 años',
    gradient: 'from-blue-600 to-cyan-600',
    icon: TruckIcon,
    objectives: [
      'Conocer normativas de transporte',
      'Aplicar procedimientos de seguridad',
      'Manejar materiales peligrosos',
      'Responder ante emergencias',
      'Cumplir regulaciones internacionales'
    ],
    benefits: [
      'Certificación para transporte de materiales peligrosos',
      'Cumplimiento normativo',
      'Seguridad en el transporte',
      'Protección del conductor',
      'Reducción de riesgos'
    ],
    requirements: [
      'Mayor de 18 años',
      'Licencia de conducción vigente',
      'Buen estado de salud física',
      'Experiencia en conducción',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Normativas de Transporte',
      'Clasificación de Materiales Peligrosos',
      'Procedimientos de Carga',
      'Equipos de Protección',
      'Emergencias en Ruta',
      'Documentación y Permisos',
      'Prácticas de Campo'
    ],
    instructor: 'Ing. Carlos Rodríguez - Especialista en Transporte',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Transporte',
    students: 520,
    rating: 4.7
  },
  {
    name: 'Control Derrames, Escapes y Vertimientos Accidentales',
    slug: 'control-derrames-escapes-vertimientos',
    image: '/materiales_peligrosos.png',
    description: 'Control y mitigación de derrames, escapes y vertimientos accidentales con químicos.',
    detailedDescription: 'El curso de Control de Derrames, Escapes y Vertimientos proporciona formación en técnicas de contención y limpieza de derrames químicos. Incluye identificación de riesgos, procedimientos de contención y descontaminación.',
    duration: '24 horas',
    certification: 'Válido 2 años',
    gradient: 'from-red-600 to-orange-600',
    icon: ExclamationTriangleIcon,
    objectives: [
      'Identificar tipos de derrames',
      'Aplicar técnicas de contención',
      'Manejar equipos de limpieza',
      'Implementar descontaminación',
      'Prevenir impactos ambientales'
    ],
    benefits: [
      'Control efectivo de derrames',
      'Protección ambiental',
      'Reducción de impactos',
      'Certificación especializada',
      'Cumplimiento normativo'
    ],
    requirements: [
      'Mayor de 18 años',
      'Conocimientos básicos de química',
      'Buen estado de salud física',
      'Capacidad de trabajo en equipo',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Control de Derrames',
      'Identificación de Sustancias',
      'Técnicas de Contención',
      'Equipos de Limpieza',
      'Procedimientos de Descontaminación',
      'Prevención de Impactos',
      'Prácticas de Campo'
    ],
    instructor: 'Qco. Laura Fernández - Especialista en Control de Derrames',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Ambiental',
    students: 450,
    rating: 4.8
  },
  {
    name: 'Certificación de Armado Seguro de Andamios',
    slug: 'certificacion-armado-seguro-andamios',
    image: '/alturas.png',
    description: 'Certificación de armado seguro de andamios multidireccionales y sistemas de acceso.',
    detailedDescription: 'El curso de Certificación de Armado Seguro de Andamios proporciona formación especializada en el armado seguro de andamios. Incluye normativas de seguridad, procedimientos de armado y inspección de estructuras.',
    duration: '32 horas',
    certification: 'Válido 2 años',
    gradient: 'from-orange-600 to-red-600',
    icon: BuildingOfficeIcon,
    objectives: [
      'Armar andamios de manera segura',
      'Aplicar normativas de seguridad',
      'Inspeccionar estructuras',
      'Manejar equipos de armado',
      'Prevenir accidentes de caídas'
    ],
    benefits: [
      'Armado seguro de andamios',
      'Prevención de accidentes',
      'Certificación reconocida',
      'Cumplimiento normativo',
      'Mejora en la seguridad'
    ],
    requirements: [
      'Mayor de 18 años',
      'Buen estado de salud física',
      'Experiencia en construcción',
      'Capacidad de trabajo en altura',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Andamios',
      'Normativas de Seguridad',
      'Tipos de Andamios',
      'Procedimientos de Armado',
      'Inspección de Estructuras',
      'Equipos de Protección',
      'Prácticas de Campo'
    ],
    instructor: 'Ing. Carlos Rodríguez - Especialista en Andamios',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Construcción',
    students: 380,
    rating: 4.7
  },
  {
    name: 'Curso de Primer Respondiente en Emergencias Médicas',
    slug: 'primer-respondiente-emergencias-medicas',
    image: '/primeros_auxilios.png',
    description: 'Formación como primer respondiente en emergencias médicas y atención prehospitalaria.',
    detailedDescription: 'El curso de Primer Respondiente en Emergencias Médicas proporciona formación especializada en atención prehospitalaria. Incluye evaluación de pacientes, técnicas de estabilización y coordinación con servicios médicos.',
    duration: '20 horas',
    certification: 'Válido 1 año',
    gradient: 'from-green-600 to-emerald-600',
    icon: HeartIcon,
    objectives: [
      'Evaluar pacientes en emergencias',
      'Aplicar técnicas de estabilización',
      'Manejar equipos médicos básicos',
      'Coordinar con servicios médicos',
      'Proporcionar atención prehospitalaria'
    ],
    benefits: [
      'Atención médica prehospitalaria',
      'Salvamento de vidas',
      'Certificación reconocida',
      'Trabajo en emergencias',
      'Cumplimiento normativo'
    ],
    requirements: [
      'Mayor de 18 años',
      'Buen estado de salud física',
      'Capacidad de trabajo bajo presión',
      'Compromiso con la salud',
      'Disponibilidad para emergencias'
    ],
    modules: [
      'Fundamentos de Primer Respondiente',
      'Evaluación de Pacientes',
      'Técnicas de Estabilización',
      'Equipos Médicos Básicos',
      'Coordinación con Servicios',
      'Atención de Trauma',
      'Prácticas de Simulación'
    ],
    instructor: 'Dr. María López - Médico de Emergencias',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Emergencias',
    students: 680,
    rating: 4.9
  },
  {
    name: 'Programa de Seguridad para Piscinas',
    slug: 'programa-seguridad-piscinas',
    image: '/seguridad_acuatica.png',
    description: 'Programa integral de seguridad para piscinas y espacios acuáticos recreativos.',
    detailedDescription: 'El curso de Programa de Seguridad para Piscinas proporciona formación integral en seguridad acuática. Incluye prevención de ahogamientos, primeros auxilios acuáticos y gestión de instalaciones acuáticas.',
    duration: '16 horas',
    certification: 'Válido 2 años',
    gradient: 'from-cyan-600 to-blue-600',
    icon: GlobeAltIcon,
    objectives: [
      'Implementar programas de seguridad acuática',
      'Prevenir accidentes en piscinas',
      'Aplicar primeros auxilios acuáticos',
      'Gestionar instalaciones acuáticas',
      'Capacitar al personal'
    ],
    benefits: [
      'Prevención de ahogamientos',
      'Seguridad en piscinas',
      'Certificación reconocida',
      'Trabajo en instalaciones acuáticas',
      'Cumplimiento normativo'
    ],
    requirements: [
      'Mayor de 18 años',
      'Excelente capacidad de natación',
      'Buen estado de salud física',
      'Experiencia en piscinas',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Seguridad Acuática',
      'Prevención de Ahogamientos',
      'Primeros Auxilios Acuáticos',
      'Gestión de Piscinas',
      'Capacitación del Personal',
      'Equipos de Rescate',
      'Prácticas en Agua'
    ],
    instructor: 'Cpt. María López - Especialista en Seguridad Acuática',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR y piscina',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Acuático',
    students: 320,
    rating: 4.6
  },
  {
    name: 'Curso de Administración de Oxígeno para Emergencias',
    slug: 'administracion-oxigeno-emergencias',
    image: '/primeros_auxilios.png',
    description: 'Capacitación en administración segura de oxígeno para emergencias médicas.',
    detailedDescription: 'El curso de Administración de Oxígeno para Emergencias proporciona formación especializada en el uso seguro de oxígeno en emergencias médicas. Incluye indicaciones, contraindicaciones y técnicas de administración.',
    duration: '12 horas',
    certification: 'Válido 1 año',
    gradient: 'from-blue-600 to-cyan-600',
    icon: HeartIcon,
    objectives: [
      'Administrar oxígeno de manera segura',
      'Identificar indicaciones y contraindicaciones',
      'Manejar equipos de oxígeno',
      'Aplicar técnicas de administración',
      'Prevenir complicaciones'
    ],
    benefits: [
      'Administración segura de oxígeno',
      'Mejora en la atención médica',
      'Certificación especializada',
      'Trabajo en emergencias',
      'Cumplimiento normativo'
    ],
    requirements: [
      'Mayor de 18 años',
      'Conocimientos básicos de primeros auxilios',
      'Buen estado de salud física',
      'Capacidad de trabajo bajo presión',
      'Compromiso con la salud'
    ],
    modules: [
      'Fundamentos del Oxígeno',
      'Indicaciones y Contraindicaciones',
      'Equipos de Administración',
      'Técnicas de Administración',
      'Monitoreo de Pacientes',
      'Prevención de Complicaciones',
      'Prácticas de Simulación'
    ],
    instructor: 'Dr. María López - Especialista en Emergencias Médicas',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Emergencias',
    students: 450,
    rating: 4.8
  },
  {
    name: 'Sistemas de Gestión de Seguridad y Salud en el Trabajo',
    slug: 'sistemas-gestion-seguridad-salud-trabajo',
    image: '/control_de_calidad.png',
    description: 'Diseño, implementación y administración de sistemas de gestión SST.',
    detailedDescription: 'El curso de Sistemas de Gestión de Seguridad y Salud en el Trabajo proporciona formación integral en la implementación de sistemas SST. Incluye normativas, procedimientos, auditorías y mejora continua.',
    duration: '40 horas',
    certification: 'Válido 3 años',
    gradient: 'from-green-600 to-teal-600',
    icon: ShieldCheckIcon,
    objectives: [
      'Implementar sistemas de gestión SST',
      'Aplicar normativas de seguridad',
      'Desarrollar procedimientos SST',
      'Realizar auditorías de seguridad',
      'Gestionar la mejora continua'
    ],
    benefits: [
      'Sistema integral de SST',
      'Cumplimiento normativo',
      'Reducción de accidentes',
      'Certificación reconocida',
      'Mejora en la cultura de seguridad'
    ],
    requirements: [
      'Mayor de 18 años',
      'Conocimientos en seguridad laboral',
      'Experiencia en gestión empresarial',
      'Capacidad de liderazgo',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Gestión SST',
      'Normativas de Seguridad',
      'Implementación de Sistemas',
      'Procedimientos SST',
      'Auditorías de Seguridad',
      'Mejora Continua',
      'Preparación para Certificación'
    ],
    instructor: 'Ing. David García - Especialista en Gestión SST',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    category: 'Gestión',
    students: 280,
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
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Desenvolver los parámetros usando React.use()
  const { slug } = use(params);

  useEffect(() => {
    loadCourse();
  }, [slug]);

  const loadCourse = async () => {
    try {
      const response = await fetch(`/api/courses/${slug}`);
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data) {
          setCourse(data.data);
        } else {
          // Buscar en fallback courses
          const fallbackCourse = courses.find(c => c.slug === slug);
          if (fallbackCourse) {
            setCourse(fallbackCourse);
          }
        }
      } else {
        // Buscar en fallback courses
        const fallbackCourse = courses.find(c => c.slug === slug);
        if (fallbackCourse) {
          setCourse(fallbackCourse);
        }
      }
    } catch (error) {
      console.error('Error loading course:', error);
      // Buscar en fallback courses
      const fallbackCourse = courses.find(c => c.slug === slug);
      if (fallbackCourse) {
        setCourse(fallbackCourse);
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando información del curso...</p>
        </div>
      </div>
    );
  }

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
              href="/servicios"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors duration-200"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Volver a Servicios
            </Link>

            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
                <span className="text-lg mr-3">
                  {typeof course.icon === 'string' ? course.icon : <course.icon className="h-5 w-5" />}
                </span>
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
