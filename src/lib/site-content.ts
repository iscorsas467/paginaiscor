import { prisma } from './db'

// ===========================================
// TIPOS E INTERFACES
// ===========================================

export interface SiteContent {
  home: HomeContent;
  company: CompanyContent;
  team: TeamContent;
  contact: ContactContent;
  global: GlobalContent;
}

export interface HomeContent {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    stats: {
      experience: string;
      companies: string;
      certifications: string;
    };
    ctaButtons: {
      primary: { text: string; link: string };
      secondary: { text: string; link: string };
    };
  };
  services: {
    title: string;
    description: string;
    items: ServiceItem[];
  };
  features: {
    title: string;
    description: string;
    items: FeatureItem[];
  };
  testimonials: {
    title: string;
    description: string;
    items: TestimonialItem[];
  };
}

export interface CompanyContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  about: {
    title: string;
    description: string;
    services: string[];
    certifications: string[];
    experience: string;
  };
  mission: {
    title: string;
    description: string;
  };
  vision: {
    title: string;
    description: string;
  };
  strengths: {
    title: string;
    description: string;
    items: StrengthItem[];
  };
  values: {
    title: string;
    description: string;
    items: ValueItem[];
  };
}

export interface TeamContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    stats: {
      members: string;
      departments: string;
      experience: string;
    };
  };
  leadership: {
    title: string;
    description: string;
    members: TeamMember[];
  };
  departments: {
    title: string;
    description: string;
    items: DepartmentItem[];
  };
  fullTeam: {
    title: string;
    description: string;
    members: TeamMember[];
  };
}

export interface ContactContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    stats: {
      phone: string;
      email: string;
      location: string;
    };
  };
  form: {
    title: string;
    description: string;
    fields: FormField[];
  };
  info: {
    title: string;
    description: string;
    items: ContactItem[];
  };
  faq: {
    title: string;
    description: string;
    items: FAQItem[];
  };
}

export interface GlobalContent {
  company: {
    name: string;
    slogan: string;
    logo: string;
    favicon: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    whatsapp: string;
    social: {
      facebook: string;
      instagram: string;
      linkedin: string;
      twitter: string;
    };
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

// Interfaces auxiliares
export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

export interface StrengthItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  phone: string;
  email: string;
  linkedin: string;
  image: string;
  gradient: string;
}

export interface DepartmentItem {
  id: string;
  name: string;
  description: string;
  members: number;
  icon: string;
  gradient: string;
}

export interface FormField {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
}

export interface ContactItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// ===========================================
// FUNCIONES PARA CARGAR DATOS
// ===========================================

export async function getHomeContent(): Promise<HomeContent> {
  // Hero
  const hero = await prisma.homeHero.findFirst({
    include: {
      stats: true,
      ctaButtons: true
    }
  });

  // Services
  const services = await prisma.homeServices.findFirst({
    include: {
      items: {
        orderBy: { order: 'asc' }
      }
    }
  });

  // Features
  const features = await prisma.homeFeatures.findFirst({
    include: {
      items: {
        orderBy: { order: 'asc' }
      }
    }
  });

  // Testimonials
  const testimonials = await prisma.homeTestimonials.findFirst({
    include: {
      items: {
        orderBy: { order: 'asc' }
      }
    }
  });

  return {
    hero: {
      badge: hero?.badge || '',
      title: hero?.title || '',
      subtitle: hero?.subtitle || '',
      stats: {
        experience: hero?.stats?.experience || '',
        companies: hero?.stats?.companies || '',
        certifications: hero?.stats?.certifications || ''
      },
      ctaButtons: {
        primary: {
          text: hero?.ctaButtons?.primaryText || '',
          link: hero?.ctaButtons?.primaryLink || ''
        },
        secondary: {
          text: hero?.ctaButtons?.secondaryText || '',
          link: hero?.ctaButtons?.secondaryLink || ''
        }
      }
    },
    services: {
      title: services?.title || '',
      description: services?.description || '',
      items: services?.items.map(item => ({
        id: item.id,
        name: item.name,
        description: item.description,
        icon: item.icon,
        gradient: item.gradient
      })) || []
    },
    features: {
      title: features?.title || '',
      description: features?.description || '',
      items: features?.items.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        icon: item.icon,
        color: item.color
      })) || []
    },
    testimonials: {
      title: testimonials?.title || '',
      description: testimonials?.description || '',
      items: testimonials?.items.map(item => ({
        id: item.id,
        name: item.name,
        position: item.position,
        company: item.company,
        content: item.content,
        rating: item.rating
      })) || []
    }
  };
}

export async function getCompanyContent(): Promise<CompanyContent> {
  // Hero
  const hero = await prisma.companyHero.findFirst();

  // About
  const about = await prisma.companyAbout.findFirst({
    include: {
      services: { orderBy: { order: 'asc' } },
      certifications: { orderBy: { order: 'asc' } }
    }
  });

  // Mission
  const mission = await prisma.companyMission.findFirst();

  // Vision
  const vision = await prisma.companyVision.findFirst();

  // Strengths
  const strengths = await prisma.companyStrengths.findFirst({
    include: {
      items: { orderBy: { order: 'asc' } }
    }
  });

  // Values
  const values = await prisma.companyValues.findFirst({
    include: {
      items: { orderBy: { order: 'asc' } }
    }
  });

  return {
    hero: {
      title: hero?.title || '',
      subtitle: hero?.subtitle || '',
      description: hero?.description || ''
    },
    about: {
      title: about?.title || '',
      description: about?.description || '',
      experience: about?.experience || '',
      services: about?.services.map(s => s.name) || [],
      certifications: about?.certifications.map(c => c.name) || []
    },
    mission: {
      title: mission?.title || '',
      description: mission?.description || ''
    },
    vision: {
      title: vision?.title || '',
      description: vision?.description || ''
    },
    strengths: {
      title: strengths?.title || '',
      description: strengths?.description || '',
      items: strengths?.items.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        icon: item.icon,
        gradient: item.gradient
      })) || []
    },
    values: {
      title: values?.title || '',
      description: values?.description || '',
      items: values?.items.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        icon: item.icon,
        gradient: item.gradient
      })) || []
    }
  };
}

export async function getTeamContent(): Promise<TeamContent> {
  // Hero
  const hero = await prisma.teamHero.findFirst({
    include: { stats: true }
  });

  // Leadership
  const leadership = await prisma.teamLeadership.findFirst({
    include: {
      members: { orderBy: { order: 'asc' } }
    }
  });

  // Departments
  const departments = await prisma.teamDepartments.findFirst({
    include: {
      items: { orderBy: { order: 'asc' } }
    }
  });

  // Full Team
  const fullTeam = await prisma.teamFullTeam.findFirst({
    include: {
      members: { orderBy: { order: 'asc' } }
    }
  });

  return {
    hero: {
      title: hero?.title || '',
      subtitle: hero?.subtitle || '',
      description: hero?.description || '',
      stats: {
        members: hero?.stats?.members || '',
        departments: hero?.stats?.departments || '',
        experience: hero?.stats?.experience || ''
      }
    },
    leadership: {
      title: leadership?.title || '',
      description: leadership?.description || '',
      members: leadership?.members.map(member => ({
        id: member.id,
        name: member.name,
        position: member.position,
        bio: member.bio,
        phone: member.phone,
        email: member.email,
        linkedin: member.linkedin,
        image: member.image,
        gradient: member.gradient
      })) || []
    },
    departments: {
      title: departments?.title || '',
      description: departments?.description || '',
      items: departments?.items.map(item => ({
        id: item.id,
        name: item.name,
        description: item.description,
        members: item.members,
        icon: item.icon,
        gradient: item.gradient
      })) || []
    },
    fullTeam: {
      title: fullTeam?.title || '',
      description: fullTeam?.description || '',
      members: fullTeam?.members.map(member => ({
        id: member.id,
        name: member.name,
        position: member.position,
        bio: member.bio,
        phone: member.phone,
        email: member.email,
        linkedin: member.linkedin,
        image: member.image,
        gradient: member.gradient
      })) || []
    }
  };
}

export async function getContactContent(): Promise<ContactContent> {
  // Hero
  const hero = await prisma.contactHero.findFirst({
    include: { stats: true }
  });

  // Form
  const form = await prisma.contactForm.findFirst({
    include: {
      fields: { orderBy: { order: 'asc' } }
    }
  });

  // Info
  const info = await prisma.contactInfo.findFirst({
    include: {
      items: { orderBy: { order: 'asc' } }
    }
  });

  // FAQ
  const faq = await prisma.contactFaq.findFirst({
    include: {
      items: { orderBy: { order: 'asc' } }
    }
  });

  return {
    hero: {
      title: hero?.title || '',
      subtitle: hero?.subtitle || '',
      description: hero?.description || '',
      stats: {
        phone: hero?.stats?.phone || '',
        email: hero?.stats?.email || '',
        location: hero?.stats?.location || ''
      }
    },
    form: {
      title: form?.title || '',
      description: form?.description || '',
      fields: form?.fields.map(field => ({
        id: field.id,
        name: field.name,
        type: field.type,
        placeholder: field.placeholder,
        required: field.required
      })) || []
    },
    info: {
      title: info?.title || '',
      description: info?.description || '',
      items: info?.items.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        icon: item.icon,
        gradient: item.gradient
      })) || []
    },
    faq: {
      title: faq?.title || '',
      description: faq?.description || '',
      items: faq?.items.map(item => ({
        id: item.id,
        question: item.question,
        answer: item.answer
      })) || []
    }
  };
}

export async function getGlobalContent(): Promise<GlobalContent> {
  // Company
  const company = await prisma.globalCompany.findFirst();

  // Contact
  const contact = await prisma.globalContact.findFirst({
    include: { social: true }
  });

  // SEO
  const seo = await prisma.globalSeo.findFirst();

  return {
    company: {
      name: company?.name || '',
      slogan: company?.slogan || '',
      logo: company?.logo || '',
      favicon: company?.favicon || ''
    },
    contact: {
      phone: contact?.phone || '',
      email: contact?.email || '',
      address: contact?.address || '',
      whatsapp: contact?.whatsapp || '',
      social: {
        facebook: contact?.social?.facebook || '',
        instagram: contact?.social?.instagram || '',
        linkedin: contact?.social?.linkedin || '',
        twitter: contact?.social?.twitter || ''
      }
    },
    seo: {
      title: seo?.title || '',
      description: seo?.description || '',
      keywords: seo?.keywords || ''
    }
  };
}

export async function getAllSiteContent(): Promise<SiteContent> {
  const [home, company, team, contact, global] = await Promise.all([
    getHomeContent(),
    getCompanyContent(),
    getTeamContent(),
    getContactContent(),
    getGlobalContent()
  ]);

  return {
    home,
    company,
    team,
    contact,
    global
  };
}
