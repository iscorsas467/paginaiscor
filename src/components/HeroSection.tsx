export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Fondo base con gradiente más sofisticado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0C1B3A] via-[#123E92] to-[#0A58E6]" />
      
      {/* Efectos de glow más elegantes */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-white/15 to-transparent blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-tl from-cyan-400/15 to-transparent blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-2xl" />
      
      {/* Patrón de ruido más sutil */}
      <div className="absolute inset-0 opacity-[.04] mix-blend-soft-light"
           style={{ backgroundImage:
             'url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%27120%27 height=%27120%27><filter id=%27n%27><feTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%272%27 stitchTiles=%27stitch%27/></filter><rect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.25%27/></svg>")'
           }} />

      {/* Líneas de conexión sutiles */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
          </defs>
          <path d="M0,200 Q360,100 720,200 T1440,200" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M0,600 Q360,500 720,600 T1440,600" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-28 flex flex-col justify-center min-h-screen">
        {/* Badge superior con efecto glassmorphism */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md text-white px-6 py-3 text-sm font-medium border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Líder en Seguridad Integral desde 2004
          </span>
        </div>

        {/* Título principal con efecto de brillo */}
        <div className="text-center mb-12">
          <h1 className="text-white text-7xl md:text-9xl font-extrabold tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,.6)] relative">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-pulse">
              ISCOR
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl animate-pulse"></div>
          </h1>
          <p className="text-white/90 text-2xl md:text-3xl font-medium mt-6 tracking-wide">
            Capacitación Especializada
          </p>
        </div>

        {/* Descripción con efecto de resaltado */}
        <div className="text-center mb-16 max-w-5xl mx-auto">
          <p className="text-white text-xl md:text-2xl leading-relaxed font-light">
            Protegemos vidas y optimizamos operaciones con soluciones integrales de{" "}
            <span className="relative inline-block">
              <span className="text-[#0B66FF] font-semibold bg-gradient-to-r from-[#0B66FF] to-[#3B82F6] bg-clip-text text-transparent">
                seguridad integral
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0B66FF] to-[#3B82F6] rounded-full"></div>
            </span>{" "}
            y control de riesgos.
          </p>
        </div>

        {/* Botones con efectos premium */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
          <a href="#servicios"
             className="group inline-flex items-center gap-3 rounded-2xl bg-white text-[#0C1B3A] px-8 py-4 font-semibold shadow-2xl transition-all duration-300
                        hover:translate-y-[-2px] hover:shadow-3xl hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(11,102,255,.28)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            Conocer Nuestros Servicios
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a href="/contacto"
             className="group inline-flex items-center gap-3 rounded-2xl border-2 border-white/80 text-white px-8 py-4 font-semibold backdrop-blur-sm
                        hover:bg-white hover:text-[#0C1B3A] hover:border-white transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Ver Video Corporativo
          </a>
        </div>

        {/* Estadísticas con efectos glassmorphism */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center group">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg group-hover:bg-white/15 group-hover:scale-110 transition-all duration-300">
                <svg className="w-10 h-10 text-white group-hover:text-yellow-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
            <div className="text-5xl md:text-6xl font-extrabold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">18+</div>
            <div className="text-white/80 text-base md:text-lg font-medium">Años de Experiencia</div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg group-hover:bg-white/15 group-hover:scale-110 transition-all duration-300">
                <svg className="w-10 h-10 text-white group-hover:text-blue-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 12.5V22h2v-6h2.5l2.5 6h2l-2.5-6H12v6h2v-6h2.5l2.5 6h2l-2.5-6H20v6h2z"/>
                </svg>
              </div>
            </div>
            <div className="text-5xl md:text-6xl font-extrabold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">500+</div>
            <div className="text-white/80 text-base md:text-lg font-medium">Empresas Atendidas</div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg group-hover:bg-white/15 group-hover:scale-110 transition-all duration-300">
                <svg className="w-10 h-10 text-white group-hover:text-green-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
              </div>
            </div>
            <div className="text-5xl md:text-6xl font-extrabold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">15.000+</div>
            <div className="text-white/80 text-base md:text-lg font-medium">Personas Capacitadas</div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg group-hover:bg-white/15 group-hover:scale-110 transition-all duration-300">
                <svg className="w-10 h-10 text-white group-hover:text-purple-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
            <div className="text-5xl md:text-6xl font-extrabold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">98%</div>
            <div className="text-white/80 text-base md:text-lg font-medium">Satisfacción del Cliente</div>
          </div>
        </div>
      </div>

    </section>
  );
}
