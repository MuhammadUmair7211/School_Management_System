import {
  FileText,
  ClipboardCheck,
  Users,
  FileSpreadsheet,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ExaminationFooterActionCard() {
  const actions = [
    {
      id: 1,
      title: "Create Examination",
      description: "Add a new examination",
      icon: FileText,
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      path: "/examinations/add-new-examination",
    },
    {
      id: 2,
      title: "Manage Marks",
      description: "Enter and manage marks",
      icon: ClipboardCheck,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-500",
      path: "/marks",
    },
    {
      id: 3,
      title: "View Results",
      description: "View examination results",
      icon: Users,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
      path: "/results",
    },
    {
      id: 4,
      title: "Generate Reports",
      description: "Generate examination reports",
      icon: FileSpreadsheet,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      path: "/reports/generate-report",
    },
  ];

  return (
    <div className="mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-xl border border-slate-100 shadow-sm divide-y md:divide-x divide-slate-100 overflow-hidden">
        {actions.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              to={item.path}
              key={item.id}
              className="flex items-center justify-between p-4 hover:bg-slate-50/80 transition-colors duration-150 text-left group cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                {/* Icon Container */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg} ${item.iconColor}`}
                >
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>

                {/* Text Information */}
                <div className="min-w-0">
                  <h3 className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors truncate">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium mt-0.5 truncate">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Arrow Icon */}
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 ml-2 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
