import { Book, BookOpen, Edit2, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteExam } from "../../slices/examSlice";
import { useNavigate } from "react-router-dom";

const getIconTheme = (index) => {
  const themes = [
    { bg: "bg-purple-100", color: "text-purple-600" },
    { bg: "bg-amber-100", color: "text-amber-500" },
    { bg: "bg-emerald-100", color: "text-emerald-500" },
    { bg: "bg-pink-100", color: "text-pink-500" },
    { bg: "bg-blue-100", color: "text-blue-600" },
    { bg: "bg-indigo-100", color: "text-indigo-600" },
    { bg: "bg-orange-100", color: "text-orange-500" },
    { bg: "bg-teal-100", color: "text-teal-600" },
  ];
  return themes[index % themes.length];
};

export default function ExaminationsTable({
  exams,
  onStatusChange,
  isStatusAllowed,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEditExam = (id) => {
    navigate(`/examinations/edit-existing-examination/${id}`);
  };
  const handleDeleteExam = (id) => {
    dispatch(deleteExam(id));
  };
  return (
    <div className="mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr className="text-left">
              <th className="p-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Examination Name
              </th>
              <th className="p-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Class
              </th>
              <th className="p-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Type
              </th>
              <th className="p-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Term
              </th>
              <th className="p-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Start Date
              </th>
              <th className="p-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                End Date
              </th>
              {isStatusAllowed && (
                <th className="p-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Status
                </th>
              )}
              <th className="p-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {exams && exams.length > 0 ? (
              exams.map((row, index) => {
                const theme = getIconTheme(index);

                return (
                  <tr
                    key={row.id || index}
                    className={`${row.status === "completed" ? "bg-green-200 line-through " : row.status === "ongoing" ? "bg-blue-300" : row.status === "cancelled" ? "bg-red-200 line-through" : row.status === "postponed" ? "bg-amber-200 line-through" : row.status === "rescheduled" ? "bg-purple-200 line-through" : "hover:bg-slate-100"} cursor-pointer border border-slate-100`}
                  >
                    {/* Examination Name with Icon */}
                    <td className="p-2 text-sm font-medium text-gray-600 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2.5 rounded-xl ${theme.bg} flex items-center justify-center`}
                        >
                          <BookOpen className={`w-5 h-5 ${theme.color}`} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">
                            {row.examinationName || row.title}
                          </div>
                          <div className="text-xs text-gray-400 font-medium">
                            {new Date(row.startDate).getFullYear()}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Class */}
                    <td className="p-2 text-sm font-medium text-gray-600 whitespace-nowrap">
                      {row.class}
                    </td>

                    {/* Type */}
                    <td className="p-2 text-sm font-medium text-gray-600 whitespace-nowrap">
                      {row.examinationType?.slice(0, 1).toUpperCase() +
                        row.examinationType?.slice(1)}
                    </td>

                    {/* Term */}
                    <td className="p-2 text-sm font-medium text-gray-600 whitespace-nowrap">
                      {row.term}
                    </td>

                    {/* Start Date */}
                    <td className="p-2 text-sm font-medium text-gray-600 whitespace-nowrap">
                      {row.startDate}
                    </td>

                    {/* End Date */}
                    <td className="p-2 text-sm font-medium text-gray-600 whitespace-nowrap">
                      {row.endDate}
                    </td>

                    {/* Status Badge */}
                    {isStatusAllowed && (
                      <td className="p-2 whitespace-nowrap">
                        <select
                          value={row.status}
                          disabled={
                            row.status === "completed" ||
                            row.status === "cancelled" ||
                            row.status === "rescheduled" ||
                            row.status === "postponed"
                          }
                          onChange={(e) =>
                            onStatusChange(row._id, e.target.value)
                          }
                          className={`px-3 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
                            row.status === "upcoming"
                              ? "bg-blue-50 border-blue-200 text-blue-600"
                              : row.status === "ongoing"
                                ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                                : row.status === "completed"
                                  ? "bg-gray-50 border-gray-200 text-gray-500"
                                  : row.status === "cancelled"
                                    ? "bg-red-50 border-red-200 text-red-600"
                                    : row.status === "postponed"
                                      ? "bg-amber-50 border-amber-200 text-amber-600"
                                      : row.status === "rescheduled"
                                        ? "bg-purple-50 border-purple-200 text-purple-600"
                                        : "bg-gray-50 border-gray-200 text-gray-600"
                          }`}
                        >
                          <option value="upcoming">Upcoming</option>
                          <option value="ongoing">Ongoing</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                          <option value="postponed">Postponed</option>
                          <option value="rescheduled">Rescheduled</option>
                        </select>
                      </td>
                    )}

                    {/* Action Buttons */}
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center justify-center space-x-1.5">
                        {row.status === "upcoming" ? (
                          <button
                            onClick={() => handleEditExam(row._id)}
                            className="p-2 border border-gray-200 rounded-lg text-green-500 hover:bg-green-100 transition-colors cursor-pointer duration-300"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                        ) : (
                          ""
                        )}

                        <button
                          onClick={() => handleDeleteExam(row._id)}
                          className="p-2 border border-gray-200 rounded-lg text-red-500 hover:bg-red-100 transition-colors cursor-pointer duration-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="11" className="h-40 p-6 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                      <Book size={24} className="text-slate-400" />
                    </div>

                    <p className="font-medium text-slate-700">
                      No examinations found
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
}
