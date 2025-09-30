'use client';

import { useState } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  LinkIcon,
  GlobeAltIcon,
  CommandLineIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  TrophyIcon,
  StarIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  CogIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import InstructorPrincipal from '@/components/InstructorPrincipal';
import CallModal from '@/components/CallModal';

// Equipo real - se agregará información real cuando esté disponible
const team = [];

const departments = [
  {
    name: 'Capacitación',
    description: '29 cursos especializados en seguridad industrial',
    members: 29,
    icon: AcademicCapIcon,
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    name: 'Certificaciones',
    description: 'Certificaciones internacionales y reconocimientos',
    members: 4,
    icon: TrophyIcon,
    gradient: 'from-blue-600 to-blue-700'
  },
  {
    name: 'Consultoría',
    description: 'Experiencia en múltiples sectores industriales',
    members: 20,
    icon: ShieldCheckIcon,
    gradient: 'from-blue-600 to-blue-700'
  },
  {
    name: 'Operaciones',
    description: 'Supervisión de trabajos de alto riesgo',
    members: 15,
    icon: CogIcon,
    gradient: 'from-blue-600 to-blue-700'
  },
];

export default function NuestroEquipo() {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

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
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-16 lg:pt-24 lg:pb-20">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge - Estilo Cisco */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-4">
              <UserGroupIcon className="h-5 w-5 mr-3" />
              Nuestro Equipo
            </div>
            
            {/* Main Heading - Estilo IBM */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
              <span className="text-white">Nuestro Equipo</span>
            </h1>

            {/* Subtitle - Estilo Siemens */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Conoce a los profesionales apasionados que hacen posible la excelencia en seguridad industrial y control de riesgos.
            </p>

            {/* Stats - Estilo Boeing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">20+</div>
                <div className="text-sm text-gray-300 font-medium">Años de Experiencia</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">29</div>
                <div className="text-sm text-gray-300 font-medium">Cursos Especializados</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-sm text-gray-300 font-medium">Compromiso con la Seguridad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Principal */}
      <InstructorPrincipal />


      {/* Departments Section - Estilo Boeing Profesional */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
              <BuildingOfficeIcon className="h-5 w-5 mr-3" />
              Nuestros Departamentos
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Especialización por Áreas
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Cada departamento cuenta con profesionales especializados para brindar servicios de máxima calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept, index) => (
              <div
                key={dept.name}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${dept.gradient} rounded-2xl shadow-lg mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <dept.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">{dept.name}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{dept.description}</p>
                <p className="text-3xl font-bold text-blue-400">{dept.members}+</p>
                <p className="text-sm text-gray-400">Miembros</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Join Us Section - Diseño Blanco Moderno */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern Sutil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10zm0 0c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Elementos Decorativos Sutiles */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-32 h-32 border border-gray-100 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-gray-100 rotate-45"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-gray-100 transform rotate-12"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge Moderno */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 text-blue-800 text-sm font-semibold mb-8 shadow-sm">
              <StarIcon className="h-5 w-5 mr-3 text-blue-600" />
              Únete a Nosotros
            </div>
            
            {/* Título Principal */}
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              ¿Te gustaría unirte a nuestro equipo?
            </h2>
            
            {/* Descripción */}
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              Buscamos profesionales apasionados por la seguridad industrial que quieran formar parte de un equipo dinámico y en crecimiento.
            </p>
            
            {/* Tarjeta de Acción */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 shadow-xl border border-gray-100 max-w-2xl mx-auto mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <UserGroupIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Oportunidades de Carrera</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Únete a un equipo de expertos en seguridad industrial y contribuye a crear entornos de trabajo más seguros en Colombia.
              </p>
              
              {/* Botones de Acción */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsCallModalOpen(true);
                  }}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span className="flex items-center text-lg">
                    Contactar
                    <ArrowRightIcon className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </a>
                
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=director@iscorcolombia.com&su=Aplicación Laboral - ISCOR Colombia&body=Estimado Director,%0D%0A%0D%0AMe dirijo a usted para expresar mi interés en formar parte del equipo de ISCOR Colombia.%0D%0A%0D%0AInformación Personal:%0D%0A- Nombre Completo: [Su nombre completo]%0D%0A- Profesión: [Su profesión]%0D%0A- Años de Experiencia: [Años de experiencia]%0D%0A- Área de Especialización: [Seguridad Industrial, Capacitación, Gestión de Riesgos, etc.]%0D%0A%0D%0AExperiencia Relevante:%0D%0A[Describa brevemente su experiencia en seguridad industrial, capacitación o gestión de riesgos]%0D%0A%0D%0ACertificaciones:%0D%0A[Liste sus certificaciones relevantes]%0D%0A%0D%0ADisponibilidad:%0D%0A- Fecha de inicio: [Fecha disponible]%0D%0A- Modalidad de trabajo: [Presencial, Remoto, Mixto]%0D%0A%0D%0AMotivación:%0D%0A[Explique por qué desea unirse a ISCOR y cómo puede contribuir al equipo]%0D%0A%0D%0AAdjunto encontrará mi hoja de vida para su consideración.%0D%0A%0D%0AEspero tener la oportunidad de una entrevista personal.%0D%0A%0D%0ASaludos cordiales,%0D%0A[Nombre]%0D%0A[Teléfono]%0D%0A[Email]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Enviar CV
                </a>
              </div>
            </div>

            {/* Beneficios del Trabajo */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrophyIcon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Crecimiento Profesional</h4>
                <p className="text-gray-600 text-sm">Oportunidades de desarrollo y certificaciones internacionales</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <ShieldCheckIcon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Impacto Social</h4>
                <p className="text-gray-600 text-sm">Contribuye a la seguridad industrial en todo el país</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <UserGroupIcon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Equipo Dinámico</h4>
                <p className="text-gray-600 text-sm">Trabaja con profesionales apasionados y expertos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de llamada */}
      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        phoneNumber="3148070853"
      />
    </div>
  );
}
