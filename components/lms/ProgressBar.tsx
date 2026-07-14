'use client';

import clsx from 'clsx';

type ProgressBarProps = {
  value: number; // 0-100
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

export default function ProgressBar({ value, showLabel = true, size = 'md', className }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  const heightMap = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-3.5' };

  return (
    <div className={clsx('w-full', className)}>
      {showLabel && (
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-slate-400">Progress</span>
          <span className="font-semibold text-white">{clamped}%</span>
        </div>
      )}
      <div className={clsx('w-full overflow-hidden rounded-full bg-slate-800', heightMap[size])}>
        <div
          className={clsx(
            'rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 transition-all duration-700 ease-out',
            heightMap[size]
          )}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
