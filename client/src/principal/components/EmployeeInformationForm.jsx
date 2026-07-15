const EmployeeInformationForm = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      {/* Heading */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-violet-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 14c2.761 0 5 2.239 5 5M9 14c-2.761 0-5 2.239-5 5m10-8a4 4 0 11-8 0 4 4 0 018 0zm8 0a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-800">
            Employee Information
          </h2>
        </div>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
        {/* Employee ID */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Employee ID
            <span className="ml-1 text-red-500">*</span>
          </label>

          <input
            type="text"
            placeholder="e.g. EMP001"
            className="w-full  border border-slate-200 p-3 text-sm text-slate-700 outline-none transition-all duration-300 "
          />
        </div>

        {/* Joining Date */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Joining Date
            <span className="ml-1 text-red-500">*</span>
          </label>

          <input
            type="date"
            className="w-full  border border-slate-200 p-3 text-sm text-slate-700 outline-none transition-all duration-300"
          />
        </div>

        {/* Status */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Status
            <span className="ml-1 text-red-500">*</span>
          </label>

          <select
            className="w-full border border-slate-200 p-3 text-sm text-slate-700 outline-none transition-all duration-300"
            defaultValue="Active"
          >
            <option>Active</option>
            <option>Inactive</option>
            <option>On Leave</option>
            <option>Resigned</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default EmployeeInformationForm;
