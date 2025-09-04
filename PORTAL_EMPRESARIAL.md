# Portal Empresarial Premium - ISCOR

## Descripción General

El Portal Empresarial Premium de ISCOR es un sistema de autenticación y gestión diseñado específicamente para empresas que han contratado servicios premium de seguridad industrial. Este portal proporciona acceso exclusivo a herramientas avanzadas de gestión de empleados, cursos especializados y reportes detallados.

## Características Principales

### 🔐 Sistema de Autenticación Empresarial
- **Login exclusivo para empresas premium**
- **Credenciales únicas por empresa**
- **Acceso diferenciado según el plan contratado**
- **Seguridad avanzada con validación de identidad**

### 📊 Dashboard Empresarial
- **Estadísticas en tiempo real**
- **Métricas de cumplimiento**
- **Alertas de certificaciones por vencer**
- **Resumen de actividades recientes**

### 👥 Gestión de Empleados
- **Registro y seguimiento de empleados**
- **Historial de certificaciones**
- **Estado de capacitaciones**
- **Búsqueda y filtros avanzados**

### 📚 Gestión de Cursos
- **Catálogo de cursos especializados**
- **Inscripción de empleados**
- **Seguimiento de progreso**
- **Calendario de capacitaciones**

### 📈 Reportes y Análisis
- **Reportes de cumplimiento**
- **Análisis de capacitaciones**
- **Estadísticas de seguridad**
- **Exportación de datos**

## Estructura del Sistema

### Rutas Principales

```
/empresa/login          # Página de login empresarial
/empresa/portal         # Portal principal empresarial
```

### Credenciales de Prueba

#### Empresa 1 - Industrias ABC S.A.S.
- **ID de Empresa:** `EMPRESA001`
- **Contraseña:** `premium2024`
- **Plan:** Premium Enterprise
- **Empleados:** 250
- **Cursos Activos:** 8

#### Empresa 2 - Constructora XYZ Ltda.
- **ID de Empresa:** `EMPRESA002`
- **Contraseña:** `seguridad2024`
- **Plan:** Premium Professional
- **Empleados:** 180
- **Cursos Activos:** 6

#### Empresa 3 - Petroquímica Delta S.A.
- **ID de Empresa:** `EMPRESA003`
- **Contraseña:** `industrial2024`
- **Plan:** Premium Industrial
- **Empleados:** 450
- **Cursos Activos:** 12

## Funcionalidades Detalladas

### 1. Autenticación y Seguridad

#### Proceso de Login
1. **Validación de ID de Empresa**
   - Verificación de empresa registrada
   - Validación de plan activo
   - Comprobación de estado de cuenta

2. **Autenticación de Contraseña**
   - Encriptación de credenciales
   - Validación de contraseña
   - Control de intentos fallidos

3. **Redirección al Portal**
   - Acceso al dashboard empresarial
   - Carga de datos específicos de la empresa
   - Inicialización de sesión

### 2. Dashboard Empresarial

#### Métricas Principales
- **Total de Empleados:** Número de empleados registrados
- **Certificaciones Activas:** Certificaciones vigentes
- **Por Vencer (30 días):** Alertas de vencimiento próximo
- **Cursos Próximos:** Capacitaciones programadas

#### Acciones Rápidas
- **Gestionar Empleados:** Acceso directo a gestión de personal
- **Inscribir en Cursos:** Registro de empleados en capacitaciones
- **Generar Reportes:** Creación de reportes personalizados

### 3. Gestión de Empleados

#### Funcionalidades
- **Registro de Empleados**
  - Información personal
  - Datos de contacto
  - Departamento y cargo
  - Fecha de ingreso

- **Seguimiento de Certificaciones**
  - Historial completo
  - Fechas de emisión y vencimiento
  - Estado de vigencia
  - Calificaciones obtenidas

- **Búsqueda y Filtros**
  - Búsqueda por nombre
  - Filtro por departamento
  - Filtro por estado de certificación
  - Ordenamiento personalizado

#### Estados de Empleados
- **Activo:** Empleado con certificaciones vigentes
- **Pendiente:** Empleado con capacitaciones próximas
- **Vencido:** Empleado con certificaciones expiradas

### 4. Gestión de Cursos

#### Tipos de Cursos Disponibles
- **Trabajo en Alturas**
- **Espacios Confinados**
- **Control de Incendios**
- **Primeros Auxilios**
- **Materiales Peligrosos**
- **Gestión de Calidad**
- **Y más...**

#### Funcionalidades de Cursos
- **Inscripción de Empleados**
  - Selección múltiple
  - Validación de requisitos
  - Confirmación de cupos

- **Seguimiento de Progreso**
  - Estado de inscripción
  - Fechas de inicio y fin
  - Calificaciones obtenidas
  - Certificaciones emitidas

### 5. Reportes y Análisis

#### Tipos de Reportes
- **Reporte de Cumplimiento Mensual**
  - Estado de certificaciones
  - Empleados por vencer
  - Cursos completados

- **Análisis de Capacitaciones**
  - Estadísticas por curso
  - Rendimiento de empleados
  - Tendencias de capacitación

- **Reporte de Incidentes de Seguridad**
  - Registro de incidentes
  - Análisis de causas
  - Medidas preventivas

#### Funcionalidades de Reportes
- **Generación Automática**
  - Reportes mensuales
  - Alertas de vencimiento
  - Resúmenes ejecutivos

- **Exportación de Datos**
  - Formato PDF
  - Formato Excel
  - Envío por email

## Planes de Suscripción

### Premium Enterprise
- **Empleados:** Hasta 500
- **Cursos:** Acceso completo
- **Reportes:** Avanzados
- **Soporte:** 24/7 prioritario

### Premium Professional
- **Empleados:** Hasta 200
- **Cursos:** Catálogo completo
- **Reportes:** Estándar
- **Soporte:** Horario laboral

### Premium Industrial
- **Empleados:** Sin límite
- **Cursos:** Todos + personalizados
- **Reportes:** Personalizados
- **Soporte:** Dedicado

## Beneficios del Portal Empresarial

### 🎯 Gestión Centralizada
- **Un solo lugar** para gestionar toda la información de seguridad
- **Acceso desde cualquier dispositivo** con conexión a internet
- **Sincronización automática** de datos

### 📊 Visibilidad Total
- **Dashboard en tiempo real** con métricas clave
- **Alertas automáticas** de vencimientos
- **Reportes detallados** para auditorías

### ⚡ Eficiencia Operacional
- **Reducción de tiempo** en gestión manual
- **Automatización** de procesos repetitivos
- **Optimización** de recursos de capacitación

### 🛡️ Cumplimiento Normativo
- **Seguimiento automático** de certificaciones
- **Evidencia digital** para auditorías
- **Cumplimiento** de normativas de seguridad

## Tecnologías Utilizadas

### Frontend
- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **Heroicons** - Iconografía
- **Framer Motion** - Animaciones

### Características Técnicas
- **Responsive Design** - Adaptable a todos los dispositivos
- **Progressive Web App** - Funcionalidad offline
- **SEO Optimizado** - Mejor visibilidad en buscadores
- **Accesibilidad** - Cumple estándares WCAG

## Seguridad y Privacidad

### Medidas de Seguridad
- **Autenticación robusta** con validación de credenciales
- **Encriptación de datos** sensibles
- **Control de acceso** basado en roles
- **Auditoría de actividades** del sistema

### Protección de Datos
- **Cumplimiento GDPR** para empresas europeas
- **Respaldo automático** de información
- **Eliminación segura** de datos obsoletos
- **Política de privacidad** transparente

## Soporte y Mantenimiento

### Soporte Técnico
- **Horario:** 24/7 para planes Enterprise
- **Canales:** Email, teléfono, chat en vivo
- **Respuesta:** Máximo 2 horas para casos críticos

### Mantenimiento
- **Actualizaciones automáticas** del sistema
- **Mejoras continuas** basadas en feedback
- **Nuevas funcionalidades** regulares
- **Compatibilidad** con navegadores modernos

## Roadmap Futuro

### Próximas Funcionalidades
- **App móvil nativa** para iOS y Android
- **Integración con sistemas ERP** empresariales
- **Inteligencia artificial** para recomendaciones
- **Realidad aumentada** para capacitaciones prácticas

### Mejoras Planificadas
- **API pública** para integraciones
- **Analytics avanzados** con machine learning
- **Gamificación** de capacitaciones
- **Certificaciones blockchain** para mayor seguridad

## Contacto y Soporte

### Información de Contacto
- **Email empresarial:** empresas@iscor.com.co
- **Teléfono:** +57 300 123 4567
- **Oficina:** Bogotá, Colombia
- **Horario:** Lunes a Viernes 8:00 AM - 6:00 PM

### Recursos Adicionales
- **Documentación técnica:** Disponible en el portal
- **Videos tutoriales:** Canal de YouTube
- **FAQ:** Preguntas frecuentes en el sitio web
- **Comunidad:** Foro de usuarios empresariales

---

**© 2024 ISCOR. Todos los derechos reservados.**

*Portal Empresarial Premium - Soluciones integrales de seguridad industrial*
