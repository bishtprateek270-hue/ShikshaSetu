'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10 space-y-4">
        <h3 className="text-3xl font-semibold text-white sm:text-4xl">Thanks for subscribing! 🎉</h3>
        <p className="max-w-xl mx-auto text-base text-slate-300">
          We have registered <span className="font-semibold text-violet-300">{email}</span>. You will receive updates as soon as new courses or study tools launch.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-violet-400/80">Stay informed</p>
        <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Join the ShikshaSetu newsletter.</h3>
        <p className="mt-4 text-base leading-7 text-slate-300">
          Receive course updates, learning tips, and premium offers crafted for ambitious learners.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 rounded-[1.75rem] border border-slate-800 bg-slate-950/95 p-6 sm:p-8">
        <label htmlFor="email" className="text-sm font-medium text-slate-300">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-3xl border border-slate-800 bg-slate-900/80 px-5 py-4 text-slate-100 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10"
        />
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-3xl bg-violet-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-violet-400"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
