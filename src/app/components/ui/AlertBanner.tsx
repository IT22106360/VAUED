import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface AlertBannerProps {
  title: string;
  description: string;
  isBrightRed?: boolean;
}

export function AlertBanner({ title, description, isBrightRed }: AlertBannerProps) {
  const baseClasses = isBrightRed
    ? "dark:bg-red-900/50 bg-red-100 border dark:border-red-500/80 border-red-400 rounded-2xl p-5 flex items-start gap-4 w-full dark:shadow-[0_0_20px_rgba(255,0,0,0.4)] shadow-md backdrop-blur-md relative overflow-hidden group transition-colors duration-300"
    : "dark:bg-rose-950/40 bg-rose-50 border dark:border-rose-500/30 border-rose-200 rounded-2xl p-5 flex items-start gap-4 w-full dark:shadow-[0_0_30px_rgba(225,29,72,0.15)] shadow-sm backdrop-blur-md relative overflow-hidden group transition-colors duration-300";

  const glowClasses = isBrightRed
    ? "absolute top-0 right-0 w-32 h-32 dark:bg-red-500/20 bg-red-500/10 rounded-full blur-[40px] -mr-16 -mt-16 pointer-events-none transition-transform group-hover:scale-150 duration-700"
    : "absolute top-0 right-0 w-32 h-32 dark:bg-rose-500/10 bg-rose-500/5 rounded-full blur-[40px] -mr-16 -mt-16 pointer-events-none transition-transform group-hover:scale-150 duration-700";

  const iconContainerClasses = isBrightRed
    ? "relative z-10 dark:bg-red-500/30 bg-red-200 p-2 rounded-xl border dark:border-red-500/50 border-red-300 flex-shrink-0 transition-colors duration-300"
    : "relative z-10 dark:bg-rose-500/20 bg-rose-100 p-2 rounded-xl border dark:border-rose-500/30 border-rose-200 flex-shrink-0 transition-colors duration-300";

  const iconClasses = isBrightRed
    ? "w-5 h-5 dark:text-red-400 text-red-600 dark:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]"
    : "w-5 h-5 dark:text-rose-400 text-rose-600 dark:drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]";

  const titleClasses = isBrightRed
    ? "text-[11px] font-black dark:text-red-300 text-red-800 uppercase tracking-widest mb-1.5"
    : "text-[11px] font-black dark:text-rose-300 text-rose-800 uppercase tracking-widest mb-1.5";

  return (
    <div className={baseClasses}>
      <div className={glowClasses} />
      <div className={iconContainerClasses}>
        <AlertTriangle className={iconClasses} />
      </div>
      <div className="relative z-10 pt-0.5">
        <h4 className={titleClasses}>{title}</h4>
        <p className="text-xs font-medium dark:text-slate-300 text-slate-700 leading-relaxed max-w-[90%]">{description}</p>
      </div>
    </div>
  );
}
