'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Apple, CreditCard, Lock, Smartphone, Watch } from 'lucide-react';
import { Section } from './Section';
import { fadeUp, stagger } from './motion';

const integrations = [
  {
    icon: Apple,
    name: 'Apple Pay',
    description: 'Integração em aplicativo bancário para pagamentos digitais e wallet.',
    badges: ['Banking', 'Wallet', 'Payments'],
  },
  {
    icon: Smartphone,
    name: 'Samsung Pay',
    description: 'Integração Samsung Pay em ambiente financeiro mobile.',
    badges: ['Banking', 'Wallet', 'Payments'],
  },
  {
    icon: CreditCard,
    name: 'Google Pay',
    description: 'Integração Google Pay para pagamentos digitais.',
    badges: ['Banking', 'Wallet', 'Payments'],
  },
  {
    icon: Watch,
    name: 'Garmin Pay',
    description: 'Pagamentos via dispositivos vestíveis.',
    badges: ['Banking', 'Wallet', 'Payments'],
  },
  {
    icon: Lock,
    name: 'Pagar.me',
    description: 'Gateway para checkout, APIs financeiras e pagamentos online.',
    badges: ['API', 'Security', 'Payments'],
  },
];

export const Integrations: React.FC = () => {
  return (
    <Section id="integrations" className="bg-[#050816]">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.div variants={fadeUp} className="mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-sky-300">Integrações financeiras</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">Pagamentos e wallets digitais.</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
            Experiência em integrações complexas com carteiras digitais, pagamentos e APIs financeiras.
          </p>
        </motion.div>

        <motion.div variants={stagger} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {integrations.map((integration) => {
            const Icon = integration.icon;
            return (
              <motion.article
                key={integration.name}
                variants={fadeUp}
                whileHover={{ y: -7 }}
                className="rounded-3xl border border-white/10 bg-slate-900/55 p-5 text-center shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-sky-400/40"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/20 to-violet-500/20">
                  <Icon className="h-7 w-7 text-sky-300" />
                </div>
                <h3 className="text-lg font-black text-white">{integration.name}</h3>
                <p className="mt-3 min-h-[66px] text-sm leading-6 text-slate-400">{integration.description}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {integration.badges.map((badge) => (
                    <span key={badge} className="rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 text-[11px] font-semibold text-sky-300">
                      {badge}
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
