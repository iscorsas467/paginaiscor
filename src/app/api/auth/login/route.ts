import { NextRequest, NextResponse } from 'next/server';

// Credenciales simples
const ADMIN_EMAIL = 'admin@iscor.com';
const ADMIN_PASSWORD = 'admin123';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validación simple
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Crear respuesta exitosa
      const response = NextResponse.json({
        success: true,
        message: 'Login exitoso',
        user: {
          id: 'admin-001',
          email: ADMIN_EMAIL,
          role: 'admin'
        }
      });

      // Establecer cookie simple
      response.cookies.set('admin-auth', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 // 24 horas
      });

      return response;
    } else {
      return NextResponse.json(
        { success: false, error: 'Credenciales incorrectas' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error del servidor' },
      { status: 500 }
    );
  }
}