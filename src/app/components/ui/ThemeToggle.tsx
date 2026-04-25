import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-xl transition-all duration-300 flex items-center justify-center 
        ${theme === 'dark' 
          ? 'bg-slate-800/50 text-amber-400 hover:bg-slate-800 border-white/10 shadow-[0_0_15px_rgba(251,191,36,0.15)]' 
          : 'bg-white text-indigo-500 hover:bg-slate-50 border-slate-200 shadow-sm'} 
        border ${className}`}
      aria-label="Toggle Theme"
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
