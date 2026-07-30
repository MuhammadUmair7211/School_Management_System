import {
  UserPlus,
  UserCog,
  School,
  BookOpen,
  ClipboardCheck,
  Wallet,
  Megaphone,
  MessageSquare,
  CalendarDays,
  FileText,
  DatabaseBackup,
  Calendar,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const QuickActions = () => {
  const actionButtons = [
    {
      icon: <UserPlus size={21} />,
      title: "Add Student",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      cardBg: "bg-blue-50",
      borderColor: "border-blue-100",
      path: "/students/add-new-student",
    },
    {
      icon: <UserCog size={21} />,
      title: "Add Teacher",
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-100",
      cardBg: "bg-emerald-50",
      borderColor: "border-emerald-100",
      path: "/teachers/add-new-teacher",
    },
    {
      icon: <School size={21} />,
      title: "Add Class",
      iconColor: "text-violet-600",
      iconBg: "bg-violet-100",
      cardBg: "bg-violet-50",
      borderColor: "border-violet-100",
      path: "/classes/add-new-class",
    },
    {
      icon: <BookOpen size={21} />,
      title: "Add Subject",
      iconColor: "text-orange-600",
      iconBg: "bg-orange-100",
      cardBg: "bg-orange-50",
      borderColor: "border-orange-100",
      path: "/subjects/add-new-subject",
    },
    {
      icon: <ClipboardCheck size={21} />,
      title: "Mark Attendance",
      iconColor: "text-pink-600",
      iconBg: "bg-pink-100",
      cardBg: "bg-pink-50",
      borderColor: "border-pink-100",
      path: "/attendance",
    },
    {
      icon: <Wallet size={21} />,
      title: "Manage Fees",
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
      cardBg: "bg-green-50",
      borderColor: "border-green-100",
      path: "/fee-management",
    },
    {
      icon: <Megaphone size={21} />,
      title: "Notice Board",
      iconColor: "text-amber-600",
      iconBg: "bg-amber-100",
      cardBg: "bg-amber-50",
      borderColor: "border-amber-100",
      path: "/notice-board",
    },
    {
      icon: <MessageSquare size={21} />,
      title: "Send Message",
      iconColor: "text-cyan-600",
      iconBg: "bg-cyan-100",
      cardBg: "bg-cyan-50",
      borderColor: "border-cyan-100",
      path: "/messages",
    },
    {
      icon: <CalendarDays size={21} />,
      title: "Exam Schedule",
      iconColor: "text-red-600",
      iconBg: "bg-red-100",
      cardBg: "bg-red-50",
      borderColor: "border-red-100",
      path: "/examinations",
    },
    {
      icon: <FileText size={21} />,
      title: "Generate Report",
      iconColor: "text-indigo-600",
      iconBg: "bg-indigo-100",
      cardBg: "bg-indigo-50",
      borderColor: "border-indigo-100",
      path: "/reports",
    },
    {
      icon: <DatabaseBackup size={21} />,
      title: "Backup Data",
      iconColor: "text-teal-600",
      iconBg: "bg-teal-100",
      cardBg: "bg-teal-50",
      borderColor: "border-teal-100",
      path: "/backup-data",
    },
    {
      icon: <Calendar size={21} />,
      title: "View Calendar",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
      cardBg: "bg-purple-50",
      borderColor: "border-purple-100",
      path: "/view-calendar",
    },
  ];

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* Header */}
      <div className="mb-2">
        <h2 className="text-base font-bold text-slate-800">Quick Actions</h2>

        <p className="mt-1 text-xs text-slate-400">
          Quickly access common school management tasks
        </p>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-2 xl:grid-cols-3">
        {actionButtons.map((action) => (
          <Link
            to={action.path}
            key={action.title}
            className={`group relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border ${action.borderColor} ${action.cardBg} p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
          >
            {/* Hover Arrow */}
            <ArrowUpRight
              size={14}
              className={`absolute right-2 top-2 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 ${action.iconColor}`}
            />

            {/* Icon */}
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${action.iconBg} ${action.iconColor} transition-transform duration-300 group-hover:scale-110`}
            >
              {action.icon}
            </div>

            {/* Title */}
            <span className="text-xs font-semibold leading-tight text-slate-600 transition-colors duration-200 group-hover:text-slate-900">
              {action.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
