'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // No mostrar el Navbar en la página de administración ni en el portal empresarial
  if (pathname?.startsWith('/admin') || pathname?.startsWith('/empresa')) {
    return null;
  }
  
  return <Navbar />;
}
