'use client';

import { useEffect, useRef } from 'react';

export default function ProfessionalBlueBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Función para crear ondas suaves y profesionales
    const drawWave = (time: number, amplitude: number, frequency: number, color: string, opacity: number, yOffset: number = 0) => {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.globalAlpha = opacity;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      
      for (let x = 0; x < canvas.width; x += 2) {
        const waveY = canvas.height * 0.5 + yOffset + amplitude * Math.sin((x * frequency + time * 0.0005) * 0.01);
        if (x === 0) {
          ctx.moveTo(x, waveY);
        } else {
          ctx.lineTo(x, waveY);
        }
      }
      ctx.stroke();
    };

    // Función para crear partículas elegantes
    const drawParticles = (time: number) => {
      for (let i = 0; i < 15; i++) {
        const x = (time * 0.0001 + i * 200) % canvas.width;
        const y = canvas.height * 0.3 + Math.sin(time * 0.0008 + i) * 100;
        const size = 1 + Math.sin(time * 0.001 + i) * 0.5;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + Math.sin(time * 0.002 + i) * 0.1})`;
        ctx.fill();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now();
      
      // Ondas azules profesionales
      drawWave(time, 60, 0.02, '#1e40af', 0.4, -50);
      drawWave(time * 0.8, 40, 0.03, '#3b82f6', 0.3, 0);
      drawWave(time * 1.2, 80, 0.015, '#1e3a8a', 0.2, 50);
      
      // Partículas elegantes
      drawParticles(time);
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradiente de fondo profesional azul */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
      
      {/* Canvas para ondas animadas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
        style={{ background: 'transparent' }}
      />
      
      {/* Patrón geométrico sutil */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
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
