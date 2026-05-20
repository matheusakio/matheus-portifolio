'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, projectCategories, Project } from '@/src/data/projects';
import { Smartphone, Globe, Wallet } from 'lucide-react';
import { Section } from './Section';
import { fadeUp, stagger } from './motion';

const typeIcons = {
  mobile: Smartphone,
  web: Globe,
  web3: Wallet,
};

const categoryMap: Record<string, string[]> = {
  Bancos: ['Banco Público'],
  'Banco Privado': ['Banco Privado'],
  Fintechs: ['Fintechs'],
  'E-commerce': ['E-commerce'],
  Educação: ['Educação Médica', 'Educação'],
  Startups: ['Startups'],
  Web3: ['Web3'],
  Energia: ['Petróleo e Energia'],
  Entretenimento: ['Entretenimento'],
  'Responsabilidade Social': ['Responsabilidade Social'],
  Varejo: ['Varejo'],
  Alimentação: ['Alimentação'],
};

export const AllProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projects
      : projects.filter((project: Project) => categoryMap[selectedCategory]?.includes(project.category));

  return (
    <Section id="all-projects" className="border-y border-white/10 bg-[#08101f]/80">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.div variants={fadeUp} className="mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-violet-300">
            Todos os projetos
          </p>

          <h2 className="text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
            Portfólio por segmento.
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} className="mb-10 flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-2 text-xs font-bold transition ${
                selectedCategory === category
                  ? 'border-transparent bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white shadow-lg shadow-violet-500/20'
                  : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-sky-400/40 hover:text-sky-300'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => {
              const Icon = typeIcons[project.type];

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -16 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -5 }}
                  className="flex min-h-[220px] flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-xl transition hover:border-violet-400/40 hover:bg-slate-900/70"
                >
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-black text-white">{project.name}</h3>
                      <p className="mt-2 text-xs font-bold text-violet-300">{project.category}</p>
                    </div>

                    <Icon className="h-5 w-5 shrink-0 text-sky-300" />
                  </div>

                  <p className="line-clamp-3 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1 text-[11px] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}

                    {project.technologies.length > 3 && (
                      <span className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1 text-[11px] text-slate-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </Section>
  );
};