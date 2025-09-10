'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Componente para las líneas matemáticas animadas
function MathematicalLines() {
  const meshRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
    if (linesRef.current) {
      linesRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  // Crear líneas matemáticas complejas
  const createMathematicalCurve = (t: number, amplitude: number, frequency: number) => {
    const points = [];
    for (let i = 0; i <= 100; i++) {
      const x = (i / 100) * 20 - 10;
      const y = amplitude * Math.sin(frequency * x + t) * Math.cos(x * 0.5);
      const z = amplitude * Math.cos(frequency * x + t) * Math.sin(x * 0.3);
      points.push(new THREE.Vector3(x, y, z));
    }
    return points;
  };

  return (
    <group ref={meshRef}>
      {/* Líneas principales */}
      <group ref={linesRef}>
        {Array.from({ length: 8 }, (_, i) => {
          const points = createMathematicalCurve(i * 0.5, 2 + i * 0.3, 1 + i * 0.2);
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          return (
            <line key={i} geometry={geometry}>
              <lineBasicMaterial 
                color={new THREE.Color().setHSL(0.6 + i * 0.05, 0.8, 0.6 + i * 0.1)} 
                transparent 
                opacity={0.6 - i * 0.05}
                linewidth={2}
              />
            </line>
          );
        })}
      </group>

      {/* Líneas secundarias más finas */}
      {Array.from({ length: 20 }, (_, i) => {
        const points = createMathematicalCurve(i * 0.2, 1 + i * 0.1, 2 + i * 0.1);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={`secondary-${i}`} geometry={geometry}>
            <lineBasicMaterial 
              color={new THREE.Color().setHSL(0.55 + i * 0.02, 0.6, 0.5 + i * 0.02)} 
              transparent 
              opacity={0.3 - i * 0.01}
              linewidth={1}
            />
          </line>
        );
      })}

      {/* Partículas flotantes */}
      {Array.from({ length: 50 }, (_, i) => (
        <mesh key={`particle-${i}`} position={[
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial 
            color={new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.8, 0.7)} 
            transparent 
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

// Componente principal del fondo abstracto
export default function AbstractBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradiente de fondo CSS */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
      
      {/* Canvas 3D para las líneas matemáticas */}
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ background: 'transparent' }}
        className="absolute inset-0"
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} />
        <MathematicalLines />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>

      {/* Overlay con gradiente adicional */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-blue-900/60" />
      
      {/* Patrón de líneas SVG adicionales */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Líneas onduladas */}
          {Array.from({ length: 15 }, (_, i) => (
            <path
              key={i}
              d={`M 0,${i * 60} Q 250,${i * 60 + 50} 500,${i * 60} T 1000,${i * 60}`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              opacity={0.6 - i * 0.03}
            />
          ))}
          
          {/* Líneas verticales */}
          {Array.from({ length: 20 }, (_, i) => (
            <line
              key={`vertical-${i}`}
              x1={i * 50}
              y1="0"
              x2={i * 50 + Math.sin(i) * 20}
              y2="1000"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              opacity={0.3 - i * 0.01}
            />
          ))}
        </svg>
      </div>

      {/* Efectos de brillo adicionales */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
    </div>
  );
}
