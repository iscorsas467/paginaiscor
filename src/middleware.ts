import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Solo proteger rutas /admin
  if (pathname.startsWith('/admin')) {
    const authCookie = request.cookies.get('admin-auth')?.value;

    // Verificar que existe la cookie y que no esté vacía
    if (!authCookie || authCookie.trim() === '') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
};