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
      <motion.div variants={fadeUp} className="rounded-[2rem] border border-white/10 bg-slate-900/55 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-fuchsia-300">Entre em contato</p>
            <h2 className="text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">Vamos conversar?</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
              Estou aberto a novas oportunidades, produtos digitais e colaborações em mobile, front-end, back-end, fintech e Web3.
            </p>

            <div className="mt-8 space-y-3">
              <a href={`mailto:${email}`} className="flex items-center gap-3 text-slate-300 hover:text-sky-300">
                <Mail size={20} /> {email}
              </a>
              <a href={`https://wa.me/55${whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-emerald-300">
                <MessageCircle size={20} /> {whatsapp}
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={20} /> Brasil
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <Button href={`https://wa.me/55${whatsapp}`} target="_blank" className="w-full text-base">
              <MessageCircle size={20} /> WhatsApp
            </Button>
            <Button href={`mailto:${email}`} variant="secondary" className="w-full text-base">
              <Mail size={20} /> Email
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
