import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

// GET - Obtener contenido de la página inicial
export async function GET() {
  try {
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

    // Datos por defecto si no existen en BD
    const defaultHero = {
      id: 'default-hero',
      badge: 'ISCOR - Líderes en Seguridad Industrial',
      title: 'Capacitación Especializada en Seguridad Industrial',
      subtitle: 'Más de 15 años formando profesionales en seguridad, salud ocupacional y medio ambiente con los más altos estándares de calidad.',
      home_stats: [{
        id: 'default-stats',
        experience: '15+',
        companies: '500+',
        certifications: '10,000+'
      }],
      home_cta_buttons: [{
        id: 'default-cta-1',
        text: 'Ver Cursos',
        url: '/servicios',
        style: 'primary'
      }, {
        id: 'default-cta-2',
        text: 'Contactar',
        url: '/contacto',
        style: 'secondary'
      }]
    };

    const defaultServices = {
      id: 'default-services',
      title: 'Nuestros Servicios',
      subtitle: 'Ofrecemos una amplia gama de servicios especializados en seguridad industrial',
      home_service_items: [
        {
          id: 'service-1',
          name: 'Capacitación Especializada',
          description: 'Cursos certificados en seguridad industrial, salud ocupacional y medio ambiente',
          icon: '🎓',
          order: 1
        },
        {
          id: 'service-2',
          name: 'Consultoría en Seguridad',
          description: 'Asesoría profesional para implementar sistemas de gestión de seguridad',
          icon: '🛡️',
          order: 2
        },
        {
          id: 'service-3',
          name: 'Certificaciones',
          description: 'Procesos de certificación y auditorías para cumplir normativas',
          icon: '📜',
          order: 3
        }
      ]
    };

    const defaultTestimonials = {
      id: 'default-testimonials',
      title: 'Lo que dicen nuestros clientes',
      subtitle: 'Testimonios de empresas que confían en nuestros servicios',
      home_testimonial_items: [
        {
          id: 'testimonial-1',
          name: 'Carlos Rodríguez',
          company: 'Petrobras Colombia',
          position: 'Gerente de Seguridad',
          content: 'ISCOR ha sido fundamental para el desarrollo de nuestros programas de seguridad. Su experiencia y profesionalismo son excepcionales.',
          rating: 5,
          order: 1
        },
        {
          id: 'testimonial-2',
          name: 'María González',
          company: 'Ecopetrol',
          position: 'Coordinadora HSE',
          content: 'Los cursos de ISCOR son de la más alta calidad. Nuestro personal ha mejorado significativamente sus competencias en seguridad.',
          rating: 5,
          order: 2
        }
      ]
    };

    const content = {
      hero: hero || defaultHero,
      services: services || defaultServices,
      testimonials: testimonials || defaultTestimonials
    };

    return NextResponse.json({ 
      success: true, 
      data: content 
    });
  } catch (error) {
    console.error('Error fetching home content:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// POST - Crear/actualizar contenido de la página inicial
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { section, data } = body;

    let result;

    if (section === 'hero') {
      // Crear o actualizar hero
      result = await prisma.home_hero.upsert({
        where: { id: data.id || 'default-hero' },
        update: {
          badge: data.badge,
          title: data.title,
          subtitle: data.subtitle,
          updatedAt: new Date()
        },
        create: {
          id: data.id || `hero-${Date.now()}`,
          badge: data.badge,
          title: data.title,
          subtitle: data.subtitle,
          updatedAt: new Date()
        }
      });
    } else if (section === 'stats') {
      // Crear o actualizar estadísticas
      result = await prisma.home_stats.upsert({
        where: { id: data.id || 'default-stats' },
        update: {
          experience: data.experience,
          companies: data.companies,
          certifications: data.certifications,
          heroId: data.heroId,
          updatedAt: new Date()
        },
        create: {
          id: data.id || `stats-${Date.now()}`,
          experience: data.experience,
          companies: data.companies,
          certifications: data.certifications,
          heroId: data.heroId || 'default-hero',
          updatedAt: new Date()
        }
      });
    }

    return NextResponse.json({ 
      success: true, 
      data: result 
    });
  } catch (error) {
    console.error('Error creating/updating home content:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}
