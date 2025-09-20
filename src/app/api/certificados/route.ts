import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Obtener todos los certificados con paginación y filtros
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    const status = searchParams.get('status') || '';

    const skip = (page - 1) * limit;

    // Construir filtros
    const where: any = {};
    
    if (search) {
      where.OR = [
        { nombre: { contains: search, mode: 'insensitive' } },
        { numero_certificado: { contains: search, mode: 'insensitive' } },
        { capacitacion: { contains: search, mode: 'insensitive' } },
        { cedula: { equals: BigInt(search) || BigInt(0) } }
      ];
    }

    // Obtener certificados con paginación
    const [certificados, total] = await Promise.all([
      prisma.certificados.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.certificados.count({ where })
    ]);

    // Procesar certificados para incluir estado
    const certificadosConEstado = certificados.map(cert => {
      let estado = 'Vigente';
      
      try {
        const fechaVencimiento = cert.fecha_vencimiento;
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
        
        const hoy = new Date();
        if (fechaVencimientoDate < hoy) {
          estado = 'Vencido';
        }
      } catch (error) {
        console.log('No se pudo parsear la fecha de vencimiento:', cert.fecha_vencimiento);
      }

      return {
        ...cert,
        cedula: cert.cedula.toString(),
        estado
      };
    });

    // Filtrar por estado si se especifica
    const certificadosFiltrados = status 
      ? certificadosConEstado.filter(cert => cert.estado === status)
      : certificadosConEstado;

    return NextResponse.json({
      success: true,
      data: {
        certificados: certificadosFiltrados,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit)
        }
      }
    }, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });

  } catch (error) {
    console.error('Error obteniendo certificados:', error);
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 });
  }
}

// POST - Crear nuevo certificado
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      numero_certificado,
      nombre,
      cedula,
      capacitacion,
      horas,
      fecha_realizacion,
      fecha_vencimiento
    } = body;

    // Validaciones
    if (!numero_certificado || !nombre || !cedula || !capacitacion || !horas || !fecha_realizacion || !fecha_vencimiento) {
      return NextResponse.json({
        success: false,
        error: 'Todos los campos son obligatorios'
      }, { status: 400 });
    }

    // Verificar que la cédula sea un número válido
    const cedulaNumber = parseInt(cedula);
    if (isNaN(cedulaNumber)) {
      return NextResponse.json({
        success: false,
        error: 'La cédula debe ser un número válido'
      }, { status: 400 });
    }

    // Verificar que el número de certificado no exista
    const certificadoExistente = await prisma.certificados.findFirst({
      where: { numero_certificado }
    });

    if (certificadoExistente) {
      return NextResponse.json({
        success: false,
        error: 'Ya existe un certificado con este número'
      }, { status: 400 });
    }

    // Crear el certificado
    const nuevoCertificado = await prisma.certificados.create({
      data: {
        numero_certificado,
        nombre,
        cedula: BigInt(cedulaNumber),
        capacitacion,
        horas,
        fecha_realizacion,
        fecha_vencimiento
      }
    });

    return NextResponse.json({
      success: true,
      data: {
        ...nuevoCertificado,
        cedula: nuevoCertificado.cedula.toString()
      },
      message: 'Certificado creado exitosamente'
    }, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });

  } catch (error) {
    console.error('Error creando certificado:', error);
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 });
  }
}

// PUT - Actualizar certificado
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      id,
      numero_certificado,
      nombre,
      cedula,
      capacitacion,
      horas,
      fecha_realizacion,
      fecha_vencimiento
    } = body;

    // Validaciones
    if (!id) {
      return NextResponse.json({
        success: false,
        error: 'ID del certificado es requerido'
      }, { status: 400 });
    }

    if (!numero_certificado || !nombre || !cedula || !capacitacion || !horas || !fecha_realizacion || !fecha_vencimiento) {
      return NextResponse.json({
        success: false,
        error: 'Todos los campos son obligatorios'
      }, { status: 400 });
    }

    // Verificar que la cédula sea un número válido
    const cedulaNumber = parseInt(cedula);
    if (isNaN(cedulaNumber)) {
      return NextResponse.json({
        success: false,
        error: 'La cédula debe ser un número válido'
      }, { status: 400 });
    }

    // Verificar que el certificado existe
    const certificadoExistente = await prisma.certificados.findUnique({
      where: { id: parseInt(id) }
    });

    if (!certificadoExistente) {
      return NextResponse.json({
        success: false,
        error: 'Certificado no encontrado'
      }, { status: 404 });
    }

    // Verificar que el número de certificado no esté en uso por otro certificado
    const certificadoConMismoNumero = await prisma.certificados.findFirst({
      where: { 
        numero_certificado,
        NOT: { id: parseInt(id) }
      }
    });

    if (certificadoConMismoNumero) {
      return NextResponse.json({
        success: false,
        error: 'Ya existe otro certificado con este número'
      }, { status: 400 });
    }

    // Actualizar el certificado
    const certificadoActualizado = await prisma.certificados.update({
      where: { id: parseInt(id) },
      data: {
        numero_certificado,
        nombre,
        cedula: BigInt(cedulaNumber),
        capacitacion,
        horas,
        fecha_realizacion,
        fecha_vencimiento
      }
    });

    return NextResponse.json({
      success: true,
      data: {
        ...certificadoActualizado,
        cedula: certificadoActualizado.cedula.toString()
      },
      message: 'Certificado actualizado exitosamente'
    }, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });

  } catch (error) {
    console.error('Error actualizando certificado:', error);
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 });
  }
}

// DELETE - Eliminar certificado
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({
        success: false,
        error: 'ID del certificado es requerido'
      }, { status: 400 });
    }

    // Verificar que el certificado existe
    const certificadoExistente = await prisma.certificados.findUnique({
      where: { id: parseInt(id) }
    });

    if (!certificadoExistente) {
      return NextResponse.json({
        success: false,
        error: 'Certificado no encontrado'
      }, { status: 404 });
    }

    // Eliminar el certificado
    await prisma.certificados.delete({
      where: { id: parseInt(id) }
    });

    return NextResponse.json({
      success: true,
      message: 'Certificado eliminado exitosamente'
    }, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });

  } catch (error) {
    console.error('Error eliminando certificado:', error);
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 });
  }
}
