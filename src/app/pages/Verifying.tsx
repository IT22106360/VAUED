import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Loader2 } from 'lucide-react';

export function Verifying() {
  const location = useLocation();
  const navigate = useNavigate();
  const role = location.state?.role || 'farmer';

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/${role}`);
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate, role]);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center">
        <Loader2 className="w-12 h-12 text-emerald-500 animate-spin mb-6" />
        <h2 className="text-xl font-bold text-white tracking-wide">Verifying Your Role...</h2>
        <p className="text-slate-400 mt-2 text-sm font-medium">Connecting to MushGrow</p>
      </div>
    </div>
  );
}
