'use client';

import { useSpring, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';

export default function SpringBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const gradientAnimation = useSpring({
    from: { 
      backgroundPosition: '0% 50%',
      opacity: 0.8 
    },
    to: { 
      backgroundPosition: '100% 50%',
      opacity: 1 
    },
    config: { duration: 10000 },
    loop: { reverse: true }
  });

  const floatingElements = useSpring({
    from: { 
      transform: 'translateY(0px) rotate(0deg)',
      opacity: 0.3 
    },
    to: { 
      transform: 'translateY(-20px) rotate(360deg)',
      opacity: 0.6 
    },
    config: { duration: 8000 },
    loop: { reverse: true }
  });

  const mouseFollow = useSpring({
    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
    config: { tension: 300, friction: 30 }
  });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradiente de fondo animado */}
      <animated.div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(45deg, #0f172a, #1e3a8a, #1e40af, #3b82f6, #60a5fa, #1e3a8a, #0f172a)',
          backgroundSize: '400% 400%',
          ...gradientAnimation
        }}
      />
      
      {/* Elementos flotantes animados */}
      <animated.div 
        className="absolute inset-0"
        style={floatingElements}
      >
        {/* Círculos flotantes */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500/20"
            style={{
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
              animationDelay: `${i * 0.5}s`,
              animation: 'float 6s ease-in-out infinite'
            }}
          />
        ))}
        
        {/* Líneas elegantes */}
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={`line-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
            style={{
              width: `${200 + i * 50}px`,
              height: '2px',
              left: `${5 + i * 20}%`,
              top: `${30 + i * 15}%`,
              transform: `rotate(${15 + i * 10}deg)`,
              animationDelay: `${i * 0.8}s`,
              animation: 'pulse 4s ease-in-out infinite'
            }}
          />
        ))}
      </animated.div>

      {/* Efecto de seguimiento del mouse */}
      <animated.div 
        className="absolute inset-0 pointer-events-none"
        style={mouseFollow}
      >
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </animated.div>

      {/* Overlay con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-blue-900/20" />
      
      {/* Efectos de iluminación estáticos */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Estilos CSS para animaciones */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}
