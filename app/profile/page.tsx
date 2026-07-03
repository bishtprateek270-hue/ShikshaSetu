'use client';

import ProtectedRoute from '../../components/ProtectedRoute';
import { useAuth } from '../../components/AuthProvider';

export default function ProfilePage() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute>
      <main className="min-h-screen px-6 py-16 text-slate-100">
        <div className="mx-auto max-w-3xl rounded-xl border border-slate-800 bg-slate-900/90 p-8">
          <h1 className="text-2xl font-semibold">Your profile</h1>
          <p className="mt-4 text-slate-300">Email: {user?.email}</p>
          <p className="mt-2 text-slate-300">Name: {user?.displayName || '—'}</p>
          <button onClick={() => logout()} className="mt-6 rounded bg-violet-600 px-4 py-2 text-white">Logout</button>
        </div>
      </main>
    </ProtectedRoute>
  );
}
