'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import DarkModeToggle from '../app/dark';

const navItems = [
  { href: '#features', label: 'Features' },
  { href: '#testimonials', label: 'Stories' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#newsletter', label: 'Updates' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#features');

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white">
          ShikshaSetu
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
          <Link href="/login" className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-violet-400 hover:text-white">
            Login
          </Link>
          <Link href="/signup" className="rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400">
            Sign up
          </Link>
          <DarkModeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
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
              <Link href="/login" className="rounded-full border border-slate-700 px-4 py-2 text-center text-sm font-medium text-slate-200 transition hover:border-violet-400 hover:text-white">
                Login
              </Link>
              <Link href="/signup" className="rounded-full bg-violet-500 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-violet-400">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
