import type { QuizQuestion } from '../lms/types';

export type FallbackChatResponse = {
  reply: string;
};

export type FallbackQuizResponse = {
  questions: QuizQuestion[];
};

export type FallbackSummaryResponse = {
  summary: string;
  takeaways: string[];
  flashcards: { front: string; back: string }[];
};

export type FallbackPlanItem = {
  week: string;
  title: string;
  tasks: string[];
};

export type FallbackPlanResponse = {
  plan: FallbackPlanItem[];
};

/* ── Fallback Chat / Tutor ────────────────────────────────── */

export function handleFallbackChat(message: string): FallbackChatResponse {
  const query = message.toLowerCase();

  let reply = `### Hello! I am your ShikshaSetu AI Tutor.

I'm here to solve your doubts, explain complex concepts, and help you study.

`;

  if (query.includes('react') || query.includes('hook') || query.includes('useeffect')) {
    reply += `#### Deep Dive: React Hooks & State Management

React Hooks allow functional components to hook into state and lifecycle features:

1. **State Hook (\`useState\`)**:
   \`\`\`jsx
   const [count, setCount] = useState(0);
   \`\`\`
   Persists state values between component renders.

2. **Effect Hook (\`useEffect\`)**:
   \`\`\`jsx
   useEffect(() => {
     console.log('Component mounted');
     return () => console.log('Cleanup logic');
   }, [dependencies]);
   \`\`\`
   Manages side effects (fetching data, subscriptions, timeouts).

3. **Performance Hook (\`useMemo\`)**:
   Memoizes calculations so they don't execute on every single state change unless parameters modify.

Do you want to see a full sample project, or should we discuss a specific hook in detail?`;
  } else if (query.includes('design') || query.includes('grid') || query.includes('ui') || query.includes('ux')) {
    reply += `#### UI/UX Guidelines: The 8-Point Grid System

A highly polished interface depends on consistent alignments:

- **What is it?** All spacing, paddings, margins, and dimension units are multiples of **8px** (e.g., 8, 16, 24, 32, 48, 64).
- **Why use it?** 
  1. Reduces developer layout ambiguity.
  2. Ensures proportionality across mobile, tablet, and desktop screens.
  3. Aligns with standard screen aspect ratios (most are divisible by 8).

**Best Practice**: For smaller UI items like text heights or mini icons, you can drop down to a **4px** half-grid.

Let me know if you would like guidelines on typography scales or color hierarchy.`;
  } else if (query.includes('python') || query.includes('pandas') || query.includes('data')) {
    reply += `#### Python Data Science: Pandas Basics

The foundation of modern data engineering:

- **DataFrame**: A 2-dimensional labeled data structure with columns of potentially different types (similar to a SQL table or Excel sheet).
- **Key Commands**:
  \`\`\`python
  import pandas as pd
  # Read a dataset
  df = pd.read_csv('dataset.csv')
  # Filter rows
  young_users = df[df['age'] < 25]
  # Aggregate metrics
  avg_score = df.groupby('category')['score'].mean()
  \`\`\`

Would you like to build an EDA (Exploratory Data Analysis) script, or write a statistical visualization?`;
  } else if (query.includes('math') || query.includes('matrix') || query.includes('vector') || query.includes('eigen')) {
    reply += `#### Linear Algebra Foundations: Eigenvalues & Vectors

Understanding matrices as linear transformations:

- **Eigenvalue equation**:
  $$Av = \\lambda v$$
  Where $A$ is a square matrix, $v$ is the eigenvector, and $\\lambda$ is the eigenvalue.
- **Interpretation**: When matrix $A$ acts on vector $v$, the vector changes only in scale (scaled by factor $\\lambda$), not in direction.
- **Application**: Crucial for dimensionality reduction algorithms like PCA (Principal Component Analysis) and recommendation matrix factorizations.

Let me know if you want to walk through calculating the determinant or finding eigenvalues for a $2 \\times 2$ matrix.`;
  } else {
    reply += `I can help you with topics like React development, UI/UX grid alignments, Python data analysis, or linear algebra equations.

Feel free to ask a specific doubt, paste code for troubleshooting, or request learning guidance!`;
  }

  return { reply };
}

/* ── Fallback Quiz Generator ─────────────────────────────── */

export function handleFallbackQuiz(topic: string): FallbackQuizResponse {
  const query = topic.toLowerCase();

  let questions: QuizQuestion[] = [
    {
      id: 'fq-1',
      question: 'Which of the following is correct regarding variables and memory allocations?',
      options: [
        { id: 'a', text: 'Local variables are always allocated on the heap.' },
        { id: 'b', text: 'Heap memory allocation is faster than stack allocation.' },
        { id: 'c', text: 'Stack memory is structured and managed automatically.' },
        { id: 'd', text: 'Pointers can only refer to variables on the heap.' },
      ],
      correctOptionId: 'c',
      explanation: 'Stack memory is automatically managed and structured (LIFO structure), whereas heap allocation is dynamic and requires manual checks or garbage collection.',
    },
    {
      id: 'fq-2',
      question: 'What is the main goal of using design tokens in a styling theme?',
      options: [
        { id: 'a', text: 'To compile Javascript files into binary assets.' },
        { id: 'b', text: 'To store design choices in key-value pairs for platform consistency.' },
        { id: 'c', text: 'To replace layout animations entirely.' },
        { id: 'd', text: 'To generate mock image placeholders.' },
      ],
      correctOptionId: 'b',
      explanation: 'Design tokens are visual parameters (colors, fonts, spacings) stored as centralized variables to maintain design integrity across platforms.',
    },
    {
      id: 'fq-3',
      question: 'In statistical modeling, how does an outlier affect the mean compared to the median?',
      options: [
        { id: 'a', text: 'It has no effect on the mean.' },
        { id: 'b', text: 'It pulls the mean significantly towards the outlier value.' },
        { id: 'c', text: 'It affects the median more than the mean.' },
        { id: 'd', text: 'It forces both mean and median to become equal.' },
      ],
      correctOptionId: 'b',
      explanation: 'The mean is sensitive to extreme outliers because it aggregates all values, whereas the median is a middle rank and is highly robust.',
    },
  ];

  if (query.includes('react') || query.includes('hook') || query.includes('frontend')) {
    questions = [
      {
        id: 'rq-1',
        question: 'Which Hook should be used to memoize the result of an expensive calculation?',
        options: [
          { id: 'a', text: 'useCallback' },
          { id: 'b', text: 'useMemo' },
          { id: 'c', text: 'useRef' },
          { id: 'd', text: 'useReducer' },
        ],
        correctOptionId: 'b',
        explanation: 'useMemo caches the returned value of a calculation. useCallback caches the function instance itself.',
      },
      {
        id: 'rq-2',
        question: 'What is a key rule when writing React hooks?',
        options: [
          { id: 'a', text: 'Hooks can only be called from inside class helper functions.' },
          { id: 'b', text: 'Hooks must be called at the top level of your functional component.' },
          { id: 'c', text: 'Hooks can be called inside conditional if blocks.' },
          { id: 'd', text: 'Hooks must return JSX nodes.' },
        ],
        correctOptionId: 'b',
        explanation: 'Hooks must be called at the top level to guarantee that they execute in the same order on every component render.',
      },
      {
        id: 'rq-3',
        question: 'What happens if you return a function from a useEffect hook?',
        options: [
          { id: 'a', text: 'It triggers an infinite rendering cycle.' },
          { id: 'b', text: 'It acts as the clean-up mechanism, running before unmounting or dependency updates.' },
          { id: 'c', text: 'It converts the hook into a context provider.' },
          { id: 'd', text: 'It forces a full page reload.' },
        ],
        correctOptionId: 'b',
        explanation: 'React executes the returned cleanup function before the component unmounts or before executing the effect again on dependency changes.',
      },
    ];
  } else if (query.includes('design') || query.includes('ui') || query.includes('grid')) {
    questions = [
      {
        id: 'dq-1',
        question: 'Why is an 8-point grid layout favored in screen designs?',
        options: [
          { id: 'a', text: 'Because screens can only display colors divisible by 8.' },
          { id: 'b', text: 'It creates visual balance and scales predictably across device sizes.' },
          { id: 'c', text: 'It speeds up network data load rates.' },
          { id: 'd', text: 'It eliminates the need for vector typography.' },
        ],
        correctOptionId: 'b',
        explanation: 'Multiples of 8px build consistent layout proportions and scale cleanly across varying screen viewports (mobile, tablet, desktop).',
      },
      {
        id: 'dq-2',
        question: 'What does visual hierarchy determine in page structures?',
        options: [
          { id: 'a', text: 'The size of HTML script tags.' },
          { id: 'b', text: 'The order in which a user reads content on a screen.' },
          { id: 'c', text: 'The loading speed of CSS files.' },
          { id: 'd', text: 'The resolution of layout thumbnails.' },
        ],
        correctOptionId: 'b',
        explanation: 'Visual hierarchy guides the user\'s eyes through intentional changes in size, weight, color contrast, and spacing.',
      },
    ];
  }

  return { questions };
}

/* ── Fallback Summarizer ─────────────────────────────────── */

export function handleFallbackSummary(text: string): FallbackSummaryResponse {
  const query = text.toLowerCase();

  let summary = 'This notes summary details basic architectural structures, layout principles, and execution contexts.';
  let takeaways = [
    'Modular planning reduces compile errors.',
    'Align metrics to standard spacing systems to establish balance.',
    'Test performance under peak load bounds to secure backend stability.',
  ];
  let flashcards = [
    { front: 'Cohesion', back: 'How focused and closely related the responsibilities of a module are.' },
    { front: 'Coupling', back: 'The degree of dependency between different modules.' },
  ];

  if (query.includes('react') || query.includes('hook') || query.includes('frontend')) {
    summary = 'React state management highlights component composition, dynamic state hooks, and virtual DOM renderings.';
    takeaways = [
      'React functional components use hooks to inject state and side effects.',
      'Always include exhaustive dependency arrays in useEffect hooks to prevent stale closures or memory leak loops.',
      'Context API provides shared global channels, reducing the need for prop drilling.',
    ];
    flashcards = [
      { front: 'State', back: 'Internal component memory that causes a re-render when mutated.' },
      { front: 'Props', back: 'Immutable parameters passed down to a child component.' },
      { front: 'Virtual DOM', back: 'A lightweight node tree representation cached to batch actual UI updates.' },
    ];
  } else if (query.includes('design') || query.includes('ui') || query.includes('grid')) {
    summary = 'Visual system themes rely on consistent typographical scales, modular spacing, and high accessibility contrast metrics.';
    takeaways = [
      'Scale spacing margins in units of 8px to build layout balance.',
      'Favor clear visual contrasts to satisfy WCAG accessibility benchmarks.',
      'Minimize layout complexity: group options in lists of up to 4 elements.',
    ];
    flashcards = [
      { front: 'Typography scale', back: 'A structured list of font sizes growing proportionally.' },
      { front: 'Auto Layout', back: 'Figma layout property to dynamically adjust bounds on content change.' },
    ];
  }

  return { summary, takeaways, flashcards };
}

/* ── Fallback Study Planner ──────────────────────────────── */

export function handleFallbackPlan(
  courseTitle: string,
  days: number,
  hours: number
): FallbackPlanResponse {
  const totalHours = days * hours;

  const plan: FallbackPlanItem[] = [
    {
      week: 'Week 1',
      title: 'Foundations & Concepts Setup',
      tasks: [
        'Read core definitions and install packages.',
        'Configure the code editor and initialize workspace files.',
        'Build simple layout static screens.',
      ],
    },
    {
      week: 'Week 2',
      title: 'Active Exercises & Integrations',
      tasks: [
        'Integrate state arrays and form inputs.',
        'Implement validation triggers for user workflows.',
        'File test queries to confirm API setups.',
      ],
    },
    {
      week: 'Week 3',
      title: 'Polishing & Project Launch',
      tasks: [
        'Analyze layout responsive breakpoints.',
        'Compile build checks to eliminate TypeScript alerts.',
        'Publish the completed app and verify hosting.',
      ],
    },
  ];

  return { plan };
}
