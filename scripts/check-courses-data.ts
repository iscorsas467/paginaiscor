import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkCoursesData() {
  try {
    console.log('🔍 Verificando datos de cursos en la base de datos...\n');

    // Verificar home_service_items (donde están los cursos)
    const serviceItems = await prisma.home_service_items.findMany({
      orderBy: { order: 'asc' }
    });

    console.log(`📊 Total de cursos en home_service_items: ${serviceItems.length}`);
    
    if (serviceItems.length > 0) {
      console.log('\n📋 Cursos encontrados:');
      serviceItems.forEach((item: any, index: number) => {
        console.log(`${index + 1}. ${item.name}`);
        console.log(`   Descripción: ${item.description}`);
        console.log(`   Icono: ${item.icon}`);
        console.log(`   Gradiente: ${item.gradient}`);
        console.log(`   Orden: ${item.order}`);
        console.log('');
      });
    } else {
      console.log('❌ No se encontraron cursos en la base de datos');
    }

    // Verificar home_services
    const homeServices = await prisma.home_services.findMany();
    console.log(`📊 Total de secciones de servicios: ${homeServices.length}`);
    
    if (homeServices.length > 0) {
      homeServices.forEach((service: any, index: number) => {
        console.log(`${index + 1}. ${service.title}`);
        console.log(`   Descripción: ${service.description}`);
        console.log('');
      });
    }

    // Verificar home_hero
    const homeHero = await prisma.home_hero.findMany();
    console.log(`📊 Total de hero sections: ${homeHero.length}`);
    
    if (homeHero.length > 0) {
      homeHero.forEach((hero: any, index: number) => {
        console.log(`${index + 1}. ${hero.title}`);
        console.log(`   Badge: ${hero.badge}`);
        console.log(`   Subtítulo: ${hero.subtitle}`);
        console.log('');
      });
    }

    // Verificar contact_info
    const contactInfo = await prisma.contactInfo.findMany({
      include: {
        contact_info_items: true
      }
    });
    console.log(`📊 Total de información de contacto: ${contactInfo.length}`);
    
    if (contactInfo.length > 0) {
      contactInfo.forEach((info: any, index: number) => {
        console.log(`${index + 1}. ${info.title}`);
        console.log(`   Descripción: ${info.description}`);
        console.log(`   Items: ${info.contact_info_items.length}`);
        console.log('');
      });
    }

    console.log('✅ Verificación completada');

  } catch (error) {
    console.error('❌ Error verificando datos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkCoursesData();
