import type { Course } from '../types';

/* ── Gradient thumbnails for visual richness ──────────────── */
const gradients = [
  'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)',
  'linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #fb7185 100%)',
  'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%)',
  'linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ef4444 100%)',
  'linear-gradient(135deg, #10b981 0%, #14b8a6 50%, #06b6d4 100%)',
  'linear-gradient(135deg, #8b5cf6 0%, #d946ef 50%, #f43f5e 100%)',
  'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)',
  'linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)',
];

export const courses: Course[] = [
  /* ── 1. React Masterclass ─────────────────────────────────── */
  {
    id: 'course-react',
    slug: 'react-masterclass',
    title: 'React Masterclass: From Zero to Hero',
    description: 'Build modern, production-ready web applications with React 18, hooks, context, and best practices.',
    longDescription: 'This comprehensive course takes you from React fundamentals through advanced patterns like custom hooks, context architecture, performance optimization, and real-world project development. By the end, you\'ll be confident building production-grade SPAs.',
    thumbnail: gradients[0],
    category: 'Programming',
    tags: ['react', 'javascript', 'frontend', 'hooks', 'web development'],
    instructor: { name: 'Arjun Sharma', avatar: 'AS', bio: 'Senior frontend engineer with 8+ years building React applications at scale. Passionate about teaching modern web development.', title: 'Senior Frontend Engineer' },
    price: 0,
    rating: 4.8,
    reviewCount: 342,
    enrolledCount: 2840,
    duration: 720,
    level: 'beginner',
    status: 'published',
    createdAt: '2025-11-15T10:00:00Z',
    whatYoullLearn: ['React 18 fundamentals and JSX', 'Hooks: useState, useEffect, useReducer, useContext', 'Component design patterns and composition', 'State management with Context API', 'Performance optimization techniques', 'Building and deploying a real project'],
    requirements: ['Basic JavaScript knowledge', 'Familiarity with HTML/CSS', 'A code editor (VS Code recommended)'],
    curriculum: [
      {
        id: 'mod-r1',
        title: 'Getting Started with React',
        lessons: [
          { id: 'les-r1-1', title: 'What is React and Why Use It?', type: 'video', duration: 12, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [{ id: 'res-1', title: 'React Official Docs', url: 'https://react.dev', type: 'link' }], content: '' },
          { id: 'les-r1-2', title: 'Setting Up Your Development Environment', type: 'video', duration: 15, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [{ id: 'res-2', title: 'Setup Guide PDF', url: '#', type: 'pdf' }], content: '' },
          { id: 'les-r1-3', title: 'Your First React Component', type: 'video', duration: 18, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          {
            id: 'les-r1-4', title: 'React Basics Quiz', type: 'quiz', duration: 10, resources: [],
            quiz: {
              id: 'quiz-r1', title: 'React Basics', description: 'Test your understanding of React fundamentals.', passingScore: 70, timeLimitMinutes: 10,
              questions: [
                { id: 'q1', question: 'What is JSX?', options: [{ id: 'a', text: 'A JavaScript database' }, { id: 'b', text: 'A syntax extension for JavaScript' }, { id: 'c', text: 'A CSS framework' }, { id: 'd', text: 'A testing library' }], correctOptionId: 'b', explanation: 'JSX is a syntax extension that lets you write HTML-like markup inside JavaScript.' },
                { id: 'q2', question: 'Which hook manages state in a functional component?', options: [{ id: 'a', text: 'useEffect' }, { id: 'b', text: 'useContext' }, { id: 'c', text: 'useState' }, { id: 'd', text: 'useRef' }], correctOptionId: 'c', explanation: 'useState is the primary hook for managing component-level state.' },
                { id: 'q3', question: 'What does the virtual DOM do?', options: [{ id: 'a', text: 'Replaces the real DOM entirely' }, { id: 'b', text: 'Minimizes direct DOM manipulations for performance' }, { id: 'c', text: 'Stores data in the browser cache' }, { id: 'd', text: 'Compiles JSX to CSS' }], correctOptionId: 'b', explanation: 'The virtual DOM is an in-memory representation that React uses to diff and batch updates efficiently.' },
              ],
            },
          },
        ],
      },
      {
        id: 'mod-r2',
        title: 'Hooks Deep Dive',
        lessons: [
          { id: 'les-r2-1', title: 'useState and useEffect in Depth', type: 'video', duration: 22, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-r2-2', title: 'useReducer for Complex State', type: 'video', duration: 20, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-r2-3', title: 'Custom Hooks: Build Your Own', type: 'video', duration: 25, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [{ id: 'res-3', title: 'Custom Hooks Cheat Sheet', url: '#', type: 'pdf' }], content: '' },
          { id: 'les-r2-4', title: 'Understanding useRef and useMemo', type: 'text', duration: 15, resources: [], content: '## useRef\n\n`useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument. It persists across renders without causing re-renders.\n\n### Common Use Cases\n- Accessing DOM elements directly\n- Storing mutable values that don\'t trigger re-renders\n- Keeping track of previous values\n\n## useMemo\n\n`useMemo` memoizes the result of an expensive computation. It only recalculates when its dependencies change.\n\n```jsx\nconst expensiveResult = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n```\n\n### When to Use\n- Heavy calculations in render\n- Referential equality for objects/arrays passed to child components\n- Avoiding unnecessary re-computations' },
        ],
      },
      {
        id: 'mod-r3',
        title: 'Building a Real-World Project',
        lessons: [
          { id: 'les-r3-1', title: 'Project Architecture Planning', type: 'video', duration: 18, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-r3-2', title: 'API Integration and Data Fetching', type: 'video', duration: 30, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-r3-3', title: 'Deploying to Production', type: 'video', duration: 20, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [{ id: 'res-4', title: 'Deployment Checklist', url: '#', type: 'pdf' }], content: '' },
          {
            id: 'les-r3-4', title: 'Final Project Assignment', type: 'assignment', duration: 60, resources: [],
            assignment: { id: 'asgn-r1', title: 'Build a Task Manager App', description: 'Create a fully functional task management application with CRUD operations, local storage persistence, and a polished UI using what you\'ve learned in this course.', dueDate: '2026-08-15T23:59:59Z', maxScore: 100, submissions: [] },
          },
        ],
      },
    ],
  },

  /* ── 2. UI/UX Design Foundations ───────────────────────────── */
  {
    id: 'course-uiux',
    slug: 'ui-ux-design-foundations',
    title: 'UI/UX Design Foundations',
    description: 'Master the principles of user interface and user experience design to create beautiful, intuitive products.',
    longDescription: 'Learn visual hierarchy, color theory, typography, wireframing, prototyping, and user research methods. This course blends theory with hands-on projects using Figma to prepare you for real design work.',
    thumbnail: gradients[1],
    category: 'Design',
    tags: ['ui', 'ux', 'design', 'figma', 'wireframing', 'prototyping'],
    instructor: { name: 'Priya Kapoor', avatar: 'PK', bio: 'Lead product designer with 10 years of experience at top tech companies. Figma Community advocate.', title: 'Lead Product Designer' },
    price: 499,
    rating: 4.9,
    reviewCount: 218,
    enrolledCount: 1650,
    duration: 540,
    level: 'beginner',
    status: 'published',
    createdAt: '2025-12-01T10:00:00Z',
    whatYoullLearn: ['Design thinking methodology', 'Visual hierarchy and layout principles', 'Color theory and typography', 'Wireframing and prototyping in Figma', 'Conducting user research', 'Creating a complete design system'],
    requirements: ['No prior design experience needed', 'Figma account (free)'],
    curriculum: [
      {
        id: 'mod-d1',
        title: 'Design Thinking & Research',
        lessons: [
          { id: 'les-d1-1', title: 'Introduction to Design Thinking', type: 'video', duration: 14, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-d1-2', title: 'User Research Methods', type: 'video', duration: 20, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [{ id: 'res-d1', title: 'User Research Template', url: '#', type: 'pdf' }], content: '' },
          { id: 'les-d1-3', title: 'Creating User Personas', type: 'video', duration: 16, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
        ],
      },
      {
        id: 'mod-d2',
        title: 'Visual Design Principles',
        lessons: [
          { id: 'les-d2-1', title: 'Color Theory for Digital Products', type: 'video', duration: 18, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-d2-2', title: 'Typography Fundamentals', type: 'video', duration: 15, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-d2-3', title: 'Layout and Grid Systems', type: 'text', duration: 12, resources: [], content: '## Grid Systems in UI Design\n\nGrid systems provide structure and consistency to your layouts.\n\n### The 8-Point Grid\nAll spacing and sizing should be multiples of 8px. This creates visual rhythm and makes responsive design easier.\n\n### Column Grids\n- **Mobile**: 4 columns, 16px gutters\n- **Tablet**: 8 columns, 24px gutters  \n- **Desktop**: 12 columns, 24px gutters\n\n### Key Principles\n1. Alignment creates order\n2. Consistent spacing builds trust\n3. White space is not wasted space\n4. Hierarchy guides the eye' },
          {
            id: 'les-d2-4', title: 'Design Principles Quiz', type: 'quiz', duration: 8, resources: [],
            quiz: {
              id: 'quiz-d1', title: 'Visual Design Quiz', description: 'Test your design knowledge.', passingScore: 60, timeLimitMinutes: 8,
              questions: [
                { id: 'dq1', question: 'What does the 8-point grid system use as its base unit?', options: [{ id: 'a', text: '4px' }, { id: 'b', text: '8px' }, { id: 'c', text: '10px' }, { id: 'd', text: '16px' }], correctOptionId: 'b', explanation: 'The 8-point grid uses 8px as its base unit for all spacing and sizing.' },
                { id: 'dq2', question: 'Which color model is used for digital screens?', options: [{ id: 'a', text: 'CMYK' }, { id: 'b', text: 'Pantone' }, { id: 'c', text: 'RGB' }, { id: 'd', text: 'HSB only' }], correctOptionId: 'c', explanation: 'RGB (Red, Green, Blue) is the standard color model for screens.' },
              ],
            },
          },
        ],
      },
      {
        id: 'mod-d3',
        title: 'Prototyping with Figma',
        lessons: [
          { id: 'les-d3-1', title: 'Figma Interface Tour', type: 'video', duration: 20, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-d3-2', title: 'Building Wireframes', type: 'video', duration: 25, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-d3-3', title: 'Interactive Prototypes', type: 'video', duration: 22, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          {
            id: 'les-d3-4', title: 'Design Project: Mobile App', type: 'assignment', duration: 90, resources: [],
            assignment: { id: 'asgn-d1', title: 'Design a Mobile App Screen Set', description: 'Create a set of 5 mobile app screens (onboarding, home, detail, profile, settings) following the design principles covered in this course. Submit your Figma link.', dueDate: '2026-08-20T23:59:59Z', maxScore: 100, submissions: [] },
          },
        ],
      },
    ],
  },

  /* ── 3. Python for Data Science ────────────────────────────── */
  {
    id: 'course-python-ds',
    slug: 'python-data-science',
    title: 'Python for Data Science & Analytics',
    description: 'Learn Python programming with focus on data analysis, visualization, and machine learning fundamentals.',
    longDescription: 'Start with Python basics and progress to data manipulation with pandas, visualization with matplotlib, and introductory ML with scikit-learn. Includes hands-on datasets and real projects.',
    thumbnail: gradients[2],
    category: 'Data Science',
    tags: ['python', 'data science', 'pandas', 'machine learning', 'analytics'],
    instructor: { name: 'Dr. Kavita Singh', avatar: 'KS', bio: 'Data scientist and researcher with a PhD in Computer Science. Published 15+ papers on ML applications.', title: 'Senior Data Scientist' },
    price: 799,
    rating: 4.7,
    reviewCount: 156,
    enrolledCount: 1280,
    duration: 840,
    level: 'intermediate',
    status: 'published',
    createdAt: '2026-01-10T10:00:00Z',
    whatYoullLearn: ['Python fundamentals for data work', 'Data manipulation with pandas and NumPy', 'Data visualization with matplotlib and seaborn', 'Statistical analysis techniques', 'Intro to machine learning with scikit-learn', 'Real-world data project end to end'],
    requirements: ['Basic programming knowledge (any language)', 'High school mathematics', 'Python 3.9+ installed'],
    curriculum: [
      {
        id: 'mod-p1',
        title: 'Python Essentials for Data Science',
        lessons: [
          { id: 'les-p1-1', title: 'Python Data Types & Structures', type: 'video', duration: 20, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-p1-2', title: 'Functions, Lambdas, and Comprehensions', type: 'video', duration: 22, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-p1-3', title: 'Working with Files and APIs', type: 'video', duration: 18, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [{ id: 'res-p1', title: 'Python Cheat Sheet', url: '#', type: 'pdf' }], content: '' },
        ],
      },
      {
        id: 'mod-p2',
        title: 'Data Analysis with Pandas',
        lessons: [
          { id: 'les-p2-1', title: 'Introduction to Pandas DataFrames', type: 'video', duration: 25, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-p2-2', title: 'Data Cleaning and Transformation', type: 'video', duration: 28, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-p2-3', title: 'GroupBy, Merge, and Pivot Tables', type: 'video', duration: 22, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          {
            id: 'les-p2-4', title: 'Pandas Quiz', type: 'quiz', duration: 12, resources: [],
            quiz: {
              id: 'quiz-p1', title: 'Pandas Mastery', description: 'Test your pandas skills.', passingScore: 70, timeLimitMinutes: 12,
              questions: [
                { id: 'pq1', question: 'Which method reads a CSV file into a DataFrame?', options: [{ id: 'a', text: 'pd.load_csv()' }, { id: 'b', text: 'pd.read_csv()' }, { id: 'c', text: 'pd.open_csv()' }, { id: 'd', text: 'pd.import_csv()' }], correctOptionId: 'b', explanation: 'pd.read_csv() is the standard method for reading CSV files.' },
                { id: 'pq2', question: 'How do you handle missing values by removing rows?', options: [{ id: 'a', text: 'df.remove_na()' }, { id: 'b', text: 'df.dropna()' }, { id: 'c', text: 'df.clear_null()' }, { id: 'd', text: 'df.strip_missing()' }], correctOptionId: 'b', explanation: 'df.dropna() removes rows with missing values.' },
              ],
            },
          },
        ],
      },
      {
        id: 'mod-p3',
        title: 'Visualization & ML Intro',
        lessons: [
          { id: 'les-p3-1', title: 'Creating Charts with Matplotlib', type: 'video', duration: 20, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-p3-2', title: 'Statistical Visualizations with Seaborn', type: 'video', duration: 18, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-p3-3', title: 'Your First ML Model', type: 'video', duration: 30, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [{ id: 'res-p2', title: 'ML Starter Notebook', url: '#', type: 'doc' }], content: '' },
          {
            id: 'les-p3-4', title: 'Data Analysis Project', type: 'assignment', duration: 120, resources: [],
            assignment: { id: 'asgn-p1', title: 'Analyze a Real-World Dataset', description: 'Choose a public dataset, perform EDA, create at least 5 visualizations, and build a simple predictive model. Submit your Jupyter notebook.', dueDate: '2026-09-01T23:59:59Z', maxScore: 100, submissions: [] },
          },
        ],
      },
    ],
  },

  /* ── 4. TypeScript Deep Dive ───────────────────────────────── */
  {
    id: 'course-typescript',
    slug: 'typescript-deep-dive',
    title: 'TypeScript Deep Dive',
    description: 'Go beyond the basics with advanced TypeScript patterns, generics, type utilities, and real-world architecture.',
    longDescription: 'This course covers advanced TypeScript concepts including generics, conditional types, mapped types, declaration merging, and patterns for large-scale applications. Perfect for developers who know the basics and want mastery.',
    thumbnail: gradients[6],
    category: 'Programming',
    tags: ['typescript', 'javascript', 'types', 'generics', 'advanced'],
    instructor: { name: 'Vikram Desai', avatar: 'VD', bio: 'TypeScript contributor and architect of large-scale enterprise applications. Speaker at TSConf.', title: 'Principal Engineer' },
    price: 599,
    rating: 4.6,
    reviewCount: 98,
    enrolledCount: 760,
    duration: 480,
    level: 'advanced',
    status: 'published',
    createdAt: '2026-02-20T10:00:00Z',
    whatYoullLearn: ['Advanced generic patterns', 'Conditional and mapped types', 'Type inference strategies', 'Declaration merging and module augmentation', 'Enterprise architecture patterns', 'Building type-safe APIs'],
    requirements: ['Solid JavaScript knowledge', 'Basic TypeScript experience', 'Familiarity with Node.js'],
    curriculum: [
      {
        id: 'mod-t1',
        title: 'Advanced Type System',
        lessons: [
          { id: 'les-t1-1', title: 'Generics Beyond the Basics', type: 'video', duration: 25, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-t1-2', title: 'Conditional Types & infer', type: 'video', duration: 22, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-t1-3', title: 'Mapped Types & Template Literals', type: 'video', duration: 20, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-t1-4', title: 'Type Narrowing & Guards', type: 'text', duration: 15, resources: [], content: '## Type Narrowing\n\nTypeScript can narrow types through control flow analysis.\n\n### typeof guards\n```ts\nfunction process(value: string | number) {\n  if (typeof value === "string") {\n    // value is string here\n    return value.toUpperCase();\n  }\n  // value is number here\n  return value.toFixed(2);\n}\n```\n\n### Discriminated Unions\n```ts\ntype Shape =\n  | { kind: "circle"; radius: number }\n  | { kind: "square"; side: number };\n\nfunction area(shape: Shape): number {\n  switch (shape.kind) {\n    case "circle": return Math.PI * shape.radius ** 2;\n    case "square": return shape.side ** 2;\n  }\n}\n```' },
        ],
      },
      {
        id: 'mod-t2',
        title: 'Patterns & Architecture',
        lessons: [
          { id: 'les-t2-1', title: 'Type-safe Event Systems', type: 'video', duration: 28, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-t2-2', title: 'Builder and Factory Patterns', type: 'video', duration: 24, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-t2-3', title: 'Module Augmentation & Declaration Files', type: 'video', duration: 20, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
        ],
      },
    ],
  },

  /* ── 5. Next.js Full-Stack ─────────────────────────────────── */
  {
    id: 'course-nextjs',
    slug: 'nextjs-full-stack',
    title: 'Next.js Full-Stack Development',
    description: 'Build complete web applications with Next.js 14 — server components, API routes, authentication, and deployment.',
    longDescription: 'Learn to build full-stack applications with Next.js 14 App Router. Covers server components, streaming, API routes, database integration, authentication with NextAuth, and Vercel deployment.',
    thumbnail: gradients[3],
    category: 'Programming',
    tags: ['nextjs', 'react', 'fullstack', 'server components', 'vercel'],
    instructor: { name: 'Arjun Sharma', avatar: 'AS', bio: 'Senior frontend engineer with 8+ years building React applications at scale.', title: 'Senior Frontend Engineer' },
    price: 699,
    rating: 4.9,
    reviewCount: 184,
    enrolledCount: 1120,
    duration: 600,
    level: 'intermediate',
    status: 'published',
    createdAt: '2026-03-05T10:00:00Z',
    whatYoullLearn: ['Next.js 14 App Router architecture', 'Server and Client Components', 'API routes and server actions', 'Authentication with NextAuth', 'Database integration with Prisma', 'Deployment on Vercel'],
    requirements: ['React fundamentals', 'JavaScript/TypeScript basics', 'Node.js installed'],
    curriculum: [
      {
        id: 'mod-n1',
        title: 'Next.js Fundamentals',
        lessons: [
          { id: 'les-n1-1', title: 'App Router Architecture', type: 'video', duration: 20, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-n1-2', title: 'Server vs Client Components', type: 'video', duration: 22, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-n1-3', title: 'Routing and Layouts', type: 'video', duration: 18, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-n1-4', title: 'Data Fetching Patterns', type: 'video', duration: 25, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [{ id: 'res-n1', title: 'Data Fetching Guide', url: '#', type: 'pdf' }], content: '' },
        ],
      },
      {
        id: 'mod-n2',
        title: 'Full-Stack Features',
        lessons: [
          { id: 'les-n2-1', title: 'API Routes and Server Actions', type: 'video', duration: 24, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-n2-2', title: 'Database with Prisma', type: 'video', duration: 28, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-n2-3', title: 'Authentication with NextAuth', type: 'video', duration: 30, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
        ],
      },
      {
        id: 'mod-n3',
        title: 'Deployment & Production',
        lessons: [
          { id: 'les-n3-1', title: 'Performance Optimization', type: 'video', duration: 20, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-n3-2', title: 'Deploying to Vercel', type: 'video', duration: 15, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          {
            id: 'les-n3-3', title: 'Full-Stack Project', type: 'assignment', duration: 120, resources: [],
            assignment: { id: 'asgn-n1', title: 'Build a Blog Platform', description: 'Create a full-stack blog with Next.js — including posts, comments, auth, and deploy it. Submit your Vercel URL.', dueDate: '2026-09-15T23:59:59Z', maxScore: 100, submissions: [] },
          },
        ],
      },
    ],
  },

  /* ── 6. Digital Marketing Essentials ────────────────────────── */
  {
    id: 'course-marketing',
    slug: 'digital-marketing-essentials',
    title: 'Digital Marketing Essentials',
    description: 'Learn SEO, social media, email marketing, content strategy, and analytics to grow any business online.',
    longDescription: 'A practical guide to digital marketing covering search engine optimization, social media strategy, email campaigns, content marketing, and Google Analytics. Includes real case studies and campaign templates.',
    thumbnail: gradients[4],
    category: 'Business',
    tags: ['marketing', 'seo', 'social media', 'analytics', 'content'],
    instructor: { name: 'Neha Gupta', avatar: 'NG', bio: 'Growth marketing lead who has helped 50+ startups scale their digital presence. Google Ads certified.', title: 'Growth Marketing Lead' },
    price: 399,
    rating: 4.5,
    reviewCount: 89,
    enrolledCount: 920,
    duration: 360,
    level: 'beginner',
    status: 'published',
    createdAt: '2026-04-12T10:00:00Z',
    whatYoullLearn: ['SEO fundamentals and keyword research', 'Social media strategy and content calendars', 'Email marketing campaigns', 'Google Analytics setup and reporting', 'Content marketing frameworks', 'Paid advertising basics'],
    requirements: ['No prior marketing experience needed', 'Access to a computer with internet'],
    curriculum: [
      {
        id: 'mod-m1',
        title: 'SEO & Content Strategy',
        lessons: [
          { id: 'les-m1-1', title: 'Search Engine Optimization Basics', type: 'video', duration: 18, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-m1-2', title: 'Keyword Research Workshop', type: 'video', duration: 22, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [{ id: 'res-m1', title: 'Keyword Planner Template', url: '#', type: 'doc' }], content: '' },
          { id: 'les-m1-3', title: 'Content Marketing Framework', type: 'text', duration: 12, resources: [], content: '## The Content Marketing Funnel\n\n### Awareness (Top)\n- Blog posts, social media, SEO\n- Goal: attract new visitors\n\n### Consideration (Middle)\n- Case studies, webinars, guides\n- Goal: build trust and authority\n\n### Decision (Bottom)\n- Free trials, demos, testimonials\n- Goal: convert to customers\n\n### Retention\n- Email newsletters, community\n- Goal: keep customers engaged' },
        ],
      },
      {
        id: 'mod-m2',
        title: 'Social Media & Email',
        lessons: [
          { id: 'les-m2-1', title: 'Social Media Strategy', type: 'video', duration: 20, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-m2-2', title: 'Email Marketing Campaigns', type: 'video', duration: 18, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-m2-3', title: 'Analytics and Reporting', type: 'video', duration: 16, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
        ],
      },
    ],
  },

  /* ── 7. Graphic Design with Canva ──────────────────────────── */
  {
    id: 'course-canva',
    slug: 'graphic-design-canva',
    title: 'Graphic Design with Canva',
    description: 'Create stunning social media graphics, presentations, and brand materials using Canva\'s design tools.',
    longDescription: 'Learn professional graphic design skills using Canva. From social media templates to brand kits, this course teaches you to create polished visuals without needing Photoshop or Illustrator.',
    thumbnail: gradients[5],
    category: 'Design',
    tags: ['canva', 'graphic design', 'social media', 'branding', 'visual'],
    instructor: { name: 'Priya Kapoor', avatar: 'PK', bio: 'Lead product designer with 10 years of experience.', title: 'Lead Product Designer' },
    price: 0,
    rating: 4.4,
    reviewCount: 67,
    enrolledCount: 1430,
    duration: 240,
    level: 'beginner',
    status: 'published',
    createdAt: '2026-05-01T10:00:00Z',
    whatYoullLearn: ['Canva interface and tools mastery', 'Brand kit creation', 'Social media design templates', 'Presentation design', 'Print design basics', 'Animation and video in Canva'],
    requirements: ['Free Canva account', 'No design experience needed'],
    curriculum: [
      {
        id: 'mod-c1',
        title: 'Canva Foundations',
        lessons: [
          { id: 'les-c1-1', title: 'Getting Started with Canva', type: 'video', duration: 12, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-c1-2', title: 'Elements, Text, and Templates', type: 'video', duration: 18, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-c1-3', title: 'Creating Your Brand Kit', type: 'video', duration: 15, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
        ],
      },
      {
        id: 'mod-c2',
        title: 'Real-World Design Projects',
        lessons: [
          { id: 'les-c2-1', title: 'Social Media Graphics Pack', type: 'video', duration: 20, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-c2-2', title: 'Professional Presentations', type: 'video', duration: 16, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-c2-3', title: 'Animated Social Content', type: 'video', duration: 14, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
        ],
      },
    ],
  },

  /* ── 8. Linear Algebra for AI ──────────────────────────────── */
  {
    id: 'course-linear-algebra',
    slug: 'linear-algebra-for-ai',
    title: 'Linear Algebra for AI & Machine Learning',
    description: 'Build the mathematical foundation for AI with vectors, matrices, eigenvalues, and their applications.',
    longDescription: 'Understand the mathematics behind machine learning algorithms. Covers vectors, matrices, linear transformations, eigendecomposition, SVD, and PCA with intuitive explanations and Python implementations.',
    thumbnail: gradients[7],
    category: 'Mathematics',
    tags: ['mathematics', 'linear algebra', 'ai', 'machine learning', 'vectors'],
    instructor: { name: 'Dr. Ravi Patel', avatar: 'RP', bio: 'Mathematics professor with 15 years teaching experience. Specializes in applied mathematics for computer science.', title: 'Professor of Mathematics' },
    price: 299,
    rating: 4.7,
    reviewCount: 73,
    enrolledCount: 540,
    duration: 420,
    level: 'intermediate',
    status: 'published',
    createdAt: '2026-03-20T10:00:00Z',
    whatYoullLearn: ['Vectors and vector spaces', 'Matrix operations and transformations', 'Systems of linear equations', 'Eigenvalues and eigenvectors', 'SVD and PCA', 'Applications in machine learning'],
    requirements: ['High school algebra', 'Basic calculus knowledge helpful', 'Python for exercises (optional)'],
    curriculum: [
      {
        id: 'mod-la1',
        title: 'Vectors & Matrices',
        lessons: [
          { id: 'les-la1-1', title: 'Vectors in Machine Learning', type: 'video', duration: 20, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-la1-2', title: 'Matrix Operations', type: 'video', duration: 22, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-la1-3', title: 'Linear Transformations', type: 'video', duration: 25, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [{ id: 'res-la1', title: 'Linear Algebra Reference', url: '#', type: 'pdf' }], content: '' },
        ],
      },
      {
        id: 'mod-la2',
        title: 'Eigenvalues & Applications',
        lessons: [
          { id: 'les-la2-1', title: 'Eigenvalues and Eigenvectors', type: 'video', duration: 28, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-la2-2', title: 'SVD Explained', type: 'video', duration: 24, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          { id: 'les-la2-3', title: 'PCA for Dimensionality Reduction', type: 'video', duration: 22, videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA', resources: [], content: '' },
          {
            id: 'les-la2-4', title: 'Linear Algebra Final Quiz', type: 'quiz', duration: 15, resources: [],
            quiz: {
              id: 'quiz-la1', title: 'Linear Algebra Mastery', description: 'Test your linear algebra fundamentals.', passingScore: 60, timeLimitMinutes: 15,
              questions: [
                { id: 'lq1', question: 'What is the dot product of vectors [1,2,3] and [4,5,6]?', options: [{ id: 'a', text: '15' }, { id: 'b', text: '32' }, { id: 'c', text: '21' }, { id: 'd', text: '27' }], correctOptionId: 'b', explanation: '1×4 + 2×5 + 3×6 = 4 + 10 + 18 = 32' },
                { id: 'lq2', question: 'An eigenvalue λ satisfies which equation?', options: [{ id: 'a', text: 'Av = λv' }, { id: 'b', text: 'A + v = λ' }, { id: 'c', text: 'Av = v/λ' }, { id: 'd', text: 'A = λI' }], correctOptionId: 'a', explanation: 'Eigenvalues satisfy Av = λv, where v is the eigenvector.' },
              ],
            },
          },
        ],
      },
    ],
  },
];
