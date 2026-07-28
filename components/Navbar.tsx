'use client';

import Link from 'next/link';
import { Menu, X, LayoutDashboard, LogOut, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
import DarkModeToggle from '../app/dark';
import { useAuth } from './AuthProvider';
import { useLanguage } from '../lib/language/LanguageContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('/#features');
  const { user, profile, loading, logout } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  const isLoggedIn = !loading && !!user;

  const navItems = [
    { href: '/#features', label: t('nav_features') },
    { href: '/#faqs', label: t('nav_faqs') },
    { href: '/#newsletter', label: t('nav_updates') }
  ];

  useEffect(() => {
    const sections = navItems
      .map((item) => {
        const hash = item.href.includes('#') ? item.href.substring(item.href.indexOf('#')) : '';
        return hash ? document.querySelector(hash) : null;
      })
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`/#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [language]); // Re-observe if navitems labels translate

  const userInitials = profile?.name
    ? profile.name.substring(0, 2).toUpperCase()
    : user?.displayName
      ? user.displayName.substring(0, 2).toUpperCase()
      : 'U';

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white">
          {t('brand_name')}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm transition ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`}
              >
                <span>{item.label}</span>
                <span className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-violet-400 transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            );
          })}

          {/* Language Toggle Button */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 px-3 py-1.5 text-xs font-semibold text-slate-650 dark:text-slate-200 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-450 transition shadow-soft"
          >
            <Globe className="h-3.5 w-3.5" />
            <span>{language === 'en' ? 'हिन्दी' : 'English'}</span>
          </button>

          {isLoggedIn ? (
            <>
              <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400">
                <LayoutDashboard className="h-4 w-4" />
                {t('nav_dashboard')}
              </Link>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-orange-500 text-xs font-bold text-white">
                  {userInitials}
                </div>
                <button
                  type="button"
                  onClick={() => logout()}
                  className="rounded-full border border-slate-700 p-2 text-slate-400 transition hover:border-rose-400 hover:text-rose-300"
                  aria-label="Logout"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            </>
          ) : (
            <>
              <Link href="/login" className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-violet-400 hover:text-white">
                {t('nav_login')}
              </Link>
              <Link href="/signup" className="rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400">
                {t('nav_signup')}
              </Link>
            </>
          )}
          <DarkModeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-slate-800 bg-slate-900/90 p-2.5 text-slate-200 transition hover:border-indigo-400"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
          </button>
          <DarkModeToggle />
          <button type="button" onClick={() => setOpen(!open)} className="rounded-full p-2 text-slate-200 ring-1 ring-slate-700/60 transition hover:bg-slate-900/80">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-slate-800 bg-slate-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              {isLoggedIn ? (
                <>
                  <Link href="/dashboard" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-violet-400">
                    <LayoutDashboard className="h-4 w-4" />
                    {t('nav_dashboard')}
                  </Link>
                  <button
                    type="button"
                    onClick={() => { setOpen(false); logout(); }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-center text-sm font-medium text-slate-200 transition hover:border-rose-400 hover:text-rose-300"
                  >
                    <LogOut className="h-4 w-4" />
                    {t('nav_logout')}
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="rounded-full border border-slate-700 px-4 py-2 text-center text-sm font-medium text-slate-200 transition hover:border-violet-400 hover:text-white">
                    {t('nav_login')}
                  </Link>
                  <Link href="/signup" className="rounded-full bg-violet-500 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-violet-400">
                    {t('nav_signup')}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
