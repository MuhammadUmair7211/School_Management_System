import { Filter, RotateCcw, Search } from "lucide-react";

const StudentFilterBar = () => {
  return (
    <div className="mt-2 rounded-xl border border-slate-200 p-2 shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end">
        {/* Search */}
        <div className="flex-1">
          <label className="mb-2 block text-sm font-medium text-slate-600">
            Search
          </label>

          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              placeholder="Search by name, roll no., admission no. or father name..."
              className="px-4 py-2 w-full rounded-lg border border-slate-200 pl-10 pr-4 outline-none transition "
            />
          </div>
        </div>

        {/* Class */}
        <div className="w-full sm:w-48">
          <label className="mb-2 block text-sm font-medium text-slate-600">
            Class
          </label>

          <select className="px-4 py-2 w-full rounded-lg border border-slate-200 outline-none ">
            <option>All Classes</option>
          </select>
        </div>

        {/* Section */}
        <div className="w-full sm:w-48">
          <label className="mb-2 block text-sm font-medium text-slate-600">
            Section
          </label>

          <select className="px-4 py-2 w-full rounded-lg border border-slate-200 outline-none ">
            <option>All Sections</option>
          </select>
        </div>

        {/* Status */}
        <div className="w-full sm:w-48">
          <label className="mb-2 block text-sm font-medium text-slate-600">
            Status
          </label>

          <select className="w-full rounded-lg border border-slate-200 px-4 py-2 outline-none ">
            <option>All Status</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
            <Filter size={18} />
            Filter
          </button>

          <button className="flex h-11 items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 text-slate-700 transition hover:bg-slate-100">
            <RotateCcw size={18} />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentFilterBar;
