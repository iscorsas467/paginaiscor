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
      description: 'Adaptamos nuestras metodologías a las últimas tendencias y tecnologías en seguridad industrial.'
    }
  ];

  const achievements = [
    {
      number: '18+',
      label: 'Años de Experiencia',
      icon: ClockIcon,
      description: 'Liderando el sector desde 2005'
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
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
              <ShieldCheckIcon className="h-5 w-5 mr-3" />
              Sobre ISCOR
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Líderes en Seguridad Industrial
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              <span className="font-semibold text-blue-600">ISCOR S.A.S</span> "Ingeniería de Seguridad y Control de Riesgos S.A.S" se dedica a la aplicación de servicios eficientes de 
              <span className="font-semibold text-green-600"> consultoría</span>, 
              <span className="font-semibold text-purple-600"> asesoría</span> y 
              <span className="font-semibold text-orange-600"> capacitación</span> bajo los más altos estándares nacionales e internacionales actualizados, trabajando por el desarrollo integral de la sociedad.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-12">
              Contribuimos en la implementación de una <span className="font-semibold text-blue-600">cultura preventiva de seguridad</span>, 
              <span className="font-semibold text-green-600"> autocuidado</span> y 
              <span className="font-semibold text-purple-600"> desarrollo del hombre</span> en su entorno de trabajo. 
              Nuestros programas están avalados por las principales autoridades del sector y cumplen con los más altos estándares de calidad.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Visual Card */}
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ShieldCheckIcon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Nuestra Misión</h3>
                <p className="text-blue-100 leading-relaxed">
                  Proteger vidas y optimizar operaciones mediante soluciones integrales 
                  de seguridad industrial que generen valor sostenible.
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                  >
                    <achievement.icon className="h-8 w-8 text-blue-200 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{achievement.number}</div>
                    <div className="text-blue-200 text-sm">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <TrophyIcon className="h-12 w-12 text-white" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <ChartBarIcon className="h-10 w-10 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
