'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

/**
 * Carrusel de Clientes - ISCOR
 * Carrusel infinito con logos en color bien definidos
 */

const logos: { src: string; alt: string }[] = [
  { src: '/clientes/aero-republica.png.png', alt: 'Aero República' },
  { src: '/clientes/agraf.png', alt: 'Agraf' },
  { src: '/clientes/akanoel.png', alt: 'AkzoNobel' },
  { src: '/clientes/aon.png', alt: 'AON' },
  { src: '/clientes/argos.png', alt: 'Argos' },
  { src: '/clientes/arl-sura-logo-.png', alt: 'ARL Sura' },
  { src: '/clientes/avianca.png', alt: 'Avianca' },
  { src: '/clientes/bancooccidental.png', alt: 'Banco de Occidente' },
  { src: '/clientes/bayer.png', alt: 'Bayer' },
  { src: '/clientes/cali.png', alt: 'Cali' },
  { src: '/clientes/Calzatodo.png', alt: 'Calzatodo' },
  { src: '/clientes/cerveceriavalle.png', alt: 'Cervecería del Valle' },
  { src: '/clientes/chipichape.png', alt: 'Chipichape' },
  { src: '/clientes/coomeva.png', alt: 'Coomeva' },
  { src: '/clientes/Corbeta.png', alt: 'Corbeta' },
  { src: '/clientes/delima.png', alt: 'Delima' },
  { src: '/clientes/elpais.png', alt: 'El País' },
  { src: '/clientes/estrutechos.png', alt: 'Estrutechos' },
  { src: '/clientes/exito.png', alt: 'Éxito' },
  { src: '/clientes/fav_alianza_francesa.png', alt: 'Alliance Française' },
  { src: '/clientes/icrc.png', alt: 'ICRC' },
  { src: '/clientes/intertug.png', alt: 'Intertug' },
  { src: '/clientes/jaramillo-mora.png', alt: 'Jaramillo Mora' },
  { src: '/clientes/Johnson,png.png', alt: 'Johnson & Johnson' },
  { src: '/clientes/juanchito.png', alt: 'Juanchito' },
  { src: '/clientes/Kimberly-Clark_logo.svg.png', alt: 'Kimberly-Clark' },
  { src: '/clientes/lafrancol.png', alt: 'La Francol' },
  { src: '/clientes/laverlam.png', alt: 'Laverlam' },
  { src: '/clientes/lineacomunicaciones.png', alt: 'Línea Comunicaciones' },
  { src: '/clientes/Logo_Navitrans.png', alt: 'Navitrans' },
  { src: '/clientes/logo-ceo-top.png', alt: 'CEO' },
  { src: '/clientes/Logo-IME-40-anos.png', alt: 'IME' },
  { src: '/clientes/Logo-Inter-Rapidisimo.png', alt: 'Inter Rapidísimo' },
  { src: '/clientes/logosegurosbolivar.png', alt: 'Seguros Bolívar' },
  { src: '/clientes/motorysa.png', alt: 'Motorysa' },
  { src: '/clientes/recamier.png', alt: 'Recamier' },
  { src: '/clientes/sidelpa.png', alt: 'Sidelpa' },
  { src: '/clientes/sociedadportuaria.png', alt: 'Sociedad Portuaria' },
];

export default function ClientesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Fondo sutil */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Encabezado compacto */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Nuestros Clientes
          </motion.h2>
          
          <motion.p 
            className="text-sm md:text-base text-slate-600 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Referentes de industria que avalan nuestra experiencia
          </motion.p>
        </motion.div>

        {/* Carrusel infinito */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex gap-8"
            animate={{
              x: [0, -100 * logos.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{ width: `${logos.length * 2 * 280}px` }}
          >
            {/* Primera fila de logos */}
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={`${logo.src}-${index}`}
                className="flex-shrink-0 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -4,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 w-64 h-40 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-32 w-full object-contain transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}