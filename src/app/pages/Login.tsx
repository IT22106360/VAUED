import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Leaf, Mail, Lock } from 'lucide-react';

export function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState('farmer');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/verifying', { state: { role } });
  };

  return (
    <div className="min-h-screen bg-[#030712] flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden text-slate-200">
      {/* Background Orbs */}
      <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />

      <div className="w-full max-w-md bg-slate-950/60 backdrop-blur-2xl rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] p-8 border border-white/10 relative z-10">
        <div className="flex flex-col items-center mb-8 relative">
          <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4 border border-emerald-500/20 shadow-[0_0_20px_rgba(52,211,153,0.2)]">
            <Leaf className="w-8 h-8 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">MushGrow</h1>
          <p className="text-sm font-medium text-slate-400 mt-2 tracking-wide uppercase">Secure Dashboard Access</p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-6">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Account Email</label>
            <div className="relative group">
              <Mail className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-emerald-400 transition-colors" />
              <input 
                type="email" 
                defaultValue="demo@farm.com"
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm font-medium text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all placeholder-slate-600"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center ml-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Master Password</label>
              <button type="button" className="text-[10px] font-bold text-emerald-400 hover:text-emerald-300 transition-colors tracking-wide">RECOVERY</button>
            </div>
            <div className="relative group">
              <Lock className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-emerald-400 transition-colors" />
              <input 
                type="password" 
                defaultValue="password123"
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-sm font-medium text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all placeholder-slate-600"
                placeholder="Enter your password"
              />
            </div>
          </div>
          
          <div className="space-y-1.5 pt-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Simulation Mode</label>
            <div className="relative">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3.5 px-4 text-sm font-medium text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all appearance-none uppercase tracking-wide"
              >
                <option value="farmer">Farmer (Mobile Interface)</option>
                <option value="aggregator">Aggregator (Web HQ)</option>
                <option value="admin">System Admin (Root Console)</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black tracking-widest py-4 rounded-xl shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all active:scale-[0.98] mt-4"
          >
            AUTHORIZE ACCESS
          </button>
        </form>

        <div className="mt-8">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative px-4 bg-transparent text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Biometric & SSO
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-6">
            <button className="flex justify-center items-center py-3 bg-slate-900/40 border border-white/5 rounded-xl hover:bg-slate-800/60 hover:border-white/10 transition-all group">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/><path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 01-6.723-4.823l-4.04 3.067A11.965 11.965 0 0012 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/><path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/><path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 014.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 000 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/></svg>
            </button>
            <button className="flex justify-center items-center py-3 bg-slate-900/40 border border-white/5 rounded-xl hover:bg-slate-800/60 hover:border-white/10 transition-all text-slate-400 hover:text-white group">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </button>
            <button className="flex justify-center items-center py-3 bg-slate-900/40 border border-white/5 rounded-xl hover:bg-slate-800/60 hover:border-white/10 transition-all text-slate-400 hover:text-white group">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.62-1.515 3.604-2.96 1.153-1.682 1.623-3.32 1.64-3.411-.037-.015-3.197-1.226-3.232-4.93-.031-3.096 2.525-4.57 2.64-4.646-1.444-2.112-3.682-2.398-4.484-2.448-2.053-.13-4.008 1.258-5.003 1.258h-.45zM15.176 4.394c.839-1.013 1.405-2.422 1.25-3.831-1.203.048-2.67.802-3.541 1.815-.778.893-1.454 2.337-1.264 3.719 1.344.104 2.713-.687 3.555-1.703z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
