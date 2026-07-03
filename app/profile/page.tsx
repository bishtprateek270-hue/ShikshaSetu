'use client';

import ProtectedRoute from '../../components/ProtectedRoute';
import { useAuth } from '../../components/AuthProvider';

export default function ProfilePage() {
  const { user, profile, logout } = useAuth();

  return (
    <ProtectedRoute>
      <main className="min-h-screen px-6 py-16 text-slate-100">
        <div className="mx-auto max-w-3xl rounded-xl border border-slate-800 bg-slate-900/90 p-8">
          <h1 className="text-2xl font-semibold">Your profile</h1>
          <div className="mt-6 space-y-4 text-slate-300">
            <div>
              <p className="text-sm text-slate-500">Email</p>
              <p className="font-medium text-white">{user?.email}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Name</p>
              <p className="font-medium text-white">{profile?.name || user?.displayName || '—'}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Institute</p>
              <p className="font-medium text-white">{profile?.institute || '—'}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Role</p>
              <p className="font-medium text-white">{profile?.role || 'student'}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Onboarding</p>
              <p className="font-medium text-white">{profile?.onboardingComplete ? 'Complete' : 'Not complete'}</p>
            </div>
          </div>
          <button onClick={() => logout()} className="mt-8 rounded bg-violet-600 px-4 py-2 text-white">Logout</button>
        </div>
      </main>
    </ProtectedRoute>
  );
}
