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
  Settings,
  Calendar,
  FileTextIcon,
  Text,
} from "lucide-react";
import { UserBusiness } from "@icon-park/react";

const navigationGroups = [
  {
    heading: "MAIN",
    links: [
      {
        icon: <LayoutDashboard size={18} className="text-indigo-500" />,
        name: "Dashboard",
        path: "/",
      },
      {
        icon: <Users size={18} className="text-blue-500" />,
        name: "Students",
        path: "/students",
      },
      {
        icon: (
          <UserBusiness
            theme="outline"
            size="18"
            className="text-emerald-500"
          />
        ),
        name: "Teachers",
        path: "/teachers",
      },
      {
        icon: <School size={18} className="text-purple-500" />,
        name: "Classes",
        path: "/classes",
      },
      {
        icon: <BookOpen size={18} className="text-orange-500" />,
        name: "Subjects",
        path: "/subjects",
      },
    ],
  },

  {
    heading: "ACADEMICS",
    links: [
      {
        icon: <CalendarCheck size={18} className="text-teal-500" />,
        name: "Attendance",
        path: "/attendance",
      },
      {
        icon: <FileText size={18} className="text-violet-500" />,
        name: "Examinations",
        path: "/examinations",
      },
      {
        icon: <Wallet size={18} className="text-emerald-600" />,
        name: "Fee Management",
        path: "/fee-management",
      },
      {
        icon: <FileTextIcon size={18} className="text-pink-500" />,
        name: "Results",
        path: "/results",
      },
    ],
  },

  {
    heading: "COMMUNICATION",
    links: [
      {
        icon: <Bell size={18} className="text-amber-500" />,
        name: "Notice Board",
        path: "/notice-board",
      },
      {
        icon: <Calendar size={18} className="text-cyan-500" />,
        name: "Calendar",
        path: "/view-calendar",
      },
      {
        icon: <Text size={18} className="text-cyan-500" />,
        name: "Message",
        path: "/messages",
      },
    ],
  },

  {
    heading: "SYSTEM",
    links: [
      {
        icon: <BarChart3 size={18} className="text-blue-600" />,
        name: "Reports",
        path: "/reports",
      },
      {
        icon: <Settings size={18} className="text-gray-500" />,
        name: "Settings",
        path: "/settings",
      },
    ],
  },
];
const NavigationLinks = () => {
  return (
    <nav className="space-y-2">
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
                  `w-full flex items-center justify-center md:justify-start gap-0 md:gap-3 md:px-4 md:py-2 rounded-full border-l-0 md:border-l-4 transition-all duration-300 ${
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
