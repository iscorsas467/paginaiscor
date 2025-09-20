import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Los 14 cursos faltantes para completar los 29
const missingCourses = [
  {
    name: 'Operación Segura de Montacargas',
    description: 'Certificación de operarios de montacargas con técnicas de manejo seguro y mantenimiento preventivo.',
    icon: '🚛',
    gradient: 'from-blue-500 to-cyan-500',
    order: 16
  },
  {
    name: 'LOTO - Bloqueo y Etiquetado',
    description: 'Seguridad en trabajos con energías peligrosas mediante procedimientos de bloqueo y etiquetado.',
    icon: '🔒',
    gradient: 'from-gray-500 to-slate-600',
    order: 17
  },
  {
    name: 'Brigadas de Emergencia',
    description: 'Formación de brigadas de emergencia con simulaciones y sistema comando de incidentes (SCI).',
    icon: '👥',
    gradient: 'from-indigo-500 to-purple-500',
    order: 18
  },
  {
    name: 'Seguridad en Trabajos en Caliente',
    description: 'Procedimientos seguros para trabajos en caliente con control de riesgos de incendio.',
    icon: '🔥',
    gradient: 'from-orange-500 to-red-500',
    order: 19
  },
  {
    name: 'Sistema de Gestión ISO 9001',
    description: 'Sistema de gestión de la calidad ISO 9001 con implementación y auditorías internas.',
    icon: '📋',
    gradient: 'from-blue-600 to-indigo-600',
    order: 20
  },
  {
    name: 'Seguridad en el Izaje de Cargas',
    description: 'Operación segura de grúas para izaje de cargas con certificación de operarios especializados.',
    icon: '⚡',
    gradient: 'from-yellow-400 to-orange-500',
    order: 21
  },
  {
    name: 'Buceo Scuba Diver',
    description: 'Certificación de buceo scuba diver, advanced y máster scuba diver con instructor internacional NAUI.',
    icon: '🤿',
    gradient: 'from-cyan-500 to-blue-500',
    order: 22
  },
  {
    name: 'Rescate y Salvamento Acuático',
    description: 'Entrenamiento en rescate y salvamento acuático con programa de seguridad para piscinas.',
    icon: '🏊',
    gradient: 'from-blue-400 to-cyan-500',
    order: 23
  },
  {
    name: 'Sistema de Gestión ISO 14001',
    description: 'Sistema de gestión de administración ambiental ISO 14001 con programas de educación ambiental.',
    icon: '🌍',
    gradient: 'from-green-500 to-emerald-500',
    order: 24
  },
  {
    name: 'Seguridad Alimentaria ISO 22000',
    description: 'Sistema de gestión seguridad alimentaria ISO 22000 con HACCP y aseguramiento de inocuidad.',
    icon: '🍽️',
    gradient: 'from-green-600 to-emerald-600',
    order: 25
  },
  {
    name: 'Supervivencia Básico y Avanzado',
    description: 'Curso de supervivencia básico y avanzado para tripulaciones aéreas de combate y personal especializado.',
    icon: '🏕️',
    gradient: 'from-orange-600 to-red-600',
    order: 26
  },
  {
    name: 'Gestión de Riesgos Laborales',
    description: 'Identificación, evaluación y control de riesgos laborales con metodologías avanzadas.',
    icon: '⚠️',
    gradient: 'from-red-500 to-pink-500',
    order: 27
  },
  {
    name: 'Auditorías de Seguridad',
    description: 'Realización de auditorías de seguridad e higiene industrial con estándares internacionales.',
    icon: '🔍',
    gradient: 'from-purple-500 to-indigo-500',
    order: 28
  },
  {
    name: 'Procedimientos Operativos Normalizados NFPA',
    description: 'Desarrollo e implementación de procedimientos operativos normalizados según estándares NFPA.',
    icon: '📜',
    gradient: 'from-indigo-600 to-purple-600',
    order: 29
  }
];

async function addMissingCourses() {
  try {
    console.log('🔍 Verificando cursos existentes...');
    
    // Obtener la sección de servicios
    const homeServices = await prisma.home_services.findFirst();
    if (!homeServices) {
      console.error('❌ No se encontró la sección de servicios');
      return;
    }

    console.log(`📊 Cursos existentes: ${await prisma.home_service_items.count()}`);
    console.log(`📝 Agregando ${missingCourses.length} cursos faltantes...\n`);

    for (const course of missingCourses) {
      try {
        await prisma.home_service_items.upsert({
          where: { id: `course-${course.order}` },
          update: {
            ...course,
            servicesId: homeServices.id,
            updatedAt: new Date()
          },
          create: {
            id: `course-${course.order}`,
            ...course,
            servicesId: homeServices.id,
            updatedAt: new Date()
          }
        });
        console.log(`✅ ${course.order}. ${course.name}`);
      } catch (error) {
        console.error(`❌ Error agregando ${course.name}:`, error);
      }
    }

    const totalCourses = await prisma.home_service_items.count();
    console.log(`\n🎉 ¡Proceso completado!`);
    console.log(`📊 Total de cursos en la base de datos: ${totalCourses}`);

  } catch (error) {
    console.error('❌ Error agregando cursos faltantes:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addMissingCourses();
