'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children?: ReactNode;
}

export default function SectionTitle({
  title,
  eyebrow,
  subtitle,
  className = '',
  align = 'center',
  size = 'lg',
  children
}: SectionTitleProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const sizeClasses = {
    sm: {
      eyebrow: 'text-sm font-medium text-muted',
      title: 'text-3xl md:text-4xl font-bold text-ink',
      subtitle: 'text-base text-muted'
    },
    md: {
      eyebrow: 'text-sm font-medium text-muted',
      title: 'text-4xl md:text-5xl font-bold text-ink',
      subtitle: 'text-lg text-muted'
    },
    lg: {
      eyebrow: 'text-sm font-medium text-muted',
      title: 'text-5xl md:text-6xl font-bold text-ink',
      subtitle: 'text-xl text-muted'
    },
    xl: {
      eyebrow: 'text-base font-medium text-muted',
      title: 'text-6xl md:text-7xl font-bold text-ink',
      subtitle: 'text-xl md:text-2xl text-muted'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <motion.div
      className={`${alignmentClasses[align]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <motion.div
          className={`${currentSize.eyebrow} mb-4`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {eyebrow}
        </motion.div>
      )}

      {/* Title */}
      <motion.h2
        className={`${currentSize.title} mb-6 leading-tight`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          className={`${currentSize.subtitle} max-w-3xl mx-auto leading-relaxed`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Children */}
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}



