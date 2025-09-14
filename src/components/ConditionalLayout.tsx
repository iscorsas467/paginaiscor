'use client';

import { usePathname } from 'next/navigation';
import ModernNavbar from './ModernNavbar';
import Footer from './Footer';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Si estamos en la ruta /admin, no mostrar navbar ni footer
  if (pathname?.startsWith('/admin')) {
    return <>{children}</>;
  }
  
  // Para todas las demás rutas, mostrar navbar y footer
  return (
    <>
      <ModernNavbar />
      <main className="relative">
        {children}
      </main>
      <Footer />
    </>
  );
}
