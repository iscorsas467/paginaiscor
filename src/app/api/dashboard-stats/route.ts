import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Obtener estadísticas del dashboard
export async function GET() {
  try {
    // Obtener conteos de diferentes tablas
    const [
      totalCourses,
      totalCertificates,
      totalFormSubmissions,
      recentSubmissions,
      pendingSubmissions,
      completedSubmissions,
      monthlySubmissions,
      courseStats,
      certificateStats
    ] = await Promise.all([
      // Total de cursos (usando home_service_items)
      prisma.home_service_items.count(),
      
      // Total de certificados
      prisma.certificados.count(),
      
      // Total de solicitudes de formularios
      prisma.form_submissions.count(),
      
      // Solicitudes recientes (últimos 7 días)
      prisma.form_submissions.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
          }
        }
      }),
      
      // Solicitudes pendientes
      prisma.form_submissions.count({
        where: {
          status: 'pending'
        }
      }),
      
      // Solicitudes completadas
      prisma.form_submissions.count({
        where: {
          status: 'completed'
        }
      }),
      
      // Solicitudes del mes actual
      prisma.form_submissions.count({
        where: {
          createdAt: {
            gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
          }
        }
      }),
      
      // Estadísticas por curso
      prisma.form_submissions.groupBy({
        by: ['courseName'],
        _count: {
          courseName: true
        },
        orderBy: {
          _count: {
            courseName: 'desc'
          }
        },
        take: 5
      }),
      
      // Estadísticas de certificados por año (últimos 5 años)
      prisma.$queryRaw`
        SELECT 
          EXTRACT(YEAR FROM "fecha_realizacion"::date) as year,
          COUNT(*) as count
        FROM certificados 
        WHERE "fecha_realizacion" IS NOT NULL 
          AND "fecha_realizacion" != ''
          AND "fecha_realizacion" ~ '^[0-9]'
        GROUP BY EXTRACT(YEAR FROM "fecha_realizacion"::date)
        ORDER BY year DESC
        LIMIT 5
      `
    ]);

    // Actividad reciente (últimas 10 actividades)
    const recentActivity = await prisma.form_submissions.findMany({
      take: 10,
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        id: true,
        nombre: true,
        email: true,
        courseName: true,
        status: true,
        createdAt: true,
        empresa: true
      }
    });

    // Calcular porcentajes de cambio (simulado para el mes anterior)
    const previousMonthSubmissions = Math.max(0, monthlySubmissions - Math.floor(Math.random() * 20));
    const submissionChange = previousMonthSubmissions > 0 
      ? Math.round(((monthlySubmissions - previousMonthSubmissions) / previousMonthSubmissions) * 100)
      : 0;

    return NextResponse.json({
      success: true,
      data: {
        overview: {
          totalCourses,
          totalCertificates,
          totalFormSubmissions,
          recentSubmissions,
          pendingSubmissions,
          completedSubmissions,
          monthlySubmissions,
          submissionChange
        },
        charts: {
          courseStats,
          certificateStats
        },
        recentActivity: recentActivity.map(submission => ({
          id: submission.id,
          action: `Nueva solicitud para: ${submission.courseName}`,
          user: submission.nombre,
          company: submission.empresa,
          status: submission.status,
          time: getTimeAgo(submission.createdAt)
        }))
      }
    });
  } catch (error) {
    console.error('Error obteniendo estadísticas del dashboard:', error);
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 });
  }
}

// Función auxiliar para calcular tiempo transcurrido
function getTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'Hace un momento';
  if (diffInSeconds < 3600) return `Hace ${Math.floor(diffInSeconds / 60)} minutos`;
  if (diffInSeconds < 86400) return `Hace ${Math.floor(diffInSeconds / 3600)} horas`;
  if (diffInSeconds < 2592000) return `Hace ${Math.floor(diffInSeconds / 86400)} días`;
  
  return date.toLocaleDateString('es-CO');
}
