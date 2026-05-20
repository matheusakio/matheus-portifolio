'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/src/data/skills';
import { Code, CreditCard, Database, Layout, Smartphone, Wallet, Wrench } from 'lucide-react';
import { Section } from './Section';
import { fadeUp, stagger } from './motion';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Mobile: Smartphone,
  Frontend: Layout,
  'Estado e arquitetura': Code,
  Backend: Database,
  Web3: Wallet,
  Pagamentos: CreditCard,
  Ferramentas: Wrench,
};

export const Skills: React.FC = () => {
  return (
    <Section id="skills" className="border-y border-white/10 bg-[#08101f]/80">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.div variants={fadeUp} className="mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-violet-300">Skills & Tecnologias</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">Stack de atuação.</h2>
        </motion.div>

        <motion.div variants={stagger} className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => {
            const Icon = categoryIcons[category.name] || Code;
            return (
              <motion.article
                key={category.name}
                variants={fadeUp}
                whileHover={{ y: -7 }}
                className="rounded-3xl border border-white/10 bg-slate-900/55 p-4 sm:p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-violet-400/40"
              >
                <div className="mb-4 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-violet-400/12 sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5 text-violet-300" />
                  </div>
                  <h3 className="text-base font-black text-white sm:text-xl">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-violet-400/20 bg-violet-400/10 px-2 py-0.5 text-xs text-violet-100 transition hover:border-sky-400/40 hover:text-sky-200 sm:px-3 sm:py-1 sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </Section>
  );
};
