'use client';

import RoleProtectedRoute from '../../../components/RoleProtectedRoute';
import { useAuth } from '../../../components/AuthProvider';

export default function AdminDashboardPage() {
  const { profile, logout } = useAuth();

  return (
    <RoleProtectedRoute allowedRoles={['admin']}>
      <main className="min-h-screen px-6 py-16 text-slate-100">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-[0_30px_80px_rgba(2,8,23,0.55)] sm:p-10">
          <h1 className="text-3xl font-semibold text-white">Admin dashboard</h1>
          <p className="mt-3 text-slate-400">Welcome back, {profile?.name || 'Admin'}.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <h2 className="text-xl font-semibold text-white">Platform insights</h2>
              <p className="mt-3 text-slate-400">Review activity, admin alerts, and system health at a glance.</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <h2 className="text-xl font-semibold text-white">User management</h2>
              <p className="mt-3 text-slate-400">Approve roles, audit sign-in history, and maintain platform integrity.</p>
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
