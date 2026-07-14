'use client';

import { useState } from 'react';
import { FileText, Sparkles, RefreshCw, Layers } from 'lucide-react';
import { generateNotesAndSummary } from '../../lib/ai/client';

type Flashcard = {
  front: string;
  back: string;
};

export default function AiSummaryGenerator() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Results
  const [summary, setSummary] = useState('');
  const [takeaways, setTakeaways] = useState<string[]>([]);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const handleSummarize = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setFlippedCards(new Set());

    try {
      const data = await generateNotesAndSummary(text);
      setSummary(data.summary);
      setTakeaways(data.takeaways);
      setFlashcards(data.flashcards);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleFlip = (idx: number) => {
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
      {/* Input panel */}
      <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-5 space-y-4 self-start">
        <div className="flex items-center gap-1.5 border-b border-slate-900 pb-2">
          <Layers className="h-4.5 w-4.5 text-violet-400" />
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Syllabus summarizer</span>
        </div>

        <p className="text-xs text-slate-400 leading-normal">
          Paste reading materials, course pages, or transcript details below to generate structured takeaways and interactive study flashcards.
        </p>

        <div className="space-y-3">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste syllabus text or notes here (minimum 20 characters)..."
            rows={10}
            className="w-full rounded-xl border border-slate-850 bg-slate-900/60 px-4 py-3 text-xs text-white placeholder-slate-650 outline-none focus:border-violet-500 resize-none leading-relaxed"
          />

          <button
            onClick={handleSummarize}
            disabled={text.length < 20 || loading}
            className="w-full rounded-xl bg-violet-500 py-3 text-xs font-semibold text-white hover:bg-violet-400 transition disabled:opacity-40"
          >
            {loading ? 'Synthesizing summaries...' : 'Summarize Text'}
          </button>
        </div>
      </div>

      {/* Results panel */}
      <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-5 min-h-[300px] flex flex-col justify-between">
        {loading ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
            <RefreshCw className="h-8 w-8 text-violet-400 animate-spin" />
            <p className="mt-4 text-xs text-slate-400">Distilling insights and drafting terms...</p>
          </div>
        ) : !summary ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
            <FileText className="h-10 w-10 text-slate-600" />
            <p className="mt-4 text-xs text-slate-400">Summaries, bullet takeaways, and flashcards will appear here.</p>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Summary */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Executive Summary</span>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-2xl border border-slate-900">
                {summary}
              </p>
            </div>

            {/* Bullet takeaways */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Key Takeaways</span>
              <ul className="space-y-2 text-xs text-slate-300">
                {takeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Flashcards */}
            {flashcards.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-slate-900">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Interactive Study Flashcards</span>
                <p className="text-[10px] text-slate-500 pb-1">Click any card to reveal definitions.</p>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  {flashcards.map((card, idx) => {
                    const isFlipped = flippedCards.has(idx);
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => toggleFlip(idx)}
                        className="h-28 w-full perspective cursor-pointer text-left"
                      >
                        <div className={`relative w-full h-full duration-500 transform-style ${
                          isFlipped ? 'rotate-y-180' : ''
                        }`}>
                          {/* Front */}
                          <div className="absolute inset-0 backface-hidden rounded-xl border border-slate-900 bg-slate-900/60 p-4 flex flex-col justify-between">
                            <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">Term</span>
                            <p className="text-xs font-bold text-white text-center mt-2 truncate">{card.front}</p>
                            <span className="text-[8px] text-violet-400 text-right mt-2 font-semibold">Flip →</span>
                          </div>

                          {/* Back */}
                          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl border border-violet-500/20 bg-violet-500/[0.03] p-4 flex flex-col justify-between">
                            <span className="text-[9px] uppercase tracking-wider text-violet-400 font-semibold">Definition</span>
                            <p className="text-[11px] text-slate-350 leading-relaxed text-center overflow-y-auto mt-1 max-h-16">
                              {card.back}
                            </p>
                            <span className="text-[8px] text-slate-500 text-right mt-1 font-semibold">Flip →</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
