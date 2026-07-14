import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  School,
  BookOpen,
  CalendarCheck,
  FileText,
  Wallet,
  BarChart3,
  Bell,
  MessageSquare,
  Settings,
  Calendar,
} from "lucide-react";
import { UserBusiness } from "@icon-park/react";

const navigationGroups = [
  {
    heading: "MAIN",
    links: [
      {
        icon: <LayoutDashboard size={18} />,
        name: "Dashboard",
        path: "/",
      },
      {
        icon: <Users size={18} />,
        name: "Students",
        path: "/students",
      },
      {
        icon: <UserBusiness theme="outline" size="18" />,
        name: "Teachers",
        path: "/teachers",
      },
      {
        icon: <School size={18} />,
        name: "Classes",
        path: "/classes",
      },
      {
        icon: <BookOpen size={18} />,
        name: "Subjects",
        path: "/subjects",
      },
    ],
  },
  {
    heading: "ACADEMICS",
    links: [
      {
        icon: <CalendarCheck size={18} />,
        name: "Attendance",
        path: "/attendance",
      },
      {
        icon: <FileText size={18} />,
        name: "Examinations",
        path: "/examinations",
      },
      {
        icon: <Wallet size={18} />,
        name: "Fee Management",
        path: "/fee-management",
      },
    ],
  },
  {
    heading: "COMMUNICATION",
    links: [
      {
        icon: <Bell size={18} />,
        name: "Notice Board",
        path: "/notice-board",
      },
      {
        icon: <Calendar size={18} />,
        name: "Calendar",
        path: "/view-calendar",
      },
      {
        icon: <MessageSquare size={18} />,
        name: "Messages",
        path: "/messages",
      },
    ],
  },
  {
    heading: "SYSTEM",
    links: [
      {
        icon: <BarChart3 size={18} />,
        name: "Reports",
        path: "/reports",
      },
      {
        icon: <Settings size={18} />,
        name: "Settings",
        path: "/settings",
      },
    ],
  },
];
const NavigationLinks = () => {
  return (
    <nav className="space-y-3">
      {navigationGroups.map((group) => (
        <div key={group.heading}>
          <h2 className="hidden md:block px-4 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            {group.heading}
          </h2>

          <div className="md:space-y-1">
            {group.links.map((navigation) => (
              <NavLink
                key={navigation.name}
                to={navigation.path}
                className={({ isActive }) =>
                  `flex items-center justify-center md:justify-start gap-0 md:gap-3 p-3 md:px-4 md:py-3 rounded-full border-l-0 md:border-l-4 transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 md:border-blue-300 text-white shadow-lg"
                      : "border-transparent text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <span className="shrink-0">{navigation.icon}</span>

                <span className="hidden md:block text-sm font-medium">
                  {navigation.name}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default NavigationLinks;
