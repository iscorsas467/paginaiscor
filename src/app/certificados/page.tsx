'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  DocumentCheckIcon,
  MagnifyingGlassIcon,
  IdentificationIcon,
  CalendarIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  XCircleIcon,
  UserGroupIcon,
  ArrowLeftIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  LockClosedIcon,
  EyeIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';
import ThreeJSBackground from '@/components/ThreeJSBackground';

interface CertificateData {
  nombre: string;
  cedula: string;
  curso: string;
  fechaCertificacion: string;
  fechaVencimiento: string;
  estado: string;
  instructor: string;
}

export default function CertificadosPage() {
  const [cedula, setCedula] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<CertificateData | null>(null);
  const [error, setError] = useState('');
  const router = useRouter();

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
      setError('Por favor ingrese el número de cédula');
      return;
    }

    setIsSearching(true);
    setError('');
    setSearchResult(null);

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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };


  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20" />
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
        </div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => router.push('/')}
                className="flex items-center px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-200"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Volver al Inicio
              </button>
              <div className="h-8 w-px bg-slate-300" />
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12">
                  <Image
                    src="/iscor-logo-completo.png"
                    alt="ISCOR Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">ISCOR</h1>
                  <p className="text-sm text-slate-600">Sistema de Verificación</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center px-3 py-2 bg-green-100 text-green-800 rounded-lg">
                <ShieldCheckIcon className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Sistema Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-lg font-medium mb-8 shadow-lg"
            >
              <DocumentCheckIcon className="h-6 w-6 mr-3" />
              Sistema de Verificación de Certificados
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Verificación de Certificados
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
            >
              Consulte la autenticidad de certificados de seguridad industrial emitidos por ISCOR Colombia
            </motion.p>
          </div>

          {/* Security Notice */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl border border-amber-400/30 p-8 mb-12 shadow-xl"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <ExclamationTriangleIcon className="h-8 w-8 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Aviso de Seguridad</h3>
                <p className="text-amber-100 text-lg leading-relaxed">
                  El acceso a la consulta de certificados por Internet es un servicio de carácter permanente que presta ISCOR COLOMBIA, 
                  con el ánimo de poder validar la información de los certificados que expedimos. El uso de la información suministrada 
                  por ISCOR está limitada a fines privados y personales.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Search Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-12"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Consulta de Certificados</h2>
              <p className="text-lg text-slate-600">Ingrese su número de cédula para verificar la autenticidad de su certificado</p>
            </div>

            {/* Search Form */}
            <div className="mb-8">
              <label htmlFor="cedula" className="block text-lg font-semibold text-slate-700 mb-6">
                <div className="flex items-center">
                  <IdentificationIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Número de Cédula
                </div>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <IdentificationIcon className="h-7 w-7 text-slate-400" />
                </div>
                <input
                  type="text"
                  id="cedula"
                  value={cedula}
                  onChange={(e) => setCedula(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ej: 1234567890"
                  className="block w-full pl-16 pr-6 py-6 border-2 border-slate-300 rounded-2xl text-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-slate-50 font-medium"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="mb-8">
              <button
                onClick={handleSearch}
                disabled={isSearching}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 text-xl font-semibold text-white rounded-2xl hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                {isSearching ? (
                  <>
                    <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-white inline mr-4"></div>
                    Verificando Certificado...
                  </>
                ) : (
                  <>
                    <MagnifyingGlassIcon className="inline h-7 w-7 mr-4" />
                    Verificar Certificado
                  </>
                )}
              </button>
            </div>

            {/* Privacy Notice */}
            <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
              <div className="flex items-start space-x-4">
                <LockClosedIcon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Protección de Datos</h4>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Su información personal está protegida. Solo utilizamos su número de cédula para verificar 
                    la autenticidad de los certificados emitidos por ISCOR Colombia.
                  </p>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-8 p-8 bg-red-50 border-2 border-red-200 rounded-2xl">
                <div className="flex items-center">
                  <XCircleIcon className="h-8 w-8 text-red-500 mr-4" />
                  <p className="text-red-700 font-semibold text-xl">{error}</p>
                </div>
              </div>
            )}

            {/* Search Results */}
            {searchResult && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 border-2 border-green-200 shadow-xl">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-3xl font-bold text-slate-900">Certificado Encontrado</h3>
                  <div className="flex items-center px-6 py-3 bg-green-100 rounded-full">
                    <CheckBadgeIcon className="h-8 w-8 text-green-600 mr-3" />
                    <span className="text-green-700 font-bold text-xl">{searchResult.estado}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center p-6 bg-white rounded-2xl border border-green-100 shadow-sm">
                      <IdentificationIcon className="h-8 w-8 text-slate-400 mr-6" />
                      <div>
                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Nombre Completo</p>
                        <p className="font-bold text-slate-900 text-xl">{searchResult.nombre}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-6 bg-white rounded-2xl border border-green-100 shadow-sm">
                      <IdentificationIcon className="h-8 w-8 text-slate-400 mr-6" />
                      <div>
                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Número de Cédula</p>
                        <p className="font-bold text-slate-900 text-xl">{searchResult.cedula}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-6 bg-white rounded-2xl border border-green-100 shadow-sm">
                      <AcademicCapIcon className="h-8 w-8 text-slate-400 mr-6" />
                      <div>
                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Curso Certificado</p>
                        <p className="font-bold text-slate-900 text-xl">{searchResult.curso}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center p-6 bg-white rounded-2xl border border-green-100 shadow-sm">
                      <CalendarIcon className="h-8 w-8 text-slate-400 mr-6" />
                      <div>
                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Fecha de Certificación</p>
                        <p className="font-bold text-slate-900 text-xl">
                          {new Date(searchResult.fechaCertificacion).toLocaleDateString('es-ES')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center p-6 bg-white rounded-2xl border border-green-100 shadow-sm">
                      <CalendarIcon className="h-8 w-8 text-slate-400 mr-6" />
                      <div>
                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Fecha de Vencimiento</p>
                        <p className="font-bold text-slate-900 text-xl">
                          {new Date(searchResult.fechaVencimiento).toLocaleDateString('es-ES')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center p-6 bg-white rounded-2xl border border-green-100 shadow-sm">
                      <UserGroupIcon className="h-8 w-8 text-slate-400 mr-6" />
                      <div>
                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Instructor Certificado</p>
                        <p className="font-bold text-slate-900 text-xl">{searchResult.instructor}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-8 bg-blue-50 rounded-2xl border-2 border-blue-200">
                  <div className="flex items-start space-x-4">
                    <InformationCircleIcon className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-blue-900 text-xl mb-3">Certificado Válido</h4>
                      <p className="text-blue-800 text-lg leading-relaxed">
                        Este certificado es válido y está registrado en nuestra base de datos oficial. 
                        Para cualquier consulta adicional o verificación física, contáctenos a través de nuestros canales oficiales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Demo Note */}
            <div className="mt-10 p-8 bg-slate-50 rounded-2xl border-2 border-slate-200">
              <div className="text-center">
                <h4 className="font-bold text-slate-900 text-xl mb-4">Modo de Prueba</h4>
                <p className="text-slate-600 text-lg">
                  Para probar el sistema, utilice las siguientes cédulas de ejemplo:
                </p>
                <div className="mt-4 flex justify-center space-x-6">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-mono text-lg font-bold">1234567890</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-mono text-lg font-bold">9876543210</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Legal Notice */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-12 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl border border-white/10 p-10"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mr-4">
                  <ShieldCheckIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Términos y Condiciones</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                Cualquier uso para una finalidad diferente, como la obtención de un beneficio económico o la consulta de información 
                personal de un tercero, será considerado irregular y estará sujeto al inicio de las acciones legales pertinentes. 
                Se prohíbe expresamente a cualquier persona natural o jurídica diferente del titular de los datos la utilización 
                de la información personal contenida en este sitio WEB.
              </p>
              <div className="mt-6 flex items-center justify-center space-x-2 text-blue-400">
                <LockClosedIcon className="h-5 w-5" />
                <span className="text-sm font-medium">Sistema protegido por ISCOR Colombia</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
