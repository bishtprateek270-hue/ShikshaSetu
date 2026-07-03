"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthForm from '../../components/AuthForm';
import AuthPageShell from '../../components/AuthPageShell';
import { useAuth } from '../../components/AuthProvider';

export default function LoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace('/dashboard');
    }
  }, [loading, user, router]);

  return (
    <AuthPageShell accentTitle="Quick access" title="Welcome back" description="Sign in to continue your learning journey with a calm, simple experience.">
      <AuthForm mode="login" />
    </AuthPageShell>
  );
}
