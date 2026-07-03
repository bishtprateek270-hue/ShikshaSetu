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

  const title = mode === 'login' ? 'Continue with your email' : mode === 'signup' ? 'Set up your learning space' : 'Reset your password';
  const submitLabel = mode === 'login' ? 'Sign in' : mode === 'signup' ? 'Create account' : 'Send reset link';

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
    <div>
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-violet-400/80">{mode === 'forgot' ? 'Recover access' : mode === 'signup' ? 'Create account' : 'Sign in'}</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">{title}</h2>
      </div>

      {!isConfigured ? (
        <div className="mt-5 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
          Firebase is not configured yet. Add your environment variables to enable authentication.
        </div>
      ) : null}

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        {mode === 'signup' ? (
          <label className="block">
            <span className="text-sm font-medium text-slate-300">Full name</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Your name"
              className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10"
              required
            />
          </label>
        ) : null}

        <label className="block">
          <span className="text-sm font-medium text-slate-300">Email</span>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="name@example.com"
            className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10"
            required
          />
        </label>

        {mode !== 'forgot' ? (
          <label className="block">
            <span className="text-sm font-medium text-slate-300">Password</span>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder={mode === 'signup' ? 'Create a password' : 'Enter your password'}
              className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10"
              required
              minLength={6}
            />
          </label>
        ) : null}

        {mode === 'login' ? (
          <div className="flex items-center justify-between text-sm text-slate-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-700 bg-slate-900" />
              Remember me
            </label>
            <Link href="/forgot-password" className="text-violet-300 hover:text-violet-200">
              Forgot password?
            </Link>
          </div>
        ) : null}

        {error ? <p className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-3 text-sm text-rose-200">{error}</p> : null}
        {message ? <p className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-200">{message}</p> : null}

        <button type="submit" disabled={isSubmitting} className="w-full rounded-3xl bg-violet-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-70">
          {isSubmitting ? 'Please wait...' : submitLabel}
        </button>
      </form>

      {mode !== 'forgot' ? (
        <>
          <div className="my-6 flex items-center gap-3 text-sm text-slate-500">
            <div className="h-px flex-1 bg-slate-800" />
            <span>or</span>
            <div className="h-px flex-1 bg-slate-800" />
          </div>

          <button type="button" onClick={handleGoogleSignIn} disabled={isSubmitting} className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-6 py-4 text-base font-semibold text-slate-100 transition hover:border-violet-400 hover:text-white disabled:cursor-not-allowed disabled:opacity-70">
            Continue with Google
          </button>
        </>
      ) : null}

      <p className="mt-6 text-center text-sm text-slate-400">
        {mode === 'login' ? (
          <>
            New here?{' '}
            <Link href="/signup" className="font-medium text-white hover:text-violet-300">
              Create an account
            </Link>
          </>
        ) : mode === 'signup' ? (
          <>
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-white hover:text-violet-300">
              Sign in
            </Link>
          </>
        ) : (
          <>
            Back to{' '}
            <Link href="/login" className="font-medium text-white hover:text-violet-300">
              sign in
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
