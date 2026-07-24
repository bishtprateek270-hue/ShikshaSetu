import Link from 'next/link';
import { BarChart3, BookOpen, ClipboardList, FileText, MessagesSquare, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import FaqItem from '../components/FaqItem';
import NewsletterForm from '../components/NewsletterForm';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';

const features = [
  { title: 'AI Notes', description: 'Turn class material into structured summaries, flashcards, and revision points instantly.', icon: Sparkles },
  { title: 'AI Quiz Generator', description: 'Create adaptive quizzes from any topic, chapter, or uploaded notes in seconds.', icon: BookOpen },
  { title: 'PDF to Quiz', description: 'Upload a PDF and let the platform convert it into a study-ready quiz flow.', icon: FileText },
  { title: 'AI Doubt Solver', description: 'Get step-by-step explanations for confusing concepts and homework questions.', icon: MessagesSquare },
  { title: 'Progress Tracking', description: 'Monitor streaks, mastery, and completion trends with a clear dashboard view.', icon: BarChart3 },
  { title: 'Mock Tests', description: 'Practice with realistic timed assessments tailored to your learning goals.', icon: ClipboardList }
];

const faqs = [
  { question: 'How quickly can I get started?', answer: 'You can create an account and begin in just a few minutes.' },
  { question: 'Do you offer support during the learning journey?', answer: 'Yes. Helpful guidance is available whenever you need a quick answer or a nudge forward.' },
  { question: 'Is the experience easy to use on mobile?', answer: 'Yes. The experience is designed to feel smooth and clear across phones, tablets, and desktops.' }
];

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <Navbar />

      <HeroSection />

      <AnimatedSection id="features" className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Built for AI-powered study" subtitle="Turn every topic into an adaptive learning experience." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-t border-slate-800/70 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-6">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Built for focus</span>
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">From scattered notes to calm, confident prep.</h2>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                Students use ShikshaSetu to study smarter, convert PDFs into engaging quizzes, and stay on top of their goals.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/signup" className="rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
                  Get started free
                </Link>
                <Link href="/login" className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-400 hover:text-white">
                  Sign in
                </Link>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/90 p-6">
              <div className="rounded-[1.25rem] border border-slate-800 bg-slate-950/80 p-5 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Platform features</p>
                    <p className="mt-1 text-xl font-semibold text-white">Your AI study workspace</p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {['AI-powered notes', 'Adaptive quizzes', 'PDF to quiz', 'Doubt solver'].map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                      <p className="text-sm font-medium text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="dark px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-6">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Product preview</span>
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">Everything your study routine needs, built into one intelligent workspace.</h2>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                Discover a premium experience with adaptive quizzes, instant doubt support, and clear reports that help every session feel focused.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Adaptive quizzes', 'Instant doubt help', 'Smart analytics'].map((item) => (
                  <span key={item} className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/signup" className="rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
                  Create account
                </Link>
                <Link href="/login" className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-400 hover:text-white">
                  Sign in
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-5">
              <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/90 p-5 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Study tools</p>
                    <p className="mt-1 text-xl font-semibold text-white">AI study board</p>
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {['AI Notes', 'Mock Tests', 'PDF Upload', 'Progress Tracking'].map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                      <p className="text-sm font-medium text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>



      <AnimatedSection id="faqs" className="border-t border-slate-800/70 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Frequently asked questions" subtitle="Helpful answers for a smooth start." />
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="newsletter" className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-800 bg-slate-950/90 p-10 shadow-soft">
          <NewsletterForm />
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
