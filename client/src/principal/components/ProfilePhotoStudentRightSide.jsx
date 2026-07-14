import { Pencil, Upload, X } from "lucide-react";

const ProfilePhotoStudentRightSide = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Title */}
      <h2 className="text-lg font-semibold text-slate-800">Student Photo</h2>

      {/* Upload Card */}
      <div className="mt-4 rounded-xl border border-dashed border-slate-300 p-4 text-center">
        <img
          src="https://ui-avatars.com/api/?name=Student&background=E2E8F0&color=475569&size=180"
          alt="Student"
          className="mx-auto h-32 w-32 rounded-full border-4 border-slate-100 object-cover"
        />

        <h3 className="mt-4 text-base font-semibold text-slate-800">
          Upload Student Photo
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          JPG, PNG or WEBP (Maximum 2MB)
        </p>

        <label className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 duration-300">
          <Upload size={18} />
          Choose File
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.webp"
            className="hidden"
          />
        </label>
      </div>

      {/* Quick Note */}
      <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <div className="mb-2 flex items-center gap-2">
          <Pencil className="text-amber-600" size={18} />
          <h3 className="font-semibold text-amber-700">Quick Notes</h3>
        </div>

        <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
          <li>Fields marked with (*) are required.</li>
          <li>Verify all information before saving.</li>
          <li>Use a clear passport-size student photograph.</li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="mt-auto space-y-4">
        <button className="w-full rounded-lg bg-indigo-600 py-3 font-medium text-white transition hover:bg-indigo-700">
          Save & Next
        </button>

        <button className="w-full flex items-center justify-center gap-2 rounded-lg border border-red-200 px-5 py-3 font-medium text-red-600 transition hover:bg-red-50">
          <X size={18} />
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ProfilePhotoStudentRightSide;
