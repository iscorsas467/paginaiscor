'use client';

import { motion } from 'framer-motion';
import { 
  Building2, 
  Award, 
  Users, 
  CheckCircle2, 
  Shield,
  Briefcase,
  Globe
} from 'lucide-react';
import ModernMissionVisionValues from './ModernMissionVisionValues';

// Datos de métricas mejoradas
const metrics = [
  {
    icon: Building2,
    value: '500+',
    label: 'Empresas Atendidas',
    description: 'Clientes satisfechos en todo el país'
  },
  {
    icon: Award,
    value: '18+',
    label: 'Años de Experiencia',
    description: 'Liderando el sector desde 2005'
  },
  {
    icon: Users,
    value: '15.000+',
    label: 'Personas Capacitadas',
    description: 'Profesionales certificados'
  },
  {
    icon: CheckCircle2,
    value: '98%',
    label: 'Satisfacción',
    description: 'Índice de satisfacción del cliente'
  }
];


export default function ModernHomeSection() {

  return (
    <div className="bg-white">
      {/* Métricas Section - Moderno y Elegante */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-600 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Nuestros Logros
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Cifras que respaldan nuestra experiencia y compromiso con la excelencia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100 hover:border-primary-200 hover:shadow-primary-100/20">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-primary-600" />
                    </div>
                    <div className="text-4xl font-bold text-primary-600 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {metric.value}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {metric.label}
                    </div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {metric.description}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores - Tarjetas Modernas */}
      <ModernMissionVisionValues />
    </div>
  );
}
