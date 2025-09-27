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
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 py-3 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group mr-6">
            <motion.div 
              className="relative transition-all duration-300 group-hover:scale-105 max-h-15 md:max-h-20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Desktop Logo - SVG vectorial ISCOR */}
              <div className="hidden md:block">
                <svg
                  viewBox="0 0 500 100"
                  className="transition-all duration-300 opacity-100 h-20 w-auto"
                  style={{
                    filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                    maxWidth: 'none'
                  }}
                >
                  <defs>
                    <linearGradient id="iscorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1e40af" />
                      <stop offset="30%" stopColor="#3b82f6" />
                      <stop offset="70%" stopColor="#1e40af" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                    </linearGradient>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#1e40af" floodOpacity="0.3"/>
                    </filter>
                  </defs>
                  
                  {/* Logo principal ISCOR */}
                  <text
                    x="250"
                    y="45"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-black text-5xl fill-[url(#iscorGradient)]"
                    style={{
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: '900',
                      letterSpacing: '0.1em',
                      filter: 'url(#shadow)'
                    }}
                  >
                    ISCOR
                  </text>
                  
                  {/* Subtítulo */}
                  <text
                    x="250"
                    y="70"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-sm fill-slate-600"
                    style={{
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: '600',
                      letterSpacing: '0.15em',
                      fontSize: '12px'
                    }}
                  >
                    SOLUCIONES EMPRESARIALES
                  </text>
                  
                  {/* Línea decorativa */}
                  <line
                    x1="150"
                    y1="80"
                    x2="350"
                    y2="80"
                    stroke="url(#iscorGradient)"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                </svg>
              </div>
              
              {/* Mobile Logo - SVG vectorial ISCOR */}
              <div className="block md:hidden">
                <svg
                  viewBox="0 0 350 70"
                  className="transition-all duration-300 opacity-100 h-15 w-auto"
                  style={{
                    filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                    maxWidth: 'none'
                  }}
                >
                  <defs>
                    <linearGradient id="iscorGradientMobile" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1e40af" />
                      <stop offset="30%" stopColor="#3b82f6" />
                      <stop offset="70%" stopColor="#1e40af" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                    </linearGradient>
                    <filter id="shadowMobile" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="1" dy="1" stdDeviation="2" floodColor="#1e40af" floodOpacity="0.3"/>
                    </filter>
                  </defs>
                  
                  {/* Logo principal ISCOR */}
                  <text
                    x="175"
                    y="30"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-black text-3xl fill-[url(#iscorGradientMobile)]"
                    style={{
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: '900',
                      letterSpacing: '0.1em',
                      filter: 'url(#shadowMobile)'
                    }}
                  >
                    ISCOR
                  </text>
                  
                  {/* Subtítulo */}
                  <text
                    x="175"
                    y="50"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-xs fill-slate-600"
                    style={{
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: '600',
                      letterSpacing: '0.1em',
                      fontSize: '9px'
                    }}
                  >
                    SOLUCIONES EMPRESARIALES
                  </text>
                  
                  {/* Línea decorativa */}
                  <line
                    x1="100"
                    y1="60"
                    x2="250"
                    y2="60"
                    stroke="url(#iscorGradientMobile)"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                </svg>
              </div>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1 flex-1">
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
          <div className="hidden lg:flex lg:items-center lg:space-x-3">
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

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menú principal</span>
              <Bars3Icon className="h-6 w-6 sm:h-5 sm:w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Menu panel - WHITE BACKGROUND */}
          <div 
            ref={menuRef}
            className="fixed top-4 bottom-4 right-4 w-64 max-w-full bg-white shadow-xl rounded-3xl sm:w-72 lg:hidden"
          >
            {/* Close button */}
            <div className="flex justify-end p-2 bg-white">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
                </div>
            
            {/* Navigation */}
            <div className="px-3 pb-3 bg-white">
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
