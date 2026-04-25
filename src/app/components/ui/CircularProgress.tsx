import React from 'react';

interface CircularProgressProps {
  value: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  label?: string;
  sublabel?: string;
}

export function CircularProgress({
  value,
  size = 180,
  strokeWidth = 12,
  label,
  sublabel,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center p-4" style={{ width: size, height: size }}>
      <div className="absolute inset-0 bg-emerald-500/5 rounded-full blur-[40px]" />
      <svg className="transform -rotate-90 relative z-10 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]" width={size} height={size}>
        {/* Background circle */}
        <circle
          className="text-slate-800/60"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress circle */}
        <circle
          className="text-emerald-400 transition-all duration-1000 ease-out"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      {(label || sublabel) && (
        <div className="absolute flex flex-col items-center justify-center text-center z-20">
          {label && <span className="text-4xl font-black dark:text-white text-slate-900 tracking-tight drop-shadow-sm dark:drop-shadow-md">{label}</span>}
          {sublabel && <span className="text-[10px] font-bold text-emerald-500 dark:text-emerald-400 mt-2 uppercase tracking-widest">{sublabel}</span>}
        </div>
      )}
    </div>
  );
}
