import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { User, MapPin, Bell, LogOut, Thermometer, Droplets, Wind, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col min-h-full bg-transparent relative pb-24 dark:text-slate-200 text-slate-800 transition-colors duration-300">
      <PageHeader title="SETTINGS" showBack={false} />
      <div className="flex-1 px-6 pt-8 space-y-8 animate-[fade-in_0.5s_ease-out]">
        
        {/* Profile Card */}
        <div className="dark:bg-slate-900/40 bg-white/60 backdrop-blur-xl p-6 rounded-3xl border dark:border-white/5 border-slate-200 shadow-sm relative overflow-hidden flex items-center gap-5 transition-colors duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 dark:bg-emerald-500/10 bg-emerald-500/5 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none" />
          <div className="w-16 h-16 rounded-full dark:bg-emerald-500/20 bg-emerald-100 flex items-center justify-center border dark:border-emerald-500/30 border-emerald-300 shadow-inner z-10 relative">
            <User className="w-8 h-8 dark:text-emerald-400 text-emerald-600" />
          </div>
          <div className="z-10 relative">
            <h2 className="text-xl font-black dark:text-white text-slate-900 tracking-tight">John Doe</h2>
            <div className="flex items-center gap-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 dark:text-slate-400 text-slate-500" />
              <span className="text-sm font-bold dark:text-slate-400 text-slate-500">Farm A - Cluster 1</span>
            </div>
            <span className="inline-block mt-2 px-2.5 py-1 dark:bg-slate-800 bg-slate-100 rounded-md text-[10px] font-bold dark:text-slate-300 text-slate-600 uppercase tracking-widest border dark:border-white/5 border-slate-200">
              Farmer Role
            </span>
          </div>
        </div>

        {/* Environmental Thresholds */}
        <div>
          <h3 className="text-[10px] font-black dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-4 pl-1">Environmental Thresholds</h3>
          <div className="space-y-4">
            <div className="dark:bg-slate-900/40 bg-white/60 backdrop-blur-xl p-6 rounded-3xl border dark:border-white/5 border-slate-200 shadow-sm transition-colors duration-300 group hover:border-emerald-500/30">
               <div className="flex justify-between items-center mb-5">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl dark:bg-emerald-500/10 bg-emerald-50 flex items-center justify-center border dark:border-white/5 border-emerald-100 group-hover:border-emerald-500/30 transition-colors">
                     <Thermometer className="w-5 h-5 dark:text-emerald-400 text-emerald-600" />
                   </div>
                   <span className="font-bold text-sm">Target Temp</span>
                 </div>
                 <span className="font-black text-2xl dark:text-white text-slate-900">24<span className="text-sm dark:text-slate-200 text-slate-500">°C</span></span>
               </div>
               <input type="range" min="15" max="30" defaultValue="24" className="w-full accent-emerald-500 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer" />
            </div>

            <div className="dark:bg-slate-900/40 bg-white/60 backdrop-blur-xl p-6 rounded-3xl border dark:border-white/5 border-slate-200 shadow-sm transition-colors duration-300 group hover:border-cyan-500/30">
               <div className="flex justify-between items-center mb-5">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl dark:bg-cyan-500/10 bg-cyan-50 flex items-center justify-center border dark:border-white/5 border-cyan-100 group-hover:border-cyan-500/30 transition-colors">
                     <Droplets className="w-5 h-5 dark:text-cyan-400 text-cyan-600" />
                   </div>
                   <span className="font-bold text-sm">Target Humidity</span>
                 </div>
                 <span className="font-black text-2xl dark:text-white text-slate-900">85<span className="text-sm dark:text-slate-200 text-slate-500">%</span></span>
               </div>
               <input type="range" min="60" max="100" defaultValue="85" className="w-full accent-cyan-500 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer" />
            </div>

            <div className="dark:bg-slate-900/40 bg-white/60 backdrop-blur-xl p-6 rounded-3xl border dark:border-white/5 border-slate-200 shadow-sm transition-colors duration-300 group hover:border-slate-500/30">
               <div className="flex justify-between items-center mb-5">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl dark:bg-slate-500/10 bg-slate-100 flex items-center justify-center border dark:border-white/5 border-slate-200 group-hover:border-slate-500/30 transition-colors">
                     <Wind className="w-5 h-5 dark:text-slate-400 text-slate-600" />
                   </div>
                   <span className="font-bold text-sm">Target CO2</span>
                 </div>
                 <span className="font-black text-2xl dark:text-white text-slate-900">800<span className="text-sm dark:text-slate-200 text-slate-500">ppm</span></span>
               </div>
               <input type="range" min="400" max="2000" defaultValue="800" step="50" className="w-full accent-slate-500 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer" />
            </div>

            <div className="dark:bg-slate-900/40 bg-white/60 backdrop-blur-xl p-6 rounded-3xl border dark:border-white/5 border-slate-200 shadow-sm transition-colors duration-300 group hover:border-amber-500/30">
               <div className="flex justify-between items-center mb-5">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl dark:bg-amber-500/10 bg-amber-50 flex items-center justify-center border dark:border-white/5 border-amber-100 group-hover:border-amber-500/30 transition-colors">
                     <Sun className="w-5 h-5 dark:text-amber-400 text-amber-600" />
                   </div>
                   <span className="font-bold text-sm">Target Light</span>
                 </div>
                 <span className="font-black text-2xl dark:text-white text-slate-900">1000<span className="text-sm dark:text-slate-200 text-slate-500">lux</span></span>
               </div>
               <input type="range" min="0" max="2000" defaultValue="1000" step="100" className="w-full accent-amber-500 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
           <button className="w-full flex items-center justify-between p-5 dark:bg-slate-900/40 bg-white/60 backdrop-blur-xl rounded-3xl border dark:border-white/5 border-slate-200 shadow-sm dark:hover:bg-slate-800/40 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                 <Bell className="w-5 h-5 dark:text-slate-400 text-slate-500" />
                 <span className="font-bold text-sm">Notification Preferences</span>
              </div>
           </button>
           
           <button className="w-full flex items-center justify-between p-5 dark:bg-rose-950/20 bg-rose-50/50 backdrop-blur-xl rounded-3xl border dark:border-rose-500/20 border-rose-200 shadow-sm dark:hover:bg-rose-900/30 hover:bg-rose-100/50 transition-colors">
              <div className="flex items-center gap-3">
                 <LogOut className="w-5 h-5 dark:text-rose-400 text-rose-600" />
                 <span className="font-bold text-sm dark:text-rose-400 text-rose-600">Sign Out</span>
              </div>
           </button>
        </div>
        
      </div>
    </div>
  );
}
