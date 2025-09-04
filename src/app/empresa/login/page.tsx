'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  EyeIcon, 
  EyeSlashIcon, 
  LockClosedIcon, 
  BuildingOfficeIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

interface CompanyLoginForm {
  companyId: string;
  password: string;
}

// Credenciales de ejemplo para empresas premium
const PREMIUM_COMPANIES = {
  'EMPRESA001': {
    password: 'premium2024',
    name: 'Industrias ABC S.A.S.',
    plan: 'Premium Enterprise',
    employees: 250,
    activeCourses: 8,
    lastAccess: '2024-01-15',
    contact: {
      name: 'Carlos Mendoza',
      email: 'carlos.mendoza@empresaabc.com',
      phone: '+57 300 123 4567'
    }
  },
  'EMPRESA002': {
    password: 'seguridad2024',
    name: 'Constructora XYZ Ltda.',
    plan: 'Premium Professional',
    employees: 180,
    activeCourses: 6,
    lastAccess: '2024-01-14',
    contact: {
      name: 'María González',
      email: 'maria.gonzalez@constructora-xyz.com',
      phone: '+57 310 987 6543'
    }
  },
  'EMPRESA003': {
    password: 'industrial2024',
    name: 'Petroquímica Delta S.A.',
    plan: 'Premium Industrial',
    employees: 450,
    activeCourses: 12,
    lastAccess: '2024-01-13',
    contact: {
      name: 'Roberto Silva',
      email: 'roberto.silva@petroquimica-delta.com',
      phone: '+57 315 456 7890'
    }
  }
};

export default function CompanyLoginPage() {
  const [formData, setFormData] = useState<CompanyLoginForm>({
    companyId: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    // Simular delay de autenticación
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Verificar credenciales de empresa
    const company = PREMIUM_COMPANIES[formData.companyId as keyof typeof PREMIUM_COMPANIES];
    
    if (company && formData.password === company.password) {
      setSuccess('¡Acceso autorizado! Redirigiendo al portal empresarial...');
      
      // Simular redirección al portal empresarial
      setTimeout(() => {
        router.push('/empresa/portal');
      }, 2000);
    } else {
      setError('Credenciales incorrectas o empresa no autorizada. Verifique su ID de empresa y contraseña.');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Panel Izquierdo - Información Corporativa */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Patrón de fondo sutil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Contenido del panel izquierdo */}
        <div className="relative z-10 flex flex-col justify-center px-12 py-12">
          {/* Logo */}
          <div className="mb-12">
            <Image
              src="/iscor_logo_colores.svg"
              alt="ISCOR Logo"
              width={180}
              height={90}
              className="h-20 w-auto"
            />
          </div>

          {/* Título principal */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Portal Empresarial
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Acceso exclusivo para empresas autorizadas al sistema de gestión de seguridad industrial ISCOR.
            </p>
          </div>

          {/* Estadísticas corporativas */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-sm text-slate-400">Empresas Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">18+</div>
              <div className="text-sm text-slate-400">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-sm text-slate-400">Certificaciones</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-sm text-slate-400">Satisfacción</div>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <div className="flex items-center text-slate-300">
              <PhoneIcon className="h-5 w-5 mr-3 text-slate-400" />
              <span>+57 300 123 4567</span>
            </div>
            <div className="flex items-center text-slate-300">
              <EnvelopeIcon className="h-5 w-5 mr-3 text-slate-400" />
              <span>empresas@iscor.com.co</span>
            </div>
            <div className="flex items-center text-slate-300">
              <MapPinIcon className="h-5 w-5 mr-3 text-slate-400" />
              <span>Bogotá, Colombia</span>
            </div>
          </div>

          {/* Línea decorativa */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <p className="text-sm text-slate-500">
              © 2024 ISCOR. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>

      {/* Panel Derecho - Formulario de Login */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-md">
          {/* Logo para móvil */}
          <div className="lg:hidden mb-8 text-center">
            <Image
              src="/iscor_logo_colores.svg"
              alt="ISCOR Logo"
              width={140}
              height={70}
              className="h-16 w-auto mx-auto"
            />
          </div>

          {/* Encabezado del formulario */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Acceso Empresarial
            </h2>
            <p className="text-slate-600">
              Ingrese sus credenciales para acceder al portal corporativo.
            </p>
          </div>

          {/* Formulario */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Campo ID de Empresa */}
            <div>
              <label htmlFor="companyId" className="block text-sm font-medium text-slate-700 mb-2">
                ID de Empresa
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BuildingOfficeIcon className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="companyId"
                  name="companyId"
                  type="text"
                  autoComplete="organization"
                  required
                  value={formData.companyId}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-200"
                  placeholder="Ej: EMPRESA001"
                />
              </div>
            </div>

            {/* Campo Contraseña */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockClosedIcon className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-12 py-3 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-200"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Mensajes de Error/Success */}
            {error && (
              <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-sm text-red-700">{error}</span>
              </div>
            )}

            {success && (
              <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-sm text-green-700">{success}</span>
              </div>
            )}

            {/* Botón de Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Verificando acceso...
                </div>
              ) : (
                <div className="flex items-center">
                  Acceder al Portal
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </div>
              )}
            </button>
          </form>

          {/* Credenciales de Prueba */}
          <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="text-sm font-medium text-slate-900 mb-3">Credenciales de Prueba:</h3>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>EMPRESA001</span>
                <span>premium2024</span>
              </div>
              <div className="flex justify-between">
                <span>EMPRESA002</span>
                <span>seguridad2024</span>
              </div>
              <div className="flex justify-between">
                <span>EMPRESA003</span>
                <span>industrial2024</span>
              </div>
            </div>
          </div>

          {/* Enlaces de navegación */}
          <div className="mt-8 text-center">
            <div className="flex justify-center space-x-4 text-sm">
              <Link
                href="/"
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                Sitio Principal
              </Link>
              <span className="text-slate-400">|</span>
              <Link
                href="/login"
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                Acceso Administrativo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
