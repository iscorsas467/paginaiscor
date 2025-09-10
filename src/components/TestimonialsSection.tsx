'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María González',
    position: 'Gerente de Seguridad',
    company: 'Constructora ABC',
    content: 'ISCOR ha sido fundamental en la implementación de nuestros protocolos de seguridad. Su profesionalismo y conocimiento técnico nos han ayudado a mantener un ambiente de trabajo seguro y cumplir con todas las normativas.',
    rating: 5,
    image: '/api/placeholder/80/80'
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    position: 'Director de Operaciones',
    company: 'Petroquímica XYZ',
    content: 'Los programas de capacitación de ISCOR son excepcionales. Nuestros empleados han mejorado significativamente sus competencias en seguridad industrial, lo que se refleja en la reducción de incidentes.',
    rating: 5,
    image: '/api/placeholder/80/80'
  },
  {
    id: 3,
    name: 'Ana Rodríguez',
    position: 'Coordinadora de Calidad',
    company: 'Manufacturas del Norte',
    content: 'La certificación ISO 9001 que obtuvimos con el apoyo de ISCOR ha elevado nuestros estándares de calidad. Su metodología y seguimiento son impecables.',
    rating: 5,
    image: '/api/placeholder/80/80'
  },
  {
    id: 4,
    name: 'Roberto Silva',
    position: 'Supervisor de Seguridad',
    company: 'Minería del Sur',
    content: 'ISCOR nos ha proporcionado las herramientas y conocimientos necesarios para operar de manera segura en ambientes de alto riesgo. Su experiencia es invaluable.',
    rating: 5,
    image: '/api/placeholder/80/80'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8"
          >
            <StarIcon className="h-5 w-5 mr-3" />
            Testimonios de Nuestros Clientes
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-8"
          >
            Lo que dicen nuestros clientes
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            La confianza de nuestros clientes es nuestro mayor logro. Conoce las experiencias de quienes han confiado en ISCOR.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          <div 
            className="relative overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200 p-8 md:p-12"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8 font-medium">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center mb-8">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-900 text-lg">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-slate-600">
                      {currentTestimonial.position}
                    </div>
                    <div className="text-blue-600 font-medium">
                      {currentTestimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <button
                onClick={prevTestimonial}
                className="pointer-events-auto p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 shadow-lg border border-slate-200"
              >
                <ChevronLeftIcon className="h-6 w-6 text-slate-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="pointer-events-auto p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 shadow-lg border border-slate-200"
              >
                <ChevronRightIcon className="h-6 w-6 text-slate-600" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Testimonial Counter */}
          <div className="text-center mt-6">
            <span className="text-slate-500 text-sm">
              {currentIndex + 1} de {testimonials.length} testimonios
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
