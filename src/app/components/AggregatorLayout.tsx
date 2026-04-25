import React from 'react';
import { Outlet, Link } from 'react-router';
import { Leaf, Bell, User, LogOut } from 'lucide-react';
import { ThemeToggle } from './ui/ThemeToggle';

export function AggregatorLayout() {
  return (
    <div className="min-h-screen dark:bg-[#030712] bg-slate-50 font-sans dark:text-slate-200 text-slate-800 flex flex-col transition-colors duration-300">
      <header className="dark:bg-slate-950/80 bg-white/80 backdrop-blur-xl border-b dark:border-white/5 border-slate-200 sticky top-0 z-30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 dark:bg-emerald-500/20 bg-emerald-100 rounded-lg flex items-center justify-center dark:border dark:border-emerald-500/30">
                <Leaf className="w-6 h-6 dark:text-emerald-400 text-emerald-600" />
              </div>
              <h1 className="text-lg font-black tracking-tight dark:text-white text-slate-800">
                My Mushroom Farm <span className="dark:text-slate-500 text-slate-400 font-semibold ml-1">Aggregator Portal</span>
              </h1>
            </div>
            
            <div className="flex items-center gap-6">
              <ThemeToggle />
              <div className="h-6 w-px dark:bg-white/10 bg-slate-200" />
              <button className="relative p-2 dark:text-slate-400 text-slate-400 dark:hover:text-slate-300 hover:text-slate-600 transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 dark:border-[#030712] border-white" />
              </button>
              <div className="h-6 w-px dark:bg-white/10 bg-slate-200" />
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="text-right">
                  <p className="text-sm font-bold dark:text-slate-200 text-slate-700 leading-tight">Sarah Aggregator</p>
                  <p className="text-xs font-semibold dark:text-slate-500 text-slate-400">Regional Manager</p>
                </div>
                <div className="w-10 h-10 dark:bg-slate-900 bg-slate-100 rounded-full border dark:border-white/10 border-slate-200 flex items-center justify-center dark:text-slate-400 text-slate-500 dark:group-hover:bg-slate-800 group-hover:bg-slate-200 transition-colors">
                  <User className="w-5 h-5" />
                </div>
              </div>
              <div className="h-6 w-px dark:bg-white/10 bg-slate-200" />
              <Link to="/" className="text-sm font-bold dark:text-slate-400 text-slate-500 dark:hover:text-rose-400 hover:text-rose-600 flex items-center gap-2 transition-colors">
                <LogOut className="w-4 h-4" />
                Exit
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}
