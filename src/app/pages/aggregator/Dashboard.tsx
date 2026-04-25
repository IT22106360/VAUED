import React, { useState } from 'react';
import { Calendar, Search, ArrowRight, User, AlertTriangle, TrendingUp, X, BarChart3, PieChart as PieChartIcon } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const FARMER_DATA = [
  { id: 1, name: 'John Doe', location: 'Farm A', date: 'Oct 26, 2023', yield: 65, variety: 'Oyster', quality: 'Grade A', status: 'normal' },
  { id: 2, name: 'Alice Smith', location: 'Farm B', date: 'Oct 26, 2023', yield: 82, variety: 'Shiitake', quality: 'Grade A', status: 'normal' },
  { id: 3, name: 'Bob Johnson', location: 'Farm C', date: 'Oct 25, 2023', yield: 45, variety: 'Oyster', quality: 'Grade B', status: 'warning' },
  { id: 4, name: 'Emma Davis', location: 'Farm D', date: 'Oct 25, 2023', yield: 55, variety: 'Lion\'s Mane', quality: 'Grade A', status: 'normal' },
  { id: 5, name: 'Michael Wilson', location: 'Farm E', date: 'Oct 24, 2023', yield: 70, variety: 'Shiitake', quality: 'Grade A', status: 'normal' },
];

const YIELD_DATA = [
  { day: 'Mon', yield: 50 },
  { day: 'Tue', yield: 65 },
  { day: 'Wed', yield: 80 },
  { day: 'Thu', yield: 55 },
  { day: 'Fri', yield: 70 },
  { day: 'Sat', yield: 90 },
  { day: 'Sun', yield: 105 },
];

const VARIETY_DISTRIBUTION = [
  { name: 'Oyster', value: 45, color: '#10B981' },
  { name: 'Shiitake', value: 35, color: '#0EA5E9' },
  { name: 'Lion\'s Mane', value: 20, color: '#F59E0B' },
];

const TOP_FARMERS = [
  { name: 'Alice S.', yield: 320 },
  { name: 'Michael W.', yield: 280 },
  { name: 'John D.', yield: 210 },
  { name: 'Emma D.', yield: 190 },
  { name: 'Bob J.', yield: 150 },
];

export function AggregatorDashboard() {
  const [selectedFarmer, setSelectedFarmer] = useState<typeof FARMER_DATA[0] | null>(null);
  
  return (
    <div className="space-y-8 animate-fade-in dark:text-slate-200 text-slate-800 transition-colors duration-300">
      
      {/* Top Controls */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black dark:text-white text-slate-800 tracking-tight">Analytics Overview</h2>
          <p className="text-sm font-semibold dark:text-slate-400 text-slate-500 mt-1">Aggregated farm metrics for MushGrow network.</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="w-5 h-5 dark:text-slate-500 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search Farmers..." 
              className="dark:bg-slate-900/50 bg-white border dark:border-white/10 border-slate-200 rounded-xl py-2.5 pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64 shadow-sm dark:text-white text-slate-900 dark:placeholder-slate-500 transition-colors"
            />
          </div>
          <div className="relative group">
            <Calendar className="w-5 h-5 dark:text-slate-500 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <select className="dark:bg-slate-900/50 bg-white border dark:border-white/10 border-slate-200 rounded-xl py-2.5 pl-12 pr-8 text-sm font-bold dark:text-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none shadow-sm cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-50 transition-colors">
              <option>This Week</option>
              <option>Last Week</option>
              <option>This Month</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none dark:text-slate-500 text-slate-400 font-bold text-xs">▼</div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="dark:bg-slate-900/40 bg-white rounded-2xl p-6 shadow-sm border dark:border-white/5 border-slate-200 dark:hover:border-white/10 hover:border-slate-300 transition-all relative overflow-hidden flex items-center justify-between">
          <div>
            <p className="text-xs font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest">Total Yield</p>
            <h3 className="text-3xl font-black mt-1 dark:text-white text-slate-900">1,150 <span className="text-lg dark:text-slate-500 text-slate-400">kg</span></h3>
          </div>
          <div className="w-14 h-14 rounded-xl dark:bg-emerald-500/10 bg-emerald-50 flex items-center justify-center">
            <TrendingUp className="w-7 h-7 dark:text-emerald-400 text-emerald-500" />
          </div>
        </div>

        <div className="dark:bg-slate-900/40 bg-white rounded-2xl p-6 shadow-sm border dark:border-white/5 border-slate-200 dark:hover:border-white/10 hover:border-slate-300 transition-all flex items-center justify-between">
          <div>
            <p className="text-xs font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest">Active Farmers</p>
            <h3 className="text-3xl font-black mt-1 dark:text-white text-slate-900">8 <span className="text-lg dark:text-slate-500 text-slate-400">/ 10</span></h3>
          </div>
          <div className="w-14 h-14 rounded-xl dark:bg-sky-500/10 bg-sky-50 flex items-center justify-center">
            <User className="w-7 h-7 dark:text-sky-400 text-sky-500" />
          </div>
        </div>

        <div className="dark:bg-slate-900/40 bg-white rounded-2xl p-6 shadow-sm border dark:border-white/5 border-slate-200 dark:hover:border-rose-500/30 hover:border-rose-300 transition-all cursor-pointer group flex items-center justify-between">
          <div>
            <p className="text-xs font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest">Alerts</p>
            <h3 className="text-3xl font-black mt-1 dark:text-rose-400 text-rose-500">2 <span className="text-lg dark:text-rose-400/50 text-rose-300">Requires Action</span></h3>
          </div>
          <div className="w-14 h-14 rounded-xl dark:bg-rose-500/10 bg-rose-50 flex items-center justify-center dark:group-hover:bg-rose-500/20 group-hover:bg-rose-100 transition-colors">
            <AlertTriangle className="w-7 h-7 dark:text-rose-400 text-rose-500" />
          </div>
        </div>
      </div>

      {/* Analytical Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Yield Over Time */}
        <div className="dark:bg-slate-900/40 bg-white rounded-2xl p-6 shadow-sm border dark:border-white/5 border-slate-200 lg:col-span-2 transition-colors">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-black dark:text-white text-slate-800 uppercase tracking-widest">Network Yield Over Time</h3>
            <div className="p-2 dark:bg-slate-800 bg-slate-50 rounded-lg">
              <TrendingUp className="w-5 h-5 dark:text-emerald-400 text-emerald-500" />
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={YIELD_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border, #E2E8F0)" opacity={0.5} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-muted-foreground, #94A3B8)', fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-muted-foreground, #94A3B8)', fontWeight: 600 }} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid var(--color-border)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', background: 'var(--color-popover)', fontSize: '12px', fontWeight: 'bold' }} />
                <Line type="monotone" dataKey="yield" stroke="#10B981" strokeWidth={4} dot={{ r: 4, fill: '#10B981', strokeWidth: 2, stroke: 'var(--color-card, #FFFFFF)' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Variety Distribution */}
        <div className="dark:bg-slate-900/40 bg-white rounded-2xl p-6 shadow-sm border dark:border-white/5 border-slate-200 transition-colors">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-black dark:text-white text-slate-800 uppercase tracking-widest">Variety Distribution</h3>
            <div className="p-2 dark:bg-slate-800 bg-slate-50 rounded-lg">
              <PieChartIcon className="w-5 h-5 dark:text-sky-400 text-sky-500" />
            </div>
          </div>
          <div className="h-64 flex flex-col justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={VARIETY_DISTRIBUTION}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {VARIETY_DISTRIBUTION.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid var(--color-border)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', background: 'var(--color-popover)', fontSize: '12px', fontWeight: 'bold' }} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted-foreground, #64748B)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Performing Farmers */}
        <div className="dark:bg-slate-900/40 bg-white rounded-2xl p-6 shadow-sm border dark:border-white/5 border-slate-200 lg:col-span-3 transition-colors">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-black dark:text-white text-slate-800 uppercase tracking-widest">Top Performing Farmers (YTD)</h3>
            <div className="p-2 dark:bg-slate-800 bg-slate-50 rounded-lg">
              <BarChart3 className="w-5 h-5 dark:text-emerald-400 text-emerald-500" />
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={TOP_FARMERS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border, #E2E8F0)" opacity={0.5} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-muted-foreground, #94A3B8)', fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-muted-foreground, #94A3B8)', fontWeight: 600 }} />
                <Tooltip cursor={{ fill: 'var(--color-muted, #F8FAFC)' }} contentStyle={{ borderRadius: '12px', border: '1px solid var(--color-border)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', background: 'var(--color-popover)', fontSize: '12px', fontWeight: 'bold' }} />
                <Bar dataKey="yield" fill="#10B981" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Yield Data Table */}
      <div className="dark:bg-slate-900/40 bg-white border dark:border-white/5 border-slate-200 rounded-2xl shadow-sm overflow-hidden transition-colors">
        <div className="px-6 py-5 border-b dark:border-white/5 border-slate-100 flex justify-between items-center dark:bg-slate-900/50 bg-slate-50/50">
          <h3 className="text-lg font-black dark:text-white text-slate-800">Recent Yield Submissions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="dark:bg-slate-900/60 bg-slate-50 dark:text-slate-400 text-slate-500 text-xs font-bold uppercase tracking-wider border-b dark:border-white/5 border-slate-200">
                <th className="px-6 py-4">Farmer Name</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Submit Date</th>
                <th className="px-6 py-4 text-right">Yield (kg)</th>
                <th className="px-6 py-4">Variety</th>
                <th className="px-6 py-4">Quality Status</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y dark:divide-white/5 divide-slate-100">
              {FARMER_DATA.map((farmer) => (
                <tr key={farmer.id} className="dark:hover:bg-slate-800/40 hover:bg-slate-50/80 transition-colors group cursor-pointer" onClick={() => setSelectedFarmer(farmer)}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full dark:bg-slate-800 bg-slate-200 flex items-center justify-center dark:text-slate-300 text-slate-600 font-bold text-xs">
                        {farmer.name.charAt(0)}
                      </div>
                      <span className="font-bold dark:text-slate-200 text-slate-800">{farmer.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold dark:text-slate-400 text-slate-500">{farmer.location}</td>
                  <td className="px-6 py-4 text-sm font-semibold dark:text-slate-400 text-slate-500">{farmer.date}</td>
                  <td className="px-6 py-4 text-sm font-black dark:text-white text-slate-800 text-right">{farmer.yield}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 dark:bg-slate-800 bg-slate-100 dark:text-slate-300 text-slate-600 rounded-lg text-xs font-bold border dark:border-white/5 border-transparent">{farmer.variety}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold flex inline-flex items-center gap-1.5 border dark:border-transparent cursor-default ${farmer.status === 'normal' ? 'dark:bg-emerald-500/10 bg-emerald-50 dark:text-emerald-400 text-emerald-700' : 'dark:bg-amber-500/10 bg-amber-50 dark:text-amber-400 text-amber-700'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${farmer.status === 'normal' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                      {farmer.quality}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedFarmer(farmer); }}
                      className="dark:text-sky-400 text-sky-600 dark:hover:text-sky-300 hover:text-sky-700 text-sm font-bold flex items-center justify-center w-full gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      View Profile <ArrowRight className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t dark:border-white/5 border-slate-100 dark:bg-slate-900/50 bg-slate-50 flex justify-between items-center transition-colors">
          <span className="text-xs font-bold dark:text-slate-500 text-slate-500 uppercase">Showing 5 of 8 Farmers</span>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 dark:bg-slate-800 bg-white border dark:border-white/10 border-slate-200 rounded-md text-xs font-bold dark:text-slate-500 text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1.5 dark:bg-slate-800 bg-white border dark:border-white/10 border-slate-200 rounded-md text-xs font-bold dark:text-slate-200 text-slate-700 dark:hover:bg-slate-700 hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>

      {/* Farmer Profile Modal */}
      {selectedFarmer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="dark:bg-[#030712] bg-white rounded-3xl shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full max-w-4xl overflow-hidden flex flex-col max-h-[90vh] border dark:border-white/10 border-transparent transition-colors">
            
            {/* Modal Header */}
            <div className="px-8 py-6 border-b dark:border-white/5 border-slate-100 flex justify-between items-start dark:bg-slate-900/40 bg-slate-50/50 transition-colors">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl dark:bg-emerald-500/10 bg-gradient-to-br from-emerald-100 to-sky-100 flex items-center justify-center shadow-inner border dark:border-emerald-500/30">
                  <User className="w-8 h-8 dark:text-emerald-400 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-black dark:text-white text-slate-800">{selectedFarmer.name}</h2>
                  <div className="flex items-center gap-3 mt-1 text-sm font-bold dark:text-slate-400 text-slate-500">
                    <span>{selectedFarmer.location}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span>Joined Jan 2023</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span className="dark:text-emerald-400 text-emerald-600">Active</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedFarmer(null)}
                className="p-2 dark:text-slate-400 text-slate-400 dark:hover:text-white hover:text-slate-600 dark:hover:bg-slate-800 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 overflow-y-auto flex-1 space-y-8">
              {/* Chart */}
              <div className="dark:bg-slate-900/40 bg-white border dark:border-white/5 border-slate-100 rounded-2xl p-6 shadow-sm transition-colors">
                <h3 className="text-sm font-black dark:text-white text-slate-800 uppercase tracking-widest mb-6">{selectedFarmer.name}'s Yield over Time (Selected Period)</h3>
                <div className="h-64">
                   <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={YIELD_DATA}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border, #E2E8F0)" opacity={0.5} />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-muted-foreground, #94A3B8)', fontWeight: 600 }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-muted-foreground, #94A3B8)', fontWeight: 600 }} />
                      <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid var(--color-border)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', background: 'var(--color-popover)', fontSize: '12px', fontWeight: 'bold' }} />
                      <Line type="monotone" dataKey="yield" stroke="#0EA5E9" strokeWidth={3} dot={{ r: 4, fill: '#0EA5E9', strokeWidth: 2, stroke: 'var(--color-card, #FFFFFF)' }} activeDot={{ r: 6 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Sensor Summary */}
               <div>
                  <h3 className="text-sm font-black dark:text-white text-slate-800 uppercase tracking-widest mb-4">Current Sensor Summary</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="dark:bg-slate-900/40 bg-slate-50 border dark:border-white/5 border-slate-100 rounded-xl p-4 transition-colors">
                      <p className="text-[10px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-wider mb-1">Temperature</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-black dark:text-white text-slate-800">24°C</span>
                        <div className="w-2.5 h-2.5 rounded-full dark:bg-emerald-400 bg-emerald-500 dark:shadow-[0_0_8px_rgba(52,211,153,0.8)] shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                      </div>
                    </div>
                     <div className="dark:bg-slate-900/40 bg-slate-50 border dark:border-white/5 border-slate-100 rounded-xl p-4 transition-colors">
                      <p className="text-[10px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-wider mb-1">Humidity</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-black dark:text-white text-slate-800">82%</span>
                        <div className="w-2.5 h-2.5 rounded-full dark:bg-emerald-400 bg-emerald-500 dark:shadow-[0_0_8px_rgba(52,211,153,0.8)] shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                      </div>
                    </div>
                     <div className="dark:bg-slate-900/40 bg-slate-50 border dark:border-white/5 border-slate-100 rounded-xl p-4 transition-colors">
                      <p className="text-[10px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-wider mb-1">CO2</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-black dark:text-white text-slate-800">650</span>
                        <div className="w-2.5 h-2.5 rounded-full dark:bg-emerald-400 bg-emerald-500 dark:shadow-[0_0_8px_rgba(52,211,153,0.8)] shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                      </div>
                    </div>
                     <div className="dark:bg-slate-900/40 bg-slate-50 border dark:border-white/5 border-slate-100 rounded-xl p-4 transition-colors">
                      <p className="text-[10px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-wider mb-1">Light</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-black dark:text-white text-slate-800">800 lux</span>
                        <div className="w-2.5 h-2.5 rounded-full dark:bg-amber-400 bg-amber-500 dark:shadow-[0_0_8px_rgba(251,191,36,0.8)] shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
