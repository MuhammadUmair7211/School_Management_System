import { Pencil, Trash2 } from "lucide-react";
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
          <thead className="bg-slate-50 border-b border-slate-200">
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
            {students?.map((student, index) => (
              <tr
                key={student._id || index}
                className="border-b border-slate-100 hover:bg-slate-50 transition cursor-pointer"
                onClick={() => setSelectedStudent(student)}
              >
                <td className="p-2 font-medium">{index + 1}</td>

                <td className="p-2">
                  <img
                    src={
                      student.profileImage ||
                      `https://ui-avatars.com/api/?name=${student.fullName}`
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
                    className={`rounded-full p-2 text-xs font-semibold ${
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
                        navigate(`/edit-student-profile/${student._id}`)
                      }
                      className="rounded-full bg-amber-100 p-2 text-amber-600 transition hover:bg-amber-200 cursor-pointer"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => handleDeleteButton(student.fullName)}
                      className="rounded-full bg-red-100 p-2 text-red-600 transition hover:bg-red-200 cursor-pointer"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
