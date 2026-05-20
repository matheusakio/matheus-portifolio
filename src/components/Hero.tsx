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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-sky-300"
          >
            <Rocket size={14} />
            Mobile • Front-End • Back-End • Web3
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="max-w-5xl text-5xl font-black tracking-[-0.05em] text-white md:text-7xl lg:text-8xl"
          >
            Matheus Akio{' '}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">
              Eloy Ezaki
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
            <div className="inline-flex items-center gap-3 rounded-2xl border border-sky-400/30 bg-gradient-to-r from-sky-400/10 to-violet-400/10 px-6 py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-violet-400">
                <Globe2 className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-sky-300">Carreira em destaque</p>
                <p className="text-lg font-bold text-white">
                  Atualmente na <span className="text-sky-300">SONDA</span> - a MAIOR empresa de tecnologia da América Latina
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <Button onClick={() => scrollTo('projects')}>
              Ver projetos <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" href="/pdf/cv-matheus.pdf" download={true}>
              <Download size={18} /> Baixar currículo
            </Button>
            <Button variant="outline" onClick={() => scrollTo('contact')}>
              <Mail size={18} /> Entrar em contato
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/10 bg-slate-900/55 p-5 text-left shadow-2xl shadow-black/20 backdrop-blur-xl"
                >
                  <Icon className="mb-4 h-5 w-5 text-sky-300" />
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
