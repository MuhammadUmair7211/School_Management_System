import { Mail } from "lucide-react";

const TeacherContactInformationForm = () => {
  return (
    <div className="rounded-xl border border-slate-200 p-4 shadow-sm">
      {/* Heading */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
          <Mail className="h-5 w-5 text-emerald-600" />
        </div>

        <h2 className="text-lg font-semibold text-slate-800">
          Contact Information
        </h2>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email Address <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <input
              type="email"
              placeholder="e.g. teacher@example.com"
              className="w-full border border-slate-200 p-3 text-sm outline-none transition-all duration-300 "
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Phone Number <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <input
              type="tel"
              placeholder="e.g. 03XXXXXXXXX"
              className="w-full border border-slate-200 p-3 text-sm outline-none transition-all duration-300 "
            />
          </div>
        </div>

        {/* Address */}
        <div className="lg:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Address <span className="text-red-500">*</span>
          </label>

          <textarea
            rows={4}
            placeholder="Enter complete address"
            className="w-full resize-none border border-slate-200 p-3 text-sm outline-none transition-all duration-300 "
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherContactInformationForm;
