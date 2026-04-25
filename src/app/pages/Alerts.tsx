import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { AlertBanner } from '../components/ui/AlertBanner';

export function Alerts() {
  return (
    <div className="flex flex-col min-h-full bg-transparent relative pb-24 dark:text-slate-200 text-slate-800 transition-colors duration-300">
      <PageHeader title="ALERTS & LOGS" showBack={true} />
      <div className="flex-1 px-6 pt-8 space-y-10 animate-[fade-in_0.5s_ease-out]">
        <div>
          <h3 className="text-[10px] font-black dark:text-slate-400 text-slate-500 uppercase tracking-[0.2em] mb-4 pl-1">Critical (Last 24h)</h3>
          <div className="space-y-4">
             <AlertBanner
                title="HARVEST REQUIRED"
                description="Cluster 1 reaches optimal bio-mass diameter. Yield quality may degrade if not harvested within 12 hours."
             />
             <AlertBanner
                title="SUDDEN TEMP DROP"
                description="Ambient temperature fell below 18°C for 45 minutes. Heating unit actively compensating."
             />
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-black dark:text-slate-400 text-slate-500 uppercase tracking-[0.2em] mb-6 pl-1">Recent Activity</h3>
          <div className="space-y-5 relative before:absolute before:inset-0 before:left-[17px] before:w-0.5 dark:before:bg-slate-800 before:bg-slate-200">
             
             {[
               { time: "10:30 AM", title: "Yield Logged", desc: "65kg of Oyster submitted successfully.", color: "bg-emerald-500" },
               { time: "08:15 AM", title: "System Sync", desc: "Data synced with aggregator node.", color: "bg-slate-400" },
               { time: "Yesterday", title: "Humidifier Refill", desc: "Water reservoir refilled in Sector 1.", color: "bg-cyan-500" },
             ].map((item, i) => (
                <div key={i} className="flex gap-5 relative z-10">
                   <div className="w-9 h-9 rounded-full dark:bg-slate-900 bg-white border-4 dark:border-[#030712] border-slate-50 flex items-center justify-center shrink-0 mt-1">
                      <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                   </div>
                   <div className="dark:bg-slate-900/40 bg-white/60 backdrop-blur-md p-5 rounded-3xl border dark:border-white/5 border-slate-200 w-full shadow-sm">
                      <p className="text-[10px] font-bold dark:text-slate-500 text-slate-400 uppercase tracking-widest mb-1">{item.time}</p>
                      <h4 className="text-sm font-bold dark:text-white text-slate-900">{item.title}</h4>
                      <p className="text-xs font-medium dark:text-slate-400 text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                   </div>
                </div>
             ))}
          </div>
        </div>

      </div>
    </div>
  );
}
