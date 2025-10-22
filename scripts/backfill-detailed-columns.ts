import { PrismaClient } from '@prisma/client';
import { writeFileSync } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient();

// Datos de los cursos desde el código existente
const coursesData = [
  {
    name: 'Trabajo en Alturas',
    detailedDescription: 'Nuestro curso de Trabajo en Alturas está diseñado para proporcionar a los participantes los conocimientos teóricos y prácticos necesarios para realizar trabajos seguros en altura. El programa incluye formación en equipos de protección personal, sistemas de anclaje, evaluación de riesgos y procedimientos de rescate.',
    duration: '40 horas',
    certification: 'Válido 2 años',
    category: 'Seguridad Integral',
    students: 1250,
    rating: 4.9,
    price: 'Consultar',
    instructor: 'Ing. Carlos Rodríguez - Especialista en Seguridad Integral',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    image: '/alturas.png',
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
    slug: 'trabajo-en-alturas'
  },
  {
    name: 'Espacios Confinados',
    detailedDescription: 'El curso de Espacios Confinados capacita a los participantes en trabajos seguros en espacios confinados. Incluye formación en evaluación de riesgos, equipos de protección, procedimientos de entrada y rescate especializado.',
    duration: '40 horas',
    certification: 'Válido 2 años',
    category: 'Seguridad Integral',
    students: 980,
    rating: 4.8,
    price: 'Consultar',
    instructor: 'Ing. Ana Martínez - Especialista en Espacios Confinados',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    image: '/Espacios_confinados.png',
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
    slug: 'espacios-confinados'
  },
  {
    name: 'Control y Extinción de Incendios',
    detailedDescription: 'El curso de Control y Extinción de Incendios proporciona formación integral en prevención, detección y extinción de incendios. Los participantes aprenderán sobre los diferentes tipos de fuego, sistemas de detección, equipos de extinción y protocolos de emergencia.',
    duration: '32 horas',
    certification: 'Válido 3 años',
    category: 'Emergencias',
    students: 1100,
    rating: 4.9,
    price: 'Consultar',
    instructor: 'Cpt. Roberto Silva - Bombero Profesional Certificado',
    location: 'Centro de Entrenamiento ISCOR y campo de prácticas',
    schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
    image: '/fuego.png',
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
    slug: 'control-extincion-incendios'
  }
  // Continuaré agregando todos los 29 cursos...
];

interface BackfillOptions {
  dryRun: boolean;
  batchSize: number;
  courseId?: string;
  rollback: boolean;
}

async function backfillDetailedColumns(options: BackfillOptions) {
  const { dryRun, batchSize, courseId, rollback } = options;
  
  console.log(`🚀 Iniciando backfill - Dry Run: ${dryRun}, Batch Size: ${batchSize}`);
  
  try {
    // Registrar en migration_control
    const controlRecord = await prisma.migration_control.create({
      data: {
        courseId: courseId || null,
        step: rollback ? 'ROLLBACK' : 'BACKFILL',
        status: 'RUNNING',
        notes: `Backfill iniciado - Dry Run: ${dryRun}`,
        metricsJson: {
          batchSize,
          courseId,
          startTime: new Date().toISOString()
        }
      }
    });

    console.log(`📝 Registro de control creado: ${controlRecord.id}`);

    // Obtener cursos a procesar
    const whereClause = courseId ? { id: courseId } : {};
    const courses = await prisma.home_service_items.findMany({
      where: whereClause,
      take: batchSize
    });

    console.log(`📊 Cursos encontrados: ${courses.length}`);

    const results = [];
    let processedCount = 0;
    let errorCount = 0;

    for (const course of courses) {
      try {
        // Buscar datos del curso en el array
        const courseData = coursesData.find(c => c.name === course.name);
        
        if (!courseData) {
          console.log(`⚠️  No se encontraron datos para: ${course.name}`);
          continue;
        }

        if (rollback) {
          // Rollback: limpiar campos nuevos
          if (!dryRun) {
            await prisma.home_service_items.update({
              where: { id: course.id },
              data: {
                detailedDescription: null,
                duration: null,
                certification: null,
                category: null,
                students: null,
                rating: null,
                price: null,
                instructor: null,
                location: null,
                schedule: null,
                image: null,
                objectives: [],
                benefits: [],
                requirements: [],
                modules: [],
                slug: null
              }
            });
          }
          results.push({ course: course.name, action: 'ROLLBACK', status: 'SUCCESS' });
        } else {
          // Backfill: poblar campos nuevos
          if (!dryRun) {
            await prisma.home_service_items.update({
              where: { id: course.id },
              data: {
                detailedDescription: courseData.detailedDescription,
                duration: courseData.duration,
                certification: courseData.certification,
                category: courseData.category,
                students: courseData.students,
                rating: courseData.rating,
                price: courseData.price,
                instructor: courseData.instructor,
                location: courseData.location,
                schedule: courseData.schedule,
                image: courseData.image,
                objectives: courseData.objectives,
                benefits: courseData.benefits,
                requirements: courseData.requirements,
                modules: courseData.modules,
                slug: courseData.slug
              }
            });
          }
          results.push({ course: course.name, action: 'BACKFILL', status: 'SUCCESS' });
        }
        
        processedCount++;
        console.log(`✅ Procesado: ${course.name}`);
        
      } catch (error) {
        errorCount++;
        console.error(`❌ Error procesando ${course.name}:`, error);
        results.push({ course: course.name, action: rollback ? 'ROLLBACK' : 'BACKFILL', status: 'ERROR', error: error instanceof Error ? error.message : String(error) });
      }
    }

    // Actualizar registro de control
    const finalMetrics = {
      processedCount,
      errorCount,
      totalCourses: courses.length,
      endTime: new Date().toISOString(),
      results: results.slice(0, 10) // Solo primeros 10 para no sobrecargar
    };

    if (!dryRun) {
      await prisma.migration_control.update({
        where: { id: controlRecord.id },
        data: {
          status: errorCount > 0 ? 'ERROR' : 'DONE',
          notes: `Procesados: ${processedCount}, Errores: ${errorCount}`,
          metricsJson: finalMetrics
        }
      });
    }

    // Generar reporte CSV si es dry run
    if (dryRun) {
      const csvContent = [
        'Course,Action,Status,Error',
        ...results.map((r: any) => `${r.course},${r.action},${r.status},${r.error || ''}`)
      ].join('\n');
      
      const filename = `logs/backfill-${new Date().toISOString().split('T')[0]}.csv`;
      writeFileSync(filename, csvContent);
      console.log(`📄 Reporte CSV generado: ${filename}`);
    }

    console.log(`🎉 Backfill completado - Procesados: ${processedCount}, Errores: ${errorCount}`);
    
  } catch (error) {
    console.error('❌ Error en backfill:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Parsear argumentos de línea de comandos
const args = process.argv.slice(2);
const options: BackfillOptions = {
  dryRun: args.includes('--dry-run'),
  batchSize: parseInt(args.find(arg => arg.startsWith('--batch-size='))?.split('=')[1] || '200'),
  courseId: args.find(arg => arg.startsWith('--course-id='))?.split('=')[1],
  rollback: args.includes('--rollback')
};

// Ejecutar backfill
backfillDetailedColumns(options).catch(console.error);
