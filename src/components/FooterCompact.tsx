"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

type Props = {
  phone?: string;
  email?: string;
  location?: string;
  nav?: { label: string; href: string }[];
};

export default function FooterCompact({
  phone = "(2) 555-0123",
  email = "info@iscorcolombia.com",
  location = "Cali, Colombia",
  nav = [
    { label: "Inicio", href: "/" },
    { label: "La Empresa", href: "/la-empresa" },
    { label: "Servicios", href: "/servicios" },
    { label: "Nuestro Equipo", href: "/equipo" },
    { label: "Contacto", href: "/contacto" },
  ],
}: Props) {
  return (
    <footer className="mt-12 bg-[#0B1220] text-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">
        {/* Fila 1: logo + tagline */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-iscor-white.svg"
              alt="ISCOR"
              width={140}
              height={36}
              priority={false}
              className="w-auto h-8"
            />
          </div>
          <p className="text-sm text-[#E5E7EB]/80 max-w-2xl">
            Líderes en seguridad integral desde 2004. Protegemos vidas y optimizamos operaciones con soluciones especializadas.
          </p>
        </div>

        {/* Fila 2: 3 columnas */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Navegación */}
          <div>
            <h4 className="text-[#E5E7EB] font-semibold mb-3">Navegación</h4>
            <ul className="space-y-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="transition hover:text-[#0B66FF] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(11,102,255,.28)] rounded-md px-1"
                    prefetch
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-[#E5E7EB] font-semibold mb-3">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#E5E7EB]/60" />
                <span>{phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#E5E7EB]/60" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-[#0B66FF] transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(11,102,255,.28)] rounded-md px-1"
                >
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#E5E7EB]/60" />
                <span>{location}</span>
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h4 className="text-[#E5E7EB] font-semibold mb-3">Redes</h4>
            <div className="flex items-center gap-3">
              <a aria-label="Facebook"
                 href="https://facebook.com"
                 target="_blank" rel="noreferrer"
                 className="inline-grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-white hover:bg-[#0B66FF] transition
                            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(11,102,255,.28)]">
                <Facebook className="h-5 w-5" />
              </a>
              <a aria-label="Instagram"
                 href="https://instagram.com"
                 target="_blank" rel="noreferrer"
                 className="inline-grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-white hover:bg-[#0B66FF] transition
                            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(11,102,255,.28)]">
                <Instagram className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn"
                 href="https://linkedin.com"
                 target="_blank" rel="noreferrer"
                 className="inline-grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-white hover:bg-[#0B66FF] transition
                            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(11,102,255,.28)]">
                <Linkedin className="h-5 w-5" />
              </a>
              <a aria-label="YouTube"
                 href="https://youtube.com"
                 target="_blank" rel="noreferrer"
                 className="inline-grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-white hover:bg-[#0B66FF] transition
                            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(11,102,255,.28)]">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barra legal */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#E5E7EB]/60">© {new Date().getFullYear()} ISCOR S.A.S. Todos los derechos reservados.</p>
          <div className="text-xs">
            <Link href="/politica-de-privacidad" className="hover:text-[#0B66FF] transition">Política de Privacidad</Link>
            <span className="mx-2 text-[#E5E7EB]/40">•</span>
            <Link href="/terminos" className="hover:text-[#0B66FF] transition">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}