import { BriefcaseBusiness } from "lucide-react";

const TeacherProfessionalInformationForm = () => {
  return (
    <div className="rounded-xl border border-slate-200 p-4 shadow-sm">
      {/* Heading */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100">
          <BriefcaseBusiness className="h-5 w-5 text-orange-600" />
        </div>

        <h2 className="text-lg font-semibold text-slate-800">
          Professional Information
        </h2>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {/* Designation */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Designation <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            placeholder="e.g. Computer Science Teacher"
            className="w-full border border-slate-200 p-3 text-sm outline-none transition-all duration-300 "
          />
        </div>

        {/* Department */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Department <span className="text-red-500">*</span>
          </label>

          <select className="w-full border border-slate-200 bg-white p-3 text-sm outline-none transition-all duration-300 ">
            <option value="">Select department</option>
            <option>Mathematics</option>
            <option>Science</option>
            <option>Computer Science</option>
            <option>English</option>
            <option>Urdu</option>
            <option>History</option>
            <option>Geography</option>
            <option>Commerce</option>
            <option>Arts</option>
            <option>Sports</option>
            <option>Music</option>
          </select>
        </div>

        {/* Subject */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Subject <span className="text-red-500">*</span>
          </label>

          <select className="w-full border border-slate-200 p-3 text-sm outline-none transition-all duration-300 ">
            <option value="">Select subject</option>
            <option>Mathematics</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Biology</option>
            <option>Computer Science</option>
            <option>English</option>
            <option>Urdu</option>
            <option>History</option>
            <option>Geography</option>
            <option>Accounting</option>
            <option>Economics</option>
            <option>Drawing</option>
            <option>Physical Education</option>
            <option>Music</option>
          </select>
        </div>

        {/* Class Teacher */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Class Teacher Of
          </label>

          <select className="w-full border border-slate-200 p-3 text-sm outline-none transition-all duration-300 ">
            <option value="">Select class (optional)</option>
            <option>Nursery</option>
            <option>KG</option>
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
            <option>Class 4</option>
            <option>Class 5</option>
            <option>Class 6</option>
            <option>Class 7</option>
            <option>Class 8</option>
            <option>Class 9</option>
            <option>Class 10</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfessionalInformationForm;
