'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown,
  Shield,
  GraduationCap,
  FolderCog,
  FileSearch,
  CheckCircle2
} from 'lucide-react';

// Datos de servicios organizados por categorías
const serviceCategories = [
  {
    id: 'sgsst',
    title: 'SGSST',
    subtitle: 'Sistema de Gestión de Seguridad y Salud en el Trabajo',
    description: 'Implementación y administración de sistemas integrales de seguridad y salud ocupacional según normativas nacionales e internacionales.',
    icon: Shield,
    color: '#003366',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
    hoverBg: 'hover:bg-blue-100',
    services: [
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
    ]
  },
  {
    id: 'capacitacion',
    title: 'Capacitación',
    subtitle: 'Formación y Certificación Profesional',
    description: 'Programas de capacitación especializados en seguridad industrial, medio ambiente y calidad, con certificación válida.',
    icon: GraduationCap,
    color: '#10B981',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-700',
    hoverBg: 'hover:bg-green-100',
    services: [
      'Trabajo en alturas',
      'Espacios confinados',
      'Primeros auxilios',
      'Brigadas de emergencia',
      'Seguridad vial',
      'Prevención de riesgos',
      'Manejo de materiales peligrosos',
      'Seguridad en construcción',
      'Operación de equipos',
      'Liderazgo en seguridad'
    ]
  },
  {
    id: 'consultoria',
    title: 'Consultoría',
    subtitle: 'Asesoría Especializada en Gestión Integral',
    description: 'Consultoría experta en implementación de sistemas de gestión, optimización de procesos y cumplimiento normativo.',
    icon: FolderCog,
    color: '#8B5CF6',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-700',
    hoverBg: 'hover:bg-purple-100',
    services: [
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
    ]
  },
  {
    id: 'auditorias',
    title: 'Auditorías',
    subtitle: 'Evaluación y Verificación de Cumplimiento',
    description: 'Auditorías especializadas para verificar el cumplimiento de normativas y estándares de calidad, seguridad y medio ambiente.',
    icon: FileSearch,
    color: '#F59E0B',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-700',
    hoverBg: 'hover:bg-orange-100',
    services: [
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
    ]
  }
];

export default function PremiumServicesAccordion() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('sgsst');

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center rounded-full bg-primary-50 text-primary-700 px-4 py-2 text-sm font-medium mb-4">
            Nuestros Servicios
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Servicios Especializados
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Soluciones integrales y personalizadas para garantizar la seguridad, calidad y eficiencia de su empresa
          </p>
        </motion.div>

        {/* Services Accordion */}
        <div className="space-y-6">
          {serviceCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isExpanded = expandedCategory === category.id;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full p-6 text-left focus:outline-none focus:ring-4 focus:ring-primary-500/20 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {/* Icon */}
                        <div className={`flex items-center justify-center w-16 h-16 rounded-full ${category.bgColor} ${category.borderColor} border-2`}>
                          <IconComponent className="h-8 w-8" style={{ color: category.color }} />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-lg font-extrabold text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {category.title}
                          </h3>
                          <p className="text-sm font-medium text-gray-600 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {category.subtitle}
                          </p>
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Chevron */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 ml-4"
                      >
                        <ChevronDown className="h-6 w-6 text-gray-400" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-gray-100 bg-gray-50">
                          <div className="pt-6">
                            <h4 className="text-md font-semibold text-gray-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                              Servicios Incluidos
                            </h4>
                            
                            {/* Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {category.services.map((service, serviceIndex) => (
                                <motion.div
                                  key={serviceIndex}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: serviceIndex * 0.05 }}
                                  className="group"
                                >
                                  <div className={`bg-white rounded-xl shadow-sm border border-gray-200 p-4 transition-all duration-200 hover:border-primary-300 hover:shadow-md ${category.hoverBg}`}>
                                    <div className="flex items-center space-x-3">
                                      <CheckCircle2 
                                        className="h-5 w-5 flex-shrink-0" 
                                        style={{ color: category.color }}
                                      />
                                      <span className="text-sm font-medium text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                        {service}
                                      </span>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                            
                            {/* CTA */}
                            <div className="mt-6 text-right">
                              <a
                                href={`/servicios/${category.id}`}
                                className="inline-flex items-center text-sm font-semibold transition-colors duration-200"
                                style={{ color: category.color }}
                              >
                                Ver detalles completos
                                <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              ¿Necesitas servicios personalizados?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Desarrollamos soluciones a medida según las necesidades específicas de tu empresa, 
              cumpliendo con todas las normativas legales y estándares internacionales.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=director@iscorcolombia.com&su=Solicitud de Cotización - ISCOR Colombia&body=Estimado Director,%0D%0A%0D%0AMe pongo en contacto con usted para solicitar una cotización de sus servicios de seguridad industrial.%0D%0A%0D%0ADetalles de la solicitud:%0D%0A- Empresa: [Nombre de su empresa]%0D%0A- Servicio de interés: [Especifique el servicio]%0D%0A- Número de participantes: [Cantidad]%0D%0A- Fecha estimada: [Fecha deseada]%0D%0A- Ubicación: [Ciudad/Departamento]%0D%0A%0D%0AInformación adicional:%0D%0A[Describa sus necesidades específicas]%0D%0A%0D%0AEspero su respuesta.%0D%0A%0D%0ASaludos cordiales,%0D%0A[Nombre]%0D%0A[Teléfono]%0D%0A[Email]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary-500/20"
              >
                Solicitar Cotización
                <ChevronDown className="ml-2 h-5 w-5 rotate-[-90deg]" />
              </a>
              <a 
                href="/Portafolio ISCOR general V2.pdf"
                download="Portafolio ISCOR general V2.pdf"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-500/20"
              >
                Ver Portafolio Completo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



