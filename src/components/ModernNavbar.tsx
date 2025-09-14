'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ShieldCheckIcon,
  UserIcon,
  LockClosedIcon
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div 
              className="relative transition-all duration-300 group-hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Desktop Logo - Logo completo */}
              <div className="hidden md:block">
                <Image
                  src="/iscor-logo-completo.png"
                  alt="ISCOR - Soluciones Empresariales"
                  width={160}
                  height={48}
                  className="transition-all duration-300 opacity-100"
                  priority
                  quality={90}
                />
              </div>
              
              {/* Mobile Logo - Logo pequeño */}
              <div className="block md:hidden">
                <Image
                  src="/iscor-logo-pequeño.png"
                  alt="ISCOR"
                  width={36}
                  height={36}
                  className="transition-all duration-300 opacity-100"
                  priority
                  quality={90}
                />
              </div>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
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
              <Bars3Icon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Image
                      src="/iscor-logo-pequeño.png"
                      alt="ISCOR"
                      width={36}
                      height={36}
                      className="transition-all duration-300"
                      priority
                      quality={90}
                    />
                  </motion.div>
                </div>
                <button
                  type="button"
                  className="rounded-lg p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Cerrar menú</span>
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="flow-root">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className={`block px-3 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg ${
                          pathname === item.href
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 space-y-3">
                  <Link
                    href="/certificados"
                    className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <ShieldCheckIcon className="h-4 w-4 mr-2" />
                    Certificados
                  </Link>
                  <Link
                    href="/admin"
                    className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-slate-700 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <LockClosedIcon className="h-4 w-4 mr-2" />
                    Admin
                  </Link>
                  <Link
                    href="/contacto"
                    className="block w-full px-3 py-2.5 text-center text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contactar
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
