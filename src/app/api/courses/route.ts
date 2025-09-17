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
      orderBy: { order: 'asc' },
      select: {
        id: true,
        name: true,
        description: true,
        icon: true,
        gradient: true,
        order: true,
        createdAt: true,
        updatedAt: true,
        servicesId: true,
        detailedDescription: true,
        duration: true,
        certification: true,
        category: true,
        students: true,
        rating: true,
        price: true,
        instructor: true,
        location: true,
        schedule: true,
        image: true,
        objectives: true,
        benefits: true,
        requirements: true,
        modules: true,
        slug: true
      }
    });

    // Transformar los datos para que coincidan con la estructura esperada
    const transformedCourses = courses.map(course => {
      return {
        id: course.id,
        name: course.name,
        slug: course.slug || course.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        description: course.description,
        detailedDescription: course.detailedDescription,
        icon: course.icon,
        gradient: course.gradient,
        duration: course.duration,
        certification: course.certification,
        students: course.students,
        rating: course.rating,
        category: course.category,
        price: course.price,
        instructor: course.instructor,
        location: course.location,
        schedule: course.schedule,
        image: course.image,
        objectives: course.objectives,
        benefits: course.benefits,
        requirements: course.requirements,
        modules: course.modules,
        order: course.order,
        createdAt: course.createdAt,
        updatedAt: course.updatedAt,
        servicesId: course.servicesId,
        isActive: true
      };
    });

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
    const { 
      name, description, icon, gradient, category, duration, certification, price, image,
      detailedDescription, students, rating, instructor, location, schedule,
      objectives, benefits, requirements, modules, slug
    } = body;

    // Obtener el siguiente orden
    const lastCourse = await prisma.home_service_items.findFirst({
      orderBy: { order: 'desc' }
    });
    const nextOrder = (lastCourse?.order || 0) + 1;

    const courseData: any = {
      id: `course-${Date.now()}`,
      name,
      description,
      icon,
      gradient,
      order: nextOrder,
      servicesId: 'services-1', // ID del servicio principal
      updatedAt: new Date(),
      // Campos detallados
      detailedDescription,
      duration,
      certification,
      category,
      students,
      rating,
      price,
      instructor,
      location,
      schedule,
      image,
      objectives,
      benefits,
      requirements,
      modules,
      slug
    };

    const course = await prisma.home_service_items.create({
      data: courseData
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
    const { 
      id, name, description, icon, gradient, category, duration, certification, price, image, order,
      detailedDescription, students, rating, instructor, location, schedule,
      objectives, benefits, requirements, modules, slug
    } = body;

    const updateData: any = {
      name,
      description,
      icon,
      gradient,
      order: order || 0,
      updatedAt: new Date(),
      // Campos detallados
      detailedDescription,
      duration,
      certification,
      category,
      students,
      rating,
      price,
      instructor,
      location,
      schedule,
      image,
      objectives,
      benefits,
      requirements,
      modules,
      slug
    };

    const course = await prisma.home_service_items.update({
      where: { id },
      data: updateData
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
