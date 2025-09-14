'use client';

import { useCallback, useEffect, useRef } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container, Engine } from '@tsparticles/engine';

export default function ProfessionalBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Particles loaded callback
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradiente de fondo principal */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1e3f] via-[#1a3a5c] to-[#0ab0ff]" />
      
      {/* Partículas con líneas blancas elegantes */}
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
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
              resize: {
                enable: true,
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 3,
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
      
      {/* Ondas fluidas SVG */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0b1e3f" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#1a3a5c" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0ab0ff" stopOpacity="0.2" />
            </linearGradient>
            
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ab0ff" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#1a3a5c" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0b1e3f" stopOpacity="0.1" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Ondas fluidas principales */}
          <path
            d="M 0,400 Q 480,200 960,300 Q 1440,400 1920,250 L 1920,1080 L 0,1080 Z"
            fill="url(#waveGradient1)"
            opacity="0.5"
          />
          
          <path
            d="M 0,600 Q 480,400 960,500 Q 1440,600 1920,450 L 1920,1080 L 0,1080 Z"
            fill="url(#waveGradient2)"
            opacity="0.3"
          />
          
          <path
            d="M 0,800 Q 480,600 960,700 Q 1440,800 1920,650 L 1920,1080 L 0,1080 Z"
            fill="url(#waveGradient1)"
            opacity="0.2"
          />
          
          {/* Líneas blancas elegantes */}
          <path
            d="M 1600,100 Q 1400,300 1200,400 Q 1000,500 800,600 Q 600,700 400,800"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
            filter="url(#glow)"
          />
          
          <path
            d="M 1500,150 Q 1300,350 1100,450 Q 900,550 700,650 Q 500,750 300,850"
            stroke="#ffffff"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
            filter="url(#glow)"
          />
          
          <path
            d="M 1400,200 Q 1200,400 1000,500 Q 800,600 600,700 Q 400,800 200,900"
            stroke="#ffffff"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
            filter="url(#glow)"
          />
          
          {/* Líneas horizontales fluidas */}
          <path
            d="M 0,300 Q 480,280 960,300 Q 1440,320 1920,300"
            stroke="#ffffff"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
            filter="url(#glow)"
          />
          
          <path
            d="M 0,500 Q 480,480 960,500 Q 1440,520 1920,500"
            stroke="#ffffff"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
            filter="url(#glow)"
          />
          
          <path
            d="M 0,700 Q 480,680 960,700 Q 1440,720 1920,700"
            stroke="#ffffff"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
            filter="url(#glow)"
          />
        </svg>
      </div>
      
      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3f]/20 via-transparent to-[#0ab0ff]/10" />
      
      {/* Efectos de iluminación */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#0ab0ff]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#1a3a5c]/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#0b1e3f]/6 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
    </div>
  );
}
