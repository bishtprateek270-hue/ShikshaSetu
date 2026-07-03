'use client';

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
};

export default function EmptyState({ title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="rounded-[2rem] border border-dashed border-slate-800/80 bg-slate-950/70 p-10 text-center text-slate-300">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Nothing here yet</p>
      <h2 className="mt-4 text-2xl font-semibold text-white">{title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400">{description}</p>
      {actionLabel && onAction ? (
        <button onClick={onAction} className="mt-6 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}
