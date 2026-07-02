'use client';

import { useEffect, useState } from 'react';

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
      className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 transition hover:border-slate-500"
    >
      {mode === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}
