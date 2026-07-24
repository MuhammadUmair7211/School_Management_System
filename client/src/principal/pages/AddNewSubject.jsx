import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  School,
  BookOpen,
  ChevronDown,
  ArrowLeft,
  Code,
  Layers,
  Clock,
  User,
  AlignLeft,
  Save,
  BookMarked,
} from "lucide-react";
import Header from "../components/Header";

export default function AddNewSubject() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    subjectName: "",
    subjectCode: "",
    classGrade: "",
    subjectType: "",
    creditHours: "",
    teacher: "",
    description: "",
    isActive: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="font-sans">
      <Header
        heading="Add New Subject"
        details="Fill in the details to add a new subject to the system"
        buttonText="Back to Subjects"
        icon={<ArrowLeft size={18} />}
        onClick={() => navigate("/subjects")}
      />

      {/* PAGE CONTENT */}
      <main className="mt-2 space-y-6">
        {/* MAIN FORM CARD */}
        <div className="rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
          {/* Header Section Inside Card */}
          <div className="p-4 border-b border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <BookMarked className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Subject Information
              </h2>
              <p className="text-xs text-slate-400">
                Enter the subject details carefully.
              </p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="p-4 space-y-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Subject Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="subjectName"
                    value={formData.subjectName}
                    onChange={handleChange}
                    placeholder="Enter subject name"
                    className="w-full pl-10 p-2 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Subject Code <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Code className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="subjectCode"
                    value={formData.subjectCode}
                    onChange={handleChange}
                    placeholder="Enter subject code (e.g. MATH101)"
                    className="w-full pl-10 p-2 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 text-slate-800"
                  />
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Class / Grade <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <School className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    name="classGrade"
                    value={formData.classGrade}
                    onChange={handleChange}
                    className="w-full pl-10 p-2 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none bg-white text-slate-600"
                  >
                    <option value="">Select class or grade</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Subject Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Layers className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    name="subjectType"
                    value={formData.subjectType}
                    onChange={handleChange}
                    className="w-full pl-10 p-2 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none bg-white text-slate-600"
                  >
                    <option value="">Select subject type</option>
                    <option value="Theory">Theory</option>
                    <option value="Practical">Practical</option>
                    <option value="Both">Both</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Credit Hours
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="creditHours"
                    value={formData.creditHours}
                    onChange={handleChange}
                    placeholder="Enter credit hours (e.g. 3)"
                    className="w-full pl-10 p-2 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Teacher (Optional)
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    name="teacher"
                    value={formData.teacher}
                    onChange={handleChange}
                    className="w-full pl-10 p-2 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none bg-white text-slate-600"
                  >
                    <option value="">Select teacher</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Jane Smith">Jane Smith</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Description Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Description
              </label>
              <div className="relative">
                <AlignLeft className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <textarea
                  name="description"
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter subject description..."
                  className="w-full pl-10 p-2 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 text-slate-800 resize-y"
                ></textarea>
              </div>
            </div>

            {/* Status Section */}
            <div className="p-4 rounded-xl border border-slate-200 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-900">Status</h4>
                <p className="text-[11px] text-slate-400">
                  Enable this if the subject is active
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setFormData((p) => ({ ...p, isActive: !p.isActive }))
                  }
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    formData.isActive ? "bg-emerald-500" : "bg-slate-200"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      formData.isActive ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
                <span className="text-xs font-semibold text-emerald-600">
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              className="px-5 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors shadow-sm"
            >
              Cancel
            </button>

            <button
              type="button"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md shadow-indigo-200 transition-all active:scale-[0.98]"
            >
              <Save className="w-3.5 h-3.5" />
              Create Subject
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
