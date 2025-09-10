'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

function FloatingSphere({ position, color, size = 1, speed = 1 }: { 
  position: [number, number, number], 
  color: string, 
  size?: number,
  speed?: number 
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[size, 32, 32]}>
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.3}
        wireframe
      />
    </Sphere>
  );
}

function RotatingSphere({ position, color, size = 0.8 }: { 
  position: [number, number, number], 
  color: string, 
  size?: number 
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.6;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[size, 24, 24]}>
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.4}
        wireframe
      />
    </Sphere>
  );
}

export default function ThreeJSBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradiente de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
      
      {/* Canvas 3D con esferas */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#60a5fa" />
        <pointLight position={[0, 10, 0]} intensity={0.3} color="#93c5fd" />
        
        {/* Esferas flotantes principales */}
        <FloatingSphere position={[2, 0, -2]} color="#3b82f6" size={1.2} speed={0.8} />
        <FloatingSphere position={[-2, 1, -3]} color="#60a5fa" size={1.0} speed={1.2} />
        <FloatingSphere position={[0, -1, -4]} color="#93c5fd" size={0.8} speed={0.6} />
        
        {/* Esferas rotatorias */}
        <RotatingSphere position={[3, 2, -1]} color="#1e40af" size={0.6} />
        <RotatingSphere position={[-3, -1, -2]} color="#2563eb" size={0.7} />
        <RotatingSphere position={[1, 3, -3]} color="#3b82f6" size={0.5} />
        <RotatingSphere position={[-1, -2, -1]} color="#60a5fa" size={0.8} />
        
        {/* Esferas adicionales para más dinamismo */}
        <FloatingSphere position={[4, 0, -5]} color="#1e3a8a" size={0.9} speed={1.5} />
        <FloatingSphere position={[-4, 1, -4]} color="#1d4ed8" size={0.7} speed={0.9} />
        <FloatingSphere position={[0, 4, -6]} color="#2563eb" size={0.6} speed={1.1} />
      </Canvas>
      
      {/* Overlay con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-blue-900/30" />
      
      {/* Efectos de iluminación */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
    </div>
  );
}
