'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  AcademicCapIcon,
  TrophyIcon,
  ClockIcon,
  StarIcon,
  CheckBadgeIcon,
  GlobeAltIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

export default function TrustElements() {
  const [certificationCount, setCertificationCount] = useState(0);
  const [companyCount, setCompanyCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);

  // Animated counters
  useEffect(() => {
    const animateCount = (setter: (value: number) => void, target: number, duration: number = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCount(setCertificationCount, 10247);
      animateCount(setCompanyCount, 523);
      animateCount(setStudentCount, 15680);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const trustElements = [
    {
      icon: ShieldCheckIcon,
      title: 'Certificaciones Emitidas',
      value: certificationCount.toLocaleString('en-US'),
      suffix: '+',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Empresas Atendidas',
      value: companyCount.toLocaleString('en-US'),
      suffix: '+',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: UserGroupIcon,
      title: 'Estudiantes Capacitados',
      value: studentCount.toLocaleString('en-US'),
      suffix: '+',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: TrophyIcon,
      title: 'Años de Experiencia',
      value: '18',
      suffix: '+',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', icon: CheckBadgeIcon },
    { name: 'OSHAS 18001', icon: ShieldCheckIcon },
    { name: 'ISO 14001', icon: GlobeAltIcon },
    { name: 'NTC 45001', icon: AcademicCapIcon }
  ];

  return (
    <div className="relative py-16">
      {/* Trust Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {trustElements.map((element, index) => (
          <motion.div
            key={element.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 ${element.bgColor} rounded-lg mb-4`}>
              <element.icon className={`h-6 w-6 ${element.color}`} />
            </div>
            <div className={`text-3xl font-bold ${element.color} mb-2`}>
              {element.value}{element.suffix}
            </div>
            <div className="text-sm text-gray-300 font-medium">
              {element.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-bold text-white mb-6">Certificaciones y Reconocimientos</h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <cert.icon className="h-6 w-6 text-blue-400" />
              <span className="text-white font-medium">{cert.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Professional Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center"
      >
        <div className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <ShieldCheckIcon className="h-6 w-6 text-blue-400 mr-3" />
          <span className="text-white text-lg font-medium">
            <strong>Comprometidos</strong> con la excelencia en seguridad industrial
          </span>
        </div>
      </motion.div>
    </div>
  );
}
