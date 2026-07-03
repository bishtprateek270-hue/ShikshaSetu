'use client';

import { useMemo } from 'react';
import RoleProtectedRoute from '../../../components/RoleProtectedRoute';
import DashboardShell from '../../../components/DashboardShell';
import DashboardCard from '../../../components/DashboardCard';
import DashboardStatCard from '../../../components/DashboardStatCard';
import DashboardActions from '../../../components/DashboardActions';
import { useAuth } from '../../../components/AuthProvider';

export default function TeacherDashboardPage() {
  const { profile } = useAuth();

  const stats = useMemo(
    () => [
      { label: 'Active classes', value: '6', subtext: 'Courses currently teaching' },
      { label: 'Assignments to grade', value: '8', subtext: 'Pending student work' },
      { label: 'Student engagement', value: '81%', subtext: 'Participation rate' },
      { label: 'Office hours', value: '2', subtext: 'Sessions remaining' },
    ],
    []
  );

  return (
    <RoleProtectedRoute allowedRoles={['teacher', 'admin']}>
      <DashboardShell title="Teacher Dashboard" subtitle="Manage your classroom, assignments, and analytics." breadcrumbs={[{ label: 'Dashboard' }]}>
        <div className="grid gap-6 xl:grid-cols-[1.45fr_0.95fr]">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <DashboardStatCard key={stat.label} label={stat.label} value={stat.value} subtext={stat.subtext} />
              ))}
            </div>

            <DashboardCard title="Quick actions" description="Common instructor workflows you can start right away.">
              <DashboardActions
                items={[
                  { label: 'Create assignment', description: 'Build a task for your class.' },
                  { label: 'Publish announcement', description: 'Share updates with students.' },
                  { label: 'Review grades', description: 'Check recent submissions.' },
                  { label: 'Open calendar', description: 'Review your teaching schedule.' },
                ]}
              />
            </DashboardCard>

            <DashboardCard title="Recent classroom activity" description="Latest student submissions and collaboration updates.">
              <ul className="space-y-4">
                <li className="rounded-[1.5rem] border border-slate-800/80 bg-slate-900/80 p-4">
                  <p className="text-sm text-slate-400">New submission</p>
                  <p className="mt-2 text-base font-semibold text-white">English assignment from 16 students</p>
                  <p className="mt-1 text-sm text-slate-500">Due review today</p>
                </li>
                <li className="rounded-[1.5rem] border border-slate-800/80 bg-slate-900/80 p-4">
                  <p className="text-sm text-slate-400">Engagement boost</p>
                  <p className="mt-2 text-base font-semibold text-white">Class participation rose by 9%</p>
                </li>
              </ul>
            </DashboardCard>
          </div>

          <div className="space-y-6">
            <DashboardCard title="Instructor tools" description="Tools that help you plan, grade, and teach effectively.">
              <div className="grid gap-3">
                <DashboardActions
                  items={[
                    { label: 'Lesson planner', description: 'Organize your upcoming sessions.' },
                    { label: 'Attendance tracker', description: 'Keep student participation in view.' },
                    { label: 'Resource library', description: 'Access teaching materials quickly.' },
                  ]}
                />
              </div>
            </DashboardCard>

            <DashboardCard title="Your profile" description="Your teaching role and school affiliation.">
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
