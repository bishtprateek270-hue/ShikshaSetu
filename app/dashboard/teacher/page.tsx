'use client';

import RoleProtectedRoute from '../../../components/RoleProtectedRoute';
import { useAuth } from '../../../components/AuthProvider';

export default function TeacherDashboardPage() {
  const { profile, logout } = useAuth();

  return (
    <RoleProtectedRoute allowedRoles={['teacher', 'admin']}>
      <main className="min-h-screen px-6 py-16 text-slate-100">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-[0_30px_80px_rgba(2,8,23,0.55)] sm:p-10">
          <h1 className="text-3xl font-semibold text-white">Teacher dashboard</h1>
          <p className="mt-3 text-slate-400">Welcome back, {profile?.name || 'Instructor'}.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <h2 className="text-xl font-semibold text-white">Classroom tools</h2>
              <p className="mt-3 text-slate-400">Create lessons, grade assignments, and track student progress.</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <h2 className="text-xl font-semibold text-white">Resource library</h2>
              <p className="mt-3 text-slate-400">Share materials, upload content, and manage teaching resources.</p>
            </div>
          </div>
          <button onClick={() => logout()} className="mt-8 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
            Logout
          </button>
        </div>
      </main>
    </RoleProtectedRoute>
  );
}
