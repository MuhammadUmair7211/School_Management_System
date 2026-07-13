import {
  UserPlus,
  CalendarDays,
  Wallet,
  GraduationCap,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const RecentActivities = () => {
  const data = [
    {
      icon: UserPlus,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "New Student Admission",
      details: "Ali admitted to Class 8-A",
      time: "2 mins ago",
    },
    {
      icon: CalendarDays,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Exam Schedule Published",
      details: "Mid-term exams start on 20 July",
      time: "30 mins ago",
    },
    {
      icon: Wallet,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      title: "Fee Payment Received",
      details: "Ahmad paid PKR 12,000",
      time: "1 hour ago",
    },
    {
      icon: GraduationCap,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "New Teacher Joined",
      details: "Mrs. Sarah joined Mathematics Department",
      time: "Today",
    },
    {
      icon: ClipboardCheck,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      title: "Attendance Marked",
      details: "Attendance completed for Class 10-B",
      time: "Today",
    },
    {
      icon: ClipboardCheck,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      title: "Attendance Updated",
      details: "Teacher attendance has been verified",
      time: "Yesterday",
    },
  ];

  return (
    <div className="border-t border-slate-200 p-3 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-slate-800">
          Recent Activities
        </h2>

        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
          {data.length}
        </span>
      </div>

      {/* Activities */}
      <div className="flex-1 space-y-3">
        {data?.slice(0, 4).map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-start gap-3 rounded-xl border border-slate-200 p-2 hover:bg-slate-50 hover:border-blue-200 transition-all duration-200"
            >
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${item.iconBg}`}
              >
                <Icon className={`w-5 h-5 ${item.iconColor}`} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-slate-800">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 mt-1">{item.details}</p>

                <span className="text-xs text-slate-400 mt-2 block">
                  {item.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <Link
        to="/activities"
        className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-blue-200 bg-blue-50 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-100"
      >
        View Full Details
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default RecentActivities;
