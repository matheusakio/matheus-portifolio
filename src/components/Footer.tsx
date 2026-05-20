'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050816] py-6 sm:py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-center text-xs text-slate-500 sm:px-6 sm:text-sm md:flex-row lg:px-8">
        <p>Desenvolvido com Next.js, React, TypeScript e Tailwind CSS.</p>
        <p>© {new Date().getFullYear()} Matheus Akio. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
