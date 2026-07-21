import { useState } from "react";
import {
  CalendarDays,
  GraduationCap,
  BookOpen,
  Users,
  ClipboardCheck,
  Settings2,
  Save,
  Edit3,
  ChevronDown,
} from "lucide-react";
import SettingsHeader from "../components/SettingsHeader";

const AcademicSettings = () => {
  const [academicYear, setAcademicYear] = useState({
    currentYear: "2026 - 2027",
    startDate: "2026-07-01",
    endDate: "2027-06-30",
  });

  const [gradingSystem, setGradingSystem] = useState("Mark Based");
  const [passingMarks, setPassingMarks] = useState(40);

  const [classStructure, setClassStructure] = useState({
    sectionsPerClass: 5,
    defaultTeacherLoad: 3,
    defaultSubjectLoad: 6,
  });

  const [maxElectiveSubjects, setMaxElectiveSubjects] = useState(3);

  const [attendanceCalculation, setAttendanceCalculation] = useState(
    "Based on Working Days",
  );

  const [minimumAttendance, setMinimumAttendance] = useState(75);

  const [settings, setSettings] = useState({
    autoPromote: true,
    electiveSubjects: true,
    compulsorySubjects: true,
    enableRanking: true,
    enablePercentage: true,
    enableGPA: true,
  });

  const [examTypes, setExamTypes] = useState({
    midTerm: true,
    finalTerm: true,
    quiz: true,
    assignment: true,
  });

  const grades = [
    { grade: "A+", from: 90, to: 100, point: 4.0 },
    { grade: "A", from: 80, to: 89, point: 3.5 },
    { grade: "B", from: 70, to: 79, point: 3.0 },
    { grade: "C", from: 60, to: 69, point: 2.0 },
    { grade: "D", from: 50, to: 59, point: 1.0 },
    { grade: "F", from: 0, to: 49, point: 0.0 },
  ];

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleExamType = (key) => {
    setExamTypes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    const data = {
      academicYear,
      gradingSystem,
      passingMarks,
      classStructure,
      maxElectiveSubjects,
      attendanceCalculation,
      minimumAttendance,
      settings,
      examTypes,
    };

    console.log(data);
  };

  return (
    <div className="space-y-2">
      {/* ========================================= */}
      {/* PAGE HEADER */}
      {/* ========================================= */}

      <SettingsHeader
        heading="Academic Settings"
        details="  Manage academic year, grading system, class structure and other
          academic preferences."
      />

      {/* ========================================= */}
      {/* TOP CARDS */}
      {/* ========================================= */}

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        {/* Academic Year */}
        <SettingsCard icon={<CalendarDays size={18} />} title="Academic Year">
          <div className="space-y-4">
            <FormField
              label="Current Academic Year"
              value={academicYear.currentYear}
              onChange={(e) =>
                setAcademicYear({
                  ...academicYear,
                  currentYear: e.target.value,
                })
              }
              suffix={
                <span className="rounded-full bg-green-50 px-2 py-1 text-[10px] font-medium text-green-600">
                  Active
                </span>
              }
            />

            <FormField
              label="Start Date"
              type="date"
              value={academicYear.startDate}
              onChange={(e) =>
                setAcademicYear({
                  ...academicYear,
                  startDate: e.target.value,
                })
              }
            />

            <FormField
              label="End Date"
              type="date"
              value={academicYear.endDate}
              onChange={(e) =>
                setAcademicYear({
                  ...academicYear,
                  endDate: e.target.value,
                })
              }
            />

            <ActionButton>
              <CalendarDays size={15} />
              Update Academic Year
            </ActionButton>
          </div>
        </SettingsCard>

        {/* Grading System */}
        <SettingsCard icon={<GraduationCap size={18} />} title="Grading System">
          <div className="space-y-4">
            <FormField
              label="Grading System"
              type="select"
              value={gradingSystem}
              onChange={(e) => setGradingSystem(e.target.value)}
              options={["Mark Based", "Grade Based", "GPA Based"]}
            />

            <FormField
              label="Passing Marks (%)"
              type="number"
              value={passingMarks}
              onChange={(e) => setPassingMarks(e.target.value)}
            />

            {/* Grade Scale */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-xs font-medium text-gray-700">
                  Grade Scale
                </label>

                <button
                  type="button"
                  className="flex items-center gap-1 text-xs font-medium text-purple-600 transition hover:text-purple-700"
                >
                  <Edit3 size={13} />
                  Edit
                </button>
              </div>

              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full text-xs">
                  <thead className="bg-gray-50">
                    <tr className="text-gray-500">
                      <th className="px-3 py-2 text-left font-medium">Grade</th>

                      <th className="px-2 py-2 text-center font-medium">
                        From (%)
                      </th>

                      <th className="px-2 py-2 text-center font-medium">
                        To (%)
                      </th>

                      <th className="px-3 py-2 text-right font-medium">
                        Grade Point
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">
                    {grades.map((grade) => (
                      <tr key={grade.grade}>
                        <td className="px-3 py-2 font-medium text-gray-700">
                          {grade.grade}
                        </td>

                        <td className="px-2 py-2 text-center text-gray-600">
                          {grade.from}
                        </td>

                        <td className="px-2 py-2 text-center text-gray-600">
                          {grade.to}
                        </td>

                        <td className="px-3 py-2 text-right text-gray-600">
                          {grade.point.toFixed(1)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <ActionButton variant="secondary" fullWidth>
              <Edit3 size={14} />
              Edit Grade Scale
            </ActionButton>
          </div>
        </SettingsCard>

        {/* Class Structure */}
        <SettingsCard icon={<Users size={18} />} title="Class Structure">
          <div className="space-y-4">
            <FormField
              label="Number of Sections per Class"
              type="number"
              value={classStructure.sectionsPerClass}
              onChange={(e) =>
                setClassStructure({
                  ...classStructure,
                  sectionsPerClass: e.target.value,
                })
              }
            />

            <FormField
              label="Default Class Teacher Load"
              type="number"
              value={classStructure.defaultTeacherLoad}
              onChange={(e) =>
                setClassStructure({
                  ...classStructure,
                  defaultTeacherLoad: e.target.value,
                })
              }
              suffix="Classes"
            />

            <FormField
              label="Default Subject Load"
              type="number"
              value={classStructure.defaultSubjectLoad}
              onChange={(e) =>
                setClassStructure({
                  ...classStructure,
                  defaultSubjectLoad: e.target.value,
                })
              }
              suffix="Subjects"
            />

            <Toggle
              label="Auto Promote Students"
              description="Automatically promote students to next grade"
              enabled={settings.autoPromote}
              onChange={() => toggleSetting("autoPromote")}
            />

            <ActionButton onClick={handleSave}>
              <Save size={15} />
              Save Changes
            </ActionButton>
          </div>
        </SettingsCard>
      </div>

      {/* ========================================= */}
      {/* BOTTOM CARDS */}
      {/* ========================================= */}

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        {/* Subject Settings */}
        <SettingsCard icon={<BookOpen size={18} />} title="Subject Settings">
          <div className="space-y-4">
            <Toggle
              label="Elective Subjects"
              description="Allow elective subjects for senior classes"
              enabled={settings.electiveSubjects}
              onChange={() => toggleSetting("electiveSubjects")}
            />

            <FormField
              label="Maximum Elective Subjects"
              type="number"
              value={maxElectiveSubjects}
              onChange={(e) => setMaxElectiveSubjects(e.target.value)}
            />

            <Toggle
              label="Compulsory Subjects"
              description="Enable compulsory subjects for all classes"
              enabled={settings.compulsorySubjects}
              onChange={() => toggleSetting("compulsorySubjects")}
            />

            <ActionButton variant="secondary">
              <BookOpen size={14} />
              Manage Subjects
            </ActionButton>
          </div>
        </SettingsCard>

        {/* Attendance & Exam */}
        <SettingsCard
          icon={<ClipboardCheck size={18} />}
          title="Attendance & Exam Settings"
        >
          <div className="space-y-4">
            <FormField
              label="Attendance Calculation"
              type="select"
              value={attendanceCalculation}
              onChange={(e) => setAttendanceCalculation(e.target.value)}
              options={["Based on Working Days", "Based on Calendar Days"]}
            />

            <FormField
              label="Minimum Attendance (%)"
              type="number"
              value={minimumAttendance}
              onChange={(e) => setMinimumAttendance(e.target.value)}
            />

            <div>
              <label className="mb-2 block text-xs font-medium text-gray-700">
                Exam Type
              </label>

              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <Checkbox
                  label="Mid Term"
                  checked={examTypes.midTerm}
                  onChange={() => toggleExamType("midTerm")}
                />

                <Checkbox
                  label="Final Term"
                  checked={examTypes.finalTerm}
                  onChange={() => toggleExamType("finalTerm")}
                />

                <Checkbox
                  label="Quiz"
                  checked={examTypes.quiz}
                  onChange={() => toggleExamType("quiz")}
                />

                <Checkbox
                  label="Assignment"
                  checked={examTypes.assignment}
                  onChange={() => toggleExamType("assignment")}
                />
              </div>
            </div>
          </div>
        </SettingsCard>

        {/* Other Settings */}
        <SettingsCard
          icon={<Settings2 size={18} />}
          title="Other Academic Settings"
        >
          <div className="space-y-5">
            <Toggle
              label="Enable Ranking"
              description="Show class and school ranking"
              enabled={settings.enableRanking}
              onChange={() => toggleSetting("enableRanking")}
            />

            <Toggle
              label="Enable Percentage"
              description="Show percentage in reports"
              enabled={settings.enablePercentage}
              onChange={() => toggleSetting("enablePercentage")}
            />

            <Toggle
              label="Enable GPA"
              description="Show GPA in reports"
              enabled={settings.enableGPA}
              onChange={() => toggleSetting("enableGPA")}
            />
          </div>
        </SettingsCard>
      </div>
    </div>
  );
};

/* ================================================= */
/* REUSABLE SETTINGS CARD */
/* ================================================= */

const SettingsCard = ({ icon, title, children }) => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
          {icon}
        </div>

        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      </div>

      <div className="p-5">{children}</div>
    </section>
  );
};

/* ================================================= */
/* REUSABLE FORM FIELD */
/* ================================================= */

const FormField = ({
  label,
  type = "text",
  value,
  onChange,
  options = [],
  suffix,
}) => {
  const inputClasses = `
    h-10
    w-full
    rounded-lg
    border
    border-gray-200
    bg-white
    px-3
    text-sm
    text-gray-700
    outline-none
    transition
    placeholder:text-gray-400
    focus:border-purple-500
    focus:ring-2
    focus:ring-purple-100
    ${suffix ? "pr-20" : ""}
    ${type === "select" ? "appearance-none pr-9" : ""}
  `;

  return (
    <div className="w-full">
      <label className="mb-1.5 block text-xs font-medium leading-4 text-gray-700">
        {label}
      </label>

      <div className="relative">
        {type === "select" ? (
          <>
            <select value={value} onChange={onChange} className={inputClasses}>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </>
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            className={inputClasses}
          />
        )}

        {suffix && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {suffix}
          </div>
        )}
      </div>
    </div>
  );
};

/* ================================================= */
/* REUSABLE TOGGLE */
/* ================================================= */

const Toggle = ({ label, description, enabled, onChange }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="min-w-0">
        <p className="text-sm font-medium text-gray-700">{label}</p>

        {description && (
          <p className="mt-0.5 text-xs leading-5 text-gray-400">
            {description}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={onChange}
        className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${
          enabled ? "bg-purple-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
            enabled ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
};

/* ================================================= */
/* REUSABLE CHECKBOX */
/* ================================================= */

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-gray-600">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-3.5 w-3.5 cursor-pointer rounded border-gray-300 accent-purple-600"
      />

      <span>{label}</span>
    </label>
  );
};

/* ================================================= */
/* REUSABLE BUTTON */
/* ================================================= */

const ActionButton = ({
  children,
  variant = "primary",
  fullWidth = false,
  onClick,
}) => {
  const baseClasses =
    "inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-xs font-medium transition-colors";

  const variants = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    secondary:
      "border border-purple-200 bg-white text-purple-600 hover:bg-purple-50",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default AcademicSettings;
