'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  XMarkIcon,
  PhoneIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber: string;
}

export default function CallModal({ isOpen, onClose, phoneNumber }: CallModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsAnimating(true);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const formatPhoneNumber = (phone: string) => {
    // Formatear el número para mostrar
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
    }
    return phone;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="flex min-h-full items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ 
                opacity: isAnimating ? 1 : 0, 
                scale: isAnimating ? 1 : 0.9, 
                y: isAnimating ? 0 : 20 
              }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-md"
            >
              {/* Modal Content */}
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Header con gradiente */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white/20 rounded-full">
                        <PhoneIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          ¡Llámanos Ahora!
                        </h3>
                        <p className="text-blue-100 text-sm">
                          Estamos listos para ayudarte
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleClose}
                      className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors duration-200"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 py-6">
                  {/* Número de teléfono destacado */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-4">
                      <PhoneIcon className="h-10 w-10 text-blue-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {formatPhoneNumber(phoneNumber)}
                    </h4>
                    <p className="text-gray-600">
                      Nuestro equipo está disponible para atenderte
                    </p>
                  </div>

                  {/* Información adicional */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-green-800">
                          Respuesta inmediata
                        </p>
                        <p className="text-xs text-green-600">
                          Nuestros expertos te atenderán al instante
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <ClockIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-blue-800">
                          Horario de atención
                        </p>
                        <p className="text-xs text-blue-600">
                          Lunes a Viernes: 8:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Botones de acción */}
                  <div className="space-y-3">
                    <button
                      onClick={handleCall}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <PhoneIcon className="h-5 w-5" />
                      <span>Llamar Ahora</span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </button>

                    <button
                      onClick={handleClose}
                      className="w-full border-2 border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    También puedes contactarnos por{' '}
                    <a 
                      href="mailto:director@iscorcolombia.com" 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      email
                    </a>{' '}
                    o visitar nuestra{' '}
                    <a 
                      href="/contacto" 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      página de contacto
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
