'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as firebaseSignOut,
  updateProfile,
  type User,
} from 'firebase/auth';
import { getFirebaseAuth, googleProvider, isFirebaseConfigured } from '../lib/firebase';

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  isConfigured: boolean;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  sendVerificationEmail: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const auth = getFirebaseAuth();

    if (!auth || !isFirebaseConfigured()) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, name: string) => {
    const auth = getFirebaseAuth();
    if (!auth) {
      throw new Error('Firebase authentication is not configured yet.');
    }

    const { user: createdUser } = await createUserWithEmailAndPassword(auth, email, password);
    if (name) {
      await updateProfile(createdUser, { displayName: name });
    }
    await sendEmailVerification(createdUser);

    setUser(createdUser);
    router.push('/dashboard');
  };

  const signIn = async (email: string, password: string) => {
    const auth = getFirebaseAuth();
    if (!auth) {
      throw new Error('Firebase authentication is not configured yet.');
    }

    const { user: signedInUser } = await signInWithEmailAndPassword(auth, email, password);
    if (!signedInUser.emailVerified) {
      await sendEmailVerification(signedInUser);
    }

    setUser(signedInUser);
    router.push('/dashboard');
  };

  const signInWithGoogle = async () => {
    const auth = getFirebaseAuth();
    if (!auth) {
      throw new Error('Firebase authentication is not configured yet.');
    }

    const result = await signInWithPopup(auth, googleProvider);
    setUser(result.user);
    router.push('/dashboard');
  };

  const resetPassword = async (email: string) => {
    const auth = getFirebaseAuth();
    if (!auth) {
      throw new Error('Firebase authentication is not configured yet.');
    }

    await sendPasswordResetEmail(auth, email);
  };

  const sendVerificationEmail = async () => {
    if (!user) {
      throw new Error('No signed-in user available.');
    }

    await sendEmailVerification(user);
  };

  const logout = async () => {
    const auth = getFirebaseAuth();
    if (auth) {
      await firebaseSignOut(auth);
    }
    setUser(null);
    router.push('/');
  };

  const value = useMemo<AuthContextValue>(() => ({
    user,
    loading,
    isConfigured: isFirebaseConfigured(),
    signUp,
    signIn,
    signInWithGoogle,
    resetPassword,
    sendVerificationEmail,
    logout,
  }), [loading, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
