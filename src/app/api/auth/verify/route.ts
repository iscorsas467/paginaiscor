import { NextRequest, NextResponse } from 'next/server';
import { getUserById } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const authCookie = request.cookies.get('admin-auth')?.value;

    if (!authCookie) {
      return NextResponse.json(
        { success: false, authenticated: false, error: 'No hay sesión activa' },
        { status: 401 }
      );
    }

    // Buscar usuario en la base de datos usando el ID de la cookie
    const user = await getUserById(authCookie);

    if (!user) {
      return NextResponse.json(
        { success: false, authenticated: false, error: 'Usuario no encontrado' },
        { status: 401 }
      );
    }

    if (!user.isActive) {
      return NextResponse.json(
        { success: false, authenticated: false, error: 'Usuario inactivo' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      authenticated: true,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        username: user.username
      }
    });
  } catch (error) {
    console.error('Error en verificación:', error);
    return NextResponse.json(
      { success: false, error: 'Error del servidor' },
      { status: 500 }
    );
  }
}