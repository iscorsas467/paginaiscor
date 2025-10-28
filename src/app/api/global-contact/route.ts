import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Obtener información de contacto global
export async function GET() {
  try {
    const globalContact = await prisma.global_contact.findFirst({
      include: {
        global_social: true
      }
    });

    if (!globalContact) {
      return NextResponse.json({ 
        success: false, 
        error: 'No se encontró información de contacto global' 
      }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      data: globalContact 
    });
  } catch (error) {
    console.error('Error fetching global contact:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// POST - Crear información de contacto global
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      phone,
      email,
      address,
      whatsapp,
      phone_title,
      phone_description,
      email_title,
      email_description,
      social_title,
      social_description,
      socialData
    } = body;

    const globalContact = await prisma.global_contact.create({
      data: {
        id: 'global-contact-1',
        phone,
        email,
        address,
        whatsapp,
        phone_title,
        phone_description,
        email_title,
        email_description,
        social_title,
        social_description,
        updatedAt: new Date()
      }
    });

    // Crear redes sociales si se proporcionan
    if (socialData) {
      await prisma.global_social.create({
        data: {
          id: 'global-social-1',
          facebook: socialData.facebook || '',
          instagram: socialData.instagram || '',
          linkedin: socialData.linkedin || '',
          twitter: socialData.twitter || '',
          contactId: globalContact.id,
          updatedAt: new Date()
        }
      });
    }

    return NextResponse.json({ 
      success: true, 
      data: globalContact 
    });
  } catch (error) {
    console.error('Error creating global contact:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// PUT - Actualizar información de contacto global
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      id,
      phone,
      email,
      address,
      whatsapp,
      phone_title,
      phone_description,
      email_title,
      email_description,
      social_title,
      social_description,
      socialData
    } = body;

    // Actualizar información de contacto
    const globalContact = await prisma.global_contact.update({
      where: { id },
      data: {
        phone,
        email,
        address,
        whatsapp,
        phone_title,
        phone_description,
        email_title,
        email_description,
        social_title,
        social_description,
        updatedAt: new Date()
      }
    });

    // Actualizar redes sociales si se proporcionan
    if (socialData) {
      await prisma.global_social.upsert({
        where: { contactId: id },
        update: {
          facebook: socialData.facebook || '',
          instagram: socialData.instagram || '',
          linkedin: socialData.linkedin || '',
          twitter: socialData.twitter || '',
          updatedAt: new Date()
        },
        create: {
          id: `global-social-${id}`,
          facebook: socialData.facebook || '',
          instagram: socialData.instagram || '',
          linkedin: socialData.linkedin || '',
          twitter: socialData.twitter || '',
          contactId: id,
          updatedAt: new Date()
        }
      });
    }

    // Retornar datos actualizados
    const updatedContact = await prisma.global_contact.findUnique({
      where: { id },
      include: {
        global_social: true
      }
    });

    return NextResponse.json({ 
      success: true, 
      data: updatedContact 
    });
  } catch (error) {
    console.error('Error updating global contact:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}
