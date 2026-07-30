import { RefreshCw, Search, ChevronDown } from "lucide-react";

const SubjectFilterBar = ({
  search,
  setSearch,
  category,
  setCategory,
  classFilter,
  setClassFilter,
  status,
  setStatus,
  onReset,
}) => {
  return (
    <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      {/* Filter Header */}
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-800">
            Filter Subjects
          </h3>

          <p className="text-xs text-slate-500">
            Search and filter subjects by category, class, or status.
          </p>
        </div>

        {/* Reset Button */}
        <button
          type="button"
          onClick={onReset}
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
            htmlFor="subject-search"
            className="mb-1.5 block text-xs font-semibold text-slate-600"
          >
            Search Subject
          </label>

          <div className="relative">
            <input
              id="subject-search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search subject or code..."
              className="w-full border border-slate-200 bg-white px-3 py-2.5 pr-10 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
            />

            <Search
              size={17}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="subject-category"
            className="mb-1.5 block text-xs font-semibold text-slate-600"
          >
            Category
          </label>

          <div className="relative">
            <select
              id="subject-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full cursor-pointer appearance-none border border-slate-200 bg-white px-3 py-2.5 pr-9 text-sm font-medium text-slate-700 outline-none transition-all focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
            >
              <option value="all">All Categories</option>
              <option value="general">General</option>
              <option value="science">Science</option>
              <option value="arts">Arts</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        {/* Class */}
        <div>
          <label
            htmlFor="subject-class"
            className="mb-1.5 block text-xs font-semibold text-slate-600"
          >
            Class
          </label>

          <div className="relative">
            <select
              id="subject-class"
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              className="w-full cursor-pointer appearance-none border border-slate-200 bg-white px-3 py-2.5 pr-9 text-sm font-medium text-slate-700 outline-none transition-all focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
            >
              <option value="all">All Classes</option>
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
              <option value="4">Class 4</option>
              <option value="5">Class 5</option>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
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
            htmlFor="subject-status"
            className="mb-1.5 block text-xs font-semibold text-slate-600"
          >
            Status
          </label>

          <div className="relative">
            <select
              id="subject-status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full cursor-pointer appearance-none border border-slate-200 bg-white px-3 py-2.5 pr-9 text-sm font-medium text-slate-700 outline-none transition-all focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
            >
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
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

export default SubjectFilterBar;
