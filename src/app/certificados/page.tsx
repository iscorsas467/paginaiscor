'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
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
  ShieldCheckIcon
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Verificar autenticación al cargar la página
  useEffect(() => {
    const authStatus = sessionStorage.getItem('iscor_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    } else {
      router.push('/');
    }
  }, [router]);

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

  const handleLogout = () => {
    sessionStorage.removeItem('iscor_authenticated');
    router.push('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Verificando acceso...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <ThreeJSBackground />
      
      {/* Header */}
      <div className="relative z-10 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/')}
                className="flex items-center text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Volver al Inicio
              </button>
              <div className="h-6 w-px bg-slate-300" />
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <ShieldCheckIcon className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold text-slate-900">ISCOR</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-600">Sistema Seguro</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8"
            >
              <DocumentCheckIcon className="h-5 w-5 mr-3" />
              Sistema de Verificación de Certificados
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-8"
            >
              Verificación de Certificados
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Consulte la autenticidad de certificados de seguridad industrial emitidos por ISCOR.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-10"
          >
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
                  className="block w-full pl-14 pr-4 py-5 border-2 border-slate-300 rounded-xl text-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-slate-50"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="mb-8">
              <button
                onClick={handleSearch}
                disabled={isSearching}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-5 text-lg font-semibold text-white rounded-xl hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
