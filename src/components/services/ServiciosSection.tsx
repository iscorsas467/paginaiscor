"use client";

import ElegantServices from "./ElegantServices";

type Cat = {
  key: "sgsst" | "capacitacion" | "consultoria" | "auditorias";
  title: string;
  subtitle?: string;
  color: "blue" | "green" | "purple" | "orange";
  items: string[];
  href: string;
  count?: number;
  order?: number;
};

export default function ServiciosSection({ data }: { data: Cat[] }) {
  return (
    <section className="py-10 md:py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales, ordenadas por categorías. Despliega para ver los servicios específicos.
          </p>
        </div>

        {/* Acordeón elegante */}
        <ElegantServices data={data} />
      </div>
    </section>
  );
}
