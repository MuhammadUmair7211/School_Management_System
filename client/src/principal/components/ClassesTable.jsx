import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ClassesTable = ({ classes, setSelectedClass }) => {
  const navigate = useNavigate();
  const handleDeleteButton = (item) => {
    console.log(item, "deleted");
  };
  return (
    <div className="mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-300">
          <thead className="border-b border-slate-200">
            <tr className="text-left">
              {/* Serial Number */}
              <th className="p-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                #
              </th>

              {/* Class */}
              <th className="p-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Class
              </th>

              {/* Sections */}
              <th className="p-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Sections
              </th>

              {/* Class Teacher */}
              <th className="p-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Class Teacher
              </th>

              {/* Total Students */}
              <th className="p-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Total Students
              </th>

              {/* Room Number */}
              <th className="p-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Room No.
              </th>

              {/* Status */}
              <th className="p-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Status
              </th>

              {/* Actions */}
              <th className="p-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {classes.map((item, index) => {
              const badgeColors = [
                "bg-blue-100 text-blue-600",
                "bg-green-100 text-green-600",
                "bg-violet-100 text-violet-600",
                "bg-orange-100 text-orange-600",
                "bg-red-100 text-red-600",
                "bg-cyan-100 text-cyan-600",
                "bg-indigo-100 text-indigo-600",
                "bg-emerald-100 text-emerald-600",
                "bg-purple-100 text-purple-600",
                "bg-amber-100 text-amber-600",
              ];

              const badgeColor = badgeColors[index % badgeColors.length];

              return (
                <tr
                  onClick={() => setSelectedClass(item)}
                  key={item._id}
                  className="cursor-pointer transition-colors hover:bg-slate-50"
                >
                  {/* Serial Number */}
                  <td className="p-3">
                    <span className="text-sm font-semibold text-slate-700">
                      {index + 1}
                    </span>
                  </td>

                  {/* Class */}
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl font-bold ${badgeColor}`}
                      >
                        {item.class}
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-slate-800">
                          Class {item.class}
                        </h3>

                        <p className="text-xs text-slate-500">
                          Grade {item.class}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Sections */}
                  <td className="p-3">
                    <span className="text-sm font-medium text-slate-700">
                      {item.sectionDetails?.length}
                    </span>
                  </td>

                  {/* Class Teacher */}
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://ui-avatars.com/api/?name=${item.classTeacher}&background=E2E8F0&color=334155`}
                        alt={item.classTeacher}
                        className="h-10 w-10 rounded-full object-cover"
                      />

                      <div>
                        <span className="text-sm font-semibold text-slate-700">
                          {item.classTeacher}
                        </span>
                        <p className="text-sm text-slate-500">{item.email}</p>
                      </div>
                    </div>
                  </td>

                  {/* Students */}
                  <td className="p-3">
                    <span className="text-sm font-medium text-slate-700">
                      {item.currentStrength}
                    </span>
                  </td>

                  {/* Room */}
                  <td className="p-3">
                    <span className="text-sm text-slate-700">
                      {item.roomNumber}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="p-3">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        item.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td onClick={(e) => e.stopPropagation()} className="p-3">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() =>
                          navigate(`/classes/edit-existing-class/${item._id}`)
                        }
                        className="rounded-lg border border-slate-200 p-2 transition hover:bg-indigo-50"
                      >
                        <Pencil size={16} className="text-indigo-600" />
                      </button>

                      <button
                        onClick={() => handleDeleteButton(item)}
                        className="rounded-full bg-red-100 p-2 text-red-600 transition hover:bg-red-200 cursor-pointer"
                      >
                        <Trash2 size={18} />
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

export default ClassesTable;
