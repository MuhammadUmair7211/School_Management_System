import { X } from "lucide-react";

const TeacherProfileSideBar = ({ teacher, onClose }) => {
  if (!teacher) return null;

  const sections = [
    {
      title: "Employee Information",
      fields: [
        { label: "Employee ID", value: teacher.employeeId },
        { label: "Joining Date", value: teacher.joiningDate },
        { label: "Status", value: teacher.status },
      ],
    },
    {
      title: "Personal Information",
      fields: [
        { label: "First Name", value: teacher.firstName },
        { label: "Last Name", value: teacher.lastName },
        { label: "Gender", value: teacher.gender },
        { label: "Date of Birth", value: teacher.dateOfBirth },
        { label: "Qualification", value: teacher.qualification },
        { label: "Experience", value: teacher.experience },
      ],
    },
    {
      title: "Contact Information",
      fields: [
        { label: "Email", value: teacher.email },
        { label: "Phone", value: teacher.phone },
        { label: "Address", value: teacher.address },
      ],
    },
    {
      title: "Professional Information",
      fields: [
        { label: "Designation", value: teacher.designation },
        { label: "Department", value: teacher.department },
        { label: "Subject", value: teacher.subject },
        {
          label: "Class Teacher Of",
          value: `Class ${teacher.classTeacherOf}`,
        },
      ],
    },
    {
      title: "Salary Information",
      fields: [
        {
          label: "Monthly Salary",
          value: `PKR ${teacher.salary?.toLocaleString()}`,
        },
      ],
    },
  ];

  return (
    <div className="h-full overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 flex justify-end">
        <button
          onClick={onClose}
          className="cursor-pointer rounded-lg p-2 transition-all duration-300 hover:rotate-90 hover:text-red-500"
        >
          <X size={20} />
        </button>
      </div>

      {/* Profile Card */}
      <div className="rounded-xl border border-slate-200 p-4 text-slate-800 shadow-sm">
        <div className="flex items-center gap-4">
          <img
            src={
              teacher.profileImage ||
              `https://ui-avatars.com/api/?name=${teacher.firstName}+${teacher.lastName}&background=4F46E5&color=fff`
            }
            alt={`${teacher.firstName} ${teacher.lastName}`}
            className="h-24 w-24 rounded-full object-cover shadow-md"
          />

          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold">
                  {teacher.firstName} {teacher.lastName}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Employee ID: {teacher.employeeId}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  teacher.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {teacher.status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              <div>
                <p className="text-slate-500">Department</p>
                <p className="font-semibold">{teacher.department}</p>
              </div>

              <div>
                <p className="text-slate-500">Subject</p>
                <p className="font-semibold">{teacher.subject}</p>
              </div>

              <div>
                <p className="text-slate-500">Designation</p>
                <p className="font-semibold">{teacher.designation}</p>
              </div>

              <div>
                <p className="text-slate-500">Experience</p>
                <p className="font-semibold">{teacher.experience}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Information Sections */}
      {sections.map((section) => (
        <div
          key={section.title}
          className="mt-2 rounded-xl border border-slate-200 p-2 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-slate-800">
            {section.title}
          </h3>

          <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-3">
            {section.fields.map((field) => (
              <div key={field.label} className="p-2 rounded-xl">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  {field.label}
                </p>

                <p className="mt-1 wrap-break-word text-sm font-semibold text-slate-800">
                  {field.value || "-"}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeacherProfileSideBar;
