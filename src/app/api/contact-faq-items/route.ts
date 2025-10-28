import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const faqId = searchParams.get('faqId');

    if (!faqId) {
      return NextResponse.json({ success: false, message: 'faqId is required' }, { status: 400 });
    }

    const items = await prisma.contact_faq_items.findMany({
      where: { faqId },
      orderBy: { order: 'asc' },
    });

    return NextResponse.json({ success: true, data: items });
  } catch (error) {
    console.error('Error fetching FAQ items:', error);
    return NextResponse.json({ success: false, message: 'Error fetching FAQ items' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { faqId, question, answer } = body;

    if (!faqId || !question || !answer) {
      return NextResponse.json({ success: false, message: 'faqId, question, and answer are required' }, { status: 400 });
    }

    const lastItem = await prisma.contact_faq_items.findFirst({
      where: { faqId },
      orderBy: { order: 'desc' },
    });

    const newOrder = lastItem ? lastItem.order + 1 : 0;

    const newItem = await prisma.contact_faq_items.create({
      data: {
        id: `faq-item-${Date.now()}`,
        faqId,
        question,
        answer,
        order: newOrder,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, data: newItem });
  } catch (error) {
    console.error('Error creating FAQ item:', error);
    return NextResponse.json({ success: false, message: 'Error creating FAQ item' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, question, answer } = body;

    if (!id || !question || !answer) {
      return NextResponse.json({ success: false, message: 'ID, question, and answer are required' }, { status: 400 });
    }

    const updatedItem = await prisma.contact_faq_items.update({
      where: { id },
      data: {
        question,
        answer,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, data: updatedItem });
  } catch (error) {
    console.error('Error updating FAQ item:', error);
    return NextResponse.json({ success: false, message: 'Error updating FAQ item' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, message: 'ID is required' }, { status: 400 });
    }

    await prisma.contact_faq_items.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: 'FAQ item deleted successfully' });
  } catch (error) {
    console.error('Error deleting FAQ item:', error);
    return NextResponse.json({ success: false, message: 'Error deleting FAQ item' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { items } = body; // Expects an array of { id: string, order: number }

    if (!Array.isArray(items)) {
      return NextResponse.json({ success: false, message: 'Items array is required' }, { status: 400 });
    }

    const transaction = items.map((item: { id: string; order: number }) =>
      prisma.contact_faq_items.update({
        where: { id: item.id },
        data: { order: item.order, updatedAt: new Date() },
      })
    );

    await prisma.$transaction(transaction);

    return NextResponse.json({ success: true, message: 'FAQ items reordered successfully' });
  } catch (error) {
    console.error('Error reordering FAQ items:', error);
    return NextResponse.json({ success: false, message: 'Error reordering FAQ items' }, { status: 500 });
  }
}
