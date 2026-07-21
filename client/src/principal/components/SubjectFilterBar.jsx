import {
  Search,
  ChevronDown,
  SlidersHorizontal,
  RotateCcw,
} from "lucide-react";

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
    <div className="mt-2 w-full rounded-xl border border-slate-200 p-4 shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        {/* LEFT SIDE */}
        <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {/* SEARCH */}
          <div className="sm:col-span-2 lg:col-span-1">
            <label className="mb-1.5 block text-xs font-medium text-slate-600">
              Search
            </label>

            <div className="relative">
              <Search
                size={17}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search subject or code..."
                className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>
          </div>

          {/* CATEGORY */}
          <FilterSelect
            label="Category"
            value={category}
            onChange={setCategory}
            options={[
              { value: "all", label: "All Categories" },
              { value: "general", label: "General" },
              { value: "science", label: "Science" },
              { value: "arts", label: "Arts" },
            ]}
          />

          {/* CLASS */}
          <FilterSelect
            label="Class"
            value={classFilter}
            onChange={setClassFilter}
            options={[
              { value: "all", label: "All Classes" },
              { value: "1", label: "Class 1" },
              { value: "2", label: "Class 2" },
              { value: "3", label: "Class 3" },
              { value: "4", label: "Class 4" },
              { value: "5", label: "Class 5" },
              { value: "6", label: "Class 6" },
              { value: "7", label: "Class 7" },
              { value: "8", label: "Class 8" },
              { value: "9", label: "Class 9" },
              { value: "10", label: "Class 10" },
              { value: "11", label: "Class 11" },
              { value: "12", label: "Class 12" },
            ]}
          />

          {/* STATUS */}
          <FilterSelect
            label="Status"
            value={status}
            onChange={setStatus}
            options={[
              { value: "all", label: "All Status" },
              { value: "Active", label: "Active" },
              { value: "Inactive", label: "Inactive" },
            ]}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98]"
          >
            <RotateCcw size={15} />
            Reset
          </button>

          <button
            type="button"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 active:scale-[0.98]"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>
      </div>
    </div>
  );
};

const FilterSelect = ({ label, value, onChange, options }) => {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-slate-600">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-full cursor-pointer appearance-none rounded-lg border border-slate-200 bg-slate-50 px-3 pr-9 text-sm font-medium text-slate-700 outline-none transition-all hover:border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>
    </div>
  );
};

export default SubjectFilterBar;
