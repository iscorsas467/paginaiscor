import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Obtener todas las notificaciones
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const unreadOnly = searchParams.get('unreadOnly') === 'true';
    const limit = parseInt(searchParams.get('limit') || '50');

    const where = unreadOnly ? { isRead: false } : {};

    const notifications = await prisma.notifications.findMany({
      where,
      take: limit,
      orderBy: { createdAt: 'desc' }
    });

    // Contar notificaciones no leídas
    const unreadCount = await prisma.notifications.count({
      where: { isRead: false }
    });

    return NextResponse.json({
      success: true,
      data: {
        notifications,
        unreadCount
      }
    }, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });

  } catch (error) {
    console.error('Error obteniendo notificaciones:', error);
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 });
  }
}

// POST - Crear nueva notificación
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      type,
      title,
      message,
      data,
      priority = 'normal'
    } = body;

    // Validaciones
    if (!type || !title || !message) {
      return NextResponse.json({
        success: false,
        error: 'Los campos type, title y message son obligatorios'
      }, { status: 400 });
    }

    // Crear la notificación
    const notification = await prisma.notifications.create({
      data: {
        type,
        title,
        message,
        data: data || null,
        priority
      }
    });

    return NextResponse.json({
      success: true,
      data: notification,
      message: 'Notificación creada exitosamente'
    }, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });

  } catch (error) {
    console.error('Error creando notificación:', error);
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 });
  }
}

// PUT - Marcar notificaciones como leídas
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { ids, markAllAsRead = false } = body;

    if (markAllAsRead) {
      // Marcar todas como leídas
      await prisma.notifications.updateMany({
        where: { isRead: false },
        data: { isRead: true }
      });
    } else if (ids && Array.isArray(ids)) {
      // Marcar notificaciones específicas como leídas
      await prisma.notifications.updateMany({
        where: { id: { in: ids } },
        data: { isRead: true }
      });
    } else {
      return NextResponse.json({
        success: false,
        error: 'Se requiere ids o markAllAsRead'
      }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: 'Notificaciones marcadas como leídas'
    }, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });

  } catch (error) {
    console.error('Error actualizando notificaciones:', error);
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 });
  }
}

// DELETE - Eliminar notificación
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({
        success: false,
        error: 'ID de la notificación es requerido'
      }, { status: 400 });
    }

    // Verificar que la notificación existe
    const notification = await prisma.notifications.findUnique({
      where: { id }
    });

    if (!notification) {
      return NextResponse.json({
        success: false,
        error: 'Notificación no encontrada'
      }, { status: 404 });
    }

    // Eliminar la notificación
    await prisma.notifications.delete({
      where: { id }
    });

    return NextResponse.json({
      success: true,
      message: 'Notificación eliminada exitosamente'
    }, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });

  } catch (error) {
    console.error('Error eliminando notificación:', error);
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 });
  }
}
