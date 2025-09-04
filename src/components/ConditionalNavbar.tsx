'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // No mostrar el Navbar en la página de administración
  if (pathname?.startsWith('/admin')) {
    return null;
  }
  
  return <Navbar />;
}
