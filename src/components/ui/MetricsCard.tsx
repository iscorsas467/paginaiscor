'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Metric {
  number: string;
  label: string;
  icon?: ReactNode;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red';
}

interface MetricsCardProps {
  metrics: Metric[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function MetricsCard({ 
  metrics, 
  title, 
  subtitle, 
  className = '' 
}: MetricsCardProps) {
  const colorClasses = {
    blue: 'text-blue-600 bg-blue-100',
    green: 'text-green-600 bg-green-100',
    purple: 'text-purple-600 bg-purple-100',
    orange: 'text-orange-600 bg-orange-100',
    red: 'text-red-600 bg-red-100'
  };

  const defaultColors = ['blue', 'green', 'purple', 'orange'] as const;

  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {(title || subtitle) && (
        <div className="text-center mb-6">
          {title && (
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          )}
          {subtitle && (
            <p className="text-gray-600">{subtitle}</p>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const color = metric.color || defaultColors[index % defaultColors.length];
          
          return (
            <motion.div
              key={index}
              className="text-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {metric.icon && (
                <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${colorClasses[color]} mb-2`}>
                  {metric.icon}
                </div>
              )}
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {metric.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {metric.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

