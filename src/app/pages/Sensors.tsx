import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { AlertBanner } from '../components/ui/AlertBanner';
import { Thermometer, Droplets, Wind, Sun, Wifi, FlaskConical } from 'lucide-react';

const SENSOR_DATA = [
  { 
    title: 'Ambient Temp', 
    value: '22.4', 
    unit: '°C', 
    icon: Thermometer, 
    color: 'dark:text-emerald-400 text-emerald-600', 
    status: 'Healthy',
    borderLight: 'border-emerald-500/30',
    bgLight: 'bg-emerald-500/10',
    glowColor: 'rgba(52,211,153,0.5)',
    bgGradient: 'bg-emerald-500/20'
  },
  { 
    title: 'Relative Humidity', 
    value: '84', 
    unit: '%', 
    icon: Droplets, 
    color: 'dark:text-cyan-400 text-cyan-600', 
    status: 'Optimal',
    borderLight: 'border-cyan-500/30',
    bgLight: 'bg-cyan-500/10',
    glowColor: 'rgba(34,211,238,0.5)',
    bgGradient: 'bg-cyan-500/20'
  },
  { 
    title: 'CO2 Levels', 
    value: '650', 
    unit: 'ppm', 
    icon: Wind, 
    color: 'dark:text-emerald-400 text-emerald-600', 
    status: 'Healthy',
    borderLight: 'border-emerald-500/30',
    bgLight: 'bg-emerald-500/10',
    glowColor: 'rgba(52,211,153,0.5)',
    bgGradient: 'bg-emerald-500/20'
  },
  { 
    title: 'Light Intensity', 
    value: '1.2', 
    unit: 'kLux', 
    icon: Sun, 
    color: 'dark:text-amber-400 text-amber-500', 
    status: 'Healthy',
    borderLight: 'border-amber-500/30',
    bgLight: 'bg-amber-500/10',
    glowColor: 'rgba(251,191,36,0.5)',
    bgGradient: 'bg-amber-500/20'
  },
];

function SensorCard({ title, value, unit, icon: Icon, color, status, borderLight, bgLight, glowColor, bgGradient }: any) {
  const isHealthy = status === 'Healthy' || status === 'Optimal';
  
  return (
    <div className={`dark:bg-slate-900/50 bg-white/60 backdrop-blur-xl border ${borderLight} dark:border-white/5 rounded-[2rem] p-6 relative overflow-hidden group shadow-sm transition-colors duration-300`}>
      {/* Dynamic Background Gradients */}
      <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full blur-[40px] pointer-events-none opacity-20 dark:opacity-50 transition-colors duration-300 ${bgLight} dark:${bgGradient}`} />
      
      <div className="flex justify-between items-start mb-6">
        <div className={`w-12 h-12 rounded-2xl ${bgLight} dark:bg-slate-800/50 flex items-center justify-center border border-transparent dark:border-white/5 dark:group-hover:${borderLight} group-hover:border-slate-300 transition-colors z-10 relative`}>
          <Icon className={`w-6 h-6 ${color} dark:drop-shadow-[0_0_8px_${glowColor}]`} />
        </div>
        <div className={`px-2.5 py-1 ${isHealthy ? 'dark:bg-emerald-950/40 bg-emerald-50 border-emerald-200 dark:border-emerald-500/20' : 'dark:bg-cyan-950/40 bg-cyan-50 border-cyan-200 dark:border-cyan-500/20'} border rounded-xl flex items-center gap-1.5 shadow-sm dark:shadow-[0_0_15px_rgba(16,185,129,0.15)] z-10 relative transition-colors duration-300`}>
          <div className={`w-1.5 h-1.5 rounded-full ${isHealthy ? 'bg-emerald-500' : 'bg-cyan-400'} animate-pulse`} />
          <span className={`text-[9px] font-bold ${isHealthy ? 'dark:text-emerald-400 text-emerald-700' : 'dark:text-cyan-400 text-cyan-700'} uppercase tracking-widest`}>{status}</span>
        </div>
      </div>
      
      <div className="relative z-10">
        <p className="text-[11px] font-black dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-1.5">{title}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black dark:text-white text-slate-900 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">{value}</span>
          <span className={`text-sm font-bold ${color}`}>{unit}</span>
        </div>
      </div>
    </div>
  );
}

export function Sensors() {
  return (
    <div className="flex flex-col min-h-full bg-transparent relative pb-24 transition-colors duration-300">
      {/* Background Effect */}
      <div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-slate-900/40 dark:via-transparent dark:to-transparent bg-slate-50 opacity-40 pointer-events-none transition-colors duration-300" />
      
      <PageHeader title="TELEMETRY" />
      <div className="flex-1 px-6 pt-8 space-y-6 relative z-10">

        <div>
          <h3 className="text-[10px] font-black dark:text-slate-400 text-slate-500 uppercase tracking-[0.2em] mb-4 pl-1">Live Sensors</h3>
          <div className="grid grid-cols-2 gap-4">
            <SensorCard 
              title="Temperature" 
              value="24.5" 
              unit="°C" 
              status="Healthy" 
              icon={Thermometer} 
              color="text-emerald-400" 
              borderLight="border-emerald-200" 
              bgLight="bg-emerald-50" 
              glowColor="rgba(52,211,153,0.5)" 
              bgGradient="from-emerald-900/40" 
            />
            <SensorCard 
              title="Humidity" 
              value="60" 
              unit="%" 
              status="Healthy" 
              icon={Droplets} 
              color="text-cyan-400" 
              borderLight="border-cyan-200" 
              bgLight="bg-cyan-50" 
              glowColor="rgba(34,211,238,0.5)" 
              bgGradient="from-cyan-900/40" 
            />
            <SensorCard 
              title="CO2" 
              value="800" 
              unit="ppm" 
              status="Healthy" 
              icon={Wind} 
              color="text-slate-400" 
              borderLight="border-slate-200" 
              bgLight="bg-slate-50" 
              glowColor="rgba(203,213,225,0.5)" 
              bgGradient="from-slate-900/40" 
            />
            <SensorCard 
              title="Light" 
              value="1000" 
              unit="lux" 
              status="Warning" 
              icon={Sun} 
              color="text-amber-400" 
              borderLight="border-amber-200" 
              bgLight="bg-amber-50" 
              glowColor="rgba(251,191,36,0.5)" 
              bgGradient="from-amber-900/40" 
            />
            
            
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-black dark:text-slate-400 text-slate-500 uppercase tracking-[0.2em] mb-4 pl-1">Active Alerts</h3>
          <div className="space-y-4">
             <AlertBanner
                title="CRITICAL THRESHOLD: HARVEST"
                description="Optimal diameter reached. Initiate automated or manual harvest sequence immediately."
              />
              <AlertBanner
                title="Temperature Alert"
                description="Temperature out of range (High). Adjust cooling systems."
              />
          </div>
        </div>
      </div>
    </div>
  );
}
