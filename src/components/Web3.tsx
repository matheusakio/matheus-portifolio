'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coins, Link, Shield, Wallet, Leaf, Globe } from 'lucide-react';
import { Section } from './Section';
import { fadeUp, stagger } from './motion';

export const Web3: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'kotai' | 'ambify'>('kotai');

  const features = [
    { icon: Wallet, title: 'Wallet Integration', description: 'Integração com carteiras digitais e autenticação Web3.' },
    { icon: Link, title: 'Blockchain', description: 'Desenvolvimento de aplicações descentralizadas.' },
    { icon: Shield, title: 'Smart Contracts', description: 'Implementação de contratos inteligentes.' },
    { icon: Coins, title: 'Crypto Transactions', description: 'Transações com criptomoedas seguras.' },
  ];

  const ambifyFeatures = [
    { icon: Leaf, title: 'Créditos de Carbono', description: 'Tokenização e rastreamento de créditos de carbono.' },
    { icon: Globe, title: 'Sustentabilidade', description: 'Soluções para impacto ambiental e ESG.' },
    { icon: Link, title: 'Blockchain', description: 'Rastreabilidade e transparência na cadeia de suprimentos.' },
    { icon: Shield, title: 'Tokens', description: 'Criação e gestão de tokens ambientais.' },
  ];

  return (
    <Section id="web3" className="overflow-hidden bg-[#08101f]/80">
      <div className="absolute right-[-18%] top-[10%] h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-[140px]" />
      <div className="absolute left-[20%] top-[20%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[140px]" />

      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative z-10">
        <motion.div variants={fadeUp} className="mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-orange-300">Experiência com Web3 e Cripto</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
            Soluções Web3 e Blockchain.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
            Experiência em aplicações Web3, carteiras digitais, transações com criptomoedas e soluções de sustentabilidade com blockchain.
          </p>
        </motion.div>

        {/* TABS */}
        <motion.div variants={fadeUp} className="mb-8">
          <div className="inline-flex rounded-2xl border border-white/10 bg-slate-900/50 p-1.5 backdrop-blur-xl">
            <button
              onClick={() => setActiveTab('kotai')}
              className={`relative rounded-xl px-6 py-3 text-sm font-bold transition-all sm:px-8 sm:py-3.5 sm:text-base ${
                activeTab === 'kotai'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Kotai Wallet
            </button>
            <button
              onClick={() => setActiveTab('ambify')}
              className={`relative rounded-xl px-6 py-3 text-sm font-bold transition-all sm:px-8 sm:py-3.5 sm:text-base ${
                activeTab === 'ambify'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Ambify
            </button>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <AnimatePresence mode="wait">
            {activeTab === 'kotai' ? (
              <motion.article
                key="kotai"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -7 }}
                className="rounded-3xl border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-slate-900/70 p-5 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8"
              >
                <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-400/15 sm:mb-6 sm:h-16 sm:w-16">
                  <Wallet className="h-6 w-6 text-orange-300 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-2xl font-black text-white sm:text-3xl">Kotai Wallet</h3>
                <p className="mt-2 text-xs font-bold text-orange-300 sm:text-sm">Web3 / Criptomoedas</p>
                <p className="mt-4 max-w-2xl text-xs leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-8">
                  Aplicativo mobile para transações com criptomoedas, integração com carteiras digitais e autenticação Web3.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
                  {['React Native', 'TypeScript', 'WalletConnect', 'Blockchain', 'Web3', 'Crypto'].map((tech) => (
                    <span key={tech} className="rounded-full border border-orange-400/20 bg-orange-400/10 px-2 py-0.5 text-[10px] font-semibold text-orange-200 sm:px-3 sm:py-1 sm:text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ) : (
              <motion.article
                key="ambify"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -7 }}
                className="rounded-3xl border border-green-400/20 bg-gradient-to-br from-green-500/10 to-slate-900/70 p-5 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8"
              >
                <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-400/15 sm:mb-6 sm:h-16 sm:w-16">
                  <Leaf className="h-6 w-6 text-green-300 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-2xl font-black text-white sm:text-3xl">Ambify</h3>
                <p className="mt-2 text-xs font-bold text-green-300 sm:text-sm">Sustentabilidade / Web3</p>
                <p className="mt-4 max-w-2xl text-xs leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-8">
                  Solução digital ligada à Ambipar, com foco em sustentabilidade, créditos de carbono, tokenização e rastreamento via blockchain.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
                  {['React Native', 'React', 'Blockchain', 'Web3', 'Créditos de Carbono', 'APIs REST'].map((tech) => (
                    <span key={tech} className="rounded-full border border-green-400/20 bg-green-400/10 px-2 py-0.5 text-[10px] font-semibold text-green-200 sm:px-3 sm:py-1 sm:text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            )}
          </AnimatePresence>

          <motion.div variants={stagger} className="grid gap-3 sm:gap-4 sm:grid-cols-2">
            <AnimatePresence mode="wait">
              {activeTab === 'kotai' ? (
                features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <motion.article
                      key={feature.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      variants={fadeUp}
                      whileHover={{ y: -7 }}
                      className="rounded-3xl border border-white/10 bg-slate-900/55 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-orange-400/40 sm:p-6"
                    >
                      <Icon className="mb-4 h-6 w-6 text-orange-300 sm:mb-5 sm:h-7 sm:w-7" />
                      <h4 className="text-base font-black text-white sm:text-lg">{feature.title}</h4>
                      <p className="mt-2 text-xs leading-5 text-slate-400 sm:mt-3 sm:text-sm sm:leading-6">{feature.description}</p>
                    </motion.article>
                  );
                })
              ) : (
                ambifyFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <motion.article
                      key={feature.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      variants={fadeUp}
                      whileHover={{ y: -7 }}
                      className="rounded-3xl border border-white/10 bg-slate-900/55 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-green-400/40 sm:p-6"
                    >
                      <Icon className="mb-4 h-6 w-6 text-green-300 sm:mb-5 sm:h-7 sm:w-7" />
                      <h4 className="text-base font-black text-white sm:text-lg">{feature.title}</h4>
                      <p className="mt-2 text-xs leading-5 text-slate-400 sm:mt-3 sm:text-sm sm:leading-6">{feature.description}</p>
                    </motion.article>
                  );
                })
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};
