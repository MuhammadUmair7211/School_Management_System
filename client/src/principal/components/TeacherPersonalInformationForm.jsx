import { UserRound } from "lucide-react";

const PersonalInformationForm = () => {
  return (
    <div className="rounded-xl border border-slate-200 p-4 shadow-sm">
      {/* Heading */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
          <UserRound className="h-5 w-5 text-blue-600" />
        </div>

        <h2 className="text-lg font-semibold text-slate-800">
          Personal Information
        </h2>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
        {/* First Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            First Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            placeholder="Enter first name"
            className="w-full border border-slate-200 p-3 text-sm outline-none transition-all duration-300 "
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Last Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            placeholder="Enter last name"
            className="w-full border border-slate-200 p-3 text-sm outline-none transition-all duration-300 "
          />
        </div>

        {/* Gender */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Gender <span className="text-red-500">*</span>
          </label>

          <select className="w-full border border-slate-200 p-3 text-sm outline-none transition-all duration-300">
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Date of Birth <span className="text-red-500">*</span>
          </label>

          <input
            type="date"
            className="w-full border border-slate-200 p-3 text-sm outline-none transition-all duration-300 "
          />
        </div>

        {/* Qualification */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Qualification <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            placeholder="e.g. M.Sc Computer Science"
            className="w-full border border-slate-200 p-3 text-sm outline-none transition-all duration-300 "
          />
        </div>

        {/* Experience */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Experience <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            placeholder="e.g. 5 Years"
            className="w-full border border-slate-200 p-3 text-sm outline-none transition-all duration-300 "
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationForm;
