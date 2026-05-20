'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projects, Project } from '@/src/data/projects';
import { Smartphone, Globe, Wallet, Users, BookOpen, GraduationCap } from 'lucide-react';

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
    <Section id="projects" className="bg-[#050816] relative z-10">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
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
          className="grid gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3 overflow-visible"
        >
          {featuredProjects.map((project: Project) => {
            const Icon = typeIcons[project.type];
            const isMedGrupo = project.id === 'medsoft';

            return (
              <motion.article
                key={project.id}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group relative flex min-h-[400px] sm:min-h-[450px] min-h-[350px] sm:min-h-[540px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/55 p-5 sm:p-7 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-sky-400/40 hover:bg-slate-900/75"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.03] via-transparent to-fuchsia-500/[0.03]" />

                {/* HEADER */}
             <div className="relative mb-6 flex min-h-[80px] sm:min-h-[90px] sm:mb-8 items-start justify-between gap-3 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <ProjectLogo src={project.logo} name={project.name} />
                </div>

                <span className="mt-1 inline-flex shrink-0 items-center gap-1 rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-0.5 text-[10px] font-bold text-sky-300 sm:px-3 sm:py-1 sm:text-xs">
                  <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">{typeLabels[project.type]}</span>
                  <span className="sm:hidden">{project.type}</span>
                </span>
              </div>

                {/* TITLE */}
                <div className="relative">
                  <h3 className="text-xl font-black leading-tight text-white sm:text-[2rem]">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-xs font-semibold text-violet-300 sm:text-sm">
                    {project.category}
                  </p>
                </div>

                {/* MEDGRUPO - DESIGN MELHORADO */}
                {isMedGrupo && (
                  <div className="relative mt-4 sm:mt-5 space-y-4">
                    <p className="text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
                      Ecossistema de soluções digitais educacionais para área médica, com foco em performance, conteúdo e usabilidade mobile.
                    </p>
                    
                    <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 to-purple-500/10 p-3 sm:p-4 backdrop-blur-sm transition"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-400/20 sm:h-10 sm:w-10">
                            <GraduationCap className="h-4 w-4 text-violet-300 sm:h-5 sm:w-5" />
                          </div>
                          <h4 className="text-sm font-black text-white sm:text-base">MedSoft</h4>
                        </div>
                        <p className="text-[10px] leading-4 text-slate-400 sm:text-xs">
                          Solução educacional para estudantes e profissionais da área médica.
                        </p>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-500/10 to-violet-500/10 p-3 sm:p-4 backdrop-blur-sm transition"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-400/20 sm:h-10 sm:w-10">
                            <BookOpen className="h-4 w-4 text-purple-300 sm:h-5 sm:w-5" />
                          </div>
                          <h4 className="text-sm font-black text-white sm:text-base">MedMe</h4>
                        </div>
                        <p className="text-[10px] leading-4 text-slate-400 sm:text-xs">
                          Aplicação educacional para jornada médica e funcionalidades para alunos.
                        </p>
                      </motion.div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/20 bg-violet-400/10 px-2.5 py-0.5 text-[10px] font-bold text-violet-200 sm:px-3 sm:py-1 sm:text-xs">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                      40 mil assinantes ativos
                    </div>
                  </div>
                )}

                {/* IMPACT */}
                {project.impact && !isMedGrupo && (
                  <div className="relative mt-4 sm:mt-5 inline-flex w-fit items-center gap-1.5 sm:gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-2.5 py-0.5 text-[10px] font-bold text-fuchsia-200 sm:px-3 sm:py-1 sm:text-xs">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                    {project.impact}
                  </div>
                )}

                {/* DESCRIPTION (NÃO MEDGRUPO) */}
                {!isMedGrupo && (
                  <p className="relative mt-4 flex-1 text-xs leading-6 text-slate-400 sm:mt-6 sm:text-[15px] sm:leading-8">
                    {project.description}
                  </p>
                )}

                {/* TECHS */}
                <div className="relative mt-5 flex flex-wrap gap-1.5 sm:mt-8 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] font-medium text-slate-300 sm:px-3 sm:py-1.5 sm:text-xs"
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