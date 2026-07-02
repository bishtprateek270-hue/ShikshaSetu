type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
};

export default function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-soft transition hover:-translate-y-1 hover:border-violet-400/30">
      <p className="text-slate-300 leading-8">“{quote}”</p>
      <div className="mt-8 border-t border-slate-800 pt-6">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-slate-400">{role}</p>
      </div>
    </div>
  );
}
