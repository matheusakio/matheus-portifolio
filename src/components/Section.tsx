'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from './motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={`relative py-20 md:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">{children}</div>
    </motion.section>
  );
};
