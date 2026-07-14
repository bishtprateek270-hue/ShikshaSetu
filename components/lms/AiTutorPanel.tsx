'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, GraduationCap } from 'lucide-react';
import { askAiTutor } from '../../lib/ai/client';
import clsx from 'clsx';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const suggestedPrompts = [
  'Explain React useEffect cleanups',
  'What is the 8-point grid layout system?',
  'How do eigenvalues work in recommendation engines?',
  'Explain pandas DataFrame groupby aggregates',
];

export default function AiTutorPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `### Welcome to ShikshaSetu AI Tutor! 🎓

I can explain academic concepts, resolve code/design doubts, and help you study.

Select a query below or type your question:`,
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const history = messages.slice(1); // skip greeting
      const reply = await askAiTutor(text, history);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Connection issue. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_300px] h-[550px] overflow-hidden">
      {/* Main chat window */}
      <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950/80 flex flex-col justify-between overflow-hidden">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((m, idx) => {
            const isUser = m.role === 'user';
            return (
              <div
                key={idx}
                className={clsx(
                  'flex gap-3 max-w-[85%]',
                  isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'
                )}
              >
                <div
                  className={clsx(
                    'h-8 w-8 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-bold border',
                    isUser
                      ? 'bg-violet-500 border-violet-500 text-white'
                      : 'bg-slate-900 border-slate-800 text-violet-300'
                  )}
                >
                  {isUser ? <User className="h-4 w-4" /> : <GraduationCap className="h-4 w-4" />}
                </div>

                <div
                  className={clsx(
                    'rounded-2xl p-4 text-xs leading-relaxed whitespace-pre-wrap',
                    isUser
                      ? 'bg-violet-500/10 border border-violet-500/30 text-white'
                      : 'bg-slate-900/60 border border-slate-900 text-slate-300'
                  )}
                >
                  {m.content}
                </div>
              </div>
            );
          })}

          {loading && (
            <div className="flex gap-3 mr-auto max-w-[85%]">
              <div className="h-8 w-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-violet-300">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div className="rounded-2xl p-4 bg-slate-900/60 border border-slate-900 text-slate-500 text-xs flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 bg-violet-400 rounded-full animate-bounce" />
                <div className="h-1.5 w-1.5 bg-violet-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="h-1.5 w-1.5 bg-violet-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
          <div ref={scrollRef} />
        </div>

        {/* Input box */}
        <div className="p-4 border-t border-slate-900 bg-slate-950 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
            placeholder="Ask a doubt or paste a code block..."
            className="flex-1 rounded-xl border border-slate-850 bg-slate-900/60 px-4 py-3 text-xs text-white placeholder-slate-600 outline-none focus:border-violet-500"
          />
          <button
            onClick={() => handleSend(input)}
            disabled={!input.trim() || loading}
            className="rounded-xl bg-violet-500 px-4 py-3 text-white hover:bg-violet-400 transition disabled:opacity-40"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Suggested doubt topics sidebar */}
      <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-5 space-y-4 self-start">
        <div className="flex items-center gap-1.5">
          <Sparkles className="h-4.5 w-4.5 text-violet-400" />
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Suggested Queries</span>
        </div>

        <p className="text-[10px] text-slate-500 leading-normal">
          Click any of these quick queries to test the tutor explaining topics with code guidelines.
        </p>

        <div className="space-y-2">
          {suggestedPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => handleSend(prompt)}
              className="w-full text-left rounded-xl border border-slate-900 bg-slate-900/30 p-3 text-[11px] text-slate-300 hover:border-violet-500/40 hover:text-white transition"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
