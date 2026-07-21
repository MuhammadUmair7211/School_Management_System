import { BookOpen, Calculator, FlaskConical, Palette } from "lucide-react";

const SubjectStatistics = ({ subjects }) => {
  const totalSubjects = subjects?.length;

  const generalSubjects = subjects?.filter(
    (subject) => subject.category === "general",
  );

  const scienceSubjects = subjects?.filter(
    (subject) => subject.category === "science",
  );

  const artSubjects = subjects?.filter(
    (subject) => subject.category === "arts",
  );

  const statsData = [
    {
      title: "Total Subjects",
      value: totalSubjects,
      description: "All subjects",
      icon: BookOpen,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      title: "General Subjects",
      value: generalSubjects?.length,
      description: "For classes 1-8",
      icon: Calculator,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Science Subjects",
      value: scienceSubjects?.length,
      description: "For classes 9-12",
      icon: FlaskConical,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Arts Subjects",
      value: artSubjects?.length,
      description: "Arts & humanities",
      icon: Palette,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <div className="mt-2">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statsData.map((data) => {
          const Icon = data.icon;

          return (
            <div
              key={data.title}
              className="flex items-center gap-4 group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
            >
              <div>
                {/* Icon */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${data.iconBg}`}
                >
                  <Icon size={23} strokeWidth={2} className={data.iconColor} />
                </div>
              </div>

              {/* Content */}
              <div className="mt-5">
                <p className="text-sm font-medium text-slate-500">
                  {data.title}
                </p>

                <div className="mt-1 flex items-end gap-2">
                  <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                    {data.value}
                  </h3>
                </div>

                <p className="mt-1 text-xs text-slate-400">
                  {data.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubjectStatistics;
