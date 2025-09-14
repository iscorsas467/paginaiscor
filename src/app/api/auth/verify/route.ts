import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const authCookie = request.cookies.get('admin-auth')?.value;

    if (authCookie === 'true') {
      return NextResponse.json({
        success: true,
        authenticated: true,
        user: {
          id: 'admin-001',
          email: 'admin@iscor.com',
          role: 'admin'
        }
      });
    } else {
      return NextResponse.json(
        { success: false, authenticated: false },
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