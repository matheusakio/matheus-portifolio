'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Smartphone, TrendingUp, Globe2, Rocket } from 'lucide-react';
import { Button } from './Button';
import { fadeUp, stagger } from './motion';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const stats = [
    { icon: TrendingUp, value: '+5 anos', label: 'de experiência' },
    { icon: Download, value: '+4.5M', label: 'downloads em apps das lojas' },
    { icon: Smartphone, value: '16', label: 'apps desenvolvidos para as lojas' },
    { icon: Globe2, value: '8', label: 'sites desenvolvidos' },
  ];

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-[72px]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute left-[-8%] top-[18%] h-[460px] w-[460px] rounded-full bg-sky-500/18 blur-[140px]" />
      <div className="absolute right-[-10%] top-[8%] h-[560px] w-[560px] rounded-full bg-violet-600/22 blur-[150px]" />
      <div className="absolute bottom-[4%] left-[20%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/12 blur-[150px]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-5xl text-center lg:text-left"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-sky-300 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.22em]"
          >
            <Rocket className="h-3 w-3 shrink-0 sm:h-4 sm:w-4" />
            <span className="leading-tight">Mobile • Front-End • Back-End • Web3</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="max-w-5xl text-5xl font-black tracking-[-0.05em] text-white md:text-7xl lg:text-8xl"
          >
            Matheus{' '}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">
              Akio
            </span>
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mt-5 text-2xl font-bold tracking-tight text-slate-100 md:text-4xl"
          >
            Engenheiro de Software Mobile, Front-End, Back-End e Web3
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg lg:mx-0"
          >
            Desenvolvedor com mais de 5 anos de experiência criando aplicações mobile e web escaláveis para bancos,
            fintechs, e-commerce, educação, petróleo, startups e soluções Web3.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-400 md:text-base lg:mx-0"
          >
            Experiência em integrações financeiras complexas, incluindo Apple Pay, Samsung Pay, Google Pay, Garmin Pay
            e Pagar.me.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mx-auto mt-6 max-w-3xl lg:mx-0"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 rounded-2xl border border-sky-400/30 bg-gradient-to-r from-sky-400/10 to-violet-400/10 px-4 py-3 sm:px-6 sm:py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-violet-400 sm:h-12 sm:w-12">
                <Globe2 className="h-5 w-5 text-white sm:h-6 sm:w-6" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-sky-300 sm:text-sm">Carreira em destaque</p>
                <p className="text-sm font-bold text-white sm:text-lg">
                  Atualmente na <span className="text-sky-300">SONDA</span> - MAIOR tech da América Latina
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4 lg:justify-start"
          >
            <Button onClick={() => scrollTo('projects')}>
              Ver projetos <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="secondary" href="/pdf/cv-matheus.pdf" download={true}>
              <Download className="h-4 w-4 sm:h-5 sm:w-5" /> Baixar currículo
            </Button>
            <Button variant="outline" onClick={() => scrollTo('contact')}>
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" /> Entrar em contato
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 sm:mt-12 md:grid-cols-4"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/10 bg-slate-900/55 p-3 sm:p-5 text-left shadow-2xl shadow-black/20 backdrop-blur-xl"
                >
                  <Icon className="mb-3 h-4 w-4 text-sky-300 sm:mb-4 sm:h-5 sm:w-5" />
                  <div className="text-xl font-black text-white sm:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-xs text-slate-400 sm:mt-1 sm:text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
