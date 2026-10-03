import React from 'react';
import { motion } from 'framer-motion';

interface FadeInViewProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export const FadeInView: React.FC<FadeInViewProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  y = 30,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.001, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as const, // Vexoo smooth ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
