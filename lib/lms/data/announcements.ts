export type Announcement = {
  id: string;
  courseId: string;
  courseTitle: string;
  title: string;
  message: string;
  createdAt: string;
};

export const mockAnnouncements: Announcement[] = [
  {
    id: 'ann-1',
    courseId: 'course-react',
    courseTitle: 'React Masterclass: From Zero to Hero',
    title: 'Assignment Deadline Extension',
    message: 'Hello everyone! The deadline for the Task Manager App project has been extended by three days. You now have until August 18th to submit your source code and links. Please make sure all CRUD actions are functioning correctly and that your styles are clean.',
    createdAt: '2026-07-13T10:00:00Z',
  },
  {
    id: 'ann-2',
    courseId: 'course-uiux',
    courseTitle: 'UI/UX Design Foundations',
    title: 'Figma Review Session',
    message: 'Hi class, I have posted a new video guide on using Figma Auto Layout under the resources tab. We will also host a Q&A session tomorrow at 4 PM to review design choices for mobile screens.',
    createdAt: '2026-07-11T12:30:00Z',
  },
  {
    id: 'ann-3',
    courseId: 'course-react',
    courseTitle: 'React Masterclass: From Zero to Hero',
    title: 'Welcome to the course!',
    message: 'Welcome all! In this course, we will walk through building real frontend architectures. Be sure to check the curriculum and install Node.js + VS Code to get started on Module 1.',
    createdAt: '2026-05-10T08:30:00Z',
  },
];
