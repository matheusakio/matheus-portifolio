'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projects, Project } from '@/src/data/projects';
import { Smartphone, Globe, Wallet, Users } from 'lucide-react';

import { Section } from './Section';
import { ProjectLogo } from './ProjectLogo';
import { fadeUp, stagger } from './motion';

const typeIcons = {
  mobile: Smartphone,
  web: Globe,
  web3: Wallet,
};

const typeLabels = {
  mobile: 'Mobile',
  web: 'Web',
  web3: 'Web3',
};

export const FeaturedProjects: React.FC = () => {
  const featuredProjects = projects.filter((p: Project) => p.featured);

  return (
    <Section id="projects" className="bg-[#050816]">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={fadeUp}
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-fuchsia-300">
              Projetos de destaque
            </p>

            <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
              Alguns trabalhos que geraram impacto.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
              Produtos digitais para bancos, fintechs, e-commerce, educação,
              energia e Web3, com atuação em desenvolvimento, integrações e
              publicação nas lojas.
            </p>
          </div>

          <button
            onClick={() =>
              document
                .getElementById('all-projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="text-sm font-semibold text-violet-300 transition hover:text-sky-300"
          >
            Ver todos os projetos →
          </button>
        </motion.div>

        <motion.div
          variants={stagger}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {featuredProjects.map((project: Project) => {
            const Icon = typeIcons[project.type];

            return (
              <motion.article
                key={project.id}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group relative flex min-h-[540px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/55 p-7 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-sky-400/40 hover:bg-slate-900/75"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.03] via-transparent to-fuchsia-500/[0.03]" />

                {/* HEADER */}
             <div className="relative mb-8 flex min-h-[70px] items-start justify-between gap-4">
                <ProjectLogo src={project.logo} name={project.name} />

                <span className="mt-1 inline-flex shrink-0 items-center gap-1 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-bold text-sky-300">
                  <Icon size={13} />
                  {typeLabels[project.type]}
                </span>
              </div>

                {/* TITLE */}
                <div className="relative">
                  <h3 className="text-[2rem] font-black leading-tight text-white">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-violet-300">
                    {project.category}
                  </p>
                </div>

                {/* IMPACT */}
                {project.impact && (
                  <div className="relative mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-xs font-bold text-fuchsia-200">
                    <Users size={13} />
                    {project.impact}
                  </div>
                )}

                {/* DESCRIPTION */}
                <p className="relative mt-6 flex-1 text-[15px] leading-8 text-slate-400">
                  {project.description}
                </p>

                {/* TECHS */}
                <div className="relative mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {tech}
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