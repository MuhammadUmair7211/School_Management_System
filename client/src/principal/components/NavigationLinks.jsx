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
        icon: <Wallet size={18} className="text-emerald-500" />,
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
        icon: <Text size={18} className="text-rose-500" />,
        name: "Message",
        path: "/messages",
      },
    ],
  },

  {
    heading: "SYSTEM",
    links: [
      {
        icon: <BarChart3 size={18} className="text-blue-500" />,
        name: "Reports",
        path: "/reports",
      },
      {
        icon: <Settings size={18} className="text-slate-400" />,
        name: "Settings",
        path: "/settings",
      },
    ],
  },
];

const NavigationLinks = () => {
  return (
    <nav className="w-full">
      {navigationGroups.map((group) => (
        <div key={group.heading} className="w-full">
          {/* Group Heading */}
          <h2 className="mb-2 hidden px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 md:block">
            {group.heading}
          </h2>

          {/* Navigation Items */}
          <div className="">
            {group.links.map((navigation) => (
              <NavLink
                key={navigation.name}
                to={navigation.path}
                title={navigation.name}
                className={({ isActive }) =>
                  `flex h-11 w-full min-w-0 shrink-0 items-center rounded-full border-l-4 transition-all duration-200 ${
                    isActive
                      ? "border-blue-400 bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                      : "border-transparent text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                {/* Icon */}
                <span className="flex h-full w-full shrink-0 items-center justify-center md:w-auto md:justify-start md:pl-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                    {navigation.icon}
                  </span>
                </span>

                {/* Text */}
                <span className="ml-3 hidden truncate pr-3 text-sm font-medium md:block">
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
