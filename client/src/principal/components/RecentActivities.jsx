import {
  UserPlus,
  CalendarDays,
  Wallet,
  GraduationCap,
  ClipboardCheck,
  ArrowUpRight,
  Activity,
} from "lucide-react";
import { Link } from "react-router-dom";

const RecentActivities = () => {
  const data = [
    {
      icon: UserPlus,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      title: "New Student Admission",
      details: "Ali admitted to Class 8-A",
      time: "2 mins ago",
    },
    {
      icon: CalendarDays,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
      title: "Exam Schedule Published",
      details: "Mid-term exams start on 20 July",
      time: "30 mins ago",
    },
    {
      icon: Wallet,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      title: "Fee Payment Received",
      details: "Ahmad paid PKR 12,000",
      time: "1 hour ago",
    },
    {
      icon: GraduationCap,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      title: "New Teacher Joined",
      details: "Mrs. Sarah joined Mathematics Department",
      time: "Today",
    },
    {
      icon: ClipboardCheck,
      iconBg: "bg-teal-50",
      iconColor: "text-teal-600",
      title: "Attendance Marked",
      details: "Attendance completed for Class 10-B",
      time: "Today",
    },
    {
      icon: ClipboardCheck,
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      title: "Attendance Updated",
      details: "Teacher attendance has been verified",
      time: "Yesterday",
    },
  ];

  return (
    <div className="flex h-full flex-col space-y-2">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Activity size={18} />
          </div>

          <div>
            <h2 className="text-sm font-bold text-slate-800">
              Recent Activities
            </h2>

            <p className="mt-0.5 text-[11px] text-slate-400">
              Latest updates from your school
            </p>
          </div>
        </div>

        <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-blue-50 px-2 text-xs font-bold text-blue-600">
          {data.length}
        </span>
      </div>

      {/* Activities */}
      <div className="relative flex-1">
        <div className="relative space-y-1">
          {data.slice(0, 5).map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative flex gap-3 rounded-xl p-3 border border-slate-200 transition-all duration-200 hover:bg-slate-50 cursor-pointer"
              >
                {/* Icon */}
                <div
                  className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${item.iconBg} ring-4 ring-white transition-transform duration-200 group-hover:scale-105`}
                >
                  <Icon size={17} className={item.iconColor} strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="truncate text-xs font-semibold text-slate-700">
                      {item.title}
                    </h3>

                    <span className="shrink-0 text-[10px] font-medium text-slate-400">
                      {item.time}
                    </span>
                  </div>

                  <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-slate-400">
                    {item.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <Link
        to="/activities"
        className="group mt-2 flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-600 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-600"
      >
        <span>View All Activities</span>

        <ArrowUpRight
          size={15}
          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  );
};

export default RecentActivities;
