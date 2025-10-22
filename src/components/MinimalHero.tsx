'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ShieldCheckIcon,
  ArrowRightIcon,
  PlayIcon,
  CheckCircleIcon,
  StarIcon,
  UserGroupIcon,
  AcademicCapIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

export default function MinimalHero() {
  const [currentText, setCurrentText] = useState(0);
  
  const heroTexts = [
    'Seguridad Integral',
    'Capacitación Especializada',
    'Certificaciones Profesionales',
    'Consultoría en Riesgos'
  ];

  const stats = [
    { number: '18+', label: 'Años de Experiencia', icon: TrophyIcon },
    { number: '500+', label: 'Empresas Atendidas', icon: UserGroupIcon },
    { number: '15,000+', label: 'Profesionales Certificados', icon: AcademicCapIcon },
    { number: '98%', label: 'Satisfacción del Cliente', icon: StarIcon }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-sm font-semibold mb-6 shadow-lg"
          >
            <ShieldCheckIcon className="h-5 w-5 mr-3" />
            Líder en Seguridad Integral desde 2004
          </motion.div>
          
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
              <span className="block mb-4">ISCOR <span className="text-4xl md:text-5xl lg:text-6xl">S.A.S.</span></span>
            </h1>
            
            {/* Dynamic Subtitle */}
            <div className="h-16 md:h-20 flex items-center justify-center mb-6">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentText}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white"
                >
                  {heroTexts[currentText]}
                </motion.h2>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <p className="text-lg md:text-xl text-white leading-relaxed font-light">
              Protegemos vidas y optimizamos operaciones con soluciones integrales de seguridad integral y control de riesgos.
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
          >
            <Link href="/servicios">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-white/95 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center text-lg">
                  Conocer Nuestros Servicios
                  <ArrowRightIcon className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </motion.button>
            </Link>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-10 py-4 border-2 border-white/40 text-white font-semibold rounded-xl hover:border-white/60 hover:bg-white/15 transition-all duration-300 backdrop-blur-md shadow-lg"
            >
              <PlayIcon className="h-5 w-5 mr-3" />
              <span className="text-lg">Ver Video Corporativo</span>
            </motion.button>
          </motion.div>

          {/* Enhanced Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-8 sm:px-0"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white/15 backdrop-blur-md rounded-2xl mx-auto mb-6 group-hover:bg-white/25 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <stat.icon className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white/80 font-medium leading-tight px-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-20 flex flex-wrap items-center justify-center gap-8"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3" />
              <span className="text-sm font-medium text-white/90">Certificaciones Internacionales</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3" />
              <span className="text-sm font-medium text-white/90">Instructores Certificados</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3" />
              <span className="text-sm font-medium text-white/90">Metodologías Probadas</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
