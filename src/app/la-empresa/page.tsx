'use client';

import { 
  BuildingOfficeIcon, 
  FlagIcon, 
  EyeIcon, 
  ShieldCheckIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  PhoneIcon,
  CalendarIcon,
  StarIcon,
  HeartIcon,
  LightBulbIcon,
  ArrowRightIcon,
  TrophyIcon,
  GlobeAltIcon,
  ClockIcon,
  UsersIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function LaEmpresa() {
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
              <BuildingOfficeIcon className="h-5 w-5 mr-3" />
              Nuestra Empresa
            </div>
            
            {/* Main Heading - Estilo IBM */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
              <span className="text-white">¿Quiénes</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Somos?</span>
            </h1>

            {/* Logo */}
            <div className="mt-8 flex justify-center mb-8">
              <img
                src="/iscor_texto_colores.svg"
                alt="ISCOR S.A.S"
                className="h-16 sm:h-20 lg:h-24 w-auto"
              />
            </div>
            
            {/* Subtitle - Estilo Siemens */}
            <p className="text-xl md:text-2xl text-blue-300 font-semibold italic">
              "Ingeniería de Seguridad y Control de Riesgos S.A.S"
            </p>
          </div>
        </div>
      </section>

      {/* About Section - Estilo GE Profesional */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Background Pattern - Estilo IBM */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 lg:p-12">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-100/30 rounded-3xl"></div>
              
              <div className="relative z-10 space-y-8">
                {/* Descripción General */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Descripción General</h3>
                  <p className="text-xl text-slate-700 leading-relaxed">
                    ISCOR S.A.S "Ingeniería de Seguridad y Control de Riesgos S.A.S" es una empresa creada para atender y ayudar a diferentes compañías en Seguridad Industrial y atención de emergencias y para contribuir con la divulgación de una cultura de seguridad, autocuidado y desarrollo del hombre en su entorno de trabajo.
                  </p>
                </div>
                
                {/* Servicios Principales */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Servicios Principales</h3>
                  <p className="text-xl text-slate-700 leading-relaxed">
                    Diseñamos, Implementamos y auditamos sus Sistemas de Gestión para la Seguridad y Salud de los Trabajadores SGSST y proveemos todos los complementos exigidos por la ley.
                  </p>
                </div>
                
                {/* Certificaciones */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Certificaciones y Membresías</h3>
                  <p className="text-xl text-slate-700 leading-relaxed">
                    ISCOR es miembro del CCS – Consejo Colombiano de Seguridad y NFPA – National Fire Protection Association, organización internacional líder en todo lo referente con la protección y la seguridad.
                  </p>
                </div>
                
                {/* Experiencia */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Experiencia y Posicionamiento</h3>
                  <p className="text-xl text-slate-700 leading-relaxed">
                    Nuestra experiencia de más de 18 años en control de tareas de alto riesgo, nos ha posicionado con las mejores empresas de nuestro país.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión - Estilo Siemens Profesional */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
              <FlagIcon className="h-5 w-5 mr-3" />
              Nuestro Propósito
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Misión y Visión
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Los principios fundamentales que guían nuestro trabajo y definen nuestro futuro.
            </p>
          </div>
          
          <div className="grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {/* Misión */}
            <div className="group bg-white rounded-2xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300">
                <FlagIcon className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                MISIÓN
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-lg">
                ISCOR S.A.S se dedica a la aplicación de servicios eficientes de consultoría, asesoría y capacitación bajo los más altos estándares nacionales e internacionales actualizados, trabajando por el desarrollo integral de la sociedad, brindando asesoría y capacitación a la comunidad en todo lo relacionado con la prevención y atención de desastres, la seguridad, la salud ocupacional y los Sistemas de Gestión para Seguridad y Salud de los Trabajadores SGSST.
              </p>
            </div>

            {/* Visión */}
            <div className="group bg-white rounded-2xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300">
                <EyeIcon className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-purple-600 transition-colors duration-300">
                VISIÓN
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-lg">
                Para el año 2025, Ingeniería de Seguridad y Control de Riesgos S.A.S se proyecta como una empresa sólida, de vanguardia, con reconocimiento nacional e internacional, servidora de soluciones económicas y eficaces en materia de seguridad integral, siendo una empresa líder en la región en todo lo relacionado con la seguridad, la salud ocupacional y los Sistemas de Gestion para la Seguridad y Salud de los Trabajadores SGSST, generando en la comunidad una cultura de prevención.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestras Fortalezas - Estilo Boeing Profesional */}
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
              <ShieldCheckIcon className="h-5 w-5 mr-3" />
              Nuestras Fortalezas
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Lo que nos hace diferentes
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Experiencia, profesionalismo y compromiso con la excelencia en cada proyecto.
            </p>
          </div>
          
          <div className="grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: 'Sistemas de Gestión',
                description: 'Diseñamos, Implementamos y auditamos sus Sistemas de Gestión para la Seguridad y Salud de los Trabajadores SGSST.',
                icon: ShieldCheckIcon,
                gradient: 'from-blue-600 to-cyan-600'
              },
              {
                name: 'Miembro del CCS',
                description: 'Miembro del CCS – Consejo Colombiano de Seguridad y NFPA – National Fire Protection Association.',
                icon: UserGroupIcon,
                gradient: 'from-green-600 to-emerald-600'
              },
              {
                name: '18+ Años de Experiencia',
                description: 'Más de 18 años en control de tareas de alto riesgo, posicionándonos con las mejores empresas del país.',
                icon: CheckBadgeIcon,
                gradient: 'from-purple-600 to-violet-600'
              },
            ].map((feature, index) => (
              <div 
                key={feature.name}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.name}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros Valores - Estilo GE Profesional */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-8">
              <StarIcon className="h-5 w-5 mr-3" />
              Nuestros Valores
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Los principios que nos guían
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Excelencia, compromiso e innovación en todo lo que hacemos.
            </p>
          </div>
          
          <div className="grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: 'Excelencia',
                description: 'Nos esforzamos por la perfección en cada proyecto y en cada interacción con nuestros clientes.',
                icon: StarIcon,
                gradient: 'from-yellow-600 to-orange-600'
              },
              {
                name: 'Compromiso',
                description: 'Nos dedicamos completamente a cada proyecto hasta alcanzar los objetivos establecidos.',
                icon: HeartIcon,
                gradient: 'from-red-600 to-pink-600'
              },
              {
                name: 'Innovación',
                description: 'Buscamos constantemente nuevas formas de resolver desafíos y mejorar nuestros servicios.',
                icon: LightBulbIcon,
                gradient: 'from-blue-600 to-cyan-600'
              },
            ].map((value, index) => (
              <div
                key={value.name}
                className="group bg-white rounded-2xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-2xl shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                  {value.name}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas - Estilo Lockheed Martin */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '18+', label: 'Años de Experiencia', icon: ClockIcon },
              { number: '500+', label: 'Empresas Atendidas', icon: BuildingOfficeIcon },
              { number: '10,000+', label: 'Certificaciones Emitidas', icon: TrophyIcon },
              { number: '50+', label: 'Instructores Certificados', icon: UsersIcon }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA - Estilo IBM Profesional */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
              <PhoneIcon className="h-5 w-5 mr-3" />
              Contáctanos
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              ¿Listo para trabajar con nosotros?
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              Nuestro equipo de expertos está listo para ayudarte a implementar las mejores prácticas de seguridad industrial en tu empresa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-200">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 mx-auto">
                <PhoneIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">¿Alguna pregunta?</h3>
              <p className="text-slate-600 text-center">Llámame</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-200">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6 mx-auto">
                <CalendarIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Programe una cita</h3>
              <p className="text-slate-600 text-center">Con nosotros</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-200 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6 mx-auto">
                <BuildingOfficeIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">La Empresa</h3>
              <p className="text-slate-600 text-center">Conozca más sobre ISCOR</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/contacto"
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <span className="flex items-center text-lg">
                Contactar Ahora
                <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
