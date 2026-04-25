import React from 'react';
import { Outlet, useLocation, Link } from 'react-router';
import { Home, Grid, TrendingUp, Settings, Archive } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_ITEMS = [
  { path: '/farmer', label: 'Home', icon: Home },
  { path: '/farmer/sensors', label: 'Sensors', icon: Grid },
  { path: '/farmer/yield', label: 'Yield', icon: Archive },
  { path: '/farmer/settings', label: 'Settings', icon: Settings },
];

export function MobileLayout() {
  const location = useLocation();

  return (
    <div className="flex justify-center items-center min-h-screen dark:bg-[#030712] bg-slate-50 overflow-hidden dark:text-slate-200 text-slate-800 font-sans relative transition-colors duration-300">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 dark:bg-emerald-600/20 bg-emerald-400/20 rounded-full blur-[120px] pointer-events-none transition-colors duration-300" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 dark:bg-cyan-600/20 bg-cyan-400/20 rounded-full blur-[120px] pointer-events-none transition-colors duration-300" />

      {/* Phone container */}
      <div className="relative w-full max-w-sm h-[850px] max-h-screen dark:bg-slate-950/80 bg-white/80 backdrop-blur-xl overflow-hidden flex flex-col sm:rounded-[3rem] sm:border-[6px] dark:border-slate-800/80 border-slate-200 dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] shadow-xl overflow-y-auto ring-1 dark:ring-white/5 ring-slate-200 transition-colors duration-300">
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto pb-24 relative z-10 custom-scrollbar">
          <Outlet />
        </main>

        {/* Bottom Navigation */}
        <nav className="absolute bottom-0 w-full dark:bg-slate-950/80 bg-white/80 backdrop-blur-xl border-t dark:border-white/10 border-slate-200 px-6 py-4 rounded-b-[2.5rem] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.3)] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20 transition-colors duration-300">
          <ul className="flex justify-between items-center w-full relative">
            {NAV_ITEMS.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <li key={path} className="flex-1 flex justify-center relative">
                  <Link
                    to={path}
                    className={cn(
                      'flex flex-col items-center gap-1.5 transition-all duration-300 group',
                      isActive ? 'dark:text-emerald-400 text-emerald-600' : 'dark:text-slate-400 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    )}
                  >
                    <div className="relative">
                      <Icon className={cn(
                        'w-6 h-6 transition-transform duration-300', 
                        isActive ? 'fill-emerald-400/20 stroke-[1.5] scale-110 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'group-hover:scale-110 group-hover:stroke-[1.5]'
                      )} />
                      {isActive && (
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full dark:bg-emerald-400 bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                      )}
                    </div>
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-wider transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-70"
                    )}>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

