'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

/**
 * Carrusel de Clientes - ISCOR
 * Carrusel infinito con logos en color bien definidos
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
  { src: '/clientes/cerveceriadelvale.png', alt: 'Cervecería del Valle' },
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
  { src: '/clientes/motorysalogo.png', alt: 'Motorysa' },
  { src: '/clientes/juanchitologo.png', alt: 'Juanchito' },
  { src: '/clientes/ineacomunicacioneslogo.png', alt: 'Línea Comunicaciones' },
  { src: '/clientes/sociedadportuariabuenaventuralogo.png.png', alt: 'Sociedad Portuaria Buenaventura' },
  { src: '/clientes/suralogo.png.png', alt: 'SURA' },
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