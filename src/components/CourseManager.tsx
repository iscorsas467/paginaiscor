'use client';

import { useState, useEffect } from 'react';
import { 
  PencilIcon, 
  TrashIcon, 
  PlusIcon,
  CheckIcon,
  XMarkIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

interface Course {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  gradient: string;
  duration: string;
  certification: string;
  students: number;
  rating: number;
  category: string;
  order: number;
}

export default function CourseManager() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    icon: '🏗️',
    gradient: 'from-blue-500 to-blue-600',
    duration: '40 horas',
    certification: 'Válido 2 años',
    category: 'Seguridad Industrial'
  });

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const response = await fetch('/api/courses');
      if (response.ok) {
        const data = await response.json();
        setCourses(data.data || []);
      }
    } catch (error) {
      console.error('Error loading courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await loadCourses();
        setShowAddForm(false);
        resetForm();
        alert('Curso creado exitosamente');
      } else {
        alert('Error al crear el curso');
      }
    } catch (error) {
      console.error('Error saving course:', error);
      alert('Error al crear el curso');
    }
  };

  const handleUpdate = async (courseId: string) => {
    try {
      const course = courses.find(c => c.id === courseId);
      if (!course) return;

      const response = await fetch('/api/courses', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: courseId,
          name: course.name,
          description: course.description,
          icon: course.icon,
          gradient: course.gradient,
          order: course.order
        }),
      });

      if (response.ok) {
        setEditing(null);
        alert('Curso actualizado exitosamente');
      } else {
        alert('Error al actualizar el curso');
      }
    } catch (error) {
      console.error('Error updating course:', error);
      alert('Error al actualizar el curso');
    }
  };

  const handleDelete = async (courseId: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este curso?')) return;

    try {
      const response = await fetch(`/api/courses?id=${courseId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await loadCourses();
        alert('Curso eliminado exitosamente');
      } else {
        alert('Error al eliminar el curso');
      }
    } catch (error) {
      console.error('Error deleting course:', error);
      alert('Error al eliminar el curso');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      icon: '🏗️',
      gradient: 'from-blue-500 to-blue-600',
      duration: '40 horas',
      certification: 'Válido 2 años',
      category: 'Seguridad Industrial'
    });
  };

  const updateCourseField = (courseId: string, field: keyof Course, value: string | number) => {
    setCourses(prev => prev.map(course => 
      course.id === courseId ? { ...course, [field]: value } : course
    ));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Cargando cursos...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Gestión de Cursos</h3>
        <button
          onClick={() => setShowAddForm(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          Agregar Curso
        </button>
      </div>

      {/* Formulario para agregar curso */}
      {showAddForm && (
        <div className="bg-white shadow rounded-lg p-6">
          <h4 className="text-lg font-medium text-gray-900 mb-4">Agregar Nuevo Curso</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre del Curso
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ej: Trabajo en Alturas"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Icono
              </label>
              <input
                type="text"
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="🏗️"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descripción
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Descripción del curso..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gradiente
              </label>
              <select
                value={formData.gradient}
                onChange={(e) => setFormData({ ...formData, gradient: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="from-blue-500 to-blue-600">Azul</option>
                <option value="from-green-500 to-green-600">Verde</option>
                <option value="from-red-500 to-red-600">Rojo</option>
                <option value="from-purple-500 to-purple-600">Púrpura</option>
                <option value="from-orange-500 to-orange-600">Naranja</option>
                <option value="from-yellow-500 to-yellow-600">Amarillo</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoría
              </label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Seguridad Industrial"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-4">
            <button
              onClick={() => {
                setShowAddForm(false);
                resetForm();
              }}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <XMarkIcon className="h-4 w-4 mr-2" />
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              <CheckIcon className="h-4 w-4 mr-2" />
              Guardar
            </button>
          </div>
        </div>
      )}

      {/* Lista de cursos */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h4 className="text-lg font-medium text-gray-900 mb-4">Cursos Actuales</h4>
          <div className="space-y-4">
            {courses.length === 0 ? (
              <p className="text-gray-500 italic text-center py-8">No hay cursos configurados</p>
            ) : (
              courses.map((course) => (
                <div key={course.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${course.gradient} rounded-lg flex items-center justify-center`}>
                        <span className="text-2xl">
                          {typeof course.icon === 'string' ? course.icon : <course.icon className="h-6 w-6" />}
                        </span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">{course.name}</h5>
                        <p className="text-sm text-gray-600">{course.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                          <span>👥 {course.students} estudiantes</span>
                          <span>⭐ {course.rating.toFixed(1)}</span>
                          <span>📅 {course.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {editing === course.id ? (
                        <>
                          <button
                            onClick={() => handleUpdate(course.id)}
                            className="text-green-600 hover:text-green-800"
                          >
                            <CheckIcon className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => setEditing(null)}
                            className="text-gray-600 hover:text-gray-800"
                          >
                            <XMarkIcon className="h-5 w-5" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => setEditing(course.id)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <PencilIcon className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(course.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  
                  {editing === course.id && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Nombre
                        </label>
                        <input
                          type="text"
                          value={course.name}
                          onChange={(e) => updateCourseField(course.id, 'name', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Icono
                        </label>
                        <input
                          type="text"
                          value={course.icon}
                          onChange={(e) => updateCourseField(course.id, 'icon', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Descripción
                        </label>
                        <textarea
                          value={course.description}
                          onChange={(e) => updateCourseField(course.id, 'description', e.target.value)}
                          rows={2}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}