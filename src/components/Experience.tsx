'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/src/data/experience';
import { Building2, Calendar, Globe2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-[#0B1020] py-24 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-sky-300">
            Experiência
          </p>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
            Experiência Profissional
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-sky-400 via-violet-500 to-fuchsia-500 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-6 sm:space-y-10">
            {experiences.map((exp, index) => {
              const isSonda = exp.id === 'sonda';
              const isLeft = index % 2 === 0;

              return (
                <motion.article
                  key={exp.id}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-6 ${
                    isLeft ? '' : 'md:[&>div:first-child]:col-start-2'
                  }`}
                >
                  <div className={`pl-9 md:pl-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      className={`relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition ${
                        isSonda
                          ? 'border border-sky-400/50 bg-gradient-to-br from-sky-400/15 via-slate-900/70 to-violet-500/15'
                          : 'border border-white/10 bg-slate-900/55 hover:border-sky-400/35'
                      }`}
                    >
                      {isSonda && (
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-400/15 px-2.5 py-0.5 text-[10px] font-bold text-sky-200 sm:mb-5 sm:px-3 sm:py-1 sm:text-xs">
                          <Globe2 className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="hidden sm:inline">Maior tech da América Latina</span>
                          <span className="sm:hidden">Maior tech da LATAM</span>
                        </div>
                      )}

                      <div className="mb-4 flex items-start gap-3 sm:mb-5 sm:gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300 sm:h-12 sm:w-12">
                          <Building2 className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-black text-white sm:text-2xl">
                            {exp.company}
                          </h3>
                          <p className="mt-1 text-xs font-bold text-sky-300 sm:text-sm">
                            {exp.role}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4 flex items-center gap-2 text-xs text-slate-400 sm:mb-5 sm:text-sm">
                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span>
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>

                      <p className="text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
                        {exp.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`rounded-lg border px-2 py-0.5 text-[10px] sm:px-2.5 sm:py-1 sm:text-xs ${
                              isSonda
                                ? 'border-sky-400/25 bg-sky-400/10 text-sky-200'
                                : 'border-white/10 bg-white/[0.04] text-slate-300'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <div
                    className={`absolute left-3 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-4 border-[#0B1020] bg-gradient-to-r from-sky-400 to-violet-500 md:left-1/2 sm:left-4 sm:top-8 sm:h-4 sm:w-4 ${
                      isSonda ? 'h-4 w-4 sm:h-6 sm:w-6 shadow-lg shadow-sky-400/40' : ''
                    }`}
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};