import { Search, Filter, RotateCw } from "lucide-react";

const TeacherFilterBar = () => {
  return (
    <div className="mt-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-end">
        {/* Search */}
        <div className="flex-1">
          <label className="mb-1 block text-xs font-medium text-slate-500">
            Search
          </label>

          <div className="relative">
            <Search
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search by name, subject, email or phone..."
              className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-4 pr-10 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Department */}
        <div className="w-full xl:w-44">
          <label className="mb-1 block text-xs font-medium text-slate-500">
            Department
          </label>

          <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
            <option>All Departments</option>
            <option>Science</option>
            <option>Languages</option>
            <option>Computer Science</option>
            <option>Arts</option>
            <option>Commerce</option>
          </select>
        </div>

        {/* Subject */}
        <div className="w-full xl:w-40">
          <label className="mb-1 block text-xs font-medium text-slate-500">
            Subject
          </label>

          <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
            <option>All Subjects</option>
            <option>Mathematics</option>
            <option>Physics</option>
            <option>English</option>
            <option>Urdu</option>
            <option>Computer Science</option>
          </select>
        </div>

        {/* Status */}
        <div className="w-full xl:w-36">
          <label className="mb-1 block text-xs font-medium text-slate-500">
            Status
          </label>

          <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Filter */}
        <button className="flex  items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:shadow-sm">
          <Filter size={18} />
          Filter
        </button>

        {/* Reset */}
        <button className="flex  items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 hover:rotate-180">
          <RotateCw size={18} />
        </button>
      </div>
    </div>
  );
};

export default TeacherFilterBar;
