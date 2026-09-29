import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Section3DWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const Section3DWrapper: React.FC<Section3DWrapperProps> = ({ children, id, className = '' }) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
};
