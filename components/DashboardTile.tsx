'use client';

type DashboardTileProps = {
  title: string;
  description: string;
};

export default function DashboardTile({ title, description }: DashboardTileProps) {
  return (
    <div className="rounded-[1.5rem] border border-slate-800/80 bg-slate-900/80 p-5 text-slate-100 transition hover:border-violet-400">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-400">{description}</p>
    </div>
  );
}
