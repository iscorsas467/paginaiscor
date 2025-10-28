import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const coursesData = [
  {
    name: 'Trabajo en Alturas',
    description: 'Certificación en protección contra caídas en trabajos en alturas según normativas nacionales e internacionales.',
    icon: '🏗️',
    gradient: 'from-orange-500 to-red-500',
    order: 1
  },
  {
    name: 'Espacios Confinados',
    description: 'Seguridad en espacios confinados con protocolos de entrada, trabajo y rescate especializado.',
    icon: '⚙️',
    gradient: 'from-purple-500 to-indigo-500',
    order: 2
  },
  {
    name: 'Control y Extinción de Incendios',
    description: 'Control y extinción de incendios con procedimientos operativos normalizados NFPA y brigadas de emergencia.',
    icon: '🔥',
    gradient: 'from-red-500 to-orange-500',
    order: 3
  },
  {
    name: 'Primeros Auxilios Básicos y Avanzados',
    description: 'Capacitación en primeros auxilios básicos y avanzados con administración de oxígeno para emergencias.',
    icon: '❤️',
    gradient: 'from-green-500 to-emerald-500',
    order: 4
  },
  {
    name: 'Materiales y Mercancías Peligrosas',
    description: 'Manejo seguro de materiales y mercancías peligrosas con protocolos de almacenamiento y transporte.',
    icon: '⚠️',
    gradient: 'from-yellow-500 to-orange-500',
    order: 5
  },
  {
    name: 'Brigada de Emergencia',
    description: 'Formación de brigadas de emergencia con protocolos de evacuación, rescate y atención de incidentes.',
    icon: '🛡️',
    gradient: 'from-blue-500 to-cyan-500',
    order: 6
  },
  {
    name: 'Planes de Emergencia',
    description: 'Diseño e implementación de planes de emergencia y evacuación para empresas e instituciones.',
    icon: '📋',
    gradient: 'from-indigo-500 to-purple-500',
    order: 7
  },
  {
    name: 'Seguridad Acuática',
    description: 'Seguridad en trabajos acuáticos con técnicas de rescate, primeros auxilios y protocolos de emergencia.',
    icon: '🏊',
    gradient: 'from-cyan-500 to-blue-500',
    order: 8
  },
  {
    name: 'Seguridad Física',
    description: 'Protección física de instalaciones con sistemas de seguridad, control de acceso y protocolos de vigilancia.',
    icon: '🔒',
    gradient: 'from-gray-500 to-slate-500',
    order: 9
  },
  {
    name: 'Control de Calidad',
    description: 'Implementación de sistemas de control de calidad con estándares ISO y metodologías de mejora continua.',
    icon: '📊',
    gradient: 'from-emerald-500 to-green-500',
    order: 10
  },
  {
    name: 'Inspecciones Certificadas',
    description: 'Realización de inspecciones certificadas de equipos, instalaciones y procesos industriales.',
    icon: '🔍',
    gradient: 'from-violet-500 to-purple-500',
    order: 11
  },
  {
    name: 'Reintegro Laboral',
    description: 'Programas de reintegro laboral para trabajadores que han sufrido accidentes o enfermedades ocupacionales.',
    icon: '👥',
    gradient: 'from-teal-500 to-cyan-500',
    order: 12
  },
  {
    name: 'Lockout Tagout',
    description: 'Procedimientos de bloqueo y etiquetado para mantenimiento seguro de equipos y maquinaria industrial.',
    icon: '⚡',
    gradient: 'from-amber-500 to-yellow-500',
    order: 13
  },
  {
    name: 'Buceo',
    description: 'Certificación en buceo recreativo con técnicas de buceo deportivo y protocolos de seguridad NAUI.',
    icon: '🤿',
    gradient: 'from-blue-600 to-indigo-600',
    order: 14
  },
  {
    name: 'Tareas de Alto Riesgo',
    description: 'Identificación y gestión de tareas de alto riesgo con protocolos especializados de seguridad.',
    icon: '⚠️',
    gradient: 'from-red-600 to-pink-600',
    order: 15
  }
];

const homeServicesData = {
  title: 'Nuestros Servicios Especializados',
  description: 'Ofrecemos una amplia gama de programas de capacitación certificados en seguridad integral, salud ocupacional y medio ambiente.'
};

const homeHeroData = {
  badge: 'ISCOR - Líderes en Seguridad Integral',
  title: 'Capacitación Especializada en Seguridad Integral',
  subtitle: 'Más de 15 años formando profesionales en seguridad, salud ocupacional y medio ambiente con los más altos estándares de calidad.'
};

const homeStatsData = {
  experience: '15+',
  companies: '500+',
  certifications: '10,000+'
};

const contactInfoData = {
  title: 'Información de Contacto',
  description: 'Estamos aquí para ayudarte con todas tus necesidades de capacitación en seguridad integral.'
};

const contactInfoItems = [
  {
    title: 'Línea Nacional',
    description: '314 807 08 53',
    icon: '📞',
    gradient: 'from-blue-500 to-blue-600',
    order: 1
  },
  {
    title: 'Correo Electrónico',
    description: 'iscor@iscorcolombia.com.co',
    icon: '✉️',
    gradient: 'from-blue-500 to-blue-600',
    order: 2
  },
  {
    title: 'Sitio Web',
    description: 'www.iscorcolombia.com.co',
    icon: '🌐',
    gradient: 'from-blue-500 to-blue-600',
    order: 3
  }
];

async function seedCourses() {
  try {
    console.log('🌱 Iniciando población de base de datos...\n');

    // Crear home_services
    console.log('📝 Creando sección de servicios...');
    const homeServices = await prisma.home_services.upsert({
      where: { id: 'default-services' },
      update: {
        ...homeServicesData,
        updatedAt: new Date()
      },
      create: {
        id: 'default-services',
        ...homeServicesData,
        updatedAt: new Date()
      }
    });
    console.log('✅ Sección de servicios creada');

    // Crear cursos (home_service_items)
    console.log('📝 Creando cursos...');
    for (const course of coursesData) {
      await prisma.home_service_items.upsert({
        where: { id: `course-${course.order}` },
        update: {
          ...course,
          servicesId: homeServices.id,
          updatedAt: new Date()
        },
        create: {
          id: `course-${course.order}`,
          ...course,
          servicesId: homeServices.id,
          updatedAt: new Date()
        }
      });
    }
    console.log(`✅ ${coursesData.length} cursos creados`);

    // Crear home_hero
    console.log('📝 Creando hero section...');
    const homeHero = await prisma.home_hero.upsert({
      where: { id: 'default-hero' },
      update: {
        ...homeHeroData,
        updatedAt: new Date()
      },
      create: {
        id: 'default-hero',
        ...homeHeroData,
        updatedAt: new Date()
      }
    });
    console.log('✅ Hero section creada');

    // Crear home_stats
    console.log('📝 Creando estadísticas...');
    await prisma.home_stats.upsert({
      where: { id: 'default-stats' },
      update: {
        ...homeStatsData,
        heroId: homeHero.id,
        updatedAt: new Date()
      },
      create: {
        id: 'default-stats',
        ...homeStatsData,
        heroId: homeHero.id,
        updatedAt: new Date()
      }
    });
    console.log('✅ Estadísticas creadas');

    // Crear contact_info
    console.log('📝 Creando información de contacto...');
    const contactInfo = await prisma.contactInfo.upsert({
      where: { id: 'default-contact' },
      update: {
        ...contactInfoData,
        updatedAt: new Date()
      },
      create: {
        id: 'default-contact',
        ...contactInfoData,
        updatedAt: new Date()
      }
    });
    console.log('✅ Información de contacto creada');

    // Crear contact_info_items
    console.log('📝 Creando items de contacto...');
    for (const item of contactInfoItems) {
      await prisma.contact_info_items.upsert({
        where: { id: `contact-item-${item.order}` },
        update: {
          ...item,
          infoId: contactInfo.id,
          updatedAt: new Date()
        },
        create: {
          id: `contact-item-${item.order}`,
          ...item,
          infoId: contactInfo.id,
          updatedAt: new Date()
        }
      });
    }
    console.log(`✅ ${contactInfoItems.length} items de contacto creados`);

    console.log('\n🎉 ¡Base de datos poblada exitosamente!');
    console.log(`📊 Total de cursos: ${coursesData.length}`);
    console.log('📊 Secciones creadas: Hero, Servicios, Contacto');
    console.log('📊 Estadísticas y items de contacto configurados');

  } catch (error) {
    console.error('❌ Error poblando base de datos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedCourses();
