import {
  BookOpen,
  Building2,
  Calculator,
  Dumbbell,
  Globe2,
  Landmark,
  Languages,
  Monitor,
  Music2,
  Palette,
  Pencil,
  TestTube,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TeacherTable = ({ teachers, setSelectedTeacher }) => {
  const navigate = useNavigate();
  const iconClass = "h-5 w-5";
  const wrapperClass = "flex h-9 w-9 items-center justify-center rounded-xl";

  const departmentIcons = {
    Mathematics: (
      <div className={`${wrapperClass} bg-blue-100`}>
        <Calculator className={`${iconClass} text-blue-600`} />
      </div>
    ),

    Science: (
      <div className={`${wrapperClass} bg-emerald-100`}>
        <TestTube className={`${iconClass} text-emerald-600`} />
      </div>
    ),

    Languages: (
      <div className={`${wrapperClass} bg-cyan-100`}>
        <Languages className={`${iconClass} text-cyan-600`} />
      </div>
    ),

    Urdu: (
      <div className={`${wrapperClass} bg-indigo-100`}>
        <BookOpen className={`${iconClass} text-indigo-600`} />
      </div>
    ),

    History: (
      <div className={`${wrapperClass} bg-amber-100`}>
        <Landmark className={`${iconClass} text-amber-700`} />
      </div>
    ),

    Geography: (
      <div className={`${wrapperClass} bg-green-100`}>
        <Globe2 className={`${iconClass} text-green-600`} />
      </div>
    ),

    "Computer Science": (
      <div className={`${wrapperClass} bg-slate-200`}>
        <Monitor className={`${iconClass} text-slate-700`} />
      </div>
    ),

    Sports: (
      <div className={`${wrapperClass} bg-red-100`}>
        <Dumbbell className={`${iconClass} text-red-600`} />
      </div>
    ),

    Arts: (
      <div className={`${wrapperClass} bg-pink-100`}>
        <Palette className={`${iconClass} text-pink-600`} />
      </div>
    ),

    Music: (
      <div className={`${wrapperClass} bg-purple-100`}>
        <Music2 className={`${iconClass} text-purple-600`} />
      </div>
    ),

    Default: (
      <div className={`${wrapperClass} bg-slate-100`}>
        <Building2 className={`${iconClass} text-slate-600`} />
      </div>
    ),
  };
  return (
    <div className="mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-300 border-collapse">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr className="text-left">
              {/* Serial No */}
              <th className="p-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                #
              </th>

              {/* Teacher */}
              <th className="p-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Teacher
              </th>

              {/* Department */}
              <th className="p-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Department
              </th>

              {/* Subject */}
              <th className="p-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Subject
              </th>

              {/* Phone / Email */}
              <th className="p-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Phone / Email
              </th>

              {/* Experience */}
              <th className="p-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Experience
              </th>

              {/* Status */}
              <th className="p-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Status
              </th>

              {/* Actions */}
              <th className="p-2 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {teachers.map((teacher, index) => {
              console.log(teacher.department);

              return (
                <tr
                  key={teacher._id}
                  className="transition-colors cursor-pointer hover:bg-slate-50"
                  onClick={() => setSelectedTeacher(teacher)}
                >
                  {/* Serial Number */}
                  <td className="p-2">
                    <span className="text-sm font-semibold text-slate-700">
                      {index + 1}
                    </span>
                  </td>

                  {/* Teacher */}
                  <td className="p-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={
                          teacher.profileImage ||
                          "https://ui-avatars.com/api/?name=" +
                            `${teacher.firstName}+${teacher.lastName}`
                        }
                        alt={teacher.firstName}
                        className="h-11 w-11 rounded-full object-cover"
                      />

                      <div>
                        <h3 className="text-sm font-semibold text-slate-800">
                          {teacher.firstName} {teacher.lastName}
                        </h3>

                        <p className="text-xs text-slate-500">
                          {teacher.qualification}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Department */}
                  <td className="p-2">
                    <div className="flex items-center gap-3">
                      {departmentIcons[teacher.department] ||
                        departmentIcons.Default}

                      <span className="font-medium text-slate-700">
                        {teacher.department}
                      </span>
                    </div>
                  </td>
                  {/* Subject */}
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-700">
                        {teacher.subject}
                      </span>
                    </div>
                  </td>

                  {/* Phone / Email */}
                  <td className="p-2">
                    <div>
                      <p className="text-sm text-slate-700">{teacher.phone}</p>

                      <p className="text-xs text-slate-500">{teacher.email}</p>
                    </div>
                  </td>

                  {/* Experience */}
                  <td className="p-2">
                    <span className="text-sm font-medium text-slate-700">
                      {teacher.experience}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="p-2">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        teacher.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {teacher.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td onClick={(e) => e.stopPropagation()} className="p-2">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() =>
                          navigate(
                            `/teachers/edit-existing-teacher/${teacher._id}`,
                          )
                        }
                        className="rounded-lg border border-slate-200 p-2 transition hover:bg-blue-50"
                      >
                        <Pencil size={16} className="text-blue-600" />
                      </button>

                      <button className="rounded-lg border border-slate-200 p-2 transition hover:bg-red-50">
                        <Trash2 size={16} className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherTable;
