'use client';

import { motion } from 'framer-motion';

/**
 * Sección Premium de Clientes - ISCOR
 * Diseño ultra profesional con marquee, profundidad y micro-interacciones
 */

const logos: { src: string; alt: string; description: string }[] = [
  { src: '/clientes/aerorepublicalogo.png.png', alt: 'Aero República', description: 'Aerolínea nacional' },
  { src: '/clientes/agrraflogo.png.png', alt: 'Agraf', description: 'Agroindustria' },
  { src: '/clientes/akzonobellogo.png.png', alt: 'AkzoNobel', description: 'Químicos industriales' },
  { src: '/clientes/alliancefrancaiselogo.png.png', alt: 'Alliance Française', description: 'Educación' },
  { src: '/clientes/aonlogo.png.png', alt: 'AON', description: 'Seguros y reaseguros' },
  { src: '/clientes/argoslogo.png.png', alt: 'Argos', description: 'Cementos' },
  { src: '/clientes/arlbolivarlogo.png.png', alt: 'ARL Bolívar', description: 'Riesgos laborales' },
  { src: '/clientes/aviancalogo.png.png', alt: 'Avianca', description: 'Aerolínea internacional' },
  { src: '/clientes/bancodeoccidentelogo.png.png', alt: 'Banco de Occidente', description: 'Servicios financieros' },
  { src: '/clientes/bayerlogo.png.png', alt: 'Bayer', description: 'Farmacéutica' },
  { src: '/clientes/calzatodologo.png.png', alt: 'Calzatodo', description: 'Calzado' },
  { src: '/clientes/cerveceriadelvallelogo.png.png', alt: 'Cervecería del Valle', description: 'Bebidas' },
  { src: '/clientes/chipichapelogo.png.png', alt: 'Chipichape', description: 'Centro comercial' },
  { src: '/clientes/compañiaenergeticadeoccidentelogo.png.png', alt: 'Compañía Energética de Occidente', description: 'Energía' },
  { src: '/clientes/consejocolombianoseguridadlogo.png.png', alt: 'Consejo Colombiano de Seguridad', description: 'Seguridad industrial' },
  { src: '/clientes/coomevalogo.png.png', alt: 'Coomeva', description: 'Cooperativa' },
  { src: '/clientes/corbetalogo.png.png', alt: 'Corbeta', description: 'Construcción' },
  { src: '/clientes/delimamarshlogo.png.png', alt: 'Delima Marsh', description: 'Seguros' },
  { src: '/clientes/ekalogo.png.png', alt: 'EKA', description: 'Químicos' },
  { src: '/clientes/elpaislogo.png.png', alt: 'El País', description: 'Medios' },
  { src: '/clientes/estrutechoslogo.png.png', alt: 'Estrutechos', description: 'Construcción' },
  { src: '/clientes/exitologo.png.png', alt: 'Éxito', description: 'Retail' },
  { src: '/clientes/icrclogo.png.png', alt: 'ICRC', description: 'Organización humanitaria' },
  { src: '/clientes/imelogo.png.png', alt: 'IME', description: 'Educación' },
  { src: '/clientes/innovandoporsusalud.png.png', alt: 'Innovando por su Salud', description: 'Salud' },
  { src: '/clientes/intertuglogo.png.png', alt: 'Intertug', description: 'Logística' },
  { src: '/clientes/jaramillomoralogo.png.png', alt: 'Jaramillo Mora', description: 'Construcción' },
  { src: '/clientes/laverdlamlogo.png.png', alt: 'Laverlam', description: 'Textiles' },
  { src: '/clientes/linetlogo.png.png', alt: 'Linet', description: 'Muebles médicos' },
  { src: '/clientes/navitranslogo.png.png', alt: 'Navitrans', description: 'Transporte' },
  { src: '/clientes/ohnsonjohnsonlogo.png.png', alt: 'Johnson & Johnson', description: 'Farmacéutica' },
  { src: '/clientes/recamierlogo.png.png', alt: 'Recamier', description: 'Textiles' },
  { src: '/clientes/sidelpalogo.png.png', alt: 'Sidelpa', description: 'Papel' },
  { src: '/clientes/smplogo.png.png', alt: 'SMP', description: 'Servicios portuarios' },
  { src: '/clientes/sociedadportuariabuenaventuralogo.png.png', alt: 'Sociedad Portuaria Buenaventura', description: 'Puerto' },
  { src: '/clientes/suralogo.png.png', alt: 'SURA', description: 'Seguros' },
];

export default function ClientesSection() {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
      {/* Fondo organizado y profesional */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
      
      {/* Patrón geométrico organizado */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Glow radial sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)] blur-2xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Encabezado compacto */}
        <motion.div 
          className="text-center mb-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Pill superior */}
          <motion.div 
            className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-slate-700 shadow-sm shadow-slate-200/50 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-1 h-1 rounded-full bg-blue-500 mr-1.5 animate-pulse"></div>
            ✨ Empresas que confían en ISCOR
          </motion.div>
          
          {/* Título principal */}
          <motion.h2 
            className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 text-center mb-3 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Nuestros Clientes
          </motion.h2>
          
          {/* Subtítulo */}
          <motion.p 
            className="text-sm md:text-base text-slate-600 text-center max-w-2xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Referentes de industria que avalan nuestra experiencia en seguridad industrial y gestión de riesgos
          </motion.p>
          
          {/* Divisor */}
          <motion.div 
            className="mx-auto mt-4 h-px w-16 rounded-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </motion.div>

        {/* Card organizada y limpia */}
        <motion.div 
          className="relative rounded-xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-[0_8px_30px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_50px_-15px_rgba(0,0,0,0.2)] transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="px-6 py-6">
            {/* Separador superior */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6" />
            
            {/* Grid compacta */}
            <motion.div 
              className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 md:gap-5 items-center"
              aria-label="Logos de clientes de ISCOR"
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {logos.map((logo) => (
                <motion.div
                  key={logo.src}
                  className="group relative flex flex-col items-center justify-center p-3 rounded-lg bg-slate-50/80 border border-slate-200/60 transition-all duration-300 hover:shadow-[0_6px_20px_-8px_rgba(0,0,0,0.1)] hover:border-blue-300/60 hover:bg-white hover:-translate-y-1"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                      scale: 0.95
                    },
                    show: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        ease: 'easeOut'
                      }
                    }
                  }}
                  whileHover={{ 
                    y: -2,
                    scale: 1.02
                  }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 20 
                  }}
                  tabIndex={0}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-8 md:h-9 object-contain grayscale-[0.3] opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 group-hover:saturate-120 will-change-transform mb-1"
                  />
                  <p className="text-[10px] md:text-xs text-slate-600 text-center leading-tight group-hover:text-slate-800 transition-colors duration-300">
                    {logo.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Separador inferior */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mt-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}