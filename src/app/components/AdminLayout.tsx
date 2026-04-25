import React from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { LayoutDashboard, Users, Map, FileText, Settings, Leaf, LogOut } from 'lucide-react';
import { cn } from './MobileLayout';
import { ThemeToggle } from './ui/ThemeToggle';

export function AdminLayout() {
  const location = useLocation();

  const NAV_LINKS = [
    { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { label: 'Users', path: '/admin/users', icon: Users },
    { label: 'Farms', path: '/admin/farms', icon: Map },
    { label: 'System Logs', path: '/admin/logs', icon: FileText },
    { label: 'Global Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen dark:bg-[#030712] bg-slate-50 font-sans dark:text-slate-200 text-slate-800 flex transition-colors duration-300">
      {/* Sidebar Navigation */}
      <aside className="w-64 dark:bg-slate-950/80 bg-slate-900 text-white flex flex-col fixed inset-y-0 left-0 z-30 shadow-2xl overflow-y-auto dark:border-r dark:border-white/5 backdrop-blur-xl">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 dark:bg-emerald-500/20 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)] dark:border dark:border-emerald-500/30">
              <Leaf className="w-6 h-6 dark:text-emerald-400 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight text-white leading-tight">MFC Platform</h1>
              <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Admin Console</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/admin' && location.pathname.startsWith(link.path));
            return (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm",
                  isActive ? "bg-emerald-500/10 text-emerald-400" : "text-slate-400 hover:bg-slate-800 hover:text-white"
                )}
              >
                <link.icon className={cn("w-5 h-5", isActive ? "text-emerald-400" : "text-slate-400 group-hover:text-white")} />
                {link.label}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 mt-auto border-t border-slate-800">
          <div className="px-4 pb-4">
             <ThemeToggle />
          </div>
          <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-bold text-sm text-slate-400 hover:bg-slate-800 hover:text-white group">
            <LogOut className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
            Sign Out
          </Link>
          <div className="px-4 py-4 mt-4 bg-slate-800/50 rounded-xl flex items-center gap-3 border border-white/5">
             <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs shadow-inner">
                SA
             </div>
             <div>
               <p className="text-xs font-bold text-white leading-tight">System Admin</p>
               <p className="text-[10px] font-medium text-slate-400">admin@mfc.local</p>
             </div>
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 ml-64 min-h-screen relative p-10">
        <Outlet />
      </main>
    </div>
  );
}
