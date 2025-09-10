'use client';

import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    // Opcional: callback cuando las partículas están cargadas
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradiente de fondo profesional */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
      
      {/* Partículas animadas */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 3,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#3b82f6", "#60a5fa", "#93c5fd", "#dbeafe"],
            },
            links: {
              color: "#3b82f6",
              distance: 120,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 60,
            },
            opacity: {
              value: 0.7,
              random: {
                enable: true,
                minimumValue: 0.4,
              },
              animation: {
                enable: true,
                speed: 0.8,
                minimumValue: 0.2,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
              random: {
                enable: true,
                minimumValue: 1,
              },
              animation: {
                enable: true,
                speed: 1.5,
                minimumValue: 0.5,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
      
      {/* Overlay con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-blue-900/20" />
      
      {/* Efectos de iluminación profesional */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
    </div>
  );
}
