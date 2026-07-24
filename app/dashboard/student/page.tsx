'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import RoleProtectedRoute from '../../../components/RoleProtectedRoute';
import DashboardShell from '../../../components/DashboardShell';
import DashboardCard from '../../../components/DashboardCard';
import DashboardStatCard from '../../../components/DashboardStatCard';
import DashboardActions from '../../../components/DashboardActions';
import { useAuth } from '../../../components/AuthProvider';
import DonutChart from '../../../components/lms/DonutChart';
import MiniCalendar from '../../../components/lms/MiniCalendar';

export default function StudentDashboardPage() {
  const { profile } = useAuth();

  const stats = useMemo(
    () => [
      { label: 'Active courses', value: '5', subtext: 'Remaining study topics' },
      { label: 'Weekly progress', value: '74%', subtext: 'Completed this week' },
      { label: 'Assignments due', value: '2', subtext: 'Due in 3 days' },
      { label: 'Study streak', value: '12 days', subtext: 'Last login streak' },
    ],
    []
  );

  return (
    <RoleProtectedRoute allowedRoles={['student']}>
      <DashboardShell title="Student Dashboard" subtitle="Track courses, progress, and activities in one learning hub." breadcrumbs={[{ label: 'Dashboard' }]}>
        <div className="grid gap-6 xl:grid-cols-[1.45fr_0.95fr]">
          <div className="space-y-6">
            
            {/* Promo banner section using bg-hero-gradient */}
            <div className="rounded-2xl bg-hero-gradient border border-indigo-500/10 p-6 relative overflow-hidden shadow-soft">
              <div className="relative z-10 max-w-xl">
                <span className="inline-flex rounded-full bg-indigo-500/10 dark:bg-indigo-950/40 px-3 py-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-3 uppercase tracking-wider">
                  New Feature
                </span>
                <h3 className="text-xl font-bold text-slate-905 dark:text-white">AI Study Buddy is Live!</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Boost your grades with our new automated study tools. Generate interactive practice tests, quick flashcard decks, and summarized study notes in seconds.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/dashboard/student/tools"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-2.5 text-xs font-bold text-white shadow-md hover:opacity-90 transition-all hover:scale-[1.02]"
                  >
                    Launch Study Tools
                  </Link>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_right,rgba(236,72,153,0.3),transparent_70%)]" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <DashboardStatCard key={stat.label} label={stat.label} value={stat.value} subtext={stat.subtext} />
              ))}
            </div>

            <DashboardCard title="Continue learning" description="Resume the course that’s furthest along and stay on track.">
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">Current course</p>
                      <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white">Foundations of UI Design</p>
                    </div>
                    <span className="rounded-full bg-indigo-500/10 dark:bg-indigo-950/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-300">In progress</span>
                  </div>
                  <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-400" />
                  </div>
                  <p className="mt-3 text-xs font-medium text-slate-500 dark:text-slate-400">65% complete — next lesson in 9 minutes</p>
                </div>
                <DashboardActions
                  items={[
                    { label: 'Resume course', description: 'Jump directly back into your learning path.', href: '/dashboard/student/courses' },
                    { label: 'Open study tools', description: 'Access notes, cards, and practice flows.', href: '/dashboard/student/tools' },
                  ]}
                />
              </div>
            </DashboardCard>

            <DashboardCard title="Recent activity" description="Your latest study milestones and task updates.">
              <ul className="space-y-4">
                <li className="rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 p-4 border-l-4 border-l-indigo-500 pl-5">
                  <p className="text-xs uppercase tracking-wider font-semibold text-slate-450 dark:text-slate-500">Completed Quiz</p>
                  <p className="mt-1.5 text-base font-bold text-slate-900 dark:text-white">Data Structures challenge</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">1 hour ago</p>
                </li>
                <li className="rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 p-4 border-l-4 border-l-pink-500 pl-5">
                  <p className="text-xs uppercase tracking-wider font-semibold text-slate-455 dark:text-slate-500">New assignment</p>
                  <p className="mt-1.5 text-base font-bold text-slate-900 dark:text-white">Submit your UX research summary</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Due in 2 days</p>
                </li>
              </ul>
            </DashboardCard>
          </div>

          <div className="space-y-6">
            <DashboardCard title="Syllabus Progress" description="Your target completion rates.">
              <DonutChart
                value={68}
                data={[
                  { label: 'Completed', value: 68, color: '#6366F1' },
                  { label: 'In Progress', value: 20, color: '#EC4899' },
                  { label: 'Unstarted', value: 12, color: '#94A3B8' },
                ]}
              />
            </DashboardCard>

            <DashboardCard title="Study tools" description="Helpful resources to keep learning efficient.">
              <div className="grid gap-3">
                <DashboardActions
                  items={[
                    { label: 'Flashcards', description: 'Review concepts with fast memory cycles.', href: '/dashboard/student/tools?tab=summary' },
                    { label: 'Practice tests', description: 'Check readiness with quick quizzes.', href: '/dashboard/student/tools?tab=quiz' },
                    { label: 'Notes library', description: 'Access saved insights and summaries.', href: '/dashboard/student/tools?tab=summary' },
                  ]}
                />
              </div>
            </DashboardCard>

            <DashboardCard title="Profile snapshot" description="Your enrolled role and institution details.">
              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <p>
                  <span className="font-semibold text-slate-700 dark:text-slate-100">Name:</span> {profile?.name}
                </p>
                <p>
                  <span className="font-semibold text-slate-700 dark:text-slate-100">Institute:</span> {profile?.institute}
                </p>
                <p>
                  <span className="font-semibold text-slate-700 dark:text-slate-100">Role:</span> {profile?.role}
                </p>
              </div>
            </DashboardCard>

            <MiniCalendar highlightedDays={[8, 15, 29]} />
          </div>
        </div>
      </DashboardShell>
    </RoleProtectedRoute>
  );
}
