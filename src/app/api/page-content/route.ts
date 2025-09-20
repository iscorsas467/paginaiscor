import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Obtener contenido de página
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page');
    const section = searchParams.get('section');

    let whereClause: any = {};
    if (page) whereClause.page = page;
    if (section) whereClause.section = section;

    // Obtener diferentes tipos de contenido según la página
    let content = {};

    if (page === 'home') {
      // Hero section
      const hero = await prisma.home_hero.findFirst({
        include: {
          home_stats: true,
          home_cta_buttons: true
        }
      });

      // Services section
      const services = await prisma.home_services.findFirst({
        include: {
          home_service_items: {
            orderBy: { order: 'asc' }
          }
        }
      });

      // Testimonials section
      const testimonials = await prisma.home_testimonials.findFirst({
        include: {
          home_testimonial_items: {
            orderBy: { order: 'asc' }
          }
        }
      });

      content = { hero, services, testimonials };
    } else if (page === 'contact') {
      // Contact hero
      const hero = await prisma.contact_hero.findFirst({
        include: {
          contact_stats: true
        }
      });

      // Contact info
      const contactInfo = await prisma.contactInfo.findFirst({
        include: {
          contact_info_items: {
            orderBy: { order: 'asc' }
          }
        }
      });

      // FAQ
      const faq = await prisma.contact_faq.findFirst({
        include: {
          contact_faq_items: {
            orderBy: { order: 'asc' }
          }
        }
      });

      content = { hero, contactInfo, faq };
    } else if (page === 'team') {
      // Team hero
      const hero = await prisma.team_hero.findFirst({
        include: {
          team_stats: true
        }
      });

      // Departments
      const departments = await prisma.team_departments.findFirst({
        include: {
          team_department_items: {
            orderBy: { order: 'asc' }
          }
        }
      });

      // Leadership
      const leadership = await prisma.team_leadership.findFirst({
        include: {
          team_members: {
            orderBy: { order: 'asc' }
          }
        }
      });

      content = { hero, departments, leadership };
    }

    return NextResponse.json({ 
      success: true, 
      data: content 
    });
  } catch (error) {
    console.error('Error fetching page content:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// POST - Crear contenido de página
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { page, section, data } = body;

    let result;

    if (page === 'home' && section === 'hero') {
      result = await prisma.home_hero.create({
        data: {
          id: `hero-${Date.now()}`,
          badge: data.badge,
          title: data.title,
          subtitle: data.subtitle,
          updatedAt: new Date()
        }
      });
    } else if (page === 'home' && section === 'stats') {
      result = await prisma.home_stats.create({
        data: {
          id: `stats-${Date.now()}`,
          experience: data.experience,
          companies: data.companies,
          certifications: data.certifications,
          heroId: data.heroId,
          updatedAt: new Date()
        }
      });
    }

    return NextResponse.json({ 
      success: true, 
      data: result 
    });
  } catch (error) {
    console.error('Error creating page content:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// PUT - Actualizar contenido de página
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { page, section, id, data } = body;

    let result;

    if (page === 'home' && section === 'hero') {
      result = await prisma.home_hero.update({
        where: { id },
        data: {
          badge: data.badge,
          title: data.title,
          subtitle: data.subtitle
        }
      });
    } else if (page === 'home' && section === 'stats') {
      result = await prisma.home_stats.update({
        where: { id },
        data: {
          experience: data.experience,
          companies: data.companies,
          certifications: data.certifications
        }
      });
    }

    return NextResponse.json({ 
      success: true, 
      data: result 
    });
  } catch (error) {
    console.error('Error updating page content:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}
