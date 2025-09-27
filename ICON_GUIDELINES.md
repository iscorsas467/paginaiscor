# Guía de Iconos - ISCOR

## 📋 Información General

Este documento describe los iconos utilizados en el sitio web ISCOR y sus significados para mantener la consistencia visual y semántica.

## 🎯 Principios de Uso de Iconos

### 1. **Consistencia Visual**
- Todos los iconos provienen de Heroicons (v24/outline)
- Tamaño estándar: `h-6 w-6` para iconos regulares, `h-8 w-8` para iconos principales
- Estilo: Outline (contorno) para mantener uniformidad

### 2. **Significado Semántico**
- Cada icono debe representar claramente su función
- Evitar iconos genéricos cuando hay opciones más específicas
- Mantener coherencia entre iconos relacionados

## 🏷️ Iconos por Categoría

### **Seguridad y Protección**
- `ShieldCheckIcon` - Seguridad general, protección, certificaciones
- `LockClosedIcon` - Seguridad física, acceso restringido
- `ExclamationTriangleIcon` - Emergencias, alertas, riesgos
- `FireIcon` - Incendios, protección contra fuego

### **Medio Ambiente y Sostenibilidad**
- `GlobeAltIcon` - Medio ambiente, sostenibilidad, global
- `HeartIcon` - Salud ocupacional, bienestar

### **Calidad y Certificación**
- `ClipboardDocumentListIcon` - Calidad, listas de verificación, auditorías
- `DocumentCheckIcon` - Documentos aprobados, certificaciones
- `TrophyIcon` - Logros, reconocimientos, excelencia

### **Capacitación y Educación**
- `AcademicCapIcon` - Educación, capacitación, formación
- `LightBulbIcon` - Conocimiento, innovación, ideas
- `UserGroupIcon` - Grupos, equipos, colaboración

### **Empresas y Organizaciones**
- `BuildingOfficeIcon` - Empresas, oficinas, instalaciones
- `UserIcon` - Personas, usuarios, individuos

### **Tiempo y Progreso**
- `ClockIcon` - Tiempo, duración, experiencia
- `StarIcon` - Calificación, satisfacción, calidad

### **Navegación y Acciones**
- `ChevronDownIcon` - Expandir, mostrar más
- `ChevronUpIcon` - Contraer, mostrar menos
- `ArrowRightIcon` - Continuar, siguiente, acción
- `CheckCircleIcon` - Completado, verificado, exitoso

## 📍 Ubicaciones de Iconos

### **Servicios Especializados** (`ModernServicesSection.tsx`)
- **Seguridad y Salud en el Trabajo**: `ShieldCheckIcon` ✅
- **Medio Ambiente**: `GlobeAltIcon` ✅
- **Calidad**: `ClipboardDocumentListIcon` ✅ (mejorado)
- **Seguridad Física**: `BuildingOfficeIcon` ✅ (mejorado)
- **Emergencias**: `ExclamationTriangleIcon` ✅ (mejorado)
- **Capacitación**: `LightBulbIcon` ✅ (mejorado)

### **Página de Equipo** (`nuestro-equipo/page.tsx`)
- **Capacitación**: `AcademicCapIcon` ✅
- **Certificaciones**: `TrophyIcon` ✅
- **Consultoría**: `ShieldCheckIcon` ✅

### **Instructor Principal** (`InstructorPrincipal.tsx`)
- **Ingeniero Contra Incendios**: `FireIcon` ✅
- **Salud Ocupacional**: `HeartIcon` ✅
- **Instructor Internacional**: `GlobeAltIcon` ✅
- **Primeros Auxilios**: `ShieldCheckIcon` ✅

### **Hero Principal** (`MinimalHero.tsx`)
- **Años de Experiencia**: `TrophyIcon` ✅
- **Empresas Atendidas**: `UserGroupIcon` ✅
- **Profesionales Certificados**: `AcademicCapIcon` ✅
- **Satisfacción del Cliente**: `StarIcon` ✅

### **Sección Acerca de** (`AboutSection.tsx`)
- **Seguridad Primero**: `ShieldCheckIcon` ✅
- **Excelencia Académica**: `AcademicCapIcon` ✅
- **Compromiso con la Calidad**: `TrophyIcon` ✅
- **Innovación Continua**: `GlobeAltIcon` ✅

## 🔄 Mejoras Implementadas

### **Antes vs Después**

#### **Servicios Especializados:**
- **Calidad**: `DocumentCheckIcon` → `ClipboardDocumentListIcon` (más específico para listas de verificación)
- **Seguridad Física**: `LockClosedIcon` → `BuildingOfficeIcon` (mejor representa instalaciones)
- **Emergencias**: `FireIcon` → `ExclamationTriangleIcon` (más amplio para emergencias generales)
- **Capacitación**: `AcademicCapIcon` → `LightBulbIcon` (representa mejor el conocimiento e innovación)

#### **CourseManager:**
- **Iconos emoji**: `🏗️` → `ShieldCheckIcon` (más profesional y consistente)

## 📝 Reglas de Uso

### **DO (Hacer):**
- ✅ Usar iconos de Heroicons v24/outline
- ✅ Mantener tamaños consistentes
- ✅ Elegir iconos que representen claramente la función
- ✅ Usar colores coherentes con la paleta del sitio
- ✅ Aplicar efectos hover apropiados

### **DON'T (No hacer):**
- ❌ Mezclar estilos de iconos (outline con solid)
- ❌ Usar iconos emoji en contextos profesionales
- ❌ Elegir iconos genéricos cuando hay opciones específicas
- ❌ Cambiar tamaños sin justificación
- ❌ Usar iconos que no representen claramente su función

## 🎨 Colores de Iconos

### **Colores por Categoría:**
- **Azul** (`text-blue-600`): Seguridad, confianza, profesionalismo
- **Verde** (`text-green-600`): Medio ambiente, salud, crecimiento
- **Púrpura** (`text-purple-600`): Calidad, innovación, excelencia
- **Rojo** (`text-red-600`): Emergencias, alertas, urgencia
- **Naranja** (`text-orange-600`): Energía, acción, dinamismo
- **Índigo** (`text-indigo-600`): Conocimiento, sabiduría, profundidad

## 🔧 Mantenimiento

### **Para Agregar Nuevos Iconos:**
1. Verificar que el icono esté disponible en Heroicons v24/outline
2. Importar el icono en el componente correspondiente
3. Asignar un color apropiado según la categoría
4. Documentar el uso en este archivo
5. Verificar que sea consistente con el diseño existente

### **Para Modificar Iconos Existentes:**
1. Evaluar si el cambio mejora la claridad semántica
2. Verificar que sea consistente con otros iconos relacionados
3. Actualizar la documentación
4. Probar en diferentes tamaños de pantalla

---

**Última actualización**: Diciembre 2024  
**Versión**: 1.0  
**Librería de iconos**: Heroicons v24/outline

