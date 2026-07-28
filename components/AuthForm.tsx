'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from './AuthProvider';
import { useLanguage } from '../lib/language/LanguageContext';

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
  const { t } = useLanguage();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setMessage(null);
    setIsSubmitting(true);

    try {
      if (mode === 'signup') {
        await signUp(email, password, name);
        setMessage(t('auth_email_verified_sent'));
      } else if (mode === 'forgot') {
        await resetPassword(email);
        setMessage(t('auth_reset_sent'));
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
          <label className="block text-sm font-medium text-slate-400">{t('auth_name_label')}</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={t('auth_name_placeholder')}
            required
            className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-violet-400"
          />
        </div>
      ) : null}

      <div>
        <label className="block text-sm font-medium text-slate-400">{t('auth_email_label')}</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={t('auth_email_placeholder')}
          required
          className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-violet-400"
        />
      </div>

      {mode !== 'forgot' ? (
        <div>
          <label className="block text-sm font-medium text-slate-400">{t('auth_password_label')}</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder={t('auth_password_placeholder')}
            required
            className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-violet-400"
          />
        </div>
      ) : null}

      {mode !== 'forgot' ? (
        <div className="flex items-center justify-end text-sm text-slate-400">
          <Link href="/forgot-password" className="font-semibold text-slate-200 transition hover:text-white">
            {t('auth_forgot_link')}
          </Link>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting || !isConfigured}
        className="w-full rounded-2xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {mode === 'login' ? t('auth_btn_login') : mode === 'signup' ? t('auth_btn_signup') : t('auth_btn_forgot')}
      </button>

      {mode !== 'forgot' ? (
        <>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="h-px flex-1 bg-slate-700" />
            <span>{t('auth_or')}</span>
            <span className="h-px flex-1 bg-slate-700" />
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isSubmitting || !isConfigured}
            className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-violet-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {t('auth_google')}
          </button>
        </>
      ) : null}

      <div className="text-center text-sm text-slate-400">
        {mode === 'login' ? (
          <>{t('auth_no_account')} <Link href="/signup" className="font-semibold text-slate-100 hover:text-white">{t('nav_signup')}</Link></>
        ) : mode === 'signup' ? (
          <>{t('auth_has_account')} <Link href="/login" className="font-semibold text-slate-100 hover:text-white">{t('nav_login')}</Link></>
        ) : (
          <>{t('auth_remember_password')} <Link href="/login" className="font-semibold text-slate-100 hover:text-white">{t('nav_login')}</Link></>
        )}
      </div>
    </form>
  );
}
