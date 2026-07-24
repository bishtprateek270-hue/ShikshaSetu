'use client';

import clsx from 'clsx';

type DashboardCardProps = {
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

export default function DashboardCard({ title, description, className, children }: DashboardCardProps) {
  return (
    <section className={clsx('rounded-2xl border border-slate-100 dark:border-slate-800/50 bg-white dark:bg-slate-900 p-6 shadow-soft text-slate-800 dark:text-slate-100', className)}>
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-950 dark:text-white">{title}</h2>
          {description ? <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">{description}</p> : null}
        </div>
      </div>
      {children}
    </section>
  );
}
