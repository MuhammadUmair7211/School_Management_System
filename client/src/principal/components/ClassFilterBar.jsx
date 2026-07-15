import { Filter, RefreshCw, Search } from "lucide-react";

const ClassFilterBar = () => {
  return (
    <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
        {/* Search */}
        <div className="flex-1">
          <label className="mb-2 block text-xs font-semibold text-slate-500">
            Search
          </label>

          <div className="relative">
            <Search
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search by class name, grade..."
              className="w-full rounded-xl border border-slate-200 py-3 pl-4 pr-12 text-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Academic Session */}
        <div className="w-full lg:w-44">
          <label className="mb-2 block text-xs font-semibold text-slate-500">
            Academic Session
          </label>

          <select className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
            <option>2026-27</option>
            <option>2025-26</option>
            <option>2024-25</option>
          </select>
        </div>

        {/* Class Teacher */}
        <div className="w-full lg:w-44">
          <label className="mb-2 block text-xs font-semibold text-slate-500">
            Class Teacher
          </label>

          <select className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
            <option>All Teachers</option>
            <option>Ahmed Khan</option>
            <option>Ayesha Ali</option>
            <option>Usman Iqbal</option>
            <option>Sara Ahmed</option>
          </select>
        </div>

        {/* Status */}
        <div className="w-full lg:w-40">
          <label className="mb-2 block text-xs font-semibold text-slate-500">
            Status
          </label>

          <select className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Filter Button */}
        <button className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-50 hover:shadow">
          <Filter size={18} />
          Filter
        </button>

        {/* Refresh */}
        <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:rotate-180 hover:bg-slate-50">
          <RefreshCw size={18} />
        </button>
      </div>
    </div>
  );
};

export default ClassFilterBar;
