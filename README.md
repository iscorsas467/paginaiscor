# 🏢 ISCOR - Soluciones Empresariales

**Sistema Web Completo para ISCOR Colombia - Empresa Líder en Soluciones Empresariales**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)](https://prisma.io/)

---

## 📋 Tabla de Contenidos

- [🎯 Descripción del Proyecto](#-descripción-del-proyecto)
- [✨ Características Principales](#-características-principales)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [🚀 Instalación y Configuración](#-instalación-y-configuración)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🎨 Funcionalidades del Sitio Web](#-funcionalidades-del-sitio-web)
- [🔐 Panel de Administración](#-panel-de-administración)
- [📊 Base de Datos](#-base-de-datos)
- [🔧 Scripts Disponibles](#-scripts-disponibles)
- [🌐 API Endpoints](#-api-endpoints)
- [📱 Responsive Design](#-responsive-design)
- [🎭 Animaciones y Efectos](#-animaciones-y-efectos)
- [🔒 Seguridad](#-seguridad)
- [📈 Rendimiento](#-rendimiento)
- [🤝 Contribución](#-contribución)
- [📄 Licencia](#-licencia)

---

## 🎯 Descripción del Proyecto

ISCOR es una plataforma web completa desarrollada para **ISCOR Colombia**, una empresa líder en soluciones empresariales modernas. El sistema incluye un sitio web corporativo profesional, un panel de administración robusto, y un sistema de gestión de certificados.

### 🎪 Características Destacadas:
- **Sitio Web Corporativo** con diseño moderno y profesional
- **Panel de Administración** completo con autenticación segura
- **Sistema de Certificados** con búsqueda por cédula
- **Gestión de Cursos** dinámica con 29 cursos disponibles
- **Contenido Dinámico** gestionado desde base de datos
- **Diseño Responsive** optimizado para todos los dispositivos

---

## ✨ Características Principales

### 🌐 Sitio Web Corporativo
- **Página de Inicio** con carrusel dinámico y estadísticas
- **Servicios y Cursos** con información detallada
- **Página de Contacto** con formulario funcional
- **Nuestro Equipo** con perfiles profesionales
- **La Empresa** con información corporativa
- **Sistema de Certificados** para consulta pública

### 🔐 Panel de Administración
- **Autenticación Segura** con credenciales requeridas
- **Dashboard Completo** con estadísticas y actividad reciente
- **Gestión de Cursos** con CRUD completo
- **Gestión de Contenido** del sitio web
- **Logout Seguro** con limpieza completa de sesión

### 📊 Sistema de Certificados
- **Búsqueda por Cédula** con validación
- **Más de 5,700 certificados** importados
- **Diseño Profesional** con avisos de seguridad
- **Validación de Estado** (Vigente/Vencido)

---

## 🛠️ Tecnologías Utilizadas

### 🎨 Frontend
- **Next.js 15.5.0** - Framework React con SSR/SSG
- **TypeScript 5.0** - Tipado estático
- **Tailwind CSS 4.0** - Framework de estilos
- **Framer Motion** - Animaciones fluidas
- **Heroicons** - Iconografía consistente

### 🎭 Efectos Visuales
- **Three.js** - Gráficos 3D y efectos avanzados
- **React Three Fiber** - Integración de Three.js con React
- **Particles.js** - Efectos de partículas
- **Lottie React** - Animaciones vectoriales

### 🗄️ Backend y Base de Datos
- **Supabase** - Base de datos PostgreSQL en la nube
- **Prisma ORM** - Mapeo objeto-relacional
- **Next.js API Routes** - Endpoints RESTful
- **JWT** - Autenticación con tokens

### 🔧 Herramientas de Desarrollo
- **ESLint** - Linting de código
- **PostCSS** - Procesamiento de CSS
- **Turbopack** - Bundling rápido

---

## 🚀 Instalación y Configuración

### 📋 Prerrequisitos
- **Node.js** 18.0 o superior
- **npm** o **yarn**
- **Cuenta de Supabase** (gratuita)

### 🔧 Pasos de Instalación

1. **Clonar el Repositorio**
```bash
git clone https://github.com/iscorsas467/paginaiscor.git
cd paginaiscor
```

2. **Instalar Dependencias**
```bash
npm install
```

3. **Configurar Variables de Entorno**
```bash
# Crear archivo .env.local
cp .env.example .env.local
```

4. **Configurar Supabase**
```bash
# Agregar a .env.local
DATABASE_URL="postgresql://usuario:password@host:puerto/database"
NEXT_PUBLIC_SUPABASE_URL="tu-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="tu-supabase-anon-key"
```

5. **Configurar Base de Datos**
```bash
# Generar cliente Prisma
npx prisma generate

# Aplicar migraciones
npx prisma db push

# Poblar base de datos
npm run seed
```

6. **Ejecutar en Desarrollo**
```bash
npm run dev
```

7. **Acceder a la Aplicación**
- **Sitio Web**: http://localhost:3000
- **Panel Admin**: http://localhost:3000/admin
- **Login Admin**: http://localhost:3000/login

### 🔑 Credenciales de Administración
```
Email: admin@iscor.com
Contraseña: admin123
```

---

## 📁 Estructura del Proyecto

```
iscor-app/
├── 📁 public/                    # Archivos estáticos
│   ├── 🖼️ iscor-logo-*.png      # Logos de la empresa
│   ├── 📁 clientes/             # Logos de clientes
│   ├── 🎨 *.svg                 # Iconos y gráficos
│   └── 📄 u993654675_app.sql    # Datos de certificados
├── 📁 src/
│   ├── 📁 app/                  # App Router de Next.js
│   │   ├── 📁 admin/            # Panel de administración
│   │   ├── 📁 api/              # API Routes
│   │   │   ├── 📁 auth/         # Autenticación
│   │   │   ├── 📁 courses/      # Gestión de cursos
│   │   │   └── 📁 certificados/ # Sistema de certificados
│   │   ├── 📁 certificados/     # Página de certificados
│   │   ├── 📁 contacto/         # Página de contacto
│   │   ├── 📁 cursos/           # Páginas de cursos
│   │   └── 📁 servicios/        # Página de servicios
│   ├── 📁 components/           # Componentes React
│   │   ├── 🎨 ModernNavbar.tsx  # Navegación principal
│   │   ├── 🎭 HeroCarousel.tsx  # Carrusel de inicio
│   │   ├── 📚 ElegantCourses.tsx # Lista de cursos
│   │   └── 🔐 CourseManager.tsx # Gestor de cursos
│   ├── 📁 generated/            # Código generado por Prisma
│   └── 📁 lib/                  # Utilidades y configuración
├── 📁 scripts/                  # Scripts de utilidad
│   ├── 🌱 seed-courses.ts       # Poblar cursos
│   ├── 📊 import-certificados.ts # Importar certificados
│   └── 🔍 check-*.ts            # Scripts de verificación
├── 📁 prisma/                   # Configuración de base de datos
│   ├── 📄 schema.prisma         # Esquema de base de datos
│   └── 📁 migrations/           # Migraciones
└── 📄 package.json              # Dependencias y scripts
```

---

## 🎨 Funcionalidades del Sitio Web

### 🏠 Página de Inicio
- **Hero Section** con carrusel dinámico de cursos
- **Estadísticas** en tiempo real (cursos, usuarios, certificados)
- **Servicios Destacados** con iconos y descripciones
- **Testimonios** de clientes
- **Efectos Visuales** con partículas y animaciones 3D

### 📚 Página de Servicios/Cursos
- **29 Cursos Disponibles** con información completa
- **Filtros y Búsqueda** por categoría
- **Tarjetas Elegantes** con gradientes y efectos hover
- **Información Detallada** de cada curso
- **Sistema de Calificaciones** con estrellas

### 📖 Páginas de Cursos Individuales
- **Información Completa** del curso
- **Objetivos y Beneficios** detallados
- **Contenido del Curso** por módulos
- **Requisitos** y duración
- **Botón de Interés** para contacto

### 📞 Página de Contacto
- **Formulario de Contacto** funcional
- **Información de la Empresa** (dirección, teléfono, email)
- **Mapa Interactivo** de ubicación
- **Horarios de Atención**

### 👥 Nuestro Equipo
- **Perfiles Profesionales** del equipo
- **Fotos y Biografías** de cada miembro
- **Especialidades** y experiencia

### 🏢 La Empresa
- **Historia de la Empresa**
- **Misión y Visión**
- **Valores Corporativos**
- **Certificaciones y Reconocimientos**

### 🏆 Sistema de Certificados
- **Búsqueda por Cédula** sin puntos ni espacios
- **Validación de Estado** (Vigente/Vencido)
- **Información Completa** del certificado
- **Diseño Profesional** con avisos de seguridad
- **Más de 5,700 Certificados** disponibles

---

## 🔐 Panel de Administración

### 🚪 Autenticación
- **Login Seguro** con credenciales requeridas
- **Verificación de Sesión** en cada acceso
- **Logout Completo** con limpieza de estado
- **Redirección Automática** a login si no autenticado

### 📊 Dashboard
- **Estadísticas Generales** del sistema
- **Actividad Reciente** con timeline
- **Métricas de Rendimiento** en tiempo real
- **Indicadores Visuales** de estado

### 📚 Gestión de Cursos
- **CRUD Completo** de cursos
- **Editor Visual** de contenido
- **Gestión de Iconos** y categorías
- **Validación de Datos** en tiempo real

### 📝 Gestión de Contenido
- **Editor de Páginas** principales
- **Gestión de Hero Sections**
- **Configuración de Servicios**
- **Actualización de Estadísticas**

### 🔧 Características de Seguridad
- **Sesiones con Expiración** automática
- **Limpieza Completa** al cerrar sesión
- **Validación de Credenciales** en servidor
- **Protección de Rutas** administrativas

---

## 📊 Base de Datos

### 🗄️ Esquema Principal
```sql
-- Tablas principales
users                    # Usuarios del sistema
courses                  # Cursos y servicios
certificados            # Certificados emitidos
home_hero              # Contenido del hero
home_services          # Servicios principales
home_stats             # Estadísticas
contact_info           # Información de contacto
```

### 📈 Datos Importados
- **29 Cursos** con información completa
- **5,700+ Certificados** con datos reales
- **Contenido Dinámico** del sitio web
- **Configuración** del sistema

### 🔄 Migraciones
- **Migraciones Automáticas** con Prisma
- **Versionado de Esquema** en Git
- **Rollback** de cambios si es necesario

---

## 🔧 Scripts Disponibles

### 🌱 Scripts de Población
```bash
# Poblar cursos iniciales
npm run seed-courses

# Agregar cursos faltantes
npm run add-missing-courses

# Importar certificados
npm run import-certificados
```

### 🔍 Scripts de Verificación
```bash
# Verificar datos de cursos
npm run check-courses

# Analizar detalles de cursos
npm run analyze-courses

# Verificar tabla de usuarios
npm run check-users
```

### 🧪 Scripts de Prueba
```bash
# Probar autenticación
npm run test-auth

# Probar detalles de cursos
npm run test-course-details

# Probar sistema de certificados
npm run test-certificados
```

---

## 🌐 API Endpoints

### 🔐 Autenticación
```
POST /api/auth/login     # Iniciar sesión
POST /api/auth/logout    # Cerrar sesión
GET  /api/auth/verify    # Verificar sesión
```

### 📚 Cursos
```
GET    /api/courses           # Listar todos los cursos
POST   /api/courses           # Crear nuevo curso
PUT    /api/courses/[id]      # Actualizar curso
DELETE /api/courses/[id]      # Eliminar curso
GET    /api/courses/[slug]    # Obtener curso por slug
```

### 🏆 Certificados
```
GET /api/certificados/[cedula] # Buscar certificado por cédula
```

### 📊 Contenido
```
GET  /api/home-content        # Contenido de la página de inicio
GET  /api/contact-info        # Información de contacto
GET  /api/statistics          # Estadísticas del sistema
GET  /api/page-content        # Contenido de páginas
```

---

## 📱 Responsive Design

### 📱 Dispositivos Móviles
- **Diseño Adaptativo** para pantallas pequeñas
- **Navegación Táctil** optimizada
- **Imágenes Responsivas** con lazy loading
- **Formularios Móviles** con validación

### 💻 Tablets
- **Layout Intermedio** entre móvil y desktop
- **Navegación Híbrida** con menús desplegables
- **Contenido Optimizado** para pantallas medianas

### 🖥️ Desktop
- **Experiencia Completa** con todas las funcionalidades
- **Efectos Visuales** avanzados
- **Navegación Completa** con sidebar y breadcrumbs

---

## 🎭 Animaciones y Efectos

### ✨ Efectos Visuales
- **Framer Motion** para transiciones suaves
- **Particles.js** para efectos de partículas
- **Three.js** para gráficos 3D
- **Lottie** para animaciones vectoriales

### 🎨 Componentes Animados
- **Hero Carousel** con transiciones automáticas
- **Cards Hover** con efectos de elevación
- **Loading States** con spinners personalizados
- **Form Validations** con feedback visual

### 🌊 Efectos de Fondo
- **Gradientes Dinámicos** con Granim.js
- **Partículas Interactivas** en el hero
- **Efectos 3D** en secciones especiales
- **Animaciones CSS** para micro-interacciones

---

## 🔒 Seguridad

### 🛡️ Autenticación
- **JWT Tokens** para sesiones seguras
- **Cookies HttpOnly** para protección XSS
- **Expiración de Sesiones** automática
- **Validación de Credenciales** en servidor

### 🔐 Protección de Datos
- **Validación de Entrada** en todos los formularios
- **Sanitización de Datos** antes de almacenar
- **Protección CSRF** con tokens
- **Rate Limiting** en endpoints críticos

### 🚫 Seguridad del Cliente
- **CSP Headers** para prevenir XSS
- **HTTPS** obligatorio en producción
- **Validación de Tipos** con TypeScript
- **Limpieza de Estado** al cerrar sesión

---

## 📈 Rendimiento

### ⚡ Optimizaciones
- **Next.js 15** con Turbopack para builds rápidos
- **Image Optimization** automática
- **Code Splitting** por rutas
- **Lazy Loading** de componentes

### 🗄️ Base de Datos
- **Índices Optimizados** en consultas frecuentes
- **Conexiones Pool** para mejor rendimiento
- **Caching** de consultas repetitivas
- **Paginación** en listas grandes

### 🌐 CDN y Caching
- **Static Generation** para páginas públicas
- **ISR** para contenido dinámico
- **Browser Caching** optimizado
- **Compresión Gzip** habilitada

---

## 🤝 Contribución

### 🔧 Desarrollo Local
1. **Fork** del repositorio
2. **Crear rama** para nueva funcionalidad
3. **Desarrollar** con estándares de código
4. **Probar** todas las funcionalidades
5. **Crear Pull Request** con descripción detallada

### 📝 Estándares de Código
- **TypeScript** estricto para tipado
- **ESLint** para calidad de código
- **Prettier** para formato consistente
- **Commits** descriptivos en español

### 🧪 Testing
- **Pruebas Manuales** de todas las funcionalidades
- **Validación** de responsive design
- **Verificación** de accesibilidad
- **Testing** de rendimiento

---

## 📄 Licencia

Este proyecto es propiedad de **ISCOR Colombia** y está protegido por derechos de autor. 

### 📋 Términos de Uso
- **Uso Interno** de la empresa únicamente
- **No Distribución** sin autorización
- **Modificaciones** solo por personal autorizado
- **Backup** regular de datos importantes

---

## 📞 Contacto y Soporte

### 🏢 ISCOR Colombia
- **Sitio Web**: [www.iscor.com.co](https://www.iscor.com.co)
- **Email**: info@iscor.com.co
- **Teléfono**: +57 (2) 555-0123
- **Dirección**: Calle 123 #45-67, Cali, Colombia

### 👨‍💻 Soporte Técnico
- **Desarrollador**: Equipo de Desarrollo ISCOR
- **Email**: dev@iscor.com.co
- **Documentación**: Este README
- **Issues**: Usar el sistema de issues de GitHub

---

## 🎉 Agradecimientos

- **Next.js Team** por el framework excepcional
- **Supabase** por la plataforma de base de datos
- **Tailwind CSS** por el sistema de estilos
- **Prisma** por el ORM intuitivo
- **Comunidad Open Source** por las librerías utilizadas

---

**Desarrollado con ❤️ para ISCOR Colombia**

*Última actualización: Enero 2025*
