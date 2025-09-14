import { PrismaClient } from '../src/generated/prisma';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

interface CertificadoData {
  id: number;
  numero_certificado: string;
  nombre: string;
  cedula: number;
  capacitacion: string;
  horas: string;
  fecha_realizacion: string;
  fecha_vencimiento: string;
}

async function importCertificados() {
  try {
    console.log('🚀 Iniciando importación de certificados...\n');

    // Leer el archivo SQL
    const sqlFilePath = path.join(process.cwd(), 'public', 'u993654675_app.sql');
    const sqlContent = fs.readFileSync(sqlFilePath, 'utf-8');

    console.log('📄 Archivo SQL leído correctamente');

    // Extraer los datos INSERT
    const insertRegex = /INSERT INTO `certificados` \([^)]+\) VALUES\s*([^;]+);/g;
    const certificados: CertificadoData[] = [];
    let match;

    while ((match = insertRegex.exec(sqlContent)) !== null) {
      const valuesString = match[1];
      
      // Procesar cada registro
      const recordRegex = /\(([^)]+)\)/g;
      let recordMatch;
      
      while ((recordMatch = recordRegex.exec(valuesString)) !== null) {
        const recordString = recordMatch[1];
        
        // Parsear el registro
        const parts = recordString.split(',').map(part => part.trim());
        
        if (parts.length >= 8) {
          const certificado: CertificadoData = {
            id: parseInt(parts[0]),
            numero_certificado: parts[1].replace(/'/g, ''),
            nombre: parts[2].replace(/'/g, ''),
            cedula: parseInt(parts[3]),
            capacitacion: parts[4].replace(/'/g, ''),
            horas: parts[5].replace(/'/g, ''),
            fecha_realizacion: parts[6].replace(/'/g, ''),
            fecha_vencimiento: parts[7].replace(/'/g, '')
          };
          
          certificados.push(certificado);
        }
      }
    }

    console.log(`📊 Total de certificados encontrados: ${certificados.length}`);

    // Limpiar tabla existente
    console.log('🧹 Limpiando tabla existente...');
    await prisma.certificados.deleteMany({});

    // Insertar datos en lotes
    const batchSize = 100;
    let inserted = 0;

    console.log('📥 Insertando certificados en lotes...');

    for (let i = 0; i < certificados.length; i += batchSize) {
      const batch = certificados.slice(i, i + batchSize);
      
      try {
        await prisma.certificados.createMany({
          data: batch.map(cert => ({
            numero_certificado: cert.numero_certificado,
            nombre: cert.nombre,
            cedula: BigInt(cert.cedula),
            capacitacion: cert.capacitacion,
            horas: cert.horas,
            fecha_realizacion: cert.fecha_realizacion,
            fecha_vencimiento: cert.fecha_vencimiento
          })),
          skipDuplicates: true
        });
        
        inserted += batch.length;
        console.log(`✅ Lote ${Math.floor(i / batchSize) + 1}: ${inserted}/${certificados.length} certificados insertados`);
      } catch (error) {
        console.error(`❌ Error en lote ${Math.floor(i / batchSize) + 1}:`, error);
      }
    }

    // Verificar importación
    const totalInserted = await prisma.certificados.count();
    console.log(`\n🎉 Importación completada!`);
    console.log(`📊 Total de certificados en la base de datos: ${totalInserted}`);

    // Mostrar algunos ejemplos
    const ejemplos = await prisma.certificados.findMany({
      take: 5,
      orderBy: { id: 'asc' }
    });

    console.log('\n📋 Ejemplos de certificados importados:');
    ejemplos.forEach((cert, index) => {
      console.log(`${index + 1}. ${cert.nombre} - Cédula: ${cert.cedula} - ${cert.capacitacion}`);
    });

  } catch (error) {
    console.error('❌ Error durante la importación:', error);
  } finally {
    await prisma.$disconnect();
  }
}

importCertificados();
