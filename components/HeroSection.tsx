'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-16 sm:px-10 lg:px-16">
      <div className="absolute inset-x-0 top-0 h-80 bg-hero-gradient opacity-70 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <span className="inline-flex items-center rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
              Smarter learning, simpler access
            </span>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Learn with clarity and grow with confidence.
              </h1>
              <p className="max-w-2xl text-xl leading-8 text-slate-300">
                A modern learning space that keeps your goals, resources, and progress in one calm place.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-violet-500 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-violet-400"
              >
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#features" className="text-sm font-medium text-slate-200 transition hover:text-white">
                See what’s inside
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-soft sm:p-10"
          >
            <div className="grid gap-6">
              <div className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-950/90 p-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-violet-200">At a glance</p>
                  <p className="mt-2 text-xl font-semibold text-white">A smoother start for every learner</p>
                </div>
                <Sparkles className="h-10 w-10 text-violet-400" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6">
                  <p className="text-sm text-slate-400">Flexible access</p>
                  <p className="mt-3 text-2xl font-semibold text-white">Anytime</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6">
                  <p className="text-sm text-slate-400">Helpful support</p>
                  <p className="mt-3 text-2xl font-semibold text-white">Always close</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
