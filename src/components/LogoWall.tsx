'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/navigation';

const logos = [
  { src: '/images/logos/logo1.png', alt: 'Cliente 1' },
  { src: '/images/logos/logo2.png', alt: 'Cliente 2' },
  { src: '/images/logos/logo3.png', alt: 'Cliente 3' },
  { src: '/images/logos/logo4.png', alt: 'Cliente 4' },
  { src: '/images/logos/logo5.png', alt: 'Cliente 5' },
  { src: '/images/logos/logo6.png', alt: 'Cliente 6' },
  { src: '/images/logos/logo7.png', alt: 'Cliente 7' },
  { src: '/images/logos/logo8.png', alt: 'Cliente 8' }
];

export default function LogoWall() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Empresas que confían en ISCOR
          </h2>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={16}
            slidesPerView={2}
            autoplay={{ 
              delay: 2400, 
              disableOnInteraction: false, 
              pauseOnMouseEnter: true 
            }}
            loop={true}
            speed={800}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 8,
                spaceBetween: 24,
              },
            }}
            navigation={{ 
              nextEl: '.logo-swiper-button-next', 
              prevEl: '.logo-swiper-button-prev' 
            }}
            className="logo-swiper"
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white border border-gray-100 rounded-lg p-3 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={60}
                    className="h-12 md:h-14 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Flechas de navegación sutiles */}
          <button
            className="logo-swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all duration-300 z-10"
            aria-label="Anterior"
          >
            <ChevronLeftIcon className="w-4 h-4 text-gray-600" />
          </button>

          <button
            className="logo-swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all duration-300 z-10"
            aria-label="Siguiente"
          >
            <ChevronRightIcon className="w-4 h-4 text-gray-600" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
