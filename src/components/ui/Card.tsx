'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'surface' | 'white' | 'dark';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  variant = 'white',
  padding = 'md',
  shadow = 'md',
  className = '',
  hover = false,
  onClick
}: CardProps) {
  const variantClasses = {
    surface: 'card-surface',
    white: 'card-white',
    dark: 'bg-card border border-slate-200/10 text-white'
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const shadowClasses = {
    none: 'shadow-none',
    sm: 'shadow-brand-sm',
    md: 'shadow-brand-md',
    lg: 'shadow-brand-lg',
    xl: 'shadow-brand-xl'
  };

  const hoverClasses = hover 
    ? 'hover:shadow-brand-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer' 
    : '';

  const baseClasses = `
    rounded-2xl
    ${variantClasses[variant]}
    ${paddingClasses[padding]}
    ${shadowClasses[shadow]}
    ${hoverClasses}
    ${className}
  `.trim();

  const MotionCard = motion.div;

  return (
    <MotionCard
      className={baseClasses}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
    >
      {children}
    </MotionCard>
  );
}
