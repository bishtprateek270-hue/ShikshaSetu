'use client';

import ProtectedRoute from '../../../components/ProtectedRoute';
import { useAuth } from '../../../components/AuthProvider';

export default function StudentDashboardPage() {
  const { user, profile, logout } = useAuth();

  return (
    <ProtectedRoute>
      <main className="min-h-screen px-6 py-16 text-slate-100">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-[0_30px_80px_rgba(2,8,23,0.55)] sm:p-10">
          <h1 className="text-3xl font-semibold text-white">Student dashboard</h1>
          <p className="mt-3 text-slate-400">Welcome back, {profile?.name || user?.displayName || user?.email?.split('@')[0]}.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <h2 className="text-xl font-semibold text-white">Your learning path</h2>
              <p className="mt-3 text-slate-400">Access lessons, quizzes, and progress trackers designed for students.</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <h2 className="text-xl font-semibold text-white">Study tools</h2>
              <p className="mt-3 text-slate-400">Jump into your next review session or continue where you left off.</p>
            </div>
          </div>
          <button onClick={() => logout()} className="mt-8 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
            Logout
          </button>
        </div>
      </main>
    </ProtectedRoute>
  );
}
