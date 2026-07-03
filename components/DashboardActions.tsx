'use client';

type DashboardActionsProps = {
  items: Array<{ label: string; description: string }>;
};

export default function DashboardActions({ items }: DashboardActionsProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <button key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 text-left text-sm font-medium text-slate-100 transition hover:border-violet-400">
          <p className="font-semibold text-white">{item.label}</p>
          <p className="mt-2 text-sm text-slate-400">{item.description}</p>
        </button>
      ))}
    </div>
  );
}
