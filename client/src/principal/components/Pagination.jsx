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
  totalItems,
  setCurrentPage,
  setItemsPerPage,
}) => {
  // Calculate result range
  const start = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;

  const end = Math.min(currentPage * itemsPerPage, totalItems);

  // Go to first page
  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  // Go to previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Go to next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Go to last page
  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  // Change items per page
  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = Number(e.target.value);

    setItemsPerPage(newItemsPerPage);

    // Reset to first page
    // This prevents being on an invalid page
    setCurrentPage(1);
  };

  return (
    <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        {/* RESULTS INFO */}
        <p className="text-sm text-slate-500">
          Showing <span className="font-semibold text-slate-700">{start}</span>{" "}
          to <span className="font-semibold text-slate-700">{end}</span> of{" "}
          <span className="font-semibold text-slate-700">{totalItems}</span>{" "}
          results
        </p>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* ITEMS PER PAGE */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">Show</span>

            <select
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="h-9 cursor-pointer rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>

            <span className="text-sm text-slate-500">per page</span>
          </div>

          {/* PAGINATION BUTTONS */}
          <div className="flex items-center gap-1.5">
            {/* FIRST */}
            <button
              type="button"
              onClick={goToFirstPage}
              disabled={currentPage === 1}
              aria-label="First page"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronsLeft size={17} />
            </button>

            {/* PREVIOUS */}
            <button
              type="button"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={17} />
            </button>

            {/* PAGE NUMBERS */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;

                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-sm font-medium transition ${
                      currentPage === page
                        ? "bg-blue-600 text-white shadow-sm"
                        : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            {/* NEXT */}
            <button
              type="button"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={17} />
            </button>

            {/* LAST */}
            <button
              type="button"
              onClick={goToLastPage}
              disabled={currentPage === totalPages}
              aria-label="Last page"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronsRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
