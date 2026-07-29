'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/language/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
      <div className="absolute inset-x-0 top-0 h-80 bg-hero-gradient opacity-70 blur-3xl" />
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
            {t('hero_badge')}
          </span>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-7xl leading-[1.1] animate-in fade-in slide-in-from-bottom duration-300">
              {t('hero_title')}
            </h1>
            <p className="max-w-2xl mx-auto text-xl leading-8 text-slate-300">
              {t('hero_subtitle')}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center w-full">
            <a
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-violet-500 px-8 py-3.5 text-base font-semibold text-white shadow-soft transition hover:bg-violet-400 hover:scale-[1.02]"
            >
              {t('hero_cta_start')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#features" className="text-sm font-medium text-slate-200 transition hover:text-white hover:scale-[1.02]">
              {t('hero_cta_explore')}
            </a>
          </div>
          <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-3 w-full max-w-3xl mt-8">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-4 shadow-soft">
              <p className="font-semibold text-white">{t('hero_stat_powered')}</p>
              <p className="mt-1 text-slate-400">{t('hero_stat_tools')}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-4 shadow-soft">
              <p className="font-semibold text-white">{t('hero_stat_adaptive')}</p>
              <p className="mt-1 text-slate-400">{t('hero_stat_engine')}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-4 shadow-soft">
              <p className="font-semibold text-white">{t('hero_stat_support')}</p>
              <p className="mt-1 text-slate-400">{t('hero_stat_ai_support')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
