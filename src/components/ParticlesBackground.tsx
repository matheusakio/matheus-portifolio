'use client';

import React from 'react';

export const ParticlesBackground: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute left-[-12%] top-[8%] h-[480px] w-[480px] rounded-full bg-sky-500/16 blur-[140px]" />
      <div className="absolute right-[-8%] top-[12%] h-[560px] w-[560px] rounded-full bg-violet-600/18 blur-[150px]" />
      <div className="absolute bottom-[10%] left-[32%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[140px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_0%,#050816_76%)]" />
    </div>
  );
};
