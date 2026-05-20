'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Smartphone, Wallet, Zap } from 'lucide-react';
import { Section } from './Section';
import { fadeUp, stagger } from './motion';

export const About: React.FC = () => {
  const differentials = [
    {
      icon: Smartphone,
      title: 'Mobile Specialist',
      description: 'Especialista em React Native, apps escaláveis, integrações nativas e publicação nas lojas.',
      color: 'from-sky-400/25 to-violet-500/20',
      iconColor: 'text-sky-300',
    },
    {
      icon: Building2,
      title: 'Banking & Fintech',
      description: 'Experiência em apps financeiros, bancos, pagamentos digitais e integrações sensíveis.',
      color: 'from-violet-500/25 to-sky-400/15',
      iconColor: 'text-violet-300',
    },
    {
      icon: Wallet,
      title: 'Web3 & Crypto',
      description: 'Desenvolvimento de soluções Web3, wallets digitais, blockchain e transações cripto.',
      color: 'from-fuchsia-500/25 to-violet-500/15',
      iconColor: 'text-fuchsia-300',
    },
    {
      icon: Zap,
      title: 'Performance & UX',
      description: 'Foco em performance, experiência do usuário, arquitetura limpa e produto escalável.',
      color: 'from-amber-400/25 to-fuchsia-500/10',
      iconColor: 'text-amber-300',
    },
  ];

  return (
    <Section id="about" className="border-y border-white/10 bg-[#08101f]/80">
      <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col"
        >
          <motion.p variants={fadeUp} className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-fuchsia-300">
            Sobre mim
          </motion.p>

          <motion.h2 variants={fadeUp} className="max-w-xl text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
            Desenvolvedor com propósito e foco em resultado.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex-1 rounded-3xl border border-white/10 bg-slate-900/55 p-7 shadow-2xl shadow-black/20 backdrop-blur-xl"
          >
            <p className="text-base leading-8 text-slate-300">
              Sou Engenheiro de Software especializado em React Native, React, TypeScript e Next.js, com experiência
              em aplicações mobile e web para bancos, fintechs, e-commerce, educação, energia, entretenimento,
              responsabilidade social e Web3.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Atuei em produtos com milhões de usuários, integrações financeiras sensíveis, pagamentos digitais,
              carteiras virtuais, publicação em App Store e Google Play, além de experiências mobile modernas e
              escaláveis.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {differentials.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -7 }}
                className="flex min-h-[210px] flex-col rounded-2xl border border-white/10 bg-slate-900/55 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl"
              >
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}>
                  <Icon className={`h-6 w-6 ${item.iconColor}`} />
                </div>

                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
};