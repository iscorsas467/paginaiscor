import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Información detallada específica para cada curso
const detailedCoursesData = [
  {
    name: 'Trabajo en Alturas',
    detailedDescription: 'Nuestro curso de Trabajo en Alturas está diseñado para proporcionar a los participantes los conocimientos teóricos y prácticos necesarios para realizar trabajos seguros en altura. El programa incluye formación en equipos de protección personal, sistemas de anclaje, evaluación de riesgos y procedimientos de rescate.',
    duration: '40 horas',
    certification: 'Válido 2 años',
    objectives: [
      'Comprender las normativas de seguridad para trabajos en altura',
      'Desarrollar habilidades prácticas para trabajos seguros',
      'Aprender a usar equipos de protección personal',
      'Conocer sistemas de anclaje y líneas de vida',
      'Obtener certificación oficial reconocida'
    ],
    benefits: [
      'Reducción significativa de accidentes por caídas',
      'Cumplimiento de normativas de seguridad integral',
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
    instructor: 'Ing. Carlos Rodríguez - Especialista en Seguridad Integral',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM'
  },
  {
    name: 'Espacios Confinados',
    detailedDescription: 'El curso de Espacios Confinados proporciona formación especializada en la identificación, evaluación y control de riesgos en espacios confinados. Incluye protocolos de entrada, trabajo seguro y procedimientos de rescate especializado.',
    duration: '40 horas',
    certification: 'Válido 2 años',
    objectives: [
      'Identificar espacios confinados y sus riesgos',
      'Aplicar protocolos de entrada segura',
      'Manejar equipos de monitoreo atmosférico',
      'Ejecutar procedimientos de rescate',
      'Implementar sistemas de comunicación'
    ],
    benefits: [
      'Prevención de accidentes en espacios confinados',
      'Cumplimiento de normativas OSHA y ANSI',
      'Certificación reconocida internacionalmente',
      'Mejora en la seguridad operacional',
      'Reducción de costos por accidentes'
    ],
    requirements: [
      'Mayor de 18 años',
      'Certificado médico ocupacional',
      'Sin claustrofobia',
      'Buen estado de salud física',
      'Experiencia en trabajos industriales'
    ],
    modules: [
      'Definición y Clasificación de Espacios Confinados',
      'Identificación de Riesgos Atmosféricos',
      'Equipos de Monitoreo y Detección',
      'Protocolos de Entrada Segura',
      'Sistemas de Comunicación',
      'Procedimientos de Rescate',
      'Prácticas en Simulador'
    ],
    instructor: 'Ing. María González - Especialista en Espacios Confinados',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM'
  },
  {
    name: 'Control y Extinción de Incendios',
    detailedDescription: 'Curso especializado en control y extinción de incendios con procedimientos operativos normalizados NFPA. Incluye formación en brigadas de emergencia, manejo de equipos y técnicas de extinción.',
    duration: '32 horas',
    certification: 'Válido 3 años',
    objectives: [
      'Comprender la teoría del fuego y sus clases',
      'Manejar equipos de extinción de incendios',
      'Formar brigadas de emergencia efectivas',
      'Aplicar procedimientos NFPA',
      'Ejecutar simulacros de emergencia'
    ],
    benefits: [
      'Prevención y control de incendios',
      'Formación de brigadas especializadas',
      'Cumplimiento de normativas NFPA',
      'Reducción de pérdidas materiales',
      'Protección de vidas humanas'
    ],
    requirements: [
      'Mayor de 18 años',
      'Certificado médico ocupacional',
      'Buen estado de salud física',
      'Sin problemas respiratorios',
      'Disponibilidad para prácticas nocturnas'
    ],
    modules: [
      'Teoría del Fuego y Clasificación',
      'Equipos de Extinción y Mantenimiento',
      'Procedimientos Operativos NFPA',
      'Formación de Brigadas de Emergencia',
      'Simulacros y Prácticas',
      'Manejo de Emergencias',
      'Evaluación y Certificación'
    ],
    instructor: 'Cpt. Roberto Silva - Bombero Profesional Certificado',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM'
  },
  {
    name: 'Primeros Auxilios Básicos y Avanzados',
    detailedDescription: 'Capacitación integral en primeros auxilios básicos y avanzados con administración de oxígeno para emergencias. Incluye técnicas de reanimación, manejo de traumas y atención prehospitalaria.',
    duration: '16 horas',
    certification: 'Válido 1 año',
    objectives: [
      'Aplicar técnicas de primeros auxilios básicos',
      'Manejar situaciones de emergencia médica',
      'Administrar oxígeno de emergencia',
      'Realizar RCP y uso de DEA',
      'Atender traumas y lesiones'
    ],
    benefits: [
      'Salvamento de vidas en emergencias',
      'Reducción de secuelas por accidentes',
      'Certificación internacional',
      'Confianza en situaciones críticas',
      'Cumplimiento de normativas laborales'
    ],
    requirements: [
      'Mayor de 16 años',
      'Certificado médico básico',
      'Buen estado de salud física',
      'Disponibilidad para prácticas',
      'Compromiso con el aprendizaje'
    ],
    modules: [
      'Fundamentos de Primeros Auxilios',
      'Evaluación de Víctimas',
      'Reanimación Cardiopulmonar (RCP)',
      'Uso de Desfibrilador Externo (DEA)',
      'Administración de Oxígeno',
      'Manejo de Traumas',
      'Simulacros de Emergencia'
    ],
    instructor: 'Dr. Ana Martínez - Médico de Emergencias',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Sábados: 8:00 AM - 5:00 PM'
  },
  {
    name: 'Materiales y Mercancías Peligrosas',
    detailedDescription: 'Manejo seguro de materiales y mercancías peligrosas con protocolos de almacenamiento, transporte y respuesta a emergencias. Incluye clasificación, etiquetado y procedimientos de seguridad.',
    duration: '40 horas',
    certification: 'Válido 3 años',
    objectives: [
      'Clasificar materiales peligrosos según normativas',
      'Aplicar protocolos de almacenamiento seguro',
      'Manejar procedimientos de transporte',
      'Responder a emergencias químicas',
      'Implementar sistemas de etiquetado'
    ],
    benefits: [
      'Prevención de accidentes químicos',
      'Cumplimiento de normativas DOT',
      'Certificación internacional',
      'Protección ambiental',
      'Reducción de riesgos operacionales'
    ],
    requirements: [
      'Mayor de 18 años',
      'Certificado médico ocupacional',
      'Conocimientos básicos en química',
      'Buen estado de salud física',
      'Experiencia en manejo de materiales'
    ],
    modules: [
      'Clasificación de Materiales Peligrosos',
      'Sistemas de Etiquetado y Marcado',
      'Protocolos de Almacenamiento',
      'Procedimientos de Transporte',
      'Respuesta a Emergencias Químicas',
      'Equipos de Protección Personal',
      'Simulacros de Emergencia'
    ],
    instructor: 'Ing. Luis Herrera - Especialista en Materiales Peligrosos',
    price: 'Consultar',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM'
  }
  // Continuaré con los demás cursos...
];

async function seedDetailedCourses() {
  try {
    console.log('🌱 Iniciando población de información detallada de cursos...\n');

    for (const courseData of detailedCoursesData) {
      try {
        // Buscar el curso en la base de datos
        const existingCourse = await prisma.home_service_items.findFirst({
          where: {
            name: {
              contains: courseData.name,
              mode: 'insensitive'
            }
          }
        });

        if (existingCourse) {
          console.log(`✅ Información detallada para: ${courseData.name}`);
          // Aquí podrías actualizar campos adicionales si los tuvieras en la BD
        } else {
          console.log(`⚠️  Curso no encontrado: ${courseData.name}`);
        }
      } catch (error) {
        console.error(`❌ Error procesando ${courseData.name}:`, error);
      }
    }

    console.log('\n🎉 ¡Proceso completado!');
    console.log('📝 Nota: La información detallada se genera dinámicamente en la API');
    console.log('📝 Para personalizar cada curso, se puede extender el esquema de BD');

  } catch (error) {
    console.error('❌ Error poblando información detallada:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDetailedCourses();
