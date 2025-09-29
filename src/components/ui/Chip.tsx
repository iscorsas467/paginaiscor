'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ChipProps {
  children: ReactNode;
  variant?: 'brand' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
  removable?: boolean;
  onRemove?: () => void;
  onClick?: () => void;
}

export default function Chip({
  children,
  variant = 'brand',
  size = 'md',
  className = '',
  icon,
  removable = false,
  onRemove,
  onClick
}: ChipProps) {
  const variantClasses = {
    brand: 'chip-brand',
    success: 'bg-success/10 text-success border-success/20 hover:bg-success/15',
    warning: 'bg-warning/10 text-warning border-warning/20 hover:bg-warning/15',
    danger: 'bg-danger/10 text-danger border-danger/20 hover:bg-danger/15',
    info: 'bg-info/10 text-info border-info/20 hover:bg-info/15'
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const iconSizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const baseClasses = `
    inline-flex items-center gap-2
    rounded-full font-medium
    transition-all duration-200
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `.trim();

  return (
    <motion.div
      className={baseClasses}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={onClick ? { scale: 1.05 } : {}}
      whileTap={onClick ? { scale: 0.95 } : {}}
    >
      {/* Icon */}
      {icon && (
        <span className={iconSizeClasses[size]}>
          {icon}
        </span>
      )}

      {/* Content */}
      <span>{children}</span>

      {/* Remove Button */}
      {removable && onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className={`
            ml-1 p-0.5 rounded-full
            hover:bg-black/10 dark:hover:bg-white/10
            transition-colors duration-200
            ${iconSizeClasses[size]}
          `}
          aria-label="Remove chip"
        >
          <svg
            className="w-full h-full"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </motion.div>
  );
}



