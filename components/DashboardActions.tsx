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
            <p className="font-semibold text-white transition-colors group-hover:text-violet-300">
              {item.label}
            </p>
            <p className="mt-2 text-sm text-slate-400">{item.description}</p>
          </>
        );

        if (item.href) {
          return (
            <Link
              key={item.label}
              href={item.href}
              className="group block rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 text-left text-sm font-medium text-slate-100 transition hover:border-violet-400"
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
            className="group rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 text-left text-sm font-medium text-slate-100 transition hover:border-violet-400"
          >
            {content}
          </button>
        );
      })}
    </div>
  );
}
