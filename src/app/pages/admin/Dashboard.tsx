import React, { useState } from 'react';
import { Search, Plus, Filter, Users, UserCog, User, ShieldCheck, Edit2, Trash2, X, Check, AlertCircle, Map, Activity } from 'lucide-react';
import { AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const INITIAL_USERS = [
  { id: 1, name: 'John Doe', email: 'john@farma.com', role: 'Farmer', joined: 'Oct 26, 2023', status: 'Active' },
  { id: 2, name: 'Sarah Aggregator', email: 'sarah@mfc.com', role: 'Aggregator', joined: 'Sep 15, 2023', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@farmc.com', role: 'Farmer', joined: 'Oct 25, 2023', status: 'Inactive' },
  { id: 4, name: 'System Admin', email: 'admin@mfc.local', role: 'Admin', joined: 'Jan 01, 2023', status: 'Active' },
  { id: 5, name: 'Emma Davis', email: 'emma@farmd.com', role: 'Farmer', joined: 'Oct 24, 2023', status: 'Active' },
];

const USER_GROWTH_DATA = [
  { month: 'Jan', users: 2 },
  { month: 'Feb', users: 4 },
  { month: 'Mar', users: 5 },
  { month: 'Apr', users: 7 },
  { month: 'May', users: 8 },
  { month: 'Jun', users: 12 },
];

const ROLE_DISTRIBUTION = [
  { name: 'Farmers', value: 8, color: '#10B981' },
  { name: 'Aggregators', value: 3, color: '#0EA5E9' },
  { name: 'Admins', value: 1, color: '#F43F5E' },
];

export function AdminDashboard() {
  const [users, setUsers] = useState(INITIAL_USERS);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<typeof INITIAL_USERS[0] | null>(null);

  const stats = [
    { label: 'Total Users', value: 12, icon: Users, color: 'dark:text-indigo-400 text-indigo-500', bg: 'dark:bg-indigo-500/10 bg-indigo-50' },
    { label: 'Farmers', value: 8, icon: User, color: 'dark:text-emerald-400 text-emerald-500', bg: 'dark:bg-emerald-500/10 bg-emerald-50' },
    { label: 'Aggregators', value: 3, icon: UserCog, color: 'dark:text-sky-400 text-sky-500', bg: 'dark:bg-sky-500/10 bg-sky-50' },
    { label: 'Admins', value: 1, icon: ShieldCheck, color: 'dark:text-rose-400 text-rose-500', bg: 'dark:bg-rose-500/10 bg-rose-50' },
  ];

  const handleEdit = (user: typeof INITIAL_USERS[0]) => {
    setSelectedUser(user);
    setIsUserModalOpen(true);
  };

  const handleDelete = (user: typeof INITIAL_USERS[0]) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="space-y-8 animate-fade-in dark:text-slate-200 text-slate-800 transition-colors duration-300">
      
      {/* Top Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black dark:text-white text-slate-800 tracking-tight">Platform Management</h2>
          <p className="text-sm font-semibold dark:text-slate-400 text-slate-500 mt-1">Manage users, roles, and system settings across the MushGrow platform.</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="dark:bg-slate-900/40 bg-white rounded-2xl p-6 shadow-sm border dark:border-white/5 border-slate-200 flex items-center gap-4 transition-colors">
            <div className={`w-14 h-14 rounded-xl ${stat.bg} flex items-center justify-center`}>
              <stat.icon className={`w-7 h-7 ${stat.color}`} />
            </div>
            <div>
              <p className="text-xs font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-3xl font-black mt-1 dark:text-white text-slate-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="dark:bg-slate-900/40 bg-white rounded-2xl p-6 shadow-sm border dark:border-white/5 border-slate-200 md:col-span-2 transition-colors">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-black dark:text-white text-slate-800 uppercase tracking-widest">User Growth</h3>
            <div className="p-2 dark:bg-slate-800 bg-slate-50 rounded-lg">
              <Activity className="w-5 h-5 dark:text-indigo-400 text-indigo-500" />
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={USER_GROWTH_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border, #E2E8F0)" opacity={0.5} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-muted-foreground, #94A3B8)', fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-muted-foreground, #94A3B8)', fontWeight: 600 }} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid var(--color-border)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', background: 'var(--color-popover)', fontSize: '12px', fontWeight: 'bold' }} />
                <Area type="monotone" dataKey="users" stroke="#6366F1" strokeWidth={3} fillOpacity={1} fill="url(#colorUsers)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dark:bg-slate-900/40 bg-white rounded-2xl p-6 shadow-sm border dark:border-white/5 border-slate-200 transition-colors">
          <h3 className="text-sm font-black dark:text-white text-slate-800 uppercase tracking-widest mb-2">Role Distribution</h3>
          <div className="h-64 flex flex-col justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ROLE_DISTRIBUTION}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {ROLE_DISTRIBUTION.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid var(--color-border)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', background: 'var(--color-popover)', fontSize: '12px', fontWeight: 'bold' }} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted-foreground, #64748B)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Users Table Section */}
      <div className="dark:bg-slate-900/40 bg-white border dark:border-white/5 border-slate-200 rounded-3xl shadow-sm overflow-hidden transition-colors">
        {/* Table Controls */}
        <div className="p-6 border-b dark:border-white/5 border-slate-100 flex justify-between items-center dark:bg-slate-900/50 bg-slate-50/50">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-5 h-5 dark:text-slate-500 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search users by name or email..." 
                className="dark:bg-slate-900/50 bg-white border dark:border-white/10 border-slate-200 rounded-xl py-2.5 pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 w-80 shadow-sm dark:text-white dark:placeholder-slate-500 transition-colors"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 dark:bg-slate-800 bg-white border dark:border-white/10 border-slate-200 rounded-xl text-sm font-bold dark:text-slate-300 text-slate-600 dark:hover:bg-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
              <Filter className="w-4 h-4" />
              Filter by Role
            </button>
          </div>
          <button 
            onClick={() => { setSelectedUser(null); setIsUserModalOpen(true); }}
            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-lg dark:shadow-indigo-500/10 shadow-indigo-600/20 transition-all active:scale-[0.98]"
          >
            <Plus className="w-5 h-5" />
            Add New User
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="dark:bg-slate-900/60 bg-slate-50 dark:text-slate-400 text-slate-500 text-xs font-bold uppercase tracking-wider border-b dark:border-white/5 border-slate-200">
                <th className="px-6 py-4 w-16">Photo</th>
                <th className="px-6 py-4">User Details</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Joined Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y dark:divide-white/5 divide-slate-100">
              {users.map((user) => (
                <tr key={user.id} className="dark:hover:bg-slate-800/40 hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="w-10 h-10 rounded-full dark:bg-slate-800 bg-gradient-to-br from-indigo-100 to-emerald-100 flex items-center justify-center dark:text-indigo-400 text-slate-700 font-bold text-sm shadow-inner dark:border dark:border-white/5">
                      {user.name.charAt(0)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold dark:text-slate-200 text-slate-800">{user.name}</p>
                    <p className="text-sm font-medium dark:text-slate-500 text-slate-400">{user.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <select 
                      defaultValue={user.role}
                      className="dark:bg-slate-900 bg-white border dark:border-white/10 border-slate-200 rounded-lg py-1.5 pl-3 pr-8 text-xs font-bold dark:text-slate-300 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none shadow-sm cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-50 transition-colors"
                    >
                      <option value="Farmer">Farmer</option>
                      <option value="Aggregator">Aggregator</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold dark:text-slate-400 text-slate-500">{user.joined}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold flex inline-flex items-center gap-1.5 w-fit border dark:border-transparent ${user.status === 'Active' ? 'dark:bg-emerald-500/10 bg-emerald-50 dark:text-emerald-400 text-emerald-700' : 'dark:bg-slate-800/50 bg-slate-100 dark:text-slate-400 text-slate-500'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button 
                      onClick={() => handleEdit(user)}
                      className="p-2 dark:text-slate-500 text-slate-400 dark:hover:text-indigo-400 hover:text-indigo-600 dark:hover:bg-indigo-500/10 hover:bg-indigo-50 rounded-lg transition-colors inline-block"
                      title="Edit User"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(user)}
                      className="p-2 dark:text-slate-500 text-slate-400 dark:hover:text-rose-400 hover:text-rose-600 dark:hover:bg-rose-500/10 hover:bg-rose-50 rounded-lg transition-colors inline-block"
                      title="Delete User"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="px-6 py-4 border-t dark:border-white/5 border-slate-100 dark:bg-slate-900/50 bg-slate-50 flex justify-between items-center transition-colors">
          <span className="text-xs font-bold dark:text-slate-500 text-slate-500 uppercase">Showing 5 of 12 Users</span>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 dark:bg-slate-800 bg-white border dark:border-white/10 border-slate-200 rounded-md text-xs font-bold dark:text-slate-500 text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1.5 dark:bg-slate-800 bg-white border dark:border-white/10 border-slate-200 rounded-md text-xs font-bold dark:text-slate-200 text-slate-700 dark:hover:bg-slate-700 hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>

      {/* User Modal (Add/Edit) */}
      {isUserModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="dark:bg-[#030712] bg-white rounded-3xl shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full max-w-lg overflow-hidden flex flex-col animate-fade-in border dark:border-white/10 border-transparent transition-colors">
            <div className="px-8 py-6 border-b dark:border-white/5 border-slate-100 flex justify-between items-center dark:bg-slate-900/40 bg-slate-50/50 transition-colors">
              <h2 className="text-xl font-black dark:text-white text-slate-800">
                {selectedUser ? 'Edit User' : 'Add New User'}
              </h2>
              <button onClick={() => setIsUserModalOpen(false)} className="p-2 dark:text-slate-400 text-slate-400 dark:hover:text-white hover:text-slate-600 dark:hover:bg-slate-800 hover:bg-slate-100 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8 space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest ml-1">First Name</label>
                  <input type="text" defaultValue={selectedUser ? selectedUser.name.split(' ')[0] : ''} className="w-full dark:bg-slate-900/50 bg-slate-50 border dark:border-white/10 border-slate-200 rounded-xl px-4 py-3 text-sm font-bold dark:text-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:placeholder-slate-500" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest ml-1">Last Name</label>
                  <input type="text" defaultValue={selectedUser ? selectedUser.name.split(' ')[1] : ''} className="w-full dark:bg-slate-900/50 bg-slate-50 border dark:border-white/10 border-slate-200 rounded-xl px-4 py-3 text-sm font-bold dark:text-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:placeholder-slate-500" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <input type="email" defaultValue={selectedUser?.email || ''} className="w-full dark:bg-slate-900/50 bg-slate-50 border dark:border-white/10 border-slate-200 rounded-xl px-4 py-3 text-sm font-bold dark:text-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:placeholder-slate-500" />
              </div>

              {!selectedUser && (
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest ml-1">Password</label>
                  <input type="password" placeholder="Generate a temporary password..." className="w-full dark:bg-slate-900/50 bg-slate-50 border dark:border-white/10 border-slate-200 rounded-xl px-4 py-3 text-sm font-bold dark:text-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:placeholder-slate-500" />
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest ml-1">System Role</label>
                <select defaultValue={selectedUser?.role || 'Farmer'} className="w-full dark:bg-slate-900/50 bg-slate-50 border dark:border-white/10 border-slate-200 rounded-xl px-4 py-3 text-sm font-bold dark:text-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all appearance-none cursor-pointer">
                  <option value="Farmer">Farmer</option>
                  <option value="Aggregator">Aggregator</option>
                  <option value="Admin">System Admin</option>
                </select>
              </div>

              {/* Conditional Field Example */}
              <div className="space-y-1.5 p-4 dark:bg-emerald-500/10 bg-emerald-50/50 border dark:border-emerald-500/20 border-emerald-100 rounded-xl">
                <label className="text-[10px] font-bold dark:text-emerald-400 text-emerald-600 uppercase tracking-widest ml-1 flex items-center gap-1.5">
                  <Map className="w-3.5 h-3.5" /> Link to Farm
                </label>
                <select className="w-full dark:bg-slate-900 bg-white border dark:border-emerald-500/30 border-emerald-200 rounded-lg px-4 py-2.5 text-sm font-bold dark:text-emerald-300 text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all appearance-none cursor-pointer">
                  <option value="A">Farm A - Regional Cluster 1</option>
                  <option value="B">Farm B - Regional Cluster 1</option>
                  <option value="C">Farm C - Regional Cluster 2</option>
                </select>
                <p className="text-xs font-semibold dark:text-emerald-400/70 text-emerald-600/70 mt-2 ml-1">Required because role is set to 'Farmer'</p>
              </div>
            </div>

            <div className="px-8 py-5 border-t dark:border-white/5 border-slate-100 dark:bg-slate-900/40 bg-slate-50/50 flex justify-end gap-3 transition-colors">
              <button 
                onClick={() => setIsUserModalOpen(false)}
                className="px-5 py-2.5 dark:bg-slate-800 bg-white border dark:border-white/10 border-slate-200 dark:hover:bg-slate-700 hover:bg-slate-50 dark:text-slate-300 text-slate-600 rounded-xl text-sm font-bold transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsUserModalOpen(false)}
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-lg dark:shadow-indigo-500/10 shadow-indigo-600/20 transition-all active:scale-[0.98]"
              >
                <Check className="w-4 h-4" />
                Save User
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="dark:bg-[#030712] bg-white rounded-3xl shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full max-w-sm overflow-hidden flex flex-col animate-fade-in text-center p-8 border dark:border-white/10 border-transparent transition-colors">
            <div className="w-16 h-16 rounded-2xl dark:bg-rose-500/10 bg-rose-50 flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8 dark:text-rose-400 text-rose-500" />
            </div>
            <h2 className="text-xl font-black dark:text-white text-slate-800 mb-2">Delete User?</h2>
            <p className="text-sm font-medium dark:text-slate-400 text-slate-500 mb-8">
              Are you sure you want to delete user <span className="font-bold dark:text-white text-slate-800">'{selectedUser.name}'</span>? This action cannot be undone.
            </p>
            <div className="flex gap-3 w-full">
              <button 
                onClick={() => setIsDeleteModalOpen(false)}
                className="flex-1 py-3 dark:bg-slate-800 bg-slate-50 border dark:border-white/10 border-slate-200 dark:hover:bg-slate-700 hover:bg-slate-100 dark:text-slate-300 text-slate-600 rounded-xl text-sm font-bold transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsDeleteModalOpen(false)}
                className="flex-1 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-sm font-bold shadow-lg dark:shadow-rose-500/10 shadow-rose-600/20 transition-all active:scale-[0.98]"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
