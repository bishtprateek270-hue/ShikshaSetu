'use client';

type LegendItem = {
  label: string;
  value: number;
  color: string;
};

type DonutChartProps = {
  value: number; // 0 to 100 for the main circle
  size?: number;
  strokeWidth?: number;
  data: LegendItem[];
};

export default function DonutChart({ value, size = 120, strokeWidth = 10, data }: DonutChartProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="fill-none stroke-slate-100 dark:stroke-slate-800"
            strokeWidth={strokeWidth}
          />
          {/* Foreground circle with indigo accent */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="fill-none stroke-indigo-500 transition-all duration-700 ease-out"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-xl font-bold text-slate-800 dark:text-white">{value}%</span>
          <span className="text-[10px] text-slate-400 font-semibold uppercase">Done</span>
        </div>
      </div>
      
      {/* Legend dots */}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
        {data.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
            <span>{item.label} ({item.value}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}
