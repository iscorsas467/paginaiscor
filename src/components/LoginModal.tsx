'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon, 
  EyeIcon, 
  EyeSlashIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  UserIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (username: string, password: string) => Promise<boolean>;
}

export default function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const success = await onLogin(username, password);
      if (!success) {
        setError('Credenciales incorrectas. Por favor, intente nuevamente.');
      }
    } catch (err) {
      setError('Error de conexión. Por favor, intente más tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setUsername('');
    setPassword('');
    setError('');
    setShowPassword(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200"
          >
            {/* Header */}
            <div className="relative px-8 py-6 border-b border-slate-200">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors duration-200"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
              
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                  <ShieldCheckIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 text-center mb-2">
                Acceso Seguro
              </h2>
              <p className="text-slate-600 text-center text-sm">
                Verificación de Certificados ISCOR
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 py-6">
              {/* Username Field */}
              <div className="mb-6">
                <label htmlFor="username" className="block text-sm font-semibold text-slate-700 mb-2">
                  Usuario
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-slate-50"
                    placeholder="Ingrese su usuario"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-12 py-3 border-2 border-slate-300 rounded-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-slate-50"
                    placeholder="Ingrese su contraseña"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mr-3" />
                    <p className="text-red-700 font-medium text-sm">{error}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white inline mr-3"></div>
                    Verificando...
                  </>
                ) : (
                  'Acceder al Sistema'
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="px-8 py-4 bg-slate-50 rounded-b-2xl border-t border-slate-200">
              <div className="text-center">
                <button
                  onClick={() => setShowPrivacy(!showPrivacy)}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Política de Privacidad y Términos
                </button>
              </div>
              
              {showPrivacy && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-4 bg-white rounded-lg border border-slate-200"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">ISCOR - Política de Privacidad</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-2">
                    ISCOR se compromete a proteger la información personal de nuestros usuarios. 
                    Los datos de certificación son confidenciales y solo accesibles mediante 
                    autenticación segura.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Al acceder al sistema, usted acepta nuestros términos de uso y política 
                    de privacidad. Toda la información es tratada con la máxima confidencialidad 
                    según las normativas vigentes.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
