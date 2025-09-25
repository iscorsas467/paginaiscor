'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header con Logo */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full py-6 px-4 bg-white border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto flex justify-center">
          <Image
            src="/iscor-logo-pequeño.png"
            alt="ISCOR Logo"
            width={200}
            height={80}
            className="h-16 w-auto"
            priority
          />
        </div>
      </motion.header>

      {/* Contenido Principal */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Imagen de Mantenimiento - Lado Izquierdo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <Image
                  src="/mantenimiento.png"
                  alt="Sitio en Mantenimiento"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                {/* Efecto de brillo sutil */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
              </div>
            </motion.div>

            {/* Contenido de Texto - Lado Derecho */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-8"
            >
              {/* Mensaje Principal */}
              <div className="space-y-6">
                <h1 
                  className="text-4xl lg:text-5xl font-bold text-white"
                  style={{
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5)',
                    background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Sitio en Mantenimiento
                </h1>
                
                <div className="bg-blue-600 rounded-2xl p-6 shadow-xl">
                  <p className="text-xl lg:text-2xl text-white font-semibold mb-4">
                    Estamos mejorando tu experiencia
                  </p>
                  <p className="text-lg text-blue-100 leading-relaxed">
                    Nuestro sitio web está temporalmente fuera de servicio mientras realizamos 
                    mejoras importantes en nuestros sistemas. Estaremos de vuelta pronto con 
                    una experiencia digital aún más robusta y eficiente.
                  </p>
                </div>
              </div>

              {/* Información de Contacto */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="bg-blue-700 rounded-2xl p-6 shadow-xl"
              >
                <h3 
                  className="text-2xl font-bold text-white mb-6"
                  style={{
                    textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                  }}
                >
                  ¿Necesitas contactarnos?
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-800 rounded-xl p-4">
                    <p className="font-bold text-blue-200 mb-2">📧 Email Corporativo</p>
                    <p className="text-white font-semibold">info@iscor.com.co</p>
                  </div>
                  <div className="bg-blue-800 rounded-xl p-4">
                    <p className="font-bold text-blue-200 mb-2">📞 Teléfono</p>
                    <p className="text-white font-semibold">314 807 08 53</p>
                  </div>
                </div>
                <div className="mt-4 bg-blue-800 rounded-xl p-4">
                  <p className="font-bold text-blue-200 mb-2">🕒 Horario de Atención</p>
                  <p className="text-white font-semibold">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                </div>
              </motion.div>

              {/* Indicador de Progreso */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="bg-blue-600 rounded-xl p-4"
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <span className="text-white font-semibold ml-3">
                    Trabajando en las mejoras...
                  </span>
                </div>
              </motion.div>

              {/* Mensaje de Agradecimiento */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-center"
              >
                <p className="text-white font-semibold">
                  Gracias por tu paciencia y comprensión
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}