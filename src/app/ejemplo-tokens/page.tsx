'use client';

import { StandardHero } from '@/components/StandardHero';
import { SectionTitle, Card, Button, Chip } from '@/components/ui';
import { Shield, Globe, FileCheck, Building, AlertTriangle, Lightbulb } from 'lucide-react';

/**
 * Página de ejemplo mostrando todos los tokens del Prompt 0
 * Demuestra el uso de gradientes, colores, cards, chips y estados de interacción
 */
export default function EjemploTokensPage() {
  return (
    <div className="min-h-screen">
      {/* Hero con gradiente Prompt 0 */}
      <StandardHero
        title="Tokens del Prompt 0"
        subtitle="Sistema de diseño estandarizado"
        description="Demostración de todos los tokens de color, tipografía y componentes del sistema de diseño ISCOR"
        showStats={true}
        stats={[
          { number: "15+", label: "Años de experiencia" },
          { number: "500+", label: "Empresas atendidas" },
          { number: "98%", label: "Satisfacción del cliente" }
        ]}
      />

      {/* Sección de Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle
            title="Variantes de Cards"
            subtitle="Cards blancas para contenido largo, cards surface para métricas"
            size="lg"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card Blanca - Contenido Largo */}
            <Card variant="white" padding="lg" hover={true}>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Seguridad Integral</h3>
                <p className="text-muted leading-relaxed">
                  Implementamos sistemas de seguridad integral que protegen a su empresa 
                  y trabajadores, cumpliendo con todas las normativas vigentes.
                </p>
                <Button variant="ghost" size="sm" className="mt-4">
                  Conocer más
                </Button>
              </div>
            </Card>

            {/* Card Surface - Métricas */}
            <Card variant="surface" padding="lg" hover={true}>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Medio Ambiente</h3>
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <p className="text-white/80 text-sm">
                  Reducción en emisiones
                </p>
              </div>
            </Card>

            {/* Card con Chips */}
            <Card variant="white" padding="lg" hover={true}>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Calidad</h3>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Chip variant="brand" size="sm">ISO 9001</Chip>
                  <Chip variant="success" size="sm">Certificado</Chip>
                  <Chip variant="info" size="sm">Auditoría</Chip>
                </div>
                <p className="text-muted text-sm">
                  Certificaciones de calidad internacional
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección de Links y Acentos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle
            title="Links y Acentos"
            subtitle="Colores brand-600/700 para enlaces y elementos de acento"
            size="lg"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="white" padding="lg">
              <h3 className="text-xl font-semibold text-ink mb-4">Enlaces Estándar</h3>
              <div className="space-y-3">
                <p>
                  Este es un <a href="#" className="link-brand">enlace estándar</a> que usa 
                  los tokens del Prompt 0.
                </p>
                <p>
                  Los enlaces tienen <a href="#" className="text-brand-600 hover:text-brand-700">colores consistentes</a> 
                  en todo el sitio.
                </p>
                <p>
                  <a href="#" className="text-brand-600 hover:text-brand-700 underline">Enlace con subrayado</a> 
                  para mayor énfasis.
                </p>
              </div>
            </Card>

            <Card variant="white" padding="lg">
              <h3 className="text-xl font-semibold text-ink mb-4">Estados de Interacción</h3>
              <div className="space-y-4">
                <Button variant="primary" size="md">
                  Botón Primario
                </Button>
                <Button variant="ghost" size="md">
                  Botón Ghost
                </Button>
                <Button variant="outline" size="md">
                  Botón Outline
                </Button>
                <Button variant="link" size="md">
                  Botón Link
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección de Chips/Badges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle
            title="Chips y Badges"
            subtitle="Brand suave con texto ink-2 para etiquetas y categorías"
            size="lg"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="white" padding="lg">
              <h3 className="text-xl font-semibold text-ink mb-4">Chips por Categoría</h3>
              <div className="flex flex-wrap gap-3">
                <Chip variant="brand" icon={<Shield className="w-4 h-4" />}>
                  Seguridad
                </Chip>
                <Chip variant="success" icon={<Globe className="w-4 h-4" />}>
                  Medio Ambiente
                </Chip>
                <Chip variant="info" icon={<FileCheck className="w-4 h-4" />}>
                  Calidad
                </Chip>
                <Chip variant="warning" icon={<Building className="w-4 h-4" />}>
                  Seguridad Física
                </Chip>
                <Chip variant="danger" icon={<AlertTriangle className="w-4 h-4" />}>
                  Emergencias
                </Chip>
                <Chip variant="brand" icon={<Lightbulb className="w-4 h-4" />}>
                  Capacitación
                </Chip>
              </div>
            </Card>

            <Card variant="white" padding="lg">
              <h3 className="text-xl font-semibold text-ink mb-4">Tamaños de Chips</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted w-16">Small:</span>
                  <Chip variant="brand" size="sm">Pequeño</Chip>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted w-16">Medium:</span>
                  <Chip variant="brand" size="md">Mediano</Chip>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted w-16">Large:</span>
                  <Chip variant="brand" size="lg">Grande</Chip>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección de Estados de Interacción */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle
            title="Estados de Interacción"
            subtitle="Ring y variaciones de brand-700 para hover/focus/active"
            size="lg"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="white" padding="lg" className="interactive-hover interactive-focus interactive-active">
              <h3 className="text-xl font-semibold text-ink mb-3">Hover State</h3>
              <p className="text-muted">
                Esta card tiene efectos de hover con ring y sombra.
              </p>
            </Card>

            <Card variant="surface" padding="lg" className="interactive-hover interactive-focus interactive-active">
              <h3 className="text-xl font-semibold text-white mb-3">Focus State</h3>
              <p className="text-white/80">
                Esta card tiene estados de focus para accesibilidad.
              </p>
            </Card>

            <Card variant="white" padding="lg" className="ring-hover ring-focus ring-active">
              <h3 className="text-xl font-semibold text-ink mb-3">Ring States</h3>
              <p className="text-muted">
                Esta card usa las clases de ring específicas.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

