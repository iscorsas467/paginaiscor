'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionTitle } from './ui';

/**
 * Sección Grid de Clientes - ISCOR
 * Variante ligera con grid responsive para páginas con poco contenido JS
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

export default function GridClientesSection() {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
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
          title="Empresas que confían en ISCOR"
          subtitle="Referentes de industria que avalan nuestra experiencia en seguridad integral"
          size="lg"
          className="mb-8"
        />

        {/* Grid Responsive */}
        <motion.div
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.02,
                ease: 'easeOut'
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Tarjeta minimalista */}
              <div className="relative bg-white border border-[#E5E7EB] rounded-xl p-4 h-20 flex items-center justify-center group-hover:ring-2 group-hover:ring-brand-500/20 group-hover:ring-offset-2 transition-all duration-300 cursor-pointer">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={50}
                  className="h-10 md:h-12 w-auto object-contain opacity-85 group-hover:opacity-100 transition-all duration-300 filter grayscale-[0.3] group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



