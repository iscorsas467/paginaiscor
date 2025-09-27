'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Users, Award, Shield, GraduationCap, Search, Lock, FileCheck, Globe, Building2 } from 'lucide-react';

// Tipos para los datos de Supabase
interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  phone: string;
  email: string;
  linkedin: string;
  image: string;
  gradient: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  leadershipId?: string;
  fullTeamId?: string;
}

interface TeamData {
  hero?: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    team_stats?: {
      id: string;
      professionals: string;
      experience: string;
      certifications: string;
      companies: string;
    };
  };
  departments?: {
    id: string;
    title: string;
    description: string;
    team_department_items: Array<{
      id: string;
      name: string;
      description: string;
      members: number;
      icon: string;
      color: string;
      order: number;
      services: string[];
    }>;
  };
  leadership?: {
    id: string;
    title: string;
    description: string;
    team_members: TeamMember[];
  };
}

// Datos compactos para la página del equipo (fallback)

const departments = [
  {
    name: 'Capacitación',
    description: 'Equipo especializado en formación y certificación de personal en seguridad industrial.',
    shortDescription: 'Formación y certificación en seguridad industrial.',
    members: 29,
    icon: GraduationCap,
    color: 'primary',
    services: [
      'Trabajo en Alturas',
      'Espacios Confinados',
      'Primeros Auxilios',
      'Brigadas de Emergencia',
      'Seguridad Vial',
      'Prevención de Riesgos'
    ]
  },
  {
    name: 'Consultoría',
    description: 'Consultores expertos en implementación de sistemas de gestión de seguridad, calidad y medio ambiente.',
    shortDescription: 'Implementación de sistemas de gestión integral.',
    members: 20,
    icon: Shield,
    color: 'accent',
    services: [
      'SGSST',
      'ISO 9001',
      'ISO 14001',
      'Análisis de Riesgos',
      'Planes de Emergencia',
      'Auditorías Internas'
    ]
  },
  {
    name: 'Certificaciones',
    description: 'Especialistas en certificaciones internacionales y reconocimientos del sector.',
    shortDescription: 'Certificaciones internacionales y reconocimientos.',
    members: 4,
    icon: Award,
    color: 'primary',
    services: [
      'ISO 9001:2015',
      'ISO 14001:2015',
      'OHSAS 18001:2007',
      'Certificación ICONTEC'
    ]
  },
  {
    name: 'Operaciones',
    description: 'Supervisión especializada de trabajos de alto riesgo y operaciones críticas.',
    shortDescription: 'Supervisión de trabajos de alto riesgo.',
    members: 15,
    icon: Search,
    color: 'gray',
    services: [
      'Inspección de Equipos',
      'Supervisión de Trabajos',
      'Control de Calidad',
      'Seguridad en Obras'
    ]
  }
];

const teamMembers = [
  {
    name: 'Fernando',
    role: 'Director General',
    photo: '/team/fernando.jpg',
    shortDescription: 'Líder estratégico con amplia experiencia en seguridad industrial.',
    fullDescription: 'Fernando cuenta con más de 18 años de experiencia en el sector de seguridad industrial. Ha liderado la implementación de sistemas de gestión de seguridad en más de 500 empresas a nivel nacional. Es especialista en normativas de seguridad y salud en el trabajo, con certificaciones internacionales en ISO 9001, ISO 14001 y OHSAS 18001. Su visión estratégica ha posicionado a ISCOR como líder en el sector.',
    experience: '18+ años',
    certifications: ['ISO 9001', 'ISO 14001', 'OHSAS 18001', 'Auditor Líder'],
    achievements: ['500+ empresas atendidas', '15,000+ personas capacitadas', '98% satisfacción del cliente']
  },
  {
    name: 'María',
    role: 'Gerente de Operaciones',
    photo: '/team/maria.jpg',
    shortDescription: 'Especialista en optimización de procesos y garantía de calidad.',
    fullDescription: 'María es ingeniera industrial con más de 15 años de experiencia en optimización de procesos operativos. Ha desarrollado e implementado sistemas de gestión de calidad que han mejorado significativamente la eficiencia operativa de ISCOR. Es experta en análisis de riesgos y diseño de procedimientos de seguridad.',
    experience: '15+ años',
    certifications: ['ISO 9001', 'Análisis de Riesgos', 'Gestión de Calidad'],
    achievements: ['Optimización de procesos', 'Mejora continua', 'Gestión de calidad']
  },
  {
    name: 'Carlos',
    role: 'Coordinador de Capacitación',
    photo: '/team/carlos.jpg',
    shortDescription: 'Experto en diseño de programas de capacitación y desarrollo.',
    fullDescription: 'Carlos es especialista en formación y desarrollo de competencias técnicas. Ha diseñado más de 29 cursos especializados en seguridad industrial y ha capacitado a más de 15,000 personas. Su metodología innovadora ha sido reconocida por organismos internacionales de certificación.',
    experience: '12+ años',
    certifications: ['Instructor Certificado', 'Diseño Curricular', 'Evaluación de Competencias'],
    achievements: ['29 cursos diseñados', '15,000+ personas capacitadas', 'Metodología innovadora']
  }
];

export default function CompactTeamPage() {
  const [expandedDept, setExpandedDept] = useState<number | null>(null);
  const [expandedMember, setExpandedMember] = useState<number | null>(null);
  const [teamData, setTeamData] = useState<TeamData | null>(null);
  const [loading, setLoading] = useState(true);

  // Cargar datos del equipo desde Supabase
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch('/api/page-content?page=team');
        if (response.ok) {
          const result = await response.json();
          setTeamData(result.data);
        }
      } catch (error) {
        console.error('Error fetching team data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando información del equipo...</p>
        </div>
      </div>
    );
  }

  // Usar datos de Supabase si están disponibles, sino usar fallback
  const currentTeamMembers = teamData?.leadership?.team_members || teamMembers;
  const currentDepartments = teamData?.departments?.team_department_items || departments;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center rounded-full bg-white/10 text-white px-4 py-2 text-sm font-medium mb-6">
              <Users className="h-4 w-4 mr-2" />
              Nuestro Equipo
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Conoce Nuestro Equipo
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Profesionales altamente capacitados comprometidos con la excelencia y la protección de las personas
            </p>
          </motion.div>
        </div>
      </section>


      {/* Team Members Section - Compacto con "Ver más" */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Equipo Directivo
            </h2>
            <p className="text-lg text-gray-600">
              Profesionales comprometidos con la excelencia y la seguridad
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTeamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
              >
                {/* Member Card - Compacto */}
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Users className="h-12 w-12 text-gray-400" />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-2">{member.position}</p>
                    <p className="text-sm text-gray-500 mb-4">
                      {teamData?.leadership?.team_members ? 'Miembro del equipo' : member.experience}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {teamData?.leadership?.team_members ? 
                      member.bio.substring(0, 100) + '...' : 
                      member.shortDescription
                    }
                  </p>

                  <button
                    onClick={() => setExpandedMember(expandedMember === index ? null : index)}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-primary-500/20"
                  >
                    Ver más
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                      expandedMember === index ? 'rotate-180' : ''
                    }`} />
                  </button>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedMember === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-gray-100"
                    >
                      <div className="p-6 pt-4">
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {teamData?.leadership?.team_members ? member.bio : member.fullDescription}
                        </p>
                        
                        <div className="space-y-4">
                          {teamData?.leadership?.team_members ? (
                            // Información de contacto para datos de Supabase
                            <div>
                              <h4 className="text-sm font-semibold text-gray-900 mb-2">Información de contacto:</h4>
                              <div className="space-y-2">
                                {member.phone && (
                                  <p className="flex items-center space-x-2 text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                                    <span>Teléfono: {member.phone}</span>
                                  </p>
                                )}
                                {member.email && (
                                  <p className="flex items-center space-x-2 text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                                    <span>Email: {member.email}</span>
                                  </p>
                                )}
                                {member.linkedin && (
                                  <p className="flex items-center space-x-2 text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                                      LinkedIn
                                    </a>
                                  </p>
                                )}
                              </div>
                            </div>
                          ) : (
                            // Información de fallback
                            <>
                              <div>
                                <h4 className="text-sm font-semibold text-gray-900 mb-2">Certificaciones:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {member.certifications.map((cert, certIndex) => (
                                    <span key={certIndex} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-md">
                                      {cert}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="text-sm font-semibold text-gray-900 mb-2">Logros destacados:</h4>
                                <ul className="space-y-1">
                                  {member.achievements.map((achievement, achIndex) => (
                                    <li key={achIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                                      <span>{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section - Compacto */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Departamentos
            </h2>
            <p className="text-lg text-gray-600">
              Equipos especializados en diferentes áreas de la seguridad industrial
            </p>
          </motion.div>

          <div className="space-y-4">
            {currentDepartments.map((dept, index) => {
              const IconComponent = dept.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedDept(expandedDept === index ? null : index)}
                    className="w-full px-6 py-5 text-left focus:outline-none focus:ring-4 focus:ring-primary-500/20 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          dept.color === 'primary' ? 'bg-primary-100 text-primary-600' :
                          dept.color === 'accent' ? 'bg-accent-100 text-accent-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {dept.name}
                          </h3>
                          <p className="text-gray-600">{dept.shortDescription}</p>
                          <p className="text-sm text-primary-600 font-medium">{dept.members} profesionales</p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedDept === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedDept === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 border-t border-gray-100">
                          <div className="pt-4 ml-16">
                            <p className="text-gray-600 leading-relaxed mb-4">
                              {dept.description}
                            </p>
                            <div>
                              <h4 className="text-sm font-semibold text-gray-900 mb-2">Servicios principales:</h4>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {dept.services.map((service, serviceIndex) => (
                                  <div key={serviceIndex} className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">{service}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary-500 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Quieres formar parte de nuestro equipo?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Únete a un equipo de profesionales comprometidos con la excelencia
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contacto"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Ver Oportunidades
              </a>
              <a
                href="/servicios"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Conocer Servicios
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
