import { PrismaClient } from '../src/generated/prisma';
import { writeFileSync } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient();

// Función para generar datos detallados basados en el nombre del curso
function generateCourseDetails(courseName: string, baseDescription: string) {
  const categories = {
    'Trabajo en Alturas': 'Seguridad Industrial',
    'Espacios Confinados': 'Seguridad Industrial',
    'Control y Extinción de Incendios': 'Emergencias',
    'Primeros Auxilios Básicos y Avanzados': 'Emergencias',
    'Materiales y Mercancías Peligrosas': 'Seguridad Industrial',
    'Brigada de Emergencia': 'Emergencias',
    'Planes de Emergencia': 'Emergencias',
    'Seguridad Acuática': 'Seguridad Industrial',
    'Seguridad Física': 'Seguridad Industrial',
    'Control de Calidad': 'Gestión',
    'Inspecciones Certificadas': 'Seguridad Industrial',
    'Reintegro Laboral': 'Gestión',
    'Lockout Tagout': 'Seguridad Industrial',
    'Buceo': 'Seguridad Industrial',
    'Tareas de Alto Riesgo': 'Seguridad Industrial',
    'Operación Segura de Montacargas': 'Seguridad Industrial',
    'LOTO - Bloqueo y Etiquetado': 'Seguridad Industrial',
    'Brigadas de Emergencia': 'Emergencias',
    'Seguridad en Trabajos en Caliente': 'Seguridad Industrial',
    'Sistema de Gestión ISO 9001': 'Gestión',
    'Seguridad en el Izaje de Cargas': 'Seguridad Industrial',
    'Buceo Scuba Diver': 'Seguridad Industrial',
    'Rescate y Salvamento Acuático': 'Emergencias',
    'Sistema de Gestión ISO 14001': 'Gestión',
    'Seguridad Alimentaria ISO 22000': 'Gestión',
    'Supervivencia Básico y Avanzado': 'Emergencias',
    'Gestión de Riesgos Laborales': 'Gestión',
    'Auditorías de Seguridad': 'Gestión',
    'Procedimientos Operativos Normalizados NFPA': 'Gestión'
  };

  const instructors = {
    'Trabajo en Alturas': 'Ing. Carlos Rodríguez - Especialista en Seguridad Industrial',
    'Espacios Confinados': 'Ing. Ana Martínez - Especialista en Espacios Confinados',
    'Control y Extinción de Incendios': 'Cpt. Roberto Silva - Bombero Profesional Certificado',
    'Primeros Auxilios Básicos y Avanzados': 'Dr. María González - Médico de Emergencias',
    'Materiales y Mercancías Peligrosas': 'Ing. Luis Herrera - Especialista en HAZMAT',
    'Brigada de Emergencia': 'Cpt. Roberto Silva - Bombero Profesional Certificado',
    'Planes de Emergencia': 'Ing. Patricia Vega - Especialista en Gestión de Emergencias',
    'Seguridad Acuática': 'Cpt. Andrés Morales - Especialista en Rescate Acuático',
    'Seguridad Física': 'Ing. Fernando Castro - Especialista en Seguridad Física',
    'Control de Calidad': 'Ing. Carmen Ruiz - Especialista en Calidad',
    'Inspecciones Certificadas': 'Ing. Diego Mendoza - Inspector Certificado',
    'Reintegro Laboral': 'Psic. Laura Jiménez - Especialista en Salud Ocupacional',
    'Lockout Tagout': 'Ing. Miguel Torres - Especialista en Energías Peligrosas',
    'Buceo': 'Cpt. Andrés Morales - Instructor de Buceo Certificado',
    'Tareas de Alto Riesgo': 'Ing. Carlos Rodríguez - Especialista en Seguridad Industrial',
    'Operación Segura de Montacargas': 'Ing. Jorge Ramírez - Especialista en Equipos',
    'LOTO - Bloqueo y Etiquetado': 'Ing. Miguel Torres - Especialista en Energías Peligrosas',
    'Brigadas de Emergencia': 'Cpt. Roberto Silva - Bombero Profesional Certificado',
    'Seguridad en Trabajos en Caliente': 'Ing. Carlos Rodríguez - Especialista en Soldadura',
    'Sistema de Gestión ISO 9001': 'Ing. Carmen Ruiz - Auditor ISO Certificado',
    'Seguridad en el Izaje de Cargas': 'Ing. Jorge Ramírez - Especialista en Grúas',
    'Buceo Scuba Diver': 'Cpt. Andrés Morales - Instructor de Buceo Certificado',
    'Rescate y Salvamento Acuático': 'Cpt. Andrés Morales - Especialista en Rescate Acuático',
    'Sistema de Gestión ISO 14001': 'Ing. Carmen Ruiz - Auditor ISO Certificado',
    'Seguridad Alimentaria ISO 22000': 'Ing. Carmen Ruiz - Especialista en Seguridad Alimentaria',
    'Supervivencia Básico y Avanzado': 'Cpt. Andrés Morales - Especialista en Supervivencia',
    'Gestión de Riesgos Laborales': 'Ing. Patricia Vega - Especialista en Gestión de Riesgos',
    'Auditorías de Seguridad': 'Ing. Diego Mendoza - Auditor de Seguridad Certificado',
    'Procedimientos Operativos Normalizados NFPA': 'Ing. Patricia Vega - Especialista en NFPA'
  };

  const durations = {
    'Trabajo en Alturas': '40 horas',
    'Espacios Confinados': '40 horas',
    'Control y Extinción de Incendios': '32 horas',
    'Primeros Auxilios Básicos y Avanzados': '24 horas',
    'Materiales y Mercancías Peligrosas': '16 horas',
    'Brigada de Emergencia': '40 horas',
    'Planes de Emergencia': '24 horas',
    'Seguridad Acuática': '32 horas',
    'Seguridad Física': '16 horas',
    'Control de Calidad': '40 horas',
    'Inspecciones Certificadas': '24 horas',
    'Reintegro Laboral': '16 horas',
    'Lockout Tagout': '16 horas',
    'Buceo': '40 horas',
    'Tareas de Alto Riesgo': '24 horas',
    'Operación Segura de Montacargas': '24 horas',
    'LOTO - Bloqueo y Etiquetado': '16 horas',
    'Brigadas de Emergencia': '40 horas',
    'Seguridad en Trabajos en Caliente': '16 horas',
    'Sistema de Gestión ISO 9001': '40 horas',
    'Seguridad en el Izaje de Cargas': '24 horas',
    'Buceo Scuba Diver': '40 horas',
    'Rescate y Salvamento Acuático': '32 horas',
    'Sistema de Gestión ISO 14001': '40 horas',
    'Seguridad Alimentaria ISO 22000': '40 horas',
    'Supervivencia Básico y Avanzado': '32 horas',
    'Gestión de Riesgos Laborales': '24 horas',
    'Auditorías de Seguridad': '24 horas',
    'Procedimientos Operativos Normalizados NFPA': '32 horas'
  };

  const certifications = {
    'Trabajo en Alturas': 'Válido 2 años',
    'Espacios Confinados': 'Válido 2 años',
    'Control y Extinción de Incendios': 'Válido 3 años',
    'Primeros Auxilios Básicos y Avanzados': 'Válido 2 años',
    'Materiales y Mercancías Peligrosas': 'Válido 2 años',
    'Brigada de Emergencia': 'Válido 2 años',
    'Planes de Emergencia': 'Válido 3 años',
    'Seguridad Acuática': 'Válido 2 años',
    'Seguridad Física': 'Válido 2 años',
    'Control de Calidad': 'Válido 3 años',
    'Inspecciones Certificadas': 'Válido 2 años',
    'Reintegro Laboral': 'Válido 1 año',
    'Lockout Tagout': 'Válido 2 años',
    'Buceo': 'Válido 2 años',
    'Tareas de Alto Riesgo': 'Válido 2 años',
    'Operación Segura de Montacargas': 'Válido 2 años',
    'LOTO - Bloqueo y Etiquetado': 'Válido 2 años',
    'Brigadas de Emergencia': 'Válido 2 años',
    'Seguridad en Trabajos en Caliente': 'Válido 2 años',
    'Sistema de Gestión ISO 9001': 'Válido 3 años',
    'Seguridad en el Izaje de Cargas': 'Válido 2 años',
    'Buceo Scuba Diver': 'Válido 2 años',
    'Rescate y Salvamento Acuático': 'Válido 2 años',
    'Sistema de Gestión ISO 14001': 'Válido 3 años',
    'Seguridad Alimentaria ISO 22000': 'Válido 3 años',
    'Supervivencia Básico y Avanzado': 'Válido 2 años',
    'Gestión de Riesgos Laborales': 'Válido 2 años',
    'Auditorías de Seguridad': 'Válido 2 años',
    'Procedimientos Operativos Normalizados NFPA': 'Válido 3 años'
  };

  // Generar datos determinísticos basados en el nombre
  const nameHash = courseName.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  const students = 500 + (nameHash % 1000);
  const rating = 4.5 + ((nameHash % 5) * 0.1);

  return {
    detailedDescription: `${baseDescription} Este curso está diseñado para proporcionar formación especializada y certificación reconocida en el área de ${courseName.toLowerCase()}.`,
    duration: (durations as any)[courseName] || '24 horas',
    certification: (certifications as any)[courseName] || 'Válido 2 años',
    category: (categories as any)[courseName] || 'Seguridad Industrial',
    students: students,
    rating: Math.round(rating * 10) / 10,
    price: 'Consultar',
    instructor: (instructors as any)[courseName] || 'Instructor ISCOR Certificado',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    image: null,
    objectives: [
      `Comprender los fundamentos de ${courseName.toLowerCase()}`,
      'Aplicar procedimientos de seguridad específicos',
      'Desarrollar habilidades prácticas especializadas',
      'Implementar protocolos de trabajo seguro',
      'Obtener certificación oficial reconocida'
    ],
    benefits: [
      'Mejora en la seguridad y eficiencia del trabajo',
      'Cumplimiento de normativas de seguridad',
      'Reducción de accidentes laborales',
      'Certificación reconocida a nivel nacional',
      'Actualización continua en técnicas especializadas'
    ],
    requirements: [
      'Mayor de 18 años',
      'Buen estado de salud física',
      'Documento de identidad vigente',
      'Capacidad de trabajo en equipo',
      'Compromiso con la seguridad'
    ],
    modules: [
      'Fundamentos Teóricos',
      'Normativas y Regulaciones',
      'Procedimientos de Seguridad',
      'Equipos y Herramientas',
      'Prácticas Supervisadas',
      'Evaluación y Certificación'
    ],
    slug: courseName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  };
}

async function backfillAllCourses(dryRun: boolean = true) {
  try {
    console.log(`🚀 Iniciando backfill de todos los cursos - Dry Run: ${dryRun}\n`);
    
    // Obtener todos los cursos de la base de datos
    const courses = await prisma.home_service_items.findMany({
      orderBy: { order: 'asc' }
    });

    console.log(`📊 Cursos encontrados: ${courses.length}\n`);

    let processed = 0;
    let errors = 0;

    for (const course of courses) {
      try {
        console.log(`🔄 Procesando: ${course.name}`);
        
        const details = generateCourseDetails(course.name, course.description);
        
        if (!dryRun) {
          await prisma.home_service_items.update({
            where: { id: course.id },
            data: {
              detailedDescription: details.detailedDescription,
              duration: details.duration,
              certification: details.certification,
              category: details.category,
              students: details.students,
              rating: details.rating,
              price: details.price,
              instructor: details.instructor,
              location: details.location,
              schedule: details.schedule,
              image: details.image,
              objectives: details.objectives,
              benefits: details.benefits,
              requirements: details.requirements,
              modules: details.modules,
              slug: details.slug
            }
          });
        }
        
        console.log(`✅ Procesado: ${course.name}`);
        processed++;
        
      } catch (error) {
        console.error(`❌ Error procesando ${course.name}:`, error);
        errors++;
      }
    }

    console.log(`\n📈 Resumen:`);
    console.log(`✅ Cursos procesados: ${processed}`);
    console.log(`❌ Errores: ${errors}`);
    console.log(`📊 Total: ${courses.length}`);

    if (dryRun) {
      console.log(`\n⚠️  MODO DRY RUN - No se realizaron cambios en la base de datos`);
      console.log(`💡 Para ejecutar realmente, usa: npx tsx scripts/backfill-all-courses.ts --execute`);
    } else {
      console.log(`\n🎉 Backfill completado exitosamente`);
    }

  } catch (error) {
    console.error('❌ Error general:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Verificar argumentos de línea de comandos
const args = process.argv.slice(2);
const execute = args.includes('--execute');

backfillAllCourses(!execute);
