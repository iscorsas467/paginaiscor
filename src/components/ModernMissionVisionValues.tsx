'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

// Datos de Misión, Visión y Valores
const missionVisionValues = [
  {
    icon: Target,
    title: 'Nuestra Misión',
    description: 'Proteger vidas y optimizar operaciones con soluciones integrales de seguridad, medio ambiente y calidad. Nos comprometemos a brindar servicios de excelencia que garanticen el bienestar de las personas y la sostenibilidad de los procesos industriales.'
  },
  {
    icon: Eye,
    title: 'Nuestra Visión',
    description: 'Ser líderes en Colombia en servicios de seguridad industrial, reconocidos por nuestra excelencia, innovación y compromiso con la protección de las personas y el medio ambiente. Aspiramos a ser el referente nacional en consultoría y capacitación especializada.'
  },
  {
    icon: Heart,
    title: 'Nuestros Valores',
    description: 'Excelencia en cada servicio que brindamos, Integridad en nuestras relaciones comerciales, Compromiso con la seguridad y bienestar, Innovación constante en nuestras metodologías, Trabajo en equipo para lograr objetivos comunes y Responsabilidad social con la comunidad.'
  }
];

export default function ModernMissionVisionValues() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-600 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Misión, Visión y Valores
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Los principios fundamentales que guían nuestro compromiso con la excelencia y la protección de las personas
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {missionVisionValues.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-primary-600 hover:shadow-primary-100/20">
                    <div className="flex items-start space-x-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl group-hover:bg-primary-200 transition-colors duration-300">
                          <IconComponent className="h-8 w-8 text-primary-600" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Compromiso con la Excelencia
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Estos principios fundamentales nos han permitido consolidarnos como líderes en el sector de seguridad industrial, 
              brindando soluciones integrales que protegen vidas y optimizan operaciones en más de 500 empresas a nivel nacional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

