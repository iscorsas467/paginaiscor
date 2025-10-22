import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Función para obtener la imagen correspondiente al curso
const getCourseImage = (courseName: string) => {
  const imageMap: { [key: string]: string } = {
    'Trabajo en Alturas': '/alturas.png',
    'Espacios Confinados': '/Espacios_confinados.png',
    'Control y Extinción de Incendios': '/fuego.png',
    'Primeros Auxilios Básicos y Avanzados': '/primeros_auxilios.png',
    'Materiales y Mercancías Peligrosas': '/materiales_peligrosos.png',
    'Operación Segura de Montacargas': '/montacargas .png',
    'LOTO - Bloqueo y Etiquetado': '/Lockout_tagout.png',
    'Brigadas de Emergencia': '/brigada_de_emergencia.png',
    'Brigada de Emergencia': '/brigada_de_emergencia.png',
    'Brigada de emergencia': '/brigada_de_emergencia.png',
    'Buceo Scuba Diver': '/buceo.png',
    'Sistema de Gestión ISO 9001': '/Sistema_de_Gestión_ISO_9001.jpeg',
    'Plan de Emergencias': '/plandeemergencia.png',
    'Planes de emergencia': '/plandeemergencia.png',
    'Planes de Emergencia': '/plandeemergencia.png',
    'Seguridad en Trabajos en Caliente': '/Seguridad_en_Trabajos _en_Caliente.jpeg',
    'Sistema de Gestión ISO 14001': '/Sistema-de_Gestión_ISO_14001.jpeg',
    'Seguridad en el Izaje de Cargas': '/Seguridad_en_el_Izaje_de_Cargas.jpeg',
    'Rescate y Salvamento Acuático': '/Rescate_y_Salvamento_Acuático.jpeg',
    'Seguridad Alimentaria ISO 22000': '/Seguridad_Alimentaria_ISO_22000.jpeg',
    'Supervivencia Básico y Avanzado': '/Supervivencia_Básico_y_Avanzado.jpeg',
    'Procedimientos Operativos Normalizados NFPA': '/Procedimientos_Operativos_Normalizados_NFPA.jpeg',
    'Análisis de Vulnerabilidad': '/Análisis_de_Vulnerabilidad.jpeg',
    'Plan de Contingencia': '/Plan_de_Contingencia.jpeg',
    'Continuidad de los Negocios': '/Continuidad_de_los_Negocios.jpeg',
    'Simulaciones de Emergencias': '/Simulaciones_de_Emergencias.jpeg',
    'Sistema Comando de Incidentes': '/Sistema_Comando_de_Incidentes.jpeg',
    'SCI - Sistema Comando de Incidentes': '/Sistema_Comando_de_Incidentes.jpeg',
    'Control de Emergencias Químicas': '/Control_de_Emergencias_Químicas.jpeg',
    'Certificación de Conductores que Transportan': '/Certificación_de_Conductores_que_Transportan.jpeg',
    'Curso de Primer Respondiente en Emergencias Médicas': '/Curso_de_Primer_Respondiente_en_Emergencias_Médicas.jpeg'
  };
  return imageMap[courseName] || null;
};

// GET - Obtener curso por slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    // Buscar el curso por slug directamente
    const course = await prisma.home_service_items.findFirst({
      where: {
        slug: slug
      }
    });

    // Si no se encuentra por slug, intentar por nombre
    let courseData = course;
    if (!courseData) {
      const courseName = slug
        .split('-')
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      courseData = await prisma.home_service_items.findFirst({
        where: {
          name: {
            contains: courseName,
            mode: 'insensitive'
          }
        }
      });
    }

    if (!courseData) {
      return NextResponse.json({ 
        success: false, 
        error: 'Curso no encontrado' 
      }, { status: 404 });
    }

    // Datos completos del curso (incluyendo información detallada específica)
    const courseSlug = courseData.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    // Función para obtener información específica de cada curso
    const getCourseDetails = (courseName: string) => {
      const courseDetails: { [key: string]: any } = {
        'Trabajo en Alturas': {
          detailedDescription: 'Nuestro curso de Trabajo en Alturas está diseñado para proporcionar a los participantes los conocimientos teóricos y prácticos necesarios para realizar trabajos seguros en altura. El programa incluye formación en equipos de protección personal, sistemas de anclaje, evaluación de riesgos y procedimientos de rescate.',
          duration: '40 horas',
          certification: 'Válido 2 años',
          objectives: [
            'Comprender las normativas de seguridad para trabajos en altura',
            'Desarrollar habilidades prácticas para trabajos seguros',
            'Aprender a usar equipos de protección personal',
            'Conocer sistemas de anclaje y líneas de vida',
            'Obtener certificación oficial reconocida'
          ],
          benefits: [
            'Reducción significativa de accidentes por caídas',
            'Cumplimiento de normativas de seguridad integral',
            'Mejora en la eficiencia y seguridad del trabajo',
            'Certificación reconocida a nivel nacional',
            'Actualización continua en técnicas de seguridad'
          ],
          requirements: [
            'Mayor de 18 años',
            'Documento de identidad vigente',
            'Certificado médico ocupacional',
            'Buen estado de salud física',
            'Sin vértigo o acrofobia'
          ],
          modules: [
            'Fundamentos de Trabajos en Altura',
            'Equipos de Protección Personal',
            'Sistemas de Anclaje y Líneas de Vida',
            'Evaluación de Riesgos',
            'Procedimientos de Trabajo Seguro',
            'Rescate en Altura',
            'Prácticas Supervisadas'
          ],
          instructor: 'Ing. Carlos Rodríguez - Especialista en Seguridad Integral',
          price: 'Consultar',
          location: 'Centro de Entrenamiento ISCOR',
          schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
          category: 'Seguridad Integral'
        },
        'Espacios Confinados': {
          detailedDescription: 'El curso de Espacios Confinados proporciona formación especializada en la identificación, evaluación y control de riesgos en espacios confinados. Incluye protocolos de entrada, trabajo seguro y procedimientos de rescate especializado.',
          duration: '40 horas',
          certification: 'Válido 2 años',
          objectives: [
            'Identificar espacios confinados y sus riesgos',
            'Aplicar protocolos de entrada segura',
            'Manejar equipos de monitoreo atmosférico',
            'Ejecutar procedimientos de rescate',
            'Implementar sistemas de comunicación'
          ],
          benefits: [
            'Prevención de accidentes en espacios confinados',
            'Cumplimiento de normativas OSHA y ANSI',
            'Certificación reconocida internacionalmente',
            'Mejora en la seguridad operacional',
            'Reducción de costos por accidentes'
          ],
          requirements: [
            'Mayor de 18 años',
            'Certificado médico ocupacional',
            'Sin claustrofobia',
            'Buen estado de salud física',
            'Experiencia en trabajos industriales'
          ],
          modules: [
            'Definición y Clasificación de Espacios Confinados',
            'Identificación de Riesgos Atmosféricos',
            'Equipos de Monitoreo y Detección',
            'Protocolos de Entrada Segura',
            'Sistemas de Comunicación',
            'Procedimientos de Rescate',
            'Prácticas en Simulador'
          ],
          instructor: 'Ing. María González - Especialista en Espacios Confinados',
          price: 'Consultar',
          location: 'Centro de Entrenamiento ISCOR',
          schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
          category: 'Seguridad Integral'
        },
        'Control y Extinción de Incendios': {
          detailedDescription: 'Curso especializado en control y extinción de incendios con procedimientos operativos normalizados NFPA. Incluye formación en brigadas de emergencia, manejo de equipos y técnicas de extinción.',
          duration: '32 horas',
          certification: 'Válido 3 años',
          objectives: [
            'Comprender la teoría del fuego y sus clases',
            'Manejar equipos de extinción de incendios',
            'Formar brigadas de emergencia efectivas',
            'Aplicar procedimientos NFPA',
            'Ejecutar simulacros de emergencia'
          ],
          benefits: [
            'Prevención y control de incendios',
            'Formación de brigadas especializadas',
            'Cumplimiento de normativas NFPA',
            'Reducción de pérdidas materiales',
            'Protección de vidas humanas'
          ],
          requirements: [
            'Mayor de 18 años',
            'Certificado médico ocupacional',
            'Buen estado de salud física',
            'Sin problemas respiratorios',
            'Disponibilidad para prácticas nocturnas'
          ],
          modules: [
            'Teoría del Fuego y Clasificación',
            'Equipos de Extinción y Mantenimiento',
            'Procedimientos Operativos NFPA',
            'Formación de Brigadas de Emergencia',
            'Simulacros y Prácticas',
            'Manejo de Emergencias',
            'Evaluación y Certificación'
          ],
          instructor: 'Cpt. Roberto Silva - Bombero Profesional Certificado',
          price: 'Consultar',
          location: 'Centro de Entrenamiento ISCOR',
          schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
          category: 'Emergencias'
        },
        'Primeros Auxilios Básicos y Avanzados': {
          detailedDescription: 'Capacitación integral en primeros auxilios básicos y avanzados con administración de oxígeno para emergencias. Incluye técnicas de reanimación, manejo de traumas y atención prehospitalaria.',
          duration: '16 horas',
          certification: 'Válido 1 año',
          objectives: [
            'Aplicar técnicas de primeros auxilios básicos',
            'Manejar situaciones de emergencia médica',
            'Administrar oxígeno de emergencia',
            'Realizar RCP y uso de DEA',
            'Atender traumas y lesiones'
          ],
          benefits: [
            'Salvamento de vidas en emergencias',
            'Reducción de secuelas por accidentes',
            'Certificación internacional',
            'Confianza en situaciones críticas',
            'Cumplimiento de normativas laborales'
          ],
          requirements: [
            'Mayor de 16 años',
            'Certificado médico básico',
            'Buen estado de salud física',
            'Disponibilidad para prácticas',
            'Compromiso con el aprendizaje'
          ],
          modules: [
            'Fundamentos de Primeros Auxilios',
            'Evaluación de Víctimas',
            'Reanimación Cardiopulmonar (RCP)',
            'Uso de Desfibrilador Externo (DEA)',
            'Administración de Oxígeno',
            'Manejo de Traumas',
            'Simulacros de Emergencia'
          ],
          instructor: 'Dr. Ana Martínez - Médico de Emergencias',
          price: 'Consultar',
          location: 'Centro de Entrenamiento ISCOR',
          schedule: 'Sábados: 8:00 AM - 5:00 PM',
          category: 'Emergencias'
        },
        'Materiales y Mercancías Peligrosas': {
          detailedDescription: 'Manejo seguro de materiales y mercancías peligrosas con protocolos de almacenamiento, transporte y respuesta a emergencias. Incluye clasificación, etiquetado y procedimientos de seguridad.',
          duration: '40 horas',
          certification: 'Válido 3 años',
          objectives: [
            'Clasificar materiales peligrosos según normativas',
            'Aplicar protocolos de almacenamiento seguro',
            'Manejar procedimientos de transporte',
            'Responder a emergencias químicas',
            'Implementar sistemas de etiquetado'
          ],
          benefits: [
            'Prevención de accidentes químicos',
            'Cumplimiento de normativas DOT',
            'Certificación internacional',
            'Protección ambiental',
            'Reducción de riesgos operacionales'
          ],
          requirements: [
            'Mayor de 18 años',
            'Certificado médico ocupacional',
            'Conocimientos básicos en química',
            'Buen estado de salud física',
            'Experiencia en manejo de materiales'
          ],
          modules: [
            'Clasificación de Materiales Peligrosos',
            'Sistemas de Etiquetado y Marcado',
            'Protocolos de Almacenamiento',
            'Procedimientos de Transporte',
            'Respuesta a Emergencias Químicas',
            'Equipos de Protección Personal',
            'Simulacros de Emergencia'
          ],
          instructor: 'Ing. Luis Herrera - Especialista en Materiales Peligrosos',
          price: 'Consultar',
          location: 'Centro de Entrenamiento ISCOR',
          schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
          category: 'Ambiental'
        },
        'Operación Segura de Montacargas': {
          detailedDescription: 'Certificación de operarios de montacargas con técnicas de manejo seguro y mantenimiento preventivo. Incluye operación, inspección y procedimientos de seguridad.',
          duration: '24 horas',
          certification: 'Válido 2 años',
          objectives: [
            'Operar montacargas de forma segura',
            'Realizar inspecciones preoperacionales',
            'Manejar cargas de manera eficiente',
            'Aplicar procedimientos de mantenimiento',
            'Prevenir accidentes operacionales'
          ],
          benefits: [
            'Certificación oficial de operador',
            'Reducción de accidentes laborales',
            'Mejora en la productividad',
            'Cumplimiento de normativas',
            'Especialización profesional'
          ],
          requirements: [
            'Mayor de 18 años',
            'Licencia de conducción vigente',
            'Certificado médico ocupacional',
            'Buen estado de salud física',
            'Experiencia en manejo de equipos'
          ],
          modules: [
            'Fundamentos de Operación de Montacargas',
            'Inspección Preoperacional',
            'Técnicas de Manejo Seguro',
            'Manejo de Cargas',
            'Mantenimiento Preventivo',
            'Procedimientos de Emergencia',
            'Evaluación Práctica'
          ],
          instructor: 'Ing. Jorge Morales - Operador Certificado',
          price: 'Consultar',
          location: 'Centro de Entrenamiento ISCOR',
          schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
          category: 'Operaciones'
        }
        // Continuaré agregando más cursos específicos...
      };

      // Información por defecto si no se encuentra el curso específico
      const defaultDetails = {
        detailedDescription: `${course?.description || 'Curso especializado'} Este curso está diseñado para proporcionar conocimientos teóricos y prácticos avanzados en el área de ${courseName.toLowerCase()}.`,
        duration: '40 horas',
        certification: 'Válido 2 años',
        objectives: [
          'Comprender los fundamentos teóricos',
          'Desarrollar habilidades prácticas',
          'Aplicar conocimientos en situaciones reales',
          'Obtener certificación oficial',
          'Mantener estándares de seguridad'
        ],
        benefits: [
          'Mejora en la seguridad laboral',
          'Cumplimiento de normativas',
          'Certificación reconocida',
          'Actualización profesional',
          'Reducción de riesgos'
        ],
        requirements: [
          'Mayor de 18 años',
          'Documento de identidad vigente',
          'Certificado médico ocupacional',
          'Buen estado de salud física',
          'Compromiso con la seguridad'
        ],
        modules: [
          'Fundamentos teóricos',
          'Normativas y regulaciones',
          'Equipos y herramientas',
          'Procedimientos de trabajo',
          'Evaluación de riesgos',
          'Prácticas supervisadas',
          'Evaluación final'
        ],
        instructor: 'Instructor Certificado ISCOR',
        price: 'Consultar',
        location: 'Centro de Entrenamiento ISCOR',
        schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
        category: 'Seguridad Integral'
      };

      return courseDetails[courseName] || defaultDetails;
    };

    // Usar datos reales de la base de datos, con fallback a datos estáticos solo si no existen
    const specificDetails = getCourseDetails(courseData.name);
    
    const detailedCourse = {
      id: courseData.id,
      name: courseData.name,
      slug: courseSlug,
      image: courseData.image || getCourseImage(courseData.name) || '/alturas.png',
      description: courseData.description,
      // Usar datos de la BD si existen, sino usar fallback estático
      detailedDescription: courseData.detailedDescription || specificDetails.detailedDescription,
      duration: courseData.duration || specificDetails.duration,
      certification: courseData.certification || specificDetails.certification,
      category: courseData.category || specificDetails.category,
      students: courseData.students || Math.floor((courseData.id.charCodeAt(0) + courseData.id.length) * 50) + 500,
      rating: courseData.rating || Math.round((4.5 + (courseData.id.charCodeAt(1) % 5) * 0.1) * 10) / 10,
      price: courseData.price || specificDetails.price,
      instructor: courseData.instructor || specificDetails.instructor,
      location: courseData.location || specificDetails.location,
      schedule: courseData.schedule || specificDetails.schedule,
      objectives: courseData.objectives || specificDetails.objectives,
      benefits: courseData.benefits || specificDetails.benefits,
      requirements: courseData.requirements || specificDetails.requirements,
      modules: courseData.modules || specificDetails.modules,
      gradient: courseData.gradient,
      icon: courseData.icon,
      order: courseData.order
    };

    return NextResponse.json({ 
      success: true, 
      data: detailedCourse 
    }, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    });
  } catch (error) {
    console.error('Error fetching course:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}

// PUT - Actualizar curso por slug
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();
    
    // Buscar el curso por nombre
    const courseName = slug
      .split('-')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const course = await prisma.home_service_items.findFirst({
      where: {
        name: {
          contains: courseName,
          mode: 'insensitive'
        }
      }
    });

    if (!course) {
      return NextResponse.json({ 
        success: false, 
        error: 'Curso no encontrado' 
      }, { status: 404 });
    }

    const updatedCourse = await prisma.home_service_items.update({
      where: { id: course.id },
      data: {
        name: body.name || course.name,
        description: body.description || course.description,
        icon: body.icon || course.icon,
        gradient: body.gradient || course.gradient,
        order: body.order || course.order
      }
    });

    return NextResponse.json({ 
      success: true, 
      data: updatedCourse 
    });
  } catch (error) {
    console.error('Error updating course:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}
