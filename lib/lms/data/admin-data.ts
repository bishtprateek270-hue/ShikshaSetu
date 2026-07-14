export type AdminUser = {
  uid: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
  institute: string;
  onboardingComplete: boolean;
  createdAt: string;
  status: 'active' | 'suspended';
};

export type PlatformIssue = {
  id: string;
  title: string;
  description: string;
  reporterName: string;
  reporterEmail: string;
  severity: 'low' | 'medium' | 'high';
  status: 'open' | 'resolved';
  createdAt: string;
};

export const mockAdminUsers: AdminUser[] = [
  {
    uid: 'student-aarav',
    name: 'Aarav Mehta',
    email: 'aarav.mehta@example.com',
    role: 'student',
    institute: 'IIT Delhi',
    onboardingComplete: true,
    createdAt: '2026-05-01T10:00:00Z',
    status: 'active',
  },
  {
    uid: 'student-sneha',
    name: 'Sneha Rao',
    email: 'sneha.rao@example.com',
    role: 'student',
    institute: 'Christ University',
    onboardingComplete: true,
    createdAt: '2026-06-01T08:30:00Z',
    status: 'active',
  },
  {
    uid: 'student-rahul',
    name: 'Rahul Verma',
    email: 'rahul.verma@example.com',
    role: 'student',
    institute: 'NIT Jaipur',
    onboardingComplete: true,
    createdAt: '2026-04-10T12:00:00Z',
    status: 'active',
  },
  {
    uid: 'teacher-arjun',
    name: 'Arjun Sharma',
    email: 'arjun.sharma@example.com',
    role: 'teacher',
    institute: 'ShikshaSetu frontend School',
    onboardingComplete: true,
    createdAt: '2525-11-10T09:00:00Z',
    status: 'active',
  },
  {
    uid: 'teacher-priya',
    name: 'Priya Kapoor',
    email: 'priya.kapoor@example.com',
    role: 'teacher',
    institute: 'National Design Institute',
    onboardingComplete: true,
    createdAt: '2025-11-20T10:00:00Z',
    status: 'active',
  },
  {
    uid: 'admin-main',
    name: 'Prateek Bisht',
    email: 'prateek.bisht@example.com',
    role: 'admin',
    institute: 'ShikshaSetu Headquarters',
    onboardingComplete: true,
    createdAt: '2026-01-01T00:00:00Z',
    status: 'active',
  },
];

export const mockPlatformIssues: PlatformIssue[] = [
  {
    id: 'iss-1',
    title: 'Video Lesson Playback Timeout',
    description: 'A few students reported the video lesson for React Masterclass Module 2 Lesson 1 fails to load on mobile connections.',
    reporterName: 'Aarav Mehta',
    reporterEmail: 'aarav.mehta@example.com',
    severity: 'medium',
    status: 'open',
    createdAt: '2026-07-13T15:30:00Z',
  },
  {
    id: 'iss-2',
    title: 'Certificate Printing Alignment',
    description: 'The print view of certificates overlaps the course title on Safari browsers.',
    reporterName: 'Sneha Rao',
    reporterEmail: 'sneha.rao@example.com',
    severity: 'low',
    status: 'open',
    createdAt: '2026-07-12T11:00:00Z',
  },
  {
    id: 'iss-3',
    title: 'Database connection delay during peak hours',
    description: 'Daily query timeouts observed in analytics collection around 8 PM IST.',
    reporterName: 'System Monitor',
    reporterEmail: 'admin@shikshasetu.com',
    severity: 'high',
    status: 'resolved',
    createdAt: '2026-07-10T20:05:00Z',
  },
];
