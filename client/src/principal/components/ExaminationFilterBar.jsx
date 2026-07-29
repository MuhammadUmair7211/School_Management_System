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
    setClassSearch("all");
    setInputSearch("");
    setTermSearch("all");
    setTypeSearch("all");
    setStatusSearch("all");
  };
  return (
    <div className="mt-2">
      <div className="flex items-center flex-wrap gap-2">
        {/* Search Input (Left Side) */}
        <div className="relative flex-1">
          <input
            type="text"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            placeholder="Search examination..."
            className="w-full border border-slate-200 text-gray-800 text-sm font-semibold p-3 cursor-pointer outline-none"
          />
          <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none hidden lg:block" />
        </div>

        {/* Dropdown 1: All Classes */}
        <div className="relative w-full md:w-44">
          <select
            value={classSearch}
            onChange={(e) => setClassSearch(e.target.value)}
            className="w-full border border-slate-200 text-gray-800 text-sm font-semibold p-3 cursor-pointer outline-none"
          >
            <option value="">All Classes</option>
            {classOptions.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>

        {/* Dropdown 2: All Terms */}
        <div className="relative w-full md:w-44">
          <select
            value={termSearch}
            onChange={(e) => setTermSearch(e.target.value)}
            className="w-full border border-slate-200 text-gray-800 text-sm font-semibold p-3 cursor-pointer outline-none"
          >
            <option value="">All Terms</option>
            {terms.map((term) => {
              return (
                <option key={term} value={term}>
                  {term}
                </option>
              );
            })}
          </select>
        </div>

        {/* Dropdown 3: All Types */}
        <div className="relative w-full md:w-44">
          <select
            value={typeSearch}
            onChange={(e) => setTypeSearch(e.target.value)}
            className="w-full border border-slate-200 text-gray-800 text-sm font-semibold p-3 cursor-pointer outline-none"
          >
            <option value="">All Types</option>
            {examTypes.map((type) => {
              return (
                <option key={type} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>

        {/* Dropdown 4: All Status */}
        <div className="relative w-full md:w-44">
          <select
            value={statusSearch}
            onChange={(e) => setStatusSearch(e.target.value)}
            className="w-full border border-slate-200 text-gray-800 text-sm font-semibold p-3 cursor-pointer outline-none"
          >
            <option value="">All Status</option>
            <option value="upcoming">upcoming</option>
            <option value="ongoing">ongoing</option>
            <option value="completed">completed</option>
            <option value="cancelled">cancelled</option>
            <option value="postponed">postponed</option>
            <option value="rescheduled">rescheduled</option>
          </select>
        </div>

        {/* Refresh */}
        <button
          onClick={handleReset}
          className="p-2.5 flex items-center gap-2 border border-slate-200 text-slate-600 transition-all duration-300 cursor-pointer hover:bg-slate-50"
        >
          <RefreshCw size={18} />
          Reset
        </button>
      </div>
    </div>
  );
}
