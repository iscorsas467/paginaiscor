import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Obtener información de testimonios
export async function GET() {
  try {
    const testimonials = await prisma.home_testimonials.findFirst({
      include: {
        home_testimonial_items: {
          orderBy: {
            order: 'asc'
          }
        }
      }
    });

    if (!testimonials) {
      return NextResponse.json({ 
        success: false, 
        error: 'No se encontró información de testimonios' 
      }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      data: testimonials 
    });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// POST - Crear información de testimonios
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description } = body;

    const testimonials = await prisma.home_testimonials.create({
      data: {
        id: 'home-testimonials-1',
        title: title || 'Lo que dicen nuestros clientes',
        description: description || 'La confianza de nuestros clientes es nuestro mayor logro. Conoce las experiencias de quienes han confiado en ISCOR.',
        updatedAt: new Date()
      }
    });

    return NextResponse.json({ 
      success: true, 
      data: testimonials 
    });
  } catch (error) {
    console.error('Error creating testimonials:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// PUT - Actualizar información de testimonios
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, title, description } = body;

    const testimonials = await prisma.home_testimonials.update({
      where: { id },
      data: {
        title,
        description,
        updatedAt: new Date()
      }
    });

    return NextResponse.json({ 
      success: true, 
      data: testimonials 
    });
  } catch (error) {
    console.error('Error updating testimonials:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// DELETE - Eliminar información de testimonios (solo si es necesario)
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ 
        success: false, 
        error: 'ID requerido' 
      }, { status: 400 });
    }

    // Eliminar testimonios y todos sus items relacionados
    await prisma.home_testimonials.delete({
      where: { id }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Testimonios eliminados correctamente' 
    });
  } catch (error) {
    console.error('Error deleting testimonials:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}
