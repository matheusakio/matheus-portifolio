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
      <div className="grid items-stretch gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col"
        >
          <motion.p variants={fadeUp} className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-fuchsia-300 sm:mb-4">
            Sobre mim
          </motion.p>

          <motion.h2 variants={fadeUp} className="max-w-xl text-3xl font-black tracking-[-0.04em] text-white md:text-4xl lg:text-5xl">
            Desenvolvedor com propósito e foco em resultado.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex-1 rounded-3xl border border-white/10 bg-slate-900/55 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:mt-8 sm:p-7"
          >
            <p className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Sou Engenheiro de Software especializado em React Native, React, TypeScript e Next.js, com experiência
              em aplicações mobile e web para bancos, fintechs, e-commerce, educação, energia, entretenimento,
              responsabilidade social e Web3.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base sm:leading-8">
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
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-3 sm:gap-4 sm:grid-cols-2"
        >
          {differentials.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -7 }}
                className="flex min-h-[180px] flex-col rounded-2xl border border-white/10 bg-slate-900/55 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:min-h-[210px] sm:p-6"
              >
                <div className={`mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} sm:mb-5 sm:h-12 sm:w-12`}>
                  <Icon className={`h-5 w-5 ${item.iconColor} sm:h-6 sm:w-6`} />
                </div>

                <h3 className="text-base font-bold text-white sm:text-lg">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-400 sm:mt-3 sm:text-sm sm:leading-6">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
};