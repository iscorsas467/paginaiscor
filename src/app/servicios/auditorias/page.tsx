'use client';

import { motion } from 'framer-motion';
import { FileSearch, CheckCircle2, ArrowRight } from 'lucide-react';

const auditoriasServices = [
  'Auditorías de SGSST',
  'Auditorías ambientales',
  'Auditorías de calidad',
  'Auditorías de cumplimiento',
  'Auditorías de procesos',
  'Auditorías de proveedores',
  'Auditorías de instalaciones',
  'Auditorías de equipos',
  'Auditorías de documentación',
  'Auditorías de seguimiento'
];

export default function AuditoriasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-white/10 text-white px-4 py-2 text-sm font-medium mb-6">
              <FileSearch className="h-4 w-4 mr-2" />
              Evaluación y Verificación de Cumplimiento
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Auditorías
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Auditorías especializadas para verificar el cumplimiento de normativas y estándares de calidad, seguridad y medio ambiente
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
              Servicios de Auditoría
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Evaluación especializada para verificar el cumplimiento de normativas y estándares de calidad, seguridad y medio ambiente
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {auditoriasServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-orange-600" />
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
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                ¿Necesitas auditorías especializadas?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Nuestros auditores certificados realizan evaluaciones exhaustivas para verificar el cumplimiento 
                de normativas y estándares, identificando oportunidades de mejora.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=director@iscorcolombia.com&su=Solicitud de Cotización - Auditorías - ISCOR Colombia&body=Estimado Director,%0D%0A%0D%0AMe pongo en contacto con usted para solicitar una cotización de servicios de auditoría.%0D%0A%0D%0ADetalles de la solicitud:%0D%0A- Empresa: [Nombre de su empresa]%0D%0A- Servicio de interés: Auditorías%0D%0A- Tipo de auditoría: [Especifique el tipo]%0D%0A- Fecha estimada: [Fecha deseada]%0D%0A- Ubicación: [Ciudad/Departamento]%0D%0A%0D%0AInformación adicional:%0D%0A[Describa sus necesidades específicas de auditoría]%0D%0A%0D%0AEspero su respuesta.%0D%0A%0D%0ASaludos cordiales,%0D%0A[Nombre]%0D%0A[Teléfono]%0D%0A[Email]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-500/20"
                >
                  Solicitar Cotización Auditorías
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="/Portafolio ISCOR general V2.pdf"
                  download="Portafolio ISCOR general V2.pdf"
                  className="inline-flex items-center px-8 py-4 border-2 border-orange-500 text-orange-500 font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-500/20"
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

