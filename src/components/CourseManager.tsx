'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  PencilIcon, 
  EyeIcon, 
  XMarkIcon,
  PlusIcon,
  TrashIcon,
  PhotoIcon,
  CheckCircleIcon,
  ClockIcon,
  UserIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  ArrowRightIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

interface Course {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  duration: string;
  certification: string;
  gradient: string;
  detailedDescription: string;
  objectives: string[];
  benefits: string[];
  requirements: string[];
  modules: string[];
  instructor: string;
  price: string;
  location: string;
  schedule: string;
  icon: string;
}

interface CourseManagerProps {
  onClose: () => void;
  onSave: (course: Course) => void;
  initialCourse?: Course;
}

const defaultCourse: Course = {
  id: '',
  name: '',
  slug: '',
  image: '/montacargas .png',
  description: '',
  duration: '',
  certification: '',
  gradient: 'from-blue-600 to-cyan-600',
  detailedDescription: '',
  objectives: [''],
  benefits: [''],
  requirements: [''],
  modules: [''],
  instructor: '',
  price: '',
  location: '',
  schedule: '',
  icon: 'CogIcon'
};

const availableImages = [
  '/montacargas .png',
  '/fuego.png',
  '/plandeemergencia.png',
  '/brigada_de_emergencia.png',
  '/materiales_peligrosos.png',
  '/tareas_de_alto_riesgo.png',
  '/seguridad_acuatica.png',
  '/seguridad_fisica.png',
  '/primeros_auxilios.png',
  '/control_de_calidad.png',
  '/inspecciones_certificadas.png',
  '/reintegro_laboral.png',
  '/alturas.png',
  '/Lockout_tagout.png',
  '/Espacios_confinados.png',
  '/buceo.png'
];

const gradients = [
  'from-blue-600 to-cyan-600',
  'from-green-600 to-emerald-600',
  'from-purple-600 to-pink-600',
  'from-orange-600 to-red-600',
  'from-indigo-600 to-purple-600',
  'from-yellow-600 to-orange-600',
  'from-red-600 to-pink-600',
  'from-gray-600 to-slate-600',
  'from-teal-600 to-cyan-600'
];

export default function CourseManager({ onClose, onSave, initialCourse }: CourseManagerProps) {
  const [course, setCourse] = useState<Course>(initialCourse || defaultCourse);
  const [showPreview, setShowPreview] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (field: keyof Course, value: any) => {
    setCourse(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field: keyof Course, index: number, value: string) => {
    setCourse(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).map((item: string, i: number) => 
        i === index ? value : item
      )
    }));
  };

  const addArrayItem = (field: keyof Course) => {
    setCourse(prev => ({
      ...prev,
      [field]: [...(prev[field] as string[]), '']
    }));
  };

  const removeArrayItem = (field: keyof Course, index: number) => {
    setCourse(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).filter((_: string, i: number) => i !== index)
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    onSave(course);
    setIsSaving(false);
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const renderPreview = () => (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
        <EyeIcon className="h-5 w-5 mr-2 text-blue-600" />
        Vista Previa del Curso
      </h4>
      
      <div className="space-y-6">
        {/* Hero Card */}
        <div className={`bg-gradient-to-r ${course.gradient} rounded-xl p-6 text-white`}>
          <div className="flex items-center space-x-4">
            <Image
              src={course.image}
              alt={course.name}
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-bold">{course.name || 'Nombre del Curso'}</h3>
              <p className="text-white/80">{course.description || 'Descripción del curso'}</p>
            </div>
          </div>
        </div>

        {/* Course Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
            <ClockIcon className="h-5 w-5 text-slate-600" />
            <span className="text-sm text-slate-700">{course.duration || 'Duración'}</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
            <CheckCircleIcon className="h-5 w-5 text-slate-600" />
            <span className="text-sm text-slate-700">{course.certification || 'Certificación'}</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
            <UserIcon className="h-5 w-5 text-slate-600" />
            <span className="text-sm text-slate-700">{course.instructor || 'Instructor'}</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
            <CurrencyDollarIcon className="h-5 w-5 text-slate-600" />
            <span className="text-sm text-slate-700">{course.price || 'Precio'}</span>
          </div>
        </div>

        {/* Detailed Description */}
        {course.detailedDescription && (
          <div>
            <h5 className="font-semibold text-slate-900 mb-2">Descripción Detallada</h5>
            <p className="text-slate-600 text-sm">{course.detailedDescription}</p>
          </div>
        )}

        {/* Objectives */}
        {course.objectives.length > 0 && course.objectives[0] && (
          <div>
            <h5 className="font-semibold text-slate-900 mb-2">Objetivos</h5>
            <ul className="space-y-1">
              {course.objectives.map((objective, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-slate-600">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Modules */}
        {course.modules.length > 0 && course.modules[0] && (
          <div>
            <h5 className="font-semibold text-slate-900 mb-2">Módulos del Curso</h5>
            <div className="grid grid-cols-1 gap-2">
              {course.modules.map((module, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <span className="text-sm text-slate-700">{module}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <AcademicCapIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                {initialCourse ? 'Editar Curso' : 'Crear Nuevo Curso'}
              </h3>
              <p className="text-sm text-slate-600">Gestiona la información del curso con vista previa en tiempo real</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                showPreview 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <EyeIcon className="h-4 w-4 mr-2 inline" />
              {showPreview ? 'Ocultar Vista Previa' : 'Mostrar Vista Previa'}
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 disabled:opacity-50"
            >
              {isSaving ? 'Guardando...' : 'Guardar Curso'}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors duration-200"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex h-[calc(90vh-120px)]">
          {/* Editor Panel */}
          <div className={`${showPreview ? 'w-1/2' : 'w-full'} p-6 overflow-y-auto border-r border-slate-200`}>
            <div className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-900">Información Básica</h4>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre del Curso *
                  </label>
                  <input
                    type="text"
                    value={course.name}
                    onChange={(e) => {
                      handleInputChange('name', e.target.value);
                      handleInputChange('slug', generateSlug(e.target.value));
                    }}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ej: Montacargas"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Slug (URL)
                  </label>
                  <input
                    type="text"
                    value={course.slug}
                    onChange={(e) => handleInputChange('slug', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="montacargas"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Descripción Corta
                  </label>
                  <textarea
                    value={course.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Descripción breve del curso"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Descripción Detallada
                  </label>
                  <textarea
                    value={course.detailedDescription}
                    onChange={(e) => handleInputChange('detailedDescription', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Descripción completa del curso"
                  />
                </div>
              </div>

              {/* Course Details */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-900">Detalles del Curso</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Duración
                    </label>
                    <input
                      type="text"
                      value={course.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ej: 40 horas"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Certificación
                    </label>
                    <input
                      type="text"
                      value={course.certification}
                      onChange={(e) => handleInputChange('certification', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ej: Certificado válido por 2 años"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Instructor
                    </label>
                    <input
                      type="text"
                      value={course.instructor}
                      onChange={(e) => handleInputChange('instructor', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ej: Ing. Carlos Mendoza"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Precio
                    </label>
                    <input
                      type="text"
                      value={course.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ej: $450.000 COP"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Ubicación
                    </label>
                    <input
                      type="text"
                      value={course.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ej: Bogotá, Colombia"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Horario
                    </label>
                    <input
                      type="text"
                      value={course.schedule}
                      onChange={(e) => handleInputChange('schedule', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ej: Lunes a Viernes 8:00 AM - 5:00 PM"
                    />
                  </div>
                </div>
              </div>

              {/* Visual Settings */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-900">Configuración Visual</h4>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Imagen del Curso
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {availableImages.map((image) => (
                      <button
                        key={image}
                        onClick={() => handleInputChange('image', image)}
                        className={`p-2 border-2 rounded-lg transition-colors duration-200 ${
                          course.image === image 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <Image
                          src={image}
                          alt="Course"
                          width={48}
                          height={48}
                          className="w-full h-12 object-cover rounded"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Gradiente de Color
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {gradients.map((gradient) => (
                      <button
                        key={gradient}
                        onClick={() => handleInputChange('gradient', gradient)}
                        className={`h-12 rounded-lg transition-all duration-200 ${
                          course.gradient === gradient 
                            ? 'ring-2 ring-blue-500 ring-offset-2' 
                            : 'hover:scale-105'
                        } bg-gradient-to-r ${gradient}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Arrays */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-900">Contenido del Curso</h4>
                
                {/* Objectives */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-700">
                    Objetivos del Curso
                  </label>
                  {course.objectives.map((objective, index) => (
                    <div key={index} className="flex space-x-2">
                      <input
                        type="text"
                        value={objective}
                        onChange={(e) => handleArrayChange('objectives', index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={`Objetivo ${index + 1}`}
                      />
                      <button
                        onClick={() => removeArrayItem('objectives', index)}
                        className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => addArrayItem('objectives')}
                    className="flex items-center px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  >
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Agregar Objetivo
                  </button>
                </div>

                {/* Modules */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-700">
                    Módulos del Curso
                  </label>
                  {course.modules.map((module, index) => (
                    <div key={index} className="flex space-x-2">
                      <input
                        type="text"
                        value={module}
                        onChange={(e) => handleArrayChange('modules', index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={`Módulo ${index + 1}`}
                      />
                      <button
                        onClick={() => removeArrayItem('modules', index)}
                        className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => addArrayItem('modules')}
                    className="flex items-center px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  >
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Agregar Módulo
                  </button>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-700">
                    Beneficios del Curso
                  </label>
                  {course.benefits.map((benefit, index) => (
                    <div key={index} className="flex space-x-2">
                      <input
                        type="text"
                        value={benefit}
                        onChange={(e) => handleArrayChange('benefits', index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={`Beneficio ${index + 1}`}
                      />
                      <button
                        onClick={() => removeArrayItem('benefits', index)}
                        className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => addArrayItem('benefits')}
                    className="flex items-center px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  >
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Agregar Beneficio
                  </button>
                </div>

                {/* Requirements */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-700">
                    Requisitos del Curso
                  </label>
                  {course.requirements.map((requirement, index) => (
                    <div key={index} className="flex space-x-2">
                      <input
                        type="text"
                        value={requirement}
                        onChange={(e) => handleArrayChange('requirements', index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={`Requisito ${index + 1}`}
                      />
                      <button
                        onClick={() => removeArrayItem('requirements', index)}
                        className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => addArrayItem('requirements')}
                    className="flex items-center px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  >
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Agregar Requisito
                  </button>
                </div>

                {/* Save Button */}
                <div className="pt-6 border-t border-slate-200">
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center"
                  >
                    {isSaving ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Guardando...
                      </>
                    ) : (
                      <>
                        <CheckIcon className="h-4 w-4 mr-2" />
                        Guardar Cambios
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          {showPreview && (
            <div className="w-1/2 p-6 overflow-y-auto bg-slate-50">
              {renderPreview()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
