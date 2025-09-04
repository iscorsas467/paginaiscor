'use client';

import Image from 'next/image';
import { 
  ShieldCheckIcon, 
  ArrowRightIcon, 
  CheckCircleIcon,
  ClockIcon,
  CogIcon,
  GlobeAltIcon,
  TrophyIcon,
  UserIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

interface Service {
  name: string;
  slug: string;
  image: string;
  description: string;
  duration: string;
  certification: string;
  gradient: string;
  icon: any;
}



export default function Portafolio() {

  const services = [
    { 
      name: 'Montacargas',
      slug: 'montacargas',
      image: '/montacargas .png',
      description: 'Capacitación y certificación en operación segura de montacargas, cumpliendo normativas de seguridad industrial.',
      duration: '40 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-orange-600 to-red-600',
      icon: CogIcon
    },
    { 
      name: 'Control del Fuego',
      slug: 'control-del-fuego',
      image: '/fuego.png',
      description: 'Sistemas de prevención, detección y extinción de incendios con equipos certificados y personal capacitado.',
      duration: '32 horas',
      certification: 'Certificado válido por 3 años',
      gradient: 'from-red-600 to-orange-600',
      icon: ShieldCheckIcon
    },
    { 
      name: 'Planes de emergencia',
      slug: 'planes-de-emergencia',
      image: '/plandeemergencia.png',
      description: 'Desarrollo e implementación de planes de emergencia y evacuación adaptados a cada empresa.',
      duration: '24 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-yellow-600 to-orange-600',
      icon: ShieldCheckIcon
    },
    { 
      name: 'Brigada de emergencia',
      slug: 'brigada-de-emergencia',
      image: '/brigada_de_emergencia.png',
      description: 'Formación y entrenamiento de brigadas de emergencia para respuesta rápida ante incidentes.',
      duration: '48 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-red-600 to-pink-600',
      icon: UserIcon
    },
    { 
      name: 'Materiales Peligrosos',
      slug: 'materiales-peligrosos',
      image: '/materiales_peligrosos.png',
      description: 'Manejo seguro de materiales peligrosos, almacenamiento y transporte según normativas vigentes.',
      duration: '40 horas',
      certification: 'Certificado válido por 3 años',
      gradient: 'from-yellow-600 to-orange-600',
      icon: GlobeAltIcon
    },
    { 
      name: 'Tareas de alto riesgo',
      slug: 'tareas-de-alto-riesgo',
      image: '/tareas_de_alto_riesgo.png',
      description: 'Supervisión y control de trabajos en altura, espacios confinados y otras tareas de alto riesgo.',
      duration: '56 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-purple-600 to-indigo-600',
      icon: ShieldCheckIcon
    },
    { 
      name: 'Seguridad acuática',
      slug: 'seguridad-acuatica',
      image: '/seguridad_acuatica.png',
      description: 'Protocolos de seguridad para trabajos en entornos acuáticos y actividades subacuáticas.',
      duration: '32 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-blue-600 to-cyan-600',
      icon: ShieldCheckIcon
    },
    { 
      name: 'Seguridad fisica',
      slug: 'seguridad-fisica',
      image: '/seguridad_fisica.png',
      description: 'Implementación de medidas de seguridad física y control de acceso en instalaciones industriales.',
      duration: '24 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-gray-600 to-slate-600',
      icon: ShieldCheckIcon
    },
    { 
      name: 'Primeros auxilios',
      slug: 'primeros-auxilios',
      image: '/primeros_auxilios.png',
      description: 'Capacitación en primeros auxilios y atención prehospitalaria para emergencias médicas.',
      duration: '16 horas',
      certification: 'Certificado válido por 1 año',
      gradient: 'from-green-600 to-emerald-600',
      icon: CheckCircleIcon
    },
    { 
      name: 'Gestión de calidad',
      slug: 'gestion-de-calidad',
      image: '/control_de_calidad.png',
      description: 'Sistemas de gestión de calidad ISO 9001 y auditorías para optimizar procesos empresariales.',
      duration: '40 horas',
      certification: 'Certificado válido por 3 años',
      gradient: 'from-blue-600 to-cyan-600',
      icon: TrophyIcon
    },
    { 
      name: 'Inspecciones certificadas',
      slug: 'inspecciones-certificadas',
      image: '/inspecciones_certificadas.png',
      description: 'Inspecciones técnicas certificadas de equipos, instalaciones y cumplimiento normativo.',
      duration: '24 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-indigo-600 to-purple-600',
      icon: CheckCircleIcon
    },
    { 
      name: 'Reintegro laboral',
      slug: 'reintegro-laboral',
      image: '/reintegro_laboral.png',
      description: 'Programas de reintegro laboral y adaptación de puestos de trabajo para trabajadores lesionados.',
      duration: '16 horas',
      certification: 'Certificado válido por 1 año',
      gradient: 'from-green-600 to-teal-600',
      icon: UserIcon
    },
    { 
      name: 'Alturas',
      slug: 'alturas',
      image: '/alturas.png',
      description: 'Capacitación y certificación en trabajos en altura con equipos de protección personal.',
      duration: '40 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-orange-600 to-red-600',
      icon: BuildingOfficeIcon
    },
    { 
      name: 'Lockout tagout',
      slug: 'lockout-tagout',
      image: '/Lockout_tagout.png',
      description: 'Procedimientos de bloqueo y etiquetado para mantenimiento seguro de equipos energizados.',
      duration: '24 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-slate-600 to-gray-600',
      icon: CogIcon
    },
    { 
      name: 'Espacios confinados',
      slug: 'espacios-confinados',
      image: '/Espacios_confinados.png',
      description: 'Entrenamiento y supervisión para trabajos en espacios confinados con protocolos de seguridad.',
      duration: '40 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-purple-600 to-indigo-600',
      icon: CogIcon
    },
    { 
      name: 'Buceo',
      slug: 'buceo',
      image: '/buceo.png',
      description: 'Servicios de buceo industrial y comercial con equipos certificados y personal especializado.',
      duration: '80 horas',
      certification: 'Certificado válido por 3 años',
      gradient: 'from-blue-600 to-cyan-600',
      icon: GlobeAltIcon
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Estilo IBM/Cisco Profesional */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Background Pattern - Estilo Siemens */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Geometric Shapes - Estilo GE/Boeing */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rotate-45"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 transform rotate-12"></div>
          <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-white/10 transform -rotate-45"></div>
        </div>

        {/* Gradient Overlay - Estilo Lockheed Martin */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/60 to-slate-900/80"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge - Estilo Cisco */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
              <ShieldCheckIcon className="h-5 w-5 mr-3" />
              Servicios Profesionales
            </div>
            
            {/* Main Heading - Estilo IBM */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
              <span className="text-white">Nuestros</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Servicios</span>
            </h1>

            {/* Subtitle - Estilo Siemens */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Módulos especializados en seguridad industrial y control de riesgos. 
              Más de 16 servicios profesionales para proteger a tu equipo y cumplir con las normativas de seguridad.
            </p>

            {/* Stats - Estilo Boeing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">16+</div>
                <div className="text-sm text-gray-300 font-medium">Servicios Especializados</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-sm text-gray-300 font-medium">Cumplimiento Normativo</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-sm text-gray-300 font-medium">Soporte Técnico</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Estilo Siemens Profesional */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Background Pattern - Estilo IBM */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
              <CogIcon className="h-5 w-5 mr-3" />
              Soluciones Integrales
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Servicios de Seguridad Industrial
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Ofrecemos una gama completa de servicios especializados para proteger a su empresa y cumplir con las normativas de seguridad industrial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.name}
                className="group bg-white rounded-2xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                                 {/* Image container */}
                 <div className="w-16 h-16 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                   <Image
                     src={service.image}
                     alt={service.name}
                     width={64}
                     height={64}
                     className="w-full h-full object-cover"
                   />
                 </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.name}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                {/* Details */}
                <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                  <span className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-2" />
                    {service.duration}
                  </span>
                  <span className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 mr-2" />
                    {service.certification}
                  </span>
                </div>

                                 {/* CTA Button */}
                 <Link
                   href={`/servicios/${service.slug}`}
                   className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg group-hover:shadow-xl flex items-center justify-center"
                 >
                   Más Información
                   <ArrowRightIcon className="ml-2 h-5 w-5" />
                 </Link>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section - Estilo Lockheed Martin Profesional */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/10 rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white/10 transform rotate-12"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
              <ShieldCheckIcon className="h-5 w-5 mr-3" />
              Comienza Hoy
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              ¿Listo para implementar una cultura de seguridad?
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a proteger a tu equipo y cumplir con las normativas de seguridad industrial.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href="/contacto"
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center text-lg">
                  Contactar Ahora
                  <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
              
              <Link
                href="/la-empresa"
                className="px-10 py-5 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-lg"
              >
                Conoce Nuestra Empresa
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
