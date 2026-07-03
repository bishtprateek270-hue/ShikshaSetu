'use client';

import ProtectedRoute from '../../components/ProtectedRoute';

export default function LearningPage() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen px-6 py-16 text-slate-100">
        <div className="mx-auto max-w-4xl rounded-xl border border-slate-800 bg-slate-900/90 p-8">
          <h1 className="text-2xl font-semibold">Learning</h1>
          <p className="mt-4 text-slate-300">Your learning modules and course content will appear here.</p>
        </div>
      </main>
    </ProtectedRoute>
  );
}
