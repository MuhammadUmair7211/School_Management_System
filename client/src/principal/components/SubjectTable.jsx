import { BookOpen, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const SubjectTable = ({ subjects }) => {
  const navigate = useNavigate();
  // category style
  const getCategoryStyle = (category) => {
    switch (category?.toLowerCase()) {
      case "general":
        return "bg-slate-100 text-slate-700";

      case "science":
        return "bg-blue-50 text-blue-700";

      case "arts":
        return "bg-purple-50 text-purple-700";

      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  // icon style
  const getIconStyle = (category) => {
    switch (category?.toLowerCase()) {
      case "general":
        return "bg-slate-100 text-slate-600";

      case "science":
        return "bg-blue-100 text-blue-600";

      case "arts":
        return "bg-purple-100 text-purple-600";

      default:
        return "bg-indigo-100 text-indigo-600";
    }
  };

  const handleSubjectEdit = (subject) => {
    navigate(`/subjects/edit-existing-subject/${subject._id}`);
  };
  const handleSubjectDelete = (subject) => {
    console.log(subject, "is deleting");
  };
  return (
    <div className="mt-2 w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm">
      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-300 border-collapse text-left">
          {/* HEADER */}
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/70">
              <th className="w-16 px-6 py-4 text-center text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                #
              </th>

              <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Subject
              </th>

              <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Category
              </th>

              <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Classes
              </th>

              <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Marks
              </th>

              <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Periods / Week
              </th>

              <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Status
              </th>

              <th className="px-6 py-4 text-center text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Actions
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y divide-slate-100">
            {subjects.length > 0 ? (
              subjects.map((subject, index) => (
                <tr
                  key={subject._id || subject.id}
                  className="group transition-colors duration-150 hover:bg-slate-50/60"
                >
                  {/* INDEX */}
                  <td className="px-6 py-4 text-center">
                    <span className="text-xs font-medium text-slate-400">
                      {index + 1}
                    </span>
                  </td>

                  {/* SUBJECT */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {/* ICON */}
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${getIconStyle(
                          subject.category,
                        )}`}
                      >
                        <BookOpen size={18} />
                      </div>

                      {/* NAME + CODE */}
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-900">
                          {subject.subjectName}
                        </p>

                        <p className="mt-0.5 text-[11px] font-medium text-slate-400">
                          {subject.subjectCode}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* CATEGORY */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold capitalize ${getCategoryStyle(
                        subject.category,
                      )}`}
                    >
                      {subject.category}
                    </span>
                  </td>

                  {/* CLASSES */}
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1.5">
                      {subject.classes?.map((cls) => (
                        <span
                          key={cls}
                          className={`flex h-6 min-w-6 items-center justify-center rounded-md ${getCategoryStyle(subject.category)} px-1.5 text-[10px] font-semibold ${getIconStyle(subject.category)}`}
                        >
                          {cls}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* MARKS */}
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {subject.totalMarks}
                      </p>

                      <p className="mt-0.5 text-[11px] font-medium text-slate-400">
                        Pass: {subject.passingMarks}
                      </p>
                    </div>
                  </td>

                  {/* PERIODS */}
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-slate-800">
                      {subject.weeklyPeriods}
                    </span>
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-green-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {subject.status}
                    </span>
                  </td>

                  {/* ACTIONS */}
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      {/* EDIT */}
                      <button
                        type="button"
                        onClick={() => handleSubjectEdit(subject)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-blue-100 text-blue-700 cursor-pointer duration-300 hover:scale-105"
                      >
                        <Pencil size={14} />
                      </button>

                      {/* DELETE */}
                      <button
                        type="button"
                        onClick={() => handleSubjectDelete(subject)}
                        aria-label={`Delete ${subject.subjectName}`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-red-100 text-red-700 hover:scale-105 cursor-pointer duration-300"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              /* EMPTY STATE */
              <tr>
                <td colSpan={8} className="px-6 py-16 text-center">
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                      <BookOpen size={24} />
                    </div>

                    <h3 className="mt-4 text-sm font-semibold text-slate-900">
                      No subjects found
                    </h3>

                    <p className="mt-1 max-w-sm text-xs text-slate-500">
                      There are no subjects matching your current search or
                      filter criteria.
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

export default SubjectTable;
