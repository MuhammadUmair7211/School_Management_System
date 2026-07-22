import { useState } from "react";
import {
  BookOpen,
  Settings,
  Eye,
  Info,
  User,
  Users,
  DoorClosed,
  Calendar,
  Clock,
  Barcode,
  RotateCcw,
  Save,
  Shield,
  Book,
  Heart,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function AddNewClass() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    className: "",
    grade: "",
    section: "",
    classTeacher: "",
    academicYear: "",
    roomNumber: "",
    capacity: "",
    classCode: "",
    classTimings: "",
    description: "",
    color: "#6366F1",
    isActive: true,
    subjects: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleReset = () => {
    setFormData({
      className: "",
      grade: "",
      section: "",
      classTeacher: "",
      academicYear: "",
      roomNumber: "",
      capacity: "",
      classCode: "",
      classTimings: "",
      description: "",
      color: "#6366F1",
      isActive: true,
      subjects: "",
    });
  };

  return (
    <div className=" text-slate-800 font-sans">
      <Header
        heading="Add New Class"
        details="Fill in the details to register a new class in the system"
        buttonText="Back to Classes"
        onClick={() => navigate("/classes")}
        icon={<ArrowLeft size={18} />}
      />
      {/* Main Grid Container */}
      <div className="mt-2 grid grid-cols-1 lg:grid-cols-3 gap-2">
        {/* LEFT COLUMN - Forms */}
        <div className="lg:col-span-2 space-y-2">
          {/* Section 1: Class Information */}
          <div className="rounded-xl p-4 border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                Class Information
              </h2>
            </div>

            {/* Form Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Class Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  placeholder="Enter class name (e.g. Class 8)"
                  className="w-full text-sm p-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Grade/Standard <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full text-sm p-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none text-slate-600"
                  >
                    <option value="">Select grade/standard</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Section <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="section"
                  value={formData.section}
                  onChange={handleChange}
                  placeholder="Enter section (e.g. A)"
                  className="w-full text-sm p-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Form Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Class Teacher <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="classTeacher"
                    value={formData.classTeacher}
                    onChange={handleChange}
                    className="w-full text-sm p-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none text-slate-600"
                  >
                    <option value="">Select class teacher</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Jane Smith">Jane Smith</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Academic Year <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="academicYear"
                    value={formData.academicYear}
                    onChange={handleChange}
                    className="w-full text-sm p-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none text-slate-600"
                  >
                    <option value="">Select academic year</option>
                    <option value="2026 - 2027">2026 - 2027</option>
                    <option value="2027 - 2028">2027 - 2028</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Form Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Room Number
                </label>
                <input
                  type="text"
                  name="roomNumber"
                  value={formData.roomNumber}
                  onChange={handleChange}
                  placeholder="Enter room number"
                  className="w-full text-sm p-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Class Capacity
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    placeholder="Enter maximum capacity"
                    className="w-full text-sm p-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 pr-10"
                  />
                  <Users className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Form Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
                  Class Code
                  <Info className="w-3.5 h-3.5 text-slate-400 cursor-pointer" />
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="classCode"
                    value={formData.classCode}
                    onChange={handleChange}
                    placeholder="Enter unique class code (optional)"
                    className="w-full text-sm p-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 pr-10"
                  />
                  <Barcode className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Class Timings
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="classTimings"
                    value={formData.classTimings}
                    onChange={handleChange}
                    placeholder="e.g. 08:00 AM - 02:00 PM"
                    className="w-full text-sm p-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 pr-10"
                  />
                  <Clock className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Description
              </label>
              <div className="relative">
                <textarea
                  name="description"
                  rows="3"
                  maxLength={250}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter class description or notes (optional)"
                  className="w-full text-sm p-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 resize-none"
                ></textarea>
                <span className="absolute bottom-3 right-3 text-[11px] text-slate-400 font-medium">
                  {formData.description.length}/250
                </span>
              </div>
            </div>
          </div>

          {/* Section 2: Additional Settings */}
          <div className="rounded-xl p-4 border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <Settings className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                Additional Settings
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Class Color */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Class Color
                </label>
                <div className="flex items-center gap-2">
                  <div
                    className="w-10 h-10 rounded-lg shrink-0 border border-slate-200"
                    style={{ backgroundColor: formData.color }}
                  ></div>
                  <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    className="w-full text-sm p-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-mono"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1.5">
                  Choose a color to identify this class
                </p>
              </div>

              {/* Class Status */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Class Status
                </label>
                <div className="flex items-center gap-3 py-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        isActive: !prev.isActive,
                      }))
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
                  <span className="text-sm font-medium text-slate-700">
                    {formData.isActive ? "Active" : "Inactive"}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Inactive classes will be hidden from lists
                </p>
              </div>
            </div>

            {/* Subjects */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Subjects (Optional)
              </label>
              <div className="relative">
                <select
                  name="subjects"
                  value={formData.subjects}
                  onChange={handleChange}
                  className="w-full text-sm p-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none text-slate-600"
                >
                  <option value="">Select subjects for this class</option>
                  <option value="Maths">Mathematics</option>
                  <option value="Science">Science</option>
                  <option value="English">English</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <p className="text-[11px] text-slate-400 mt-1.5">
                You can add or remove subjects later
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Cards */}
        <div className="space-y-2">
          {/* Card 1: Class Preview */}
          <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                Class Preview
              </h2>
            </div>

            <div className="rounded-xl p-4 border border-slate-200 flex flex-col items-center text-center space-y-4">
              {/* Large Icon Box */}
              <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                <BookOpen className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {formData.className || "Class 8"} - {formData.section || "A"}
                </h3>
                <p className="text-xs font-medium text-indigo-600 mt-1">
                  {formData.grade || "Grade 8"} &bull; Section{" "}
                  {formData.section || "A"}
                </p>
              </div>

              {/* Info List */}
              <div className="w-full pt-4 space-y-3.5 text-xs text-slate-600 border-t border-slate-100/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-indigo-500" />
                    <span>Teacher</span>
                  </div>
                  <span className="font-semibold text-slate-700">
                    {formData.classTeacher || "Not Assigned"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-indigo-500" />
                    <span>Students</span>
                  </div>
                  <span className="font-semibold text-slate-700">
                    {formData.capacity
                      ? `${formData.capacity} Students`
                      : "0 Students"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DoorClosed className="w-4 h-4 text-indigo-500" />
                    <span>Room</span>
                  </div>
                  <span className="font-semibold text-slate-700">
                    {formData.roomNumber || "Not Assigned"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-indigo-500" />
                    <span>Academic Year</span>
                  </div>
                  <span className="font-semibold text-slate-700">
                    {formData.academicYear || "2026 - 2027"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Information */}
          <div className="rounded-xl p-4 border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <Info className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Information</h2>
            </div>

            <div className="rounded-xl p-5 border border-slate-200 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-indigo-100/60 text-indigo-600 rounded-md shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">
                    Class name should be unique
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Each class must have a teacher assigned
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-indigo-100/60 text-indigo-600 rounded-md shrink-0 mt-0.5">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">
                    You can manage subjects
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    after creating the class
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-indigo-100/60 text-indigo-600 rounded-md shrink-0 mt-0.5">
                  <Book className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">
                    Class code is useful for
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    identification and reports
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-indigo-100/60 text-indigo-600 rounded-md shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">
                    Capacity helps in managing
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    class strength
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM ACTION BUTTONS */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-indigo-200 text-indigo-600 text-sm font-semibold hover:bg-indigo-50/50 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>

            <button
              type="button"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-md shadow-indigo-200 transition-all active:scale-[0.98]"
            >
              <Save className="w-4 h-4" />
              Save Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
