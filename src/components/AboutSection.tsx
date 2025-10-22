'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  AcademicCapIcon,
  TrophyIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ChartBarIcon,
  ClockIcon,
  StarIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

export default function AboutSection() {
  const values = [
    {
      icon: ShieldCheckIcon,
      title: 'Seguridad Primero',
      description: 'La seguridad de las personas es nuestro valor fundamental y guía todas nuestras decisiones y acciones.'
    },
    {
      icon: AcademicCapIcon,
      title: 'Excelencia Académica',
      description: 'Mantenemos los más altos estándares de calidad en nuestros programas de capacitación y certificación.'
    },
    {
      icon: TrophyIcon,
      title: 'Compromiso con la Calidad',
      description: 'Nos esforzamos por superar las expectativas y entregar resultados excepcionales en cada proyecto.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Innovación Continua',
      description: 'Adaptamos nuestras metodologías a las últimas tendencias y tecnologías en seguridad integral.'
    }
  ];

  const achievements = [
    {
      number: '18+',
      label: 'Años de Experiencia',
      icon: ClockIcon,
      description: 'Liderando el sector desde 2004'
    },
    {
      number: '500+',
      label: 'Empresas Atendidas',
      icon: BuildingOfficeIcon,
      description: 'En todo el territorio nacional'
    },
    {
      number: '15,000+',
      label: 'Profesionales Certificados',
      icon: UserGroupIcon,
      description: 'Con programas especializados'
    },
    {
      number: '98%',
      label: 'Satisfacción del Cliente',
      icon: StarIcon,
      description: 'Según encuestas de calidad'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge compacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6"
          >
            <ShieldCheckIcon className="h-4 w-4 mr-2" />
            Sobre ISCOR
          </motion.div>
          
          {/* Título principal */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Líderes en Seguridad Integral
          </motion.h2>
          
          {/* Descripción concisa */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto mb-8"
          >
            <span className="font-bold">ISCOR S.A.S</span> se dedica a la aplicación de servicios eficientes de 
            <span className="font-bold"> consultoría</span>, 
            <span className="font-bold"> asesoría</span> y 
            <span className="font-bold"> capacitación</span> bajo los más altos estándares nacionales e internacionales, 
            contribuyendo al desarrollo integral de la sociedad mediante una cultura preventiva de seguridad.
          </motion.p>
        </div>

        {/* Grid compacto de valores y logros */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Valores simplificados */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Nuestros Valores</h3>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <value.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{value.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Logros compactos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Nuestra Misión</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Proteger vidas y optimizar operaciones mediante soluciones integrales de seguridad integral.
              </p>
            </div>

            {/* Grid de logros más compacto */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm"
                >
                  <achievement.icon className="h-6 w-6 text-blue-200 mx-auto mb-2" />
                  <div className="text-xl font-bold text-white mb-1">{achievement.number}</div>
                  <div className="text-blue-200 text-xs">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
