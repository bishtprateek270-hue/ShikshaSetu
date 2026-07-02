import { BookOpen, CalendarDays, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import FaqItem from '../components/FaqItem';
import NewsletterForm from '../components/NewsletterForm';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';

const features = [
  { title: 'Flexible learning paths', description: 'Follow a rhythm that fits your schedule and stay focused with guided progress.', icon: CalendarDays },
  { title: 'Live guidance', description: 'Connect with mentors and peers in real time whenever you need support.', icon: Sparkles },
  { title: 'Clear progress tracking', description: 'Keep milestones, feedback, and next steps organized in one clean workspace.', icon: ShieldCheck },
  { title: 'Helpful study resources', description: 'Access well-structured notes, prompts, and support material whenever you are ready.', icon: BookOpen }
];

const testimonials = [
  { name: 'A focused learner', role: 'Student', quote: 'Everything feels calmer and easier to follow when the experience is clear.' },
  { name: 'A supportive parent', role: 'Parent', quote: 'The dashboard makes it simple to see progress and stay involved without extra effort.' },
  { name: 'A growing educator', role: 'Educator', quote: 'It is easy to organize lessons and keep the learning flow consistent.' }
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
          <SectionHeading title="Built for calm, confident learning." subtitle="A thoughtful experience for students, parents, and educators." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-t border-slate-800/70 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Simple, modern experience</span>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">Learn at your own pace with a space that feels clear and motivating.</h2>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              Discover a platform designed to keep learning organized, support easy progress, and make each step feel manageable.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
                <p className="text-sm text-slate-400">Focused progress</p>
                <p className="mt-2 text-xl font-semibold text-white">Clear goals and steady momentum</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
                <p className="text-sm text-slate-400">Easy access</p>
                <p className="mt-2 text-xl font-semibold text-white">A smooth start in minutes</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-soft sm:p-10">
            <div className="space-y-6">
              <div className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-950/75 p-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Ready to begin</p>
                  <p className="mt-2 text-2xl font-semibold text-white">A welcoming place to start</p>
                </div>
                <GraduationCap className="h-9 w-9 text-violet-400" />
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl border border-slate-800 bg-slate-950/75 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-400">Weekly sessions</p>
                      <p className="mt-2 text-lg font-semibold text-white">Thoughtful guidance and support</p>
                    </div>
                    <span className="rounded-full bg-violet-500/10 px-3 py-1 text-sm font-semibold text-violet-200">Live</span>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-950/75 p-5">
                  <p className="text-sm text-slate-400">Learning library</p>
                  <p className="mt-2 text-lg font-semibold text-white">A growing set of practical resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="What learners appreciate most." subtitle="A calm experience that keeps momentum feeling light and steady." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} name={testimonial.name} role={testimonial.role} quote={testimonial.quote} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-t border-slate-800/70 px-6 py-16 sm:px-10 lg:px-16">
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
