'use client';

import { motion } from 'framer-motion';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

interface StandardHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  backgroundGradient?: string;
  showStats?: boolean;
  stats?: Array<{
    number: string;
    label: string;
  }>;
  primaryButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
}

export default function StandardHero({
  eyebrow = "Líderes en Seguridad Integral",
  title,
  subtitle,
  description,
  backgroundGradient = "from-blue-600 via-blue-700 to-cyan-600",
  showStats = false,
  stats = [],
  primaryButton,
  secondaryButton
}: StandardHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Fondo con patrón */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)] blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow (Chip) */}
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-sm font-medium mb-8 shadow-lg"
          >
            <ShieldCheckIcon className="h-4 w-4 mr-2" />
            {eyebrow}
          </motion.div>
        )}
        
        {/* Título principal - Tipografía unificada */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight"
          style={{
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
            fontFamily: 'var(--font-heading)'
          }}
        >
          {title}
        </motion.h1>
        
        {/* Subtítulo - Máximo 2 líneas */}
        {subtitle && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl font-semibold text-white/95 max-w-4xl mx-auto mb-8 leading-relaxed"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
            }}
          >
            {subtitle}
          </motion.h2>
        )}
        
        {/* Descripción */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8"
            style={{
              filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.2))'
            }}
          >
            {description}
          </motion.p>
        )}

        {/* Botones alineados */}
        {(primaryButton || secondaryButton) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            {primaryButton && (
              <motion.a
                href={primaryButton.href}
                onClick={primaryButton.onClick}
                className="inline-flex items-center px-8 py-4 bg-white text-brand-600 font-semibold rounded-xl hover:bg-white/95 hover:scale-105 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {primaryButton.text}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            )}
            
            {secondaryButton && (
              <motion.a
                href={secondaryButton.href}
                onClick={secondaryButton.onClick}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-brand-600 hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {secondaryButton.text}
              </motion.a>
            )}
          </motion.div>
        )}

        {/* Estadísticas */}
        {showStats && stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
