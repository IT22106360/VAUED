import React, { useState, useEffect } from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { CircularProgress } from '../components/ui/CircularProgress';
import { AlertBanner } from '../components/ui/AlertBanner';
import { ThemeToggle } from '../components/ui/ThemeToggle';
import { ChevronRight, Activity, Droplets, Type } from 'lucide-react';
import { Link } from 'react-router';

export function Home() {
  const [baseFontSize, setBaseFontSize] = useState(16);

  useEffect(() => {
    // Modify root font size to scale Tailwind's rem-based utility classes
    document.documentElement.style.fontSize = `${baseFontSize}px`;
    return () => {
      // Clean up when leaving farmer simulation mode
      document.documentElement.style.fontSize = '';
    };
  }, [baseFontSize]);

  const increaseFontSize = () => {
    setBaseFontSize(prev => Math.min(prev + 2, 24)); // Cap at 24px
  };

  const decreaseFontSize = () => {
    setBaseFontSize(prev => Math.max(prev - 2, 12)); // Cap at 12px
  };

  return (
    <div className="flex flex-col min-h-full bg-transparent relative pb-24">
      <PageHeader title="MUSHGROW Core" showBack={false} />

      {/* Top Right Controls: Theme Toggle & Font Size */}
      <div className="absolute top-4 right-6 z-50 flex items-center gap-3">
        <ThemeToggle className="scale-90" />
        <div className="flex items-center gap-2">
          <button 
            onClick={decreaseFontSize}
            className="w-10 h-10 bg-slate-200 hover:bg-slate-300 dark:bg-white/20 dark:hover:bg-white/30 backdrop-blur-md rounded-full transition-all flex items-center justify-center border border-slate-400 dark:border-white/50 shadow-sm dark:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 group"
            title="Decrease Font Size"
          >
            <span className="flex items-center text-slate-900 dark:text-white dark:drop-shadow-md group-hover:text-slate-900 dark:group-hover:text-white">
              <span className="text-sm font-bold">T</span>
              <span className="text-xl font-black ml-0.5">-</span>
            </span>
          </button>
          <button 
            onClick={increaseFontSize}
            className="w-10 h-10 bg-slate-200 hover:bg-slate-300 dark:bg-white/20 dark:hover:bg-white/30 backdrop-blur-md rounded-full transition-all flex items-center justify-center border border-slate-400 dark:border-white/50 shadow-sm dark:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 group"
            title="Increase Font Size"
          >
            <span className="flex items-center text-slate-900 dark:text-white dark:drop-shadow-md group-hover:text-slate-900 dark:group-hover:text-white">
              <span className="text-sm font-bold">T</span>
              <span className="text-xl font-black ml-0.5">+</span>
            </span>
          </button>
        </div>
      </div>

      <div className="flex-1 px-6 pt-10 space-y-12">
        {/* Alert moved higher on the screen */}
        <div className="animate-[fade-in_0.5s_ease-out]">
          <AlertBanner
            title="CRITICAL THRESHOLD: HARVEST"
            description="Optimal diameter reached. Initiate automated or manual harvest sequence immediately."
            isBrightRed={true}
          />
        </div>

        {/* Main Status - predicted bio-mass moved lower via mt-6 / mt-8 */}
        <div className="flex flex-col items-center relative animate-[fade-in_0.6s_ease-out] mt-10">
          <h2 className="text-6xl font-black dark:text-white text-slate-900 tracking-tighter mb-2 flex items-baseline drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            15.2 <span className="text-2xl font-bold dark:text-emerald-400 text-emerald-600 ml-2 uppercase tracking-wide">cm</span>
          </h2>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] text-center">
            Predicted Bio-Mass Diameter
          </p>
        </div>

        {/* Progress Circle */}
        <div className="flex justify-center my-10 relative animate-[fade-in_0.8s_ease-out_both] group">
          <CircularProgress
            value={80}
            size={220}
            strokeWidth={8}
            label="80%"
            sublabel="Growth Cycle"
          />
        </div>

        {/* Quick Links / Sensors Summary */}
        <div className="space-y-6 animate-[fade-in_1s_ease-out_both] !mt-8">
          <div className="flex justify-between items-end border-b dark:border-white/5 border-slate-200 pb-3">
            <h3 className="text-[10px] font-black dark:text-slate-300 text-slate-800 uppercase tracking-widest pl-1">Telemetry</h3>
            <Link to="/farmer/sensors" className="text-[10px] font-bold dark:text-cyan-400 text-cyan-600 uppercase flex items-center hover:text-cyan-500 transition-colors group">
              Full Scan <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="dark:bg-slate-900/40 bg-white/60 backdrop-blur-xl border dark:border-white/5 border-slate-200 rounded-3xl p-5 dark:hover:bg-slate-800/40 hover:bg-slate-50 transition-colors group relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-[30px] -mr-8 -mt-8 pointer-events-none dark:group-hover:bg-emerald-500/20 group-hover:bg-emerald-500/10 transition-colors" />
              <div className="w-10 h-10 rounded-2xl dark:bg-slate-800/50 bg-emerald-50 flex items-center justify-center mb-4 border dark:border-white/5 border-transparent group-hover:border-emerald-500/30 transition-colors">
                <Activity className="w-5 h-5 dark:text-emerald-400 text-emerald-500 dark:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Temperature</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black dark:text-white text-slate-800">24°</span>
                <div className="w-1.5 h-1.5 rounded-full dark:bg-emerald-400 bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              </div>
            </div>
            
            <div className="dark:bg-slate-900/40 bg-white/60 backdrop-blur-xl border dark:border-white/5 border-slate-200 rounded-3xl p-5 dark:hover:bg-slate-800/40 hover:bg-slate-50 transition-colors group relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-[30px] -mr-8 -mt-8 pointer-events-none dark:group-hover:bg-cyan-500/20 group-hover:bg-cyan-500/10 transition-colors" />
              <div className="w-10 h-10 rounded-2xl dark:bg-slate-800/50 bg-cyan-50 flex items-center justify-center mb-4 border dark:border-white/5 border-transparent group-hover:border-cyan-500/30 transition-colors">
                <Droplets className="w-5 h-5 dark:text-cyan-400 text-cyan-500 dark:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Humidity</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black dark:text-white text-slate-800">60%</span>
                <div className="w-1.5 h-1.5 rounded-full dark:bg-cyan-400 bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
