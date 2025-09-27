'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'La Empresa', href: '/la-empresa' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Nuestro Equipo', href: '/nuestro-equipo' },
  { name: 'Contacto', href: '/contacto' },
];

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '312 656 7077',
    href: 'tel:3126567077'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'director@iscorcolombia.com',
    href: 'mailto:director@iscorcolombia.com'
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Cali, Colombia',
    href: '#'
  }
];

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: Facebook,
    label: 'Síguenos en Facebook'
  },
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram,
    label: 'Síguenos en Instagram'
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: Linkedin,
    label: 'Conecta en LinkedIn'
  },
  {
    name: 'YouTube',
    href: '#',
    icon: Youtube,
    label: 'Suscríbete en YouTube'
  }
];

export default function CompactFooter() {
  return (
    <footer className="bg-[#1A3060] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-1/3 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and Slogan Column */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image
                src="/iscor-logo-completooo.png"
                alt="ISCOR Colombia"
                width={200}
                height={64}
                className="h-12 w-auto filter brightness-0 invert"
                priority
              />
              <p className="text-sm text-white mt-2">
                cultura preventiva
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">
              Navegación
            </h3>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-gray-300 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">
              Contacto
            </h3>
            
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white font-medium">{contact.label}</p>
                      <a
                        href={contact.href}
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social Media Column */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">
              Síguenos
            </h3>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5 text-[#1A3060]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <div className="text-sm text-white">
              © 2024 ISCOR S.A.S. Todos los derechos reservados.
            </div>
            <div className="text-sm text-white">
              Líderes en Seguridad Industrial desde 2004
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
