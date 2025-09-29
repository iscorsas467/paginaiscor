'use client';

import { motion } from 'framer-motion';
import { FolderCog, CheckCircle2, ArrowRight } from 'lucide-react';

const consultoriaServices = [
  'Consultoría en SGSST',
  'Consultoría ambiental',
  'Consultoría en calidad',
  'Análisis de riesgos',
  'Planes de emergencia',
  'Optimización de procesos',
  'Cumplimiento normativo',
  'Implementación ISO',
  'Auditorías de cumplimiento',
  'Desarrollo de políticas'
];

export default function ConsultoriaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-white/10 text-white px-4 py-2 text-sm font-medium mb-6">
              <FolderCog className="h-4 w-4 mr-2" />
              Asesoría Especializada en Gestión Integral
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Consultoría
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Consultoría experta en implementación de sistemas de gestión, optimización de procesos y cumplimiento normativo
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Servicios de Consultoría
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Asesoría especializada para optimizar procesos y cumplir con normativas de calidad, seguridad y medio ambiente
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consultoriaServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {service}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                ¿Necesitas consultoría especializada?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Nuestros consultores expertos te ayudan a optimizar procesos, implementar sistemas de gestión 
                y cumplir con todas las normativas legales y estándares internacionales.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=director@iscorcolombia.com&su=Solicitud de Cotización - Consultoría - ISCOR Colombia&body=Estimado Director,%0D%0A%0D%0AMe pongo en contacto con usted para solicitar una cotización de servicios de consultoría.%0D%0A%0D%0ADetalles de la solicitud:%0D%0A- Empresa: [Nombre de su empresa]%0D%0A- Servicio de interés: Consultoría%0D%0A- Área específica: [Especifique el área]%0D%0A- Fecha estimada: [Fecha deseada]%0D%0A- Ubicación: [Ciudad/Departamento]%0D%0A%0D%0AInformación adicional:%0D%0A[Describa sus necesidades específicas de consultoría]%0D%0A%0D%0AEspero su respuesta.%0D%0A%0D%0ASaludos cordiales,%0D%0A[Nombre]%0D%0A[Teléfono]%0D%0A[Email]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500/20"
                >
                  Solicitar Cotización Consultoría
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="/Portafolio ISCOR general V2.pdf"
                  download="Portafolio ISCOR general V2.pdf"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-500 font-semibold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/20"
                >
                  Ver Portafolio Completo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}



