import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Obtener items de testimonios
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const testimonialsId = searchParams.get('testimonialsId');

    let whereClause = {};
    if (testimonialsId) {
      whereClause = { testimonialsId };
    }

    const items = await prisma.home_testimonial_items.findMany({
      where: whereClause,
      orderBy: {
        order: 'asc'
      }
    });

    return NextResponse.json({ 
      success: true, 
      data: items 
    });
  } catch (error) {
    console.error('Error fetching testimonial items:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// POST - Crear item de testimonio
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      name, 
      position, 
      company, 
      content, 
      rating, 
      order, 
      testimonialsId 
    } = body;

    // Validar campos requeridos
    if (!name || !position || !company || !content || !testimonialsId) {
      return NextResponse.json({ 
        success: false, 
        error: 'Campos requeridos: name, position, company, content, testimonialsId' 
      }, { status: 400 });
    }

    // Obtener el siguiente orden si no se proporciona
    let finalOrder = order;
    if (finalOrder === undefined || finalOrder === null) {
      const lastItem = await prisma.home_testimonial_items.findFirst({
        where: { testimonialsId },
        orderBy: { order: 'desc' }
      });
      finalOrder = lastItem ? lastItem.order + 1 : 0;
    }

    const item = await prisma.home_testimonial_items.create({
      data: {
        id: `testimonial-item-${Date.now()}`,
        name,
        position,
        company,
        content,
        rating: rating || 5,
        order: finalOrder,
        testimonialsId,
        updatedAt: new Date()
      }
    });

    return NextResponse.json({ 
      success: true, 
      data: item 
    });
  } catch (error) {
    console.error('Error creating testimonial item:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// PUT - Actualizar item de testimonio
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      id, 
      name, 
      position, 
      company, 
      content, 
      rating, 
      order 
    } = body;

    if (!id) {
      return NextResponse.json({ 
        success: false, 
        error: 'ID requerido' 
      }, { status: 400 });
    }

    const updateData: any = {
      updatedAt: new Date()
    };

    if (name !== undefined) updateData.name = name;
    if (position !== undefined) updateData.position = position;
    if (company !== undefined) updateData.company = company;
    if (content !== undefined) updateData.content = content;
    if (rating !== undefined) updateData.rating = rating;
    if (order !== undefined) updateData.order = order;

    const item = await prisma.home_testimonial_items.update({
      where: { id },
      data: updateData
    });

    return NextResponse.json({ 
      success: true, 
      data: item 
    });
  } catch (error) {
    console.error('Error updating testimonial item:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// DELETE - Eliminar item de testimonio
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

    await prisma.home_testimonial_items.delete({
      where: { id }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Item de testimonio eliminado correctamente' 
    });
  } catch (error) {
    console.error('Error deleting testimonial item:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// PATCH - Reordenar items de testimonios
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { items } = body; // Array de { id, order }

    if (!Array.isArray(items)) {
      return NextResponse.json({ 
        success: false, 
        error: 'Items debe ser un array' 
      }, { status: 400 });
    }

    // Actualizar el orden de todos los items
    const updatePromises = items.map((item: { id: string; order: number }) =>
      prisma.home_testimonial_items.update({
        where: { id: item.id },
        data: { 
          order: item.order,
          updatedAt: new Date()
        }
      })
    );

    await Promise.all(updatePromises);

    return NextResponse.json({ 
      success: true, 
      message: 'Orden actualizado correctamente' 
    });
  } catch (error) {
    console.error('Error reordering testimonial items:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}
