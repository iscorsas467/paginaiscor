'use client';

import { motion } from 'framer-motion';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'link' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  loading = false,
  icon,
  iconPosition = 'left',
  disabled,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: `
      bg-brand-600 text-white border border-brand-600
      hover:bg-brand-700 hover:border-brand-700
      focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2
      disabled:bg-muted-3 disabled:border-muted-3 disabled:text-muted-2
    `,
    ghost: `
      bg-transparent text-brand-600 border border-transparent
      hover:bg-brand-50 hover:text-brand-700
      focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2
      disabled:text-muted-3
    `,
    link: `
      bg-transparent text-brand-600 border border-transparent
      hover:text-brand-700 hover:underline
      focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2
      disabled:text-muted-3
    `,
    outline: `
      bg-transparent text-brand-600 border border-brand-600
      hover:bg-brand-600 hover:text-white
      focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2
      disabled:border-muted-3 disabled:text-muted-3
    `,
    danger: `
      bg-danger text-white border border-danger
      hover:bg-danger-600 hover:border-danger-600
      focus:outline-none focus:ring-2 focus:ring-danger-500 focus:ring-offset-2
      disabled:bg-muted-3 disabled:border-muted-3 disabled:text-muted-2
    `
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm font-medium rounded-lg',
    md: 'px-4 py-2 text-base font-medium rounded-lg',
    lg: 'px-6 py-3 text-lg font-semibold rounded-xl',
    xl: 'px-8 py-4 text-xl font-semibold rounded-2xl'
  };

  const baseClasses = `
    inline-flex items-center justify-center
    font-medium
    transition-all duration-200
    focus:outline-none
    disabled:cursor-not-allowed
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim();

  const isDisabled = disabled || loading;

  return (
    <motion.button
      className={baseClasses}
      disabled={isDisabled}
      whileHover={!isDisabled ? { scale: 1.02 } : {}}
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
      transition={{ duration: 0.1 }}
      {...props}
    >
      {/* Loading Spinner */}
      {loading && (
        <motion.div
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      )}

      {/* Left Icon */}
      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-2">{icon}</span>
      )}

      {/* Button Text */}
      <span>{children}</span>

      {/* Right Icon */}
      {icon && iconPosition === 'right' && !loading && (
        <span className="ml-2">{icon}</span>
      )}
    </motion.button>
  );
}
