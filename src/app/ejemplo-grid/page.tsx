'use client';

import { GridClientesSection } from '@/components/ClientesSection';
import { SectionTitle } from '@/components/ui';

/**
 * Página de ejemplo usando la variante Grid
 * Ideal para páginas con poco contenido JavaScript
 */
export default function EjemploGridPage() {
  return (
    <div className="min-h-screen">
      {/* Hero simple */}
      <section className="py-16 bg-gradient-to-br from-bg via-surface to-card text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionTitle
            title="Página con Grid de Clientes"
            subtitle="Variante ligera para páginas con poco contenido JavaScript"
            size="lg"
            className="text-white"
          />
        </div>
      </section>

      {/* Sección de clientes con Grid */}
      <GridClientesSection />

      {/* Contenido adicional simple */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionTitle
            title="Contenido Adicional"
            subtitle="Esta página usa la variante Grid que es más ligera y no requiere JavaScript pesado"
            size="md"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-semibold text-ink mb-4">Ligera</h3>
              <p className="text-muted">
                Sin dependencias pesadas de JavaScript, carga más rápida.
              </p>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-semibold text-ink mb-4">Responsive</h3>
              <p className="text-muted">
                Grid auto-fit que se adapta automáticamente al tamaño de pantalla.
              </p>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-semibold text-ink mb-4">Accesible</h3>
              <p className="text-muted">
                Navegación por teclado y estados de focus apropiados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

