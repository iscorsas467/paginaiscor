'use client';

import ModernSafetyHealthCards from '@/components/ModernSafetyHealthCards';

export default function ServiciosSSTPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-white/10 text-white px-4 py-2 text-sm font-medium mb-6">
              Seguridad y Salud en el Trabajo
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Servicios Especializados en SST
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Soluciones integrales para la protección de trabajadores y el cumplimiento de normativas de seguridad y salud ocupacional
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ModernSafetyHealthCards />
    </div>
  );
}

