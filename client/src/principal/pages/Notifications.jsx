import { AlertTriangle, Bell, BookOpen, Plus } from "lucide-react";
import Header from "../components/Header";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import NotificationFilters from "../components/NotificationFilters";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

const Notifications = () => {
  const navigate = useNavigate();
  const { notifications } = useSelector((state) => state.notifications);
  const [activeFilters, setActiveFilters] = useState({
    type: "all",
    priority: "all",
    date: "all",
  });

  // Handle Filter Change
  const handleFilterChange = (filterKey, value) => {
    setActiveFilters((previous) => ({
      ...previous,
      [filterKey]: value,
    }));
  };

  // Clear Filters
  const handleClearFilters = () => {
    setActiveFilters({
      type: "all",
      priority: "all",
      date: "all",
    });
  };

  // Filter Notifications
  const filteredNotifications = useMemo(() => {
    return notifications.filter((notification) => {
      // Type
      const matchesType =
        activeFilters.type === "all" ||
        notification.type === activeFilters.type;

      // Priority
      const matchesPriority =
        activeFilters.priority === "all" ||
        notification.priority === activeFilters.priority;

      // Date
      const createdDate = new Date(notification.createdAt);

      const today = new Date();

      let matchesDate = true;

      if (activeFilters.date === "today") {
        matchesDate = createdDate.toDateString() === today.toDateString();
      }

      if (activeFilters.date === "week") {
        const startOfWeek = new Date(today);

        startOfWeek.setDate(today.getDate() - today.getDay());

        startOfWeek.setHours(0, 0, 0, 0);

        matchesDate = createdDate >= startOfWeek;
      }

      if (activeFilters.date === "month") {
        matchesDate =
          createdDate.getMonth() === today.getMonth() &&
          createdDate.getFullYear() === today.getFullYear();
      }

      return matchesType && matchesPriority && matchesDate;
    });
  }, [notifications, activeFilters]);

  // unread notifications
  const unreadNotifications = notifications.filter(
    (notification) => notification.status === "unread",
  );
  // important notification
  const importantNotifications = notifications.filter(
    (notification) => notification.priority === "high",
  );

  const linksData = [
    {
      icon: Bell,
      name: "All Notifications",
      value: notifications?.length,
      path: "/notifications",
      end: true,
    },
    {
      icon: BookOpen,
      name: "Unread",
      value: unreadNotifications?.length,
      path: "/notifications/unread",
    },
    {
      icon: AlertTriangle,
      name: "Important",
      value: importantNotifications?.length,
      path: "/notifications/important",
    },
  ];

  return (
    <div className="min-h-full">
      {/* Header */}
      <Header
        heading="Notifications"
        details="Create, view and manage your school notifications"
        buttonText="Create Notification"
        icon={<Plus size={18} />}
        onClick={() => navigate("/notifications/add-new-notification")}
      />

      {/* Notification Navigation */}
      <div className="mt-2 flex items-center gap-3 border-b border-slate-200">
        {linksData.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              to={link.path}
              end={link.end}
              key={link.name}
              className={({ isActive }) =>
                `group flex items-center gap-3 border-b-2 px-4 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"
                }`
              }
            >
              <Icon size={18} />

              <span>{link.name}</span>

              <span
                className="
                  flex h-6 min-w-6 items-center justify-center
                  rounded-full bg-slate-100 px-2
                  text-xs font-semibold text-slate-600
                  group-hover:bg-slate-200
                "
              >
                {link.value}
              </span>
            </NavLink>
          );
        })}
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="mt-2 grid grid-cols-1 gap-2 lg:grid-cols-[280px_minmax(0,1fr)]">
        {/* ================= FILTER ================= */}

        <aside>
          <NotificationFilters
            notifications={notifications}
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />
        </aside>

        {/* ================= CHANGING PAGE ================= */}

        <main className="min-w-0">
          <Outlet
            context={{
              notifications: filteredNotifications,
              activeFilters,
            }}
          />
        </main>
      </div>
    </div>
  );
};

export default Notifications;
