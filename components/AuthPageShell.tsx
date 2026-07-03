import Link from 'next/link';

type AuthPageShellProps = {
  accentTitle: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function AuthPageShell({ accentTitle, title, description, children }: AuthPageShellProps) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.25),_transparent_45%),_linear-gradient(135deg,_#020617,_#0f172a)] text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-16 sm:px-10">
        <div className="grid w-full gap-8 rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-8 shadow-[0_30px_80px_rgba(2,8,23,0.55)] sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <div className="space-y-5 rounded-[1.5rem] border border-slate-800/70 bg-slate-950/70 p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-violet-400/80">{accentTitle}</p>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h1>
            <p className="max-w-xl text-slate-400">{description}</p>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">• Secure account access with Firebase Auth</div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">• Protected study dashboard and progress tracking</div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">• Smooth sign-in across devices with Google support</div>
            </div>
            <Link href="/" className="inline-flex text-sm font-medium text-violet-300 transition hover:text-violet-200">
              ← Back to home
            </Link>
          </div>

          <div className="rounded-[1.5rem] border border-slate-800/70 bg-slate-950/70 p-8">{children}</div>
        </div>
      </div>
    </main>
  );
}
