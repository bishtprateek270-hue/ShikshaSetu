import type { AssignmentSubmission } from '../types';

export type TeacherSubmission = AssignmentSubmission & {
  courseId: string;
  courseTitle: string;
  assignmentId: string;
  assignmentTitle: string;
  studentName: string;
  studentEmail: string;
  status: 'graded' | 'ungraded';
};

export const mockSubmissions: TeacherSubmission[] = [
  {
    id: 'sub-1',
    userId: 'student-aarav',
    courseId: 'course-react',
    courseTitle: 'React Masterclass: From Zero to Hero',
    assignmentId: 'asgn-r1',
    assignmentTitle: 'Build a Task Manager App',
    studentName: 'Aarav Mehta',
    studentEmail: 'aarav.mehta@example.com',
    content: `Here is my React Task Manager application.
Features implemented:
1. Add, edit, toggle, and delete tasks (CRUD operations).
2. Filter tasks by status: All, Active, Completed.
3. Persisted in localStorage so tasks remain on page refresh.
4. Smooth transitions using simple CSS animations.

Figma mockups were followed closely, and I used a custom hook useLocalStorage to handle the persistence logic. Let me know what you think!`,
    submittedAt: '2026-07-13T18:22:00Z',
    status: 'ungraded',
  },
  {
    id: 'sub-2',
    userId: 'student-sneha',
    courseId: 'course-uiux',
    courseTitle: 'UI/UX Design Foundations',
    assignmentId: 'asgn-d1',
    assignmentTitle: 'Design a Mobile App Screen Set',
    studentName: 'Sneha Rao',
    studentEmail: 'sneha.rao@example.com',
    content: `Here is the link to my Figma project for the Mobile App Screen Set:
https://figma.com/file/mock-mobile-app-design-sneha-rao

Included screens:
- Onboarding (3 steps onboarding flow with clear calls to action)
- Authentication (Login/Register with error states)
- Home (Dashboard with category scroll and active study metrics card)
- Course Details (Curriculum accordion and checkout CTA)
- Profile Settings (Profile details, bookmarks lists, notifications toggle)

I used an 8pt grid system. Font sizes conform to a strict hierarchy: H1 (24px), Subhead (16px), Body (14px), and Captions (12px). Color palette is built around primary indigo and dark slate themes to align with ShikshaSetu styles.`,
    submittedAt: '2026-07-12T14:45:00Z',
    status: 'ungraded',
  },
  {
    id: 'sub-3',
    userId: 'student-rahul',
    courseId: 'course-react',
    courseTitle: 'React Masterclass: From Zero to Hero',
    assignmentId: 'asgn-r1',
    assignmentTitle: 'Build a Task Manager App',
    studentName: 'Rahul Verma',
    studentEmail: 'rahul.verma@example.com',
    content: `I've finished building the Task Manager application.
I used a basic reducer function for state management instead of multiple useState hooks.
The app supports adding tasks, editing their text inline, deleting them, and toggling completion.
GitHub Link: https://github.com/rahulv/react-task-manager
Deployment: https://rahulv-tasks.vercel.app`,
    submittedAt: '2026-07-10T11:30:00Z',
    status: 'graded',
    score: 95,
    feedback: 'Excellent work Rahul! The state management using useReducer is clean and robust. Nice job persisting it in localStorage and deploying it on Vercel.',
  },
  {
    id: 'sub-4',
    userId: 'student-aarav',
    courseId: 'course-python-ds',
    courseTitle: 'Python for Data Science & Analytics',
    assignmentId: 'asgn-p1',
    assignmentTitle: 'Analyze a Real-World Dataset',
    studentName: 'Aarav Mehta',
    studentEmail: 'aarav.mehta@example.com',
    content: `I chose the Kaggle 'World Happiness Report' dataset for this project.
Analysis notebook link: https://github.com/aaravm/happiness-analysis/blob/main/happiness.ipynb
Key Insights:
1. Social support and GDP per capita have the highest correlation with happiness score.
2. Generosity and perceptions of corruption have lower direct correlation.
3. Grouped countries by region to discover European and North American countries rank highest in average scores.

Created visualizations: Correlation heatmap, GDP vs Happiness scatter plot, Average Happiness per region bar chart, and country rank distribution plot.`,
    submittedAt: '2026-07-09T08:15:00Z',
    status: 'ungraded',
  },
];
