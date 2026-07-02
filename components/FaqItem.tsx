"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FaqItemProps = {
  question: string;
  answer: string;
};

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <details className="group rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6" open={open} onClick={() => setOpen(!open)}>
      <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-white">
        {question}
        <ChevronDown className={`h-5 w-5 text-violet-300 transition duration-300 ${open ? 'rotate-180' : ''}`} />
      </summary>
      <p className="mt-4 text-slate-300 leading-7">{answer}</p>
    </details>
  );
}
