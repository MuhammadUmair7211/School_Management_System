import { Wallet } from "lucide-react";

const TeacherSalaryInformationForm = () => {
  return (
    <div className="rounded-xl border border-slate-200 p-4 shadow-sm">
      {/* Heading */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100">
          <Wallet className="h-5 w-5 text-violet-600" />
        </div>

        <h2 className="text-lg font-semibold text-slate-800">
          Salary Information
        </h2>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {/* Monthly Salary */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Monthly Salary <span className="text-red-500">*</span>
          </label>

          <div className="flex overflow-hidden  border border-slate-200 transition-all duration-300">
            {/* Prefix */}
            <span className="flex items-center border-r border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-600">
              PKR
            </span>

            {/* Input */}
            <input
              type="number"
              placeholder="Enter monthly salary"
              className="w-full px-4 py-3 text-sm outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSalaryInformationForm;
