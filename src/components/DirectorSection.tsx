'use client';

import { motion } from 'framer-motion';
import DirectorVideo from './DirectorVideo';

export default function DirectorSection() {
  return (
    <section className="relative py-12 bg-gradient-to-b from-transparent to-slate-900/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Título de la Sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            BIENVENIDO
          </h2>
          <p className="text-lg text-white/80">
            Te damos la bienvenida a ISCOR S.A.S., tu aliado en seguridad y salud ocupacional
          </p>
        </motion.div>

        {/* GIF/Video del Director */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <DirectorVideo className="scale-110" />
        </motion.div>
      </div>
    </section>
  );
}
