import { RefreshCw, Search } from "lucide-react";
import { useSelector } from "react-redux";

export default function ExaminationFilterBar({
  exams,
  inputSearch,
  classSearch,
  termSearch,
  typeSearch,
  statusSearch,
  setClassSearch,
  setInputSearch,
  setTermSearch,
  setTypeSearch,
  setStatusSearch,
}) {
  const { classes } = useSelector((state) => state.classes);

  const terms = [...new Set(exams.map((exam) => exam.term))].sort();

  const examTypes = [
    ...new Set(exams.map((exam) => exam.examinationType)),
  ].sort();

  const classOptions = classes.map((option) => option.class);

  const handleReset = () => {
    setClassSearch("");
    setInputSearch("");
    setTermSearch("");
    setTypeSearch("");
    setStatusSearch("");
  };

  return (
    <div className="mt-2 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      {/* Filter Header */}
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-800">
            Filter Examinations
          </h3>
          <p className="text-xs text-slate-500">
            Search and filter examinations by class, term, type, or status.
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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {/* Search */}
        <div className="lg:col-span-1">
          <label
            htmlFor="examination-search"
            className="mb-1.5 block text-xs font-semibold text-slate-600"
          >
            Search Examination
          </label>

          <div className="relative">
            <input
              id="examination-search"
              type="text"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
              placeholder="Search examination..."
              className="w-full border border-slate-200 bg-white px-3 py-2.5 pr-10 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
            />

            <Search
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={17}
            />
          </div>
        </div>

        {/* Class */}
        <div>
          <label
            htmlFor="class-filter"
            className="mb-1.5 block text-xs font-semibold text-slate-600"
          >
            Class
          </label>

          <select
            id="class-filter"
            value={classSearch}
            onChange={(e) => setClassSearch(e.target.value)}
            className="w-full border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 outline-none transition-all focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
          >
            <option value="">All Classes</option>

            {classOptions.map((option) => (
              <option key={option} value={option}>
                Class {option}
              </option>
            ))}
          </select>
        </div>

        {/* Term */}
        <div>
          <label
            htmlFor="term-filter"
            className="mb-1.5 block text-xs font-semibold text-slate-600"
          >
            Academic Term
          </label>

          <select
            id="term-filter"
            value={termSearch}
            onChange={(e) => setTermSearch(e.target.value)}
            className="w-full border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 outline-none transition-all focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
          >
            <option value="">All Terms</option>

            {terms.map((term) => (
              <option key={term} value={term}>
                {term}
              </option>
            ))}
          </select>
        </div>

        {/* Examination Type */}
        <div>
          <label
            htmlFor="type-filter"
            className="mb-1.5 block text-xs font-semibold text-slate-600"
          >
            Examination Type
          </label>

          <select
            id="type-filter"
            value={typeSearch}
            onChange={(e) => setTypeSearch(e.target.value)}
            className="w-full border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 outline-none transition-all focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
          >
            <option value="">All Types</option>

            {examTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Status */}
        <div>
          <label
            htmlFor="status-filter"
            className="mb-1.5 block text-xs font-semibold text-slate-600"
          >
            Status
          </label>

          <select
            id="status-filter"
            value={statusSearch}
            onChange={(e) => setStatusSearch(e.target.value)}
            className="w-full border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 outline-none transition-all focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
          >
            <option value="">All Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
            <option value="postponed">Postponed</option>
            <option value="rescheduled">Rescheduled</option>
          </select>
        </div>
      </div>
    </div>
  );
}
