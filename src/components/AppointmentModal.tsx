'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  XMarkIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AppointmentData {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  fecha: string;
  hora: string;
  tipoConsulta: string;
  mensaje: string;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<AppointmentData>({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    fecha: '',
    hora: '',
    tipoConsulta: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState<Partial<AppointmentData>>({});

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
      setIsSubmitted(false);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        fecha: '',
        hora: '',
        tipoConsulta: '',
        mensaje: ''
      });
      setErrors({});
    }, 200);
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<AppointmentData> = {};

    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';
    if (!formData.email.trim()) newErrors.email = 'El email es obligatorio';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es obligatorio';
    if (!formData.fecha) newErrors.fecha = 'La fecha es obligatoria';
    if (!formData.hora) newErrors.hora = 'La hora es obligatoria';
    if (!formData.tipoConsulta) newErrors.tipoConsulta = 'El tipo de consulta es obligatorio';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseName: `Cita Programada - ${formData.tipoConsulta}`,
          courseSlug: 'cita-programada',
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          empresa: formData.empresa || null,
          mensaje: `Tipo de consulta: ${formData.tipoConsulta}\nFecha: ${formData.fecha}\nHora: ${formData.hora}\nMensaje adicional: ${formData.mensaje || 'N/A'}`
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Error enviando solicitud de cita:', response.statusText);
        alert('Error al enviar la solicitud. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error enviando solicitud de cita:', error);
      alert('Error al enviar la solicitud. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof AppointmentData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Generar opciones de hora
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 8; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        times.push(timeString);
      }
    }
    return times;
  };

  // Obtener fecha mínima (mañana)
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (isSubmitted) {
    return (
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={handleClose}
            />

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
                <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-white/20 rounded-full">
                          <CheckCircleIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">
                            ¡Cita Programada!
                          </h3>
                          <p className="text-green-100 text-sm">
                            Tu solicitud ha sido enviada
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

                  <div className="px-6 py-6">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4">
                        <CheckCircleIcon className="h-10 w-10 text-green-600" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Solicitud Enviada Exitosamente
                      </h4>
                      <p className="text-gray-600">
                        Hemos recibido tu solicitud de cita. Te contactaremos pronto para confirmar la fecha y hora.
                      </p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <ClockIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-blue-800">
                            Tiempo de respuesta
                          </p>
                          <p className="text-xs text-blue-600">
                            Te contactaremos en las próximas 24 horas
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                        <CalendarIcon className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-green-800">
                            Confirmación
                          </p>
                          <p className="text-xs text-green-600">
                            Recibirás un email de confirmación
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleClose}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Entendido
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

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
              className="relative w-full max-w-2xl"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white/20 rounded-full">
                        <CalendarIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          Programar una Cita
                        </h3>
                        <p className="text-blue-100 text-sm">
                          Agenda tu consulta con nuestros expertos
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

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-6 py-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Información Personal */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                        <UserIcon className="h-5 w-5 mr-2 text-blue-600" />
                        Información Personal
                      </h4>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                            errors.nombre ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                          placeholder="Tu nombre completo"
                        />
                        {errors.nombre && (
                          <p className="text-red-600 text-sm mt-1">{errors.nombre}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                            errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                          placeholder="tu@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                            errors.telefono ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                          placeholder="300 123 4567"
                        />
                        {errors.telefono && (
                          <p className="text-red-600 text-sm mt-1">{errors.telefono}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Empresa
                        </label>
                        <input
                          type="text"
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                    </div>

                    {/* Información de la Cita */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                        <CalendarIcon className="h-5 w-5 mr-2 text-blue-600" />
                        Detalles de la Cita
                      </h4>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Tipo de Consulta *
                        </label>
                        <select
                          name="tipoConsulta"
                          value={formData.tipoConsulta}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                            errors.tipoConsulta ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Selecciona el tipo de consulta</option>
                          <option value="Información General">Información General</option>
                          <option value="Asesoramiento de un Curso">Asesoramiento de un Curso</option>
                          <option value="Cotización de Servicios">Cotización de Servicios</option>
                          <option value="Capacitación Empresarial">Capacitación Empresarial</option>
                          <option value="Consultoría en Seguridad">Consultoría en Seguridad</option>
                          <option value="Auditorías de Seguridad">Auditorías de Seguridad</option>
                          <option value="Certificaciones">Certificaciones</option>
                          <option value="Sistema de Gestión ISO">Sistema de Gestión ISO</option>
                          <option value="Otra Consulta">Otra Consulta</option>
                        </select>
                        {errors.tipoConsulta && (
                          <p className="text-red-600 text-sm mt-1">{errors.tipoConsulta}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Fecha Preferida *
                        </label>
                        <input
                          type="date"
                          name="fecha"
                          value={formData.fecha}
                          onChange={handleInputChange}
                          min={getMinDate()}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                            errors.fecha ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                        />
                        {errors.fecha && (
                          <p className="text-red-600 text-sm mt-1">{errors.fecha}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Hora Preferida *
                        </label>
                        <select
                          name="hora"
                          value={formData.hora}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                            errors.hora ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Selecciona una hora</option>
                          {generateTimeOptions().map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                        {errors.hora && (
                          <p className="text-red-600 text-sm mt-1">{errors.hora}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Mensaje Adicional */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje Adicional
                    </label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Cuéntanos más sobre tu consulta o necesidades específicas..."
                    />
                  </div>

                  {/* Botones */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <CalendarIcon className="h-5 w-5" />
                          <span>Programar Cita</span>
                          <ArrowRightIcon className="h-4 w-4" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleClose}
                      className="px-6 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    Horario de atención: Lunes a Viernes de 8:00 AM a 6:00 PM
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
