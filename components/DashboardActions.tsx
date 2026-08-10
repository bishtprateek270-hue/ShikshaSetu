'use client';

import Link from 'next/link';

type DashboardActionsProps = {
  items: Array<{
    label: string;
    description: string;
    href?: string;
    onClick?: () => void;
  }>;
};

export default function DashboardActions({ items }: DashboardActionsProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => {
        const content = (
          <>
            <p className="font-semibold text-xs uppercase tracking-wider text-zinc-900 dark:text-white transition-colors group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
              {item.label}
            </p>
            <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400">{item.description}</p>
          </>
        );

        if (item.href) {
          return (
            <Link
              key={item.label}
              href={item.href}
              className="group block rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 px-4 py-4 text-left text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-all hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-soft"
            >
              {content}
            </Link>
          );
        }

        return (
          <button
            key={item.label}
            onClick={item.onClick}
            type="button"
            className="group rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 px-4 py-4 text-left text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-all hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-soft"
          >
            {content}
          </button>
        );
      })}
    </div>
  );
}

