import { Pencil, Trash2, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentTable = ({ students, setSelectedStudent }) => {
  const navigate = useNavigate();

  const handleDeleteButton = (name) => {
    console.log(name, "deleted");
  };
  return (
    <div className="mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-300">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr className="text-left">
              <th className="p-2">#</th>
              <th className="p-2">Photo</th>
              <th className="p-2">Name</th>
              <th className="p-2">Admission No.</th>
              <th className="p-2">Roll No.</th>
              <th className="p-2">Class</th>
              <th className="p-2">Section</th>
              <th className="p-2">Father Name</th>
              <th className="p-2">Father Contact</th>
              <th className="p-2">Status</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students?.length > 0 ? (
              students.map((student, index) => (
                <tr
                  key={student._id || index}
                  className="cursor-pointer border-b border-slate-100 transition hover:bg-slate-50"
                  onClick={() => setSelectedStudent(student)}
                >
                  <td className="p-2 font-medium">{index + 1}</td>

                  <td className="p-2">
                    <img
                      src={
                        student.profileImage ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          student.fullName,
                        )}`
                      }
                      alt={student.fullName}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </td>

                  <td className="p-2 font-medium text-slate-700">
                    {student.fullName}
                  </td>

                  <td className="p-2">{student.admissionNo}</td>
                  <td className="p-2">{student.rollNo}</td>
                  <td className="p-2">{student.class}</td>
                  <td className="p-2">{student.section}</td>
                  <td className="p-2">{student.fatherName}</td>
                  <td className="p-2">{student.fatherContact}</td>

                  <td className="p-2">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        student.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>

                  <td onClick={(e) => e.stopPropagation()} className="p-2">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() =>
                          navigate(
                            `/students/edit-existing-student/${student._id}`,
                          )
                        }
                        className="cursor-pointer rounded-full bg-amber-100 p-2 text-amber-600 transition hover:bg-amber-200"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={() => handleDeleteButton(student.fullName)}
                        className="cursor-pointer rounded-full bg-red-100 p-2 text-red-600 transition hover:bg-red-200"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11" className="h-40 p-6 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                      <Users size={24} className="text-slate-400" />
                    </div>

                    <p className="font-medium text-slate-700">
                      No students found
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Try adjusting your search or filters.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
