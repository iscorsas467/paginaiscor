'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Building2, Target, Users, Award, Shield, Globe, FileCheck, Lock, Search } from 'lucide-react';
import MissionVisionValues from './MissionVisionValues';

// Datos compactos para la página "La Empresa"
const companyInfo = [
  {
    title: 'Nuestra Historia',
    content: 'ISCOR nació en 2004 con la visión de transformar la cultura de seguridad en Colombia. Desde entonces, hemos crecido hasta convertirnos en líderes del sector, con más de 500 empresas atendidas y más de 15,000 personas capacitadas.',
    shortContent: 'Fundada en 2004, ISCOR ha crecido hasta convertirse en líder del sector de seguridad industrial.'
  },
  {
    title: 'Nuestra Misión',
    content: 'Proteger vidas y optimizar operaciones empresariales mediante soluciones integrales de seguridad, salud ocupacional, medio ambiente y calidad, contribuyendo al desarrollo sostenible del país.',
    shortContent: 'Proteger vidas y optimizar operaciones con soluciones integrales de seguridad.'
  },
  {
    title: 'Nuestra Visión',
    content: 'Ser reconocidos como la empresa líder en Colombia en servicios de seguridad industrial, consultoría y capacitación, siendo referentes en innovación, calidad y compromiso con la protección de las personas y el medio ambiente.',
    shortContent: 'Ser la empresa líder en Colombia en servicios de seguridad industrial.'
  },
  {
    title: 'Nuestros Valores',
    content: 'Excelencia en el servicio, Integridad en todas nuestras acciones, Compromiso con nuestros clientes, Innovación constante, Trabajo en equipo colaborativo, Responsabilidad social y ambiental.',
    shortContent: 'Excelencia, Integridad, Compromiso, Innovación, Trabajo en equipo y Responsabilidad social.'
  }
];

const achievements = [
  { icon: Award, value: '18+', label: 'Años de Experiencia', color: 'primary' },
  { icon: Users, value: '500+', label: 'Empresas Atendidas', color: 'accent' },
  { icon: Target, value: '15.000+', label: 'Personas Capacitadas', color: 'primary' },
  { icon: Shield, value: '98%', label: 'Satisfacción del Cliente', color: 'accent' },
];

const services = [
  {
    title: 'Seguridad y Salud en el Trabajo',
    icon: Shield,
    description: 'Sistemas integrales de gestión de seguridad y salud ocupacional.',
    color: 'primary'
  },
  {
    title: 'Medio Ambiente',
    icon: Globe,
    description: 'Soluciones ambientales para la gestión sostenible de recursos.',
    color: 'accent'
  },
  {
    title: 'Calidad',
    icon: FileCheck,
    description: 'Sistemas de gestión de calidad e inocuidad alimentaria.',
    color: 'primary'
  },
  {
    title: 'Seguridad Física',
    icon: Lock,
    description: 'Servicios especializados de seguridad física y protección.',
    color: 'gray'
  },
  {
    title: 'Inspección de Equipos',
    icon: Search,
    description: 'Inspección y certificación de equipos de seguridad.',
    color: 'primary'
  }
];

const certifications = [
  { name: 'ISO 9001:2015', description: 'Sistema de Gestión de Calidad' },
  { name: 'ISO 14001:2015', description: 'Sistema de Gestión Ambiental' },
  { name: 'OHSAS 18001:2007', description: 'Sistema de Gestión de Seguridad y Salud Ocupacional' },
  { name: 'Certificación ICONTEC', description: 'Organismo de Certificación' }
];

export default function CompactAboutPage() {
  const [expandedInfo, setExpandedInfo] = useState<number | null>(0);
  const [expandedServices, setExpandedServices] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center rounded-full bg-white/10 text-white px-4 py-2 text-sm font-medium mb-6">
              <Building2 className="h-4 w-4 mr-2" />
              La Empresa
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              ISCOR Colombia
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Líderes en seguridad industrial con más de 18 años protegiendo vidas y optimizando operaciones
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${
                    achievement.color === 'primary' ? 'bg-primary-100 text-primary-600' : 'bg-accent-100 text-accent-600'
                  }`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                    achievement.color === 'primary' ? 'text-primary-600' : 'text-accent-600'
                  }`}>
                    {achievement.value}
                  </div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <MissionVisionValues />

      {/* Company Info Section - Moderno y Profesional */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full bg-primary-50 text-primary-700 px-4 py-2 text-sm font-medium mb-6">
              <Building2 className="h-4 w-4 mr-2" />
              Nuestra Empresa
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Conoce Nuestra Empresa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Una empresa comprometida con la excelencia y la protección de las personas
            </p>
          </motion.div>

          {/* Modern Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {companyInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full">
                  {/* Card Header */}
                  <div className="p-8 pb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {info.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {info.shortContent}
                        </p>
                      </div>
                    </div>
                    
                    {/* Expand Button */}
                    <button
                      onClick={() => setExpandedInfo(expandedInfo === index ? null : index)}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200 group"
                    >
                      <span>Leer más</span>
                      <motion.div
                        animate={{ rotate: expandedInfo === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-2"
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </button>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedInfo === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 border-t border-gray-100 bg-gray-50">
                          <div className="pt-6">
                            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                              {info.content}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Certificaciones y Reconocimientos
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Estándares internacionales que respaldan nuestra calidad y compromiso
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 border border-primary-200">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-700 transition-colors duration-300">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Compacto */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600">
              Soluciones integrales para la seguridad de tu empresa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                    service.color === 'primary' ? 'bg-primary-100 text-primary-600' :
                    service.color === 'accent' ? 'bg-accent-100 text-accent-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section - Compacto */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certificaciones y Reconocimientos
            </h2>
            <p className="text-lg text-gray-600">
              Acreditaciones que respaldan nuestra calidad y profesionalismo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
              >
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {cert.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary-500 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para trabajar con nosotros?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contáctanos y descubre cómo podemos ayudarte a proteger tu empresa
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contacto"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Contactar Ahora
              </a>
              <a
                href="/servicios"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Ver Servicios
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
