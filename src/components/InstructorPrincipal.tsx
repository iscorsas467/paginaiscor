'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  UserIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  FireIcon,
  HeartIcon,
  BoltIcon,
  CheckCircleIcon,
  BriefcaseIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const certifications = [
  {
    name: 'Ingeniero Contra Incendios NFPA',
    icon: FireIcon,
    image: '/nfpa.jpg',
    description: 'Certificación internacional en protección contra incendios'
  },
  {
    name: 'Profesional en Salud Ocupacional',
    icon: HeartIcon,
    description: 'Especialización en salud y seguridad ocupacional'
  },
  {
    name: 'Instructor Internacional NAUI',
    icon: GlobeAltIcon,
    image: '/NAUI.png',
    description: 'National Association of Underwater Instructors'
  },
  {
    name: 'Instructor BLS Emergency First Response',
    icon: ShieldCheckIcon,
    description: 'Primeros auxilios y reanimación básica'
  }
];


const affiliations = [
  {
    name: 'CCS',
    fullName: 'Consejo Colombiano de Seguridad',
    icon: ShieldCheckIcon,
    image: '/CCS.png',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    name: 'NFPA',
    fullName: 'National Fire Protection Association',
    icon: FireIcon,
    image: '/nfpa.jpg',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    name: 'NAUI',
    fullName: 'National Association of Underwater Instructors',
    icon: GlobeAltIcon,
    image: '/NAUI.png',
    gradient: 'from-blue-500 to-blue-600'
  }
];

export default function InstructorPrincipal() {
  return (
    <section className="pt-8 pb-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-8"
          >
            <BriefcaseIcon className="h-5 w-5 mr-3" />
            Director General
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8"
          >
            Juan Fernando Aldana
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-black leading-relaxed mb-8"
          >
            Director General de ISCOR con <span className="font-bold">20 años de experiencia</span> en Ingeniería Industrial, 
            especializado en <span className="font-bold">seguridad integral</span>, 
            <span className="font-bold">seguridad física</span> y 
            <span className="font-bold">sistemas de gestión en SST</span>. 
            Instructor de seguridad operacional y recuperación de personal en SAR (Search and Rescue) para el suroccidente colombiano.
          </motion.p>
        </div>

        {/* Director Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Imagen del Director */}
            <div className="relative h-96 lg:h-auto">
              <Image
                src="/Dave.jpg"
                alt="Juan Fernando Aldana - Director General de ISCOR"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Información del Director */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Director General</h3>
                <p className="text-lg text-blue-600 font-semibold">Juan Fernando Aldana</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <TrophyIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">20+ Años de Experiencia</p>
                    <p className="text-sm text-slate-600">Ingeniería Industrial y Seguridad</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <ShieldCheckIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Especialista en Seguridad</p>
                    <p className="text-sm text-slate-600">Industrial, Física y SST</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <GlobeAltIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Instructor Internacional</p>
                    <p className="text-sm text-slate-600">SAR Search and Rescue</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                <p className="text-slate-700 leading-relaxed">
                  "Nuestra misión en ISCOR es proporcionar formación de excelencia en seguridad integral, 
                  contribuyendo al desarrollo de profesionales altamente capacitados y al fortalecimiento 
                  de la cultura de prevención en las organizaciones."
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certificaciones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center flex items-center justify-center">
            <AcademicCapIcon className="h-6 w-6 mr-3 text-blue-600" />
            Certificaciones del Director
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {cert.image ? (
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <cert.icon className="h-8 w-8 text-white" />
                    </div>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {cert.name}
                </h4>
                <p className="text-slate-600 text-sm">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Especialidades */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Especialidades del Director
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Diseño e implementación de programas de control de riesgos',
              'Auditoría de programas para control de pérdidas',
              'Diseño de redes contra incendios',
              'Seguridad en tareas de alto riesgo',
              'Operación segura de montacargas y maquinaria pesada',
              'Operación de grúas para izaje de cargas',
              'Seguridad en trabajos con energías peligrosas',
              'Buceo recreativo internacional NAUI y rescate acuático',
              'Supervivencia para tripulaciones aéreas de combate'
            ].map((specialty, index) => (
              <motion.div
                key={specialty}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-slate-200"
              >
                <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700 text-sm font-medium">
                  {specialty}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Afiliaciones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Afiliaciones y Reconocimientos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
            {affiliations.map((affiliation, index) => (
              <motion.div
                key={affiliation.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {affiliation.image ? (
                    <Image
                      src={affiliation.image}
                      alt={affiliation.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className={`w-16 h-16 bg-gradient-to-r ${affiliation.gradient} rounded-full flex items-center justify-center`}>
                      <affiliation.icon className="h-8 w-8 text-white" />
                    </div>
                  )}
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{affiliation.name}</h4>
                <p className="text-sm text-slate-600">{affiliation.fullName}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
