'use client';

type DashboardStatCardProps = {
  label: string;
  value: string;
  subtext?: string;
  accent?: string;
};

export default function DashboardStatCard({ label, value, subtext, accent }: DashboardStatCardProps) {
  return (
    <div className={`rounded-2xl border border-slate-100 dark:border-slate-800/50 bg-white dark:bg-slate-900 p-5 shadow-soft text-slate-800 dark:text-slate-100 ${accent ?? ''}`}>
      <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-semibold">{label}</p>
      <p className="mt-2.5 text-3xl font-semibold text-slate-900 dark:text-white">{value}</p>
      {subtext ? <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{subtext}</p> : null}
    </div>
  );
}
