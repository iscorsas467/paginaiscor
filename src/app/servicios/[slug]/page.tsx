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
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface Service {
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
}

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  servicio: string;
  mensaje: string;
}

const services: Service[] = [
  { 
    name: 'Montacargas', 
    slug: 'montacargas',
    image: '/montacargas .png',
    description: 'Capacitación y certificación en operación segura de montacargas, cumpliendo normativas de seguridad industrial.',
    detailedDescription: 'Nuestro curso de Montacargas está diseñado para proporcionar a los participantes los conocimientos teóricos y prácticos necesarios para operar montacargas de manera segura y eficiente. El programa incluye formación en normativas de seguridad, mantenimiento preventivo, y procedimientos de emergencia.',
    duration: '40 horas',
    certification: 'Certificado válido por 2 años',
    gradient: 'from-orange-600 to-red-600',
    icon: CogIcon,
    objectives: [
      'Comprender las normativas de seguridad para operación de montacargas',
      'Desarrollar habilidades prácticas para operación segura',
      'Aprender procedimientos de mantenimiento preventivo',
      'Conocer protocolos de emergencia y primeros auxilios',
      'Obtener certificación oficial reconocida por autoridades competentes'
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
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM | Sábados: 8:00 AM - 12:00 PM'
  },
  { 
    name: 'Control del Fuego', 
    slug: 'control-del-fuego',
    image: '/fuego.png',
    description: 'Sistemas de prevención, detección y extinción de incendios con equipos certificados y personal capacitado.',
    detailedDescription: 'El curso de Control del Fuego proporciona formación integral en prevención, detección y extinción de incendios. Los participantes aprenderán sobre los diferentes tipos de fuego, sistemas de detección, equipos de extinción y protocolos de emergencia.',
    duration: '32 horas',
    certification: 'Certificado válido por 3 años',
    gradient: 'from-red-600 to-orange-600',
    icon: ShieldCheckIcon,
    objectives: [
      'Identificar los diferentes tipos de fuego y sus características',
      'Aprender técnicas de prevención de incendios',
      'Manejar equipos de detección y extinción',
      'Desarrollar protocolos de emergencia efectivos',
      'Obtener certificación en control de incendios'
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
    instructor: 'Cpt. Ana Martínez - Bombero Profesional Certificado',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR y campo de prácticas',
    schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM'
  },
  { 
    name: 'Planes de emergencia', 
    slug: 'planes-de-emergencia',
    image: '/plandeemergencia.png',
    description: 'Desarrollo e implementación de planes de emergencia y evacuación adaptados a cada empresa.',
    detailedDescription: 'Nuestro curso de Planes de Emergencia está diseñado para capacitar a los participantes en el desarrollo, implementación y mantenimiento de planes de emergencia efectivos. Incluye formación en evacuación, primeros auxilios y coordinación de emergencias.',
    duration: '24 horas',
    certification: 'Certificado válido por 2 años',
    gradient: 'from-yellow-600 to-orange-600',
    icon: ShieldCheckIcon,
    objectives: [
      'Desarrollar planes de emergencia efectivos',
      'Implementar protocolos de evacuación',
      'Capacitar brigadas de emergencia',
      'Establecer sistemas de comunicación',
      'Realizar simulacros y evaluaciones'
    ],
    benefits: [
      'Respuesta rápida ante emergencias',
      'Protección de vidas y bienes',
      'Cumplimiento normativo',
      'Reducción de riesgos',
      'Mejora en la seguridad organizacional'
    ],
    requirements: [
      'Mayor de 18 años',
      'Conocimientos básicos de seguridad',
      'Capacidad de liderazgo',
      'Disponibilidad para prácticas',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Planes de Emergencia',
      'Identificación de Riesgos',
      'Protocolos de Evacuación',
      'Primeros Auxilios Básicos',
      'Coordinación de Emergencias',
      'Simulacros y Evaluaciones',
      'Mantenimiento del Plan'
    ],
    instructor: 'Ing. David García - Especialista en Gestión de Emergencias',
    price: 'Consultar',
    location: 'Instalaciones del cliente',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM'
  },
  { 
    name: 'Brigada de emergencia', 
    slug: 'brigada-de-emergencia',
    image: '/brigada_de_emergencia.png',
    description: 'Formación y entrenamiento de brigadas de emergencia para respuesta rápida ante incidentes.',
    detailedDescription: 'El curso de Brigada de Emergencia capacita a los participantes para formar parte de equipos de respuesta rápida ante emergencias. Incluye formación en extinción de incendios, rescate y primeros auxilios.',
    duration: '48 horas',
    certification: 'Certificado válido por 2 años',
    gradient: 'from-red-600 to-pink-600',
    icon: UserIcon,
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
    schedule: 'Lunes a Sábado: 8:00 AM - 6:00 PM'
  },
  { 
    name: 'Materiales Peligrosos', 
    slug: 'materiales-peligrosos',
    image: '/materiales_peligrosos.png',
    description: 'Manejo seguro de materiales peligrosos, almacenamiento y transporte según normativas vigentes.',
    detailedDescription: 'Nuestro curso de Materiales Peligrosos proporciona formación integral en el manejo, almacenamiento y transporte de sustancias peligrosas. Los participantes aprenderán sobre clasificación, etiquetado y procedimientos de seguridad.',
    duration: '40 horas',
    certification: 'Certificado válido por 3 años',
    gradient: 'from-yellow-600 to-orange-600',
    icon: GlobeAltIcon,
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
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM'
  },
  { 
    name: 'Tareas de alto riesgo', 
    slug: 'tareas-de-alto-riesgo',
    image: '/tareas_de_alto_riesgo.png',
    description: 'Supervisión y control de trabajos en altura, espacios confinados y otras tareas de alto riesgo.',
    detailedDescription: 'El curso de Tareas de Alto Riesgo capacita a los participantes en la identificación, evaluación y control de riesgos en trabajos peligrosos. Incluye formación en trabajos en altura, espacios confinados y operaciones críticas.',
    duration: '56 horas',
    certification: 'Certificado válido por 2 años',
    gradient: 'from-purple-600 to-indigo-600',
    icon: ShieldCheckIcon,
    objectives: [
      'Identificar tareas de alto riesgo',
      'Evaluar riesgos laborales',
      'Implementar controles de seguridad',
      'Supervisar trabajos peligrosos',
      'Desarrollar procedimientos seguros'
    ],
    benefits: [
      'Prevención de accidentes graves',
      'Cumplimiento de normativas',
      'Protección del personal',
      'Reducción de costos por accidentes',
      'Mejora en la productividad'
    ],
    requirements: [
      'Mayor de 18 años',
      'Experiencia en seguridad industrial',
      'Buen estado de salud física',
      'Capacidad de análisis',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Identificación de Tareas de Alto Riesgo',
      'Evaluación de Riesgos',
      'Trabajos en Altura',
      'Espacios Confinados',
      'Equipos de Protección',
      'Supervisión de Trabajos',
      'Procedimientos de Emergencia'
    ],
    instructor: 'Ing. Carlos Rodríguez - Especialista en Seguridad Industrial',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM'
  },
  { 
    name: 'Seguridad acuática', 
    slug: 'seguridad-acuatica',
    image: '/seguridad_acuatica.png',
    description: 'Protocolos de seguridad para trabajos en entornos acuáticos y actividades subacuáticas.',
    detailedDescription: 'Nuestro curso de Seguridad Acuática proporciona formación especializada en seguridad para trabajos en entornos acuáticos. Incluye protocolos de buceo, rescate acuático y prevención de accidentes.',
    duration: '32 horas',
    certification: 'Certificado válido por 2 años',
    gradient: 'from-blue-600 to-cyan-600',
    icon: ShieldCheckIcon,
    objectives: [
      'Aplicar protocolos de seguridad acuática',
      'Realizar rescates acuáticos',
      'Manejar equipos de buceo',
      'Prevenir accidentes acuáticos',
      'Coordinar emergencias acuáticas'
    ],
    benefits: [
      'Prevención de accidentes acuáticos',
      'Capacidad de rescate',
      'Cumplimiento normativo',
      'Protección del personal',
      'Certificación especializada'
    ],
    requirements: [
      'Mayor de 18 años',
      'Buen estado de salud física',
      'Capacidad de natación',
      'Disponibilidad para prácticas acuáticas',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Seguridad Acuática',
      'Equipos de Buceo y Seguridad',
      'Protocolos de Rescate',
      'Prevención de Accidentes',
      'Emergencias Acuáticas',
      'Legislación Acuática',
      'Prácticas en Agua'
    ],
    instructor: 'Cpt. Ana Martínez - Buzo Profesional Certificado',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR y piscina',
    schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM'
  },
  { 
    name: 'Seguridad fisica', 
    slug: 'seguridad-fisica',
    image: '/seguridad_fisica.png',
    description: 'Implementación de medidas de seguridad física y control de acceso en instalaciones industriales.',
    detailedDescription: 'El curso de Seguridad Física capacita a los participantes en la implementación de medidas de seguridad física para proteger instalaciones industriales. Incluye control de acceso, vigilancia y protección de activos.',
    duration: '24 horas',
    certification: 'Certificado válido por 2 años',
    gradient: 'from-gray-600 to-slate-600',
    icon: ShieldCheckIcon,
    objectives: [
      'Implementar medidas de seguridad física',
      'Controlar acceso a instalaciones',
      'Proteger activos empresariales',
      'Coordinar sistemas de vigilancia',
      'Desarrollar protocolos de seguridad'
    ],
    benefits: [
      'Protección de instalaciones',
      'Control de acceso efectivo',
      'Prevención de robos',
      'Cumplimiento normativo',
      'Mejora en la seguridad'
    ],
    requirements: [
      'Mayor de 18 años',
      'Antecedentes penales limpios',
      'Buen estado de salud',
      'Capacidad de observación',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Seguridad Física',
      'Control de Acceso',
      'Sistemas de Vigilancia',
      'Protección de Activos',
      'Protocolos de Seguridad',
      'Legislación de Seguridad',
      'Prácticas de Campo'
    ],
    instructor: 'Cpt. Roberto Silva - Especialista en Seguridad Física',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM'
  },
  { 
    name: 'Primeros auxilios', 
    slug: 'primeros-auxilios',
    image: '/primeros_auxilios.png',
    description: 'Capacitación en primeros auxilios y atención prehospitalaria para emergencias médicas.',
    detailedDescription: 'Nuestro curso de Primeros Auxilios proporciona formación integral en atención prehospitalaria y primeros auxilios. Los participantes aprenderán técnicas de reanimación, manejo de heridas y atención de emergencias médicas.',
    duration: '16 horas',
    certification: 'Certificado válido por 1 año',
    gradient: 'from-green-600 to-emerald-600',
    icon: CheckCircleIcon,
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
      'Mejora en la seguridad'
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
      'Coordinación con Servicios Médicos',
      'Prácticas de Simulación'
    ],
    instructor: 'Dr. María López - Médico de Emergencias',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM'
  },
  { 
    name: 'Gestión de calidad', 
    slug: 'gestion-de-calidad',
    image: '/control_de_calidad.png',
    description: 'Sistemas de gestión de calidad ISO 9001 y auditorías para optimizar procesos empresariales.',
    detailedDescription: 'El curso de Gestión de Calidad proporciona formación en sistemas de gestión de calidad ISO 9001. Los participantes aprenderán sobre implementación, auditorías y mejora continua de procesos.',
    duration: '40 horas',
    certification: 'Certificado válido por 3 años',
    gradient: 'from-blue-600 to-cyan-600',
    icon: TrophyIcon,
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
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM'
  },
  { 
    name: 'Inspecciones certificadas', 
    slug: 'inspecciones-certificadas',
    image: '/inspecciones_certificadas.png',
    description: 'Inspecciones técnicas certificadas de equipos, instalaciones y cumplimiento normativo.',
    detailedDescription: 'Nuestro curso de Inspecciones Certificadas capacita a los participantes en la realización de inspecciones técnicas especializadas. Incluye formación en equipos, instalaciones y cumplimiento normativo.',
    duration: '24 horas',
    certification: 'Certificado válido por 2 años',
    gradient: 'from-indigo-600 to-purple-600',
    icon: CheckCircleIcon,
    objectives: [
      'Realizar inspecciones técnicas',
      'Evaluar cumplimiento normativo',
      'Identificar no conformidades',
      'Emitir reportes técnicos',
      'Recomendar mejoras'
    ],
    benefits: [
      'Cumplimiento normativo',
      'Prevención de accidentes',
      'Optimización de equipos',
      'Reducción de costos',
      'Certificación técnica'
    ],
    requirements: [
      'Mayor de 18 años',
      'Conocimientos técnicos básicos',
      'Experiencia en mantenimiento',
      'Capacidad de análisis técnico',
      'Compromiso con la calidad'
    ],
    modules: [
      'Fundamentos de Inspecciones',
      'Equipos de Medición',
      'Normativas Técnicas',
      'Procedimientos de Inspección',
      'Reportes Técnicos',
      'Gestión de No Conformidades',
      'Prácticas de Campo'
    ],
    instructor: 'Ing. Carlos Rodríguez - Inspector Técnico Certificado',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM'
  },
  { 
    name: 'Reintegro laboral', 
    slug: 'reintegro-laboral',
    image: '/reintegro_laboral.png',
    description: 'Programas de reintegro laboral y adaptación de puestos de trabajo para trabajadores lesionados.',
    detailedDescription: 'El curso de Reintegro Laboral proporciona formación en programas de reintegro laboral para trabajadores que han sufrido lesiones. Incluye adaptación de puestos de trabajo y seguimiento médico.',
    duration: '16 horas',
    certification: 'Certificado válido por 1 año',
    gradient: 'from-green-600 to-teal-600',
    icon: UserIcon,
    objectives: [
      'Desarrollar programas de reintegro',
      'Adaptar puestos de trabajo',
      'Coordinar seguimiento médico',
      'Prevenir reincidencias',
      'Mejorar la productividad'
    ],
    benefits: [
      'Reintegración exitosa de trabajadores',
      'Reducción de costos por lesiones',
      'Mejora en la productividad',
      'Cumplimiento normativo',
      'Bienestar laboral'
    ],
    requirements: [
      'Mayor de 18 años',
      'Conocimientos en salud ocupacional',
      'Experiencia en recursos humanos',
      'Capacidad de empatía',
      'Compromiso con el bienestar'
    ],
    modules: [
      'Fundamentos de Reintegro Laboral',
      'Evaluación de Capacidades',
      'Adaptación de Puestos',
      'Seguimiento Médico',
      'Prevención de Reincidencias',
      'Legislación Laboral',
      'Casos Prácticos'
    ],
    instructor: 'Dra. Laura Fernández - Médico Ocupacional',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM'
  },
  { 
    name: 'Alturas', 
    slug: 'alturas',
    image: '/alturas.png',
    description: 'Capacitación y certificación en trabajos en altura con equipos de protección personal.',
    detailedDescription: 'Nuestro curso de Alturas capacita a los participantes en trabajos seguros en altura. Incluye formación en equipos de protección personal, anclajes y procedimientos de seguridad.',
    duration: '40 horas',
    certification: 'Certificado válido por 2 años',
    gradient: 'from-orange-600 to-red-600',
    icon: BuildingOfficeIcon,
    objectives: [
      'Realizar trabajos seguros en altura',
      'Manejar equipos de protección',
      'Instalar sistemas de anclaje',
      'Aplicar procedimientos de seguridad',
      'Prevenir caídas'
    ],
    benefits: [
      'Prevención de caídas',
      'Cumplimiento normativo',
      'Protección del personal',
      'Reducción de accidentes',
      'Certificación especializada'
    ],
    requirements: [
      'Mayor de 18 años',
      'Buen estado de salud física',
      'Sin vértigo o acrofobia',
      'Capacidad de trabajo en altura',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos de Trabajos en Altura',
      'Equipos de Protección Personal',
      'Sistemas de Anclaje',
      'Procedimientos de Seguridad',
      'Prevención de Caídas',
      'Rescate en Altura',
      'Prácticas en Campo'
    ],
    instructor: 'Ing. Roberto Silva - Especialista en Alturas',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM'
  },
  { 
    name: 'Lockout tagout', 
    slug: 'lockout-tagout',
    image: '/Lockout_tagout.png',
    description: 'Procedimientos de bloqueo y etiquetado para mantenimiento seguro de equipos energizados.',
    detailedDescription: 'El curso de Lockout Tagout proporciona formación en procedimientos de bloqueo y etiquetado para mantenimiento seguro de equipos energizados. Incluye protocolos de seguridad y prevención de accidentes.',
    duration: '24 horas',
    certification: 'Certificado válido por 2 años',
    gradient: 'from-slate-600 to-gray-600',
    icon: CogIcon,
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
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM'
  },
  { 
    name: 'Espacios confinados', 
    slug: 'espacios-confinados',
    image: '/Espacios_confinados.png',
    description: 'Entrenamiento y supervisión para trabajos en espacios confinados con protocolos de seguridad.',
    detailedDescription: 'Nuestro curso de Espacios Confinados capacita a los participantes en trabajos seguros en espacios confinados. Incluye formación en evaluación de riesgos, equipos de protección y procedimientos de emergencia.',
    duration: '40 horas',
    certification: 'Certificado válido por 2 años',
    gradient: 'from-purple-600 to-indigo-600',
    icon: CogIcon,
    objectives: [
      'Identificar espacios confinados',
      'Evaluar riesgos específicos',
      'Aplicar procedimientos de seguridad',
      'Manejar equipos de protección',
      'Coordinar rescates'
    ],
    benefits: [
      'Prevención de accidentes',
      'Trabajo seguro en espacios confinados',
      'Cumplimiento normativo',
      'Protección del personal',
      'Certificación especializada'
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
      'Evaluación de Riesgos',
      'Equipos de Protección',
      'Procedimientos de Entrada',
      'Vigilancia y Supervisión',
      'Rescate en Espacios Confinados',
      'Prácticas de Campo'
    ],
    instructor: 'Ing. Ana Martínez - Especialista en Espacios Confinados',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM'
  },
  { 
    name: 'Buceo', 
    slug: 'buceo',
    image: '/buceo.png',
    description: 'Servicios de buceo industrial y comercial con equipos certificados y personal especializado.',
    detailedDescription: 'El curso de Buceo proporciona formación especializada en buceo industrial y comercial. Incluye formación en equipos de buceo, procedimientos de seguridad y técnicas especializadas.',
    duration: '80 horas',
    certification: 'Certificado válido por 3 años',
    gradient: 'from-blue-600 to-cyan-600',
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
      'Buceo Industrial',
      'Emergencias Subacuáticas',
      'Prácticas en Agua'
    ],
    instructor: 'Cpt. Roberto Silva - Buzo Profesional Certificado',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR y piscina',
    schedule: 'Lunes a Sábado: 8:00 AM - 6:00 PM'
  }
];

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
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
  
  // Encontrar el servicio basado en el slug
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Servicio no encontrado</h1>
          <Link href="/portafolio" className="text-blue-600 hover:text-blue-800">
            Volver al portafolio
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
          <div className="mx-auto max-w-4xl">
            {/* Back Button */}
            <Link
              href="/portafolio"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors duration-200"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Volver al Portafolio
            </Link>

            <div className="text-center">
              {/* Badge - Estilo Cisco */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
                <service.icon className="h-5 w-5 mr-3" />
                Curso Especializado
              </div>
              
              {/* Main Heading - Estilo IBM */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
                <span className="text-white">{service.name}</span>
              </h1>

              {/* Subtitle - Estilo Siemens */}
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
                {service.description}
              </p>

              {/* Service Stats - Estilo Boeing */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{service.duration}</div>
                  <div className="text-sm text-gray-300 font-medium">Duración del Curso</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{service.certification}</div>
                  <div className="text-sm text-gray-300 font-medium">Certificación</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                  <div className="text-sm text-gray-300 font-medium">Práctico</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section - Estilo Siemens Profesional */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Service Image */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8">
                <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Service Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Descripción Detallada</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.detailedDescription}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Objetivos del Curso</h3>
                <ul className="space-y-3">
                  {service.objectives.map((objective, index) => (
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
                  {service.benefits.map((benefit, index) => (
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

      {/* Course Modules Section - Estilo GE Profesional */}
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
            {service.modules.map((module, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
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

      {/* Requirements and Info Section - Estilo Boeing Profesional */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Requirements */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Requisitos de Admisión</h2>
              <ul className="space-y-4">
                {service.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Course Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Información del Curso</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <UserIcon className="h-6 w-6 text-blue-400 mr-3" />
                    <span className="text-gray-300"><strong>Instructor:</strong> {service.instructor}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-6 w-6 text-blue-400 mr-3" />
                    <span className="text-gray-300"><strong>Ubicación:</strong> {service.location}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-6 w-6 text-blue-400 mr-3" />
                    <span className="text-gray-300"><strong>Horario:</strong> {service.schedule}</span>
                  </div>
                  <div className="flex items-center">
                    <TrophyIcon className="h-6 w-6 text-blue-400 mr-3" />
                    <span className="text-gray-300"><strong>Inversión:</strong> {service.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Estilo Lockheed Martin Profesional */}
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
                  Gracias por su interés en el curso de {service.name}. Nos pondremos en contacto con usted en las próximas 24 horas.
                </p>
                <Link
                  href="/portafolio"
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
