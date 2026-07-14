'use client';

import { useState } from 'react';
import { HelpCircle, Sparkles, BookOpen } from 'lucide-react';
import { generateAiQuiz } from '../../lib/ai/client';
import QuizPlayer from './QuizPlayer';
import type { Quiz } from '../../lib/lms/types';

export default function AiQuizGenerator() {
  const [topic, setTopic] = useState('');
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setQuiz(null);

    try {
      const questions = await generateAiQuiz(topic);
      if (questions && questions.length > 0) {
        const generatedQuiz: Quiz = {
          id: `ai-quiz-${Date.now()}`,
          title: `AI generated quiz: ${topic}`,
          description: `Custom practice quiz generated dynamically for subject: ${topic}`,
          questions,
          passingScore: 70,
          timeLimitMinutes: 10,
        };
        setQuiz(generatedQuiz);
      } else {
        alert('Could not generate quiz. Please try another subject.');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Generate parameters form */}
      {!quiz && (
        <div className="max-w-xl mx-auto rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-6 space-y-4">
          <div className="flex items-center gap-1.5 border-b border-slate-900 pb-2">
            <Sparkles className="h-4.5 w-4.5 text-violet-400" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Dynamic Quiz Builder</span>
          </div>

          <p className="text-xs text-slate-400 leading-normal">
            Enter any subject topic (e.g. &quot;CSS grids&quot;, &quot;Linear algebra&quot;) and the AI will generate 3 customized multiple-choice questions for you to practice.
          </p>

          <div className="space-y-3">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. React hooks, Auto Layout, Python analytics..."
              className="w-full rounded-xl border border-slate-850 bg-slate-900/60 px-4 py-3 text-xs text-white placeholder-slate-650 outline-none focus:border-violet-500"
            />

            <button
              onClick={handleGenerate}
              disabled={!topic.trim() || loading}
              className="w-full rounded-xl bg-violet-500 py-3 text-xs font-semibold text-white hover:bg-violet-400 transition disabled:opacity-40"
            >
              {loading ? 'Generating practice questions...' : 'Generate custom Quiz'}
            </button>
          </div>
        </div>
      )}

      {/* Embed Quiz Player when generated */}
      {quiz && (
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-semibold text-white">Dynamic Quiz Playroom</h3>
            <button
              onClick={() => setQuiz(null)}
              className="text-xs text-slate-500 hover:text-white"
            >
              Build another Quiz
            </button>
          </div>
          <QuizPlayer quiz={quiz} />
        </div>
      )}
    </div>
  );
}
