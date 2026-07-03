'use client';

import { useMemo } from 'react';
import RoleProtectedRoute from '../../../components/RoleProtectedRoute';
import DashboardShell from '../../../components/DashboardShell';
import DashboardCard from '../../../components/DashboardCard';
import DashboardStatCard from '../../../components/DashboardStatCard';
import { useAuth } from '../../../components/AuthProvider';

export default function AdminDashboardPage() {
  const { profile } = useAuth();

  const statCards = useMemo(
    () => [
      { label: 'Total users', value: '1.2K', subtext: 'Active accounts across roles' },
      { label: 'Teachers onboarded', value: '128', subtext: 'Verified instructors' },
      { label: 'Courses live', value: '46', subtext: 'Published learning paths' },
      { label: 'Platform health', value: 'Excellent', subtext: 'System performance and uptime' },
    ],
    []
  );

  return (
    <RoleProtectedRoute allowedRoles={['admin']}>
      <DashboardShell title="Admin Dashboard" subtitle="Monitor users, courses, and platform analytics." breadcrumbs={[{ label: 'Dashboard' }]}> 
        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.85fr]">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
              {statCards.map((item) => (
                <DashboardStatCard key={item.label} label={item.label} value={item.value} subtext={item.subtext} />
              ))}
            </div>

            <DashboardCard title="Platform overview" description="Track performance signals and administrative actions.">
              <div className="grid gap-4">
                <div className="rounded-[1.5rem] border border-slate-800/80 bg-slate-900/80 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Engagement</p>
                  <div className="mt-4 flex items-end gap-3">
                    <div className="flex-1 space-y-2">
                      <div className="h-3 rounded-full bg-slate-800" />
                      <div className="h-3 rounded-full bg-slate-800/80" />
                      <div className="h-3 rounded-full bg-slate-800/60" />
                    </div>
                    <span className="text-sm font-semibold text-white">Stable</span>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4">
                    <p className="text-sm text-slate-400">Review alerts</p>
                    <p className="mt-2 text-lg font-semibold text-white">3 new issues</p>
                  </div>
                  <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4">
                    <p className="text-sm text-slate-400">Security checks</p>
                    <p className="mt-2 text-lg font-semibold text-white">All clear</p>
                  </div>
                </div>
              </div>
            </DashboardCard>

            <DashboardCard title="Admin actions" description="Common tasks you can complete right now.">
              <div className="grid gap-3 sm:grid-cols-2">
                {['Review new applications', 'Manage course catalog', 'Audit user roles', 'View reports'].map((item) => (
                  <button key={item} className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 text-left text-sm font-medium text-slate-100 transition hover:border-violet-400">
                    {item}
                  </button>
                ))}
              </div>
            </DashboardCard>
          </div>

          <div className="space-y-6">
            <DashboardCard title="Platform health" description="Status and performance indicators.">
              <div className="space-y-4 text-sm text-slate-300">
                <p><span className="font-semibold text-slate-100">Server status:</span> Online</p>
                <p><span className="font-semibold text-slate-100">New signups:</span> 42 today</p>
                <p><span className="font-semibold text-slate-100">Support tickets:</span> 5 open</p>
              </div>
            </DashboardCard>

            <DashboardCard title="Admin profile" description="Your administration workspace at a glance.">
              <div className="space-y-3 text-sm text-slate-300">
                <p><span className="font-semibold text-slate-100">Name:</span> {profile?.name}</p>
                <p><span className="font-semibold text-slate-100">Institute:</span> {profile?.institute}</p>
                <p><span className="font-semibold text-slate-100">Role:</span> {profile?.role}</p>
              </div>
            </DashboardCard>
          </div>
        </div>
      </DashboardShell>
    </RoleProtectedRoute>
  );
}
