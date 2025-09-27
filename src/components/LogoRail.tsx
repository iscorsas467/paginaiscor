"use client";
import Image from "next/image";

type Logo = { src: string; alt: string; width?: number; height?: number };

export default function LogoRail({ logos }: { logos: Logo[] }) {
  // duplica para scroll continuo
  const strip = [...logos, ...logos];
  return (
    <div>
      <div className="text-center mb-12">
        <div className="inline-flex items-center rounded-full bg-gray-50 text-gray-700 px-3 py-1 text-xs md:text-sm mb-4">
          Clientes
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-3">
          Empresas que confían en ISCOR
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Más de 500 empresas líderes han elegido nuestros servicios para proteger sus operaciones y optimizar su gestión de riesgos
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Fades laterales mejorados */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Contenedor con padding para mejor visualización */}
        <div className="py-8">
          <ul className="flex gap-12 md:gap-16 w-max animate-[rail_40s_linear_infinite] hover:[animation-play-state:paused]">
            {strip.map((l, i) => (
              <li key={i} className="shrink-0 grid place-items-center group">
                <div className="relative p-4 rounded-2xl bg-white shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                  <Image
                    src={l.src}
                    alt={l.alt}
                    width={l.width ?? 160}
                    height={l.height ?? 48}
                    className="h-12 md:h-14 w-auto object-contain opacity-60 grayscale transition-all duration-300
                               group-hover:opacity-100 group-hover:grayscale-0"
                    loading="lazy"
                    sizes="(max-width: 768px) 33vw, (max-width: 1024px) 16vw, 160px"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
