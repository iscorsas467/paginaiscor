import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const faq = await prisma.contact_faq.findFirst({
      include: {
        contact_faq_items: {
          orderBy: { order: 'asc' },
        },
      },
    });

    if (!faq) {
      return NextResponse.json({ success: false, message: 'FAQ section not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: faq });
  } catch (error) {
    console.error('Error fetching contact FAQ:', error);
    return NextResponse.json({ success: false, message: 'Error fetching contact FAQ' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, title, description } = body;

    if (!id || !title) {
      return NextResponse.json({ success: false, message: 'ID and title are required' }, { status: 400 });
    }

    const updatedFaq = await prisma.contact_faq.update({
      where: { id },
      data: {
        title,
        description: description || '',
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, data: updatedFaq });
  } catch (error) {
    console.error('Error updating contact FAQ:', error);
    return NextResponse.json({ success: false, message: 'Error updating contact FAQ' }, { status: 500 });
  }
}
