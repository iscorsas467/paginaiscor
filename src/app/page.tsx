'use client';

import { 
  ShieldCheckIcon,
  UserGroupIcon,
  CheckCircleIcon,
  DocumentCheckIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  CogIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  TrophyIcon,
  StarIcon,
  PlayIcon,
  ChartBarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ExclamationTriangleIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ThreeJSBackground from '@/components/ThreeJSBackground';
import LoginModal from '@/components/LoginModal';
import MinimalHero from '@/components/MinimalHero';
import ClientesSection from '@/components/ClientesSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLogin = async (username: string, password: string): Promise<boolean> => {
    // Simulación de autenticación - en producción esto sería una llamada a la API
    if (username === 'admin' && password === 'iscor2024') {
      sessionStorage.setItem('iscor_authenticated', 'true');
      window.location.href = '/certificados';
      return true;
    }
    return false;
  };

  return (
    <div className="relative min-h-screen">
      {/* 3D Spheres Background */}
      <ThreeJSBackground />
      
      {/* Minimal Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <MinimalHero />
      </section>

      {/* Clientes Section */}
      <ClientesSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}