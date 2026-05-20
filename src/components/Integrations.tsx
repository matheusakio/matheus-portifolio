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

        <motion.div variants={stagger} className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {integrations.map((integration) => {
            const Icon = integration.icon;
            return (
              <motion.article
                key={integration.name}
                variants={fadeUp}
                whileHover={{ y: -7 }}
                className="rounded-3xl border border-white/10 bg-slate-900/55 p-4 text-center shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-sky-400/40 sm:p-5"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/20 to-violet-500/20 sm:mb-5 sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6 text-sky-300 sm:h-7 sm:w-7" />
                </div>
                <h3 className="text-base font-black text-white sm:text-lg">{integration.name}</h3>
                <p className="mt-2 min-h-[48px] text-xs leading-5 text-slate-400 sm:mt-3 sm:min-h-[60px] sm:text-sm sm:leading-6">{integration.description}</p>
                <div className="mt-3 flex flex-wrap justify-center gap-1.5 sm:mt-4 sm:gap-2">
                  {integration.badges.map((badge) => (
                    <span key={badge} className="rounded-full border border-sky-400/20 bg-sky-400/10 px-2 py-0.5 text-[10px] font-semibold text-sky-300 sm:px-2.5 sm:py-1 sm:text-[11px]">
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
