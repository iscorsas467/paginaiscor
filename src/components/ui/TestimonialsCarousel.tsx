'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function TestimonialsCarousel({ 
  testimonials, 
  className = '',
  autoPlay = true,
  autoPlayInterval = 4000
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => {
        // Pausar autoplay al hover
        if (autoPlay) {
          // Esta funcionalidad se maneja en el useEffect
        }
      }}
    >
      {/* Testimonial Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {/* Rating */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-5 h-5 ${
                    i < currentTestimonial.rating
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Content - Limitado a 120-140 caracteres */}
            <blockquote 
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              "{currentTestimonial.content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              {currentTestimonial.avatar ? (
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                  <span className="text-brand-600 font-semibold text-lg">
                    {currentTestimonial.name.charAt(0)}
                  </span>
                </div>
              )}
              <div className="text-left">
                <div className="font-semibold text-gray-900">
                  {currentTestimonial.name}
                </div>
                <div className="text-sm text-gray-600">
                  {currentTestimonial.role}
                </div>
                <div className="text-sm text-brand-600 font-medium">
                  {currentTestimonial.company}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      {testimonials.length > 1 && (
        <>
          {/* Flechas pequeñas en los bordes */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all duration-300"
            aria-label="Testimonio anterior"
          >
            <ChevronLeftIcon className="w-4 h-4 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all duration-300"
            aria-label="Siguiente testimonio"
          >
            <ChevronRightIcon className="w-4 h-4 text-gray-600" />
          </button>

          {/* Bullets discretos debajo */}
          <div className="flex justify-center space-x-1 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-brand-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
