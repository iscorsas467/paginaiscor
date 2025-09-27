# Tokens del Prompt 0 - Sistema de Diseño ISCOR

## 🎯 **Resumen**

Implementación completa de los tokens del Prompt 0 para estandarizar el diseño del sitio ISCOR con coherencia visual en todas las páginas.

## 🎨 **Tokens de Color Implementados**

### **Portadas (Hero Internos)**
```css
/* Fondo gradiente azul */
--hero-gradient: linear-gradient(135deg, #0C1B3A 0%, #0A58E6 100%);
--hero-gradient-hover: linear-gradient(135deg, #0A1A35 0%, #0947C7 100%);

/* Clase utilitaria */
.hero-gradient {
  background: var(--hero-gradient);
}
```

**Uso:**
```tsx
<section className="hero-gradient">
  <h1 className="text-white">Título en blanco 100%</h1>
</section>
```

### **Links y Acentos**
```css
/* Colores brand-600/700 */
--brand-600: #0B66FF;
--brand-700: #0A58E6;

/* Clases utilitarias */
.link-brand {
  color: var(--brand-600);
  transition: var(--transition-colors);
}

.link-brand:hover {
  color: var(--brand-700);
}
```

**Uso:**
```tsx
<a href="#" className="link-brand">Enlace estándar</a>
<a href="#" className="text-brand-600 hover:text-brand-700">Enlace personalizado</a>
```

### **Chips/Badges**
```css
/* Brand suave con texto ink-2 */
--chip-bg: rgba(11, 102, 255, 0.1);
--chip-text: var(--ink-2);
--chip-border: rgba(11, 102, 255, 0.2);

/* Clase utilitaria */
.chip-brand {
  background-color: var(--chip-bg);
  color: var(--chip-text);
  border: 1px solid var(--chip-border);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  transition: var(--transition-all);
}
```

**Uso:**
```tsx
<Chip variant="brand">Etiqueta</Chip>
<div className="chip-brand">Chip personalizado</div>
```

## 🃏 **Variantes de Cards**

### **Cards Blancas (Contenido Largo)**
```css
.card-white {
  background-color: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-all);
}

.card-white:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--brand-600);
}
```

**Uso:**
```tsx
<Card variant="white" padding="lg">
  <h3>Contenido largo</h3>
  <p>Texto descriptivo...</p>
</Card>
```

### **Cards Surface (Métricas)**
```css
.card-surface {
  background-color: var(--surface);
  border: 1px solid var(--card);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  color: var(--white);
  transition: var(--transition-all);
}

.card-surface:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--brand-600);
}
```

**Uso:**
```tsx
<Card variant="surface" padding="lg">
  <div className="text-3xl font-bold text-white">95%</div>
  <p className="text-white/80">Métrica importante</p>
</Card>
```

## 🔄 **Estados de Interacción**

### **Ring States**
```css
/* Estados de ring con variaciones de brand-700 */
--ring-hover: rgba(10, 88, 230, 0.3);
--ring-focus: rgba(10, 88, 230, 0.4);
--ring-active: rgba(10, 88, 230, 0.5);

/* Clases utilitarias */
.ring-hover:hover {
  box-shadow: 0 0 0 2px var(--ring-hover);
}

.ring-focus:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--ring-focus);
}

.ring-active:active {
  box-shadow: 0 0 0 3px var(--ring-active);
}
```

### **Estados de Interacción Completos**
```css
.interactive-hover:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}

.interactive-focus:focus {
  outline: none;
  box-shadow: var(--shadow-focus);
}

.interactive-active:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}
```

**Uso:**
```tsx
<Card className="interactive-hover interactive-focus interactive-active">
  <p>Card con estados completos</p>
</Card>

<Button className="ring-hover ring-focus ring-active">
  Botón con ring states
</Button>
```

## 🧩 **Componentes UI Actualizados**

### **Button Component**
- ✅ Estados de focus con `focus:outline-none`
- ✅ Ring states con variaciones de brand-700
- ✅ Transiciones suaves
- ✅ Estados disabled apropiados

### **Card Component**
- ✅ Variante `white` para contenido largo
- ✅ Variante `surface` para métricas
- ✅ Estados de hover con ring
- ✅ Transiciones suaves

### **Chip Component (Nuevo)**
- ✅ Variante `brand` con colores suaves
- ✅ Múltiples variantes (success, warning, danger, info)
- ✅ Tamaños responsivos (sm, md, lg)
- ✅ Iconos opcionales
- ✅ Función de eliminación

### **StandardHero Component**
- ✅ Gradiente hero-gradient implementado
- ✅ Texto blanco 100% en portadas
- ✅ Sombras de texto para impacto visual

## 📱 **Utilidades CSS Estándar**

### **Clases de Color**
```css
.text-brand { color: var(--brand-600); }
.text-brand-700 { color: var(--brand-700); }
.bg-brand { background-color: var(--brand-600); }
.bg-brand-700 { background-color: var(--brand-700); }
.border-brand { border-color: var(--brand-600); }
```

### **Clases de Fondo**
```css
.bg-dark { background-color: var(--bg); }
.bg-surface { background-color: var(--surface); }
.bg-card { background-color: var(--card); }
```

### **Clases de Texto**
```css
.text-ink { color: var(--ink); }
.text-ink-2 { color: var(--ink-2); }
.text-muted { color: var(--muted); }
.text-white { color: var(--white); }
```

## 🚀 **Ejemplos de Uso**

### **Página con Hero Gradient**
```tsx
import { StandardHero } from '@/components/StandardHero';

export default function MiPagina() {
  return (
    <StandardHero
      title="Mi Título"
      subtitle="Subtítulo descriptivo"
      description="Descripción detallada del contenido"
    />
  );
}
```

### **Sección con Cards**
```tsx
import { Card, Chip } from '@/components/ui';

export default function MiSeccion() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Card blanca para contenido largo */}
      <Card variant="white" padding="lg" hover={true}>
        <h3>Contenido Largo</h3>
        <p>Texto descriptivo extenso...</p>
      </Card>

      {/* Card surface para métricas */}
      <Card variant="surface" padding="lg" hover={true}>
        <div className="text-3xl font-bold text-white">95%</div>
        <p className="text-white/80">Satisfacción</p>
      </Card>
    </div>
  );
}
```

### **Chips y Badges**
```tsx
import { Chip } from '@/components/ui';
import { Shield, Globe } from 'lucide-react';

export default function MiComponente() {
  return (
    <div className="flex flex-wrap gap-3">
      <Chip variant="brand" icon={<Shield className="w-4 h-4" />}>
        Seguridad
      </Chip>
      <Chip variant="success" icon={<Globe className="w-4 h-4" />}>
        Medio Ambiente
      </Chip>
    </div>
  );
}
```

### **Estados de Interacción**
```tsx
import { Button, Card } from '@/components/ui';

export default function MiComponente() {
  return (
    <div className="space-y-4">
      {/* Botón con estados de ring */}
      <Button className="ring-hover ring-focus ring-active">
        Botón Interactivo
      </Button>

      {/* Card con estados completos */}
      <Card className="interactive-hover interactive-focus interactive-active">
        <p>Card interactiva</p>
      </Card>
    </div>
  );
}
```

## 📋 **Checklist de Implementación**

- ✅ **Portadas**: Gradiente azul (#0C1B3A → #0A58E6) implementado
- ✅ **Texto**: Blanco 100% en portadas con sombras
- ✅ **Links**: Colores brand-600/700 estandarizados
- ✅ **Chips**: Brand suave con texto ink-2
- ✅ **Cards**: Blancas para contenido, surface para métricas
- ✅ **Estados**: Ring y variaciones de brand-700
- ✅ **Utilidades**: Clases CSS estándar creadas
- ✅ **Componentes**: Button, Card, Chip actualizados
- ✅ **Hero**: StandardHero con gradiente implementado
- ✅ **Documentación**: Completa con ejemplos

## 🎯 **Beneficios del Sistema**

1. **Coherencia Visual**: Todos los componentes usan los mismos tokens
2. **Mantenibilidad**: Cambios centralizados en variables CSS
3. **Accesibilidad**: Estados de focus y ring apropiados
4. **Performance**: Clases CSS optimizadas
5. **Escalabilidad**: Fácil agregar nuevos componentes
6. **Consistencia**: Mismos colores y efectos en todo el sitio

## 🔧 **Mantenimiento**

### **Agregar Nuevos Colores**
Editar `src/styles/theme.css`:
```css
:root {
  --nuevo-color: #FF6B6B;
}
```

### **Agregar Nuevas Utilidades**
```css
.text-nuevo-color { color: var(--nuevo-color); }
.bg-nuevo-color { background-color: var(--nuevo-color); }
```

### **Crear Nuevos Componentes**
Usar los tokens existentes:
```tsx
export default function MiComponente() {
  return (
    <div className="card-white interactive-hover">
      <h3 className="text-ink">Título</h3>
      <p className="text-muted">Descripción</p>
    </div>
  );
}
```

## ✅ **Estado Actual**

- ✅ **Tokens CSS**: Completamente implementados
- ✅ **Utilidades**: Clases estándar creadas
- ✅ **Componentes**: Actualizados con nuevos tokens
- ✅ **Hero**: Gradiente implementado
- ✅ **Cards**: Variantes white y surface
- ✅ **Chips**: Componente nuevo creado
- ✅ **Estados**: Ring y interacción implementados
- ✅ **Documentación**: Completa con ejemplos
- ✅ **Ejemplo**: Página de demostración creada
- ✅ **Linting**: Sin errores

¡El sistema de tokens del Prompt 0 está completamente implementado y listo para usar! 🚀

