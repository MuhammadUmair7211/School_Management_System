import { BookOpen, Edit2, Trash2 } from "lucide-react";

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

const getStatusBadgeClass = (status = "") => {
  switch (status.toLowerCase()) {
    case "ongoing":
      return "bg-emerald-100 text-emerald-600";
    case "upcoming":
      return "bg-blue-100 text-blue-600";
    case "completed":
      return "bg-gray-100 text-gray-500";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export default function ExaminationsTable({ exams }) {
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
              <th className="p-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Status
              </th>
              <th className="p-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {exams?.map((row, index) => {
              const theme = getIconTheme(index);
              const statusClass = getStatusBadgeClass(row.status);

              return (
                <tr
                  key={row.id || index}
                  className="cursor-pointer border-b border-slate-100 transition hover:bg-slate-50"
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
                          {row.examName || row.title}
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
                    {row.type.slice(0, 1).toUpperCase() + row.type.slice(1)}
                  </td>

                  {/* Term */}
                  <td className="p-2 text-sm font-medium text-gray-600 whitespace-nowrap">
                    {row.examName}
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
                  <td className="p-2 whitespace-nowrap">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusClass}`}
                    >
                      {row.status}
                    </span>
                  </td>

                  {/* Action Buttons */}
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center justify-center space-x-1.5">
                      <button className="p-2 border border-gray-200 rounded-lg text-green-500 hover:bg-green-100 transition-colors cursor-pointer duration-300">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 border border-gray-200 rounded-lg text-red-500 hover:bg-red-100 transition-colors cursor-pointer duration-300">
                        <Trash2 className="w-4 h-4" />
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
}
