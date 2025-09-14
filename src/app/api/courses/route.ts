import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

// GET - Obtener todos los cursos
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const isActive = searchParams.get('isActive');

    let whereClause: any = {};
    if (category) whereClause.category = category;
    if (isActive !== null) whereClause.isActive = isActive === 'true';

    const courses = await prisma.home_service_items.findMany({
      where: whereClause,
      orderBy: { order: 'asc' }
    });

    // Transformar los datos para que coincidan con la estructura esperada
    const transformedCourses = courses.map(course => ({
      id: course.id,
      name: course.name,
      slug: course.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      description: course.description,
      icon: course.icon,
      gradient: course.gradient,
      duration: '40 horas', // Valor por defecto
      certification: 'Válido 2 años', // Valor por defecto
      students: Math.floor(Math.random() * 1000) + 500, // Valor aleatorio
      rating: Math.round((4.5 + Math.random() * 0.5) * 10) / 10, // Valor aleatorio entre 4.5 y 5 con un decimal
      category: 'Seguridad Industrial', // Valor por defecto
      order: course.order,
      isActive: true
    }));

    return NextResponse.json({ 
      success: true, 
      data: transformedCourses 
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// POST - Crear nuevo curso
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description, icon, gradient, category, duration, certification, price, image } = body;

    // Obtener el siguiente orden
    const lastCourse = await prisma.home_service_items.findFirst({
      orderBy: { order: 'desc' }
    });
    const nextOrder = (lastCourse?.order || 0) + 1;

    const course = await prisma.home_service_items.create({
      data: {
        id: `course-${Date.now()}`,
        name,
        description,
        icon,
        gradient,
        order: nextOrder
      }
    });

    return NextResponse.json({ 
      success: true, 
      data: course 
    });
  } catch (error) {
    console.error('Error creating course:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// PUT - Actualizar curso
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, name, description, icon, gradient, category, duration, certification, price, image, order } = body;

    const course = await prisma.home_service_items.update({
      where: { id },
      data: {
        name,
        description,
        icon,
        gradient,
        order: order || 0
      }
    });

    return NextResponse.json({ 
      success: true, 
      data: course 
    });
  } catch (error) {
    console.error('Error updating course:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// DELETE - Eliminar curso
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ 
        success: false, 
        error: 'ID del curso es requerido' 
      }, { status: 400 });
    }

    await prisma.home_service_items.delete({
      where: { id }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Curso eliminado exitosamente' 
    });
  } catch (error) {
    console.error('Error deleting course:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}
