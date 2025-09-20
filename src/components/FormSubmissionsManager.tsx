'use client';

import { useState, useEffect } from 'react';
import {
  MagnifyingGlassIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  PhoneArrowUpRightIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';

interface FormSubmission {
  id: string;
  courseName: string;
  courseSlug: string;
  nombre: string;
  email: string;
  telefono: string;
  empresa: string | null;
  mensaje: string | null;
  status: string;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}

interface FormSubmissionsManagerProps {
  className?: string;
}

// Función para determinar el tipo de formulario
const getFormType = (courseName: string, courseSlug: string): string => {
  if (courseName.includes('Cita Programada')) {
    return 'appointment';
  } else if (courseSlug === 'contacto-general' || courseName.includes('Contacto')) {
    return 'contact';
  } else {
    return 'course';
  }
};

// Función para obtener el ícono del tipo de formulario
const getFormTypeIcon = (type: string) => {
  switch (type) {
    case 'appointment':
      return CalendarDaysIcon;
    case 'contact':
      return PhoneArrowUpRightIcon;
    case 'course':
      return AcademicCapIcon;
    default:
      return DocumentTextIcon;
  }
};

// Función para obtener el color del tipo de formulario
const getFormTypeColor = (type: string) => {
  switch (type) {
    case 'appointment':
      return 'text-green-600 bg-green-100';
    case 'contact':
      return 'text-blue-600 bg-blue-100';
    case 'course':
      return 'text-purple-600 bg-purple-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

// Función para obtener el nombre del tipo de formulario
const getFormTypeName = (type: string) => {
  switch (type) {
    case 'appointment':
      return 'Citas Programadas';
    case 'contact':
      return 'Contacto General';
    case 'course':
      return 'Solicitudes de Cursos';
    default:
      return 'Otros';
  }
};

export default function FormSubmissionsManager({ className = '' }: FormSubmissionsManagerProps) {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSubmission, setEditingSubmission] = useState<FormSubmission | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // Cargar solicitudes
  const loadSubmissions = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: '50'
      });

      if (searchTerm) params.append('search', searchTerm);
      if (statusFilter) params.append('status', statusFilter);

      const response = await fetch(`/api/form-submissions?${params}`);
      const data = await response.json();

      if (data.success) {
        setSubmissions(data.data.submissions);
        setTotalPages(data.data.totalPages);
      } else {
        setError(data.error || 'Error cargando solicitudes');
      }
    } catch (error) {
      console.error('Error cargando solicitudes:', error);
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubmissions();
  }, [currentPage, searchTerm, statusFilter]);

  // Filtrar solicitudes por tipo
  const filteredSubmissions = submissions.filter(submission => {
    if (!typeFilter) return true;
    const formType = getFormType(submission.courseName, submission.courseSlug);
    return formType === typeFilter;
  });

  // Agrupar solicitudes por tipo
  const groupedSubmissions = filteredSubmissions.reduce((groups, submission) => {
    const formType = getFormType(submission.courseName, submission.courseSlug);
    if (!groups[formType]) {
      groups[formType] = [];
    }
    groups[formType].push(submission);
    return groups;
  }, {} as Record<string, FormSubmission[]>);

  // Obtener estadísticas por tipo
  const getTypeStats = () => {
    const stats = {
      appointment: 0,
      contact: 0,
      course: 0,
      total: submissions.length
    };

    submissions.forEach(submission => {
      const formType = getFormType(submission.courseName, submission.courseSlug);
      stats[formType as keyof typeof stats]++;
    });

    return stats;
  };

  const stats = getTypeStats();

  // Formatear fecha
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateString;
    }
  };

  // Obtener color del estado
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'nuevo':
        return 'text-blue-600 bg-blue-100';
      case 'contactado':
        return 'text-yellow-600 bg-yellow-100';
      case 'cerrado':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  // Obtener nombre del estado
  const getStatusName = (status: string) => {
    switch (status) {
      case 'nuevo':
        return 'Nuevo';
      case 'contactado':
        return 'Contactado';
      case 'cerrado':
        return 'Cerrado';
      default:
        return status;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">Cargando solicitudes...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center">
          <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mr-2" />
          <span className="text-red-800">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header con estadísticas */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Solicitudes de Información
          </h3>
          <span className="text-sm text-gray-500">
            {stats.total} solicitudes totales
          </span>
        </div>

        {/* Estadísticas por tipo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
            <div className="flex items-center">
              <CalendarDaysIcon className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-green-800">Citas Programadas</p>
                <p className="text-2xl font-bold text-green-900">{stats.appointment}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
            <div className="flex items-center">
              <PhoneArrowUpRightIcon className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-blue-800">Contacto General</p>
                <p className="text-2xl font-bold text-blue-900">{stats.contact}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
            <div className="flex items-center">
              <AcademicCapIcon className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-purple-800">Solicitudes de Cursos</p>
                <p className="text-2xl font-bold text-purple-900">{stats.course}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
            <div className="flex items-center">
              <ClipboardDocumentListIcon className="h-8 w-8 text-gray-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-800">Total</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Buscar
            </label>
            <div className="relative">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nombre, email, empresa o curso..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de Formulario
            </label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todos los tipos</option>
              <option value="appointment">Citas Programadas</option>
              <option value="contact">Contacto General</option>
              <option value="course">Solicitudes de Cursos</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Estado
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todos los estados</option>
              <option value="nuevo">Nuevo</option>
              <option value="contactado">Contactado</option>
              <option value="cerrado">Cerrado</option>
            </select>
          </div>
        </div>
      </div>

      {/* Secciones por tipo de formulario */}
      {Object.entries(groupedSubmissions).map(([formType, typeSubmissions]) => {
        const IconComponent = getFormTypeIcon(formType);
        const typeColor = getFormTypeColor(formType);
        const typeName = getFormTypeName(formType);

        return (
          <div key={formType} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Header de la sección */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${typeColor} mr-3`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{typeName}</h3>
                    <p className="text-sm text-gray-600">{typeSubmissions.length} solicitudes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lista de solicitudes */}
            <div className="divide-y divide-gray-200">
              {typeSubmissions.map((submission) => (
                <div key={submission.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center space-x-2">
                          <UserIcon className="h-5 w-5 text-gray-400" />
                          <span className="font-medium text-gray-900">{submission.nombre}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <EnvelopeIcon className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{submission.email}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <PhoneIcon className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{submission.telefono}</span>
                        </div>

                        {submission.empresa && (
                          <div className="flex items-center space-x-2">
                            <BuildingOfficeIcon className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{submission.empresa}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center space-x-2">
                          <AcademicCapIcon className="h-4 w-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-900">{submission.courseName}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <CalendarIcon className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{formatDate(submission.createdAt)}</span>
                        </div>
                      </div>

                      {submission.mensaje && (
                        <div className="mb-3">
                          <div className="flex items-start space-x-2">
                            <ChatBubbleLeftRightIcon className="h-4 w-4 text-gray-400 mt-0.5" />
                            <p className="text-sm text-gray-700 line-clamp-2">{submission.mensaje}</p>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                          {getStatusName(submission.status)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => {
                          setSelectedSubmission(submission);
                          setIsModalOpen(true);
                        }}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                        title="Ver detalles"
                      >
                        <EyeIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between bg-white px-6 py-3 border border-gray-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Anterior
            </button>
            <span className="text-sm text-gray-700">
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente
            </button>
          </div>
        </div>
      )}

      {/* Modal de detalles */}
      {isModalOpen && selectedSubmission && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
            <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Detalles de la Solicitud</h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XCircleIcon className="h-6 w-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                      <p className="text-sm text-gray-900">{selectedSubmission.nombre}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <p className="text-sm text-gray-900">{selectedSubmission.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                      <p className="text-sm text-gray-900">{selectedSubmission.telefono}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                      <p className="text-sm text-gray-900">{selectedSubmission.empresa || 'No especificada'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Curso/Servicio</label>
                      <p className="text-sm text-gray-900">{selectedSubmission.courseName}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(selectedSubmission.status)}`}>
                        {getStatusName(selectedSubmission.status)}
                      </span>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Envío</label>
                      <p className="text-sm text-gray-900">{formatDate(selectedSubmission.createdAt)}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Formulario</label>
                      <div className="flex items-center">
                        <div className={`p-1 rounded ${getFormTypeColor(getFormType(selectedSubmission.courseName, selectedSubmission.courseSlug))} mr-2`}>
                          {(() => {
                            const IconComponent = getFormTypeIcon(getFormType(selectedSubmission.courseName, selectedSubmission.courseSlug));
                            return <IconComponent className="h-4 w-4" />;
                          })()}
                        </div>
                        <span className="text-sm text-gray-900">
                          {getFormTypeName(getFormType(selectedSubmission.courseName, selectedSubmission.courseSlug))}
                        </span>
                      </div>
                    </div>
                  </div>

                  {selectedSubmission.mensaje && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedSubmission.mensaje}</p>
                      </div>
                    </div>
                  )}

                  {selectedSubmission.notes && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Notas del Administrador</label>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedSubmission.notes}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}