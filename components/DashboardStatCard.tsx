'use client';

type DashboardStatCardProps = {
  label: string;
  value: string;
  subtext?: string;
  accent?: string;
};

export default function DashboardStatCard({ label, value, subtext, accent }: DashboardStatCardProps) {
  return (
    <div className={`rounded-[1.5rem] border border-slate-800/70 bg-slate-950/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.2)] ${accent ?? ''}`}>
      <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
      {subtext ? <p className="mt-2 text-sm text-slate-500">{subtext}</p> : null}
    </div>
  );
}
