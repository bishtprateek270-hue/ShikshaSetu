'use client';

import clsx from 'clsx';

type CategoryPillProps = {
  label: string;
  icon?: string;
  active?: boolean;
  onClick?: () => void;
};

export default function CategoryPill({ label, icon, active, onClick }: CategoryPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200',
        active
          ? 'border-violet-500 bg-violet-500/15 text-violet-200 shadow-[0_0_16px_rgba(139,92,246,0.15)]'
          : 'border-slate-700/70 bg-slate-900/60 text-slate-300 hover:border-violet-400/50 hover:text-white'
      )}
    >
      {icon && <span className="text-base">{icon}</span>}
      {label}
    </button>
  );
}
