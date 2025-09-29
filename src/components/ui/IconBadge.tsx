'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface IconBadgeProps {
  icon: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  className?: string;
  children?: ReactNode;
}

export default function IconBadge({
  icon,
  size = 'md',
  variant = 'primary',
  className = '',
  children
}: IconBadgeProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 p-1.5',
    md: 'w-10 h-10 p-2',
    lg: 'w-12 h-12 p-3',
    xl: 'w-16 h-16 p-4'
  };

  const variantClasses = {
    primary: 'bg-brand-100 text-brand-600 border border-brand-200',
    secondary: 'bg-slate-100 text-slate-600 border border-slate-200',
    success: 'bg-success-100 text-success-600 border border-success-200',
    warning: 'bg-warning-100 text-warning-600 border border-warning-200',
    danger: 'bg-danger-100 text-danger-600 border border-danger-200',
    info: 'bg-info-100 text-info-600 border border-info-200'
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  const baseClasses = `
    inline-flex items-center justify-center
    rounded-xl
    transition-all duration-200
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  return (
    <motion.div
      className={baseClasses}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className={iconSizeClasses[size]}>
        {icon}
      </div>
      {children && (
        <span className="ml-2 text-sm font-medium">
          {children}
        </span>
      )}
    </motion.div>
  );
}



