'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield,
  Globe,
  FileCheck,
  Lock,
  Search,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';

interface ServiceCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  services: string[];
  description: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    title: 'Seguridad y Salud en el Trabajo',
    icon: Shield,
    gradient: 'from-primary-500 to-primary-600',
    description: 'Sistemas integrales de gestión de seguridad y salud ocupacional, capacitaciones especializadas y certificaciones para proteger a tu equipo y cumplir con normativas legales.',
    services: [
      'Certificación de conductores que transportan',
      'Control de derrames',
      'Control y extinción de incendios',
      'Procedimientos operativos normalizados NFPA',
      'Plan de emergencias',
      'Análisis de vulnerabilidad',
      'Plan de evacuación',
      'Plan de contingencia',
      'Continuidad de los negocios',
      'Brigadas de emergencia',
      'Simulaciones de emergencias',
      'SCI – Sistema Comando de Incidentes',
      'Materiales peligrosos',
      'Mercancías peligrosas',
      'Control de emergencias químicas',
      'Certificación en protección contra caídas',
      'Seguridad en espacios confinados',
      'Seguridad en trabajos en caliente',
      'Seguridad en trabajos con energías peligrosas',
      'LOTO – Bloqueo y etiquetado',
      'Seguridad en el izaje de cargas',
      'Certificación de operarios de montacargas',
      'Certificación de armado seguro de andamios',
      'Curso de primer respondiente en emergencias médicas',
      'Programa de seguridad para piscinas',
      'Entrenamiento en rescate y salvamento acuático',
      'Certificación en buceo recreativo scuba diver',
      'Capacitación en primeros auxilios básicos y avanzados',
      'Curso de administración de oxígeno para emergencias',
      'Diseño, implementación y administración de sistemas de gestión SST'
    ]
  },
  {
    title: 'Medio Ambiente',
    icon: Globe,
    gradient: 'from-accent-500 to-accent-600',
    description: 'Soluciones ambientales integrales para la gestión sostenible de recursos, cumplimiento normativo y protección del medio ambiente en todas las operaciones empresariales.',
    services: [
      'Estudios de impacto ambiental y planes de manejo ambiental',
      'Estudios hidrobiológicos y monitoreo calidad de agua',
      'Estudios de flora y fauna',
      'Proyectos ambientales',
      'Gestión ambiental y auditoría',
      'Capacitación en manejo de residuos peligrosos',
      'Capacitación de la nueva guía de manejo ambiental',
      'Implementación del plan de manejo ambiental',
      'Capacitación de accidentes ofídicos y manejo de serpientes',
      'Sistema de Gestión de administración ambiental ISO 14001',
      'Programas de educación ambiental',
      'Programas de gestión ambiental, inocuidad y rutas de saneamiento',
      'Control de roedores y otros vertebrados',
      'Control de artrópodos',
      'Tecnologías limpias y controles biológicos',
      'Desinfecciones',
      'Tratamiento de granos almacenados',
      'Evaluaciones microbiológicas y fisicoquímicas del ambiente',
      'Medición de gases de combustión',
      'Plan de manejo de residuos sólidos',
      'Diseños de plantas de tratamiento de aguas residuales industriales',
      'Capacitación en impacto ambiental y manejo de residuos'
    ]
  },
  {
    title: 'Calidad',
    icon: FileCheck,
    gradient: 'from-primary-400 to-primary-500',
    description: 'Sistemas de gestión de calidad e inocuidad alimentaria para optimizar procesos, garantizar estándares internacionales y mejorar la satisfacción del cliente.',
    services: [
      'Sistema de gestión de la calidad ISO 9001',
      'Sistema de gestión seguridad alimentaria ISO 22000',
      'Sistema de peligros y puntos críticos control',
      'Aseguramiento de la inocuidad alimentaria'
    ]
  },
  {
    title: 'Seguridad Física',
    icon: Lock,
    gradient: 'from-gray-600 to-gray-700',
    description: 'Servicios especializados de seguridad física y protección personal para garantizar la integridad y seguridad de personas y bienes.',
    services: [
      'Visitas domiciliarias',
      'Estudios de seguridad',
      'Seguridad con armas de fuego'
    ]
  },
  {
    title: 'Inspección de Equipos',
    icon: Search,
    gradient: 'from-primary-300 to-primary-400',
    description: 'Inspección, certificación y mantenimiento de equipos de seguridad, sistemas de protección y dispositivos especializados para garantizar su funcionamiento óptimo.',
    services: [
      'Seguridad electrónica y CCTV circuito cerrado de televisión',
      'Entrenamiento de escoltas y guardas de seguridad privada',
      'Curso de supervivencia básico y avanzado',
      'Polígrafo (detector de mentiras)',
      'Inspección de equipos de protección contra caídas',
      'Inspección de equipos para trabajos en espacios confinados',
      'Inspección de equipos para rescate y salvamento',
      'Inspección visual de cilindros SCBA y SCUBA',
      'Pruebas hidrostáticas para cilindros SCBA y SCUBA',
      'Posicheck para SCBA',
      'Llenado de aire comprimido para SCBA y SCUBA'
    ]
  }
];

export default function ModernServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Primer item abierto por defecto

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 md:py-14 bg-white">
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
            Servicios Especializados
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            Nuestros Servicios Integrales
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Diseñamos, implementamos, administramos y auditamos sus sistemas integrados de 
            <span className="font-semibold text-primary-500"> CALIDAD</span>, 
            <span className="font-semibold text-accent-500"> MEDIO AMBIENTE</span> y 
            <span className="font-semibold text-primary-600"> SEGURIDAD Y SALUD EN EL TRABAJO</span>
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {serviceCategories.map((category, index) => {
            const isOpen = openIndex === index;
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-6 text-left focus:outline-none focus:ring-4 focus:ring-primary-500/20 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      
                      {/* Title and Count */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {category.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {category.services.length} servicios especializados
                        </p>
                      </div>
                    </div>
                    
                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </motion.div>
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-gray-100">
                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-gray-600 mb-6 leading-relaxed"
                        >
                          {category.description}
                        </motion.p>

                        {/* Services Grid */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="grid grid-cols-1 md:grid-cols-2 gap-3"
                        >
                          {category.services.map((service, serviceIndex) => (
                            <motion.div
                              key={service}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                duration: 0.3, 
                                delay: 0.3 + (serviceIndex * 0.02) 
                              }}
                              className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-200"
                            >
                              <CheckCircle2 className="h-4 w-4 text-primary-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700 font-medium leading-relaxed">
                                {service}
                              </span>
                            </motion.div>
                          ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                          className="mt-6 flex justify-end"
                        >
                          <a
                            href="/contacto"
                            className="inline-flex items-center px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-primary-500/20"
                          >
                            Solicitar Información
                            <ChevronDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
                          </a>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-8 border border-primary-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesitas servicios personalizados?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Desarrollamos soluciones a medida según las necesidades específicas de tu empresa, 
              cumpliendo con todas las normativas legales y estándares internacionales.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=director@iscorcolombia.com&su=Solicitud de Cotización - ISCOR Colombia&body=Estimado Director,%0D%0A%0D%0AMe pongo en contacto con usted para solicitar una cotización de sus servicios de seguridad integral.%0D%0A%0D%0ADetalles de la solicitud:%0D%0A- Empresa: [Nombre de su empresa]%0D%0A- Servicio de interés: [Especifique el servicio]%0D%0A- Número de participantes: [Cantidad]%0D%0A- Fecha estimada: [Fecha deseada]%0D%0A- Ubicación: [Ciudad/Departamento]%0D%0A%0D%0AInformación adicional:%0D%0A[Describa sus necesidades específicas]%0D%0A%0D%0AEspero su respuesta.%0D%0A%0D%0ASaludos cordiales,%0D%0A[Nombre]%0D%0A[Teléfono]%0D%0A[Email]"
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
