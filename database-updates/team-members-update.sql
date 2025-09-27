-- Script para actualizar la información del equipo en Supabase
-- Este script debe ejecutarse en la base de datos para sincronizar los cambios

-- Primero, limpiar datos existentes si es necesario
-- DELETE FROM team_members WHERE leadershipId IS NOT NULL;

-- Insertar información de Fernando (Director General)
INSERT INTO team_members (
  id,
  name,
  position,
  bio,
  phone,
  email,
  linkedin,
  image,
  gradient,
  "order",
  "createdAt",
  "updatedAt",
  "leadershipId"
) VALUES (
  'fernando-director-general',
  'Fernando',
  'Director General',
  'Fernando cuenta con más de 18 años de experiencia en el sector de seguridad industrial. Ha liderado la implementación de sistemas de gestión de seguridad en más de 500 empresas a nivel nacional. Es especialista en normativas de seguridad y salud en el trabajo, con certificaciones internacionales en ISO 9001, ISO 14001 y OHSAS 18001. Su visión estratégica ha posicionado a ISCOR como líder en el sector.',
  '+57 300 123 4567',
  'fernando@iscor.com.co',
  'https://linkedin.com/in/fernando-iscor',
  '/team/fernando.jpg',
  'from-primary-500 to-primary-600',
  1,
  NOW(),
  NOW(),
  'leadership-main'
);

-- Insertar información de María (Gerente de Operaciones)
INSERT INTO team_members (
  id,
  name,
  position,
  bio,
  phone,
  email,
  linkedin,
  image,
  gradient,
  "order",
  "createdAt",
  "updatedAt",
  "leadershipId"
) VALUES (
  'maria-gerente-operaciones',
  'María',
  'Gerente de Operaciones',
  'María es ingeniera industrial con más de 15 años de experiencia en optimización de procesos operativos. Ha desarrollado e implementado sistemas de gestión de calidad que han mejorado significativamente la eficiencia operativa de ISCOR. Es experta en análisis de riesgos y diseño de procedimientos de seguridad.',
  '+57 300 234 5678',
  'maria@iscor.com.co',
  'https://linkedin.com/in/maria-iscor',
  '/team/maria.jpg',
  'from-accent-500 to-accent-600',
  2,
  NOW(),
  NOW(),
  'leadership-main'
);

-- Insertar información de Carlos (Coordinador de Capacitación)
INSERT INTO team_members (
  id,
  name,
  position,
  bio,
  phone,
  email,
  linkedin,
  image,
  gradient,
  "order",
  "createdAt",
  "updatedAt",
  "leadershipId"
) VALUES (
  'carlos-coordinador-capacitacion',
  'Carlos',
  'Coordinador de Capacitación',
  'Carlos es especialista en formación y desarrollo de competencias técnicas. Ha diseñado más de 29 cursos especializados en seguridad industrial y ha capacitado a más de 15,000 personas. Su metodología innovadora ha sido reconocida por organismos internacionales de certificación.',
  '+57 300 345 6789',
  'carlos@iscor.com.co',
  'https://linkedin.com/in/carlos-iscor',
  '/team/carlos.jpg',
  'from-primary-500 to-accent-500',
  3,
  NOW(),
  NOW(),
  'leadership-main'
);

-- Crear o actualizar la sección de liderazgo
INSERT INTO team_leadership (
  id,
  title,
  description,
  "createdAt",
  "updatedAt"
) VALUES (
  'leadership-main',
  'Nuestro Equipo Directivo',
  'Profesionales comprometidos con la excelencia y la seguridad',
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  "updatedAt" = NOW();

-- Crear o actualizar estadísticas del equipo
INSERT INTO team_stats (
  id,
  professionals,
  experience,
  certifications,
  companies,
  "createdAt",
  "updatedAt",
  "heroId"
) VALUES (
  'team-stats-main',
  '50+',
  '18+',
  '29',
  '500+',
  NOW(),
  NOW(),
  'team-hero-main'
) ON CONFLICT (id) DO UPDATE SET
  professionals = EXCLUDED.professionals,
  experience = EXCLUDED.experience,
  certifications = EXCLUDED.certifications,
  companies = EXCLUDED.companies,
  "updatedAt" = NOW();

-- Crear o actualizar el hero de la página de equipo
INSERT INTO team_hero (
  id,
  title,
  subtitle,
  description,
  "createdAt",
  "updatedAt"
) VALUES (
  'team-hero-main',
  'Nuestro Equipo',
  'Profesionales comprometidos con la excelencia',
  'Conoce a los expertos que hacen posible nuestra misión de brindar soluciones integrales en seguridad industrial.',
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  subtitle = EXCLUDED.subtitle,
  description = EXCLUDED.description,
  "updatedAt" = NOW();

-- Actualizar la relación entre hero y stats
UPDATE team_stats SET "heroId" = 'team-hero-main' WHERE id = 'team-stats-main';

