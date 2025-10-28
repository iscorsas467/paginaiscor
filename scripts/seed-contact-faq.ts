import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedContactFaq() {
  try {
    console.log('🌱 Creando datos iniciales de FAQ de contacto...');

    // Verificar si ya existe la sección principal de FAQ
    let contactFaq = await prisma.contact_faq.findFirst();

    if (!contactFaq) {
      console.log('📝 Creando sección principal de FAQ...');
      contactFaq = await prisma.contact_faq.create({
        data: {
          id: 'contact-faq-1',
          title: '¿Tienes dudas?',
          description: 'Resolvemos tus inquietudes sobre nuestros servicios de seguridad integral.',
          updatedAt: new Date(),
        },
      });
      console.log('✅ Sección principal de FAQ creada');
    } else {
      console.log('📋 Sección principal de FAQ ya existe, actualizando...');
      contactFaq = await prisma.contact_faq.update({
        where: { id: contactFaq.id },
        data: {
          title: '¿Tienes dudas?',
          description: 'Resolvemos tus inquietudes sobre nuestros servicios de seguridad integral.',
          updatedAt: new Date(),
        },
      });
    }

    // Datos de preguntas frecuentes
    const faqItems = [
      {
        question: '¿Cuánto tiempo toma implementar un programa de seguridad?',
        answer: 'El tiempo varía según el alcance del programa. Capacitaciones básicas pueden tomar 1-2 días, mientras que programas completos de seguridad pueden requerir 2-4 semanas de implementación.',
        order: 0
      },
      {
        question: '¿Ofrecen seguimiento y auditorías continuas?',
        answer: 'Sí, ofrecemos auditorías periódicas, seguimiento de cumplimiento y soporte continuo para mantener los estándares de seguridad en tu empresa.',
        order: 1
      },
      {
        question: '¿Trabajan con empresas de cualquier sector?',
        answer: 'Absolutamente. Trabajamos con empresas industriales, comerciales, de servicios y construcción. Adaptamos nuestros servicios a las necesidades específicas de cada sector.',
        order: 2
      },
      {
        question: '¿Cuál es el proceso de implementación de seguridad?',
        answer: 'Nuestro proceso incluye: evaluación inicial de riesgos, diseño del programa, capacitación del personal, implementación de protocolos y seguimiento continuo.',
        order: 3
      }
    ];

    // Eliminar items existentes para evitar duplicados
    await prisma.contact_faq_items.deleteMany({
      where: { faqId: contactFaq.id }
    });

    console.log('📝 Creando preguntas frecuentes...');
    for (const item of faqItems) {
      await prisma.contact_faq_items.create({
        data: {
          id: `faq-item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          faqId: contactFaq.id,
          question: item.question,
          answer: item.answer,
          order: item.order,
          updatedAt: new Date(),
        },
      });
    }

    console.log('✅ Preguntas frecuentes creadas');

    // Verificar los datos creados
    const createdFaq = await prisma.contact_faq.findFirst({
      include: {
        contact_faq_items: {
          orderBy: { order: 'asc' }
        }
      }
    });

    console.log('\n📋 Datos de FAQ creados:');
    console.log(`- Título: ${createdFaq?.title}`);
    console.log(`- Descripción: ${createdFaq?.description}`);
    console.log(`- Preguntas: ${createdFaq?.contact_faq_items.length}`);

    if (createdFaq?.contact_faq_items) {
      createdFaq.contact_faq_items.forEach((item, index) => {
        console.log(`  ${index + 1}. ${item.question}`);
      });
    }

    console.log('\n🎉 Datos iniciales de FAQ creados exitosamente');

  } catch (error) {
    console.error('❌ Error creando datos iniciales de FAQ:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedContactFaq();
