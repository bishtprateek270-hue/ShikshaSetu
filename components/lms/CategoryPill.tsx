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
        'inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm',
        active
          ? 'border-zinc-900 dark:border-white bg-zinc-900 dark:bg-white text-white dark:text-zinc-900'
          : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600'
      )}
    >
      {icon && <span className="text-xs">{icon}</span>}
      {label}
    </button>
  );
}

