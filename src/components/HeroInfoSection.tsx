'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  UserGroupIcon,
  AcademicCapIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

export default function HeroInfoSection() {
  const stats = [
    { number: '18+', label: 'Años de Experiencia', icon: TrophyIcon },
    { number: '500+', label: 'Empresas Atendidas', icon: UserGroupIcon },
    { number: '15,000+', label: 'Profesionales Certificados', icon: AcademicCapIcon },
    { number: '98%', label: 'Satisfacción del Cliente', icon: StarIcon }
  ];

  return (
    <section className="relative py-12 bg-gradient-to-b from-slate-900/10 to-slate-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Título de la Sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Protegemos vidas y optimizamos operaciones con soluciones integrales de 
            <span className="text-blue-300 font-semibold"> seguridad integral</span> y 
            <span className="text-blue-300 font-semibold"> control de riesgos</span>.
          </p>
        </motion.div>

        {/* CTA Principal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <Link href="/servicios">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-4 bg-gradient-to-r from-white to-blue-50 text-slate-900 font-bold text-lg rounded-2xl hover:from-blue-50 hover:to-white transition-all duration-300 shadow-2xl hover:shadow-white/20"
            >
              <span className="flex items-center">
                Conocer Nuestros Servicios
                <ArrowRightIcon className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Estadísticas Compactas */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white/15 backdrop-blur-md rounded-2xl mx-auto mb-4 group-hover:bg-white/25 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <stat.icon className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-white/80 font-medium leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Indicadores de Confianza Compactos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
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
    </section>
  );
}
