import { RefreshCw, Search, ChevronDown } from "lucide-react";
import { useSelector } from "react-redux";

const StudentFilterBar = ({
  inputSearch,
  setInputSearch,
  classSearch,
  setClassSearch,
  sectionSearch,
  setSectionSearch,
  setStatusSearch,
  statusSearch,
}) => {
  const { classes } = useSelector((state) => state.classes);

  const allClasses = classes.map((singleClass) => singleClass.class);

  const handleReset = () => {
    setInputSearch("");
    setClassSearch("all");
    setSectionSearch("all");
    setStatusSearch("all");
  };

  return (
    <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      {/* Filter Header */}
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-800">
            Filter Students
          </h3>

          <p className="text-xs text-slate-500">
            Search and filter students by class, section, or status.
          </p>
        </div>

        {/* Reset Button */}
        <button
          type="button"
          onClick={handleReset}
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
            htmlFor="student-search"
            className="mb-1.5 block text-xs font-semibold text-slate-600"
          >
            Search Student
          </label>

          <div className="relative">
            <input
              id="student-search"
              type="search"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
              placeholder="Search by name, roll no, admission no..."
              className="w-full border border-slate-200 bg-white px-3 py-2.5 pr-10 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
            />

            <Search
              size={17}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        {/* Class */}
        <div>
          <label
            htmlFor="student-class"
            className="mb-1.5 block text-xs font-semibold text-slate-600"
          >
            Class
          </label>

          <div className="relative">
            <select
              id="student-class"
              value={classSearch}
              onChange={(e) => setClassSearch(e.target.value)}
              className="w-full cursor-pointer appearance-none border border-slate-200 bg-white px-3 py-2.5 pr-9 text-sm font-medium text-slate-700 outline-none transition-all focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
            >
              <option value="all">All Classes</option>

              {allClasses.map((singleClass) => (
                <option key={singleClass} value={singleClass}>
                  Class {singleClass}
                </option>
              ))}
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        {/* Section */}
        <div>
          <label
            htmlFor="student-section"
            className="mb-1.5 block text-xs font-semibold text-slate-600"
          >
            Section
          </label>

          <div className="relative">
            <select
              id="student-section"
              value={sectionSearch}
              onChange={(e) => setSectionSearch(e.target.value)}
              className="w-full cursor-pointer appearance-none border border-slate-200 bg-white px-3 py-2.5 pr-9 text-sm font-medium text-slate-700 outline-none transition-all focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
            >
              <option value="all">All Sections</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
              <option value="D">Section D</option>
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
            htmlFor="student-status"
            className="mb-1.5 block text-xs font-semibold text-slate-600"
          >
            Status
          </label>

          <div className="relative">
            <select
              id="student-status"
              value={statusSearch}
              onChange={(e) => setStatusSearch(e.target.value)}
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

export default StudentFilterBar;
