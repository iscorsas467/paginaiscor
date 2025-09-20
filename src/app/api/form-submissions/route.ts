import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Obtener todas las solicitudes de formularios con paginación y filtros
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    const status = searchParams.get('status') || '';
    const course = searchParams.get('course') || '';

    const skip = (page - 1) * limit;

    // Construir filtros
    const where: any = {};
    
    if (search) {
      where.OR = [
        { nombre: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { empresa: { contains: search, mode: 'insensitive' } },
        { courseName: { contains: search, mode: 'insensitive' } }
      ];
    }

    if (status) {
      where.status = status;
    }

    if (course) {
      where.courseSlug = course;
    }

    // Obtener solicitudes con paginación
    const [submissions, total] = await Promise.all([
      prisma.form_submissions.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.form_submissions.count({ where })
    ]);

    // Obtener estadísticas
    const stats = await prisma.form_submissions.groupBy({
      by: ['status'],
      _count: {
        status: true
      }
    });

    const courseStats = await prisma.form_submissions.groupBy({
      by: ['courseName'],
      _count: {
        courseName: true
      },
      orderBy: {
        _count: {
          courseName: 'desc'
        }
      },
      take: 10
    });

    return NextResponse.json({
      success: true,
      data: {
        submissions,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit)
        },
        stats: {
          byStatus: stats,
          byCourse: courseStats
        }
      }
    }, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });

  } catch (error) {
    console.error('Error obteniendo formularios:', error);
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 });
  }
}

// POST - Crear nueva solicitud de formulario
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      courseName,
      courseSlug,
      nombre,
      email,
      telefono,
      empresa,
      mensaje
    } = body;

    // Validaciones
    if (!courseName || !courseSlug || !nombre || !email || !telefono) {
      return NextResponse.json({
        success: false,
        error: 'Los campos obligatorios son: curso, nombre, email y teléfono'
      }, { status: 400 });
    }

    // Crear la solicitud
    const nuevaSolicitud = await prisma.form_submissions.create({
      data: {
        courseName,
        courseSlug,
        nombre,
        email,
        telefono,
        empresa: empresa || null,
        mensaje: mensaje || null
      }
    });

    // Crear notificación
    try {
      await prisma.notifications.create({
        data: {
          type: 'form_submission',
          title: 'Nueva Solicitud de Información',
          message: `${nombre} solicitó información sobre el curso "${courseName}"`,
          data: {
            submissionId: nuevaSolicitud.id,
            courseName,
            courseSlug,
            nombre,
            email,
            telefono,
            empresa
          },
          priority: 'high'
        }
      });
    } catch (notificationError) {
      console.error('Error creando notificación:', notificationError);
      // No fallar la solicitud si la notificación falla
    }

    return NextResponse.json({
      success: true,
      data: nuevaSolicitud,
      message: 'Solicitud enviada exitosamente'
    }, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });

  } catch (error) {
    console.error('Error creando solicitud:', error);
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 });
  }
}

// PUT - Actualizar estado de solicitud
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      id,
      status,
      notes
    } = body;

    // Validaciones
    if (!id) {
      return NextResponse.json({
        success: false,
        error: 'ID de la solicitud es requerido'
      }, { status: 400 });
    }

    // Verificar que la solicitud existe
    const solicitudExistente = await prisma.form_submissions.findUnique({
      where: { id }
    });

    if (!solicitudExistente) {
      return NextResponse.json({
        success: false,
        error: 'Solicitud no encontrada'
      }, { status: 404 });
    }

    // Actualizar la solicitud
    const solicitudActualizada = await prisma.form_submissions.update({
      where: { id },
      data: {
        status: status || solicitudExistente.status,
        notes: notes !== undefined ? notes : solicitudExistente.notes
      }
    });

    return NextResponse.json({
      success: true,
      data: solicitudActualizada,
      message: 'Solicitud actualizada exitosamente'
    }, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });

  } catch (error) {
    console.error('Error actualizando solicitud:', error);
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 });
  }
}

// DELETE - Eliminar solicitud
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({
        success: false,
        error: 'ID de la solicitud es requerido'
      }, { status: 400 });
    }

    // Verificar que la solicitud existe
    const solicitudExistente = await prisma.form_submissions.findUnique({
      where: { id }
    });

    if (!solicitudExistente) {
      return NextResponse.json({
        success: false,
        error: 'Solicitud no encontrada'
      }, { status: 404 });
    }

    // Eliminar la solicitud
    await prisma.form_submissions.delete({
      where: { id }
    });

    return NextResponse.json({
      success: true,
      message: 'Solicitud eliminada exitosamente'
    }, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });

  } catch (error) {
    console.error('Error eliminando solicitud:', error);
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 });
  }
}
