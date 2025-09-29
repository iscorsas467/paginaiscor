'use client';

import { motion } from 'framer-motion';
import { Shield, CheckCircle2, ArrowRight } from 'lucide-react';

const sgsstServices = [
  'Diseño e implementación de SGSST',
  'Políticas y procedimientos de seguridad',
  'Matriz de peligros y evaluación de riesgos',
  'Programas de prevención de accidentes',
  'Sistema de reporte de incidentes',
  'Auditorías internas de SGSST',
  'Capacitación en SGSST',
  'Actualización normativa',
  'Certificación OHSAS 18001',
  'Migración a ISO 45001'
];

export default function SGSSTPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-white/10 text-white px-4 py-2 text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Sistema de Gestión de Seguridad y Salud en el Trabajo
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              SGSST
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Implementación y administración de sistemas integrales de seguridad y salud ocupacional según normativas nacionales e internacionales
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
              Servicios SGSST
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Soluciones especializadas para la implementación y gestión de sistemas de seguridad y salud en el trabajo
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sgsstServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
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
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                ¿Necesitas implementar un SGSST?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Te ayudamos a diseñar e implementar un sistema de gestión de seguridad y salud en el trabajo 
                que cumpla con todas las normativas legales y estándares internacionales.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=director@iscorcolombia.com&su=Solicitud de Cotización - SGSST - ISCOR Colombia&body=Estimado Director,%0D%0A%0D%0AMe pongo en contacto con usted para solicitar una cotización de servicios de SGSST.%0D%0A%0D%0ADetalles de la solicitud:%0D%0A- Empresa: [Nombre de su empresa]%0D%0A- Servicio de interés: SGSST%0D%0A- Número de empleados: [Cantidad]%0D%0A- Fecha estimada: [Fecha deseada]%0D%0A- Ubicación: [Ciudad/Departamento]%0D%0A%0D%0AInformación adicional:%0D%0A[Describa sus necesidades específicas en SGSST]%0D%0A%0D%0AEspero su respuesta.%0D%0A%0D%0ASaludos cordiales,%0D%0A[Nombre]%0D%0A[Teléfono]%0D%0A[Email]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                >
                  Solicitar Cotización SGSST
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="/Portafolio ISCOR general V2.pdf"
                  download="Portafolio ISCOR general V2.pdf"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-500 font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
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



