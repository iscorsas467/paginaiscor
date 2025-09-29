'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ShieldCheckIcon,
  UserIcon,
  LockClosedIcon,
  HomeIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  PhoneIcon,
  DocumentIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Nosotros', href: '/la-empresa' },
  { name: 'Equipo', href: '/nuestro-equipo' },
  { name: 'Contacto', href: '/contacto' },
];

export default function ModernNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detectar clicks fuera del menú
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-48 py-2 md:py-1">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div 
              className="relative transition-all duration-300 group-hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Desktop Logo - SVG vectorial en alta resolución */}
              <div className="hidden md:block">
                <img
                  src="/logo_iscor_recortado.svg"
                  alt="ISCOR - Soluciones Empresariales"
                  className="transition-all duration-300 opacity-100 h-48 w-auto object-contain"
                  style={{
                    filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                    maxWidth: 'none'
                  }}
                />
              </div>
              
              {/* Mobile Logo - SVG vectorial en alta resolución */}
              <div className="block md:hidden">
                <img
                  src="/logo_iscor_recortado.svg"
                  alt="ISCOR - Soluciones Empresariales"
                  className="transition-all duration-300 opacity-100 h-24 w-auto object-contain"
                  style={{
                    filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                    maxWidth: 'none'
                  }}
                />
              </div>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-3 flex-1 justify-center mt-20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-base font-medium transition-all duration-200 rounded-lg ${
                  pathname === item.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4 mt-20">
            <Link
              href="/certificados"
              className="flex items-center px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-200"
            >
              <ShieldCheckIcon className="h-4 w-4 mr-2" />
              Certificados
            </Link>
            <Link
              href="/admin"
              className="flex items-center px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-200"
            >
              <LockClosedIcon className="h-4 w-4 mr-2" />
              Admin
            </Link>
            <Link
              href="/contacto"
              className="px-4 py-2 bg-blue-600 text-white text-base font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Contactar
            </Link>
          </div>

          {/* Mobile menu button - ALWAYS VISIBLE */}
          <div className="flex">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menú principal</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50">
          {/* Menu panel - WHITE BACKGROUND */}
          <div 
            ref={menuRef}
            className="fixed top-0 right-0 h-auto w-64 max-w-[80vw] bg-white shadow-xl lg:hidden"
          >
            {/* Close button */}
            <div className="flex justify-end p-4 bg-white border-b border-gray-200">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            
            {/* Navigation */}
            <div className="px-3 py-4 bg-white overflow-y-auto">
              <nav className="space-y-1">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 text-base font-medium rounded-lg ${
                    pathname === '/' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span>Inicio</span>
                  <HomeIcon className="h-5 w-5" />
                </Link>
                      <Link
                  href="/servicios"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 text-base font-medium rounded-lg ${
                    pathname === '/servicios' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span>Servicios</span>
                  <BriefcaseIcon className="h-5 w-5" />
                      </Link>
                  <Link
                  href="/la-empresa"
                    onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 text-base font-medium rounded-lg ${
                    pathname === '/la-empresa' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  >
                  <span>Nosotros</span>
                  <BuildingOfficeIcon className="h-5 w-5" />
                  </Link>
                  <Link
                  href="/nuestro-equipo"
                    onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 text-base font-medium rounded-lg ${
                    pathname === '/nuestro-equipo' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  >
                  <span>Equipo</span>
                  <UserGroupIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 text-base font-medium rounded-lg ${
                    pathname === '/contacto' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span>Contacto</span>
                  <PhoneIcon className="h-5 w-5" />
                </Link>
              </nav>
              
              {/* Additional links */}
              <div className="mt-3 pt-3 border-t border-gray-200 bg-white">
                <Link
                  href="/certificados"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  <span>Certificados</span>
                  <DocumentIcon className="h-5 w-5" />
                </Link>
                <Link
                  href="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                  >
                  <span>Admin</span>
                  <CogIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
          </div>
        </div>
        )}
    </motion.header>
  );
}
