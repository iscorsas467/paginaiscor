'use client';

import { motion } from 'framer-motion';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function SpectacularHero() {
  return (
    <div className="relative w-full">
      {/* Sección de Título con Fondo */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Badge Superior */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-sm font-semibold mb-6 shadow-lg hover:bg-white/20 transition-all duration-300"
          >
            <ShieldCheckIcon className="h-5 w-5 mr-3 text-blue-400" />
            Líder en Seguridad Integral desde 2004
          </motion.div>
          
          {/* Título Principal - Una sola línea */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                ISCOR S.A.S.
              </span>
            </h1>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
