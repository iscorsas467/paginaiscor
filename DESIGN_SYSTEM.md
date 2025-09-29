# Sistema de Diseño ISCOR

## 📋 Información General

Este documento describe el sistema de diseño estandarizado implementado para ISCOR, que incluye tokens de color, tipografía, espaciado y componentes base para lograr coherencia visual en todo el sitio.

## 🎨 Tokens de Color

### Colores de Marca
```css
--brand-600: #0B66FF  /* Azul principal */
--brand-700: #0A58E6  /* Azul oscuro */
```

### Colores de Texto
```css
--ink: #0B1220        /* Texto principal */
--ink-2: #1B2432      /* Texto secundario */
--muted: #6B7280      /* Texto atenuado */
```

### Colores de Fondo
```css
--bg: #0C1B3A         /* Fondo principal */
--surface: #0E2142    /* Superficie */
--card: #0F2348       /* Tarjetas */
```

### Colores de Estado
```css
--success: #0BBF66    /* Éxito */
--warning: #F59E0B    /* Advertencia */
--danger: #EF4444     /* Peligro */
```

## 🔤 Tipografía

### Familias de Fuentes
- **Headings**: Inter (font-heading)
- **Body**: Inter (font-body)
- **Mono**: JetBrains Mono (font-mono)

### Tamaños
- **xs**: 12px
- **sm**: 14px
- **base**: 16px
- **lg**: 18px
- **xl**: 20px
- **2xl**: 24px
- **3xl**: 30px
- **4xl**: 36px
- **5xl**: 48px
- **6xl**: 60px
- **7xl**: 72px
- **8xl**: 96px

### Pesos
- **normal**: 400
- **medium**: 500
- **semibold**: 600
- **bold**: 700
- **extrabold**: 800

## 📏 Espaciado

### Sistema de Espaciado
```css
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-6: 24px
--space-8: 32px
--space-12: 48px
--space-16: 64px
--space-20: 80px
--space-24: 96px
```

## 🧩 Componentes Base

### SectionTitle
Componente para títulos de sección con eyebrow, título y subtítulo.

```tsx
<SectionTitle
  eyebrow="Confianza Empresarial"
  title="Empresas que confían en ISCOR"
  subtitle="Referentes de industria que avalan nuestra experiencia"
  size="lg"
  align="center"
/>
```

**Props:**
- `title`: string (requerido)
- `eyebrow`: string (opcional)
- `subtitle`: string (opcional)
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `align`: 'left' | 'center' | 'right'

### Card
Componente de tarjeta con variantes y efectos.

```tsx
<Card
  variant="white"
  padding="md"
  shadow="md"
  hover={true}
>
  Contenido de la tarjeta
</Card>
```

**Props:**
- `variant`: 'surface' | 'white' | 'dark'
- `padding`: 'sm' | 'md' | 'lg' | 'xl'
- `shadow`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `hover`: boolean

### Button
Componente de botón con variantes y estados.

```tsx
<Button
  variant="primary"
  size="md"
  loading={false}
  icon={<Icon />}
  iconPosition="left"
>
  Texto del botón
</Button>
```

**Props:**
- `variant`: 'primary' | 'ghost' | 'link' | 'outline' | 'danger'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `loading`: boolean
- `icon`: ReactNode
- `iconPosition`: 'left' | 'right'

### IconBadge
Componente para iconos con fondo y variantes de color.

```tsx
<IconBadge
  icon={<Icon />}
  size="md"
  variant="primary"
>
  Texto opcional
</IconBadge>
```

**Props:**
- `icon`: ReactNode (requerido)
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `variant`: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'

## 🎯 Principios de Diseño

### 1. Consistencia Visual
- Uso de tokens de color en todo el sitio
- Tipografía estandarizada
- Espaciado consistente
- Componentes reutilizables

### 2. Jerarquía Visual
- Títulos con font-heading
- Texto con font-body
- Uso de colores para crear jerarquía
- Espaciado para separar secciones

### 3. Accesibilidad
- Contraste adecuado en todos los colores
- Estados de focus visibles
- Navegación por teclado
- Texto legible en todos los tamaños

### 4. Responsive Design
- Breakpoints estandarizados
- Componentes adaptativos
- Tipografía escalable
- Espaciado responsivo

## 🎨 Aplicación del Sistema

### Portadas (Hero Sections)
- **Fondo**: Gradiente azul oscuro (`from-bg via-surface to-card`)
- **Texto**: Blanco con sombras para legibilidad
- **Tipografía**: font-heading para títulos

### Secciones de Contenido
- **Fondo**: Blanco o gris claro
- **Texto**: Negro/azul sobre blanco
- **Componentes**: Cards con sombras sutiles

### Estados Interactivos
- **Hover**: Escala y elevación sutiles
- **Focus**: Ring de color brand
- **Loading**: Spinners y estados de carga
- **Disabled**: Colores atenuados

## 🔧 Uso en Tailwind

### Clases Personalizadas
```css
.text-brand        /* Color brand-600 */
.bg-brand          /* Fondo brand-600 */
.border-brand      /* Borde brand-600 */
.bg-dark           /* Fondo oscuro */
.bg-surface        /* Fondo superficie */
.bg-card           /* Fondo tarjeta */
.text-ink          /* Texto principal */
.text-muted        /* Texto atenuado */
.shadow-brand      /* Sombra principal */
.transition-brand  /* Transición suave */
```

### Ejemplo de Uso
```tsx
<div className="bg-white text-ink p-6 rounded-2xl shadow-brand-md">
  <h2 className="text-4xl font-bold text-brand mb-4">
    Título con color de marca
  </h2>
  <p className="text-muted">
    Texto atenuado para descripciones
  </p>
</div>
```

## 📱 Responsive Design

### Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Ejemplo Responsivo
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
  <Card className="p-4 md:p-6 lg:p-8">
    <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
      Título responsivo
    </h3>
  </Card>
</div>
```

## 🚀 Mejores Prácticas

### 1. Uso de Tokens
- Siempre usar variables CSS en lugar de valores hardcodeados
- Mantener consistencia en colores y espaciado
- Usar las clases de utilidad de Tailwind

### 2. Componentes
- Reutilizar componentes base siempre que sea posible
- Crear variantes en lugar de componentes nuevos
- Mantener props consistentes entre componentes

### 3. Animaciones
- Usar Framer Motion para animaciones complejas
- Mantener transiciones sutiles y profesionales
- Respetar las preferencias de movimiento del usuario

### 4. Accesibilidad
- Siempre incluir alt text en imágenes
- Usar colores con contraste adecuado
- Implementar navegación por teclado
- Probar con lectores de pantalla

## 📚 Recursos

### Archivos Importantes
- `src/styles/theme.css` - Tokens de diseño
- `tailwind.config.ts` - Configuración de Tailwind
- `src/components/ui/` - Componentes base
- `DESIGN_SYSTEM.md` - Esta documentación

### Herramientas
- **Tailwind CSS** - Framework de utilidades
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
- **Radix UI** - Componentes accesibles

---

**Última actualización**: Diciembre 2024  
**Versión**: 1.0  
**Mantenido por**: Equipo de Desarrollo ISCOR



