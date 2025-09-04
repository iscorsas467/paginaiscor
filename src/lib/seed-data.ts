import { prisma } from './db'

export async function seedInitialData() {
  try {
    console.log('🌱 Starting to seed initial data...')

    // ===========================================
    // HOME CONTENT
    // ===========================================
    
    // Home Hero
    const homeHero = await prisma.homeHero.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        badge: 'Empresa líder en seguridad industrial',
        title: 'ISCOR - Seguridad Industrial',
        subtitle: 'Capacitación y certificación profesional en seguridad industrial'
      }
    })

    // Home Stats
    await prisma.homeStats.upsert({
      where: { heroId: homeHero.id },
      update: {},
      create: {
        heroId: homeHero.id,
        experience: '15+ años',
        companies: '500+',
        certifications: '10,000+'
      }
    })

    // Home CTA Buttons
    await prisma.homeCtaButtons.upsert({
      where: { heroId: homeHero.id },
      update: {},
      create: {
        heroId: homeHero.id,
        primaryText: 'Ver Cursos',
        primaryLink: '/portafolio',
        secondaryText: 'Contactar',
        secondaryLink: '/contacto'
      }
    })

    // Home Services
    const homeServices = await prisma.homeServices.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        title: 'Nuestros Servicios',
        description: 'Ofrecemos una amplia gama de servicios de seguridad industrial'
      }
    })

    await prisma.homeServiceItem.createMany({
      data: [
        {
          servicesId: homeServices.id,
          name: 'Capacitación',
          description: 'Cursos certificados',
          icon: '🎓',
          gradient: 'from-blue-500 to-cyan-500',
          order: 0
        },
        {
          servicesId: homeServices.id,
          name: 'Certificación',
          description: 'Documentos oficiales',
          icon: '📜',
          gradient: 'from-green-500 to-emerald-500',
          order: 1
        },
        {
          servicesId: homeServices.id,
          name: 'Consultoría',
          description: 'Asesoría especializada',
          icon: '💼',
          gradient: 'from-purple-500 to-pink-500',
          order: 2
        }
      ]
    })

    // Home Features
    const homeFeatures = await prisma.homeFeatures.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        title: '¿Por qué elegirnos?',
        description: 'Ventajas que nos distinguen en el mercado'
      }
    })

    await prisma.homeFeatureItem.createMany({
      data: [
        {
          featuresId: homeFeatures.id,
          title: 'Experiencia',
          description: 'Más de 15 años en el sector',
          icon: '⭐',
          color: 'text-yellow-500',
          order: 0
        },
        {
          featuresId: homeFeatures.id,
          title: 'Certificación',
          description: 'Aprobados por autoridades',
          icon: '✅',
          color: 'text-green-500',
          order: 1
        },
        {
          featuresId: homeFeatures.id,
          title: 'Flexibilidad',
          description: 'Adaptamos a tus necesidades',
          icon: '🔄',
          color: 'text-blue-500',
          order: 2
        }
      ]
    })

    // Home Testimonials
    const homeTestimonials = await prisma.homeTestimonials.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        title: 'Lo que dicen nuestros clientes',
        description: 'Testimonios de empresas que confían en nosotros'
      }
    })

    await prisma.homeTestimonialItem.createMany({
      data: [
        {
          testimonialsId: homeTestimonials.id,
          name: 'Carlos Rodríguez',
          position: 'Gerente de Seguridad',
          company: 'Industrias ABC',
          content: 'Excelente servicio y profesionales muy capacitados',
          rating: 5,
          order: 0
        },
        {
          testimonialsId: homeTestimonials.id,
          name: 'María González',
          position: 'Directora de RRHH',
          company: 'Corporación XYZ',
          content: 'La mejor inversión en seguridad para nuestra empresa',
          rating: 5,
          order: 1
        }
      ]
    })

    // ===========================================
    // COMPANY CONTENT
    // ===========================================

    // Company Hero
    await prisma.companyHero.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        title: 'Sobre ISCOR',
        subtitle: 'Líderes en seguridad industrial',
        description: 'Somos una empresa especializada en capacitación y certificación en seguridad industrial'
      }
    })

    // Company About
    const companyAbout = await prisma.companyAbout.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        title: 'Nuestra Historia',
        description: 'Más de 15 años de experiencia en el sector de seguridad industrial',
        experience: '15+ años'
      }
    })

    await prisma.companyService.createMany({
      data: [
        { aboutId: companyAbout.id, name: 'Capacitación', order: 0 },
        { aboutId: companyAbout.id, name: 'Certificación', order: 1 },
        { aboutId: companyAbout.id, name: 'Consultoría', order: 2 }
      ]
    })

    await prisma.companyCertification.createMany({
      data: [
        { aboutId: companyAbout.id, name: 'ISO 9001', order: 0 },
        { aboutId: companyAbout.id, name: 'OHSAS 18001', order: 1 },
        { aboutId: companyAbout.id, name: 'ISO 14001', order: 2 }
      ]
    })

    // Company Mission
    await prisma.companyMission.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        title: 'Nuestra Misión',
        description: 'Proporcionar soluciones integrales de seguridad industrial que protejan vidas y bienes'
      }
    })

    // Company Vision
    await prisma.companyVision.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        title: 'Nuestra Visión',
        description: 'Ser la empresa líder en Latinoamérica en capacitación y certificación de seguridad industrial'
      }
    })

    // Company Strengths
    const companyStrengths = await prisma.companyStrengths.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        title: 'Nuestras Fortalezas',
        description: 'Factores que nos distinguen en el mercado'
      }
    })

    await prisma.companyStrengthItem.createMany({
      data: [
        {
          strengthsId: companyStrengths.id,
          title: 'Experiencia',
          description: '15+ años en el sector',
          icon: '⭐',
          gradient: 'from-yellow-500 to-orange-500',
          order: 0
        },
        {
          strengthsId: companyStrengths.id,
          title: 'Certificación',
          description: 'Aprobados por autoridades',
          icon: '✅',
          gradient: 'from-green-500 to-emerald-500',
          order: 1
        },
        {
          strengthsId: companyStrengths.id,
          title: 'Innovación',
          description: 'Metodologías modernas',
          icon: '💡',
          gradient: 'from-blue-500 to-cyan-500',
          order: 2
        }
      ]
    })

    // Company Values
    const companyValues = await prisma.companyValues.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        title: 'Nuestros Valores',
        description: 'Principios que guían nuestro trabajo'
      }
    })

    await prisma.companyValueItem.createMany({
      data: [
        {
          valuesId: companyValues.id,
          title: 'Excelencia',
          description: 'Calidad en todo lo que hacemos',
          icon: '🏆',
          gradient: 'from-yellow-500 to-orange-500',
          order: 0
        },
        {
          valuesId: companyValues.id,
          title: 'Integridad',
          description: 'Honestidad y transparencia',
          icon: '🤝',
          gradient: 'from-blue-500 to-cyan-500',
          order: 1
        },
        {
          valuesId: companyValues.id,
          title: 'Compromiso',
          description: 'Dedicación total al cliente',
          icon: '❤️',
          gradient: 'from-red-500 to-pink-500',
          order: 2
        }
      ]
    })

    // ===========================================
    // TEAM CONTENT
    // ===========================================

    // Team Hero
    const teamHero = await prisma.teamHero.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        title: 'Nuestro Equipo',
        subtitle: 'Profesionales expertos',
        description: 'Conoce a los especialistas que hacen posible nuestra misión'
      }
    })

    await prisma.teamStats.upsert({
      where: { heroId: teamHero.id },
      update: {},
      create: {
        heroId: teamHero.id,
        members: '25+',
        departments: '5',
        experience: '10+ años'
      }
    })

    // Team Leadership
    const teamLeadership = await prisma.teamLeadership.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        title: 'Equipo de Liderazgo',
        description: 'Directivos con amplia experiencia en seguridad industrial'
      }
    })

    await prisma.teamMember.createMany({
      data: [
        {
          leadershipId: teamLeadership.id,
          name: 'Dr. Juan Pérez',
          position: 'Director General',
          bio: 'Especialista en seguridad industrial con 20 años de experiencia',
          phone: '+57 300 123 4567',
          email: 'juan.perez@iscor.com',
          linkedin: 'linkedin.com/in/juanperez',
          image: '/team/juan.jpg',
          gradient: 'from-blue-500 to-cyan-500',
          order: 0
        },
        {
          leadershipId: teamLeadership.id,
          name: 'Ing. Ana Martínez',
          position: 'Directora Técnica',
          bio: 'Ingeniera industrial especializada en normativas de seguridad',
          phone: '+57 300 123 4568',
          email: 'ana.martinez@iscor.com',
          linkedin: 'linkedin.com/in/anamartinez',
          image: '/team/ana.jpg',
          gradient: 'from-purple-500 to-pink-500',
          order: 1
        }
      ]
    })

    // Team Departments
    const teamDepartments = await prisma.teamDepartments.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        title: 'Departamentos',
        description: 'Estructura organizacional especializada'
      }
    })

    await prisma.teamDepartmentItem.createMany({
      data: [
        {
          departmentsId: teamDepartments.id,
          name: 'Capacitación',
          description: 'Desarrollo de programas formativos',
          members: 8,
          icon: '🎓',
          gradient: 'from-blue-500 to-cyan-500',
          order: 0
        },
        {
          departmentsId: teamDepartments.id,
          name: 'Certificación',
          description: 'Gestión de certificaciones oficiales',
          members: 5,
          icon: '📜',
          gradient: 'from-green-500 to-emerald-500',
          order: 1
        },
        {
          departmentsId: teamDepartments.id,
          name: 'Consultoría',
          description: 'Asesoría especializada',
          members: 6,
          icon: '💼',
          gradient: 'from-purple-500 to-pink-500',
          order: 2
        }
      ]
    })

    // Team Full Team
    const teamFullTeam = await prisma.teamFullTeam.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        title: 'Equipo Completo',
        description: 'Todos nuestros profesionales especializados'
      }
    })

    await prisma.teamMember.createMany({
      data: [
        {
          fullTeamId: teamFullTeam.id,
          name: 'Carlos Mendoza',
          position: 'Instructor Senior',
          bio: 'Especialista en trabajos en altura',
          phone: '+57 300 123 4569',
          email: 'carlos.mendoza@iscor.com',
          linkedin: 'linkedin.com/in/carlosmendoza',
          image: '/team/carlos.jpg',
          gradient: 'from-orange-500 to-red-500',
          order: 0
        },
        {
          fullTeamId: teamFullTeam.id,
          name: 'María González',
          position: 'Coordinadora de Certificaciones',
          bio: 'Experta en normativas internacionales',
          phone: '+57 300 123 4570',
          email: 'maria.gonzalez@iscor.com',
          linkedin: 'linkedin.com/in/mariagonzalez',
          image: '/team/maria.jpg',
          gradient: 'from-green-500 to-teal-500',
          order: 1
        }
      ]
    })

    // ===========================================
    // CONTACT CONTENT
    // ===========================================

    // Contact Hero
    const contactHero = await prisma.contactHero.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        title: 'Contáctanos',
        subtitle: 'Estamos aquí para ayudarte',
        description: 'Comunícate con nuestro equipo de especialistas'
      }
    })

    await prisma.contactStats.upsert({
      where: { heroId: contactHero.id },
      update: {},
      create: {
        heroId: contactHero.id,
        phone: '+57 300 123 4567',
        email: 'contacto@iscor.com',
        location: 'Bogotá, Colombia'
      }
    })

    // Contact Form
    const contactForm = await prisma.contactForm.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        title: 'Envíanos un mensaje',
        description: 'Completa el formulario y nos pondremos en contacto contigo'
      }
    })

    await prisma.contactFormField.createMany({
      data: [
        {
          formId: contactForm.id,
          name: 'nombre',
          type: 'text',
          placeholder: 'Tu nombre completo',
          required: true,
          order: 0
        },
        {
          formId: contactForm.id,
          name: 'email',
          type: 'email',
          placeholder: 'Tu correo electrónico',
          required: true,
          order: 1
        },
        {
          formId: contactForm.id,
          name: 'telefono',
          type: 'tel',
          placeholder: 'Tu número de teléfono',
          required: false,
          order: 2
        },
        {
          formId: contactForm.id,
          name: 'mensaje',
          type: 'textarea',
          placeholder: 'Tu mensaje',
          required: true,
          order: 3
        }
      ]
    })

    // Contact Info
    const contactInfo = await prisma.contactInfo.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        title: 'Información de Contacto',
        description: 'Diferentes formas de contactarnos'
      }
    })

    await prisma.contactInfoItem.createMany({
      data: [
        {
          infoId: contactInfo.id,
          title: 'Oficina Principal',
          description: 'Calle 123 #45-67, Bogotá',
          icon: '🏢',
          gradient: 'from-blue-500 to-cyan-500',
          order: 0
        },
        {
          infoId: contactInfo.id,
          title: 'Teléfono',
          description: '+57 300 123 4567',
          icon: '📞',
          gradient: 'from-green-500 to-emerald-500',
          order: 1
        },
        {
          infoId: contactInfo.id,
          title: 'Email',
          description: 'contacto@iscor.com',
          icon: '✉️',
          gradient: 'from-purple-500 to-pink-500',
          order: 2
        }
      ]
    })

    // Contact FAQ
    const contactFaq = await prisma.contactFaq.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        title: 'Preguntas Frecuentes',
        description: 'Resolvemos tus dudas más comunes'
      }
    })

    await prisma.contactFaqItem.createMany({
      data: [
        {
          faqId: contactFaq.id,
          question: '¿Qué certificaciones ofrecen?',
          answer: 'Ofrecemos certificaciones en trabajos en altura, espacios confinados, primeros auxilios y más.',
          order: 0
        },
        {
          faqId: contactFaq.id,
          question: '¿Cuánto duran los cursos?',
          answer: 'Los cursos varían entre 16 y 80 horas dependiendo del tipo de certificación.',
          order: 1
        },
        {
          faqId: contactFaq.id,
          question: '¿Los certificados son oficiales?',
          answer: 'Sí, todos nuestros certificados son oficiales y reconocidos por las autoridades competentes.',
          order: 2
        }
      ]
    })

    // ===========================================
    // GLOBAL CONTENT
    // ===========================================

    // Global Company
    await prisma.globalCompany.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        name: 'ISCOR',
        slogan: 'Seguridad Industrial Integral',
        logo: '/iscor_logo_colores.svg',
        favicon: '/favicon.ico'
      }
    })

    // Global Contact
    const globalContact = await prisma.globalContact.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        phone: '+57 300 123 4567',
        email: 'contacto@iscor.com',
        address: 'Calle 123 #45-67, Bogotá, Colombia',
        whatsapp: '+57 300 123 4567'
      }
    })

    await prisma.globalSocial.upsert({
      where: { contactId: globalContact.id },
      update: {},
      create: {
        contactId: globalContact.id,
        facebook: 'https://facebook.com/iscor',
        instagram: 'https://instagram.com/iscor',
        linkedin: 'https://linkedin.com/company/iscor',
        twitter: 'https://twitter.com/iscor'
      }
    })

    // Global SEO
    await prisma.globalSeo.upsert({
      where: { id: 'default' },
      update: {},
      create: {
        id: 'default',
        title: 'ISCOR - Seguridad Industrial | Capacitación y Certificación',
        description: 'Empresa líder en capacitación y certificación en seguridad industrial. Cursos certificados en trabajos en altura, espacios confinados, primeros auxilios y más.',
        keywords: 'seguridad industrial, capacitación, certificación, trabajos en altura, espacios confinados, primeros auxilios, montacargas, buceo industrial'
      }
    })

    console.log('✅ Initial data seeded successfully!')
  } catch (error) {
    console.error('❌ Error seeding initial data:', error)
    throw error
  }
}
