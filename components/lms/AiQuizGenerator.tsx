'use client';

import { useState } from 'react';
import { HelpCircle, Sparkles, BookOpen, FileText } from 'lucide-react';
import { generateAiQuiz } from '../../lib/ai/client';
import QuizPlayer from './QuizPlayer';
import PdfDragDropUpload from './PdfDragDropUpload';
import type { Quiz } from '../../lib/lms/types';
import { useLanguage } from '../../lib/language/LanguageContext';

export default function AiQuizGenerator() {
  const [topic, setTopic] = useState('');
  const [mode, setMode] = useState<'topic' | 'pdf'>('topic');
  const [extractedText, setExtractedText] = useState('');
  const [pdfFilename, setPdfFilename] = useState('');
  
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const handleGenerate = async () => {
    const isPdfMode = mode === 'pdf';
    const inputTopic = isPdfMode ? pdfFilename : topic;
    const inputText = isPdfMode ? extractedText : undefined;

    if (isPdfMode && !extractedText) {
      alert('Please upload a PDF first to extract its contents.');
      return;
    }
    if (!isPdfMode && !topic.trim()) return;

    setLoading(true);
    setQuiz(null);

    try {
      const questions = await generateAiQuiz(inputTopic, inputText);
      if (questions && questions.length > 0) {
        const generatedQuiz: Quiz = {
          id: `ai-quiz-${Date.now()}`,
          title: isPdfMode ? `Quiz: ${pdfFilename}` : `AI generated quiz: ${topic}`,
          description: isPdfMode 
            ? `Practice quiz generated from your uploaded document: ${pdfFilename}`
            : `Custom practice quiz generated dynamically for subject: ${topic}`,
          questions,
          passingScore: 70,
          timeLimitMinutes: 10,
        };
        setQuiz(generatedQuiz);
      } else {
        alert('Could not generate quiz. Please try another subject or document.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred during quiz generation.');
    } finally {
      setLoading(false);
    }
  };

  const handleTextExtracted = (text: string, filename: string) => {
    setExtractedText(text);
    setPdfFilename(filename);
  };

  return (
    <div className="space-y-6">
      {/* Generate parameters form */}
      {!quiz && (
        <div className="max-w-xl mx-auto rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-900 pb-2">
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-4.5 w-4.5 text-violet-400" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Dynamic Quiz Builder</span>
            </div>
            
            {/* Mode Toggle Button Tabs */}
            <div className="flex rounded-lg bg-slate-900 p-0.5 border border-slate-850">
              <button
                onClick={() => setMode('topic')}
                className={`rounded-md px-3 py-1 text-[10px] font-bold uppercase transition ${
                  mode === 'topic' ? 'bg-violet-500 text-white' : 'text-slate-400 hover:text-slate-350'
                }`}
              >
                Topic
              </button>
              <button
                onClick={() => setMode('pdf')}
                className={`rounded-md px-3 py-1 text-[10px] font-bold uppercase transition ${
                  mode === 'pdf' ? 'bg-violet-500 text-white' : 'text-slate-400 hover:text-slate-350'
                }`}
              >
                PDF File
              </button>
            </div>
          </div>

          {mode === 'topic' ? (
            <>
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
            </>
          ) : (
            <>
              <p className="text-xs text-slate-400 leading-normal">
                Upload or drag & drop any PDF document, and our AI will build custom quiz questions directly from its text context!
              </p>

              <div className="space-y-3">
                <PdfDragDropUpload onTextExtracted={handleTextExtracted} />

                <button
                  onClick={handleGenerate}
                  disabled={!extractedText || loading}
                  className="w-full rounded-xl bg-violet-500 py-3 text-xs font-semibold text-white hover:bg-violet-400 transition disabled:opacity-40"
                >
                  {loading ? 'Analyzing document & building questions...' : 'Generate Quiz from PDF'}
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Embed Quiz Player when generated */}
      {quiz && (
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-semibold text-white">Dynamic Quiz Playroom</h3>
            <button
              onClick={() => {
                setQuiz(null);
                setExtractedText('');
                setPdfFilename('');
              }}
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
