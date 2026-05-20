'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Link, Shield, Wallet } from 'lucide-react';
import { Section } from './Section';
import { fadeUp, stagger } from './motion';

export const Web3: React.FC = () => {
  const features = [
    { icon: Wallet, title: 'Wallet Integration', description: 'Integração com carteiras digitais e autenticação Web3.' },
    { icon: Link, title: 'Blockchain', description: 'Desenvolvimento de aplicações descentralizadas.' },
    { icon: Shield, title: 'Smart Contracts', description: 'Implementação de contratos inteligentes.' },
    { icon: Coins, title: 'Crypto Transactions', description: 'Transações com criptomoedas seguras.' },
  ];

  return (
    <Section id="web3" className="overflow-hidden bg-[#08101f]/80">
      <div className="absolute right-[-18%] top-[10%] h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-[140px]" />
      <div className="absolute left-[20%] top-[20%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[140px]" />

      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative z-10">
        <motion.div variants={fadeUp} className="mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-orange-300">Experiência com Web3 e Cripto</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
            Kotai Wallet e soluções blockchain.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
            Também possuo experiência com aplicações Web3, carteiras digitais e transações com criptomoedas.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -7 }}
            className="rounded-3xl border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-slate-900/70 p-8 shadow-2xl shadow-black/25 backdrop-blur-xl"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-400/15">
              <Wallet className="h-8 w-8 text-orange-300" />
            </div>
            <h3 className="text-3xl font-black text-white">Kotai Wallet</h3>
            <p className="mt-2 text-sm font-bold text-orange-300">Web3 / Criptomoedas</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Aplicativo mobile para transações com criptomoedas, integração com carteiras digitais e autenticação Web3.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['React Native', 'TypeScript', 'WalletConnect', 'Blockchain', 'Web3', 'Crypto'].map((tech) => (
                <span key={tech} className="rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-200">
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>

          <motion.div variants={stagger} className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  variants={fadeUp}
                  whileHover={{ y: -7 }}
                  className="rounded-3xl border border-white/10 bg-slate-900/55 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-orange-400/40"
                >
                  <Icon className="mb-5 h-7 w-7 text-orange-300" />
                  <h4 className="text-lg font-black text-white">{feature.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{feature.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};
