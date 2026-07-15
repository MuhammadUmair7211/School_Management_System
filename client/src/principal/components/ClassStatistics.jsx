import { Bookmark, GraduationCap, UserRound, Users } from "lucide-react";

const ClassStatistics = ({ classes = [] }) => {
  // Total Classes
  const totalClasses = classes.length;
  console.log(classes);

  // Total Sections
  const totalSections = classes.reduce(
    (sum, classItem) => sum + (classItem.sectionDetails?.length || 0),
    0,
  );

  // Total Students
  const totalStudents = classes.reduce(
    (sum, classItem) => sum + (classItem.currentStrength || 0),
    0,
  );

  // Unique Assigned Teachers
  const totalAssignedTeachers = new Set([
    ...classes.map((classItem) => classItem.classTeacher),
    ...classes.flatMap((classItem) =>
      classItem.subjectAssignments.map((assignment) => assignment.teacher),
    ),
  ]).size;

  const statistics = [
    {
      title: "Total Classes",
      value: totalClasses,
      subtitle: "Across all sections",
      icon: Bookmark,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Total Sections",
      value: totalSections,
      subtitle: "Across all classes",
      icon: Users,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Assigned Teachers",
      value: totalAssignedTeachers,
      subtitle: "Teaching different subjects",
      icon: UserRound,
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
    },
    {
      title: "Total Students",
      value: totalStudents,
      subtitle: "Across all classes",
      icon: GraduationCap,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {statistics.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconBg}`}
              >
                <Icon className={`h-6 w-6 ${item.iconColor}`} />
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-1 text-3xl font-bold text-slate-800">
                  {item.value}
                </h2>

                <p className="mt-1 text-xs text-slate-400">{item.subtitle}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ClassStatistics;
