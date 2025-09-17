'use client';

import { useState, useEffect } from 'react';

// Helper function to render icons
const renderIcon = (icon: any, className: string = "h-6 w-6") => {
  if (typeof icon === 'string') {
    return <span className="text-2xl">{icon}</span>;
  }
  const IconComponent = icon;
  return <IconComponent className={className} />;
};
import { 
  PencilIcon, 
  TrashIcon, 
  PlusIcon,
  CheckIcon,
  XMarkIcon,
  AcademicCapIcon,
  MinusIcon
} from '@heroicons/react/24/outline';

interface Course {
  // Campos básicos (editables)
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
  
  // Campos detallados (editables)
  detailedDescription?: string;
  duration?: string;
  certification?: string;
  category?: string;
  students?: number;
  rating?: number;
  price?: string;
  instructor?: string;
  location?: string;
  schedule?: string;
  image?: string;
  objectives?: string[];
  benefits?: string[];
  requirements?: string[];
  modules?: string[];
  slug?: string;
  
  // Campos técnicos (NO editables)
  order: number;
  createdAt: string;
  updatedAt: string;
  servicesId: string;
}

// Componente para manejar campos de array
interface ArrayFieldProps {
  label: string;
  items: string[];
  onAdd: (value: string) => void;
  onRemove: (index: number) => void;
  onUpdate: (index: number, value: string) => void;
  placeholder?: string;
}

function ArrayField({ label, items, onAdd, onRemove, onUpdate, placeholder }: ArrayFieldProps) {
  const [newItem, setNewItem] = useState('');

  const handleAdd = () => {
    if (newItem.trim()) {
      onAdd(newItem);
      setNewItem('');
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="text"
              value={item}
              onChange={(e) => onUpdate(index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => onRemove(index)}
              className="text-red-600 hover:text-red-800"
            >
              <MinusIcon className="h-4 w-4" />
            </button>
          </div>
        ))}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
            placeholder={placeholder || `Agregar ${label.toLowerCase()}...`}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={handleAdd}
            className="text-green-600 hover:text-green-800"
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CourseManager() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    // Campos básicos
    name: '',
    description: '',
    icon: '🏗️',
    gradient: 'from-blue-500 to-blue-600',
    
    // Campos detallados
    detailedDescription: '',
    duration: '40 horas',
    certification: 'Válido 2 años',
    category: 'Seguridad Industrial',
    students: 0,
    rating: 4.5,
    price: 'Consultar',
    instructor: '',
    location: 'Centro de Entrenamiento ISCOR',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    image: '',
    objectives: [] as string[],
    benefits: [] as string[],
    requirements: [] as string[],
    modules: [] as string[],
    slug: ''
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
          order: course.order,
          // Campos detallados
          detailedDescription: course.detailedDescription,
          duration: course.duration,
          certification: course.certification,
          category: course.category,
          students: course.students,
          rating: course.rating,
          price: course.price,
          instructor: course.instructor,
          location: course.location,
          schedule: course.schedule,
          image: course.image,
          objectives: course.objectives,
          benefits: course.benefits,
          requirements: course.requirements,
          modules: course.modules,
          slug: course.slug
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
      // Campos básicos
      name: '',
      description: '',
      icon: '🏗️',
      gradient: 'from-blue-500 to-blue-600',
      
      // Campos detallados
      detailedDescription: '',
      duration: '40 horas',
      certification: 'Válido 2 años',
      category: 'Seguridad Industrial',
      students: 0,
      rating: 4.5,
      price: 'Consultar',
      instructor: '',
      location: 'Centro de Entrenamiento ISCOR',
      schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
      image: '',
      objectives: [],
      benefits: [],
      requirements: [],
      modules: [],
      slug: ''
    });
  };

  const updateCourseField = (courseId: string, field: keyof Course, value: string | number) => {
    setCourses(prev => prev.map(course => 
      course.id === courseId ? { ...course, [field]: value } : course
    ));
  };

  const addArrayItem = (field: 'objectives' | 'benefits' | 'requirements' | 'modules', value: string) => {
    if (!value.trim()) return;
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], value.trim()]
    }));
  };

  const removeArrayItem = (field: 'objectives' | 'benefits' | 'requirements' | 'modules', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const updateArrayItem = (field: 'objectives' | 'benefits' | 'requirements' | 'modules', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
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
          <h4 className="text-lg font-medium text-gray-900 mb-6">Agregar Nuevo Curso</h4>
          
          {/* Información Básica */}
          <div className="mb-8">
            <h5 className="text-md font-medium text-gray-800 mb-4 border-b pb-2">Información Básica</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre del Curso *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ej: Trabajo en Alturas"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Slug (URL amigable)
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="trabajo-en-alturas"
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duración
                </label>
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="40 horas"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descripción Corta
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Descripción breve del curso..."
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descripción Detallada
                </label>
                <textarea
                  value={formData.detailedDescription}
                  onChange={(e) => setFormData({ ...formData, detailedDescription: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Descripción completa y detallada del curso..."
                />
              </div>
            </div>
          </div>

          {/* Información del Curso */}
          <div className="mb-8">
            <h5 className="text-md font-medium text-gray-800 mb-4 border-b pb-2">Información del Curso</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Certificación
                </label>
                <input
                  type="text"
                  value={formData.certification}
                  onChange={(e) => setFormData({ ...formData, certification: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Válido 2 años"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Precio
                </label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Consultar"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número de Estudiantes
                </label>
                <input
                  type="number"
                  value={formData.students}
                  onChange={(e) => setFormData({ ...formData, students: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Calificación (1-5)
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) || 4.5 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="4.5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instructor
                </label>
                <input
                  type="text"
                  value={formData.instructor}
                  onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ing. Carlos Rodríguez"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ubicación
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Centro de Entrenamiento ISCOR"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Horario
                </label>
                <input
                  type="text"
                  value={formData.schedule}
                  onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Lunes a Viernes: 8:00 AM - 6:00 PM"
                />
              </div>
            </div>
          </div>

          {/* Contenido del Curso */}
          <div className="mb-8">
            <h5 className="text-md font-medium text-gray-800 mb-4 border-b pb-2">Contenido del Curso</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ArrayField
                label="Objetivos"
                items={formData.objectives}
                onAdd={(value) => addArrayItem('objectives', value)}
                onRemove={(index) => removeArrayItem('objectives', index)}
                onUpdate={(index, value) => updateArrayItem('objectives', index, value)}
                placeholder="Agregar objetivo..."
              />
              <ArrayField
                label="Beneficios"
                items={formData.benefits}
                onAdd={(value) => addArrayItem('benefits', value)}
                onRemove={(index) => removeArrayItem('benefits', index)}
                onUpdate={(index, value) => updateArrayItem('benefits', index, value)}
                placeholder="Agregar beneficio..."
              />
              <ArrayField
                label="Requisitos"
                items={formData.requirements}
                onAdd={(value) => addArrayItem('requirements', value)}
                onRemove={(index) => removeArrayItem('requirements', index)}
                onUpdate={(index, value) => updateArrayItem('requirements', index, value)}
                placeholder="Agregar requisito..."
              />
              <ArrayField
                label="Módulos"
                items={formData.modules}
                onAdd={(value) => addArrayItem('modules', value)}
                onRemove={(index) => removeArrayItem('modules', index)}
                onUpdate={(index, value) => updateArrayItem('modules', index, value)}
                placeholder="Agregar módulo..."
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
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
              Guardar Curso
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
                          {renderIcon(course.icon, "h-6 w-6")}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900">{course.name}</h5>
                        <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
                        
                        {/* Información básica */}
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                          <span>👥 {course.students || 0} estudiantes</span>
                          <span>⭐ {course.rating?.toFixed(1) || 'N/A'}</span>
                          <span>📅 {course.duration || 'N/A'}</span>
                          <span>🏷️ {course.category || 'N/A'}</span>
                        </div>
                        
                        {/* Información adicional */}
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                          {course.certification && <span>📜 {course.certification}</span>}
                          {course.price && <span>💰 {course.price}</span>}
                          {course.instructor && <span>👨‍🏫 {course.instructor.split(' - ')[0]}</span>}
                          {course.location && <span>📍 {course.location}</span>}
                        </div>
                        
                        {/* Descripción detallada */}
                        {course.detailedDescription && course.detailedDescription.trim() ? (
                          <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                            {course.detailedDescription}
                          </p>
                        ) : (
                          <p className="text-xs text-red-400 mt-1 italic">
                            ⚠️ Sin descripción detallada
                          </p>
                        )}
                        
                        {/* Contenido del curso */}
                        <div className="flex items-center space-x-2 text-xs text-gray-400 mt-1">
                          {course.objectives && course.objectives.length > 0 && (
                            <span>📋 {course.objectives.length} objetivos</span>
                          )}
                          {course.benefits && course.benefits.length > 0 && (
                            <span>✨ {course.benefits.length} beneficios</span>
                          )}
                          {course.requirements && course.requirements.length > 0 && (
                            <span>📝 {course.requirements.length} requisitos</span>
                          )}
                          {course.modules && course.modules.length > 0 && (
                            <span>📚 {course.modules.length} módulos</span>
                          )}
                        </div>
                        
                        {/* Información técnica (solo lectura) */}
                        <div className="flex items-center space-x-2 text-xs text-gray-300 mt-1">
                          <span>🆔 {course.id}</span>
                          <span>📊 Orden: {course.order}</span>
                          {course.slug && <span>🔗 {course.slug}</span>}
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
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <h6 className="text-sm font-medium text-gray-800 mb-4">Editar Curso - {course.name}</h6>
                      
                      {/* Información Básica */}
                      <div className="mb-6">
                        <div className="text-xs font-medium text-gray-600 mb-3">Información Básica</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Nombre *
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
                              Slug
                            </label>
                            <input
                              type="text"
                              value={course.slug || ''}
                              onChange={(e) => updateCourseField(course.id, 'slug', e.target.value)}
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
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Gradiente
                            </label>
                            <select
                              value={course.gradient}
                              onChange={(e) => updateCourseField(course.id, 'gradient', e.target.value)}
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
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Descripción Detallada
                            </label>
                            <textarea
                              value={course.detailedDescription || ''}
                              onChange={(e) => updateCourseField(course.id, 'detailedDescription', e.target.value)}
                              rows={4}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Descripción completa y detallada del curso..."
                            />
                            {!course.detailedDescription && (
                              <p className="text-xs text-gray-400 mt-1">
                                ⚠️ Este campo está vacío. Agrega una descripción detallada del curso.
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Información del Curso */}
                      <div className="mb-6">
                        <div className="text-xs font-medium text-gray-600 mb-3">Información del Curso</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Duración
                            </label>
                            <input
                              type="text"
                              value={course.duration || ''}
                              onChange={(e) => updateCourseField(course.id, 'duration', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Certificación
                            </label>
                            <input
                              type="text"
                              value={course.certification || ''}
                              onChange={(e) => updateCourseField(course.id, 'certification', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Categoría
                            </label>
                            <input
                              type="text"
                              value={course.category || ''}
                              onChange={(e) => updateCourseField(course.id, 'category', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Precio
                            </label>
                            <input
                              type="text"
                              value={course.price || ''}
                              onChange={(e) => updateCourseField(course.id, 'price', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Estudiantes
                            </label>
                            <input
                              type="number"
                              value={course.students || 0}
                              onChange={(e) => updateCourseField(course.id, 'students', parseInt(e.target.value) || 0)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Calificación (1-5)
                            </label>
                            <input
                              type="number"
                              step="0.1"
                              min="1"
                              max="5"
                              value={course.rating || 4.5}
                              onChange={(e) => updateCourseField(course.id, 'rating', parseFloat(e.target.value) || 4.5)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Instructor
                            </label>
                            <input
                              type="text"
                              value={course.instructor || ''}
                              onChange={(e) => updateCourseField(course.id, 'instructor', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Ubicación
                            </label>
                            <input
                              type="text"
                              value={course.location || ''}
                              onChange={(e) => updateCourseField(course.id, 'location', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Horario
                            </label>
                            <input
                              type="text"
                              value={course.schedule || ''}
                              onChange={(e) => updateCourseField(course.id, 'schedule', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Imagen (URL)
                            </label>
                            <input
                              type="text"
                              value={course.image || ''}
                              onChange={(e) => updateCourseField(course.id, 'image', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="https://ejemplo.com/imagen.png"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Información Técnica (Solo Lectura) */}
                      <div className="mb-4 p-3 bg-gray-100 rounded">
                        <div className="text-xs font-medium text-gray-600 mb-2">Información Técnica (Solo Lectura)</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-500">
                          <div>🆔 ID: {course.id}</div>
                          <div>📊 Orden: {course.order}</div>
                          <div>📅 Creado: {new Date(course.createdAt).toLocaleDateString()}</div>
                          <div>🔄 Actualizado: {new Date(course.updatedAt).toLocaleDateString()}</div>
                          <div>🔗 Services ID: {course.servicesId}</div>
                        </div>
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