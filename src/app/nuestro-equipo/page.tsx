'use client';

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

const team = [
  {
    name: 'Carlos Rodríguez',
    role: 'CEO & Fundador',
    image: '/api/placeholder/400/400',
    bio: 'Más de 18 años de experiencia en seguridad industrial. Ingeniero especializado en control de riesgos y gestión de seguridad empresarial.',
    email: 'carlos.rodriguez@iscor.com',
    phone: '+57 300 123 4567',
    linkedin: 'https://linkedin.com/in/carlos-rodriguez',
    twitter: 'https://twitter.com/carlosrodriguez',
    github: 'https://github.com/carlosrodriguez',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    name: 'Ana Martínez',
    role: 'Directora de Seguridad Industrial',
    image: '/api/placeholder/400/400',
    bio: 'Experta en sistemas de gestión de seguridad y salud ocupacional. Lidera la implementación de protocolos de seguridad avanzados.',
    email: 'ana.martinez@iscor.com',
    phone: '+57 300 123 4568',
    linkedin: 'https://linkedin.com/in/ana-martinez',
    twitter: 'https://twitter.com/anamartinez',
    github: 'https://github.com/anamartinez',
    gradient: 'from-green-600 to-emerald-600'
  },
  {
    name: 'David García',
    role: 'Director de Capacitación',
    image: '/api/placeholder/400/400',
    bio: 'Especialista en formación profesional y certificaciones de seguridad. Asegura la excelencia en todos nuestros programas de capacitación.',
    email: 'david.garcia@iscor.com',
    phone: '+57 300 123 4569',
    linkedin: 'https://linkedin.com/in/david-garcia',
    twitter: 'https://twitter.com/davidgarcia',
    github: 'https://github.com/davidgarcia',
    gradient: 'from-purple-600 to-indigo-600'
  },
  {
    name: 'María López',
    role: 'Coordinadora de Certificaciones',
    image: '/api/placeholder/400/400',
    bio: 'Responsable de la gestión y validación de certificaciones de seguridad industrial. Garantiza el cumplimiento de estándares internacionales.',
    email: 'maria.lopez@iscor.com',
    phone: '+57 300 123 4570',
    linkedin: 'https://linkedin.com/in/maria-lopez',
    twitter: 'https://twitter.com/marialopez',
    github: 'https://github.com/marialopez',
    gradient: 'from-orange-600 to-red-600'
  },
  {
    name: 'Roberto Silva',
    role: 'Supervisor de Operaciones',
    image: '/api/placeholder/400/400',
    bio: 'Experto en supervisión de trabajos de alto riesgo y control de operaciones seguras. Implementa las mejores prácticas de seguridad.',
    email: 'roberto.silva@iscor.com',
    phone: '+57 300 123 4571',
    linkedin: 'https://linkedin.com/in/roberto-silva',
    twitter: 'https://twitter.com/robertosilva',
    github: 'https://github.com/robertosilva',
    gradient: 'from-yellow-600 to-orange-600'
  },
  {
    name: 'Laura Fernández',
    role: 'Consultora de Seguridad',
    image: '/api/placeholder/400/400',
    bio: 'Especialista en auditorías de seguridad y evaluación de riesgos industriales. Desarrolla estrategias de prevención personalizadas.',
    email: 'laura.fernandez@iscor.com',
    phone: '+57 300 123 4572',
    linkedin: 'https://linkedin.com/in/laura-fernandez',
    twitter: 'https://twitter.com/laurafernandez',
    github: 'https://github.com/laurafernandez',
    gradient: 'from-pink-600 to-rose-600'
  },
];

const departments = [
  {
    name: 'Capacitación',
    description: 'Equipo de instructores certificados en seguridad industrial',
    members: 25,
    icon: AcademicCapIcon,
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    name: 'Certificaciones',
    description: 'Especialistas en gestión y validación de certificados',
    members: 12,
    icon: TrophyIcon,
    gradient: 'from-green-600 to-emerald-600'
  },
  {
    name: 'Consultoría',
    description: 'Expertos en auditorías y evaluación de riesgos',
    members: 18,
    icon: ShieldCheckIcon,
    gradient: 'from-purple-600 to-indigo-600'
  },
  {
    name: 'Operaciones',
    description: 'Supervisores de trabajos de alto riesgo',
    members: 15,
    icon: CogIcon,
    gradient: 'from-orange-600 to-red-600'
  },
];

export default function NuestroEquipo() {
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
              <UserGroupIcon className="h-5 w-5 mr-3" />
              Nuestro Equipo
            </div>
            
            {/* Main Heading - Estilo IBM */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
              <span className="text-white">Nuestro</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Equipo</span>
            </h1>

            {/* Subtitle - Estilo Siemens */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Conoce a los profesionales apasionados que hacen posible la excelencia en seguridad industrial y control de riesgos.
            </p>

            {/* Stats - Estilo Boeing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-sm text-gray-300 font-medium">Profesionales Certificados</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">18+</div>
                <div className="text-sm text-gray-300 font-medium">Años de Experiencia</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-sm text-gray-300 font-medium">Compromiso con la Seguridad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team - Estilo Siemens Profesional */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
              <ShieldCheckIcon className="h-5 w-5 mr-3" />
              Equipo Directivo
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Liderazgo Experto
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Nuestros líderes combinan experiencia técnica con visión estratégica para garantizar la excelencia en seguridad industrial.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.slice(0, 3).map((member, index) => (
              <div
                key={member.name}
                className="group bg-white rounded-2xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Profile Image */}
                <div className="mx-auto h-48 w-48 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 mb-8 flex items-center justify-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${member.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <UserGroupIcon className="h-10 w-10 text-white" />
                  </div>
                </div>

                {/* Member Info */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4 text-center">{member.role}</p>
                <p className="text-slate-600 leading-relaxed text-center mb-6">{member.bio}</p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center text-sm text-slate-500">
                    <EnvelopeIcon className="h-4 w-4 mr-2" />
                    <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition-colors">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center text-sm text-slate-500">
                    <PhoneIcon className="h-4 w-4 mr-2" />
                    <a href={`tel:${member.phone}`} className="hover:text-blue-600 transition-colors">
                      {member.phone}
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.linkedin}
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                  >
                    <LinkIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={member.twitter}
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                  >
                    <GlobeAltIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={member.github}
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <CommandLineIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Full Team - Estilo GE Profesional */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-8">
              <CheckCircleIcon className="h-5 w-5 mr-3" />
              Equipo Completo
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Profesionales Dedicados
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Nuestro equipo completo de expertos en seguridad industrial comprometidos con la excelencia.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Profile Image */}
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <div className={`w-24 h-24 bg-gradient-to-r ${member.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <UserGroupIcon className="h-12 w-12 text-white" />
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-slate-600 leading-relaxed mb-6">{member.bio}</p>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-slate-500">
                      <EnvelopeIcon className="h-4 w-4 mr-3 flex-shrink-0" />
                      <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition-colors truncate">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-slate-500">
                      <PhoneIcon className="h-4 w-4 mr-3 flex-shrink-0" />
                      <a href={`tel:${member.phone}`} className="hover:text-blue-600 transition-colors">
                        {member.phone}
                      </a>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin}
                      className="text-slate-400 hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn"
                    >
                      <LinkIcon className="h-5 w-5" />
                    </a>
                    <a
                      href={member.twitter}
                      className="text-slate-400 hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Twitter"
                    >
                      <GlobeAltIcon className="h-5 w-5" />
                    </a>
                    <a
                      href={member.github}
                      className="text-slate-400 hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                    >
                      <CommandLineIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section - Estilo Lockheed Martin Profesional */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
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
              <StarIcon className="h-5 w-5 mr-3" />
              Únete a Nosotros
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              ¿Te gustaría unirte a nuestro equipo?
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Buscamos profesionales apasionados por la seguridad industrial que quieran formar parte de un equipo dinámico y en crecimiento.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a
                href="/contacto"
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center text-lg">
                  Ver Oportunidades
                  <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </a>
              
              <a
                href="mailto:careers@iscor.com"
                className="px-10 py-5 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-lg"
              >
                Enviar CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
