'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  CreditCard,
  Globe2,
  Rocket,
  Store,
  Trophy,
} from 'lucide-react';

const mainHighlights = [
  {
    icon: Trophy,
    eyebrow: 'Impacto em escala',
    title: '+4.5M downloads',
    description:
      'Aplicações mobile desenvolvidas e evoluídas com mais de 4,5 milhões de downloads somados nas lojas App Store e Google Play.',
    badge: 'App Store • Google Play',
    gradient:
      'from-fuchsia-500/20 via-violet-500/15 to-sky-500/10',
    border: 'border-fuchsia-400/30',
  },
  {
    icon: Globe2,
    eyebrow: 'Carreira',
    title: 'Maior tech da América Latina',
    description:
      'Atuação como engenheiro de software na SONDA, uma das maiores empresas de tecnologia da América Latina, em projetos financeiros de alta complexidade.',
    badge: 'SONDA • Banking • Mobile',
    gradient:
      'from-sky-500/20 via-violet-500/15 to-fuchsia-500/10',
    border: 'border-sky-400/30',
  },
];

const secondaryHighlights = [
  {
    icon: Rocket,
    title: '16 apps publicados',
    description:
      'Experiência em desenvolvimento, manutenção, evolução e publicação de aplicativos mobile em produção.',
  },
  {
    icon: CreditCard,
    title: 'Integrações financeiras',
    description:
      'Apple Pay, Samsung Pay, Google Pay, Garmin Pay, Pagar.me e APIs bancárias.',
  },
  {
    icon: Store,
    title: 'Processo de loja',
    description:
      'Experiência com App Store Connect, Google Play Console, releases, builds e publicação.',
  },
  {
    icon: Building2,
    title: 'Setores diversos',
    description:
      'Atuação em bancos, fintechs, e-commerce, educação, varejo, energia e Web3.',
  },
];

export const CareerHighlights: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#050816] py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-fuchsia-300">
            Destaques
          </p>

          <h2 className="max-w-4xl text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
            Destaques de carreira.
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
            Números, integrações e experiências que reforçam minha atuação em produtos digitais de alto impacto.
          </p>
        </motion.div>

        {/* CARDS PRINCIPAIS */}
        <div className="grid gap-5 lg:grid-cols-2">
          {mainHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className={`relative overflow-hidden rounded-[2rem] border ${item.border} bg-gradient-to-br ${item.gradient} p-7 shadow-2xl shadow-black/20 backdrop-blur-xl`}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10">
                      <Icon size={26} />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                      {item.eyebrow}
                    </span>
                  </div>

                  <h3 className="text-3xl font-black tracking-[-0.04em] text-white md:text-[2.2rem]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-[15px]">
                    {item.description}
                  </p>

                  <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-[11px] font-bold text-white/90">
                    {item.badge}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CARDS SECUNDÁRIOS */}
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {secondaryHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: 0.15 + index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className="rounded-3xl border border-white/10 bg-slate-900/55 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-sky-400/35 hover:bg-slate-900/75"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};