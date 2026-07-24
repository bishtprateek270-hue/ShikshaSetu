'use client';

import clsx from 'clsx';

type MiniCalendarProps = {
  highlightedDays?: number[]; // e.g. [8, 15]
  className?: string;
};

export default function MiniCalendar({ highlightedDays = [8, 15], className }: MiniCalendarProps) {
  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  
  // Render July 2026 for dashboard consistency
  // July 2026 starts on a Wednesday (index 2 for Mon-start)
  // 31 days total
  const days = [
    { day: null }, { day: null },
    { day: 1 }, { day: 2 }, { day: 3 }, { day: 4 }, { day: 5 },
    { day: 6 }, { day: 7 }, { day: 8 }, { day: 9 }, { day: 10 }, { day: 11 }, { day: 12 },
    { day: 13 }, { day: 14 }, { day: 15 }, { day: 16 }, { day: 17 }, { day: 18 }, { day: 19 },
    { day: 20 }, { day: 21 }, { day: 22 }, { day: 23 }, { day: 24 }, { day: 25 }, { day: 26 },
    { day: 27 }, { day: 28 }, { day: 29 }, { day: 30 }, { day: 31 }
  ];

  return (
    <div className={clsx("w-full rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-4 shadow-soft", className)}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-slate-800 dark:text-white">July 2026</span>
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
          const isToday = item.day === 24; // Static active highlighted date corresponding to current month view

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
