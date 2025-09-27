'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import { SectionTitle, Card, Button } from './ui';

/**
 * Sección Premium de Clientes - ISCOR
 * Diseño moderno con carrusel responsivo y efectos premium
 */

const logos: { src: string; alt: string }[] = [
  { src: '/clientes/aerorepublicalogo.png.png', alt: 'Aero República' },
  { src: '/clientes/agrraflogo.png.png', alt: 'Agraf' },
  { src: '/clientes/akzonobellogo.png.png', alt: 'AkzoNobel' },
  { src: '/clientes/alliancefrancaiselogo.png.png', alt: 'Alliance Française' },
  { src: '/clientes/aonlogo.png.png', alt: 'AON' },
  { src: '/clientes/argoslogo.png.png', alt: 'Argos' },
  { src: '/clientes/arlbolivarlogo.png.png', alt: 'ARL Bolívar' },
  { src: '/clientes/aviancalogo.png.png', alt: 'Avianca' },
  { src: '/clientes/bancodeoccidentelogo.png.png', alt: 'Banco de Occidente' },
  { src: '/clientes/bayerlogo.png.png', alt: 'Bayer' },
  { src: '/clientes/calzatodologo.png.png', alt: 'Calzatodo' },
  { src: '/clientes/cerveceriadelvallelogo.png.png', alt: 'Cervecería del Valle' },
  { src: '/clientes/chipichapelogo.png.png', alt: 'Chipichape' },
  { src: '/clientes/compañiaenergeticadeoccidentelogo.png.png', alt: 'Compañía Energética de Occidente' },
  { src: '/clientes/consejocolombianoseguridadlogo.png.png', alt: 'Consejo Colombiano de Seguridad' },
  { src: '/clientes/coomevalogo.png.png', alt: 'Coomeva' },
  { src: '/clientes/corbetalogo.png.png', alt: 'Corbeta' },
  { src: '/clientes/delimamarshlogo.png.png', alt: 'Delima Marsh' },
  { src: '/clientes/ekalogo.png.png', alt: 'EKA' },
  { src: '/clientes/elpaislogo.png.png', alt: 'El País' },
  { src: '/clientes/estrutechoslogo.png.png', alt: 'Estrutechos' },
  { src: '/clientes/exitologo.png.png', alt: 'Éxito' },
  { src: '/clientes/icrclogo.png.png', alt: 'ICRC' },
  { src: '/clientes/imelogo.png.png', alt: 'IME' },
  { src: '/clientes/innovandoporsusalud.png.png', alt: 'Innovando por su Salud' },
  { src: '/clientes/intertuglogo.png.png', alt: 'Intertug' },
  { src: '/clientes/jaramillomoralogo.png.png', alt: 'Jaramillo Mora' },
  { src: '/clientes/laverdlamlogo.png.png', alt: 'Laverlam' },
  { src: '/clientes/linetlogo.png.png', alt: 'Linet' },
  { src: '/clientes/navitranslogo.png.png', alt: 'Navitrans' },
  { src: '/clientes/ohnsonjohnsonlogo.png.png', alt: 'Johnson & Johnson' },
  { src: '/clientes/recamierlogo.png.png', alt: 'Recamier' },
  { src: '/clientes/sidelpalogo.png.png', alt: 'Sidelpa' },
  { src: '/clientes/smplogo.png.png', alt: 'SMP' },
  { src: '/clientes/sociedadportuariabuenaventuralogo.png.png', alt: 'Sociedad Portuaria Buenaventura' },
  { src: '/clientes/suralogo.png.png', alt: 'SURA' },
];

export default function ModernClientesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Configuración del carrusel
  const itemsPerView = {
    mobile: 2,
    tablet: 4,
    desktop: 6,
    large: 8
  };

  const maxIndex = Math.ceil(logos.length / itemsPerView.desktop) - 1;

  // Auto-play del carrusel
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
      
      {/* Patrón geométrico muy sutil */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Encabezado premium */}
        <SectionTitle
          eyebrow="Confianza Empresarial"
          title="Empresas que confían en ISCOR"
          subtitle="Referentes de industria que avalan nuestra experiencia en seguridad integral"
          size="lg"
          className="mb-12"
        />

        {/* Carrusel de logos */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Contenedor del carrusel */}
          <div className="relative overflow-hidden rounded-2xl">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${(maxIndex + 1) * 100}%`
              }}
            >
              {/* Generar slides */}
              {Array.from({ length: maxIndex + 1 }).map((_, slideIndex) => (
                <div 
                  key={slideIndex}
                  className="w-full flex-shrink-0 px-2"
                  style={{ width: `${100 / (maxIndex + 1)}%` }}
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                    {logos
                      .slice(slideIndex * itemsPerView.desktop, (slideIndex + 1) * itemsPerView.desktop)
                      .map((logo, logoIndex) => (
                        <motion.div
                          key={`${slideIndex}-${logoIndex}`}
                          className="group relative"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: logoIndex * 0.1,
                            ease: 'easeOut'
                          }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          {/* Tarjeta minimalista */}
                          <div className="relative bg-white rounded-xl border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300 p-4 h-24 flex items-center justify-center group-hover:scale-105 group-hover:-translate-y-1">
                            {/* Efecto de brillo sutil */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <Image
                              src={logo.src}
                              alt={logo.alt}
                              width={80}
                              height={60}
                              className="max-h-12 w-auto object-contain transition-all duration-300 group-hover:scale-110 filter grayscale-[0.2] group-hover:grayscale-0"
                            />
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Botones de navegación */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeftIcon className="h-5 w-5 text-slate-600" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRightIcon className="h-5 w-5 text-slate-600" />
          </motion.button>
        </motion.div>

        {/* Indicadores de paginación */}
        <motion.div 
          className="flex justify-center mt-8 space-x-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </motion.div>

        {/* Controles de auto-play */}
        <motion.div 
          className="flex justify-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="inline-flex items-center px-4 py-2 text-sm text-slate-600 hover:text-slate-800 transition-colors duration-200"
          >
            <div className={`w-2 h-2 rounded-full mr-2 transition-colors duration-200 ${
              isAutoPlaying ? 'bg-green-500' : 'bg-slate-400'
            }`} />
            {isAutoPlaying ? 'Auto-play activado' : 'Auto-play pausado'}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
