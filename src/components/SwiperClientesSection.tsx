'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { SectionTitle, Card } from './ui';

/**
 * Sección Premium de Clientes - ISCOR
 * Diseño moderno con Swiper responsivo y efectos premium
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

export default function SwiperClientesSection() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isHovered, setIsHovered] = useState(false);

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

        {/* Swiper Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={16}
            slidesPerView={2}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={800}
            breakpoints={{
              640: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 8,
                spaceBetween: 28,
              },
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active swiper-pagination-bullet-active-custom',
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            onSwiper={setSwiper}
            className="clients-swiper"
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.05,
                    ease: 'easeOut'
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Card
                    variant="white"
                    padding="sm"
                    shadow="sm"
                    hover={true}
                    className="h-20 flex items-center justify-center group cursor-pointer"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={60}
                      className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-85 group-hover:opacity-100 transition-all duration-300 filter grayscale-[0.3] group-hover:grayscale-0"
                      loading="lazy"
                    />
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white hover:scale-110 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            aria-label="Logos anteriores"
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
          >
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white hover:scale-110 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            aria-label="Logos siguientes"
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
          >
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

        {/* Custom Pagination Styles */}
        <style jsx global>{`
          .clients-swiper .swiper-pagination {
            position: relative;
            margin-top: 2rem;
          }
          
          .clients-swiper .swiper-pagination-bullet-custom {
            width: 8px;
            height: 8px;
            background: #d1d5db;
            opacity: 1;
            margin: 0 4px;
            transition: all 0.3s ease;
            border-radius: 50%;
          }
          
          .clients-swiper .swiper-pagination-bullet-active-custom {
            background: #0B66FF;
            width: 24px;
            border-radius: 4px;
          }
          
          .clients-swiper .swiper-pagination-bullet-custom:hover {
            background: #9ca3af;
            transform: scale(1.2);
          }
          
          .clients-swiper .swiper-pagination-bullet-custom:focus-visible {
            outline: 2px solid #0B66FF;
            outline-offset: 2px;
          }
          
          .clients-swiper .swiper-button-disabled {
            opacity: 0.3;
            cursor: not-allowed;
          }
          
          .clients-swiper .swiper-button-disabled:hover {
            transform: none;
          }
        `}</style>
      </div>
    </section>
  );
}

