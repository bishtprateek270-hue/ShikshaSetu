import type { Enrollment, Note, Bookmark, Notification, Certificate } from '../types';

/* ── Mock Enrollments ─────────────────────────────────────── */
export const mockEnrollments: Enrollment[] = [
  {
    id: 'enr-1',
    userId: 'mock-user',
    courseId: 'course-react',
    progress: 65,
    completedLessons: ['les-r1-1', 'les-r1-2', 'les-r1-3', 'les-r1-4', 'les-r2-1', 'les-r2-2', 'les-r2-3'],
    currentLessonId: 'les-r2-4',
    enrolledAt: '2026-05-10T08:00:00Z',
    lastAccessedAt: '2026-07-13T14:30:00Z',
    certificateEarned: false,
  },
  {
    id: 'enr-2',
    userId: 'mock-user',
    courseId: 'course-uiux',
    progress: 30,
    completedLessons: ['les-d1-1', 'les-d1-2', 'les-d1-3'],
    currentLessonId: 'les-d2-1',
    enrolledAt: '2026-06-01T10:00:00Z',
    lastAccessedAt: '2026-07-12T09:15:00Z',
    certificateEarned: false,
  },
  {
    id: 'enr-3',
    userId: 'mock-user',
    courseId: 'course-canva',
    progress: 100,
    completedLessons: ['les-c1-1', 'les-c1-2', 'les-c1-3', 'les-c2-1', 'les-c2-2', 'les-c2-3'],
    currentLessonId: 'les-c2-3',
    enrolledAt: '2026-04-15T10:00:00Z',
    lastAccessedAt: '2026-06-20T16:00:00Z',
    certificateEarned: true,
  },
];

/* ── Mock Notes ───────────────────────────────────────────── */
export const mockNotes: Note[] = [
  {
    id: 'note-1',
    userId: 'mock-user',
    courseId: 'course-react',
    lessonId: 'les-r1-1',
    content: 'React uses a virtual DOM to minimize direct DOM manipulations. This is key to its performance advantage over vanilla JS for complex UIs.',
    createdAt: '2026-05-10T09:30:00Z',
    updatedAt: '2026-05-10T09:30:00Z',
  },
  {
    id: 'note-2',
    userId: 'mock-user',
    courseId: 'course-react',
    lessonId: 'les-r2-1',
    content: 'useEffect cleanup function runs before the component unmounts AND before every re-execution of the effect. Important for avoiding memory leaks with subscriptions.',
    createdAt: '2026-06-05T11:00:00Z',
    updatedAt: '2026-06-05T11:00:00Z',
  },
  {
    id: 'note-3',
    userId: 'mock-user',
    courseId: 'course-uiux',
    lessonId: 'les-d1-2',
    content: 'User interviews should be structured but flexible. Always ask open-ended questions to avoid leading the participant.',
    createdAt: '2026-06-10T14:00:00Z',
    updatedAt: '2026-06-10T14:00:00Z',
  },
];

/* ── Mock Bookmarks ───────────────────────────────────────── */
export const mockBookmarks: Bookmark[] = [
  {
    id: 'bm-1',
    userId: 'mock-user',
    courseId: 'course-react',
    lessonId: 'les-r2-3',
    lessonTitle: 'Custom Hooks: Build Your Own',
    courseTitle: 'React Masterclass: From Zero to Hero',
    createdAt: '2026-06-06T10:00:00Z',
  },
  {
    id: 'bm-2',
    userId: 'mock-user',
    courseId: 'course-uiux',
    lessonId: 'les-d2-3',
    lessonTitle: 'Layout and Grid Systems',
    courseTitle: 'UI/UX Design Foundations',
    createdAt: '2026-06-12T15:00:00Z',
  },
];

/* ── Mock Notifications ───────────────────────────────────── */
export const mockNotifications: Notification[] = [
  {
    id: 'notif-1',
    userId: 'mock-user',
    type: 'enrollment',
    title: 'Welcome to React Masterclass!',
    message: 'You have successfully enrolled in React Masterclass: From Zero to Hero. Start learning now!',
    read: true,
    createdAt: '2026-05-10T08:00:00Z',
    linkUrl: '/learn/course-react',
  },
  {
    id: 'notif-2',
    userId: 'mock-user',
    type: 'assignment',
    title: 'New Assignment Available',
    message: 'A new assignment "Build a Task Manager App" is now available in your React course.',
    read: false,
    createdAt: '2026-07-12T10:00:00Z',
    linkUrl: '/learn/course-react',
  },
  {
    id: 'notif-3',
    userId: 'mock-user',
    type: 'certificate',
    title: 'Certificate Earned! 🎉',
    message: 'Congratulations! You completed Graphic Design with Canva and earned your certificate.',
    read: false,
    createdAt: '2026-06-20T16:00:00Z',
    linkUrl: '/learn/course-canva/certificate',
  },
  {
    id: 'notif-4',
    userId: 'mock-user',
    type: 'quiz',
    title: 'Quiz Score: 90%',
    message: 'You scored 90% on the React Basics quiz. Great work!',
    read: true,
    createdAt: '2026-05-15T12:00:00Z',
  },
  {
    id: 'notif-5',
    userId: 'mock-user',
    type: 'general',
    title: 'New Course Available',
    message: 'Check out our latest course: TypeScript Deep Dive — now available in the catalog.',
    read: false,
    createdAt: '2026-07-10T09:00:00Z',
    linkUrl: '/courses/typescript-deep-dive',
  },
];

/* ── Mock Certificates ────────────────────────────────────── */
export const mockCertificates: Certificate[] = [
  {
    id: 'cert-1',
    userId: 'mock-user',
    courseId: 'course-canva',
    courseName: 'Graphic Design with Canva',
    userName: 'Student User',
    earnedAt: '2026-06-20T16:00:00Z',
    certificateNumber: 'SS-AK7F-BX2Q-MP9R',
  },
];
