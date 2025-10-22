import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { currentCredentials, newCredentials } = await request.json();

    // Validar que se envíen las credenciales
    if (!currentCredentials?.username || !currentCredentials?.password) {
      return NextResponse.json(
        { error: 'Credenciales actuales requeridas' },
        { status: 400 }
      );
    }

    if (!newCredentials?.username || !newCredentials?.password) {
      return NextResponse.json(
        { error: 'Nuevas credenciales requeridas' },
        { status: 400 }
      );
    }

    // Buscar el usuario admin actual
    const currentAdmin = await prisma.user.findFirst({
      where: {
        email: currentCredentials.username,
        role: 'admin'
      }
    });

    if (!currentAdmin) {
      return NextResponse.json(
        { error: 'Credenciales actuales incorrectas' },
        { status: 401 }
      );
    }

    // Verificar la contraseña actual
    const isCurrentPasswordValid = await bcrypt.compare(
      currentCredentials.password,
      currentAdmin.password
    );

    if (!isCurrentPasswordValid) {
      return NextResponse.json(
        { error: 'Credenciales actuales incorrectas' },
        { status: 401 }
      );
    }

    // Verificar que el nuevo usuario no exista (si es diferente)
    if (newCredentials.username !== currentCredentials.username) {
      const existingUser = await prisma.user.findFirst({
        where: {
          email: newCredentials.username
        }
      });

      if (existingUser) {
        return NextResponse.json(
          { error: 'El nuevo usuario ya existe' },
          { status: 400 }
        );
      }
    }

    // Encriptar la nueva contraseña
    const saltRounds = 12;
    const hashedNewPassword = await bcrypt.hash(newCredentials.password, saltRounds);

    // Actualizar las credenciales
    const updatedAdmin = await prisma.user.update({
      where: {
        id: currentAdmin.id
      },
      data: {
        email: newCredentials.username,
        password: hashedNewPassword,
        updatedAt: new Date()
      }
    });

    // Log de la actividad
    await prisma.activityLog.create({
      data: {
        action: 'Credenciales de admin actualizadas',
        user: currentCredentials.username,
        details: `Usuario cambió sus credenciales de acceso`,
        timestamp: new Date()
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Credenciales actualizadas correctamente',
      data: {
        id: updatedAdmin.id,
        email: updatedAdmin.email,
        updatedAt: updatedAdmin.updatedAt
      }
    });

  } catch (error) {
    console.error('Error actualizando credenciales:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
