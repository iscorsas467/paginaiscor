# Sección de Clientes - Variantes Disponibles

## 🎯 **Resumen**

Se han creado **dos variantes** de la sección de clientes para diferentes casos de uso:

1. **SwiperClientesSection** - Variante completa con carrusel
2. **GridClientesSection** - Variante ligera con grid responsive

## 🚀 **Variante Swiper (Completa)**

### **Características:**
- ✅ Carrusel automático con autoplay
- ✅ Navegación manual (prev/next)
- ✅ Paginación con bullets
- ✅ Loop infinito
- ✅ Pause on hover
- ✅ Breakpoints responsivos (2/4/6/8 logos)
- ✅ Efectos de hover avanzados
- ✅ Accesibilidad completa

### **Uso:**
```tsx
import { SwiperClientesSection } from '@/components/ClientesSection';

// En tu página
<SwiperClientesSection />
```

### **Ideal para:**
- Página principal
- Páginas con mucho contenido
- Cuando quieres máximo impacto visual
- Páginas que ya usan JavaScript pesado

---

## 📱 **Variante Grid (Ligera)**

### **Características:**
- ✅ Grid responsive con `auto-fit` y `minmax(120px, 1fr)`
- ✅ Sin títulos bajo los logos
- ✅ Gap de 4 unidades
- ✅ Tarjetas sin sombra
- ✅ Borde `#E5E7EB` a 1px
- ✅ Hover con ring-brand suave
- ✅ Carga más rápida
- ✅ Menos JavaScript

### **Uso:**
```tsx
import { GridClientesSection } from '@/components/ClientesSection';

// En tu página
<GridClientesSection />
```

### **Ideal para:**
- Páginas con poco contenido JavaScript
- Páginas de carga rápida
- Páginas estáticas
- Cuando prefieres simplicidad

---

## 🔧 **Componente Unificado**

### **Uso con selector de variante:**
```tsx
import ClientesSection from '@/components/ClientesSection';

// Variante Swiper (por defecto)
<ClientesSection />

// Variante Grid
<ClientesSection variant="grid" />
```

---

## 📊 **Comparación Técnica**

| Característica | Swiper | Grid |
|---|---|---|
| **JavaScript** | Pesado (Swiper + Framer Motion) | Ligero (solo Framer Motion) |
| **Tamaño** | ~50KB adicionales | ~5KB adicionales |
| **Interactividad** | Alta (carrusel, navegación) | Media (hover effects) |
| **Responsive** | Breakpoints fijos | Auto-fit dinámico |
| **Accesibilidad** | Completa | Básica |
| **Carga** | Más lenta | Más rápida |
| **Impacto Visual** | Alto | Medio |

---

## 🎨 **Especificaciones de Diseño**

### **Ambas Variantes Comparten:**
- ✅ Logos en monocromo con opacidad 0.85
- ✅ Hover: opacidad 100% + sin grayscale
- ✅ Altos normalizados (h-10 mobile, h-12/14 desktop)
- ✅ Object-contain para mantener proporciones
- ✅ Transiciones suaves de 300ms
- ✅ Fondo sutil con patrón geométrico
- ✅ SectionTitle: "Empresas que confían en ISCOR"

### **Grid Específico:**
- ✅ `grid-template-columns: repeat(auto-fit, minmax(120px, 1fr))`
- ✅ `gap: 1rem` (16px)
- ✅ `border: 1px solid #E5E7EB`
- ✅ `hover:ring-2 ring-brand-500/20 ring-offset-2`
- ✅ Sin sombras en las tarjetas

---

## 📱 **Responsive Behavior**

### **Swiper:**
- **Mobile**: 2 logos por vista
- **Tablet**: 4 logos por vista
- **Desktop**: 6 logos por vista
- **Large**: 8 logos por vista

### **Grid:**
- **Auto-fit**: Se ajusta automáticamente al ancho disponible
- **Min-width**: 120px por logo
- **Max-width**: 1fr (distribución equitativa)

---

## 🚀 **Ejemplos de Uso**

### **Página Principal (Swiper):**
```tsx
// src/app/page.tsx
import { SwiperClientesSection } from '@/components/ClientesSection';

export default function Home() {
  return (
    <div>
      {/* Otro contenido */}
      <SwiperClientesSection />
      {/* Más contenido */}
    </div>
  );
}
```

### **Página Ligera (Grid):**
```tsx
// src/app/ejemplo-grid/page.tsx
import { GridClientesSection } from '@/components/ClientesSection';

export default function EjemploGridPage() {
  return (
    <div>
      {/* Contenido simple */}
      <GridClientesSection />
      {/* Más contenido simple */}
    </div>
  );
}
```

### **Selector Dinámico:**
```tsx
// src/app/dinamico/page.tsx
import ClientesSection from '@/components/ClientesSection';

export default function DinamicoPage() {
  const useGrid = process.env.NODE_ENV === 'development';
  
  return (
    <div>
      <ClientesSection variant={useGrid ? 'grid' : 'swiper'} />
    </div>
  );
}
```

---

## 🎯 **Recomendaciones**

### **Usa Swiper cuando:**
- Quieres máximo impacto visual
- La página ya tiene mucho JavaScript
- Necesitas interactividad avanzada
- Es la página principal del sitio

### **Usa Grid cuando:**
- Quieres carga rápida
- La página es simple
- Prefieres simplicidad
- Es una página secundaria

---

## 🔧 **Mantenimiento**

### **Agregar/Quitar Logos:**
Edita el array `logos` en ambos componentes:
```tsx
const logos: { src: string; alt: string }[] = [
  { src: '/clientes/nuevo-logo.png', alt: 'Nueva Empresa' },
  // ... otros logos
];
```

### **Cambiar Estilos:**
- **Colores**: Modifica las variables CSS en `src/styles/theme.css`
- **Espaciado**: Ajusta `gap-4` en Grid o `spaceBetween` en Swiper
- **Bordes**: Cambia `border-[#E5E7EB]` en Grid

---

## ✅ **Estado Actual**

- ✅ **SwiperClientesSection**: Completamente implementado
- ✅ **GridClientesSection**: Completamente implementado  
- ✅ **ClientesSection**: Componente unificado creado
- ✅ **Documentación**: Completa
- ✅ **Ejemplos**: Página de ejemplo creada
- ✅ **Linting**: Sin errores
- ✅ **Responsive**: Funciona en todos los dispositivos
- ✅ **Accesibilidad**: Implementada en ambas variantes



