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
            <p className="font-semibold text-slate-900 dark:text-white transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-300">
              {item.label}
            </p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
          </>
        );

        if (item.href) {
          return (
            <Link
              key={item.label}
              href={item.href}
              className="group block rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 px-4 py-4 text-left text-sm font-medium text-slate-700 dark:text-slate-200 transition-all hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-soft"
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
            className="group rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 px-4 py-4 text-left text-sm font-medium text-slate-700 dark:text-slate-200 transition-all hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-soft"
          >
            {content}
          </button>
        );
      })}
    </div>
  );
}
