import {
  BadgeCheck,
  BookOpen,
  Building2,
  Calendar,
  Clock3,
  DoorOpen,
  GraduationCap,
  UserRound,
  Users,
  X,
} from "lucide-react";

const ClassProfileRightSideBar = ({ selectedClass, onClose }) => {
  const overviewFields = [
    {
      label: "Class Name",
      value: `Class ${selectedClass.class}`,
      icon: BookOpen,
    },
    {
      label: "Grade",
      value: selectedClass.class,
      icon: GraduationCap,
    },
    {
      label: "Academic Session",
      value: selectedClass.academicYear,
      icon: Calendar,
    },
    {
      label: "Total Sections",
      value: selectedClass.sections,
      icon: Building2,
    },
    {
      label: "Total Students",
      value: selectedClass.currentStrength,
      icon: Users,
    },
    {
      label: "Class Teacher",
      value: selectedClass.classTeacher,
      icon: UserRound,
    },
    {
      label: "Room Number",
      value: selectedClass.roomNumber,
      icon: DoorOpen,
    },
    {
      label: "Status",
      value: selectedClass.status,
      icon: BadgeCheck,
      badge: true,
    },
    {
      label: "Created On",
      value: selectedClass.createdAt,
      icon: Clock3,
    },
  ];
  return (
    <div className="h-full overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4">
        <h2 className="text-lg font-bold text-slate-800">Class Details</h2>

        <button
          onClick={onClose}
          className="rounded-lg p-2 text-slate-500 transition-all duration-300 hover:bg-red-50 hover:text-red-500 hover:rotate-90"
        >
          <X size={20} />
        </button>
      </div>

      {/* Class Details */}
      <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-4">
          {/* Class Icon */}
          <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-linear-to-br from-blue-100 to-sky-200">
            <span className="text-4xl font-bold text-blue-600">
              {selectedClass.class}
            </span>
          </div>

          {/* Class Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-slate-800">
                Class {selectedClass.class}
              </h2>

              <span
                className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                  selectedClass.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {selectedClass.status}
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3 text-sm text-slate-500">
              <span>Grade {selectedClass.class}</span>

              <span className="h-1 w-1 rounded-full bg-slate-400"></span>

              <span>Session {selectedClass.academicYear}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Overview Card */}
      <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="space-y-5">
          {overviewFields.map((field) => {
            const Icon = field.icon;

            return (
              <div
                key={field.label}
                className="flex items-center justify-between"
              >
                {/* Left */}
                <div className="flex items-center gap-3">
                  <Icon size={18} className="text-slate-500" />

                  <span className="text-sm text-slate-600">{field.label}</span>
                </div>

                {/* Right */}
                {field.badge ? (
                  <span
                    className={`rounded-md px-3 py-1 text-xs font-semibold ${
                      field.value === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {field.value}
                  </span>
                ) : (
                  <span className="text-sm font-semibold text-slate-800">
                    {field.value}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* Sections Card */}
      <div className="mt-2 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-slate-800">Sections</h3>

        <div className="space-y-2">
          {selectedClass.sectionDetails?.map((section) => (
            <div
              key={section.section}
              className="flex items-start justify-between"
            >
              {/* Left */}
              <div className="flex gap-4">
                <div className="min-w-10 text-lg font-bold text-slate-800">
                  {selectedClass.class}-{section.section}
                </div>

                <div>
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold text-slate-700">
                      Class Teacher:
                    </span>{" "}
                    {section.teacher}
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    <span className="font-semibold text-slate-700">
                      Students:
                    </span>{" "}
                    {section.students}
                  </p>
                </div>
              </div>

              {/* Status */}
              <span
                className={`rounded-md px-3 py-1 text-xs font-semibold ${
                  section.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {section.status}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-blue-600 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50">
          View All Sections
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};

export default ClassProfileRightSideBar;
