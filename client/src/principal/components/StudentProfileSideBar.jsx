import { X } from "lucide-react";

const StudentProfileSideBar = ({ student, onClose }) => {
  const sections = [
    {
      title: "Basic Information",
      fields: [
        { label: "Student ID", value: student.studentId },
        { label: "Admission No.", value: student.admissionNo },
        { label: "Roll No.", value: student.rollNo },
        { label: "Full Name", value: student.fullName },
        { label: "First Name", value: student.firstName },
        { label: "Last Name", value: student.lastName },
        { label: "Gender", value: student.gender },
        { label: "Date of Birth", value: student.dateOfBirth },
        { label: "Blood Group", value: student.bloodGroup },
        { label: "Religion", value: student.religion },
        { label: "Nationality", value: student.nationality },
        { label: "CNIC / B-Form", value: student.cnicOrBForm },
        { label: "Status", value: student.status },
        { label: "Admission Date", value: student.createdAt },
      ],
    },

    {
      title: "Academic Information",
      fields: [
        { label: "Class", value: student.class },
        { label: "Section", value: student.section },
        { label: "House", value: student.house },
        { label: "Academic Session", value: student.session },
        { label: "Previous School", value: student.previousSchool },
      ],
    },

    {
      title: "Contact Information",
      fields: [
        { label: "Email", value: student.email },
        { label: "Phone", value: student.phone },
        { label: "Address", value: student.address },
        { label: "City", value: student.city },
        { label: "Province", value: student.province },
        { label: "Postal Code", value: student.postalCode },
      ],
    },

    {
      title: "Father Information",
      fields: [
        { label: "Father Name", value: student.fatherName },
        { label: "Father Contact", value: student.fatherContact },
        { label: "Father Occupation", value: student.fatherOccupation },
      ],
    },

    {
      title: "Mother Information",
      fields: [
        { label: "Mother Name", value: student.motherName },
        { label: "Mother Contact", value: student.motherContact },
        { label: "Mother Occupation", value: student.motherOccupation },
      ],
    },

    {
      title: "Guardian Information",
      fields: [
        { label: "Guardian Name", value: student.guardianName },
        { label: "Relation", value: student.guardianRelation },
        { label: "Guardian Phone", value: student.guardianPhone },
      ],
    },

    {
      title: "Emergency Contact",
      fields: [
        {
          label: "Emergency Contact",
          value: student.emergencyContactName,
        },
        {
          label: "Emergency Number",
          value: student.emergencyContactNumber,
        },
      ],
    },
  ];

  return (
    <div className="h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onClose}
          className=" hover:text-red-500 ml-auto cursor-pointer hover:rotate-360 transition-transform duration-700"
        >
          <X size={20} />
        </button>
      </div>

      {/* Profile */}
      <div className="mt-2 rounded-xl border border-slate-200 p-2 text-slate-800 shadow-sm">
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <img
            src={
              student.profileImage ||
              `https://ui-avatars.com/api/?name=${student.fullName}&background=4F46E5&color=fff`
            }
            alt={student.fullName}
            className="h-24 w-24 rounded-full object-cover shadow-md"
          />

          {/* Details */}
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold">{student.fullName}</h3>

                <p className="mt-1 text-sm ">Student ID: {student.studentId}</p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  student.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {student.status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <div>
                <span className="">Admission No.</span>
                <p className="font-semibold">{student.admissionNo}</p>
              </div>

              <div>
                <span className="">Roll No.</span>
                <p className="font-semibold">{student.rollNo}</p>
              </div>

              <div>
                <span className="">Class</span>
                <p className="font-semibold">
                  {student.class} - {student.section}
                </p>
              </div>

              <div>
                <span className="">Session</span>
                <p className="font-semibold">{student.session}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* details */}
      {sections.map((section) => (
        <div key={section.title} className="mt-2">
          <h3 className="text-lg font-semibold text-slate-800">
            {section.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
            {section.fields.map((field) => (
              <div
                key={field.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-2"
              >
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  {field.label}
                </p>

                <p className="text-sm font-semibold text-slate-800 wrap-break-word">
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

export default StudentProfileSideBar;
