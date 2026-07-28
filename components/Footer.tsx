'use client';

import Link from 'next/link';
import { useLanguage } from '../lib/language/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/95 px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.7fr_0.7fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold text-white">{t('brand_name')}</h2>
            <p className="mt-4 max-w-xl text-slate-400 leading-7">
              {t('footer_desc')}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{t('footer_col_product')}</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <Link href="#features" className="block hover:text-white">{t('feat_ai_notes_title')}</Link>
              <Link href="#features" className="block hover:text-white">{t('feat_ai_quiz_title')}</Link>
              <Link href="#features" className="block hover:text-white">{t('feat_progress_title')}</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{t('footer_col_resources')}</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <Link href="/#faqs" className="block hover:text-white">{t('nav_faqs')}</Link>
              <Link href="/#features" className="block hover:text-white">{t('nav_features')}</Link>
              <Link href="/#newsletter" className="block hover:text-white">{t('nav_updates')}</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{t('footer_col_company')}</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <Link href="/about" className="block hover:text-white">{t('footer_link_about')}</Link>
              <Link href="/contact" className="block hover:text-white">{t('footer_link_contact')}</Link>
              <Link href="/about" className="block hover:text-white">{t('footer_link_careers')}</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{t('footer_col_legal')}</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <Link href="/privacy" className="block hover:text-white">{t('footer_link_privacy')}</Link>
              <Link href="/terms" className="block hover:text-white">{t('footer_link_terms')}</Link>
              <Link href="/terms" className="block hover:text-white">{t('footer_link_cookies')}</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800/70 pt-6 text-sm text-slate-500">
          {t('footer_copyright')}
        </div>
      </div>
    </footer>
  );
}
