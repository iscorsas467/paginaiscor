# Vínculos con Base de Datos - ISCOR

## 📋 Información General

Este documento describe todos los vínculos entre el sitio web y la base de datos Supabase. **IMPORTANTE**: Si necesitas modificar textos o información que está conectada a la base de datos, debes actualizar tanto el código como la base de datos.

## 🗄️ Tablas de la Base de Datos

### 1. **home_content**
- **Descripción**: Contenido principal de la página de inicio
- **Campos editables**:
  - `badge`: Badge principal (ej: "ISCOR - Líderes en Seguridad Integral")
  - `title`: Título principal del hero
  - `subtitle`: Subtítulo del hero
  - `description`: Descripción de servicios

### 2. **courses**
- **Descripción**: Información de todos los cursos
- **Campos editables**:
  - `name`: Nombre del curso
  - `description`: Descripción del curso
  - `detailedDescription`: Descripción detallada
  - `category`: Categoría (ej: "Seguridad Integral")
  - `instructor`: Nombre del instructor
  - `objectives`: Objetivos del curso
  - `benefits`: Beneficios del curso
  - `requirements`: Requisitos

### 3. **home_service_items**
- **Descripción**: Servicios mostrados en la página de inicio
- **Campos editables**:
  - `name`: Nombre del servicio
  - `description`: Descripción del servicio
  - `icon`: Ícono del servicio

### 4. **home_stats**
- **Descripción**: Estadísticas mostradas en la página de inicio
- **Campos editables**:
  - `experience`: Años de experiencia
  - `companies`: Número de empresas atendidas
  - `certifications`: Número de certificaciones

### 5. **contact_info**
- **Descripción**: Información de contacto
- **Campos editables**:
  - `title`: Título de la sección
  - `description`: Descripción
  - `contact_info_items`: Array de elementos de contacto

## 🔄 Proceso de Actualización

### Para Modificar Contenido Conectado a BD:

1. **Identificar la fuente**:
   - Si el texto está en un archivo `.tsx` o `.ts`, es código estático
   - Si el texto viene de una API (ej: `/api/home-content`), está en la BD

2. **Actualizar la base de datos**:
   ```sql
   -- Ejemplo: Actualizar título del hero
   UPDATE home_content 
   SET title = 'Nuevo Título' 
   WHERE id = 'default-hero';
   ```

3. **Verificar la API**:
   - Las APIs en `/api/` leen de la base de datos
   - No necesitas modificar el código si solo cambias la BD

## 📍 Ubicaciones de Contenido

### Contenido Estático (Solo Código):
- `src/components/ClientesSection.tsx` - Logos de clientes
- `src/components/AboutSection.tsx` - Información de la empresa
- `src/components/ModernServicesSection.tsx` - Servicios especializados
- `src/app/la-empresa/page.tsx` - Página "La Empresa"
- `src/app/nuestro-equipo/page.tsx` - Página "Nuestro Equipo"

### Contenido Dinámico (Base de Datos):
- Página de inicio (hero, servicios, estadísticas)
- Información de cursos individuales
- Información de contacto
- Contenido del panel de administración

## 🛠️ APIs que Conectan con BD

### 1. `/api/home-content`
- **Tabla**: `home_content`, `home_service_items`, `home_stats`
- **Uso**: Página de inicio

### 2. `/api/courses/[slug]`
- **Tabla**: `courses`
- **Uso**: Páginas individuales de cursos

### 3. `/api/contact-info`
- **Tabla**: `contact_info`
- **Uso**: Información de contacto

## ⚠️ Consideraciones Importantes

1. **Sincronización**: Siempre actualiza la BD cuando modifiques contenido dinámico
2. **Backup**: Haz backup de la BD antes de cambios masivos
3. **Testing**: Prueba los cambios en desarrollo antes de producción
4. **Cache**: Puede ser necesario limpiar cache después de cambios

## 🔧 Comandos Útiles

### Conectar a Supabase:
```bash
# Verificar conexión
npx prisma db pull

# Generar cliente
npx prisma generate

# Ver datos
npx prisma studio
```

### Actualizar esquema:
```bash
# Después de cambios en la BD
npx prisma db pull
npx prisma generate
```

## 📞 Contacto para Soporte

Si necesitas ayuda con la base de datos o tienes dudas sobre qué contenido modificar, contacta al equipo de desarrollo.

---

**Última actualización**: Diciembre 2024
**Versión**: 1.0

