'use client';

import { useMemo } from 'react';
import clsx from 'clsx';

type MiniCalendarProps = {
  highlightedDays?: number[]; // e.g. [8, 15]
  monthLabel?: string;
  daysOffset?: number; // number of empty slots before first day
  todayDay?: number;
  className?: string;
};

export default function MiniCalendar({ 
  highlightedDays = [8, 15], 
  monthLabel = 'July 2026', 
  daysOffset = 2, 
  todayDay = 24, 
  className 
}: MiniCalendarProps) {
  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  
  // Construct empty padding slots + day slots
  const days = useMemo(() => {
    const list = [];
    // Padding
    for (let i = 0; i < daysOffset; i++) {
      list.push({ day: null });
    }
    // Days of the month (always 31 for mockup simplicity)
    for (let d = 1; d <= 31; d++) {
      list.push({ day: d });
    }
    return list;
  }, [daysOffset]);

  return (
    <div className={clsx("w-full rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-4 shadow-soft", className)}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-slate-800 dark:text-white">{monthLabel}</span>
        <span className="text-[10px] text-indigo-500 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-indigo-950/40 px-2 py-0.5 rounded-full">3 Events</span>
      </div>
      
      <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center text-[11px] font-semibold text-slate-400 dark:text-slate-500 mb-2">
        {daysOfWeek.map((d, idx) => (
          <span key={idx}>{d}</span>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-y-1.5 gap-x-1 text-center text-xs">
        {days.map((item, idx) => {
          if (item.day === null) {
            return <span key={idx} />;
          }

          const isHighlighted = highlightedDays.includes(item.day);
          const isToday = item.day === todayDay;

          return (
            <span
              key={idx}
              className={clsx(
                "h-7 w-7 flex items-center justify-center rounded-full text-xs mx-auto transition-all cursor-pointer",
                isToday
                  ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold shadow-sm"
                  : isHighlighted
                  ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60 font-semibold"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
              )}
            >
              {item.day}
            </span>
          );
        })}
      </div>
    </div>
  );
}
