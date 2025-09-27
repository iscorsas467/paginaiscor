'use client';

import { motion } from 'framer-motion';
import { 
  Shield,
  Globe,
  FileCheck,
  Lock,
  Search,
  CheckCircle2,
  ArrowRight,
  Users,
  Award,
  Target,
  Heart,
  Zap,
  Building,
  Wrench,
  AlertTriangle,
  BookOpen,
  Briefcase,
  Camera,
  Car,
  Clock,
  Eye,
  Flame,
  Gavel,
  Headphones,
  Home,
  Key,
  Lightbulb,
  MapPin,
  Microscope,
  Phone,
  Plane,
  ShieldCheck,
  Star,
  Truck,
  UserCheck,
  Video,
  Wifi
} from 'lucide-react';

// Mapeo de íconos para cada servicio
const getServiceIcon = (serviceName: string) => {
  const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    // Seguridad y Salud en el Trabajo
    'Certificación de conductores que transportan': Car,
    'Control de derrames': AlertTriangle,
    'Control y extinción de incendios': Flame,
    'Procedimientos operativos normalizados NFPA': BookOpen,
    'Plan de emergencias': AlertTriangle,
    'Análisis de vulnerabilidad': Search,
    'Plan de evacuación': MapPin,
    'Plan de contingencia': Shield,
    'Continuidad de los negocios': Building,
    'Brigadas de emergencia': Users,
    'Simulaciones de emergencias': Video,
    'SCI – Sistema Comando de Incidentes': Headphones,
    'Materiales peligrosos': AlertTriangle,
    'Mercancías peligrosas': Truck,
    'Control de emergencias químicas': AlertTriangle,
    'Certificación en protección contra caídas': ShieldCheck,
    'Seguridad en espacios confinados': Lock,
    'Seguridad en trabajos en caliente': Flame,
    'Seguridad en trabajos con energías peligrosas': Zap,
    'LOTO – Bloqueo y etiquetado': Lock,
    'Seguridad en el izaje de cargas': Wrench,
    'Certificación de operarios de montacargas': Truck,
    'Certificación de armado seguro de andamios': Building,
    'Curso de primer respondiente en emergencias médicas': Heart,
    'Programa de seguridad para piscinas': Users,
    'Entrenamiento en rescate y salvamento acuático': Users,
    'Certificación de buceo scuba diver': Users,
    'Capacitación en primeros auxilios básicos y avanzados': Heart,
    'Curso de administración de oxígeno para emergencias': Heart,
    'Diseño, implementación y administración de sistemas de gestión SST': Shield,
    
    // Medio Ambiente
    'Estudios de impacto ambiental y planes de manejo ambiental': Globe,
    'Estudios hidrobiológicos y monitoreo calidad de agua': Globe,
    'Estudios de flora y fauna': Globe,
    'Proyectos ambientales': Globe,
    'Gestión ambiental y auditoría': FileCheck,
    'Capacitación en manejo de residuos peligrosos': AlertTriangle,
    'Capacitación de la nueva guía de manejo ambiental': BookOpen,
    'Implementación del plan de manejo ambiental': Globe,
    'Capacitación de accidentes ofídicos y manejo de serpientes': AlertTriangle,
    'Sistema de Gestión de administración ambiental ISO 14001': Globe,
    'Programas de educación ambiental': BookOpen,
    'Programas de gestión ambiental, inocuidad y rutas de saneamiento': Globe,
    'Control de roedores y otros vertebrados': AlertTriangle,
    'Control de artrópodos': AlertTriangle,
    'Tecnologías limpias y controles biológicos': Globe,
    'Desinfecciones': AlertTriangle,
    'Tratamiento de granos almacenados': Globe,
    'Evaluaciones microbiológicas y fisicoquímicas del ambiente': Microscope,
    'Medición de gases de combustión': Flame,
    'Plan de manejo de residuos sólidos': Globe,
    'Diseños de plantas de tratamiento de aguas residuales industriales': Globe,
    'Capacitación en impacto ambiental y manejo de residuos': BookOpen,
    
    // Calidad
    'Sistema de gestión de la calidad ISO 9001': Award,
    'Sistema de gestión seguridad alimentaria ISO 22000': ShieldCheck,
    'Sistema de peligros y puntos críticos control': Target,
    'Aseguramiento de la inocuidad alimentaria': ShieldCheck,
    
    // Seguridad Física
    'Visitas domiciliarias': Home,
    'Estudios de seguridad': Search,
    'Seguridad con armas de fuego': Shield,
    
    // Inspección de Equipos
    'Seguridad electrónica y CCTV circuito cerrado de televisión': Camera,
    'Entrenamiento de escoltas y guardas de seguridad privada': Users,
    'Curso de supervivencia básico y avanzado': Target,
    'Polígrafo (detector de mentiras)': Eye,
    'Inspección de equipos de protección contra caídas': ShieldCheck,
    'Inspección de equipos para trabajos en espacios confinados': Lock,
    'Inspección de equipos para rescate y salvamento': Users,
    'Inspección visual de cilindros SCBA y SCUBA': Eye,
    'Pruebas hidrostáticas para cilindros SCBA y SCUBA': Wrench,
    'Posicheck para SCBA': CheckCircle2,
    'Llenado de aire comprimido para SCBA y SCUBA': Wrench
  };
  
  return iconMap[serviceName] || Briefcase;
};

// Función para obtener la categoría de un servicio
const getServiceCategory = (serviceName: string) => {
  const categories = {
    'Seguridad y Salud en el Trabajo': [
      'Certificación de conductores que transportan', 'Control de derrames', 'Control y extinción de incendios',
      'Procedimientos operativos normalizados NFPA', 'Plan de emergencias', 'Análisis de vulnerabilidad',
      'Plan de evacuación', 'Plan de contingencia', 'Continuidad de los negocios', 'Brigadas de emergencia',
      'Simulaciones de emergencias', 'SCI – Sistema Comando de Incidentes', 'Materiales peligrosos',
      'Mercancías peligrosas', 'Control de emergencias químicas', 'Certificación en protección contra caídas',
      'Seguridad en espacios confinados', 'Seguridad en trabajos en caliente', 'Seguridad en trabajos con energías peligrosas',
      'LOTO – Bloqueo y etiquetado', 'Seguridad en el izaje de cargas', 'Certificación de operarios de montacargas',
      'Certificación de armado seguro de andamios', 'Curso de primer respondiente en emergencias médicas',
      'Programa de seguridad para piscinas', 'Entrenamiento en rescate y salvamento acuático',
      'Certificación de buceo scuba diver', 'Capacitación en primeros auxilios básicos y avanzados',
      'Curso de administración de oxígeno para emergencias', 'Diseño, implementación y administración de sistemas de gestión SST'
    ],
    'Medio Ambiente': [
      'Estudios de impacto ambiental y planes de manejo ambiental', 'Estudios hidrobiológicos y monitoreo calidad de agua',
      'Estudios de flora y fauna', 'Proyectos ambientales', 'Gestión ambiental y auditoría',
      'Capacitación en manejo de residuos peligrosos', 'Capacitación de la nueva guía de manejo ambiental',
      'Implementación del plan de manejo ambiental', 'Capacitación de accidentes ofídicos y manejo de serpientes',
      'Sistema de Gestión de administración ambiental ISO 14001', 'Programas de educación ambiental',
      'Programas de gestión ambiental, inocuidad y rutas de saneamiento', 'Control de roedores y otros vertebrados',
      'Control de artrópodos', 'Tecnologías limpias y controles biológicos', 'Desinfecciones',
      'Tratamiento de granos almacenados', 'Evaluaciones microbiológicas y fisicoquímicas del ambiente',
      'Medición de gases de combustión', 'Plan de manejo de residuos sólidos',
      'Diseños de plantas de tratamiento de aguas residuales industriales', 'Capacitación en impacto ambiental y manejo de residuos'
    ],
    'Calidad': [
      'Sistema de gestión de la calidad ISO 9001', 'Sistema de gestión seguridad alimentaria ISO 22000',
      'Sistema de peligros y puntos críticos control', 'Aseguramiento de la inocuidad alimentaria'
    ],
    'Seguridad Física': [
      'Visitas domiciliarias', 'Estudios de seguridad', 'Seguridad con armas de fuego'
    ],
    'Inspección de Equipos': [
      'Seguridad electrónica y CCTV circuito cerrado de televisión', 'Entrenamiento de escoltas y guardas de seguridad privada',
      'Curso de supervivencia básico y avanzado', 'Polígrafo (detector de mentiras)',
      'Inspección de equipos de protección contra caídas', 'Inspección de equipos para trabajos en espacios confinados',
      'Inspección de equipos para rescate y salvamento', 'Inspección visual de cilindros SCBA y SCUBA',
      'Pruebas hidrostáticas para cilindros SCBA y SCUBA', 'Posicheck para SCBA', 'Llenado de aire comprimido para SCBA y SCUBA'
    ]
  };
  
  for (const [category, services] of Object.entries(categories)) {
    if (services.includes(serviceName)) {
      return category;
    }
  }
  return 'Otros';
};

// Función para obtener el color de la categoría
const getCategoryColor = (category: string) => {
  const colors = {
    'Seguridad y Salud en el Trabajo': 'text-primary-600 bg-primary-50 border-primary-200',
    'Medio Ambiente': 'text-accent-600 bg-accent-50 border-accent-200',
    'Calidad': 'text-primary-500 bg-primary-50 border-primary-200',
    'Seguridad Física': 'text-gray-600 bg-gray-50 border-gray-200',
    'Inspección de Equipos': 'text-primary-400 bg-primary-50 border-primary-200',
    'Otros': 'text-gray-500 bg-gray-50 border-gray-200'
  };
  return colors[category as keyof typeof colors] || colors['Otros'];
};

// Lista completa de todos los servicios
const allServices = [
  // Seguridad y Salud en el Trabajo
  'Certificación de conductores que transportan',
  'Control de derrames',
  'Control y extinción de incendios',
  'Procedimientos operativos normalizados NFPA',
  'Plan de emergencias',
  'Análisis de vulnerabilidad',
  'Plan de evacuación',
  'Plan de contingencia',
  'Continuidad de los negocios',
  'Brigadas de emergencia',
  'Simulaciones de emergencias',
  'SCI – Sistema Comando de Incidentes',
  'Materiales peligrosos',
  'Mercancías peligrosas',
  'Control de emergencias químicas',
  'Certificación en protección contra caídas',
  'Seguridad en espacios confinados',
  'Seguridad en trabajos en caliente',
  'Seguridad en trabajos con energías peligrosas',
  'LOTO – Bloqueo y etiquetado',
  'Seguridad en el izaje de cargas',
  'Certificación de operarios de montacargas',
  'Certificación de armado seguro de andamios',
  'Curso de primer respondiente en emergencias médicas',
  'Programa de seguridad para piscinas',
  'Entrenamiento en rescate y salvamento acuático',
  'Certificación de buceo scuba diver',
  'Capacitación en primeros auxilios básicos y avanzados',
  'Curso de administración de oxígeno para emergencias',
  'Diseño, implementación y administración de sistemas de gestión SST',
  
  // Medio Ambiente
  'Estudios de impacto ambiental y planes de manejo ambiental',
  'Estudios hidrobiológicos y monitoreo calidad de agua',
  'Estudios de flora y fauna',
  'Proyectos ambientales',
  'Gestión ambiental y auditoría',
  'Capacitación en manejo de residuos peligrosos',
  'Capacitación de la nueva guía de manejo ambiental',
  'Implementación del plan de manejo ambiental',
  'Capacitación de accidentes ofídicos y manejo de serpientes',
  'Sistema de Gestión de administración ambiental ISO 14001',
  'Programas de educación ambiental',
  'Programas de gestión ambiental, inocuidad y rutas de saneamiento',
  'Control de roedores y otros vertebrados',
  'Control de artrópodos',
  'Tecnologías limpias y controles biológicos',
  'Desinfecciones',
  'Tratamiento de granos almacenados',
  'Evaluaciones microbiológicas y fisicoquímicas del ambiente',
  'Medición de gases de combustión',
  'Plan de manejo de residuos sólidos',
  'Diseños de plantas de tratamiento de aguas residuales industriales',
  'Capacitación en impacto ambiental y manejo de residuos',
  
  // Calidad
  'Sistema de gestión de la calidad ISO 9001',
  'Sistema de gestión seguridad alimentaria ISO 22000',
  'Sistema de peligros y puntos críticos control',
  'Aseguramiento de la inocuidad alimentaria',
  
  // Seguridad Física
  'Visitas domiciliarias',
  'Estudios de seguridad',
  'Seguridad con armas de fuego',
  
  // Inspección de Equipos
  'Seguridad electrónica y CCTV circuito cerrado de televisión',
  'Entrenamiento de escoltas y guardas de seguridad privada',
  'Curso de supervivencia básico y avanzado',
  'Polígrafo (detector de mentiras)',
  'Inspección de equipos de protección contra caídas',
  'Inspección de equipos para trabajos en espacios confinados',
  'Inspección de equipos para rescate y salvamento',
  'Inspección visual de cilindros SCBA y SCUBA',
  'Pruebas hidrostáticas para cilindros SCBA y SCUBA',
  'Posicheck para SCBA',
  'Llenado de aire comprimido para SCBA y SCUBA'
];

export default function ModernServicesCards() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center rounded-full bg-primary-50 text-primary-700 px-4 py-2 text-sm font-medium mb-4">
            Servicios Especializados
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Nuestros Servicios Integrales
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Diseñamos, implementamos, administramos y auditamos sus sistemas integrados de 
            <span className="font-semibold text-primary-500"> CALIDAD</span>, 
            <span className="font-semibold text-accent-500"> MEDIO AMBIENTE</span> y 
            <span className="font-semibold text-primary-600"> SEGURIDAD Y SALUD EN EL TRABAJO</span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((service, index) => {
            const IconComponent = getServiceIcon(service);
            const category = getServiceCategory(service);
            const categoryColors = getCategoryColor(category);
            
            return (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-100 hover:border-primary-600 hover:bg-gray-50">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-primary-600" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-base font-semibold text-gray-900 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {service}
                  </h3>
                  
                  {/* Category Badge */}
                  <div className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${categoryColors} mt-2`}>
                    {category}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              ¿Necesitas servicios personalizados?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Desarrollamos soluciones a medida según las necesidades específicas de tu empresa, 
              cumpliendo con todas las normativas legales y estándares internacionales.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=director@iscorcolombia.com&su=Solicitud de Cotización - ISCOR Colombia&body=Estimado Director,%0D%0A%0D%0AMe pongo en contacto con usted para solicitar una cotización de sus servicios de seguridad industrial.%0D%0A%0D%0ADetalles de la solicitud:%0D%0A- Empresa: [Nombre de su empresa]%0D%0A- Servicio de interés: [Especifique el servicio]%0D%0A- Número de participantes: [Cantidad]%0D%0A- Fecha estimada: [Fecha deseada]%0D%0A- Ubicación: [Ciudad/Departamento]%0D%0A%0D%0AInformación adicional:%0D%0A[Describa sus necesidades específicas]%0D%0A%0D%0AEspero su respuesta.%0D%0A%0D%0ASaludos cordiales,%0D%0A[Nombre]%0D%0A[Teléfono]%0D%0A[Email]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary-500/20"
              >
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="/servicios-sst"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-500/20"
              >
                Ver Servicios SST Detallados
              </a>
              <a 
                href="/Portafolio ISCOR general V2.pdf"
                download="Portafolio ISCOR general V2.pdf"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500/20"
              >
                Ver Portafolio Completo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
