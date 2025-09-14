import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function testCertificados() {
  try {
    console.log('🧪 Probando sistema de certificados...\n');

    // Probar con cédulas que existen
    const cedulasExistentes = [
      10010264, // JUAN CARLOS CARO MARIN
      1004438510, // CRISTIAN ARMANDO PAZ LOPEZ
      1004438516, // GILMER YONATHAN PAZ LOPEZ
      1004744310, // JULIO FERNANDO CUERO
      1004960129  // ANDRES DAVID CASTRO
    ];

    console.log('✅ PROBANDO CÉDULAS EXISTENTES:\n');

    for (const cedula of cedulasExistentes) {
      try {
        const certificado = await prisma.certificados.findFirst({
          where: { cedula: BigInt(cedula) }
        });

        if (certificado) {
          console.log(`✅ Cédula ${cedula}:`);
          console.log(`   📝 Nombre: ${certificado.nombre}`);
          console.log(`   🎓 Capacitación: ${certificado.capacitacion}`);
          console.log(`   ⏱️ Horas: ${certificado.horas}`);
          console.log(`   📅 Fecha realización: ${certificado.fecha_realizacion}`);
          console.log(`   📅 Fecha vencimiento: ${certificado.fecha_vencimiento}`);
          console.log('');
        } else {
          console.log(`❌ Cédula ${cedula}: No encontrada`);
        }
      } catch (error) {
        console.log(`❌ Error con cédula ${cedula}:`, error);
      }
    }

    // Probar con cédulas que NO existen
    const cedulasNoExistentes = [
      9999999999,
      1234567890,
      9876543210
    ];

    console.log('❌ PROBANDO CÉDULAS NO EXISTENTES:\n');

    for (const cedula of cedulasNoExistentes) {
      try {
        const certificado = await prisma.certificados.findFirst({
          where: { cedula: BigInt(cedula) }
        });

        if (certificado) {
          console.log(`⚠️ Cédula ${cedula}: Encontrada (no debería existir)`);
        } else {
          console.log(`✅ Cédula ${cedula}: Correctamente no encontrada`);
        }
      } catch (error) {
        console.log(`❌ Error con cédula ${cedula}:`, error);
      }
    }

    // Estadísticas generales
    const totalCertificados = await prisma.certificados.count();
    console.log(`\n📊 ESTADÍSTICAS:`);
    console.log(`   Total de certificados: ${totalCertificados}`);

    // Contar por tipo de capacitación
    const tiposCapacitacion = await prisma.certificados.groupBy({
      by: ['capacitacion'],
      _count: {
        capacitacion: true
      },
      orderBy: {
        _count: {
          capacitacion: 'desc'
        }
      }
    });

    console.log(`\n📋 TIPOS DE CAPACITACIÓN:`);
    tiposCapacitacion.forEach(tipo => {
      console.log(`   ${tipo.capacitacion}: ${tipo._count.capacitacion} certificados`);
    });

    console.log('\n🎉 Pruebas completadas exitosamente!');

  } catch (error) {
    console.error('❌ Error en las pruebas:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testCertificados();
