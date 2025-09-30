import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateContactIcons() {
  try {
    console.log('🔄 Actualizando iconos de contacto a azul...');

    // Actualizar todos los contact_info_items para que tengan gradientes azules
    const result = await prisma.contact_info_items.updateMany({
      data: {
        gradient: 'from-blue-500 to-blue-600'
      }
    });

    console.log(`✅ Actualizados ${result.count} iconos de contacto a azul`);
    
    // Verificar los cambios
    const updatedItems = await prisma.contact_info_items.findMany();
    console.log('📋 Iconos actualizados:');
    updatedItems.forEach(item => {
      console.log(`  - ${item.title}: ${item.gradient}`);
    });

  } catch (error) {
    console.error('❌ Error actualizando iconos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateContactIcons();
