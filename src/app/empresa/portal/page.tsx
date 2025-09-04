'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  ArrowRightOnRectangleIcon,
  StarIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  PlayIcon,
  CheckCircleIcon,
  ClockIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  DocumentIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  ChartBarIcon,
  TrophyIcon,
  CalendarIcon,
  ClockIcon as ClockIconSolid,
  CheckCircleIcon as CheckCircleIconSolid,
  ExclamationTriangleIcon as ExclamationTriangleIconSolid,
  XMarkIcon,
  EyeIcon,
  BookOpenIcon,
  PresentationChartLineIcon,
  CogIcon,
  BellIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

// Interfaces para el curso empresarial
interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'video' | 'document' | 'quiz' | 'practical';
  status: 'completed' | 'in-progress' | 'pending';
  progress: number;
  content: ModuleContent[];
}

interface ModuleContent {
  id: string;
  title: string;
  type: 'video' | 'document' | 'quiz' | 'practical';
  duration?: string;
  status: 'completed' | 'in-progress' | 'pending';
  description: string;
}

interface CompanyCourse {
  id: string;
  name: string;
  description: string;
  totalModules: number;
  totalDuration: string;
  progress: number;
  modules: CourseModule[];
  instructor: string;
  startDate: string;
  endDate: string;
  certificate: boolean;
}

// Datos de ejemplo para el curso empresarial
const COMPANY_COURSE: CompanyCourse = {
  id: '1',
  name: 'Gestión Integral de Seguridad Industrial',
  description: 'Curso completo de seguridad industrial diseñado específicamente para empresas premium. Incluye todos los módulos necesarios para cumplir con las normativas vigentes y crear un ambiente de trabajo seguro.',
  totalModules: 8,
  totalDuration: '120 horas',
  progress: 65,
  instructor: 'Ing. María González - Especialista en Seguridad Industrial',
  startDate: '2024-01-15',
  endDate: '2024-06-15',
  certificate: true,
  modules: [
    {
      id: '1',
      title: 'Fundamentos de Seguridad Industrial',
      description: 'Introducción a los principios básicos de seguridad industrial y normativas vigentes.',
      duration: '16 horas',
      type: 'video',
      status: 'completed',
      progress: 100,
      content: [
        {
          id: '1-1',
          title: 'Introducción a la Seguridad Industrial',
          type: 'video',
          duration: '45 min',
          status: 'completed',
          description: 'Conceptos básicos y evolución histórica de la seguridad industrial.'
        },
        {
          id: '1-2',
          title: 'Marco Legal y Normativo',
          type: 'document',
          status: 'completed',
          description: 'Análisis de las leyes y regulaciones aplicables en Colombia.'
        },
        {
          id: '1-3',
          title: 'Evaluación de Riesgos',
          type: 'quiz',
          status: 'completed',
          description: 'Test de conocimientos sobre identificación y evaluación de riesgos.'
        }
      ]
    },
    {
      id: '2',
      title: 'Trabajo en Alturas',
      description: 'Capacitación especializada en trabajos en altura según normativa vigente.',
      duration: '20 horas',
      type: 'practical',
      status: 'in-progress',
      progress: 75,
      content: [
        {
          id: '2-1',
          title: 'Normativa de Trabajo en Alturas',
          type: 'video',
          duration: '60 min',
          status: 'completed',
          description: 'Resolución 1409 de 2012 y sus modificaciones.'
        },
        {
          id: '2-2',
          title: 'Equipos de Protección Personal',
          type: 'video',
          duration: '90 min',
          status: 'completed',
          description: 'Selección, uso y mantenimiento de EPP para trabajos en altura.'
        },
        {
          id: '2-3',
          title: 'Práctica de Anclajes',
          type: 'practical',
          status: 'in-progress',
          description: 'Ejercicios prácticos de instalación y verificación de anclajes.'
        },
        {
          id: '2-4',
          title: 'Evaluación Final',
          type: 'quiz',
          status: 'pending',
          description: 'Evaluación teórica y práctica del módulo.'
        }
      ]
    },
    {
      id: '3',
      title: 'Espacios Confinados',
      description: 'Procedimientos seguros para trabajos en espacios confinados.',
      duration: '18 horas',
      type: 'practical',
      status: 'in-progress',
      progress: 50,
      content: [
        {
          id: '3-1',
          title: 'Identificación de Espacios Confinados',
          type: 'video',
          duration: '45 min',
          status: 'completed',
          description: 'Criterios para identificar y clasificar espacios confinados.'
        },
        {
          id: '3-2',
          title: 'Procedimientos de Entrada',
          type: 'document',
          status: 'in-progress',
          description: 'Protocolos de entrada y trabajo en espacios confinados.'
        },
        {
          id: '3-3',
          title: 'Equipos de Monitoreo',
          type: 'practical',
          status: 'pending',
          description: 'Uso de equipos de detección de gases y ventilación.'
        }
      ]
    },
    {
      id: '4',
      title: 'Lockout Tagout',
      description: 'Procedimientos de bloqueo y etiquetado de equipos energizados.',
      duration: '14 horas',
      type: 'practical',
      status: 'pending',
      progress: 0,
      content: [
        {
          id: '4-1',
          title: 'Principios de LOTO',
          type: 'video',
          duration: '60 min',
          status: 'pending',
          description: 'Fundamentos de los procedimientos de bloqueo y etiquetado.'
        },
        {
          id: '4-2',
          title: 'Procedimientos Específicos',
          type: 'document',
          status: 'pending',
          description: 'Desarrollo de procedimientos LOTO para equipos específicos.'
        }
      ]
    },
    {
      id: '5',
      title: 'Materiales Peligrosos',
      description: 'Manejo seguro de materiales peligrosos y sustancias químicas.',
      duration: '16 horas',
      type: 'video',
      status: 'pending',
      progress: 0,
      content: [
        {
          id: '5-1',
          title: 'Clasificación de Materiales',
          type: 'video',
          duration: '45 min',
          status: 'pending',
          description: 'Sistema de clasificación GHS y etiquetado.'
        },
        {
          id: '5-2',
          title: 'Hojas de Seguridad',
          type: 'document',
          status: 'pending',
          description: 'Interpretación y uso de hojas de seguridad (SDS).'
        }
      ]
    },
    {
      id: '6',
      title: 'Primeros Auxilios',
      description: 'Capacitación en primeros auxilios y respuesta a emergencias.',
      duration: '12 horas',
      type: 'practical',
      status: 'pending',
      progress: 0,
      content: [
        {
          id: '6-1',
          title: 'Evaluación de Emergencias',
          type: 'video',
          duration: '30 min',
          status: 'pending',
          description: 'Protocolo de evaluación inicial de víctimas.'
        },
        {
          id: '6-2',
          title: 'RCP y DEA',
          type: 'practical',
          status: 'pending',
          description: 'Técnicas de reanimación cardiopulmonar y uso de DEA.'
        }
      ]
    },
    {
      id: '7',
      title: 'Brigada de Emergencia',
      description: 'Formación de brigada de emergencia y plan de evacuación.',
      duration: '10 horas',
      type: 'practical',
      status: 'pending',
      progress: 0,
      content: [
        {
          id: '7-1',
          title: 'Organización de Brigadas',
          type: 'video',
          duration: '45 min',
          status: 'pending',
          description: 'Estructura y funciones de las brigadas de emergencia.'
        },
        {
          id: '7-2',
          title: 'Simulacros de Evacuación',
          type: 'practical',
          status: 'pending',
          description: 'Planificación y ejecución de simulacros.'
        }
      ]
    },
    {
      id: '8',
      title: 'Evaluación Final y Certificación',
      description: 'Evaluación integral del curso y emisión de certificado.',
      duration: '4 horas',
      type: 'quiz',
      status: 'pending',
      progress: 0,
      content: [
        {
          id: '8-1',
          title: 'Evaluación Teórica Final',
          type: 'quiz',
          status: 'pending',
          description: 'Examen final que cubre todos los temas del curso.'
        },
        {
          id: '8-2',
          title: 'Evaluación Práctica',
          type: 'practical',
          status: 'pending',
          description: 'Demostración práctica de habilidades adquiridas.'
        }
      ]
    }
  ]
};

export default function CompanyPortal() {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [showContentModal, setShowContentModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState<ModuleContent | null>(null);
  const router = useRouter();

  const handleLogout = () => {
    router.push('/empresa/login');
  };

  const handleModuleClick = (moduleId: string) => {
    setActiveModule(activeModule === moduleId ? null : moduleId);
  };

  const handleContentClick = (content: ModuleContent) => {
    setSelectedContent(content);
    setShowContentModal(true);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircleIconSolid;
      case 'in-progress': return ClockIconSolid;
      case 'pending': return ExclamationTriangleIconSolid;
      default: return ClockIconSolid;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in-progress': return 'text-blue-600 bg-blue-100';
      case 'pending': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'video': return VideoCameraIcon;
      case 'document': return DocumentTextIcon;
      case 'quiz': return ClipboardDocumentListIcon;
      case 'practical': return UserGroupIcon;
      default: return DocumentIcon;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Profesional */}
      <header className="bg-white shadow-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-6">
              <Image
                src="/iscor_logo_colores.svg"
                alt="ISCOR Logo"
                width={140}
                height={70}
                className="h-14 w-auto"
              />
                              <div className="border-l border-slate-300 pl-6">
                  <h1 className="text-2xl font-bold text-slate-900">Portal Empresarial ISCOR</h1>
                  <div className="flex items-center space-x-4 mt-1">
                    <p className="text-sm text-slate-600">Industrias ABC S.A.S.</p>
                    <div className="flex items-center space-x-1">
                      <ShieldCheckIcon className="h-4 w-4 text-slate-600" />
                      <span className="text-sm font-medium text-slate-700">Plan Enterprise</span>
                    </div>
                  </div>
                </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <BellIcon className="h-6 w-6 text-slate-600 hover:text-slate-900 cursor-pointer transition-colors" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
                <CogIcon className="h-6 w-6 text-slate-600 hover:text-slate-900 cursor-pointer transition-colors" />
              </div>
              <div className="h-8 w-px bg-slate-300"></div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <ArrowRightOnRectangleIcon className="h-4 w-4" />
                <span className="text-sm font-medium">Cerrar Sesión</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Información del Curso */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  <AcademicCapIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">{COMPANY_COURSE.name}</h2>
                  <p className="text-slate-600 mt-1">{COMPANY_COURSE.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="flex items-center space-x-3">
                  <UserGroupIcon className="h-5 w-5 text-slate-500" />
                  <div>
                    <p className="text-sm text-slate-600">Instructor</p>
                    <p className="font-medium text-slate-900">{COMPANY_COURSE.instructor}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CalendarIcon className="h-5 w-5 text-slate-500" />
                  <div>
                    <p className="text-sm text-slate-600">Duración</p>
                    <p className="font-medium text-slate-900">{COMPANY_COURSE.totalDuration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpenIcon className="h-5 w-5 text-slate-500" />
                  <div>
                    <p className="text-sm text-slate-600">Módulos</p>
                    <p className="font-medium text-slate-900">{COMPANY_COURSE.totalModules}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <TrophyIcon className="h-5 w-5 text-slate-500" />
                  <div>
                    <p className="text-sm text-slate-600">Certificado</p>
                    <p className="font-medium text-slate-900">{COMPANY_COURSE.certificate ? 'Incluido' : 'No incluido'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Barra de Progreso */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-700">Progreso General</span>
              <span className="text-sm font-medium text-slate-900">{COMPANY_COURSE.progress}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${COMPANY_COURSE.progress}%` }}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>Inicio: {new Date(COMPANY_COURSE.startDate).toLocaleDateString('es-ES')}</span>
            <span>Finalización: {new Date(COMPANY_COURSE.endDate).toLocaleDateString('es-ES')}</span>
          </div>
        </div>

        {/* Lista de Módulos */}
        <div className="space-y-4">
          {COMPANY_COURSE.modules.map((module) => (
            <div key={module.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div 
                className="p-6 cursor-pointer hover:bg-slate-50 transition-colors duration-200"
                onClick={() => handleModuleClick(module.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
                      <span className="text-lg font-bold text-slate-700">{module.id}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900">{module.title}</h3>
                      <p className="text-slate-600 mt-1">{module.description}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm text-slate-500">{module.duration}</span>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(module.status)}`}>
                          {React.createElement(getStatusIcon(module.status), { className: "h-3 w-3 mr-1" })}
                          {module.status === 'completed' ? 'Completado' : 
                           module.status === 'in-progress' ? 'En Progreso' : 'Pendiente'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-sm font-medium text-slate-900">{module.progress}%</div>
                      <div className="w-20 bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="p-2 bg-slate-100 rounded-lg">
                      <PlayIcon className="h-5 w-5 text-slate-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenido del Módulo */}
              {activeModule === module.id && (
                <div className="border-t border-slate-200 bg-slate-50">
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">Contenido del Módulo</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {module.content.map((content) => (
                        <div 
                          key={content.id}
                          className="bg-white rounded-lg border border-slate-200 p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer"
                          onClick={() => handleContentClick(content)}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="p-2 bg-slate-100 rounded-lg">
                              {React.createElement(getContentIcon(content.type), { className: "h-5 w-5 text-slate-600" })}
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium text-slate-900">{content.title}</h5>
                              <p className="text-sm text-slate-600 mt-1">{content.description}</p>
                              <div className="flex items-center space-x-3 mt-2">
                                {content.duration && (
                                  <span className="text-xs text-slate-500">{content.duration}</span>
                                )}
                                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(content.status)}`}>
                                  {React.createElement(getStatusIcon(content.status), { className: "h-3 w-3 mr-1" })}
                                  {content.status === 'completed' ? 'Completado' : 
                                   content.status === 'in-progress' ? 'En Progreso' : 'Pendiente'}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Contenido */}
      {showContentModal && selectedContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    {React.createElement(getContentIcon(selectedContent.type), { className: "h-6 w-6 text-slate-600" })}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{selectedContent.title}</h3>
                </div>
                <button
                  onClick={() => setShowContentModal(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <p className="text-slate-600">{selectedContent.description}</p>
                {selectedContent.duration && (
                  <div className="flex items-center space-x-2 mt-2">
                    <ClockIcon className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-600">Duración: {selectedContent.duration}</span>
                  </div>
                )}
              </div>

              <div className="bg-slate-50 rounded-lg p-6 text-center">
                <div className="text-6xl mb-4">📚</div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Contenido Empresarial</h4>
                <p className="text-slate-600 mb-4">
                  Este contenido está disponible exclusivamente para empresas autorizadas.
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium">
                  Iniciar {selectedContent.type === 'video' ? 'Video' : 
                           selectedContent.type === 'document' ? 'Documento' :
                           selectedContent.type === 'quiz' ? 'Evaluación' : 'Práctica'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
