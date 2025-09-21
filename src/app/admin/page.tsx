'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  ChartBarIcon,
  UsersIcon,
  DocumentTextIcon,
  CogIcon,
  BellIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  HomeIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  PhotoIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import ContentManager from '@/components/ContentManager';
import CourseManager from '@/components/CourseManager';
import CertificateManager from '@/components/CertificateManager';
import FormSubmissionsManager from '@/components/FormSubmissionsManager';
import NotificationsDropdown from '@/components/NotificationsDropdown';

export default function AdminPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user, setUser] = useState<any>(null);
  const [dashboardStats, setDashboardStats] = useState<any>(null);
  const [statsLoading, setStatsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/verify');
        if (!response.ok) {
          router.push('/login');
          return;
        }
        const data = await response.json();
        setUser(data.user);
        setIsLoading(false);
      } catch (error) {
    router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  // Cargar estadísticas del dashboard
  useEffect(() => {
    const loadDashboardStats = async () => {
      try {
        const response = await fetch('/api/dashboard-stats');
        if (response.ok) {
          const data = await response.json();
          setDashboardStats(data.data);
        }
      } catch (error) {
        console.error('Error cargando estadísticas:', error);
      } finally {
        setStatsLoading(false);
      }
    };

    loadDashboardStats();
  }, []);

  const handleLogout = async () => {
    try {
      // Llamar al endpoint de logout para limpiar la sesión del servidor
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error('Error en el servidor');
      }
      
      // Limpiar todas las cookies del cliente de forma más agresiva
      const cookies = ['admin-auth', 'session', 'auth-token'];
      cookies.forEach(cookieName => {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
      });
      
      // Limpiar localStorage y sessionStorage
      localStorage.clear();
      sessionStorage.clear();
      
      // Forzar recarga de la página para limpiar cualquier estado
      window.location.href = '/';
      
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      // Limpiar cookies de todas formas
      document.cookie = 'admin-auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      // Redirigir de todas formas
      window.location.href = '/';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-center mb-6">
            <ShieldCheckIcon className="h-12 w-12 text-blue-600 mr-4" />
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Verificando Acceso</h2>
          <p className="text-gray-600">Validando credenciales de administración...</p>
          <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
            <ExclamationTriangleIcon className="h-4 w-4 mr-2" />
            Acceso restringido
          </div>
        </div>
      </div>
    );
  }

  const navigation = [
    { name: 'Dashboard', icon: HomeIcon, id: 'dashboard' },
    { name: 'Gestión de Cursos', icon: AcademicCapIcon, id: 'courses' },
    { name: 'Solicitudes de Información', icon: DocumentTextIcon, id: 'form-submissions' },
    { name: 'Contenido del Sitio', icon: DocumentTextIcon, id: 'content' },
    { name: 'Usuarios', icon: UsersIcon, id: 'users' },
    { name: 'Certificados', icon: ClipboardDocumentListIcon, id: 'certificates' },
    { name: 'Galería', icon: PhotoIcon, id: 'gallery' },
    { name: 'SEO', icon: GlobeAltIcon, id: 'seo' },
    { name: 'Configuración', icon: CogIcon, id: 'settings' },
  ];

  // Estadísticas dinámicas basadas en datos reales
  const stats = dashboardStats ? [
    { 
      name: 'Total de Cursos', 
      value: dashboardStats.overview.totalCourses.toString(), 
      change: 'Disponibles', 
      changeType: 'neutral',
      icon: AcademicCapIcon
    },
    { 
      name: 'Certificados Emitidos', 
      value: dashboardStats.overview.totalCertificates.toString(), 
      change: 'Histórico', 
      changeType: 'positive',
      icon: ClipboardDocumentListIcon
    },
    { 
      name: 'Solicitudes del Mes', 
      value: dashboardStats.overview.monthlySubmissions.toString(), 
      change: dashboardStats.overview.submissionChange >= 0 ? `+${dashboardStats.overview.submissionChange}%` : `${dashboardStats.overview.submissionChange}%`, 
      changeType: dashboardStats.overview.submissionChange >= 0 ? 'positive' : 'negative',
      icon: DocumentTextIcon
    },
    { 
      name: 'Solicitudes Pendientes', 
      value: dashboardStats.overview.pendingSubmissions.toString(), 
      change: 'Requieren atención', 
      changeType: 'warning',
      icon: ExclamationTriangleIcon
    },
  ] : [
    { name: 'Total de Cursos', value: '29', change: 'Disponibles', changeType: 'neutral', icon: AcademicCapIcon },
    { name: 'Certificados Emitidos', value: '5,700+', change: 'Histórico', changeType: 'positive', icon: ClipboardDocumentListIcon },
    { name: 'Solicitudes del Mes', value: '0', change: 'Cargando...', changeType: 'neutral', icon: DocumentTextIcon },
    { name: 'Solicitudes Pendientes', value: '0', change: 'Cargando...', changeType: 'neutral', icon: ExclamationTriangleIcon },
  ];

  // Actividad reciente basada en datos reales
  const recentActivity = dashboardStats?.recentActivity || [
    { id: 1, action: 'Cargando actividad...', user: 'Sistema', time: 'Ahora' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'courses':
        return (
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Gestión de Cursos</h2>
              <p className="text-gray-600 mt-1">Administra todos los cursos y servicios de ISCOR</p>
            </div>
            <CourseManager />
          </div>
        );
      case 'content':
        return (
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Contenido del Sitio</h2>
              <p className="text-gray-600 mt-1">Gestiona el contenido de las páginas principales</p>
            </div>
            <ContentManager />
          </div>
        );
      case 'form-submissions':
        return (
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Solicitudes de Información</h2>
              <p className="text-gray-600 mt-1">Gestiona las solicitudes enviadas desde los formularios de cursos</p>
            </div>
            <FormSubmissionsManager />
          </div>
        );
      case 'certificates':
        return (
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Gestión de Certificados</h2>
              <p className="text-gray-600 mt-1">Administra todos los certificados emitidos por ISCOR</p>
            </div>
            <CertificateManager />
          </div>
        );
      case 'dashboard':
        return (
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
              <p className="text-gray-600 mt-1">Resumen general del sistema de administración</p>
            </div>
            
            <div className="space-y-6 lg:space-y-8">
              {/* Estadísticas */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Estadísticas Generales</h3>
                  {statsLoading && (
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                      Cargando...
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
                  {stats.map((stat) => {
                    const IconComponent = stat.icon;
                    const getBgColor = (changeType: string) => {
                      switch (changeType) {
                        case 'positive': return 'bg-green-100';
                        case 'negative': return 'bg-red-100';
                        case 'warning': return 'bg-yellow-100';
                        default: return 'bg-blue-100';
                      }
                    };
                    const getIconColor = (changeType: string) => {
                      switch (changeType) {
                        case 'positive': return 'text-green-600';
                        case 'negative': return 'text-red-600';
                        case 'warning': return 'text-yellow-600';
                        default: return 'text-blue-600';
                      }
                    };
                    
                    return (
                      <div key={stat.name} className="bg-gradient-to-br from-white to-gray-50 overflow-hidden shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition-shadow duration-200">
                        <div className="p-4 lg:p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className={`w-12 h-12 ${getBgColor(stat.changeType)} rounded-xl flex items-center justify-center shadow-sm`}>
                                <IconComponent className={`h-6 w-6 ${getIconColor(stat.changeType)}`} />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-gray-600 leading-tight mb-1">
                                {stat.name}
                              </h4>
                              <div className="flex items-baseline space-x-2">
                                <span className="text-2xl lg:text-3xl font-bold text-gray-900">
                                  {stat.value}
                                </span>
                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                  stat.changeType === 'positive' ? 'bg-green-100 text-green-700' : 
                                  stat.changeType === 'negative' ? 'bg-red-100 text-red-700' :
                                  stat.changeType === 'warning' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'
                                }`}>
                                  {stat.change}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Cursos Más Solicitados */}
              {dashboardStats?.charts?.courseStats && dashboardStats.charts.courseStats.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Cursos Más Solicitados</h3>
                    <span className="text-sm text-gray-500">Top 5</span>
                  </div>
                  <div className="bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-xl border border-gray-200 overflow-hidden">
                    <div className="p-4 lg:p-6">
                      <div className="space-y-3">
                        {dashboardStats.charts.courseStats.slice(0, 5).map((course: any, index: number) => (
                          <div key={course.courseName} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-center space-x-4 flex-1 min-w-0">
                              <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-sm">
                                  <span className="text-sm font-bold text-white">#{index + 1}</span>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-gray-900 text-sm lg:text-base truncate">
                                  {course.courseName}
                                </h4>
                                <p className="text-sm text-gray-500 mt-1">
                                  {course._count.courseName} solicitud{course._count.courseName !== 1 ? 'es' : ''}
                                </p>
                              </div>
                            </div>
                            <div className="flex-shrink-0 ml-4">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                                {course._count.courseName}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Actividad Reciente */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Actividad Reciente</h3>
                  <span className="text-sm text-gray-500">Últimas 10 actividades</span>
                </div>
                <div className="bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-xl border border-gray-200 overflow-hidden">
                  <div className="p-4 lg:p-6">
                    {recentActivity.length > 0 && recentActivity[0].action !== 'Cargando actividad...' ? (
                      <div className="space-y-4">
                        {recentActivity.map((activity, activityIdx) => (
                          <div key={activity.id} className="relative">
                            <div className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-200">
                              <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-sm">
                                  <BellIcon className="h-5 w-5 text-white" />
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 leading-tight">
                                      {activity.action}
                                    </p>
                                    <div className="mt-1 flex items-center space-x-2 text-xs text-gray-500">
                                      <span>Por <span className="font-semibold text-gray-700">{activity.user}</span></span>
                                      {activity.company && (
                                        <>
                                          <span>•</span>
                                          <span className="truncate">{activity.company}</span>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                  <div className="flex-shrink-0 ml-4">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                                      {activity.time}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {activityIdx !== recentActivity.length - 1 && (
                              <div className="absolute left-6 top-12 w-0.5 h-4 bg-gray-200"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <BellIcon className="h-8 w-8 text-gray-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Sin actividad reciente</h4>
                        <p className="text-gray-500 text-sm max-w-md mx-auto">
                          Las solicitudes de formularios aparecerán aquí cuando los usuarios se pongan en contacto contigo.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );


      default:
        return (
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {navigation.find(nav => nav.id === activeTab)?.name}
              </h2>
              <p className="text-gray-600 mt-1">Funcionalidad en desarrollo</p>
            </div>
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">En Desarrollo</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Esta sección está siendo desarrollada y estará disponible próximamente. 
                Mientras tanto, puedes usar las otras funcionalidades del panel.
              </p>
              <div className="mt-8">
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  <HomeIcon className="h-5 w-5 mr-2" />
                  Volver al Dashboard
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Mejorado */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Image
                    src="/iscor-logo-pequeño.png"
                    alt="ISCOR Logo"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Panel de Administración</h1>
                  <p className="text-sm text-gray-500">ISCOR Colombia</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Indicador de Seguridad */}
              <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-lg border border-green-200">
                <ShieldCheckIcon className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-800">Sesión Segura</span>
              </div>
              
              {/* Notificaciones */}
              <NotificationsDropdown />
              
              {/* Información del Usuario */}
              <div className="flex items-center space-x-3 bg-gray-50 px-4 py-2 rounded-lg">
                <UserCircleIcon className="h-8 w-8 text-gray-400" />
                <div className="text-sm">
                  <p className="font-medium text-gray-900">{user?.email}</p>
                  <p className="text-gray-500">Administrador</p>
                </div>
              </div>
              
              {/* Botón de Cerrar Sesión */}
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
              >
                <ArrowRightOnRectangleIcon className="h-4 w-4 mr-2" />
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Mejorado */}
          <div className="w-72 bg-white shadow-xl rounded-2xl border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Navegación</h2>
              <p className="text-sm text-gray-500 mt-1">Gestiona tu contenido</p>
            </div>
            
            <nav className="p-4">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveTab(item.id)}
                    className={`${
                      activeTab === item.id
                        ? 'bg-blue-50 text-blue-700 border-blue-200 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-transparent'
                    } group flex items-center px-4 py-3 text-sm font-medium rounded-xl w-full text-left border transition-all duration-200`}
                  >
                    <item.icon
                      className={`${
                        activeTab === item.id ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'
                      } mr-3 flex-shrink-0 h-5 w-5`}
                    />
                    {item.name}
                    {activeTab === item.id && (
                      <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </nav>
            
            {/* Información de Seguridad */}
            <div className="p-4 border-t border-gray-200 mt-4">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <div className="flex items-start">
                  <ExclamationTriangleIcon className="h-5 w-5 text-amber-600 mt-0.5 mr-2" />
                  <div className="text-sm">
                    <p className="font-medium text-amber-800">Sesión Activa</p>
                    <p className="text-amber-700 mt-1">Tu sesión expirará automáticamente por seguridad.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}