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
} from "lucide-react";
import { Link } from "react-router-dom";
const QuickActions = () => {
  const actionButtons = [
    {
      icon: <UserPlus size={24} />,
      title: "Add Student",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-200",
      cardBg: "bg-blue-100",
      borderColor: "border-blue-300",
      path: "/students/add-new-student",
    },
    {
      icon: <UserCog size={24} />,
      title: "Add Teacher",
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-200",
      cardBg: "bg-emerald-100",
      borderColor: "border-emerald-300",
      path: "/teachers/add-new-teacher",
    },
    {
      icon: <School size={24} />,
      title: "Add Class",
      iconColor: "text-violet-600",
      iconBg: "bg-violet-200",
      cardBg: "bg-violet-100",
      borderColor: "border-violet-300",
      path: "/classes/add-new-class",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Add Subject",
      iconColor: "text-orange-600",
      iconBg: "bg-orange-200",
      cardBg: "bg-orange-100",
      borderColor: "border-orange-300",
      path: "/subjects/add-new-subject",
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "Mark Attendance",
      iconColor: "text-pink-600",
      iconBg: "bg-pink-200",
      cardBg: "bg-pink-100",
      borderColor: "border-pink-300",
      path: "/attendance",
    },
    {
      icon: <Wallet size={24} />,
      title: "Manage Fees",
      iconColor: "text-green-600",
      iconBg: "bg-green-200",
      cardBg: "bg-green-100",
      borderColor: "border-green-300",
      path: "/fee-management",
    },
    {
      icon: <Megaphone size={24} />,
      title: "Notice Board",
      iconColor: "text-amber-600",
      iconBg: "bg-amber-200",
      cardBg: "bg-amber-100",
      borderColor: "border-amber-300",
      path: "/notice-board",
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Send Message",
      iconColor: "text-cyan-600",
      iconBg: "bg-cyan-200",
      cardBg: "bg-cyan-100",
      borderColor: "border-cyan-300",
      path: "/messages",
    },
    {
      icon: <CalendarDays size={24} />,
      title: "Exam Schedule",
      iconColor: "text-red-600",
      iconBg: "bg-red-200",
      cardBg: "bg-red-100",
      borderColor: "border-red-300",
      path: "/examinations",
    },
    {
      icon: <FileText size={24} />,
      title: "Generate Report",
      iconColor: "text-indigo-600",
      iconBg: "bg-indigo-200",
      cardBg: "bg-indigo-100",
      borderColor: "border-indigo-300",
      path: "/reports",
    },
    {
      icon: <DatabaseBackup size={24} />,
      title: "Backup Data",
      iconColor: "text-teal-600",
      iconBg: "bg-teal-200",
      cardBg: "bg-teal-100",
      borderColor: "border-teal-300",
      path: "/backup-data",
    },
    {
      icon: <Calendar size={24} />,
      title: "View Calendar",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-200",
      cardBg: "bg-purple-100",
      borderColor: "border-purple-300",
      path: "/view-calendar",
    },
  ];
  return (
    <div className="p-2 border border-slate-200 rounded-xl shadow-sm">
      <h2 className="font-semibold text-slate-600 mb-2">Quick Actions</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {actionButtons.map((action, index) => (
          <Link
            to={action.path}
            key={index}
            className={`flex flex-col items-center justify-center gap-2 ${action.cardBg} p-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border ${action.borderColor}`}
          >
            <div
              className={`w-12 h-12 rounded-full ${action.iconBg} ${action.iconColor} flex items-center justify-center`}
            >
              {action.icon}
            </div>

            <span className="text-sm font-medium text-center text-slate-700">
              {action.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
