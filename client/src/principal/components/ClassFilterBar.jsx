import { RefreshCw, Search, ChevronDown } from "lucide-react";

const ClassFilterBar = () => {
  return (
    <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      {/* Filter Header */}
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-800">
            Filter Classes
          </h3>

          <p className="text-xs text-slate-500">
            Search and filter classes by academic session, teacher, or status.
          </p>
        </div>

        {/* Reset Button */}
        <button
          type="button"
          className="mt-2 flex w-fit items-center justify-center gap-2 border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800 sm:mt-0"
        >
          <RefreshCw size={16} />
          Reset Filters
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Search */}
        <div>
          <label
            htmlFor="class-search"
            className="mb-1.5 block text-xs font-semibold text-slate-600"
          >
            Search Class
          </label>

          <div className="relative">
            <input
              id="class-search"
              type="text"
              placeholder="Search class name or grade..."
              className="w-full border border-slate-200 bg-white px-3 py-2.5 pr-10 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
            />

            <Search
              size={17}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        {/* Academic Session */}
        <div>
          <label
            htmlFor="academic-session"
            className="mb-1.5 block text-xs font-semibold text-slate-600"
          >
            Academic Session
          </label>

          <div className="relative">
            <select
              id="academic-session"
              className="w-full cursor-pointer appearance-none border border-slate-200 bg-white px-3 py-2.5 pr-9 text-sm font-medium text-slate-700 outline-none transition-all focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
            >
              <option value="all">All Sessions</option>
              <option value="2026-27">2026-27</option>
              <option value="2025-26">2025-26</option>
              <option value="2024-25">2024-25</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        {/* Class Teacher */}
        <div>
          <label
            htmlFor="class-teacher"
            className="mb-1.5 block text-xs font-semibold text-slate-600"
          >
            Class Teacher
          </label>

          <div className="relative">
            <select
              id="class-teacher"
              className="w-full cursor-pointer appearance-none border border-slate-200 bg-white px-3 py-2.5 pr-9 text-sm font-medium text-slate-700 outline-none transition-all focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
            >
              <option value="all">All Teachers</option>
              <option value="ahmed-khan">Ahmed Khan</option>
              <option value="ayesha-ali">Ayesha Ali</option>
              <option value="usman-iqbal">Usman Iqbal</option>
              <option value="sara-ahmed">Sara Ahmed</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        {/* Status */}
        <div>
          <label
            htmlFor="class-status"
            className="mb-1.5 block text-xs font-semibold text-slate-600"
          >
            Status
          </label>

          <div className="relative">
            <select
              id="class-status"
              className="w-full cursor-pointer appearance-none border border-slate-200 bg-white px-3 py-2.5 pr-9 text-sm font-medium text-slate-700 outline-none transition-all focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassFilterBar;
