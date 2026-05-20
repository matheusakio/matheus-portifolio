'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  onClick,
  type = 'button',
  href,
  target,
  rel,
  download,
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300';

  const variants = {
    primary:
      'bg-gradient-to-r from-sky-400 to-violet-500 text-white shadow-lg shadow-sky-500/20 hover:shadow-violet-500/25',
    secondary:
      'bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white shadow-lg shadow-fuchsia-500/20',
    outline:
      'border border-white/15 bg-white/[0.03] text-slate-100 hover:border-sky-400/60 hover:bg-sky-400/10',
    ghost:
      'text-slate-300 hover:text-white hover:bg-white/5',
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} target={target || (href.startsWith('http') ? '_blank' : undefined)} rel={rel} download={download}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className="appearance-none">
      {content}
    </button>
  );
};
