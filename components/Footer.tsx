import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/95 px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.7fr_0.7fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold text-white">ShikshaSetu</h2>
            <p className="mt-4 max-w-xl text-slate-400 leading-7">
              An AI-powered learning platform that helps students turn notes, PDFs, and practice into smarter, calmer progress.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Product</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <Link href="#features" className="block hover:text-white">AI Notes</Link>
              <Link href="#features" className="block hover:text-white">AI Quiz</Link>
              <Link href="#features" className="block hover:text-white">Analytics</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Resources</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <Link href="/#faqs" className="block hover:text-white">FAQs</Link>
              <Link href="/#features" className="block hover:text-white">Features</Link>
              <Link href="/#newsletter" className="block hover:text-white">Updates</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Company</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <Link href="/about" className="block hover:text-white">About</Link>
              <Link href="/contact" className="block hover:text-white">Contact</Link>
              <Link href="/about" className="block hover:text-white">Careers</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Legal</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <Link href="/privacy" className="block hover:text-white">Privacy</Link>
              <Link href="/terms" className="block hover:text-white">Terms</Link>
              <Link href="/terms" className="block hover:text-white">Cookies</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800/70 pt-6 text-sm text-slate-500">
          © 2026 ShikshaSetu. Crafted for modern learning experiences.
        </div>
      </div>
    </footer>
  );
}
