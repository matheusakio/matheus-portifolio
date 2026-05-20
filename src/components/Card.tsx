'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -7, scale: 1.01 } : undefined}
      transition={{ duration: 0.22 }}
      className={`rounded-2xl border border-white/10 bg-slate-900/55 shadow-2xl shadow-black/20 backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.div>
  );
};
