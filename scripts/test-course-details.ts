import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function testCourseDetails() {
  try {
    console.log('🧪 Probando información detallada de cursos...\n');

    // Obtener algunos cursos de la base de datos
    const courses = await prisma.home_service_items.findMany({
      take: 5,
      orderBy: { order: 'asc' }
    });

    console.log(`📊 Probando ${courses.length} cursos:\n`);

    for (const course of courses) {
      const slug = course.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      
      try {
        // Simular llamada a la API
        const response = await fetch(`http://localhost:3000/api/courses/${slug}`);
        
        if (response.ok) {
          const data = await response.json();
          
          if (data.success && data.data) {
            const courseData = data.data;
            console.log(`✅ ${course.name}:`);
            console.log(`   📝 Descripción detallada: ${courseData.detailedDescription.substring(0, 100)}...`);
            console.log(`   ⏱️  Duración: ${courseData.duration}`);
            console.log(`   📜 Certificación: ${courseData.certification}`);
            console.log(`   👨‍🏫 Instructor: ${courseData.instructor}`);
            console.log(`   📍 Ubicación: ${courseData.location}`);
            console.log(`   🎯 Objetivos: ${courseData.objectives.length} objetivos`);
            console.log(`   💡 Beneficios: ${courseData.benefits.length} beneficios`);
            console.log(`   📋 Módulos: ${courseData.modules.length} módulos`);
            console.log('');
          } else {
            console.log(`❌ ${course.name}: Error en respuesta de API`);
          }
        } else {
          console.log(`❌ ${course.name}: Error HTTP ${response.status}`);
        }
      } catch (error) {
        console.log(`❌ ${course.name}: Error de conexión - ${error.message}`);
        console.log('   (Esto es normal si el servidor no está corriendo)');
      }
    }

    console.log('🎉 Prueba completada');
    console.log('📝 Para probar completamente, ejecuta: npm run dev');
    console.log('📝 Luego visita: http://localhost:3000/servicios');
    console.log('📝 Y haz clic en "Más información" en cualquier curso');

  } catch (error) {
    console.error('❌ Error en la prueba:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testCourseDetails();
