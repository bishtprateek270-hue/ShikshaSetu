'use client';

import { useState, useCallback } from 'react';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Trophy } from 'lucide-react';
import clsx from 'clsx';
import type { Quiz } from '../../lib/lms/types';

type QuizPlayerProps = {
  quiz: Quiz;
  onComplete?: (score: number, passed: boolean) => void;
};

export default function QuizPlayer({ quiz, onComplete }: QuizPlayerProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const question = quiz.questions[currentIdx];
  const isCorrect = selectedOption === question?.correctOptionId;
  const totalQuestions = quiz.questions.length;
  const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const passed = score >= quiz.passingScore;

  const handleSelect = useCallback(
    (optionId: string) => {
      if (showResult) return;
      setSelectedOption(optionId);
      setShowResult(true);
      setAnswers((prev) => ({ ...prev, [question.id]: optionId }));
      if (optionId === question.correctOptionId) {
        setCorrectCount((c) => c + 1);
      }
    },
    [showResult, question]
  );

  const handleNext = () => {
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx((i) => i + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setFinished(true);
      const finalCorrect = correctCount + (isCorrect && !showResult ? 1 : 0);
      const finalScore = Math.round((finalCorrect / totalQuestions) * 100);
      onComplete?.(finalScore, finalScore >= quiz.passingScore);
    }
  };

  const handleRetry = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowResult(false);
    setCorrectCount(0);
    setFinished(false);
    setAnswers({});
  };

  if (finished) {
    return (
      <div className="rounded-[1.75rem] border border-slate-800/80 bg-slate-950/90 p-8 text-center">
        <div className={clsx('mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full', passed ? 'bg-emerald-500/15' : 'bg-rose-500/15')}>
          <Trophy className={clsx('h-10 w-10', passed ? 'text-emerald-400' : 'text-rose-400')} />
        </div>
        <h3 className="text-2xl font-semibold text-white">
          {passed ? 'Congratulations! 🎉' : 'Keep Practicing'}
        </h3>
        <p className="mt-2 text-slate-400">
          You scored <span className="font-bold text-white">{score}%</span> ({correctCount}/{totalQuestions} correct)
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Passing score: {quiz.passingScore}%
        </p>

        <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800 mx-auto max-w-xs">
          <div
            className={clsx('h-full rounded-full transition-all duration-700', passed ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-gradient-to-r from-rose-500 to-orange-400')}
            style={{ width: `${score}%` }}
          />
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={handleRetry}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-violet-400 hover:text-white"
          >
            <RotateCcw className="h-4 w-4" />
            Retry Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[1.75rem] border border-slate-800/80 bg-slate-950/90 p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Question {currentIdx + 1} of {totalQuestions}
          </p>
          <h3 className="mt-1 text-sm font-semibold text-slate-300">{quiz.title}</h3>
        </div>
        <div className="h-2 w-32 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-violet-500 transition-all duration-300"
            style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h4 className="text-lg font-semibold text-white">{question.question}</h4>

      {/* Options */}
      <div className="mt-5 space-y-3">
        {question.options.map((option) => {
          const isSelected = selectedOption === option.id;
          const isCorrectOption = option.id === question.correctOptionId;

          let style = 'border-slate-800/70 bg-slate-900/60 hover:border-slate-700';
          if (showResult) {
            if (isCorrectOption) style = 'border-emerald-500/50 bg-emerald-500/10';
            else if (isSelected && !isCorrectOption) style = 'border-rose-500/50 bg-rose-500/10';
          } else if (isSelected) {
            style = 'border-violet-500/50 bg-violet-500/10';
          }

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSelect(option.id)}
              disabled={showResult}
              className={clsx(
                'flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition-all',
                style
              )}
            >
              {showResult && isCorrectOption && <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-400" />}
              {showResult && isSelected && !isCorrectOption && <XCircle className="h-5 w-5 flex-shrink-0 text-rose-400" />}
              {!showResult && (
                <div className={clsx('h-5 w-5 flex-shrink-0 rounded-full border-2', isSelected ? 'border-violet-500 bg-violet-500' : 'border-slate-600')} />
              )}
              <span className={clsx('flex-1', showResult && isCorrectOption ? 'text-emerald-200' : 'text-slate-200')}>
                {option.text}
              </span>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showResult && (
        <div className={clsx('mt-5 rounded-xl border p-4 text-sm', isCorrect ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-200' : 'border-amber-500/30 bg-amber-500/5 text-amber-200')}>
          <p className="font-semibold">{isCorrect ? '✓ Correct!' : '✗ Incorrect'}</p>
          <p className="mt-1 text-slate-300">{question.explanation}</p>
        </div>
      )}

      {/* Next button */}
      {showResult && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400"
          >
            {currentIdx < totalQuestions - 1 ? 'Next Question' : 'View Results'}
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
