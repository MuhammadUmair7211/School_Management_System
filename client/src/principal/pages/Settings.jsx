import {
  Bell,
  DatabaseBackup,
  GraduationCap,
  School,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import Header from "../components/Header";
import { NavLink, Outlet } from "react-router-dom";

const Settings = () => {
  const linksData = [
    {
      icon: School,
      name: "General Settings",
      path: "/settings",
      end: true,
    },
    {
      icon: GraduationCap,
      name: "Academic Settings",
      path: "/settings/academic-settings",
    },
    {
      icon: SlidersHorizontal,
      name: "System Settings",
      path: "/settings/system-settings",
    },
    {
      icon: Bell,
      name: "Notification Settings",
      path: "/settings/notification-settings",
    },
    {
      icon: ShieldCheck,
      name: "Security Settings",
      path: "/settings/security-settings",
    },
    {
      icon: DatabaseBackup,
      name: "Backup",
      path: "/settings/backup-settings",
    },
  ];

  return (
    <div>
      <Header
        heading="Settings"
        details="Manage all the school settings from here"
      />

      {/* Settings Navigation */}
      <div className="mt-4 overflow-x-auto border-b border-gray-200">
        <div className="flex min-w-max gap-10">
          {linksData.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                className={({ isActive }) =>
                  `relative flex items-center gap-2 pb-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-purple-600 border-b border-purple-600"
                      : "text-gray-500 hover:text-gray-800"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={17}
                      strokeWidth={isActive ? 2.2 : 1.8}
                      className="shrink-0"
                    />

                    <span>{link.name}</span>

                    {isActive && (
                      <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-purple-600" />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Child Route Renders Here */}
      <div className="mt-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
