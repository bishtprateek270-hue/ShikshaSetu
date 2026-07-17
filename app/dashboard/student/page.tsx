'use client';

import { useMemo } from 'react';
import RoleProtectedRoute from '../../../components/RoleProtectedRoute';
import DashboardShell from '../../../components/DashboardShell';
import DashboardCard from '../../../components/DashboardCard';
import DashboardStatCard from '../../../components/DashboardStatCard';
import DashboardActions from '../../../components/DashboardActions';
import { useAuth } from '../../../components/AuthProvider';

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
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <DashboardStatCard key={stat.label} label={stat.label} value={stat.value} subtext={stat.subtext} />
              ))}
            </div>

            <DashboardCard title="Continue learning" description="Resume the course that’s furthest along and stay on track.">
              <div className="space-y-4">
                <div className="rounded-[1.5rem] border border-slate-800/80 bg-slate-900/80 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Current course</p>
                      <p className="mt-2 text-lg font-semibold text-white">Foundations of UI Design</p>
                    </div>
                    <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-violet-200">In progress</span>
                  </div>
                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-3/5 rounded-full bg-violet-500" />
                  </div>
                  <p className="mt-3 text-sm text-slate-400">65% complete — next lesson in 9 minutes</p>
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
                <li className="rounded-[1.5rem] border border-slate-800/80 bg-slate-900/80 p-4">
                  <p className="text-sm text-slate-400">Completed Quiz</p>
                  <p className="mt-2 text-base font-semibold text-white">Data Structures challenge</p>
                  <p className="mt-1 text-sm text-slate-500">1 hour ago</p>
                </li>
                <li className="rounded-[1.5rem] border border-slate-800/80 bg-slate-900/80 p-4">
                  <p className="text-sm text-slate-400">New assignment</p>
                  <p className="mt-2 text-base font-semibold text-white">Submit your UX research summary</p>
                  <p className="mt-1 text-sm text-slate-500">Due in 2 days</p>
                </li>
              </ul>
            </DashboardCard>
          </div>

          <div className="space-y-6">
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
              <div className="space-y-3 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-slate-100">Name:</span> {profile?.name}
                </p>
                <p>
                  <span className="font-semibold text-slate-100">Institute:</span> {profile?.institute}
                </p>
                <p>
                  <span className="font-semibold text-slate-100">Role:</span> {profile?.role}
                </p>
              </div>
            </DashboardCard>
          </div>
        </div>
      </DashboardShell>
    </RoleProtectedRoute>
  );
}
