import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Buscar certificado por cédula
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ cedula: string }> }
) {
  try {
    const { cedula } = await params;
    
    // Validar que la cédula sea un número
    const cedulaNumber = parseInt(cedula);
    if (isNaN(cedulaNumber)) {
      return NextResponse.json({ 
        success: false, 
        error: 'Número de cédula inválido' 
      }, { status: 400 });
    }

    // Buscar el certificado en la base de datos
    const certificado = await prisma.certificados.findFirst({
      where: {
        cedula: BigInt(cedulaNumber)
      }
    });

    if (!certificado) {
      return NextResponse.json({ 
        success: false, 
        error: 'No se encontró ningún certificado asociado a esta cédula' 
      }, { status: 404 });
    }

    // Determinar el estado del certificado basado en la fecha de vencimiento
    const fechaVencimiento = certificado.fecha_vencimiento;
    let estado = 'Vigente';
    
    // Intentar parsear la fecha de vencimiento
    try {
      // Convertir diferentes formatos de fecha a Date
      let fechaVencimientoDate: Date;
      
      if (fechaVencimiento.includes('-')) {
        // Formato: DD-MMM-YYYY
        const partes = fechaVencimiento.split('-');
        const dia = partes[0];
        const mes = partes[1];
        const año = partes[2];
        
        const meses: { [key: string]: string } = {
          'JAN': '01', 'FEB': '02', 'MAR': '03', 'APR': '04',
          'MAY': '05', 'JUN': '06', 'JUL': '07', 'AUG': '08',
          'SEP': '09', 'OCT': '10', 'NOV': '11', 'DEC': '12'
        };
        
        fechaVencimientoDate = new Date(`${año}-${meses[mes]}-${dia.padStart(2, '0')}`);
      } else {
        // Formato: DD MES YYYY
        const partes = fechaVencimiento.split(' ');
        const dia = partes[0];
        const mes = partes[1];
        const año = partes[2];
        
        const meses: { [key: string]: string } = {
          'ENERO': '01', 'FEBRERO': '02', 'MARZO': '03', 'ABRIL': '04',
          'MAYO': '05', 'JUNIO': '06', 'JULIO': '07', 'AGOSTO': '08',
          'SEPTIEMBRE': '09', 'OCTUBRE': '10', 'NOVIEMBRE': '11', 'DICIEMBRE': '12'
        };
        
        fechaVencimientoDate = new Date(`${año}-${meses[mes]}-${dia.padStart(2, '0')}`);
      }
      
      // Verificar si el certificado está vencido
      const hoy = new Date();
      if (fechaVencimientoDate < hoy) {
        estado = 'Vencido';
      }
    } catch (error) {
      // Si no se puede parsear la fecha, mantener como 'Vigente'
      console.log('No se pudo parsear la fecha de vencimiento:', fechaVencimiento);
    }

    // Formatear la respuesta
    const certificadoFormateado = {
      id: certificado.id,
      numero_certificado: certificado.numero_certificado,
      nombre: certificado.nombre,
      cedula: certificado.cedula.toString(),
      capacitacion: certificado.capacitacion,
      horas: certificado.horas,
      fecha_realizacion: certificado.fecha_realizacion,
      fecha_vencimiento: certificado.fecha_vencimiento,
      estado: estado,
      instructor: 'Instructor Certificado ISCOR', // Valor por defecto
      createdAt: certificado.createdAt,
      updatedAt: certificado.updatedAt
    };

    return NextResponse.json({ 
      success: true, 
      data: certificadoFormateado 
    });

  } catch (error) {
    console.error('Error buscando certificado:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}
