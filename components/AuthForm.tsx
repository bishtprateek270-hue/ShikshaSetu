'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from './AuthProvider';

type AuthFormProps = {
  mode: 'login' | 'signup' | 'forgot';
};

export default function AuthForm({ mode }: AuthFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { signIn, signUp, signInWithGoogle, resetPassword, isConfigured } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setMessage(null);
    setIsSubmitting(true);

    try {
      if (mode === 'signup') {
        await signUp(email, password, name);
        setMessage('Account created. A verification email has been sent.');
      } else if (mode === 'forgot') {
        await resetPassword(email);
        setMessage('If the email exists, a reset link has been sent.');
      } else {
        await signIn(email, password);
      }
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : 'Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setMessage(null);
    setIsSubmitting(true);

    try {
      await signInWithGoogle();
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : 'Google sign-in failed.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-[0_0_120px_rgba(15,23,42,0.35)]">
      {message ? <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-200">{message}</div> : null}
      {error ? <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-4 text-sm text-rose-200">{error}</div> : null}

      {mode === 'signup' ? (
        <div>
          <label className="block text-sm font-medium text-slate-400">Name</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your full name"
            required
            className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-violet-400"
          />
        </div>
      ) : null}

      <div>
        <label className="block text-sm font-medium text-slate-400">Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="name@example.com"
          required
          className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-violet-400"
        />
      </div>

      {mode !== 'forgot' ? (
        <div>
          <label className="block text-sm font-medium text-slate-400">Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            required
            className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-violet-400"
          />
        </div>
      ) : null}

      <div className="flex items-center justify-between gap-4 text-sm text-slate-400">
        {mode !== 'forgot' ? (
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-violet-500" />
            Remember me
          </label>
        ) : null}
        {mode !== 'forgot' ? (
          <a href="/forgot-password" className="font-semibold text-slate-200 transition hover:text-white">
            Forgot password?
          </a>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !isConfigured}
        className="w-full rounded-2xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {mode === 'login' ? 'Sign in' : mode === 'signup' ? 'Create account' : 'Send reset link'}
      </button>

      {mode !== 'forgot' ? (
        <>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="h-px flex-1 bg-slate-700" />
            <span>or</span>
            <span className="h-px flex-1 bg-slate-700" />
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isSubmitting || !isConfigured}
            className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-violet-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Continue with Google
          </button>
        </>
      ) : null}

      <div className="text-center text-sm text-slate-400">
        {mode === 'login' ? (
          <>New here? <a href="/signup" className="font-semibold text-slate-100 hover:text-white">Create an account</a></>
        ) : mode === 'signup' ? (
          <>Already have an account? <a href="/login" className="font-semibold text-slate-100 hover:text-white">Sign in</a></>
        ) : (
          <>Remembered your password? <a href="/login" className="font-semibold text-slate-100 hover:text-white">Sign in</a></>
        )}
      </div>
    </form>
  );
}
