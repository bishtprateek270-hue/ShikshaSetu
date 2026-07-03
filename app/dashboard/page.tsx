"use client";

import ProtectedRoute from '../../components/ProtectedRoute';
import { useAuth } from '../../components/AuthProvider';

export default function DashboardPage() {
  const { user, sendVerificationEmail, logout } = useAuth();

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.25),_transparent_45%),_linear-gradient(135deg,_#020617,_#0f172a)] px-6 py-16 text-slate-100 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-8 shadow-[0_30px_80px_rgba(2,8,23,0.55)] sm:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-violet-400/80">Protected workspace</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Welcome back, {user?.displayName || user?.email?.split('@')[0] || 'learner'}.</h1>
              <p className="mt-3 max-w-2xl text-slate-400">
                Your AI-powered study workspace is ready. Keep learning, review your progress, and stay on top of your next quiz.
              </p>
            </div>
            <button onClick={() => logout()} className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-400 hover:text-white">
              Logout
            </button>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Account status</p>
              <div className="mt-4 space-y-4 text-sm text-slate-300">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-slate-400">Email</p>
                  <p className="mt-1 font-semibold text-white">{user?.email}</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-slate-400">Verification</p>
                  <p className="mt-1 font-semibold text-white">{user?.emailVerified ? 'Verified' : 'Pending verification'}</p>
                </div>
              </div>
              {!user?.emailVerified ? (
                <button onClick={() => sendVerificationEmail()} className="mt-5 rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
                  Resend verification email
                </button>
              ) : null}
            </div>

            <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Next steps</p>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">• Generate your first AI study quiz</div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">• Upload a PDF to turn notes into practice</div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">• Review your progress analytics and streak</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
