import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

// GET - Obtener información de contacto
export async function GET() {
  try {
    const contactInfo = await prisma.contactInfo.findFirst({
      include: {
        contact_info_items: {
          orderBy: { order: 'asc' }
        }
      }
    });

    if (!contactInfo) {
      return NextResponse.json({ 
        success: false, 
        error: 'No se encontró información de contacto' 
      }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      data: contactInfo 
    });
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// POST - Crear información de contacto
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, items } = body;

    const contactInfo = await prisma.contactInfo.create({
      data: {
        title,
        description,
        contact_info_items: {
          create: items.map((item: any, index: number) => ({
            title: item.title,
            description: item.description,
            icon: item.icon,
            gradient: item.gradient,
            order: index
          }))
        }
      },
      include: {
        contact_info_items: true
      }
    });

    return NextResponse.json({ 
      success: true, 
      data: contactInfo 
    });
  } catch (error) {
    console.error('Error creating contact info:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// PUT - Actualizar información de contacto
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, title, description, items } = body;

    // Actualizar información principal
    const contactInfo = await prisma.contactInfo.update({
      where: { id },
      data: {
        title,
        description
      }
    });

    // Eliminar items existentes y crear nuevos
    await prisma.contact_info_items.deleteMany({
      where: { infoId: id }
    });

    if (items && items.length > 0) {
      await prisma.contact_info_items.createMany({
        data: items.map((item: any, index: number) => ({
          id: `${id}-item-${index}`,
          infoId: id,
          title: item.title,
          description: item.description,
          icon: item.icon,
          gradient: item.gradient,
          order: index
        }))
      });
    }

    // Retornar datos actualizados
    const updatedContactInfo = await prisma.contactInfo.findUnique({
      where: { id },
      include: {
        contact_info_items: {
          orderBy: { order: 'asc' }
        }
      }
    });

    return NextResponse.json({ 
      success: true, 
      data: updatedContactInfo 
    });
  } catch (error) {
    console.error('Error updating contact info:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}
