import React from 'react';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';
import { ThemeToggle } from './ThemeToggle';

export function PageHeader({ title, showBack = true, time = "10:39 AM" }: { title?: string, showBack?: boolean, time?: string }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex items-center justify-between p-6 dark:bg-slate-950/60 bg-white/60 backdrop-blur-2xl dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] shadow-sm dark:border-white/5 border-slate-200 border-b z-30 sticky top-0 transition-all">
      <div className="flex flex-1 items-center gap-4">
        {showBack && (
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full dark:hover:bg-slate-800/80 hover:bg-slate-100 dark:text-slate-300 text-slate-600 transition-colors border border-transparent dark:hover:border-white/10 hover:border-slate-300">
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full dark:bg-emerald-400 bg-emerald-500 dark:shadow-[0_0_12px_rgba(52,211,153,0.8)] shadow-none relative z-10" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute animate-ping opacity-75" />
          </div>
          <h1 className="text-[11px] font-black dark:text-white text-slate-800 tracking-widest uppercase py-1">
            {title || 'NORMAL'}
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {location.pathname !== '/farmer' && <ThemeToggle className="scale-90" />}
        <div className="text-[10px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest text-right whitespace-nowrap">
          {location.pathname !== '/farmer' && `UPDATED: ${time}`}
        </div>
      </div>
    </div>
  );
}
