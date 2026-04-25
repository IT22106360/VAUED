import React, { useState } from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { Plus, CheckCircle2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const YIELD_DATA = [
  { date: 'Oct 20', amount: 45 },
  { date: 'Oct 21', amount: 50 },
  { date: 'Oct 22', amount: 55 },
  { date: 'Oct 23', amount: 52 },
  { date: 'Oct 24', amount: 60 },
  { date: 'Oct 25', amount: 65 },
];

const RECENT_SUBMISSIONS = [
  { id: 1, date: 'Oct 25, 2023', amount: 65, variety: 'Oyster', status: 'Approved' },
  { id: 2, date: 'Oct 24, 2023', amount: 60, variety: 'Oyster', status: 'Approved' },
  { id: 3, date: 'Oct 23, 2023', amount: 52, variety: 'Oyster', status: 'Approved' },
];

export function YieldHistory() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="flex flex-col min-h-full bg-transparent relative pb-24 dark:text-slate-200 text-slate-800 transition-colors duration-300">
      <PageHeader title="YIELD HISTORY" showBack={true} />
      <div className="flex-1 px-6 pt-8 space-y-8 animate-[fade-in_0.5s_ease-out]">
        
        {/* Yield Submission CTA */}
        <button 
          onClick={() => setIsSubmitting(true)}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 dark:text-slate-950 text-white font-black tracking-widest py-4 rounded-xl shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all active:scale-[0.98]"
        >
          <Plus className="w-5 h-5 stroke-[3]" />
          LOG NEW YIELD
        </button>

        {/* Mini Chart */}
        <div className="dark:bg-slate-900/40 bg-white/60 backdrop-blur-xl p-6 rounded-3xl border dark:border-white/5 border-slate-200 shadow-sm relative overflow-hidden group dark:hover:border-white/10 hover:border-slate-300 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-emerald-500/20 transition-colors" />
          <h3 className="text-[10px] font-black dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-6 relative z-10">Yield Trend (Last 7 Days)</h3>
          <div className="h-48 w-full relative z-10 pb-4">
             <ResponsiveContainer width="100%" height="100%">
              <LineChart data={YIELD_DATA} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'var(--color-muted-foreground)' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'var(--color-muted-foreground)' }} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-popover)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: 'bold', color: 'var(--color-popover-foreground)' }} />
                <Line type="monotone" dataKey="amount" stroke="#34d399" strokeWidth={3} dot={{ r: 4, fill: 'var(--color-card)', strokeWidth: 2, stroke: '#34d399' }} activeDot={{ r: 6, fill: '#34d399', stroke: '#fff' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Submissions */}
        <div>
          <h3 className="text-[10px] font-black dark:text-slate-400 text-slate-500 uppercase tracking-[0.2em] mb-4 pl-1">Recent Submissions</h3>
          <div className="space-y-3">
            {RECENT_SUBMISSIONS.map((sub) => (
              <div key={sub.id} className="dark:bg-slate-900/40 bg-white/60 backdrop-blur-xl p-5 rounded-3xl border dark:border-white/5 border-slate-200 flex justify-between items-center shadow-sm dark:hover:bg-slate-800/40 hover:bg-slate-50 dark:hover:border-white/10 hover:border-slate-300 transition-colors">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold dark:text-white text-slate-900 tracking-wide">{sub.date}</span>
                    <span className="px-2 py-0.5 dark:bg-slate-800/80 bg-slate-100 border dark:border-white/10 border-slate-200 rounded text-[10px] font-bold dark:text-slate-300 text-slate-600 tracking-wider uppercase">{sub.variety}</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] font-bold dark:text-emerald-400 text-emerald-600 uppercase tracking-widest mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 dark:drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]" /> {sub.status}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black dark:text-white text-slate-900 tracking-tight">{sub.amount}</span>
                  <span className="text-xs font-bold dark:text-slate-500 text-slate-400 ml-1">kg</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mock Submit Modal */}
      {isSubmitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 dark:bg-[#030712]/80 bg-slate-800/40 backdrop-blur-xl px-6">
          <div className="dark:bg-slate-900 bg-white border dark:border-white/10 border-slate-200 w-full rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.2)] dark:shadow-[0_0_50px_rgba(0,0,0,0.8)] p-6 animate-fade-in relative overflow-hidden transition-colors duration-300">
             <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[50px] pointer-events-none" />
             <h3 className="text-lg font-black dark:text-white text-slate-900 mb-6 tracking-wide relative z-10">Log Today's Yield</h3>
             
             <div className="space-y-5 mb-8 relative z-10">
               <div>
                  <label className="block text-[10px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-2 ml-1">Amount (kg)</label>
                  <input type="number" defaultValue="65" className="w-full dark:bg-slate-950 bg-slate-50 border dark:border-white/10 border-slate-200 rounded-xl px-4 py-4 text-xl font-black dark:text-white text-slate-900 dark:placeholder-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all" />
               </div>
               <div>
                  <label className="block text-[10px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-2 ml-1">Variety</label>
                  <div className="relative">
                    <select className="w-full dark:bg-slate-950 bg-slate-50 border dark:border-white/10 border-slate-200 rounded-xl px-4 py-4 text-sm font-bold dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all appearance-none uppercase tracking-wide">
                      <option>Oyster</option>
                      <option>Shiitake</option>
                      <option>Lion's Mane</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 dark:text-slate-500 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
               </div>
             </div>

             <div className="flex gap-3 relative z-10">
               <button onClick={() => setIsSubmitting(false)} className="flex-1 py-4 dark:bg-slate-800/50 bg-slate-100 dark:text-slate-300 text-slate-600 dark:hover:bg-slate-800 hover:bg-slate-200 dark:hover:text-white hover:text-slate-900 font-bold tracking-widest uppercase text-xs rounded-xl border dark:border-white/10 border-slate-200 transition-colors">Cancel</button>
               <button onClick={() => setIsSubmitting(false)} className="flex-1 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 dark:text-slate-950 text-white font-black tracking-widest uppercase text-xs rounded-xl shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all">Submit</button>
             </div>
          </div>
        </div>
      )}

    </div>
  );
}
