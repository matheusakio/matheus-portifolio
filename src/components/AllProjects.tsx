'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, projectCategories, Project } from '@/src/data/projects';
import { Smartphone, Globe, Wallet } from 'lucide-react';
import { Section } from './Section';

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
      <div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-violet-300">
            Todos os projetos
          </p>

          <h2 className="text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
            Portfólio por segmento.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-3 py-1.5 text-[11px] font-bold transition sm:px-4 sm:py-2 sm:text-xs ${
                  selectedCategory === category
                    ? 'border-transparent bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white shadow-lg shadow-violet-500/20'
                    : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-sky-400/40 hover:text-sky-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProjects.map((project: Project, index) => {
            const Icon = typeIcons[project.type];

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="flex min-h-[200px] flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-4 sm:p-5 backdrop-blur-xl transition hover:border-violet-400/40 hover:bg-slate-900/70"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-black text-white sm:text-xl">{project.name}</h3>
                    <p className="mt-1.5 text-[11px] font-bold text-violet-300 sm:mt-2 sm:text-xs">{project.category}</p>
                  </div>

                  <Icon className="h-5 w-5 shrink-0 text-sky-300" />
                </div>

                <p className="line-clamp-3 text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-4 sm:gap-2 sm:pt-5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] text-slate-300 sm:px-2 sm:py-1 sm:text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}

                  {project.technologies.length > 3 && (
                    <span className="rounded-lg border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] text-slate-400 sm:px-2 sm:py-1 sm:text-[11px]">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
};