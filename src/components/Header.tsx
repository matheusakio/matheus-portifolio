'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

const navItems = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#about' },
  { name: 'Experiência', href: '#experience' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Integrações', href: '#integrations' },
  { name: 'Web3', href: '#web3' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contato', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/10 bg-[#050816]/78 shadow-lg shadow-black/25 backdrop-blur-2xl'
          : 'bg-[#050816]/35 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        <button onClick={() => goTo('#hero')} className="text-left text-lg font-black tracking-tight">
          <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">
            Akio Tech
          </span>
        </button>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => goTo(item.href)}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-sky-300"
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button variant="outline" onClick={() => goTo('#contact')} className="px-4 py-2">
            Entrar em contato
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 lg:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-[#050816]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-1 px-6 py-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => goTo(item.href)}
                  className="rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-sky-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
