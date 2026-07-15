import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";

const Pagination = ({
  currentPage,
  totalPages,
  itemsPerPage,
  totalStudents,
}) => {
  const start = totalStudents === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalStudents);

  return (
    <div className="mt-2 rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Results */}
        <p className="text-sm text-slate-500">
          Showing <span className="font-semibold text-slate-700">{start}</span>{" "}
          to <span className="font-semibold text-slate-700">{end}</span> of{" "}
          <span className="font-semibold text-slate-700">{totalStudents}</span>{" "}
          results
        </p>

        {/* Per Page */}
        <select
          defaultValue={itemsPerPage}
          className="rounded-lg border cursor-pointer border-slate-200 px-3 py-2 text-sm"
        >
          <option value={10}>10 per page</option>
          <option value={25}>25 per page</option>
          <option value={50}>50 per page</option>
          <option value={100}>100 per page</option>
        </select>

        {/* Pagination */}
        <div className="flex items-center gap-2">
          <button className="rounded-lg border border-slate-200 p-2 cursor-pointer">
            <ChevronsLeft size={18} />
          </button>

          <button className="rounded-lg border border-slate-200 p-2 cursor-pointer">
            <ChevronLeft size={18} />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`h-9 w-9 rounded-lg ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "border border-slate-200 hover:bg-slate-100 cursor-pointer"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button className="rounded-lg border border-slate-200 p-2 cursor-pointer">
            <ChevronRight size={18} />
          </button>

          <button className="rounded-lg border border-slate-200 p-2 cursor-pointer">
            <ChevronsRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
