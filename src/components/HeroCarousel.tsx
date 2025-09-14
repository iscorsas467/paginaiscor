'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  PlayIcon,
  PauseIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  CogIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  TrophyIcon,
  StarIcon,
  ClockIcon,
  UserGroupIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

interface Course {
  id: number;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  duration: string;
  certification: string;
  students: number;
  rating: number;
  nextDate: string;
  badge?: string;
  features: string[];
}

// Datos de fallback
const fallbackCourses: Course[] = [
  {
    id: 1,
    title: 'Trabajo en Alturas',
    description: 'Certificación completa para trabajos en altura con equipos de protección personal certificados y protocolos de seguridad avanzados.',
    icon: '🏗️',
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    duration: '40 horas',
    certification: 'Válido 2 años',
    students: 1250,
    rating: 4.9,
    nextDate: '15 Mar 2024',
    badge: 'Más Popular',
    features: ['Equipos certificados', 'Protocolos avanzados', 'Instructores expertos']
  },
  {
    id: 2,
    title: 'Espacios Confinados',
    description: 'Entrenamiento especializado para trabajos en espacios confinados con protocolos de seguridad y equipos certificados.',
    icon: '⚙️',
    gradient: 'from-purple-500 via-indigo-500 to-blue-500',
    duration: '40 horas',
    certification: 'Válido 2 años',
    students: 980,
    rating: 4.8,
    nextDate: '22 Mar 2024',
    features: ['Simuladores reales', 'Técnicas especializadas', 'Certificación internacional']
  },
  {
    id: 3,
    title: 'Control de Incendios',
    description: 'Sistemas de prevención, detección y extinción de incendios con equipos certificados y técnicas avanzadas.',
    icon: '🔥',
    gradient: 'from-red-500 via-orange-500 to-yellow-500',
    duration: '32 horas',
    certification: 'Válido 3 años',
    students: 1100,
    rating: 4.9,
    nextDate: '28 Mar 2024',
    features: ['Equipos modernos', 'Técnicas actualizadas', 'Práctica real']
  }
];

const courses: Course[] = [
  {
    id: 1,
    title: 'Trabajo en Alturas',
    description: 'Certificación completa para trabajos en altura con equipos de protección personal certificados y protocolos de seguridad avanzados.',
    icon: BuildingOfficeIcon,
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    duration: '40 horas',
    certification: 'Válido 2 años',
    students: 1250,
    rating: 4.9,
    nextDate: '15 Mar 2024',
    badge: 'Más Popular',
    features: ['Equipos certificados', 'Protocolos avanzados', 'Instructores expertos']
  },
  {
    id: 2,
    title: 'Espacios Confinados',
    description: 'Entrenamiento especializado para trabajos en espacios confinados con protocolos de seguridad y equipos certificados.',
    icon: CogIcon,
    gradient: 'from-purple-500 via-indigo-500 to-blue-500',
    duration: '40 horas',
    certification: 'Válido 2 años',
    students: 980,
    rating: 4.8,
    nextDate: '22 Mar 2024',
    features: ['Simuladores reales', 'Técnicas especializadas', 'Certificación internacional']
  },
  {
    id: 3,
    title: 'Control de Incendios',
    description: 'Sistemas de prevención, detección y extinción de incendios con equipos certificados y técnicas avanzadas.',
    icon: ShieldCheckIcon,
    gradient: 'from-red-500 via-orange-500 to-yellow-500',
    duration: '32 horas',
    certification: 'Válido 3 años',
    students: 1100,
    rating: 4.9,
    nextDate: '28 Mar 2024',
    features: ['Equipos modernos', 'Técnicas actualizadas', 'Práctica real']
  },
  {
    id: 4,
    title: 'Primeros Auxilios',
    description: 'Capacitación en atención prehospitalaria y respuesta a emergencias médicas con técnicas actualizadas.',
    icon: CheckCircleIcon,
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    duration: '16 horas',
    certification: 'Válido 1 año',
    students: 2100,
    rating: 4.9,
    nextDate: '5 Abr 2024',
    badge: 'Recomendado',
    features: ['Técnicas actualizadas', 'Simulaciones reales', 'Certificación médica']
  },
  {
    id: 5,
    title: 'Materiales Peligrosos',
    description: 'Manejo seguro de sustancias peligrosas según normativas internacionales y protocolos de seguridad.',
    icon: GlobeAltIcon,
    gradient: 'from-yellow-500 via-orange-500 to-red-500',
    duration: '40 horas',
    certification: 'Válido 3 años',
    students: 750,
    rating: 4.7,
    nextDate: '12 Abr 2024',
    features: ['Normativas internacionales', 'Protocolos especializados', 'Equipos de protección']
  },
  {
    id: 6,
    title: 'Gestión de Calidad',
    description: 'Implementación de sistemas ISO 9001 y auditorías de calidad empresarial con metodologías probadas.',
    icon: TrophyIcon,
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    duration: '40 horas',
    certification: 'Válido 3 años',
    students: 650,
    rating: 4.8,
    nextDate: '19 Abr 2024',
    features: ['Metodologías probadas', 'Certificación ISO', 'Auditorías especializadas']
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [coursesData, setCoursesData] = useState<Course[]>(fallbackCourses);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const response = await fetch('/api/courses');
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data.length > 0) {
          // Transformar datos de la API al formato esperado
          const transformedCourses = data.data.slice(0, 6).map((course: any, index: number) => ({
            id: index + 1,
            title: course.name,
            description: course.description,
            icon: course.icon,
            gradient: course.gradient,
            duration: course.duration,
            certification: course.certification,
            students: course.students,
            rating: course.rating,
            nextDate: 'Próximamente',
            badge: index === 0 ? 'Más Popular' : undefined,
            features: ['Certificación oficial', 'Instructores expertos', 'Material actualizado']
          }));
          setCoursesData(transformedCourses);
        }
      }
    } catch (error) {
      console.error('Error loading courses:', error);
      // Mantener fallback courses en caso de error
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % coursesData.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, isHovered, coursesData.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % coursesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + coursesData.length) % coursesData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentCourse = coursesData[currentIndex];

  return (
    <div className="relative w-full h-full">
      {/* Main Carousel Container */}
      <div 
        className="relative h-full overflow-hidden rounded-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Course Card */}
            <div className="relative h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-8 md:p-12">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className={`absolute inset-0 bg-gradient-to-r ${currentCourse.gradient} opacity-20`} />
              </div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="max-w-4xl">
                  {/* Badge */}
                  {currentCourse.badge && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-6"
                    >
                      <StarIcon className="h-4 w-4 mr-2" />
                      {currentCourse.badge}
                    </motion.div>
                  )}
                  
                  {/* Course Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${currentCourse.gradient} rounded-2xl shadow-2xl mb-8`}
                  >
                    <span className="text-3xl">{currentCourse.icon}</span>
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                  >
                    {currentCourse.title}
                  </motion.h1>
                  
                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl"
                  >
                    {currentCourse.description}
                  </motion.p>
                  
                  {/* Course Details */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
                  >
                    <div className="flex items-center text-white">
                      <ClockIcon className="h-5 w-5 mr-2 text-blue-400" />
                      <span className="text-sm font-medium">{currentCourse.duration}</span>
                    </div>
                    <div className="flex items-center text-white">
                      <AcademicCapIcon className="h-5 w-5 mr-2 text-green-400" />
                      <span className="text-sm font-medium">{currentCourse.certification}</span>
                    </div>
                    <div className="flex items-center text-white">
                      <UserGroupIcon className="h-5 w-5 mr-2 text-purple-400" />
                      <span className="text-sm font-medium">{currentCourse.students.toLocaleString()}+ estudiantes</span>
                    </div>
                    <div className="flex items-center text-white">
                      <StarIcon className="h-5 w-5 mr-2 text-yellow-400" />
                      <span className="text-sm font-medium">{currentCourse.rating}/5.0</span>
                    </div>
                  </motion.div>
                  
                  {/* Course Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mb-8"
                  >
                    <h4 className="text-lg font-semibold text-white mb-4">Características del Programa:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {currentCourse.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-white/90">
                          <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-start gap-4"
                  >
                    <button className="group px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <span className="flex items-center">
                        Solicitar Información
                        <ChevronRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </button>
                    <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                      Ver Detalles Completos
                    </button>
                  </motion.div>
                  
                  {/* Next Date */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                  >
                    <p className="text-white text-sm">
                      <strong>Próxima fecha:</strong> {currentCourse.nextDate}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
          <button
            onClick={prevSlide}
            className="pointer-events-auto p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
          >
            <ChevronLeftIcon className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="pointer-events-auto p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
          >
            <ChevronRightIcon className="h-6 w-6 text-white" />
          </button>
        </div>
        
        {/* Play/Pause Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={togglePlayPause}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
          >
            {isPlaying ? (
              <PauseIcon className="h-5 w-5 text-white" />
            ) : (
              <PlayIcon className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </div>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {coursesData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
      
      {/* Course Counter */}
      <div className="absolute top-4 left-4">
        <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
          <span className="text-white text-sm font-medium">
            {currentIndex + 1} / {coursesData.length}
          </span>
        </div>
      </div>
    </div>
  );
}
