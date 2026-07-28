'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, BookOpen, FileText, Sparkles, Trophy, Zap } from 'lucide-react';

const dashboardItems = [
  { title: 'AI Notes', description: 'Summaries in seconds', icon: Sparkles },
  { title: 'AI Quiz', description: 'Adaptive practice', icon: Zap },
  { title: 'PDF Upload', description: 'Turn notes into quizzes', icon: FileText },
  { title: 'Progress Analytics', description: 'Track momentum', icon: BarChart3 },
  { title: 'Study Streak', description: 'Stay consistent', icon: Trophy },
  { title: 'Upcoming Tests', description: 'Plan smarter', icon: BookOpen }
];

export default function HeroSection() {
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
              AI-powered learning for modern students
            </span>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Learn faster with ShikshaSetu&apos;s AI study copilot.
              </h1>
              <p className="max-w-2xl text-xl leading-8 text-slate-300">
                Turn notes, PDFs, and goals into personalized lessons, quizzes, and progress insights without the chaos.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-violet-500 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-violet-400"
              >
                Start free
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#features" className="text-sm font-medium text-slate-200 transition hover:text-white">
                Explore the platform
              </a>
            </div>
            <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
                <p className="font-semibold text-white">AI-powered</p>
                <p className="mt-1 text-slate-400">Study tools</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
                <p className="font-semibold text-white">Adaptive</p>
                <p className="mt-1 text-slate-400">Quiz engine</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
                <p className="font-semibold text-white">24/7</p>
                <p className="mt-1 text-slate-400">AI support</p>
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
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">AI learning workspace</p>
                  <p className="mt-1 text-lg font-semibold text-white">Today&apos;s prep plan</p>
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
                      <p className="mt-2 text-sm text-slate-400 group-hover:text-slate-350 transition-colors duration-200">{item.description}</p>
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
                      <p className="text-sm font-semibold text-white">Get started today</p>
                      <p className="text-sm text-slate-300">Sign up and explore your AI workspace</p>
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
