'use client';

import { motion } from 'framer-motion';
import { 
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const contactInfo = [
  {
    title: 'Línea Nacional',
    value: '314 807 08 53',
    icon: PhoneIcon,
    description: 'Atención 24/7 para emergencias',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Bogotá',
    value: 'Cl. 95 #20-28 Torre 1 Of. 702',
    icon: MapPinIcon,
    description: 'Oficina principal',
    gradient: 'from-green-500 to-green-600'
  },
  {
    title: 'Cali',
    value: 'Cl. 58 norte #5 BN 75 Torre 7 Of. 503',
    icon: MapPinIcon,
    description: 'Sede regional',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Correo Electrónico',
    value: 'iscr@iscrcolombia.com.co',
    icon: EnvelopeIcon,
    description: 'Contacto directo',
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    title: 'Sitio Web',
    value: 'www.iscrcolombia.com.co',
    icon: GlobeAltIcon,
    description: 'Información completa',
    gradient: 'from-cyan-500 to-cyan-600'
  }
];

const services = [
  'Consultoría especializada',
  'Asesoría técnica',
  'Capacitación certificada',
  'Auditorías de seguridad',
  'Implementación de sistemas de gestión',
  'Inspección de equipos',
  'Programas de emergencia',
  'Certificaciones internacionales'
];

export default function ContactSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-8"
          >
            <PhoneIcon className="h-5 w-5 mr-3" />
            Contáctanos
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
          >
            Estamos Aquí para Ayudarte
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8"
          >
            Contáctanos para obtener más información sobre nuestros servicios de 
            <span className="font-semibold text-blue-300"> seguridad industrial</span>, 
            <span className="font-semibold text-green-300"> capacitación</span> y 
            <span className="font-semibold text-purple-300"> consultoría</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${contact.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {contact.title}
                    </h4>
                    <p className="text-blue-100 font-medium mb-1">
                      {contact.value}
                    </p>
                    <p className="text-blue-200 text-sm">
                      {contact.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
            >
              <div className="flex items-center mb-4">
                <ClockIcon className="h-6 w-6 text-blue-300 mr-3" />
                <h4 className="text-lg font-semibold text-white">
                  Horarios de Atención
                </h4>
              </div>
              <div className="space-y-2 text-blue-100">
                <p><span className="font-medium">Lunes a Viernes:</span> 8:00 AM - 6:00 PM</p>
                <p><span className="font-medium">Sábados:</span> 8:00 AM - 12:00 PM</p>
                <p><span className="font-medium">Emergencias:</span> 24/7</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Services & Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Nuestros Servicios
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                >
                  <CheckCircleIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100 text-sm font-medium">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <h4 className="text-lg font-semibold text-white mb-6">
                Solicita Información
              </h4>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
                
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                
                <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                  <option value="" className="text-slate-900">Selecciona un servicio</option>
                  <option value="capacitacion" className="text-slate-900">Capacitación</option>
                  <option value="consultoria" className="text-slate-900">Consultoría</option>
                  <option value="auditoria" className="text-slate-900">Auditoría</option>
                  <option value="certificacion" className="text-slate-900">Certificación</option>
                  <option value="otro" className="text-slate-900">Otro</option>
                </select>
                
                <textarea
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto o necesidades"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Enviar Solicitud
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
