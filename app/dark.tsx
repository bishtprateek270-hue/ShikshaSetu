'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    const initial = stored === 'light' ? 'light' : 'dark';
    setMode(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = mode === 'dark' ? 'light' : 'dark';
    setMode(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    window.localStorage.setItem('theme', next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3.5 py-1.5 text-xs font-semibold text-slate-100 transition hover:border-slate-500 flex items-center justify-center gap-1.5"
      aria-label="Toggle theme mode"
    >
      {mode === 'dark' ? (
        <>
          <Sun className="h-3.5 w-3.5 text-amber-400" />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="h-3.5 w-3.5 text-violet-400" />
          <span>Dark Mode</span>
        </>
      )}
    </button>
  );
}
