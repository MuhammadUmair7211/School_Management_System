import { RotateCcw, Search } from "lucide-react";
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
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
              placeholder="Search by name, roll no, admission no, or father name..."
              className="p-2 w-full border border-slate-200 pl-10 pr-4 outline-none transition "
            />
          </div>
        </div>

        {/* Class */}
        <div className="w-full sm:w-48">
          <label className="mb-2 block text-sm font-medium text-slate-600">
            Class
          </label>

          <select
            value={classSearch}
            onChange={(e) => setClassSearch(e.target.value)}
            className="p-2 w-full border border-slate-200 outline-none cursor-pointer"
          >
            <option value="all">All Classes</option>
            {allClasses.map((singleClass) => {
              return (
                <option key={singleClass} value={singleClass}>
                  {singleClass}
                </option>
              );
            })}
          </select>
        </div>

        {/* Section */}
        <div className="w-full sm:w-48">
          <label className="mb-2 block text-sm font-medium text-slate-600">
            Section
          </label>

          <select
            value={sectionSearch}
            onChange={(e) => setSectionSearch(e.target.value)}
            className="p-2 w-full border border-slate-200 outline-none cursor-pointer"
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>

        {/* Status */}
        <div className="w-full sm:w-48">
          <label className="mb-2 block text-sm font-medium text-slate-600">
            Status
          </label>

          <select
            value={statusSearch}
            onChange={(e) => setStatusSearch(e.target.value)}
            className="w-full border border-slate-200 px-4 py-2 outline-none cursor-pointer"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">In Active</option>
          </select>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-2 border border-slate-300 bg-white px-5 py-2 text-slate-700 transition hover:bg-slate-100 cursor-pointer duration-300"
        >
          <RotateCcw size={18} />
          Reset
        </button>
      </div>
    </div>
  );
};

export default StudentFilterBar;
