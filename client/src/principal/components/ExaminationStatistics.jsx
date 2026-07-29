import { FileText, Calendar, ClipboardCheck, Users } from "lucide-react";

export default function ExaminationStatistics({ exams }) {
  const totalExams = exams?.length;
  const ongoingExaminations = exams?.filter(
    (exam) => exam?.status === "ongoing",
  ).length;
  const completedExaminations = exams?.filter(
    (exam) => exam?.status === "completed",
  ).length;

  const statsData = [
    {
      id: 1,
      title: "Total Examinations",
      value: totalExams,
      subtitle: "This Academic Year",
      icon: FileText,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      id: 2,
      title: "Ongoing Examinations",
      value: ongoingExaminations,
      subtitle: "Currently Active",
      icon: Calendar,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-500",
    },
    {
      id: 3,
      title: "Completed Examinations",
      value: completedExaminations,
      subtitle: "This Academic Year",
      icon: ClipboardCheck,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
    {
      id: 4,
      title: "Average Pass Percentage",
      value: "78.4%",
      subtitle: "This Academic Year",
      icon: Users,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  ];
  return (
    <div className="mt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {statsData.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.id}
              className="rounded-xl border border-gray-100 p-3 shadow-sm flex items-start space-x-4"
            >
              {/* Icon Container */}
              <div
                className={`shrink-0 w-14 h-14 rounded-2xl ${stat.iconBg} flex items-center justify-center`}
              >
                <IconComponent className={`w-7 h-7 ${stat.iconColor}`} />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between h-full pt-0.5">
                <span className="text-sm font-semibold text-gray-800 leading-tight">
                  {stat.title}
                </span>
                <span className="text-2xl font-bold text-gray-900 my-1">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-gray-400">
                  {stat.subtitle}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
