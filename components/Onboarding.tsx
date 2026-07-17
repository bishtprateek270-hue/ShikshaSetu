'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from './ProtectedRoute';
import { useAuth } from './AuthProvider';
import DarkModeToggle from '../app/dark';

const roles = [
  { value: 'student', label: 'Student' },
  { value: 'teacher', label: 'Teacher' },
  { value: 'admin', label: 'Admin' },
] as const;

type Role = (typeof roles)[number]['value'];

export default function Onboarding() {
  const router = useRouter();
  const { user, profile, completeOnboarding, loading } = useAuth();
  const [name, setName] = useState(user?.displayName || '');
  const [institute, setInstitute] = useState('');
  const [role, setRole] = useState<Role>('student');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace('/login');
      } else if (profile?.onboardingComplete) {
        router.replace('/dashboard');
      } else if (user.displayName && !name) {
        setName(user.displayName);
      }
    }
  }, [loading, profile, router, user, name]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-100">
        <p className="text-lg text-slate-300">Loading onboarding...</p>
      </main>
    );
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await completeOnboarding({ name, institute, role });
      router.replace('/dashboard');
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : 'Unable to complete onboarding.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ProtectedRoute allowIncompleteProfile>
      <main className="relative min-h-screen bg-slate-950 text-slate-100 px-6 py-16 sm:px-10 lg:px-16">
        <div className="absolute top-4 right-4 z-50">
          <DarkModeToggle />
        </div>
        <div className="mx-auto max-w-xl rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-[0_30px_80px_rgba(2,8,23,0.55)] sm:p-10">
          <h1 className="text-3xl font-semibold text-white">Tell us about yourself</h1>
          <p className="mt-3 text-slate-400">Complete your profile so we can show the right dashboard and content.</p>
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-slate-300">
            <p className="text-sm">
              You’re being redirected here because your profile is not complete yet. Finish onboarding, and you’ll be taken to the dashboard for your selected role.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error ? <p className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-4 text-sm text-rose-200">{error}</p> : null}

          <label className="block text-sm font-medium text-slate-300">Full name</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-violet-400"
          />

          <label className="block text-sm font-medium text-slate-300">Institute</label>
          <input
            value={institute}
            onChange={(event) => setInstitute(event.target.value)}
            required
            className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-violet-400"
          />

          <label className="block text-sm font-medium text-slate-300">Role</label>
          <select
            value={role}
            onChange={(event) => setRole(event.target.value as Role)}
            className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-violet-400"
          >
            {roles.map((item) => (
              <option key={item.value} value={item.value} className="bg-slate-950 text-slate-100">
                {item.label}
              </option>
            ))}
          </select>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Continue to dashboard
          </button>
        </form>
      </div>
    </main>
    </ProtectedRoute>
  );
}
