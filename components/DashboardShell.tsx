'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Menu, Bell, ChevronDown, Grid, BookOpen, CheckCircle2, ClipboardList, BarChart3, CalendarDays, Users, Settings, LayoutDashboard } from 'lucide-react';
import { useAuth, type ProfileRole } from './AuthProvider';
import { useNotifications } from '../lib/lms/hooks';
import NotificationBell from './lms/NotificationBell';
import DarkModeToggle from '../app/dark';

const navLinks = {
  student: [
    { href: '/dashboard/student', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/student/courses', label: 'My Courses', icon: BookOpen },
    { href: '/courses', label: 'Explore Courses', icon: BookOpen },
    { href: '/dashboard/student/path', label: 'Learning Path', icon: CheckCircle2 },
    { href: '/dashboard/student/progress', label: 'Progress', icon: BarChart3 },
    { href: '/dashboard/student/assignments', label: 'Assignments', icon: ClipboardList },
    { href: '/dashboard/student/tools', label: 'Study Tools', icon: Grid },
    { href: '/dashboard/student/profile', label: 'Profile', icon: Users },
    { href: '/dashboard/student/settings', label: 'Settings', icon: Settings },
  ],
  teacher: [
    { href: '/dashboard/teacher', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/teacher/courses', label: 'My Courses', icon: BookOpen },
    { href: '/dashboard/teacher/students', label: 'Students', icon: Users },
    { href: '/dashboard/teacher/assignments', label: 'Assignments', icon: ClipboardList },
    { href: '/dashboard/teacher/analytics', label: 'Analytics', icon: BarChart3 },
    { href: '/dashboard/teacher/schedule', label: 'Schedule', icon: CalendarDays },
    { href: '/dashboard/teacher/tools', label: 'Study Tools', icon: Grid },
    { href: '/dashboard/teacher/profile', label: 'Profile', icon: Users },
    { href: '/dashboard/teacher/settings', label: 'Settings', icon: Settings },
  ],
  admin: [
    { href: '/dashboard/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/admin/users', label: 'Manage Users', icon: Users },
    { href: '/dashboard/admin/students', label: 'Manage Students', icon: Users },
    { href: '/dashboard/admin/teachers', label: 'Manage Teachers', icon: Users },
    { href: '/dashboard/admin/courses', label: 'Manage Courses', icon: BookOpen },
    { href: '/dashboard/admin/analytics', label: 'Platform Analytics', icon: BarChart3 },
    { href: '/dashboard/admin/settings', label: 'Settings', icon: Settings },
  ],
};

type DashboardShellProps = {
  title: string;
  subtitle: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
  children: React.ReactNode;
};

export default function DashboardShell({ title, subtitle, breadcrumbs, children }: DashboardShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { profile, logout, user } = useAuth();
  const { notifications, unreadCount, markAsRead } = useNotifications(user?.uid);

  const links = useMemo(() => {
    if (profile?.role === 'teacher') return navLinks.teacher;
    if (profile?.role === 'admin') return navLinks.admin;
    return navLinks.student;
  }, [profile?.role]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="border-b border-slate-800/80 bg-slate-950/95 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="rounded-2xl border border-slate-800/70 bg-slate-900/90 p-2 text-slate-200 transition hover:border-violet-400 md:hidden">
              <Menu className="h-5 w-5" />
            </button>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">ShikshaSetu</p>
              <h1 className="text-xl font-semibold text-white">{title}</h1>
            </div>
          </div>

          {/* Mobile Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <DarkModeToggle />
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <NotificationBell
              notifications={notifications}
              unreadCount={unreadCount}
              onMarkRead={markAsRead}
            />
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 px-4 py-2 text-sm text-slate-200">
              {profile?.name ?? 'Learner'} • {profile?.role?.toUpperCase()}
            </div>
            <DarkModeToggle />
            <button onClick={() => logout()} className="rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400">
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className={menuOpen ? 'block rounded-[2rem] border border-slate-800/80 bg-slate-950/95 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.35)] md:block' : 'hidden rounded-[2rem] border border-slate-800/80 bg-slate-950/95 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.35)] md:block'}>
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Workspace</p>
              <p className="text-sm font-semibold text-white">{profile?.role === 'admin' ? 'Admin control' : profile?.role === 'teacher' ? 'Instructor hub' : 'Student space'}</p>
            </div>
          </div>
          <nav className="space-y-2">
            {links.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-2xl border border-slate-800/70 bg-slate-900/80 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-violet-400 hover:text-white">
                <item.icon className="mr-2 inline-block h-4 w-4" /> {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/85 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.35)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Breadcrumbs</p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-300">
                  {breadcrumbs.map((crumb, index) => (
                    <span key={crumb.label} className="inline-flex items-center gap-2">
                      {crumb.href ? <Link href={crumb.href} className="text-slate-300 transition hover:text-white">{crumb.label}</Link> : <span>{crumb.label}</span>}
                      {index < breadcrumbs.length - 1 ? <span className="text-slate-500">/</span> : null}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/90 px-4 py-3 text-sm text-slate-200">
                  <span className="block text-xs uppercase text-slate-500">Active</span>
                  <span className="font-semibold text-white">{title}</span>
                </div>
                <Link
                  href={profile?.role === 'admin' ? '/dashboard/admin/settings' : `/dashboard/${profile?.role || 'student'}/profile`}
                  className="flex items-center gap-2 rounded-full bg-slate-900/90 px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900"
                >
                  <ChevronDown className="h-4 w-4" /> Profile
                </Link>
              </div>
            </div>
            <p className="mt-4 text-slate-400">{subtitle}</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
