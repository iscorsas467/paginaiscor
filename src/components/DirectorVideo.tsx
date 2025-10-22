'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayIcon, XMarkIcon } from '@heroicons/react/24/outline';
// Usamos <img> para asegurar que el GIF se vea correctamente

interface DirectorVideoProps {
  className?: string;
}

export default function DirectorVideo({ className = '' }: DirectorVideoProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    setIsVideoEnded(false);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
    setIsVideoEnded(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoEnded = () => {
    setIsVideoEnded(true);
  };

  // Reset al cambiar de página
  useEffect(() => {
    const handleBeforeUnload = () => {
      setIsVideoPlaying(false);
      setIsVideoEnded(false);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        {!isVideoPlaying ? (
          // GIF del Director
          <motion.div
            key="gif"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative group cursor-pointer"
            onClick={handlePlayVideo}
          >
            {/* Contenedor del GIF con efectos glassmorphism */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Círculo principal con gradiente y animación */}
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-white/20 shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500">
                {/* Pulso animado */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 animate-pulse"></div>
                
                {/* GIF del director */}
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/FernandoGIF.gif"
                    alt="Fernando - Director de ISCOR"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Botón de play superpuesto */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl group-hover:bg-white group-hover:shadow-2xl transition-all duration-300">
                    <PlayIcon className="w-8 h-8 text-slate-800 ml-1" />
                  </div>
                </motion.div>

                {/* Texto "Ver Video" */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
                >
                  <span className="text-white/90 text-sm font-medium bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    Ver Video
                  </span>
                </motion.div>
              </div>

              {/* Efectos de partículas flotantes */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-8 left-8 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
            </div>
          </motion.div>
        ) : (
          // Video del Director
          <motion.div
            key="video"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-full max-w-2xl mx-auto"
          >
            {/* Contenedor del video */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                onEnded={handleVideoEnded}
                controls
                autoPlay
                playsInline
              >
                <source src="/ISCORVideoPresentacion.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>

              {/* Overlay con botón de cerrar */}
              <AnimatePresence>
                {isVideoEnded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center"
                  >
                    <motion.button
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCloseVideo}
                      className="flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full text-slate-800 font-semibold shadow-xl hover:bg-white transition-all duration-300"
                    >
                      <XMarkIcon className="w-5 h-5" />
                      Cerrar Video
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Botón de cerrar siempre visible */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300"
              >
                <XMarkIcon className="w-5 h-5 text-slate-800" />
              </motion.button>
            </div>

            {/* Información del director */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-center"
            >
              <h3 className="text-xl font-bold text-white mb-2">Fernando</h3>
              <p className="text-white/80 text-sm">Director General - ISCOR S.A.S.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
