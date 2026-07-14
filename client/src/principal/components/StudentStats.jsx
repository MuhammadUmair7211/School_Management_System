import {
  ArrowDown,
  ArrowUp,
  User,
  UserPlus,
  UserRound,
  Users,
} from "lucide-react";

const StudentsStats = ({ students }) => {
  const totalStudents = students.length;
  const boys = students.filter((student) => student.gender === "Male");
  const girls = students.filter((student) => student.gender === "Female");

  const boysPercentage =
    totalStudents > 0 ? ((boys.length / totalStudents) * 100).toFixed(1) : 0;
  const girlsPercentage =
    totalStudents > 0 ? ((girls.length / totalStudents) * 100).toFixed(1) : 0;

  const lastMonth = students.filter((student) => {
    const admissionDate = new Date(student.createdAt);

    const now = new Date();
    const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1);

    return (
      admissionDate.getMonth() === lastMonthDate.getMonth() &&
      admissionDate.getFullYear() === lastMonthDate.getFullYear()
    );
  });

  const newAdmissions = students.filter((student) => {
    const admissionDate = new Date(student.createdAt);
    const now = new Date();

    return (
      admissionDate.getMonth() === now.getMonth() &&
      admissionDate.getFullYear() === now.getFullYear()
    );
  });

  const currentMonthCount = newAdmissions.length;
  const lastMonthCount = lastMonth.length;

  const percentageChange =
    lastMonthCount === 0
      ? currentMonthCount > 0
        ? 100
        : 0
      : (((currentMonthCount - lastMonthCount) / lastMonthCount) * 100).toFixed(
          1,
        );

  const isIncrease = currentMonthCount >= lastMonthCount;

  const studentStats = [
    {
      icon: Users,
      title: "Total Students",
      value: totalStudents,
      bg: "bg-blue-100",
      color: "text-blue-600",
      percentage: `${totalStudents} students enrolled`,
    },
    {
      icon: User,
      title: "Boys",
      value: boys.length,
      bg: "bg-cyan-100",
      color: "text-cyan-600",
      percentage: `${boysPercentage}% of total`,
    },
    {
      icon: UserRound,
      title: "Girls",
      value: girls.length,
      bg: "bg-pink-100",
      color: "text-pink-600",
      percentage: `${girlsPercentage}% of total`,
    },
    {
      icon: UserPlus,
      title: "New Admissions",
      value: newAdmissions.length, // Replace with this month's admissions if available
      bg: "bg-green-100",
      color: "text-green-600",
      percentage: `${percentageChange}% from last month`,
      trendIcon: isIncrease ? ArrowUp : ArrowDown,
      trendColor: isIncrease ? "text-green-600" : "text-red-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 mt-2">
      {studentStats.map((stat, index) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trendIcon;

        return (
          <div
            key={index}
            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md duration-300 cursor-pointer"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-xl ${stat.bg}`}
            >
              <Icon className={`h-7 w-7 ${stat.color}`} />
            </div>

            <div>
              <p className="text-sm text-slate-500">{stat.title}</p>

              <h2 className="text-3xl font-bold text-slate-800">
                {stat.value}
              </h2>
              {TrendIcon ? (
                <div className="flex items-center mt-1">
                  <TrendIcon className={`w-4 h-4 ${stat.trendColor}`} />
                  <span className={`text-sm ${stat.trendColor}`}>
                    {stat.percentage}
                  </span>
                </div>
              ) : (
                <p className="text-sm text-slate-500 mt-1">{stat.percentage}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StudentsStats;
