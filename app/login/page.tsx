import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.25),_transparent_45%),_linear-gradient(135deg,_#020617,_#0f172a)] text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-16 sm:px-10">
        <div className="grid w-full gap-8 rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-8 shadow-[0_30px_80px_rgba(2,8,23,0.55)] sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <div className="space-y-5 rounded-[1.5rem] border border-slate-800/70 bg-slate-950/70 p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-violet-400/80">Quick access</p>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">Welcome back</h1>
            <p className="max-w-xl text-slate-400">
              Sign in to continue your learning journey with a calm, simple experience.
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">• Clean dashboard to track your progress</div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">• Helpful resources in one place</div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">• Smooth access across devices</div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-800/70 bg-slate-950/70 p-8">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.28em] text-violet-400/80">Sign in</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Continue with your email</h2>
            </div>

            <form className="mt-8 space-y-5">
              <label className="block">
                <span className="text-sm font-medium text-slate-300">Email</span>
                <input type="email" placeholder="name@example.com" className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-300">Password</span>
                <input type="password" placeholder="Enter your password" className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10" />
              </label>
              <div className="flex items-center justify-between text-sm text-slate-400">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-700 bg-slate-900" />
                  Remember me
                </label>
                <a href="#" className="text-violet-300 hover:text-violet-200">Forgot password?</a>
              </div>
              <button type="submit" className="w-full rounded-3xl bg-violet-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-violet-400">
                Sign in
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-400">
              New here?{' '}
              <Link href="/signup" className="font-medium text-white hover:text-violet-300">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
