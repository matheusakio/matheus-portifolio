'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050816] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-center text-sm text-slate-500 md:flex-row lg:px-8">
        <p>Desenvolvido com Next.js, React, TypeScript e Tailwind CSS.</p>
        <p>© {new Date().getFullYear()} Matheus Akio Eloy Ezaki. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
