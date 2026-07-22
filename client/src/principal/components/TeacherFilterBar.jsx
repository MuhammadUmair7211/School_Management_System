import { Search, RotateCw } from "lucide-react";

const TeacherFilterBar = () => {
  return (
    <div className="mt-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
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
              placeholder="Search by name, subject, email, or phone..."
              className="p-2 w-full border border-slate-200 pl-10 pr-4 outline-none transition "
            />
          </div>
        </div>

        {/* Department */}
        <div className="w-full sm:w-48">
          <label className="mb-2 block text-xs font-medium text-slate-600">
            Department
          </label>

          <select className="w-full border border-slate-200 p-2 text-sm outline-none ">
            <option>All Departments</option>
            <option>Science</option>
            <option>Languages</option>
            <option>Computer Science</option>
            <option>Arts</option>
            <option>Commerce</option>
          </select>
        </div>

        {/* Subject */}
        <div className="w-full sm:w-48">
          <label className="mb-2 block text-xs font-medium text-slate-500">
            Subject
          </label>

          <select className="w-full border border-slate-200 p-2 text-sm outline-none">
            <option>All Subjects</option>
            <option>Mathematics</option>
            <option>Physics</option>
            <option>English</option>
            <option>Urdu</option>
            <option>Computer Science</option>
          </select>
        </div>

        {/* Status */}
        <div className="w-full sm:w-48">
          <label className="mb-2 block text-xs font-medium text-slate-500">
            Status
          </label>

          <select className="w-full border border-slate-200 p-2 text-sm outline-none ">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Reset */}
        <button className="flex items-center gap-2 border border-slate-300 bg-white px-5 py-2 text-slate-700 transition hover:bg-slate-100 cursor-pointer duration-300">
          <RotateCw size={18} />
          Reset
        </button>
      </div>
    </div>
  );
};

export default TeacherFilterBar;
