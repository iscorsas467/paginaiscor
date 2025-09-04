'use client';

import { 
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  CheckCircleIcon,
  DocumentCheckIcon,
  MagnifyingGlassIcon,
  IdentificationIcon,
  CalendarIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  XCircleIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  CogIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  TrophyIcon,
  UsersIcon,
  BriefcaseIcon,
  AcademicCapIcon as AcademicCapIconSolid
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface CertificateData {
  nombre: string;
  cedula: string;
  curso: string;
  fechaCertificacion: string;
  fechaVencimiento: string;
  estado: string;
  instructor: string;
}

export default function Home() {
  const [cedula, setCedula] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<CertificateData | null>(null);
  const [error, setError] = useState('');
  const [contactData, setContactData] = useState<any>(null);

  // Datos de ejemplo para simular la búsqueda
  const mockDatabase: Record<string, CertificateData> = {
    '1234567890': {
      nombre: 'Juan Carlos Pérez',
      cedula: '1234567890',
      curso: 'Trabajo en Alturas',
      fechaCertificacion: '2024-01-15',
      fechaVencimiento: '2025-01-15',
      estado: 'Vigente',
      instructor: 'Ing. María González'
    },
    '9876543210': {
      nombre: 'Ana María Rodríguez',
      cedula: '9876543210',
      curso: 'Espacios Confinados',
      fechaCertificacion: '2023-11-20',
      fechaVencimiento: '2024-11-20',
      estado: 'Vigente',
      instructor: 'Ing. Carlos Mendoza'
    }
  };

  const handleSearch = async () => {
    if (!cedula.trim()) {
      setError('Por favor ingrese su número de cédula');
      return;
    }

    setIsSearching(true);
    setError('');
    setSearchResult(null);

    // Simular búsqueda en base de datos
    setTimeout(() => {
      const result = mockDatabase[cedula];
      if (result) {
        setSearchResult(result);
      } else {
        setError('No se encontró ningún certificado asociado a esta cédula');
      }
      setIsSearching(false);
    }, 1500);
  };

  // Cargar datos de contacto desde la API
  useEffect(() => {
    const loadContactData = async () => {
      try {
        const response = await fetch('/api/site-content/contact');
        if (response.ok) {
          const data = await response.json();
          setContactData(data);
        }
      } catch (error) {
        console.error('Error loading contact data:', error);
      }
    };

    loadContactData();
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

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
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge - Estilo Cisco */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
              <ShieldCheckIcon className="h-5 w-5 mr-3" />
              Líder en Seguridad Industrial desde 2005
            </div>
            
            {/* Main Heading - Estilo IBM */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
              <span className="text-white">Ingeniería de</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Seguridad</span>
            </h1>

            {/* Subtitle - Estilo Siemens */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Protegemos vidas y optimizamos operaciones con soluciones integrales de seguridad industrial y control de riesgos.
            </p>

            {/* Stats - Estilo Boeing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">18+</div>
                <div className="text-sm text-gray-300 font-medium">Años de Experiencia</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-sm text-gray-300 font-medium">Empresas Atendidas</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">10,000+</div>
                <div className="text-sm text-gray-300 font-medium">Certificaciones Emitidas</div>
              </div>
            </div>

            {/* CTA Buttons - Estilo Lockheed Martin */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/portafolio"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center">
                  Explorar Servicios
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
              
              <Link
                href="/contacto"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Solicitar Consulta
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Certificate Verification Section - Estilo GE Profesional */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Background Pattern - Estilo IBM */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-8">
              <DocumentCheckIcon className="h-5 w-5 mr-3" />
              Verificación de Certificados
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Verifique su certificado
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Consulte la autenticidad de su certificado de seguridad industrial ingresando su número de cédula.
            </p>
          </div>
          
          <div className="mx-auto max-w-2xl">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-10">
              {/* Search Form */}
              <div className="mb-8">
                <label htmlFor="cedula" className="block text-sm font-semibold text-slate-700 mb-4">
                  Número de Cédula
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <IdentificationIcon className="h-6 w-6 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    id="cedula"
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ej: 1234567890"
                    className="block w-full pl-14 pr-4 py-5 border-2 border-slate-300 rounded-xl text-lg focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-200 bg-slate-50"
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="mb-8">
                <button
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-5 text-lg font-semibold text-white rounded-xl hover:from-green-700 hover:to-emerald-700 focus:ring-4 focus:ring-green-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSearching ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white inline mr-3"></div>
                      Verificando...
                    </>
                  ) : (
                    <>
                      <MagnifyingGlassIcon className="inline h-6 w-6 mr-3" />
                      Verificar Certificado
                    </>
                  )}
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-xl">
                  <div className="flex items-center">
                    <XCircleIcon className="h-6 w-6 text-red-500 mr-4" />
                    <p className="text-red-700 font-medium text-lg">{error}</p>
                  </div>
                </div>
              )}

              {/* Search Results */}
              {searchResult && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-200">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-slate-900">Certificado Encontrado</h3>
                    <div className="flex items-center">
                      <CheckBadgeIcon className="h-8 w-8 text-green-600 mr-3" />
                      <span className="text-green-700 font-semibold text-lg">{searchResult.estado}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-center p-4 bg-white rounded-lg border border-green-100">
                        <IdentificationIcon className="h-6 w-6 text-slate-400 mr-4" />
                        <div>
                          <p className="text-sm text-slate-500 font-medium">Nombre</p>
                          <p className="font-semibold text-slate-900 text-lg">{searchResult.nombre}</p>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-white rounded-lg border border-green-100">
                        <IdentificationIcon className="h-6 w-6 text-slate-400 mr-4" />
                        <div>
                          <p className="text-sm text-slate-500 font-medium">Cédula</p>
                          <p className="font-semibold text-slate-900 text-lg">{searchResult.cedula}</p>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-white rounded-lg border border-green-100">
                        <AcademicCapIcon className="h-6 w-6 text-slate-400 mr-4" />
                        <div>
                          <p className="text-sm text-slate-500 font-medium">Curso</p>
                          <p className="font-semibold text-slate-900 text-lg">{searchResult.curso}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center p-4 bg-white rounded-lg border border-green-100">
                        <CalendarIcon className="h-6 w-6 text-slate-400 mr-4" />
                        <div>
                          <p className="text-sm text-slate-500 font-medium">Fecha de Certificación</p>
                          <p className="font-semibold text-slate-900 text-lg">
                            {new Date(searchResult.fechaCertificacion).toLocaleDateString('es-ES')}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-white rounded-lg border border-green-100">
                        <CalendarIcon className="h-6 w-6 text-slate-400 mr-4" />
                        <div>
                          <p className="text-sm text-slate-500 font-medium">Fecha de Vencimiento</p>
                          <p className="font-semibold text-slate-900 text-lg">
                            {new Date(searchResult.fechaVencimiento).toLocaleDateString('es-ES')}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-white rounded-lg border border-green-100">
                        <UserGroupIcon className="h-6 w-6 text-slate-400 mr-4" />
                        <div>
                          <p className="text-sm text-slate-500 font-medium">Instructor</p>
                          <p className="font-semibold text-slate-900 text-lg">{searchResult.instructor}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
                    <p className="text-blue-700 text-lg">
                      <strong>Nota:</strong> Este certificado es válido y está registrado en nuestra base de datos. 
                      Para cualquier consulta adicional, contáctenos.
                    </p>
                  </div>
                </div>
              )}

              {/* Demo Note */}
              <div className="mt-8 p-6 bg-slate-50 rounded-xl border-2 border-slate-200">
                <p className="text-slate-600 text-center text-lg">
                  <strong>Demo:</strong> Pruebe con las cédulas: <strong>1234567890</strong> o <strong>9876543210</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight Section - Estilo Boeing Profesional */}
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
              <CogIcon className="h-5 w-5 mr-3" />
              Servicios Destacados
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Soluciones Integrales de Seguridad
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Ofrecemos una gama completa de servicios especializados para proteger a su empresa y cumplir con las normativas de seguridad industrial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Trabajo en Alturas',
                description: 'Certificación y supervisión de trabajos en altura con equipos de protección personal certificados.',
                icon: BuildingOfficeIcon,
                gradient: 'from-orange-600 to-red-600',
                duration: '40 horas',
                certification: 'Válido 2 años'
              },
              {
                name: 'Espacios Confinados',
                description: 'Entrenamiento especializado para trabajos en espacios confinados con protocolos de seguridad avanzados.',
                icon: CogIcon,
                gradient: 'from-purple-600 to-indigo-600',
                duration: '40 horas',
                certification: 'Válido 2 años'
              },
              {
                name: 'Control de Incendios',
                description: 'Sistemas de prevención, detección y extinción de incendios con equipos certificados.',
                icon: ShieldCheckIcon,
                gradient: 'from-red-600 to-orange-600',
                duration: '32 horas',
                certification: 'Válido 3 años'
              },
              {
                name: 'Primeros Auxilios',
                description: 'Capacitación en atención prehospitalaria y respuesta a emergencias médicas.',
                icon: CheckCircleIcon,
                gradient: 'from-green-600 to-emerald-600',
                duration: '16 horas',
                certification: 'Válido 1 año'
              },
              {
                name: 'Materiales Peligrosos',
                description: 'Manejo seguro de sustancias peligrosas según normativas internacionales.',
                icon: GlobeAltIcon,
                gradient: 'from-yellow-600 to-orange-600',
                duration: '40 horas',
                certification: 'Válido 3 años'
              },
              {
                name: 'Gestión de Calidad',
                description: 'Implementación de sistemas ISO 9001 y auditorías de calidad empresarial.',
                icon: TrophyIcon,
                gradient: 'from-blue-600 to-cyan-600',
                duration: '40 horas',
                certification: 'Válido 3 años'
              }
            ].map((service, index) => (
              <div 
                key={service.name}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon container */}
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {service.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Details */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-2" />
                    {service.duration}
                  </span>
                  <span className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 mr-2" />
                    {service.certification}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portafolio"
              className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Ver Todos los Servicios
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Estilo Siemens Profesional */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
              <CheckCircleIcon className="h-5 w-5 mr-3" />
              Nuestros Valores
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              ¿Por qué elegir ISCOR?
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Más de 18 años de experiencia en control de tareas de alto riesgo, posicionándonos con las mejores empresas del país.
            </p>
          </div>
          
          <div className="mx-auto mt-20 max-w-2xl lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-12 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Sistemas de Gestión',
                  description: 'Diseñamos, implementamos y auditamos Sistemas de Gestión para la Seguridad y Salud de los Trabajadores SGSST y proveemos todos los complementos exigidos por la ley.',
                  icon: ShieldCheckIcon,
                  color: 'blue',
                  stats: 'ISO 45001',
                  gradient: 'from-blue-600 to-cyan-600'
                },
                {
                  name: 'Miembro del CCS',
                  description: 'ISCOR es miembro del CCS – Consejo Colombiano de Seguridad y NFPA – National Fire Protection Association, organización internacional líder en protección y seguridad.',
                  icon: UserGroupIcon,
                  color: 'green',
                  stats: 'Certificaciones Internacionales',
                  gradient: 'from-green-600 to-emerald-600'
                },
                {
                  name: 'Experiencia Comprobada',
                  description: 'Nuestra experiencia de más de 18 años en control de tareas de alto riesgo, nos ha posicionado con las mejores empresas de nuestro país.',
                  icon: ChartBarIcon,
                  color: 'purple',
                  stats: '18+ Años',
                  gradient: 'from-purple-600 to-violet-600'
                },
              ].map((feature, index) => (
                <div 
                  key={feature.name}
                  className="group bg-white rounded-2xl shadow-xl border border-slate-200 p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Icon container */}
                  <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-10 w-10 text-white" aria-hidden="true" />
                  </div>
                  
                  {/* Stats */}
                  <div className="mb-6">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-${feature.color}-100 text-${feature.color}-700`}>
                      {feature.stats}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Estilo GE Profesional */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-8">
              <StarIcon className="h-5 w-5 mr-3" />
              Testimonios de Clientes
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Lo que dicen nuestros clientes
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Empresas líderes confían en ISCOR para sus necesidades de seguridad industrial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Carlos Mendoza',
                position: 'Gerente de Seguridad',
                company: 'Industrias ABC',
                content: 'ISCOR ha transformado nuestra cultura de seguridad. Su profesionalismo y experiencia son excepcionales.',
                rating: 5
              },
              {
                name: 'María González',
                position: 'Directora de Operaciones',
                company: 'Constructora XYZ',
                content: 'Los servicios de ISCOR han sido fundamentales para cumplir con todas las normativas de seguridad.',
                rating: 5
              },
              {
                name: 'Roberto Silva',
                position: 'Supervisor de Mantenimiento',
                company: 'Petroquímica Delta',
                content: 'Excelente capacitación y certificaciones. Nuestro equipo está más seguro que nunca.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.position}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Stats Section - Estilo Lockheed Martin */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '98%', label: 'Satisfacción del Cliente', icon: StarIcon },
              { number: '24/7', label: 'Soporte Técnico', icon: ClockIcon },
              { number: '50+', label: 'Instructores Certificados', icon: UsersIcon },
              { number: '100%', label: 'Cumplimiento Normativo', icon: CheckCircleIcon }
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

      {/* Contact Section - Estilo IBM Profesional */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
                <PhoneIcon className="h-5 w-5 mr-3" />
                Contáctanos
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
                ¿Listo para comenzar?
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-12">
                Nuestro equipo de expertos está listo para ayudarte a implementar las mejores prácticas de seguridad industrial en tu empresa.
              </p>

              <div className="space-y-6">
                {contactData?.info?.items?.slice(0, 3).map((item: any) => (
                  <div key={item.id} className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{item.title}</p>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                )) || (
                  <>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                        <PhoneIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Teléfono</p>
                        <p className="text-slate-600">+57 300 123 4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                        <EnvelopeIcon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Email</p>
                        <p className="text-slate-600">contacto@iscor.com.co</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                        <MapPinIcon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Oficina Principal</p>
                        <p className="text-slate-600">Bogotá, Colombia</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Solicita una Consulta Gratuita</h3>
              <p className="text-slate-600 mb-8">
                Completa el formulario y nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
              </p>
              
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                />
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                ></textarea>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg">
                  Enviar Consulta
                </button>
              </div>
            </div>
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
                href="/portafolio"
                className="px-10 py-5 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-lg"
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
