'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ClientesSection from '@/components/ClientesSection';
import CallModal from '@/components/CallModal';
import AppointmentModal from '@/components/AppointmentModal';
import { 
  BuildingOffice2Icon,
  CogIcon,
  ShieldCheckIcon,
  TrophyIcon,
  FlagIcon,
  EyeIcon,
  ChartBarIcon,
  UserGroupIcon,
  StarIcon,
  HeartIcon,
  LightBulbIcon,
  ClockIcon,
  BuildingOfficeIcon,
  DocumentCheckIcon,
  AcademicCapIcon,
  PhoneIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

// Componente para animación de contador
function CounterAnimation({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 segundos
    const steps = 60; // 60 pasos para suavidad
    const increment = target / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newCount = Math.min(Math.floor(increment * currentStep), target);
      setCount(newCount);

      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(target); // Asegurar que llegue al valor exacto
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString('en-US')}{suffix}</span>;
}

export default function LaEmpresa() {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero Section - Compacto */}
      <section className="relative py-8 md:py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden flex items-center">
        {/* Fondo Ultra Premium Multi-Capa */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
        
        {/* Patrón geométrico sofisticado */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-13.807-11.193-25-25-25s-25 11.193-25 25 11.193 25 25 25 25-11.193 25-25zm0 0c0 13.807 11.193 25 25 25s25-11.193 25-25-11.193-25-25-25-25 11.193-25 25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }} />
        </div>
        
        {/* Patrón de puntos adicional */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Patrón de líneas sutiles */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-opacity='0.1' stroke-width='1'%3E%3Cpath d='M0 60h120M60 0v120'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }} />
        </div>

        {/* Glow radial premium */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.25),transparent_70%)] blur-3xl" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[700px] bg-gradient-to-b from-blue-500/20 via-transparent to-transparent blur-3xl" />
        
        {/* Glow lateral izquierdo */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[1000px] bg-gradient-to-r from-blue-400/10 via-transparent to-transparent blur-3xl" />
        
        {/* Glow lateral derecho */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[1000px] bg-gradient-to-l from-blue-400/10 via-transparent to-transparent blur-3xl" />
        
        {/* Formas geométricas flotantes premium */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-16 left-16 w-48 h-48 border border-white/8 rotate-45"
            animate={{ 
              rotate: [45, 405],
              scale: [1, 1.15, 1],
              opacity: [0.08, 0.15, 0.08]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
          <motion.div 
            className="absolute bottom-16 right-16 w-40 h-40 border border-white/8 rounded-full"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.08, 0.18, 0.08]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/5 w-24 h-24 border border-white/8 transform rotate-12"
            animate={{ 
              rotate: [12, 372],
              y: [-15, 15, -15],
              opacity: [0.08, 0.12, 0.08]
            }}
            transition={{ 
              duration: 22, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/5 w-32 h-32 border border-white/8 transform -rotate-45"
            animate={{ 
              rotate: [-45, 315],
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.14, 0.08]
            }}
            transition={{ 
              duration: 28, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute top-1/4 right-1/3 w-20 h-20 border border-white/8 transform rotate-45"
            animate={{ 
              rotate: [45, 405],
              x: [-10, 10, -10],
              opacity: [0.06, 0.12, 0.06]
            }}
            transition={{ 
              duration: 18, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-1/3 w-28 h-28 border border-white/8 rounded-full"
            animate={{ 
              scale: [1, 1.25, 1],
              y: [-8, 8, -8],
              opacity: [0.06, 0.14, 0.06]
            }}
            transition={{ 
              duration: 24, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>
        
        {/* Overlay con gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-900/15 to-slate-900/30" />

        <div className="relative mx-auto max-w-5xl px-4 lg:px-6 py-4 lg:py-6 w-full">
          <div className="mx-auto max-w-6xl text-center">
            
            {/* Badge compacto */}
            <motion.div 
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white/90 shadow-sm shadow-blue-500/10 mb-4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="w-1 h-1 rounded-full bg-blue-400 mr-1.5 animate-pulse"></div>
              ✨ Líderes en Seguridad Industrial
            </motion.div>
            
            {/* Título Principal Compacto */}
            <motion.h1 
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 leading-none"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <motion.span 
                className="text-white block drop-shadow-2xl"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              >
                ¿Quiénes
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent block drop-shadow-2xl"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              >
                Somos?
              </motion.span>
            </motion.h1>

            {/* Logo compacto */}
            <motion.div 
              className="flex justify-center mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
            >
              <motion.img
                src="/iscor-logo-completo.png"
                alt="ISCOR S.A.S"
                className="h-24 sm:h-28 lg:h-32 w-auto drop-shadow-md"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2, ease: 'easeOut' }
                }}
              />
            </motion.div>
            
            {/* Tagline compacto */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3, ease: 'easeOut' }}
            >
              <motion.p 
                className="text-sm md:text-base text-blue-300 font-bold tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4, ease: 'easeOut' }}
              >
                INGENIERÍA DE SEGURIDAD Y CONTROL DE RIESGOS
              </motion.p>
              
              <motion.p 
                className="text-xs md:text-sm text-slate-300 font-semibold tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5, ease: 'easeOut' }}
              >
                cultura preventiva
              </motion.p>
              
              <motion.p 
                className="text-xs text-cyan-300 font-light italic tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6, ease: 'easeOut' }}
              >
                &ldquo;Ingeniería de Seguridad y Control de Riesgos S.A.S&rdquo;
              </motion.p>
            </motion.div>
            
            {/* Indicador de scroll ampliado */}
            <motion.div 
              className="absolute bottom-6 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                className="w-4 h-6 border border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/5"
                animate={{ 
                  y: [0, 6, 0],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <motion.div 
                  className="w-0.5 h-2 bg-white/70 rounded-full mt-1"
                  animate={{ 
                    y: [0, 8, 0],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Diseño Moderno y Profesional */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        {/* Background Pattern Sutil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Título de la Sección */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Sobre Nosotros
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Conoce más sobre nuestra empresa, experiencia y compromiso con la excelencia en seguridad industrial
            </p>
          </motion.div>

          {/* Grid de Tarjetas Responsivo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Descripción General */}
            <motion.div 
              className="group bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BuildingOffice2Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Descripción General
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  ISCOR S.A.S &ldquo;Ingeniería de Seguridad y Control de Riesgos S.A.S&rdquo; es una empresa creada para atender y ayudar a diferentes compañías en Seguridad Industrial y atención de emergencias.
                </p>
              </div>
            </motion.div>

            {/* Certificaciones y Membresías */}
            <motion.div 
              className="group bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  Certificaciones y Membresías
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  ISCOR es miembro del CCS – Consejo Colombiano de Seguridad y NFPA – National Fire Protection Association, organización internacional líder en protección y seguridad.
                </p>
              </div>
            </motion.div>

            {/* Servicios Principales */}
            <motion.div 
              className="group bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CogIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  Servicios Principales
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Diseñamos, implementamos y auditamos sus Sistemas de Gestión para la Seguridad y Salud de los Trabajadores SGSST y proveemos todos los complementos exigidos por la ley.
                </p>
              </div>
            </motion.div>

            {/* Experiencia y Posicionamiento */}
            <motion.div 
              className="group bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrophyIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  Experiencia y Posicionamiento
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Nuestra experiencia de más de 18 años en control de tareas de alto riesgo, nos ha posicionado con las mejores empresas de nuestro país.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misión y Visión - Diseño Premium y Profesional */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Patrón de fondo sutil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Título Principal Impactante */}
          <motion.div 
            className="mx-auto max-w-3xl text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 text-xs font-semibold mb-6 shadow-sm">
              Nuestro Propósito
            </div>
            
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 mb-4">
              Misión y Visión
            </h2>
            
            <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
              Los principios fundamentales que guían nuestro trabajo y definen nuestro futuro en la industria de la seguridad industrial.
            </p>
          </motion.div>
          
          {/* Grid de Tarjetas Premium */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Misión */}
            <motion.div 
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-transform duration-300 ease-out hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  <FlagIcon className="h-8 w-8 text-white" />
              </div>
              
                <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">
                  Misión
              </h3>
              
                <p className="text-sm leading-relaxed text-gray-700">
                ISCOR S.A.S se dedica a la aplicación de servicios eficientes de consultoría, asesoría y capacitación bajo los más altos estándares nacionales e internacionales actualizados, trabajando por el desarrollo integral de la sociedad, brindando asesoría y capacitación a la comunidad en todo lo relacionado con la prevención y atención de desastres, la seguridad, la salud ocupacional y los Sistemas de Gestión para Seguridad y Salud de los Trabajadores SGSST.
              </p>
            </div>
            </motion.div>

            {/* Visión */}
            <motion.div 
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-transform duration-300 ease-out hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  <EyeIcon className="h-8 w-8 text-white" />
              </div>
              
                <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300 uppercase tracking-wide">
                  Visión
              </h3>
              
                <p className="text-sm leading-relaxed text-gray-700">
                  Para el año 2025, Ingeniería de Seguridad y Control de Riesgos S.A.S se proyecta como una empresa sólida, de vanguardia, con reconocimiento nacional e internacional, servidora de soluciones económicas y eficaces en materia de seguridad integral, siendo una empresa líder en la región en todo lo relacionado con la seguridad, la salud ocupacional y los Sistemas de Gestión para la Seguridad y Salud de los Trabajadores SGSST, generando en la comunidad una cultura de prevención.
              </p>
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lo que nos hace diferentes - Diseño Ultra Profesional y Premium */}
      <section className="relative py-24 md:py-28 px-4 overflow-hidden">
        {/* Fondo Premium con Degradado Profundo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3A] via-[#0F2B5C] to-[#0A1E3A]"></div>
        
        {/* Patrón SVG Sutil para Profundidad */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Gradient Edges - Luz Ambiental */}
        <div className="absolute left-0 top-0 w-96 h-full bg-gradient-to-r from-blue-500/10 to-transparent blur-3xl"></div>
        <div className="absolute right-0 top-0 w-96 h-full bg-gradient-to-l from-purple-500/10 to-transparent blur-3xl"></div>

        {/* Radial Highlight detrás del título */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-radial from-white/5 via-white/2 to-transparent rounded-full blur-2xl"></div>

        <div className="relative mx-auto max-w-7xl">
          {/* Encabezado con Animación */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* Etiqueta Superior (Pill) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-wide text-white/80 backdrop-blur mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              Nuestras Fortalezas
            </div>
            
            {/* Título Principal */}
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white text-center mb-4">
              Lo que nos hace diferentes
            </h2>
            
            {/* Subtítulo */}
            <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto mt-4 text-center leading-relaxed">
              Experiencia, profesionalismo y compromiso con la excelencia en cada proyecto.
            </p>
          </motion.div>

          {/* Línea Fina con Gradiente */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent mb-12"></div>
          
          {/* Grid de Features con Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: 'Sistemas de Gestión',
                description: 'Diseñamos, Implementamos y auditamos sus Sistemas de Gestión para la Seguridad y Salud de los Trabajadores SGSST.',
                gradient: 'from-blue-500 to-cyan-500',
                glowGradient: 'from-blue-400/20 to-cyan-400/20',
                icon: ChartBarIcon
              },
              {
                name: 'Miembro del CCS',
                description: 'Miembro del CCS – Consejo Colombiano de Seguridad y NFPA – National Fire Protection Association.',
                gradient: 'from-green-500 to-emerald-500',
                glowGradient: 'from-green-400/20 to-emerald-400/20',
                icon: UserGroupIcon
              },
              {
                name: '18+ Años de Experiencia',
                description: 'Más de 18 años en control de tareas de alto riesgo, posicionándonos con las mejores empresas del país.',
                gradient: 'from-purple-500 to-violet-500',
                glowGradient: 'from-purple-400/20 to-violet-400/20',
                icon: TrophyIcon
              },
            ].map((feature, index) => (
              <motion.div 
                key={feature.name}
                className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.65)] transition-all duration-300 hover:translate-y-[-6px] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              >
                {/* Borde con Glow Sutil al Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.glowGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}></div>
                
                {/* Icon Badge */}
                <div className="size-14 grid place-content-center rounded-2xl shadow-inner bg-gradient-to-br from-white/20 to-white/0 border border-white/20 backdrop-blur mb-6">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <feature.icon className="h-5 w-5 text-white opacity-90" />
                  </div>
                </div>
                
                {/* Título con Subrayado Animado */}
                <h3 className="mt-6 text-xl font-bold text-white relative group-hover:text-blue-300 transition-colors duration-300">
                  {feature.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-300`}></span>
                </h3>
                
                {/* Texto */}
                <p className="mt-3 text-sm leading-7 text-white/75">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Opcional Discreto */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="rounded-full bg-white text-[#0F2B5C] hover:bg-white/90 font-semibold px-6 py-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
              Conocer más
            </button>
          </motion.div>
        </div>
      </section>

      {/* Nuestros Valores - Diseño Premium Corporativo */}
      <section className="relative py-24 md:py-28 px-4 overflow-hidden">
        {/* Fondo Sutil con Degradado Limpio */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white"></div>
        
        {/* Patrón SVG Muy Tenue para Profundidad */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Radial Highlight detrás del título */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-radial from-blue-200/40 to-transparent blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl">
          {/* Encabezado con Píldora Glass */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* Píldora Estilo Glass */}
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-4 py-1 text-xs tracking-wide text-gray-700 backdrop-blur mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              Nuestros Valores
            </div>
            
            {/* Título Central Fuerte */}
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 text-center mb-4">
              Los principios que nos guían
            </h2>
            
            {/* Subtítulo */}
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-4 text-center leading-relaxed">
              Excelencia, compromiso e innovación en todo lo que hacemos.
            </p>
          </motion.div>
          
          {/* Grid de Tarjetas Premium */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: 'Excelencia',
                description: 'Nos esforzamos por la perfección en cada proyecto y en cada interacción con nuestros clientes.',
                colorChip: 'from-[#FF7A18] to-[#FFB547]',
                glowGradient: 'from-orange-400/20 to-yellow-400/20',
                icon: StarIcon
              },
              {
                name: 'Compromiso',
                description: 'Nos dedicamos completamente a cada proyecto hasta alcanzar los objetivos establecidos.',
                colorChip: 'from-[#FF2D74] to-[#FF6FB2]',
                glowGradient: 'from-pink-400/20 to-rose-400/20',
                icon: HeartIcon
              },
              {
                name: 'Innovación',
                description: 'Buscamos constantemente nuevas formas de resolver desafíos y mejorar nuestros servicios.',
                colorChip: 'from-[#2E7CF6] to-[#00C2FF]',
                glowGradient: 'from-blue-400/20 to-cyan-400/20',
                icon: LightBulbIcon
              },
            ].map((value, index) => (
              <motion.div
                key={value.name}
                className="group relative rounded-3xl border border-gray-200/70 bg-white/70 backdrop-blur-xl p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:translate-y-[-6px] hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.07 }}
              >
                {/* Borde Externo Glow al Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${value.glowGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}></div>
                
                {/* Icon Badge con Chip de Color */}
                <div className="relative size-14 grid place-content-center rounded-2xl border border-white/30 bg-gradient-to-br from-white/60 to-white/20 shadow-inner mb-6">
                  {/* Chip de Color detrás del icono */}
                  <div className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${value.colorChip}`}></div>
                  <value.icon className="h-6 w-6 text-white group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
                </div>
                
                {/* Título con Subrayado Animado */}
                <h3 className="mt-6 text-xl font-bold text-gray-900 relative group-hover:text-blue-600 transition-colors duration-300">
                  {value.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${value.colorChip} group-hover:w-full transition-all duration-300`}></span>
                </h3>
                
                {/* Texto */}
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Opcional Discreto */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button className="rounded-full bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50">
              Conocer más sobre nuestra cultura
            </button>
          </motion.div>
        </div>
      </section>

      {/* Métricas - Diseño Profesional, Premium y Moderno */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Fondo con Degradado Elegante */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E3A] via-[#0F2B5C] to-[#0A1E3A]"></div>
        
        {/* Patrón SVG Sutil para Textura Premium */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Glow Ambiental en Bordes Laterales */}
        <div className="absolute left-0 top-0 w-96 h-full bg-gradient-to-r from-blue-500/10 to-transparent blur-3xl"></div>
        <div className="absolute right-0 top-0 w-96 h-full bg-gradient-to-l from-purple-500/10 to-transparent blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Línea Divisoria Superior */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
          
          {/* Título Opcional */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white mb-3">
              Nuestros Logros
            </h2>
            <p className="text-white/70 text-center max-w-xl mx-auto text-sm md:text-base">
              Cifras que respaldan nuestra experiencia y compromiso con la excelencia
            </p>
          </motion.div>

          {/* Grid de Métricas con Cards Invisibles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { 
                number: 18, 
                suffix: '+', 
                label: 'Años de Experiencia', 
                icon: ClockIcon,
                description: 'Liderando el sector desde 2005'
              },
              { 
                number: 500, 
                suffix: '+', 
                label: 'Empresas Atendidas', 
                icon: BuildingOfficeIcon,
                description: 'En todo el territorio nacional'
              },
              { 
                number: 10000, 
                suffix: '+', 
                label: 'Certificaciones Emitidas', 
                icon: DocumentCheckIcon,
                description: 'Con programas especializados'
              },
              { 
                number: 50, 
                suffix: '+', 
                label: 'Instructores Certificados', 
                icon: AcademicCapIcon,
                description: 'Profesionales altamente capacitados'
              }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Contenedor Circular con Gradiente Suave */}
                <div className="h-10 w-10 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20 backdrop-blur mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <stat.icon className="text-white text-lg" />
                </div>
                
                {/* Número con Animación de Contador */}
                <motion.div 
                  className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <CounterAnimation target={stat.number} suffix={stat.suffix} />
                </motion.div>
                
                {/* Texto Descriptivo */}
                <div className="mt-2 text-xs font-medium text-white/80">
                  {stat.label}
                </div>
                
                {/* Descripción Adicional */}
                <div className="mt-1 text-xs text-white/60">
                  {stat.description}
              </div>
              </motion.div>
            ))}
          </div>

          {/* Línea Divisoria Inferior */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-8"></div>
        </div>
      </section>

      {/* Nuestros Clientes - Componente Premium */}
      <ClientesSection />

      {/* Contact CTA - Diseño Ultra Premium Corporativo */}
      <section className="relative py-16 md:py-20 px-4 overflow-hidden">
        {/* Fondo Ultra Premium Multi-Capa */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
        
        {/* Patrón geométrico sutil */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
            </div>
        
        {/* Glow radial premium */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)] blur-3xl" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-500/10 via-transparent to-transparent blur-3xl" />
        
        {/* Overlay sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-blue-50/20 dark:via-slate-800/10 dark:to-slate-900/20" />

        <div className="relative mx-auto max-w-7xl">
          {/* Encabezado Ultra Premium */}
          <motion.div 
            className="mx-auto max-w-4xl text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Píldora Premium con Glow */}
            <motion.div 
              className="inline-flex items-center rounded-full border border-blue-200/50 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-medium text-blue-700 shadow-lg shadow-blue-500/10 mb-6 dark:border-blue-400/30 dark:bg-slate-800/90 dark:text-blue-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
              ✨ Contáctanos
            </motion.div>
            
            {/* Título Principal con Gradiente */}
            <motion.h2 
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-center bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-4 dark:from-slate-100 dark:via-blue-100 dark:to-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              ¿Listo para trabajar con nosotros?
            </motion.h2>
            
            {/* Subtítulo Premium */}
            <motion.p 
              className="text-base md:text-lg text-gray-600 text-center max-w-2xl mx-auto leading-relaxed dark:text-slate-400"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Nuestro equipo de expertos está listo para ayudarte a implementar las mejores prácticas de seguridad industrial en tu empresa.
            </motion.p>
          </motion.div>
          
          {/* Separador Animado */}
          <motion.div 
            className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-blue-300 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          />
          
          {/* Grid de Tarjetas Ultra Premium */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                title: '¿Alguna pregunta?',
                description: 'Llámanos',
                icon: PhoneIcon,
                href: '#',
                color: '#3B82F6',
                glowColor: 'from-blue-400/20 to-blue-600/10',
                bgGradient: 'from-blue-50 to-blue-100/50',
                onClick: () => setIsCallModalOpen(true)
              },
              {
                title: 'Programe una cita',
                description: 'Con nosotros',
                icon: CalendarIcon,
                href: '#',
                color: '#22C55E',
                glowColor: 'from-green-400/20 to-green-600/10',
                bgGradient: 'from-green-50 to-green-100/50',
                onClick: () => setIsAppointmentModalOpen(true)
              },
              {
                title: 'La Empresa',
                description: 'Conozca más sobre ISCOR',
                icon: BuildingOfficeIcon,
                href: '/la-empresa',
                color: '#8B5CF6',
                glowColor: 'from-violet-400/20 to-violet-600/10',
                bgGradient: 'from-violet-50 to-violet-100/50'
              }
            ].map((action, index) => (
              <motion.div
                key={action.title}
                className="group relative"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.8 + (index * 0.1), 
                  ease: 'easeOut',
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
              >
                {/* Card con Glassmorphism Premium */}
                {action.onClick ? (
                  <button
                    onClick={action.onClick}
                    className="relative w-full rounded-2xl border border-white/20 bg-white/80 backdrop-blur-xl p-6 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 dark:bg-slate-800/40 dark:border-slate-700/50 text-left"
                  >
                    {/* Borde con Glow */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${action.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Fondo con gradiente sutil */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${action.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative">
                      {/* Icon Badge Premium */}
                      <div className="size-12 grid place-content-center rounded-xl border border-white/40 bg-gradient-to-br from-white/70 to-white/30 shadow-inner mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <action.icon className="h-6 w-6" style={{ color: action.color }} />
                      </div>
                      
                      {/* Título de la Card */}
                      <h3 className="text-lg font-bold text-slate-900 mb-2 dark:text-slate-100">
                        {action.title}
                      </h3>
                      
                      {/* Descripción */}
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {action.description}
                      </p>
                      
                      {/* Efecto de partículas en hover */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500" />
                        <div className="absolute top-6 right-6 w-1 h-1 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-100" />
                        <div className="absolute bottom-6 left-6 w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-200" />
                      </div>
                    </div>
                  </button>
                ) : (
                  <Link
                    href={action.href}
                    className="relative block rounded-2xl border border-white/20 bg-white/80 backdrop-blur-xl p-6 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 dark:bg-slate-800/40 dark:border-slate-700/50"
                  >
                    {/* Borde con Glow */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${action.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Fondo con gradiente sutil */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${action.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative">
                      {/* Icon Badge Premium */}
                      <div className="size-12 grid place-content-center rounded-xl border border-white/40 bg-gradient-to-br from-white/70 to-white/30 shadow-inner mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <action.icon className="h-6 w-6" style={{ color: action.color }} />
                      </div>
                      
                      {/* Título de la Card */}
                      <h3 className="text-lg font-bold text-slate-900 mb-2 dark:text-slate-100">
                        {action.title}
                      </h3>
                      
                      {/* Descripción */}
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {action.description}
                      </p>
                      
                      {/* Efecto de partículas en hover */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500" />
                        <div className="absolute top-6 right-6 w-1 h-1 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-100" />
                        <div className="absolute bottom-6 left-6 w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-200" />
                      </div>
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
          
          {/* Botón Principal CTA Ultra Premium */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link
              href="/contacto"
              className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-10 py-4 text-white font-bold text-lg shadow-2xl shadow-blue-600/30 hover:shadow-3xl hover:shadow-blue-600/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 transition-all duration-500 hover:scale-105 hover:from-blue-700 hover:to-blue-800"
              aria-label="Contactar ahora para trabajar con nosotros"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              
              <span className="relative">Contactar Ahora</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modal de llamada */}
      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        phoneNumber="3148070853"
      />

      {/* Modal de citas */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </div>
  );
}
