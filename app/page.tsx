'use client';

import Link from 'next/link';
import { BarChart3, BookOpen, ClipboardList, FileText, MessagesSquare, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import FaqItem from '../components/FaqItem';
import NewsletterForm from '../components/NewsletterForm';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import { useLanguage } from '../lib/language/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  const features = [
    { title: t('feat_ai_notes_title'), description: t('feat_ai_notes_desc'), icon: Sparkles },
    { title: t('feat_ai_quiz_title'), description: t('feat_ai_quiz_desc'), icon: BookOpen },
    { title: t('feat_pdf_title'), description: t('feat_pdf_desc'), icon: FileText },
    { title: t('feat_doubt_title'), description: t('feat_doubt_desc'), icon: MessagesSquare },
    { title: t('feat_progress_title'), description: t('feat_progress_desc'), icon: BarChart3 },
    { title: t('feat_mock_title'), description: t('feat_mock_desc'), icon: ClipboardList }
  ];

  const faqs = [
    { question: t('faq_q1'), answer: t('faq_a1') },
    { question: t('faq_q2'), answer: t('faq_a2') },
    { question: t('faq_q3'), answer: t('faq_a3') }
  ];

  return (
    <main className="bg-slate-950 text-slate-100">
      <Navbar />

      <HeroSection />

      <AnimatedSection id="features" className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={t('feat_heading')} subtitle={t('feat_subheading')} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-t border-slate-800/70 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-6">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">{t('focus_span')}</span>
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">{t('focus_heading')}</h2>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                {t('focus_desc')}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/signup" className="rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
                  {t('hero_cta_start')}
                </Link>
                <Link href="/login" className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-400 hover:text-white">
                  {t('nav_login')}
                </Link>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/90 p-6">
              <div className="rounded-[1.25rem] border border-slate-800 bg-slate-955/80 p-5 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{t('focus_span')}</p>
                    <p className="mt-1 text-xl font-semibold text-white">{t('focus_workspace_title')}</p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[t('focus_feat_1'), t('focus_feat_2'), t('focus_feat_3'), t('focus_feat_4')].map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                      <p className="text-sm font-medium text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="dark px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-6">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">{t('preview_span')}</span>
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">{t('preview_heading')}</h2>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                {t('preview_desc')}
              </p>
              <div className="flex flex-wrap gap-3">
                {[t('preview_tag_1'), t('preview_tag_2'), t('preview_tag_3')].map((item) => (
                  <span key={item} className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/signup" className="rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
                  {t('hero_cta_start')}
                </Link>
                <Link href="/login" className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-400 hover:text-white">
                  {t('nav_login')}
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-5">
              <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/90 p-5 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">{t('hero_stat_tools')}</p>
                    <p className="mt-1 text-xl font-semibold text-white">{t('preview_board_title')}</p>
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {[t('feat_ai_notes_title'), t('feat_mock_title'), t('feat_pdf_title'), t('feat_progress_title')].map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-800 bg-slate-955/80 p-4">
                      <p className="text-sm font-medium text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="faqs" className="border-t border-slate-800/70 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={t('faq_heading')} subtitle={t('faq_subheading')} />
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="newsletter" className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-800 bg-slate-950/90 p-10 shadow-soft">
          <NewsletterForm />
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
