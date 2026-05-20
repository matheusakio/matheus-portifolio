'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {  Mail, MapPin, MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from './Button';
import { Section } from './Section';
import { fadeUp } from './motion';

export const Contact: React.FC = () => {
  const email = 'matheus.akio2@gmail.com';
  const whatsapp = '61985837777';

  return (
    <Section id="contact" className="bg-[#050816]">
      <motion.div variants={fadeUp} className="rounded-[1.5rem] border border-white/10 bg-slate-900/55 p-5 shadow-2xl shadow-black/25 backdrop-blur-xl sm:rounded-[2rem] sm:p-6 md:p-10">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.32em] text-fuchsia-300 sm:mb-3">Entre em contato</p>
            <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">Vamos conversar?</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:mt-4 sm:text-base sm:leading-7">
              Estou aberto a novas oportunidades, produtos digitais e colaborações em mobile, front-end, back-end, fintech e Web3.
            </p>

            <div className="mt-5 space-y-2.5 sm:mt-8 sm:space-y-3">
              <a href={`mailto:${email}`} className="flex items-center gap-2 text-xs text-slate-300 hover:text-sky-300 sm:gap-3 sm:text-sm">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" /> {email}
              </a>
              <a href={`https://wa.me/55${whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-slate-300 hover:text-emerald-300 sm:gap-3 sm:text-sm">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" /> {whatsapp}
              </a>
              <div className="flex items-center gap-2 text-xs text-slate-400 sm:gap-3 sm:text-sm">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5" /> Brasil
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:gap-4">
            <Button href={`https://wa.me/55${whatsapp}`} target="_blank" className="w-full text-sm sm:text-base">
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" /> WhatsApp
            </Button>
            <Button href={`mailto:${email}`} variant="secondary" className="w-full text-sm sm:text-base">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" /> Email
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
