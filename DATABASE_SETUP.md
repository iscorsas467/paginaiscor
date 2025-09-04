# Configuración de Base de Datos - ISCOR

## Variables de Entorno Requeridas

Para que el proyecto funcione correctamente, necesitas configurar las siguientes variables de entorno en tu archivo `.env`:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/paginaiscor?schema=public"
DIRECT_URL="postgresql://username:password@localhost:5432/paginaiscor?schema=public"
```

## Configuración para Supabase

Si estás usando Supabase, las URLs serían:

```env
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres?schema=public"
DIRECT_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres?schema=public"
```

## Pasos para Configurar

1. **Crear archivo `.env`** en la raíz del proyecto
2. **Agregar las variables** de entorno con tus credenciales de base de datos
3. **Ejecutar migración**:
   ```bash
   npx prisma migrate dev --name init
   ```
4. **Generar cliente** (si es necesario):
   ```bash
   npx prisma generate
   ```

## Tablas Creadas

El esquema incluye las siguientes tablas organizadas por sección:

### Página de Inicio (Home)
- `home_hero` - Sección principal de la página de inicio
- `home_stats` - Estadísticas del hero
- `home_cta_buttons` - Botones de llamada a la acción
- `home_services` - Servicios destacados
- `home_service_items` - Items individuales de servicios
- `home_features` - Características principales
- `home_feature_items` - Items individuales de características
- `home_testimonials` - Testimonios de clientes
- `home_testimonial_items` - Items individuales de testimonios

### Página de Empresa (Company)
- `company_hero` - Sección principal de la empresa
- `company_about` - Información sobre la empresa
- `company_services` - Servicios de la empresa
- `company_certifications` - Certificaciones
- `company_mission` - Misión de la empresa
- `company_vision` - Visión de la empresa
- `company_strengths` - Fortalezas de la empresa
- `company_strength_items` - Items individuales de fortalezas
- `company_values` - Valores de la empresa
- `company_value_items` - Items individuales de valores

### Página de Equipo (Team)
- `team_hero` - Sección principal del equipo
- `team_stats` - Estadísticas del equipo
- `team_leadership` - Equipo de liderazgo
- `team_departments` - Departamentos
- `team_department_items` - Items individuales de departamentos
- `team_full_team` - Equipo completo
- `team_members` - Miembros del equipo

### Página de Contacto (Contact)
- `contact_hero` - Sección principal de contacto
- `contact_stats` - Estadísticas de contacto
- `contact_form` - Formulario de contacto
- `contact_form_fields` - Campos del formulario
- `contact_info` - Información de contacto
- `contact_info_items` - Items individuales de información
- `contact_faq` - Preguntas frecuentes
- `contact_faq_items` - Items individuales de FAQ

### Configuración Global (Global)
- `global_company` - Información global de la empresa
- `global_contact` - Información global de contacto
- `global_social` - Redes sociales
- `global_seo` - Configuración SEO

## Características del Esquema

- **IDs únicos**: Cada tabla usa `cuid()` para IDs únicos
- **Timestamps**: Todas las tablas incluyen `createdAt` y `updatedAt`
- **Relaciones**: Relaciones apropiadas entre tablas padre e hijo
- **Cascada**: Eliminación en cascada para mantener integridad
- **Ordenamiento**: Campo `order` para controlar el orden de elementos
- **Flexibilidad**: Estructura que permite agregar/editar contenido dinámicamente

## Uso en el Panel de Administración

Estas tablas están diseñadas para ser utilizadas por el panel de administración existente, permitiendo:

- Editar contenido de todas las páginas
- Agregar/eliminar elementos dinámicamente
- Mantener el orden de elementos
- Gestionar información global del sitio
- Configurar SEO y metadatos
