import { Users, User, Building2, BadgeCheck } from "lucide-react";

const TeacherStatistics = ({ teachers }) => {
  const totalTeachers = teachers.length;

  const maleTeachers = teachers.filter(
    (teacher) => teacher.gender === "Male",
  ).length;

  const femaleTeachers = teachers.filter(
    (teacher) => teacher.gender === "Female",
  ).length;

  const totalDepartments = new Set(
    teachers.map((teacher) => teacher.department),
  ).size;

  const averageExperience =
    teachers.reduce((sum, teacher) => sum + parseInt(teacher.experience), 0) /
    totalTeachers;

  const statistics = [
    {
      title: "Total Teachers",
      value: totalTeachers,
      subtitle: "Across all departments",
      icon: Users,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Male Teachers",
      value: maleTeachers,
      subtitle: `${Math.round((maleTeachers / totalTeachers) * 100)}% of total`,
      icon: User,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Female Teachers",
      value: femaleTeachers,
      subtitle: `${Math.round(
        (femaleTeachers / totalTeachers) * 100,
      )}% of total`,
      icon: User,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Departments",
      value: totalDepartments,
      subtitle: "Across the school",
      icon: Building2,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      title: "Avg. Experience",
      value: `${averageExperience.toFixed(1)} yrs`,
      subtitle: "Average experience",
      icon: BadgeCheck,
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
  ];

  return (
    <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-5">
      {statistics.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.iconBg}`}
              >
                <Icon className={`h-5 w-5 ${item.iconColor}`} strokeWidth={2} />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-500">
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

export default TeacherStatistics;
