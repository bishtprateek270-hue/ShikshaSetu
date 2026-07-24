'use client';

import Link from 'next/link';
import { useMemo, useState, useEffect, useRef } from 'react';
import { Menu, ChevronDown, Grid, BookOpen, CheckCircle2, ClipboardList, BarChart3, CalendarDays, Users, Settings, LayoutDashboard } from 'lucide-react';
import { useAuth } from './AuthProvider';
import { useNotifications } from '../lib/lms/hooks';
import NotificationBell from './lms/NotificationBell';
import DarkModeToggle from '../app/dark';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

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
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const { profile, logout, user } = useAuth();
  const { notifications, unreadCount, markAsRead } = useNotifications(user?.uid);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const links = useMemo(() => {
    if (profile?.role === 'teacher') return navLinks.teacher;
    if (profile?.role === 'admin') return navLinks.admin;
    return navLinks.student;
  }, [profile?.role]);

  const sidebarClass = menuOpen
    ? 'block rounded-[2rem] border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/90 p-4 shadow-soft dark:shadow-[0_24px_80px_rgba(15,23,42,0.35)] md:block transition-all duration-300'
    : 'hidden rounded-[2rem] border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/90 p-4 shadow-soft dark:shadow-[0_24px_80px_rgba(15,23,42,0.35)] md:block transition-all duration-300';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-350">
      <div className="border-b border-slate-100 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/85 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-full border border-slate-200 dark:border-slate-800/70 bg-white dark:bg-slate-900 p-2.5 text-slate-700 dark:text-slate-200 transition hover:border-indigo-400 dark:hover:border-indigo-500 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold">ShikshaSetu</p>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h1>
            </div>
          </div>

          {/* Mobile Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <DarkModeToggle />
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <DarkModeToggle />
            <NotificationBell
              notifications={notifications}
              unreadCount={unreadCount}
              onMarkRead={markAsRead}
            />
            
            {/* Avatar + name + dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 px-3 py-1.5 text-sm text-slate-705 dark:text-slate-200 hover:border-indigo-400 dark:hover:border-indigo-500 transition shadow-soft"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-orange-500 text-xs font-bold text-white uppercase shadow-sm">
                  {profile?.name ? profile.name.substring(0, 2) : 'LE'}
                </div>
                <span className="hidden font-medium sm:block max-w-[120px] truncate text-slate-700 dark:text-slate-200">
                  {profile?.name ?? 'Learner'}
                </span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </button>

              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-950 p-2 shadow-soft dark:shadow-[0_24px_80px_rgba(0,0,0,0.55)] focus:outline-none z-50">
                  <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800/50 mb-1">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Signed in as</p>
                    <p className="text-xs font-bold text-slate-800 dark:text-white truncate mt-0.5">{profile?.name ?? 'Learner'}</p>
                    <p className="text-[10px] text-indigo-500 dark:text-indigo-400 font-semibold uppercase mt-0.5">{profile?.role ?? 'Student'}</p>
                  </div>
                  
                  <Link
                    href={profile?.role === 'admin' ? '/dashboard/admin/settings' : `/dashboard/${profile?.role || 'student'}/profile`}
                    onClick={() => setProfileDropdownOpen(false)}
                    className="flex w-full items-center rounded-xl px-3 py-2 text-xs text-slate-600 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-900/60 hover:text-indigo-600 dark:hover:text-white transition"
                  >
                    My Profile
                  </Link>
                  
                  <Link
                    href={profile?.role === 'admin' ? '/dashboard/admin/settings' : `/dashboard/${profile?.role || 'student'}/settings`}
                    onClick={() => setProfileDropdownOpen(false)}
                    className="flex w-full items-center rounded-xl px-3 py-2 text-xs text-slate-600 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-900/60 hover:text-indigo-600 dark:hover:text-white transition"
                  >
                    Settings
                  </Link>
                  
                  <div className="my-1 border-t border-slate-100 dark:border-slate-800/50" />
                  
                  <button
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      logout();
                    }}
                    type="button"
                    className="flex w-full items-center rounded-xl px-3 py-2 text-xs font-semibold text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className={sidebarClass}>
          <div className="mb-6 flex items-center justify-between gap-3 px-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold">Workspace</p>
              <p className="text-sm font-bold text-slate-800 dark:text-white mt-0.5">{profile?.role === 'admin' ? 'Admin control' : profile?.role === 'teacher' ? 'Instructor hub' : 'Student space'}</p>
            </div>
          </div>
          <nav className="space-y-1">
            {links.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "flex items-center px-4 py-3 text-sm font-medium transition duration-150 ease-in-out border-y border-r border-transparent",
                    isActive
                      ? "bg-indigo-50/70 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border-l-4 border-l-indigo-500 rounded-r-2xl font-semibold shadow-sm"
                      : "text-slate-655 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:text-slate-900 dark:hover:text-white rounded-2xl border-l-4 border-l-transparent"
                  )}
                >
                  <item.icon className={clsx("mr-2.5 h-4 w-4", isActive ? "text-indigo-500 dark:text-indigo-400" : "text-slate-400 dark:text-slate-500")} /> {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <div className="space-y-6">
          <div className="rounded-2xl border border-indigo-500/10 bg-hero-gradient p-6 shadow-soft relative overflow-hidden">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between relative z-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-450 dark:text-slate-400 font-bold">Breadcrumbs</p>
                <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                  {breadcrumbs.map((crumb, index) => (
                    <span key={crumb.label} className="inline-flex items-center gap-1.5">
                      {crumb.href ? <Link href={crumb.href} className="text-slate-500 dark:text-slate-400 transition hover:text-indigo-600 dark:hover:text-indigo-300">{crumb.label}</Link> : <span className="text-slate-700 dark:text-slate-200">{crumb.label}</span>}
                      {index < breadcrumbs.length - 1 ? <span className="text-slate-350 dark:text-slate-600">/</span> : null}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-4 py-2 text-xs text-slate-600 dark:text-slate-300">
                  <span className="block text-[9px] uppercase text-slate-400 dark:text-slate-500 font-bold">Active</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">{title}</span>
                </div>
                <Link
                  href={profile?.role === 'admin' ? '/dashboard/admin/settings' : `/dashboard/${profile?.role || 'student'}/profile`}
                  className="flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-4 py-2.5 text-xs text-slate-700 dark:text-slate-200 transition hover:bg-slate-50 dark:hover:bg-slate-850 shadow-sm"
                >
                  <ChevronDown className="h-3 w-3 text-slate-400" /> View Profile
                </Link>
              </div>
            </div>
            <p className="mt-3.5 text-sm text-slate-600 dark:text-slate-350 relative z-10 leading-relaxed">{subtitle}</p>
            <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_right,rgba(99,102,241,0.4),transparent_70%)]" />
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
