import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Obtener estadísticas por página
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page');

    let whereClause = {};
    if (page) {
      whereClause = { page };
    }

    const statistics = await prisma.home_stats.findMany({
      where: whereClause,
      orderBy: { createdAt: 'asc' }
    });

    return NextResponse.json({ 
      success: true, 
      data: statistics 
    });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// POST - Crear nueva estadística
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { experience, companies, certifications, heroId } = body;

    const statistic = await prisma.home_stats.create({
      data: {
        id: `stats-${Date.now()}`,
        experience,
        companies,
        certifications,
        heroId,
        updatedAt: new Date()
      }
    });

    return NextResponse.json({ 
      success: true, 
      data: statistic 
    });
  } catch (error) {
    console.error('Error creating statistic:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// PUT - Actualizar estadística
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, experience, companies, certifications } = body;

    const statistic = await prisma.home_stats.update({
      where: { id },
      data: {
        experience,
        companies,
        certifications
      }
    });

    return NextResponse.json({ 
      success: true, 
      data: statistic 
    });
  } catch (error) {
    console.error('Error updating statistic:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}
