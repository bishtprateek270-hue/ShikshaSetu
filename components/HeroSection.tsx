'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, BookOpen, FileText, Sparkles, Trophy, Zap } from 'lucide-react';
import { useLanguage } from '../lib/language/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  const dashboardItems = [
    { title: t('feat_ai_notes_title'), description: t('feat_ai_notes_desc').split('.')[0], icon: Sparkles },
    { title: t('feat_ai_quiz_title'), description: t('feat_ai_quiz_desc').split('.')[0], icon: Zap },
    { title: t('feat_pdf_title'), description: t('feat_pdf_desc').split('.')[0], icon: FileText },
    { title: t('feat_progress_title'), description: t('feat_progress_desc').split('.')[0], icon: BarChart3 },
    { title: t('student_event_activities'), description: t('student_goal_desc').split('!')[0], icon: Trophy },
    { title: t('student_schedule_title'), description: t('student_schedule_title'), icon: BookOpen }
  ];

  return (
    <section className="relative overflow-hidden px-6 py-16 sm:px-10 lg:px-16">
      <div className="absolute inset-x-0 top-0 h-80 bg-hero-gradient opacity-70 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <span className="inline-flex items-center rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
              {t('hero_badge')}
            </span>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl animate-in fade-in slide-in-from-bottom duration-300">
                {t('hero_title')}
              </h1>
              <p className="max-w-2xl text-xl leading-8 text-slate-300">
                {t('hero_subtitle')}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-violet-500 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-violet-400"
              >
                {t('hero_cta_start')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#features" className="text-sm font-medium text-slate-200 transition hover:text-white">
                {t('hero_cta_explore')}
              </a>
            </div>
            <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
                <p className="font-semibold text-white">{t('hero_stat_powered')}</p>
                <p className="mt-1 text-slate-400">{t('hero_stat_tools')}</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
                <p className="font-semibold text-white">{t('hero_stat_adaptive')}</p>
                <p className="mt-1 text-slate-400">{t('hero_stat_engine')}</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
                <p className="font-semibold text-white">{t('hero_stat_support')}</p>
                <p className="mt-1 text-slate-400">{t('hero_stat_ai_support')}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-soft sm:p-6"
          >
            <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/90 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{t('focus_workspace_title')}</p>
                  <p className="mt-1 text-lg font-semibold text-white">{t('hero_prep_plan')}</p>
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200"
                >
                  Live
                </motion.div>
              </div>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05
                    }
                  }
                }}
                initial="hidden"
                animate="show"
                className="grid gap-3 sm:grid-cols-2"
              >
                {dashboardItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      variants={{
                        hidden: { opacity: 0, y: 12, scale: 0.97 },
                        show: { opacity: 1, y: 0, scale: 1 }
                      }}
                      whileHover={{ 
                        y: -4, 
                        scale: 1.02, 
                        borderColor: 'rgba(139, 92, 246, 0.4)', 
                        boxShadow: '0 8px 24px -8px rgba(139, 92, 246, 0.3)' 
                      }}
                      whileTap={{ scale: 0.985 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3 cursor-pointer group transition-colors duration-250"
                    >
                      <div className="flex items-center gap-2 text-violet-200">
                        <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-[1.15] group-hover:rotate-[6deg] text-violet-400" />
                        <span className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors duration-200">{item.title}</span>
                      </div>
                      <p className="mt-2 text-xs text-slate-400 group-hover:text-slate-350 transition-colors duration-200 truncate">{item.description}</p>
                    </motion.div>
                  );
                })}
              </motion.div>

              <Link href="/signup">
                <motion.div 
                  whileHover={{ scale: 1.015, borderColor: 'rgba(139, 92, 246, 0.4)' }}
                  whileTap={{ scale: 0.99 }}
                  className="mt-4 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-4 cursor-pointer transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{t('hero_get_started')}</p>
                      <p className="text-sm text-slate-300">{t('hero_explore_workspace')}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-violet-300" />
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
