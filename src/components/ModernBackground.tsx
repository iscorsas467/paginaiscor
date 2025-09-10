'use client';

import { useEffect, useRef } from 'react';

export default function ModernBackground() {
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

    // Función para crear ondas fluidas dinámicas
    const drawFluidWave = (time: number, amplitude: number, frequency: number, color: string, opacity: number, thickness: number = 1) => {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.globalAlpha = opacity;
      ctx.lineWidth = thickness;
      ctx.lineCap = 'round';
      
      for (let x = 0; x < canvas.width; x += 2) {
        const waveY = canvas.height * 0.5 + amplitude * Math.sin((x * frequency + time * 0.001) * 0.01) * Math.cos((x * 0.005 + time * 0.0005));
        if (x === 0) {
          ctx.moveTo(x, waveY);
        } else {
          ctx.lineTo(x, waveY);
        }
      }
      ctx.stroke();
    };

    // Función para crear líneas blancas elegantes
    const drawElegantLine = (startX: number, startY: number, endX: number, endY: number, color: string, opacity: number, thickness: number = 1) => {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.globalAlpha = opacity;
      ctx.lineWidth = thickness;
      ctx.lineCap = 'round';
      
      // Crear una curva elegante usando bezier curves
      const controlX1 = startX + (endX - startX) * 0.3;
      const controlY1 = startY + Math.sin(Date.now() * 0.001) * 50;
      const controlX2 = startX + (endX - startX) * 0.7;
      const controlY2 = endY + Math.cos(Date.now() * 0.001) * 50;
      
      ctx.moveTo(startX, startY);
      ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
      ctx.stroke();
    };

    // Función para crear partículas sutiles
    const drawParticles = () => {
      for (let i = 0; i < 20; i++) {
        const x = (Date.now() * 0.00005 + i * 150) % canvas.width;
        const y = canvas.height * 0.3 + Math.sin(Date.now() * 0.0008 + i) * 200;
        const size = 0.5 + Math.sin(Date.now() * 0.001 + i) * 0.3;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.2 + Math.sin(Date.now() * 0.002 + i) * 0.1})`;
        ctx.fill();
      }
      
      // Partículas azules más grandes y sutiles
      for (let i = 0; i < 8; i++) {
        const x = (Date.now() * 0.00003 + i * 300) % canvas.width;
        const y = canvas.height * 0.6 + Math.cos(Date.now() * 0.0005 + i) * 150;
        const size = 1.5 + Math.cos(Date.now() * 0.0008 + i) * 0.5;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(10, 176, 255, ${0.15 + Math.cos(Date.now() * 0.001 + i) * 0.08})`;
        ctx.fill();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now();
      
      // Ondas fluidas azules dinámicas
      drawFluidWave(time, 80, 0.02, '#0ab0ff', 0.4, 2);
      drawFluidWave(time * 0.8, 60, 0.03, '#1a3a5c', 0.3, 1.5);
      drawFluidWave(time * 1.2, 100, 0.015, '#0b1e3f', 0.2, 1);
      
      // Líneas blancas elegantes y fluidas
      drawElegantLine(
        canvas.width * 0.85, canvas.height * 0.1,
        canvas.width * 0.65, canvas.height * 0.4,
        '#ffffff', 0.7, 2.5
      );
      
      drawElegantLine(
        canvas.width * 0.8, canvas.height * 0.15,
        canvas.width * 0.6, canvas.height * 0.45,
        '#ffffff', 0.5, 1.5
      );
      
      drawElegantLine(
        canvas.width * 0.75, canvas.height * 0.2,
        canvas.width * 0.55, canvas.height * 0.5,
        '#ffffff', 0.4, 1
      );
      
      // Líneas horizontales fluidas
      for (let i = 0; i < 3; i++) {
        const y = canvas.height * (0.3 + i * 0.2);
        const startX = canvas.width * 0.1;
        const endX = canvas.width * 0.9;
        const opacity = 0.6 - i * 0.15;
        
        drawElegantLine(startX, y, endX, y, '#ffffff', opacity, 1.5 - i * 0.3);
      }
      
      // Dibujar partículas sutiles
      drawParticles();
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradiente de fondo principal - Deep Navy to Azure */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1e3f] via-[#1a3a5c] to-[#0ab0ff]" />
      
      {/* Canvas para ondas fluidas animadas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-80"
        style={{ background: 'transparent' }}
      />
      
      {/* Patrón SVG de alta resolución con ondas fluidas */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* Gradientes para ondas azules */}
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0b1e3f" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#1a3a5c" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#0ab0ff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0ab0ff" stopOpacity="0.2" />
            </linearGradient>
            
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ab0ff" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#1a3a5c" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0b1e3f" stopOpacity="0.1" />
            </linearGradient>
            
            {/* Gradiente para líneas blancas elegantes */}
            <linearGradient id="whiteLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
            </linearGradient>
            
            {/* Filtros para efectos suaves */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Ondas fluidas principales - Capa 1 */}
          <path
            d="M 0,400 Q 480,200 960,300 Q 1440,400 1920,250 L 1920,1080 L 0,1080 Z"
            fill="url(#waveGradient1)"
            opacity="0.6"
          />
          
          {/* Ondas fluidas secundarias - Capa 2 */}
          <path
            d="M 0,600 Q 480,400 960,500 Q 1440,600 1920,450 L 1920,1080 L 0,1080 Z"
            fill="url(#waveGradient2)"
            opacity="0.4"
          />
          
          {/* Ondas fluidas terciarias - Capa 3 */}
          <path
            d="M 0,800 Q 480,600 960,700 Q 1440,800 1920,650 L 1920,1080 L 0,1080 Z"
            fill="url(#waveGradient1)"
            opacity="0.3"
          />
          
          {/* Líneas blancas elegantes y fluidas */}
          <path
            d="M 1600,100 Q 1400,300 1200,400 Q 1000,500 800,600 Q 600,700 400,800"
            stroke="url(#whiteLineGradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.7"
            filter="url(#glow)"
          />
          
          <path
            d="M 1500,150 Q 1300,350 1100,450 Q 900,550 700,650 Q 500,750 300,850"
            stroke="url(#whiteLineGradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
            filter="url(#glow)"
          />
          
          <path
            d="M 1400,200 Q 1200,400 1000,500 Q 800,600 600,700 Q 400,800 200,900"
            stroke="url(#whiteLineGradient)"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
            filter="url(#glow)"
          />
          
          {/* Líneas horizontales fluidas */}
          <path
            d="M 0,300 Q 480,280 960,300 Q 1440,320 1920,300"
            stroke="url(#whiteLineGradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
            filter="url(#glow)"
          />
          
          <path
            d="M 0,500 Q 480,480 960,500 Q 1440,520 1920,500"
            stroke="url(#whiteLineGradient)"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
            filter="url(#glow)"
          />
          
          <path
            d="M 0,700 Q 480,680 960,700 Q 1440,720 1920,700"
            stroke="url(#whiteLineGradient)"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
            filter="url(#glow)"
          />
          
          {/* Círculos sutiles para profundidad */}
          <circle cx="300" cy="200" r="40" fill="url(#waveGradient1)" opacity="0.1" />
          <circle cx="1600" cy="300" r="60" fill="url(#waveGradient2)" opacity="0.08" />
          <circle cx="800" cy="150" r="30" fill="url(#whiteLineGradient)" opacity="0.1" />
          <circle cx="1200" cy="800" r="50" fill="url(#waveGradient1)" opacity="0.06" />
        </svg>
      </div>
      
      {/* Overlay con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3f]/20 via-transparent to-[#0ab0ff]/10" />
      
      {/* Efectos de iluminación suave */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#0ab0ff]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#1a3a5c]/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#0b1e3f]/6 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
    </div>
  );
}
