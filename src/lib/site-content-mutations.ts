import { prisma } from './db'
import { 
  HomeContent, 
  CompanyContent, 
  TeamContent, 
  ContactContent, 
  GlobalContent 
} from './site-content'

// ===========================================
// FUNCIONES PARA GUARDAR DATOS
// ===========================================

export async function saveHomeContent(content: any, subsection?: string) {
  // Validar que content existe
  if (!content) {
    throw new Error('Content is required');
  }

  // Si se especifica una subsección, solo guardar esa parte
  if (subsection) {
    switch (subsection) {
      case 'hero':
        return await saveHomeHero(content);
      case 'services':
        return await saveHomeServices(content);
      case 'features':
        return await saveHomeFeatures(content);
      case 'testimonials':
        return await saveHomeTestimonials(content);
      case 'cta':
        return await saveHomeCTA(content);
      default:
        throw new Error(`Unknown subsection: ${subsection}`);
    }
  }

  // Si no se especifica subsección, guardar todo el contenido
  if (!subsection && !content.hero) {
    throw new Error('Home content must include hero section');
  }

  // Guardar Hero
  const hero = await prisma.homeHero.upsert({
    where: { id: 'default' },
    update: {
      badge: content.hero.badge,
      title: content.hero.title,
      subtitle: content.hero.subtitle
    },
    create: {
      id: 'default',
      badge: content.hero.badge,
      title: content.hero.title,
      subtitle: content.hero.subtitle
    }
  });

  // Guardar Stats
  if (content.hero.stats) {
    await prisma.homeStats.upsert({
      where: { heroId: hero.id },
      update: {
        experience: content.hero.stats.experience,
        companies: content.hero.stats.companies,
        certifications: content.hero.stats.certifications
      },
      create: {
        heroId: hero.id,
        experience: content.hero.stats.experience,
        companies: content.hero.stats.companies,
        certifications: content.hero.stats.certifications
      }
    });
  }

  // Guardar CTA Buttons
  if (content.hero.ctaButtons) {
    await prisma.homeCtaButtons.upsert({
      where: { heroId: hero.id },
      update: {
        primaryText: content.hero.ctaButtons.primary.text,
        primaryLink: content.hero.ctaButtons.primary.link,
        secondaryText: content.hero.ctaButtons.secondary.text,
        secondaryLink: content.hero.ctaButtons.secondary.link
      },
      create: {
        heroId: hero.id,
        primaryText: content.hero.ctaButtons.primary.text,
        primaryLink: content.hero.ctaButtons.primary.link,
        secondaryText: content.hero.ctaButtons.secondary.text,
        secondaryLink: content.hero.ctaButtons.secondary.link
      }
    });
  }

  // Guardar Services
  if (content.services) {
    const services = await prisma.homeServices.upsert({
      where: { id: 'default' },
      update: {
        title: content.services.title,
        description: content.services.description
      },
      create: {
        id: 'default',
        title: content.services.title,
        description: content.services.description
      }
    });

    // Eliminar items existentes
    await prisma.homeServiceItem.deleteMany({
      where: { servicesId: services.id }
    });

    // Crear nuevos items
    if (content.services.items.length > 0) {
      await prisma.homeServiceItem.createMany({
        data: content.services.items.map((item: any, index: number) => ({
          servicesId: services.id,
          name: item.name,
          description: item.description,
          icon: item.icon,
          gradient: item.gradient,
          order: index
        }))
      });
    }
  }

  // Guardar Features
  if (content.features) {
    const features = await prisma.homeFeatures.upsert({
      where: { id: 'default' },
      update: {
        title: content.features.title,
        description: content.features.description
      },
      create: {
        id: 'default',
        title: content.features.title,
        description: content.features.description
      }
    });

    // Eliminar items existentes
    await prisma.homeFeatureItem.deleteMany({
      where: { featuresId: features.id }
    });

    // Crear nuevos items
    if (content.features.items.length > 0) {
      await prisma.homeFeatureItem.createMany({
        data: content.features.items.map((item: any, index: number) => ({
          featuresId: features.id,
          title: item.title,
          description: item.description,
          icon: item.icon,
          color: item.color,
          order: index
        }))
      });
    }
  }

  // Guardar Testimonials
  if (content.testimonials) {
    const testimonials = await prisma.homeTestimonials.upsert({
      where: { id: 'default' },
      update: {
        title: content.testimonials.title,
        description: content.testimonials.description
      },
      create: {
        id: 'default',
        title: content.testimonials.title,
        description: content.testimonials.description
      }
    });

    // Eliminar items existentes
    await prisma.homeTestimonialItem.deleteMany({
      where: { testimonialsId: testimonials.id }
    });

    // Crear nuevos items
    if (content.testimonials.items.length > 0) {
      await prisma.homeTestimonialItem.createMany({
        data: content.testimonials.items.map((item: any, index: number) => ({
          testimonialsId: testimonials.id,
          name: item.name,
          position: item.position,
          company: item.company,
          content: item.content,
          rating: item.rating,
          order: index
        }))
      });
    }
  }
}

export async function saveCompanyContent(content: any, subsection?: string) {
  // Validar que content existe
  if (!content) {
    throw new Error('Content is required');
  }

  // Si se especifica una subsección, solo guardar esa parte
  if (subsection) {
    // Por ahora, solo manejar el caso completo
    // TODO: Implementar subsecciones específicas para company
  }

  // Si no se especifica subsección, guardar todo el contenido
  if (!subsection && !content.hero) {
    throw new Error('Company content must include hero section');
  }
  // Guardar Hero
  await prisma.companyHero.upsert({
    where: { id: 'default' },
    update: {
      title: content.hero.title,
      subtitle: content.hero.subtitle,
      description: content.hero.description
    },
    create: {
      id: 'default',
      title: content.hero.title,
      subtitle: content.hero.subtitle,
      description: content.hero.description
    }
  });

  // Guardar About
  if (content.about) {
    const about = await prisma.companyAbout.upsert({
      where: { id: 'default' },
      update: {
        title: content.about.title,
        description: content.about.description,
        experience: content.about.experience
      },
      create: {
        id: 'default',
        title: content.about.title,
        description: content.about.description,
        experience: content.about.experience
      }
    });

    // Eliminar servicios y certificaciones existentes
    await prisma.companyService.deleteMany({
      where: { aboutId: about.id }
    });
    await prisma.companyCertification.deleteMany({
      where: { aboutId: about.id }
    });

    // Crear nuevos servicios
    if (content.about.services.length > 0) {
      await prisma.companyService.createMany({
        data: content.about.services.map((service: any, index: number) => ({
          aboutId: about.id,
          name: service,
          order: index
        }))
      });
    }

    // Crear nuevas certificaciones
    if (content.about.certifications.length > 0) {
      await prisma.companyCertification.createMany({
        data: content.about.certifications.map((cert: any, index: number) => ({
          aboutId: about.id,
          name: cert,
          order: index
        }))
      });
    }
  }

  // Guardar Mission
  if (content.mission) {
    await prisma.companyMission.upsert({
      where: { id: 'default' },
      update: {
        title: content.mission.title,
        description: content.mission.description
      },
      create: {
        id: 'default',
        title: content.mission.title,
        description: content.mission.description
      }
    });
  }

  // Guardar Vision
  if (content.vision) {
    await prisma.companyVision.upsert({
      where: { id: 'default' },
      update: {
        title: content.vision.title,
        description: content.vision.description
      },
      create: {
        id: 'default',
        title: content.vision.title,
        description: content.vision.description
      }
    });
  }

  // Guardar Strengths
  if (content.strengths) {
    const strengths = await prisma.companyStrengths.upsert({
      where: { id: 'default' },
      update: {
        title: content.strengths.title,
        description: content.strengths.description
      },
      create: {
        id: 'default',
        title: content.strengths.title,
        description: content.strengths.description
      }
    });

    // Eliminar items existentes
    await prisma.companyStrengthItem.deleteMany({
      where: { strengthsId: strengths.id }
    });

    // Crear nuevos items
    if (content.strengths.items.length > 0) {
      await prisma.companyStrengthItem.createMany({
        data: content.strengths.items.map((item: any, index: number) => ({
          strengthsId: strengths.id,
          title: item.title,
          description: item.description,
          icon: item.icon,
          gradient: item.gradient || 'from-orange-500 to-red-600',
          order: index
        }))
      });
    }
  }

  // Guardar Values
  if (content.values) {
    const values = await prisma.companyValues.upsert({
      where: { id: 'default' },
      update: {
        title: content.values.title,
        description: content.values.description
      },
      create: {
        id: 'default',
        title: content.values.title,
        description: content.values.description
      }
    });

    // Eliminar items existentes
    await prisma.companyValueItem.deleteMany({
      where: { valuesId: values.id }
    });

    // Crear nuevos items
    if (content.values.items.length > 0) {
      await prisma.companyValueItem.createMany({
        data: content.values.items.map((item: any, index: number) => ({
          valuesId: values.id,
          title: item.title,
          description: item.description,
          icon: item.icon,
          gradient: item.gradient || 'from-green-500 to-teal-600',
          order: index
        }))
      });
    }
  }
}

export async function saveTeamContent(content: any, subsection?: string) {
  // Validar que content existe
  if (!content) {
    throw new Error('Content is required');
  }

  // Si se especifica una subsección, solo guardar esa parte
  if (subsection) {
    // Por ahora, solo manejar el caso completo
    // TODO: Implementar subsecciones específicas para team
  }

  // Si no se especifica subsección, guardar todo el contenido
  if (!subsection && !content.hero) {
    throw new Error('Team content must include hero section');
  }
  // Guardar Hero
  const hero = await prisma.teamHero.upsert({
    where: { id: 'default' },
    update: {
      title: content.hero.title,
      subtitle: content.hero.subtitle,
      description: content.hero.description
    },
    create: {
      id: 'default',
      title: content.hero.title,
      subtitle: content.hero.subtitle,
      description: content.hero.description
    }
  });

  // Guardar Stats
  if (content.hero.stats) {
    await prisma.teamStats.upsert({
      where: { heroId: hero.id },
      update: {
        members: content.hero.stats.members,
        departments: content.hero.stats.departments,
        experience: content.hero.stats.experience
      },
      create: {
        heroId: hero.id,
        members: content.hero.stats.members,
        departments: content.hero.stats.departments,
        experience: content.hero.stats.experience
      }
    });
  }

  // Guardar Leadership
  if (content.leadership) {
    const leadership = await prisma.teamLeadership.upsert({
      where: { id: 'default' },
      update: {
        title: content.leadership.title,
        description: content.leadership.description
      },
      create: {
        id: 'default',
        title: content.leadership.title,
        description: content.leadership.description
      }
    });

    // Eliminar miembros existentes
    await prisma.teamMember.deleteMany({
      where: { leadershipId: leadership.id }
    });

    // Crear nuevos miembros
    if (content.leadership.members.length > 0) {
      await prisma.teamMember.createMany({
        data: content.leadership.members.map((member: any, index: number) => ({
          leadershipId: leadership.id,
          name: member.name,
          position: member.position,
          bio: member.bio,
          phone: member.phone,
          email: member.email,
          linkedin: member.linkedin,
          image: member.image,
          gradient: member.gradient || 'from-purple-500 to-pink-600',
          order: index
        }))
      });
    }
  }

  // Guardar Departments
  if (content.departments) {
    const departments = await prisma.teamDepartments.upsert({
      where: { id: 'default' },
      update: {
        title: content.departments.title,
        description: content.departments.description
      },
      create: {
        id: 'default',
        title: content.departments.title,
        description: content.departments.description
      }
    });

    // Eliminar items existentes
    await prisma.teamDepartmentItem.deleteMany({
      where: { departmentsId: departments.id }
    });

    // Crear nuevos items
    if (content.departments.items.length > 0) {
      await prisma.teamDepartmentItem.createMany({
        data: content.departments.items.map((item: any, index: number) => ({
          departmentsId: departments.id,
          name: item.name,
          description: item.description,
          members: item.members,
          icon: item.icon,
          gradient: item.gradient || 'from-indigo-500 to-blue-600',
          order: index
        }))
      });
    }
  }

  // Guardar Full Team
  if (content.fullTeam) {
    const fullTeam = await prisma.teamFullTeam.upsert({
      where: { id: 'default' },
      update: {
        title: content.fullTeam.title,
        description: content.fullTeam.description
      },
      create: {
        id: 'default',
        title: content.fullTeam.title,
        description: content.fullTeam.description
      }
    });

    // Eliminar miembros existentes
    await prisma.teamMember.deleteMany({
      where: { fullTeamId: fullTeam.id }
    });

    // Crear nuevos miembros
    if (content.fullTeam.members.length > 0) {
      await prisma.teamMember.createMany({
        data: content.fullTeam.members.map((member: any, index: number) => ({
          fullTeamId: fullTeam.id,
          name: member.name,
          position: member.position,
          bio: member.bio,
          phone: member.phone,
          email: member.email,
          linkedin: member.linkedin,
          image: member.image,
          gradient: member.gradient || 'from-purple-500 to-pink-600',
          order: index
        }))
      });
    }
  }
}

export async function saveContactContent(content: any, subsection?: string) {
  // Validar que content existe
  if (!content) {
    throw new Error('Content is required');
  }

  // Si se especifica una subsección, solo guardar esa parte
  if (subsection) {
    switch (subsection) {
      case 'hero':
        return await saveContactHero(content);
      case 'form':
        return await saveContactForm(content);
      case 'info':
        return await saveContactInfo(content);
      case 'faq':
        return await saveContactFAQ(content);
      default:
        throw new Error(`Unknown subsection: ${subsection}`);
    }
  }

  // Si no se especifica subsección, guardar todo el contenido
  // Solo verificar hero si no se está guardando una subsección específica
  if (!subsection && !content.hero) {
    throw new Error('Contact content must include hero section');
  }

  // Guardar Hero
  const hero = await prisma.contactHero.upsert({
    where: { id: 'default' },
    update: {
      title: content.hero.title,
      subtitle: content.hero.subtitle,
      description: content.hero.description
    },
    create: {
      id: 'default',
      title: content.hero.title,
      subtitle: content.hero.subtitle,
      description: content.hero.description
    }
  });

  // Guardar Stats
  if (content.hero.stats) {
    await prisma.contactStats.upsert({
      where: { heroId: hero.id },
      update: {
        phone: content.hero.stats.phone,
        email: content.hero.stats.email,
        location: content.hero.stats.location
      },
      create: {
        heroId: hero.id,
        phone: content.hero.stats.phone,
        email: content.hero.stats.email,
        location: content.hero.stats.location
      }
    });
  }

  // Guardar Form
  if (content.form) {
    const form = await prisma.contactForm.upsert({
      where: { id: 'default' },
      update: {
        title: content.form.title,
        description: content.form.description
      },
      create: {
        id: 'default',
        title: content.form.title,
        description: content.form.description
      }
    });

    // Eliminar campos existentes
    await prisma.contactFormField.deleteMany({
      where: { formId: form.id }
    });

    // Crear nuevos campos
    if (content.form.fields.length > 0) {
      await prisma.contactFormField.createMany({
        data: content.form.fields.map((field: any, index: number) => ({
          formId: form.id,
          name: field.name,
          type: field.type,
          placeholder: field.placeholder,
          required: field.required,
          order: index
        }))
      });
    }
  }

  // Guardar Info
  if (content.info) {
    const info = await prisma.contactInfo.upsert({
      where: { id: 'default' },
      update: {
        title: content.info.title,
        description: content.info.description
      },
      create: {
        id: 'default',
        title: content.info.title,
        description: content.info.description
      }
    });

    // Eliminar items existentes
    await prisma.contactInfoItem.deleteMany({
      where: { infoId: info.id }
    });

    // Crear nuevos items
    if (content.info.items.length > 0) {
      await prisma.contactInfoItem.createMany({
        data: content.info.items.map((item: any, index: number) => ({
          infoId: info.id,
          title: item.title,
          description: item.description,
          icon: item.icon,
          gradient: item.gradient,
          order: index
        }))
      });
    }
  }

  // Guardar FAQ
  if (content.faq) {
    const faq = await prisma.contactFaq.upsert({
      where: { id: 'default' },
      update: {
        title: content.faq.title,
        description: content.faq.description
      },
      create: {
        id: 'default',
        title: content.faq.title,
        description: content.faq.description
      }
    });

    // Eliminar items existentes
    await prisma.contactFaqItem.deleteMany({
      where: { faqId: faq.id }
    });

    // Crear nuevos items
    if (content.faq.items.length > 0) {
      await prisma.contactFaqItem.createMany({
        data: content.faq.items.map((item: any, index: number) => ({
          faqId: faq.id,
          question: item.question,
          answer: item.answer,
          order: index
        }))
      });
    }
  }
}

export async function saveGlobalContent(content: any, subsection?: string) {
  // Validar que content existe
  if (!content) {
    throw new Error('Content is required');
  }

  // Si se especifica una subsección, solo guardar esa parte
  if (subsection) {
    // Por ahora, solo manejar el caso completo
    // TODO: Implementar subsecciones específicas para global
  }

  // Si no se especifica subsección, guardar todo el contenido
  if (!subsection && !content.company) {
    throw new Error('Global content must include company section');
  }
  // Guardar Company
  if (content.company) {
    await prisma.globalCompany.upsert({
      where: { id: 'default' },
      update: {
        name: content.company.name,
        slogan: content.company.slogan,
        logo: content.company.logo,
        favicon: content.company.favicon
      },
      create: {
        id: 'default',
        name: content.company.name,
        slogan: content.company.slogan,
        logo: content.company.logo,
        favicon: content.company.favicon
      }
    });
  }

  // Guardar Contact
  if (content.contact) {
    const contact = await prisma.globalContact.upsert({
      where: { id: 'default' },
      update: {
        phone: content.contact.phone,
        email: content.contact.email,
        address: content.contact.address,
        whatsapp: content.contact.whatsapp
      },
      create: {
        id: 'default',
        phone: content.contact.phone,
        email: content.contact.email,
        address: content.contact.address,
        whatsapp: content.contact.whatsapp
      }
    });

    // Guardar Social
    if (content.contact.social) {
      await prisma.globalSocial.upsert({
        where: { contactId: contact.id },
        update: {
          facebook: content.contact.social.facebook,
          instagram: content.contact.social.instagram,
          linkedin: content.contact.social.linkedin,
          twitter: content.contact.social.twitter
        },
        create: {
          contactId: contact.id,
          facebook: content.contact.social.facebook,
          instagram: content.contact.social.instagram,
          linkedin: content.contact.social.linkedin,
          twitter: content.contact.social.twitter
        }
      });
    }
  }

  // Guardar SEO
  if (content.seo) {
    await prisma.globalSeo.upsert({
      where: { id: 'default' },
      update: {
        title: content.seo.title,
        description: content.seo.description,
        keywords: content.seo.keywords
      },
      create: {
        id: 'default',
        title: content.seo.title,
        description: content.seo.description,
        keywords: content.seo.keywords
      }
    });
  }
}

// Funciones auxiliares para subsecciones de contacto
async function saveContactHero(content: any) {
  const hero = await prisma.contactHero.upsert({
    where: { id: 'default' },
    update: {
      title: content.title,
      subtitle: content.subtitle,
      description: content.description
    },
    create: {
      id: 'default',
      title: content.title,
      subtitle: content.subtitle,
      description: content.description
    }
  });

  // Guardar Stats si existen
  if (content.stats) {
    await prisma.contactStats.upsert({
      where: { heroId: hero.id },
      update: {
        phone: content.stats.phone,
        email: content.stats.email,
        location: content.stats.location
      },
      create: {
        heroId: hero.id,
        phone: content.stats.phone,
        email: content.stats.email,
        location: content.stats.location
      }
    });
  }

  return hero;
}

async function saveContactForm(content: any) {
  const form = await prisma.contactForm.upsert({
    where: { id: 'default' },
    update: {
      title: content.title,
      description: content.description
    },
    create: {
      id: 'default',
      title: content.title,
      description: content.description
    }
  });

  // Guardar campos del formulario
  if (content.fields && Array.isArray(content.fields)) {
    // Eliminar campos existentes
    await prisma.contactFormField.deleteMany({
      where: { formId: form.id }
    });

    // Crear nuevos campos
    await prisma.contactFormField.createMany({
      data: content.fields.map((field: any, index: number) => ({
        formId: form.id,
        name: field.name,
        type: field.type,
        placeholder: field.placeholder,
        required: field.required || false,
        order: index
      }))
    });
  }

  return form;
}

async function saveContactInfo(content: any) {
  const info = await prisma.contactInfo.upsert({
    where: { id: 'default' },
    update: {
      title: content.title,
      description: content.description
    },
    create: {
      id: 'default',
      title: content.title,
      description: content.description
    }
  });

  // Guardar items de información
  if (content.items && Array.isArray(content.items)) {
    // Eliminar items existentes
    await prisma.contactInfoItem.deleteMany({
      where: { infoId: info.id }
    });

    // Crear nuevos items
    await prisma.contactInfoItem.createMany({
      data: content.items.map((item: any, index: number) => ({
        infoId: info.id,
        title: item.title,
        description: item.description,
        icon: item.icon,
        gradient: item.gradient || 'from-blue-500 to-purple-600', // Valor por defecto
        order: index
      }))
    });
  }

  return info;
}

async function saveContactFAQ(content: any) {
  const faq = await prisma.contactFaq.upsert({
    where: { id: 'default' },
    update: {
      title: content.title,
      description: content.description
    },
    create: {
      id: 'default',
      title: content.title,
      description: content.description
    }
  });

  // Guardar items de FAQ
  if (content.items && Array.isArray(content.items)) {
    // Eliminar items existentes
    await prisma.contactFaqItem.deleteMany({
      where: { faqId: faq.id }
    });

    // Crear nuevos items
    await prisma.contactFaqItem.createMany({
      data: content.items.map((item: any, index: number) => ({
        faqId: faq.id,
        question: item.question,
        answer: item.answer,
        order: index
      }))
    });
  }

  return faq;
}

// Funciones auxiliares para subsecciones de home
async function saveHomeHero(content: any) {
  const hero = await prisma.homeHero.upsert({
    where: { id: 'default' },
    update: {
      badge: content.badge,
      title: content.title,
      subtitle: content.subtitle
    },
    create: {
      id: 'default',
      badge: content.badge,
      title: content.title,
      subtitle: content.subtitle
    }
  });

  // Guardar Stats si existen
  if (content.stats) {
    await prisma.homeStats.upsert({
      where: { heroId: hero.id },
      update: {
        experience: content.stats.experience,
        companies: content.stats.companies,
        certifications: content.stats.certifications
      },
      create: {
        heroId: hero.id,
        experience: content.stats.experience,
        companies: content.stats.companies,
        certifications: content.stats.certifications
      }
    });
  }

  return hero;
}

async function saveHomeServices(content: any) {
  const services = await prisma.homeServices.upsert({
    where: { id: 'default' },
    update: {
      title: content.title,
      description: content.description
    },
    create: {
      id: 'default',
      title: content.title,
      description: content.description
    }
  });

  // Guardar items de servicios
  if (content.items && Array.isArray(content.items)) {
    // Eliminar items existentes
    await prisma.homeServiceItem.deleteMany({
      where: { servicesId: services.id }
    });

    // Crear nuevos items
    await prisma.homeServiceItem.createMany({
      data: content.items.map((item: any, index: number) => ({
        servicesId: services.id,
        name: item.name,
        description: item.description,
        icon: item.icon || '📋',
        gradient: item.gradient || 'from-blue-500 to-purple-600',
        order: index
      }))
    });
  }

  return services;
}

async function saveHomeFeatures(content: any) {
  const features = await prisma.homeFeatures.upsert({
    where: { id: 'default' },
    update: {
      title: content.title,
      description: content.description
    },
    create: {
      id: 'default',
      title: content.title,
      description: content.description
    }
  });

  // Guardar items de características
  if (content.items && Array.isArray(content.items)) {
    // Eliminar items existentes
    await prisma.homeFeatureItem.deleteMany({
      where: { featuresId: features.id }
    });

    // Crear nuevos items
    await prisma.homeFeatureItem.createMany({
      data: content.items.map((item: any, index: number) => ({
        featuresId: features.id,
        title: item.title,
        description: item.description,
        icon: item.icon,
        gradient: item.gradient || 'from-green-500 to-blue-600',
        order: index
      }))
    });
  }

  return features;
}

async function saveHomeTestimonials(content: any) {
  const testimonials = await prisma.homeTestimonials.upsert({
    where: { id: 'default' },
    update: {
      title: content.title,
      description: content.description
    },
    create: {
      id: 'default',
      title: content.title,
      description: content.description
    }
  });

  // Guardar items de testimonios
  if (content.items && Array.isArray(content.items)) {
    // Eliminar items existentes
    await prisma.homeTestimonialItem.deleteMany({
      where: { testimonialsId: testimonials.id }
    });

    // Crear nuevos items
    await prisma.homeTestimonialItem.createMany({
      data: content.items.map((item: any, index: number) => ({
        testimonialsId: testimonials.id,
        name: item.name,
        company: item.company,
        content: item.content,
        rating: item.rating,
        order: index
      }))
    });
  }

  return testimonials;
}

async function saveHomeCTA(content: any) {
  // Primero obtener el hero para tener el heroId
  const hero = await prisma.homeHero.findFirst({
    where: { id: 'default' }
  });
  
  if (!hero) {
    throw new Error('HomeHero not found');
  }

  const cta = await prisma.homeCtaButtons.upsert({
    where: { heroId: hero.id },
    update: {
      primaryText: content.primaryButtonText || content.primaryText,
      primaryLink: content.primaryButtonLink || content.primaryLink,
      secondaryText: content.secondaryButtonText || content.secondaryText,
      secondaryLink: content.secondaryButtonLink || content.secondaryLink
    },
    create: {
      primaryText: content.primaryButtonText || content.primaryText,
      primaryLink: content.primaryButtonLink || content.primaryLink,
      secondaryText: content.secondaryButtonText || content.secondaryText,
      secondaryLink: content.secondaryButtonLink || content.secondaryLink,
      heroId: hero.id
    }
  });

  return cta;
}
