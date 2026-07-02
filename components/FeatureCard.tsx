import type { LucideIcon } from 'lucide-react';

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 transition hover:border-violet-400/30 hover:shadow-soft">
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-slate-400 leading-7">{description}</p>
    </div>
  );
}
