import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addExam } from "../../slices/examSlice";
import { useNavigate } from "react-router-dom";
import {
  FileSpreadsheet,
  Calendar,
  ChevronDown,
  Eye,
  Info,
  Lightbulb,
  Check,
  Upload,
  X,
} from "lucide-react";

export default function AddNewExamForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { classes } = useSelector((state) => state.classes);
  const classOptions = classes.map((option) => `Class ${option.class}`);
  const initialFormData = {
    examinationName: "",
    examinationType: "",
    academicYear: "2025 - 2026",
    term: "",
    class: "",
    section: "",
    startDate: "",
    endDate: "",
    roomNumber: "",
    startTime: "",
    endTime: "",
    resultDate: "",
    maxMarks: "",
    passingMarks: "",
    description: "",
    instructions: "",
    syllabus: null,
    status: "upcoming",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const examinationTypes = [
    "Monthly Test",
    "Mid Term Examination",
    "Final Term Examination",
    "Annual Examination",
  ];

  const terms = ["First Term", "Second Term", "Third Term", "Final Term"];

  const academicYears = [
    "2024 - 2025",
    "2025 - 2026",
    "2026 - 2027",
    "2027 - 2028",
  ];

  // Handle all text, select, date and time inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,

      // Reset section when class changes
      ...(name === "classGrade" && {
        section: "",
      }),
    }));

    // Remove field error while editing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle syllabus upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        syllabus: "Only PDF, DOC, or DOCX files are allowed.",
      }));

      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        syllabus: "File size must be less than 10MB.",
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      syllabus: file,
    }));

    setErrors((prev) => ({
      ...prev,
      syllabus: "",
    }));
  };

  // Remove uploaded syllabus
  const removeFile = () => {
    setFormData((prev) => ({
      ...prev,
      syllabus: null,
    }));

    setErrors((prev) => ({
      ...prev,
      syllabus: "",
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.examinationName.trim()) {
      newErrors.examinationName = "Examination name is required.";
    }

    if (!formData.examinationType) {
      newErrors.examinationType = "Please select examination type.";
    }

    if (!formData.term) {
      newErrors.term = "Please select term.";
    }

    if (!formData.classGrade) {
      newErrors.classGrade = "Please select class.";
    }

    if (!formData.startDate) {
      newErrors.startDate = "Start date is required.";
    }

    if (!formData.endDate) {
      newErrors.endDate = "End date is required.";
    }

    if (!formData.startTime) {
      newErrors.startTime = "Start time is required.";
    }

    if (!formData.endTime) {
      newErrors.endTime = "End time is required.";
    }

    if (!formData.maxMarks) {
      newErrors.maxMarks = "Maximum marks are required.";
    }

    if (!formData.passingMarks) {
      newErrors.passingMarks = "Passing marks are required.";
    }

    // Passing marks cannot exceed max marks
    if (
      formData.maxMarks &&
      formData.passingMarks &&
      Number(formData.passingMarks) > Number(formData.maxMarks)
    ) {
      newErrors.passingMarks =
        "Passing marks cannot be greater than maximum marks.";
    }

    // End date cannot be before start date
    if (
      formData.startDate &&
      formData.endDate &&
      formData.endDate < formData.startDate
    ) {
      newErrors.endDate = "End date cannot be before start date.";
    }

    // End time validation
    if (
      formData.startTime &&
      formData.endTime &&
      formData.startDate === formData.endDate &&
      formData.startTime >= formData.endTime
    ) {
      newErrors.endTime = "End time must be after start time.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    dispatch(addExam());
    alert("Examination created successfully!");
    navigate("/examinations");
  };

  // Reset form
  const handleCancel = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <main className="mt-2 flex flex-1 gap-2">
      {/* ================= LEFT FORM ================= */}
      <div className="flex-1 min-w-0">
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-slate-200 shadow-sm p-4"
        >
          {/* ================= EXAMINATION DETAILS ================= */}

          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-blue-50 p-1.5 rounded-lg text-blue-600">
                <FileSpreadsheet className="w-5 h-5" />
              </div>

              <h3 className="font-bold text-slate-800 text-base">
                Examination Details
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
              {/* Examination Name */}

              <InputField
                label="Examination Name"
                name="examinationName"
                value={formData.examinationName}
                onChange={handleChange}
                placeholder="Enter examination name"
                required
                error={errors.examinationName}
              />

              {/* Examination Type */}

              <SelectField
                label="Examination Type"
                name="examinationType"
                value={formData.examinationType}
                onChange={handleChange}
                placeholder="Select type"
                options={examinationTypes}
                required
                error={errors.examinationType}
              />

              {/* Academic Year */}

              <SelectField
                label="Academic Year"
                name="academicYear"
                value={formData.academicYear}
                onChange={handleChange}
                options={academicYears}
                required
              />

              {/* Term */}

              <SelectField
                label="Term"
                name="term"
                value={formData.term}
                onChange={handleChange}
                placeholder="Select term"
                options={terms}
                required
                error={errors.term}
              />

              {/* Class */}

              <SelectField
                label="Class"
                name="classGrade"
                value={formData.classGrade}
                onChange={handleChange}
                placeholder="Select class"
                options={classOptions}
                required
                error={errors.classGrade}
              />

              {/* Start Date */}

              <DateField
                label="Start Date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                error={errors.startDate}
              />

              {/* End Date */}

              <DateField
                label="End Date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
                error={errors.endDate}
              />

              {/* Start Time */}

              <TimeField
                label="Start Time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
                error={errors.startTime}
              />

              {/* End Time */}

              <TimeField
                label="End Time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                required
                error={errors.endTime}
              />

              {/* Result Date */}

              <DateField
                label="Result Declaration Date"
                name="resultDate"
                value={formData.resultDate}
                onChange={handleChange}
                optional
              />

              {/* Max Marks */}

              <InputField
                label="Max Marks"
                name="maxMarks"
                type="number"
                value={formData.maxMarks}
                onChange={handleChange}
                placeholder="Enter maximum marks"
                min="1"
                required
                error={errors.maxMarks}
              />

              {/* Passing Marks */}

              <InputField
                label="Passing Marks"
                name="passingMarks"
                type="number"
                value={formData.passingMarks}
                onChange={handleChange}
                placeholder="Enter passing marks"
                min="1"
                required
                error={errors.passingMarks}
              />

              {/*  Room Number */}
              <InputField
                label="Room Number"
                name="roomNumber"
                value={formData.roomNumber}
                onChange={handleChange}
                placeholder="Enter room number"
                optional
              />
            </div>
          </div>

          {/* ================= ADDITIONAL INFORMATION ================= */}

          <div className="mt-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-blue-50 p-1.5 rounded-lg text-blue-600">
                <FileSpreadsheet className="w-5 h-5" />
              </div>

              <h3 className="font-bold text-slate-800 text-base">
                Additional Information
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {/* Description */}
              <div className="space-y-1.5 border border-slate-200 p-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Description{" "}
                  <span className="text-slate-400 font-normal">(Optional)</span>
                </label>

                <div className="relative">
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    maxLength={300}
                    rows={3}
                    placeholder="Enter examination description..."
                    className="form-input resize-none outline-none w-full text-sm"
                  />

                  <span className="absolute right-3 bottom-2 text-[11px] text-slate-400">
                    {formData.description.length}/300
                  </span>
                </div>
              </div>

              {/* Instructions */}

              <div className="space-y-1.5 border border-slate-200 p-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Instructions for Students{" "}
                  <span className="text-slate-400 font-normal">(Optional)</span>
                </label>

                <div className="relative">
                  <textarea
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleChange}
                    maxLength={300}
                    rows={3}
                    placeholder="Enter instructions for students..."
                    className="form-input resize-none outline-none w-full text-sm"
                  />

                  <span className="absolute right-3 bottom-2 text-[11px] text-slate-400">
                    {formData.instructions.length}/300
                  </span>
                </div>
              </div>
            </div>

            {/* ================= FILE UPLOAD ================= */}

            <div className="mt-4">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Attach Syllabus{" "}
                <span className="text-slate-400 font-normal">(Optional)</span>
              </label>

              {!formData.syllabus ? (
                <label className="border border-dashed border-slate-200 rounded-xl p-4 bg-slate-50/50 hover:bg-slate-50 transition flex items-center gap-4 cursor-pointer">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                    <Upload className="w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-700">
                      Click to upload or drag and drop
                    </p>

                    <p className="text-[11px] text-slate-400">
                      PDF, DOC, or DOCX (Max. 10MB)
                    </p>
                  </div>

                  <input
                    type="file"
                    hidden
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                  />
                </label>
              ) : (
                <div className="border border-blue-100 rounded-xl p-4 bg-blue-50/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg text-blue-600">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-slate-700">
                        {formData.syllabus.name}
                      </p>

                      <p className="text-[11px] text-slate-400">
                        {(formData.syllabus.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-1.5 rounded-lg hover:bg-white text-slate-400 hover:text-red-500 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {errors.syllabus && (
                <p className="text-[10px] text-red-500 mt-1">
                  {errors.syllabus}
                </p>
              )}
            </div>
          </div>

          {/* ================= ACTION BUTTONS ================= */}

          <div className="flex items-center justify-between mt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-5 py-3 border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 shadow-md shadow-blue-600/30 transition flex items-center gap-2 cursor-pointer duration-300"
            >
              <FileSpreadsheet className="w-4 h-4" />
              Create Examination
            </button>
          </div>
        </form>
      </div>

      {/* ================= RIGHT SIDEBAR ================= */}
      <div className="w-80 space-y-4 shrink-0 hidden xl:block">
        {/* Preview */}

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-2">
          <div className="flex items-center gap-2 pb-3 border-b border-blue-500">
            <Eye className="w-4 h-4 text-blue-600" />

            <h4 className="font-bold text-slate-800 text-sm">
              Examination Preview
            </h4>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between gap-3">
              <span className="text-slate-500">Examination Name</span>

              <span className="font-semibold text-slate-800 text-right max-w-38 truncate">
                {formData.examinationName || "-"}
              </span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-slate-500">Type</span>

              <span className="font-semibold text-slate-800 text-right">
                {formData.examinationType || "-"}
              </span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-slate-500">Class / Section</span>

              <span className="font-semibold text-slate-800 text-right">
                {formData.classGrade
                  ? `${formData.classGrade}${
                      formData.section ? ` / ${formData.section}` : ""
                    }`
                  : "-"}
              </span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-slate-500">Term</span>

              <span className="font-semibold text-slate-800 text-right">
                {formData.term || "-"}
              </span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-slate-500">Dates</span>

              <span className="font-semibold text-slate-800 text-right">
                {formData.startDate || "-"} to {formData.endDate || "-"}
              </span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-slate-500">Time</span>

              <span className="font-semibold text-slate-800 text-right">
                {formData.startTime || "-"} - {formData.endTime || "-"}
              </span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-slate-500">Max Marks</span>

              <span className="font-semibold text-slate-800">
                {formData.maxMarks || "-"}
              </span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-slate-500">Passing Marks</span>

              <span className="font-semibold text-slate-800">
                {formData.passingMarks || "-"}
              </span>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-slate-500">Status</span>

              <span className="bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded text-[11px]">
                Active
              </span>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 flex gap-3 items-start">
          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />

          <div>
            <h5 className="font-bold text-blue-950 text-xs mb-1">Note</h5>

            <p className="text-[11px] text-blue-800/80 leading-relaxed">
              Please ensure all information is correct before creating the
              examination. You can edit the details later if needed.
            </p>
          </div>
        </div>

        {/* Tips */}

        <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2 text-amber-700">
            <Lightbulb className="w-4 h-4" />

            <h5 className="font-bold text-xs">Tips</h5>
          </div>

          <ul className="space-y-2 text-[11px] text-amber-900/80">
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
              Choose the correct exam type.
            </li>

            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
              Set appropriate dates and time.
            </li>

            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
              Provide clear instructions to students.
            </li>

            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
              Upload syllabus for reference.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   REUSABLE INPUT FIELD
========================================================= */

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  optional,
  error,
  min,
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
        {optional && (
          <span className="text-slate-400 font-normal ml-1">(Optional)</span>
        )}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        className={`form-input border text-sm border-slate-200 p-2 w-full outline-none ${
          error ? "border-red-400" : ""
        }`}
      />

      {error && <p className="text-[10px] text-red-500">{error}</p>}
    </div>
  );
}

/* =========================================================
   REUSABLE SELECT FIELD
========================================================= */

function SelectField({
  label,
  name,
  value,
  onChange,
  placeholder,
  options = [],
  required,
  optional,
  disabled = false,
  error,
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
        {optional && (
          <span className="text-slate-400 font-normal ml-1">(Optional)</span>
        )}
      </label>

      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`form-input appearance-none border text-sm border-slate-200 p-2 pr-8 w-full outline-none ${
            value ? "text-slate-700" : "text-slate-400"
          } ${
            disabled ? "bg-slate-50 cursor-not-allowed" : "cursor-pointer"
          } ${error ? "border-red-400" : ""}`}
        >
          {placeholder && <option value="">{placeholder}</option>}

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      {error && <p className="text-[10px] text-red-500">{error}</p>}
    </div>
  );
}

/* =========================================================
   REUSABLE DATE FIELD
========================================================= */

function DateField({
  label,
  name,
  value,
  onChange,
  required,
  optional,
  error,
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
        {optional && (
          <span className="text-slate-400 font-normal ml-1">(Optional)</span>
        )}
      </label>

      <div className="relative">
        <input
          type="date"
          name={name}
          value={value}
          onChange={onChange}
          className={`form-input border text-sm border-slate-200 p-2 pr-9 w-full outline-none ${
            error ? "border-red-400" : ""
          }`}
        />

        <Calendar className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      {error && <p className="text-[10px] text-red-500">{error}</p>}
    </div>
  );
}

/* =========================================================
   REUSABLE TIME FIELD
========================================================= */

function TimeField({
  label,
  name,
  value,
  onChange,
  required,
  optional,
  error,
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
        {optional && (
          <span className="text-slate-400 font-normal ml-1">(Optional)</span>
        )}
      </label>

      <div className="relative">
        <input
          type="time"
          name={name}
          value={value}
          onChange={onChange}
          className={`form-input border border-slate-200 p-2 text-sm w-full outline-none ${
            error ? "border-red-400" : ""
          }`}
        />
      </div>

      {error && <p className="text-[10px] text-red-500">{error}</p>}
    </div>
  );
}
