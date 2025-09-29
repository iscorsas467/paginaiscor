"use client";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  secondaryHref?: string;
  id?: string;
};

export default function CalloutCTA({
  id = "cotizacion",
  title = "¿Necesitas Soluciones Personalizadas?",
  subtitle = "Nuestro equipo de expertos está listo para diseñar la estrategia de seguridad perfecta para tu empresa.",
  primaryHref = "/contacto",
  secondaryHref = "#servicios",
}: Props) {
  return (
    <section id={id} className="my-10 md:my-14">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_18px_50px_rgba(0,0,0,.15)]">
          {/* Fondo gradiente */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0C1B3A] via-[#123E92] to-[#0B66FF]" />
          {/* Glows sutiles */}
          <div className="pointer-events-none absolute -top-14 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-14 -right-10 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
          {/* Noise sutil */}
          <div
            className="absolute inset-0 opacity-[.06] mix-blend-soft-light"
            style={{
              backgroundImage:
                'url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%27120%27 height=%27120%27><filter id=%27n%27><feTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%272%27 stitchTiles=%27stitch%27/></filter><rect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.25%27/></svg>")',
            }}
          />
          {/* Contenido */}
          <div
            className="relative px-6 md:px-12 py-10 md:py-14 text-center"
            aria-labelledby="cta-title"
          >
            <h2
              id="cta-title"
              className="text-white text-3xl md:text-4xl font-extrabold tracking-tight"
            >
              {title}
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-white/85">
              {subtitle}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                prefetch
                href={primaryHref}
                aria-label="Ir a contacto para solicitar cotización"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0B66FF] px-5 py-3 font-semibold text-white shadow transition
                           hover:translate-y-[1px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(11,102,255,.28)]"
              >
                <Phone className="h-5 w-5" />
                Contactar Ahora
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                prefetch
                href={secondaryHref}
                aria-label="Ver lista de servicios disponibles"
                className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-5 py-3 font-semibold text-white
                           hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



