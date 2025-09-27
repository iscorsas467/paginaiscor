'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThreeJSBackground from './ThreeJSBackground';
import LoginModal from './LoginModal';
import MinimalHero from './MinimalHero';
import ClientLogosCarousel from './ClientLogosCarousel';
import PremiumServicesAccordion from './PremiumServicesAccordion';
import ModernHomeSection from './ModernHomeSection';

// Datos compactos para la página de inicio

const testimonials = [
  {
    quote: "ISCOR nos ayudó a implementar un sistema SGSST robusto que cumplió con todas las normativas.",
    name: "María González",
    role: "Gerente de Seguridad",
    company: "Empresa Industrial ABC"
  },
  {
    quote: "Los cursos de capacitación de ISCOR han sido fundamentales para mejorar la cultura de seguridad.",
    name: "Carlos Rodríguez", 
    role: "Director de Operaciones",
    company: "Constructora XYZ"
  }
];

const logos = [
  { src: '/clientes/aerorepublicalogo.png.png', alt: 'Aero República' },
  { src: '/clientes/aviancalogo.png.png', alt: 'Avianca' },
  { src: '/clientes/argoslogo.png.png', alt: 'Argos' },
  { src: '/clientes/bayerlogo.png.png', alt: 'Bayer' },
  { src: '/clientes/exitologo.png.png', alt: 'Éxito' },
  { src: '/clientes/ohnsonjohnsonlogo.png.png', alt: 'Johnson & Johnson' },
];

export default function CompactHomePage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLogin = async (username: string, password: string): Promise<boolean> => {
    if (username === 'admin' && password === 'iscor2024') {
      sessionStorage.setItem('iscor_authenticated', 'true');
      window.location.href = '/certificados';
      return true;
    }
    return false;
  };

  return (
    <div className="relative min-h-screen">
      {/* 3D Spheres Background */}
      <ThreeJSBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <MinimalHero />
      </section>

      {/* Modern Home Section - Métricas + Sobre ISCOR */}
      <ModernHomeSection />

      {/* Services Section - Premium Accordion */}
      <PremiumServicesAccordion />

      {/* Testimonials Section - Compacto */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-primary-600">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section - Compacto */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ClientLogosCarousel 
            logos={logos}
            title="Empresas que confían en ISCOR"
            subtitle="Más de 500 empresas líderes han elegido nuestros servicios"
          />
        </div>
      </section>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}
