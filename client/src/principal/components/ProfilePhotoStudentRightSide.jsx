import {
  AlertCircle,
  CheckCircle2,
  FileText,
  ImagePlus,
  Upload,
  X,
} from "lucide-react";

const ProfilePhotoStudentRightSide = () => {
  return (
    <div className="sticky top-4 space-y-3">
      {/* Upload */}
      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
        <label className="group relative flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-slate-300 p-6 transition hover:border-blue-500 hover:bg-blue-50">
          <img
            src="https://ui-avatars.com/api/?name=Student&background=E2E8F0&color=475569&size=200"
            alt="Student"
            className="h-36 w-36 rounded-full border-4 border-slate-100 object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-700">
              <ImagePlus size={18} />
              Change Photo
            </div>
          </div>

          <div className="text-center mt-4">
            <h3 className="font-semibold text-slate-700">Click to Upload</h3>
            <p className="mt-1 text-sm text-slate-500">JPG, PNG or WEBP</p>
            <p className="text-xs text-slate-400">Maximum file size: 2 MB</p>
          </div>

          <input
            type="file"
            accept=".jpg,.jpeg,.png,.webp"
            className="hidden"
          />
        </label>

        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">
          <Upload size={18} />
          Upload Photo
        </button>
      </div>

      {/* Notes */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-2">
        <h3 className="mb-2 font-semibold text-amber-700">Important Notes</h3>

        <div className="space-y-2">
          <div className="flex gap-3">
            <ImagePlus className="text-amber-600" size={18} />
            <p className="text-sm text-slate-600">
              Upload a recent passport-size photograph.
            </p>
          </div>

          <div className="flex gap-3">
            <AlertCircle className="text-amber-600" size={18} />
            <p className="text-sm text-slate-600">
              Fields marked with (*) are mandatory.
            </p>
          </div>

          <div className="flex gap-3">
            <CheckCircle2 className="text-amber-600" size={18} />
            <p className="text-sm text-slate-600">
              Verify information before final submission.
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-3">
        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
          <FileText size={18} />
          Preview Form
        </button>

        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 bg-white py-3 font-semibold text-red-600 transition hover:bg-red-50">
          <X size={18} />
          Cancel Registration
        </button>
      </div>
    </div>
  );
};

export default ProfilePhotoStudentRightSide;
