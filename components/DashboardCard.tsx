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
    <section className={clsx('rounded-[1.75rem] border border-slate-800/80 bg-slate-950/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.35)]', className)}>
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          {description ? <p className="mt-2 text-sm text-slate-400">{description}</p> : null}
        </div>
      </div>
      {children}
    </section>
  );
}
