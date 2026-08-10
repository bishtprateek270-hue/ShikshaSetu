'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useLanguage } from '../lib/language/LanguageContext';

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type FeaturesSectionProps = {
  features: FeatureItem[];
};

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  // Raw scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth out scroll progression with spring physics for 60fps momentum
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} id="features" className="relative h-[480vh] bg-white dark:bg-zinc-950">
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden px-4 sm:px-8 py-6 sm:py-10 lg:px-12">
        
        {/* Sticky Header */}
        <div className="mx-auto w-full max-w-7xl text-center shrink-0">
          <SectionHeading title={t('feat_heading')} subtitle={t('feat_subheading')} />
          
          {/* Step Pill Indicators */}
          <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2">
            {features.map((f, i) => (
              <StepIndicator
                key={f.title}
                index={i}
                total={features.length}
                smoothProgress={smoothProgress}
              />
            ))}
          </div>
        </div>

        {/* Prominent Feature Card (Spans ~88% Page Width) */}
        <div className="relative mx-auto my-auto w-[90%] max-w-6xl h-[400px] sm:h-[440px] lg:h-[460px]">
          {features.map((feature, index) => (
            <LargeFeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              total={features.length}
              smoothProgress={smoothProgress}
            />
          ))}
        </div>

        {/* Bottom Scroll Guide */}
        <div className="pb-1 text-center text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 shrink-0">
          ✦ Scroll down to reveal next feature
        </div>
      </div>
    </div>
  );
}

function StepIndicator({
  index,
  total,
  smoothProgress,
}: {
  index: number;
  total: number;
  smoothProgress: any;
}) {
  const step = 1 / total;
  const start = index * step;
  const end = (index + 1) * step;

  const width = useTransform(
    smoothProgress,
    [start, (start + end) / 2, end],
    ['12px', '40px', '12px']
  );

  const opacity = useTransform(
    smoothProgress,
    [start - step * 0.25, start, end - step * 0.25, end],
    [0.3, 1, 1, 0.3]
  );

  return (
    <motion.div
      style={{ width, opacity }}
      className="h-2 rounded-full bg-zinc-900 dark:bg-white transition-colors duration-200"
    />
  );
}

function LargeFeatureCard({
  feature,
  index,
  total,
  smoothProgress,
}: {
  feature: FeatureItem;
  index: number;
  total: number;
  smoothProgress: any;
}) {
  const Icon = feature.icon;
  const step = 1 / total;
  const start = index * step;
  const end = (index + 1) * step;

  // Ultra-light 2D GPU-accelerated transforms for 60fps performance
  const opacity = useTransform(
    smoothProgress,
    [
      start - step * 0.3,
      start,
      end - step * 0.2,
      index === total - 1 ? 1 : end,
    ],
    [0, 1, 1, index === total - 1 ? 1 : 0]
  );

  const scale = useTransform(
    smoothProgress,
    [
      start - step * 0.3,
      start,
      end - step * 0.2,
      index === total - 1 ? 1 : end,
    ],
    [0.93, 1, 1, index === total - 1 ? 1 : 0.95]
  );

  const y = useTransform(
    smoothProgress,
    [
      start - step * 0.3,
      start,
      end - step * 0.2,
      index === total - 1 ? 1 : end,
    ],
    [60, 0, 0, index === total - 1 ? 0 : -45]
  );

  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
        willChange: 'transform, opacity',
      }}
      className="absolute inset-0 w-full h-full rounded-[2.5rem] border border-rose-200/80 dark:border-zinc-800 bg-[#FDF4F8] dark:bg-zinc-900/90 p-6 sm:p-10 lg:p-12 shadow-soft flex flex-col justify-between overflow-hidden"
    >
      {/* Top Meta Header */}
      <div className="flex items-center justify-between border-b border-rose-200/60 dark:border-zinc-800/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm">
            <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <div>
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-500 font-semibold block">
              FEATURE 0{index + 1} / 0{total}
            </span>
            <span className="text-xs font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">
              SHIKSHASETU PLATFORM
            </span>
          </div>
        </div>

        <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-rose-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-1.5 text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300">
          <span>✦</span>
          <span>ADAPTIVE AI MODULE</span>
        </div>
      </div>

      {/* Center Content Body */}
      <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center my-auto">
        <div className="space-y-4">
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
            {feature.title}
          </h3>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl">
            {feature.description}
          </p>
        </div>

        {/* Feature Visual Showcase Pill Box */}
        <div className="hidden md:flex flex-col justify-center rounded-3xl border border-rose-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b border-rose-200/60 dark:border-zinc-800/60 pb-3">
            <span className="text-xs font-mono font-semibold uppercase text-zinc-500">SYSTEM STATUS</span>
            <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              ● READY
            </span>
          </div>
          <p className="text-xs font-medium text-zinc-800 dark:text-zinc-200">
            {feature.title} is powered by ShikshaSetu&apos;s adaptive machine learning engine.
          </p>
          <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>AUTOMATED PIPELINE</span>
            <span>100% RELIABLE</span>
          </div>
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white border-t border-rose-200/60 dark:border-zinc-800/60">
        <span className="font-mono text-[10px] text-zinc-500">EXPLICIT CONTROL FLOW</span>
        <a href="/signup" className="inline-flex items-center gap-2 hover:underline">
          <span>GET STARTED WITH {feature.title}</span>
          <span>↗</span>
        </a>
      </div>
    </motion.div>
  );
}
