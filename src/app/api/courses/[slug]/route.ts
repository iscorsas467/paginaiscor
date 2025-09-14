import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

// GET - Obtener curso por slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    // Buscar el curso por nombre (convertir slug a nombre)
    const courseName = slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const course = await prisma.home_service_items.findFirst({
      where: {
        name: {
          contains: courseName,
          mode: 'insensitive'
        }
      }
    });

    if (!course) {
      return NextResponse.json({ 
        success: false, 
        error: 'Curso no encontrado' 
      }, { status: 404 });
    }

    // Datos completos del curso (incluyendo información detallada)
    const courseSlug = course.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    const detailedCourse = {
      id: course.id,
      name: course.name,
      slug: courseSlug,
      image: `/api/placeholder/800/600`, // Placeholder por ahora
      description: course.description,
      detailedDescription: `${course.description} Este curso está diseñado para proporcionar conocimientos teóricos y prácticos avanzados en el área de ${course.name.toLowerCase()}.`,
      duration: '40 horas',
      certification: 'Válido 2 años',
      gradient: course.gradient,
      icon: course.icon,
      objectives: [
        'Comprender los fundamentos teóricos',
        'Desarrollar habilidades prácticas',
        'Aplicar conocimientos en situaciones reales',
        'Obtener certificación oficial',
        'Mantener estándares de seguridad'
      ],
      benefits: [
        'Mejora en la seguridad laboral',
        'Cumplimiento de normativas',
        'Certificación reconocida',
        'Actualización profesional',
        'Reducción de riesgos'
      ],
      requirements: [
        'Mayor de 18 años',
        'Documento de identidad vigente',
        'Certificado médico ocupacional',
        'Buen estado de salud física',
        'Compromiso con la seguridad'
      ],
      modules: [
        'Fundamentos teóricos',
        'Normativas y regulaciones',
        'Equipos y herramientas',
        'Procedimientos de trabajo',
        'Evaluación de riesgos',
        'Prácticas supervisadas',
        'Evaluación final'
      ],
      instructor: 'Instructor Certificado ISCOR',
      price: 'Consultar',
      location: 'Centro de Entrenamiento ISCOR',
      schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
      category: 'Seguridad Industrial',
      students: Math.floor(Math.random() * 1000) + 500,
      rating: 4.5 + Math.random() * 0.5,
      order: course.order
    };

    return NextResponse.json({ 
      success: true, 
      data: detailedCourse 
    });
  } catch (error) {
    console.error('Error fetching course:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// PUT - Actualizar curso por slug
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();
    
    // Buscar el curso por nombre
    const courseName = slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const course = await prisma.home_service_items.findFirst({
      where: {
        name: {
          contains: courseName,
          mode: 'insensitive'
        }
      }
    });

    if (!course) {
      return NextResponse.json({ 
        success: false, 
        error: 'Curso no encontrado' 
      }, { status: 404 });
    }

    const updatedCourse = await prisma.home_service_items.update({
      where: { id: course.id },
      data: {
        name: body.name || course.name,
        description: body.description || course.description,
        icon: body.icon || course.icon,
        gradient: body.gradient || course.gradient,
        order: body.order || course.order
      }
    });

    return NextResponse.json({ 
      success: true, 
      data: updatedCourse 
    });
  } catch (error) {
    console.error('Error updating course:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}
