'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ServicesAccordion from './services/ServicesAccordion';

const services = [
  {
    key: 'sgsst',
    title: 'SGSST',
    subtitle: 'Sistemas de Gestión para la Seguridad y Salud de los Trabajadores',
    color: 'blue' as const,
    items: [
      'Implementación SGSST',
      'Auditorías Internas',
      'Matriz de Riesgos',
      'Políticas de Seguridad',
      'Procedimientos de Emergencia',
      'Investigación de Accidentes',
      'Comité Paritario',
      'Programa de Salud Ocupacional'
    ],
    href: '/servicios/sgsst'
  },
  {
    key: 'capacitacion',
    title: 'Capacitación',
    subtitle: 'Cursos especializados en seguridad integral y prevención',
    color: 'green' as const,
    items: [
      'Seguridad en Alturas',
      'Espacios Confinados',
      'Primeros Auxilios',
      'Brigadas de Emergencia',
      'Manejo de Extintores',
      'Seguridad Vial',
      'Prevención de Riesgos',
      'Liderazgo en Seguridad'
    ],
    href: '/servicios/capacitacion'
  },
  {
    key: 'consultoria',
    title: 'Consultoría',
    subtitle: 'Asesoría especializada en normativas y cumplimiento',
    color: 'purple' as const,
    items: [
      'Consultoría Legal',
      'Cumplimiento Normativo',
      'Análisis de Riesgos',
      'Planes de Emergencia',
      'Certificaciones ISO',
      'Evaluación de Proveedores',
      'Gestión Ambiental',
      'Responsabilidad Social'
    ],
    href: '/servicios/consultoria'
  },
  {
    key: 'auditorias',
    title: 'Auditorías',
    subtitle: 'Evaluación y mejora de sistemas de gestión',
    color: 'orange' as const,
    items: [
      'Auditorías SGSST',
      'Auditorías de Seguridad',
      'Inspecciones Técnicas',
      'Evaluación de Contratistas',
      'Auditorías Ambientales',
      'Verificación de Cumplimiento',
      'Análisis de Desempeño',
      'Informes Ejecutivos'
    ],
    href: '/servicios/auditorias'
  }
];


export default function ServicesShowcase() {
  return (
    <section className="py-10 md:py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600">
            Soluciones integrales para la seguridad de tu empresa
          </p>
        </motion.div>

        <ServicesAccordion data={services} />

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link
            href="/servicios"
            className="inline-flex items-center px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(11,102,255,.28)]"
          >
            Ver Todos los Servicios
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}