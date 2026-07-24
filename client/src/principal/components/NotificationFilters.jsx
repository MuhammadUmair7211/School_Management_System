import {
  Bell,
  BusFront,
  CalendarDays,
  DollarSign,
  GraduationCap,
  Megaphone,
  PaperBag,
  PartyPopper,
  User,
} from "lucide-react";
import { useMemo } from "react";
import FilterPanel from "../components/FilterPanel";

const NotificationFilters = ({
  notifications,
  activeFilters,
  onFilterChange,
  onClearFilters,
}) => {
  const filterSections = useMemo(() => {
    const highCount = notifications.filter(
      (notification) => notification.priority === "high",
    ).length;

    const mediumCount = notifications.filter(
      (notification) => notification.priority === "medium",
    ).length;

    const lowCount = notifications.filter(
      (notification) => notification.priority === "low",
    ).length;

    return [
      {
        key: "type",
        title: "Notification Type",

        options: [
          {
            id: "all",
            label: "All Notifications",
            icon: Bell,
            count: notifications.length,
          },
          {
            id: "announcement",
            label: "Announcements",
            icon: Megaphone,
            count: notifications.filter(
              (notification) => notification.type === "announcement",
            ).length,
          },
          {
            id: "academic",
            label: "Academic",
            icon: GraduationCap,
            count: notifications.filter(
              (notification) => notification.type === "academic",
            ).length,
          },
          {
            id: "event",
            label: "Events",
            icon: PartyPopper,
            count: notifications.filter(
              (notification) => notification.type === "event",
            ).length,
          },
          {
            id: "attendance",
            label: "Attendance",
            icon: User,
            count: notifications.filter(
              (notification) => notification.type === "attendance",
            ).length,
          },
          {
            id: "examination",
            label: "Examination",
            icon: PaperBag,
            count: notifications.filter(
              (notification) => notification.type === "examination",
            ).length,
          },
          {
            id: "fees",
            label: "Fee",
            icon: DollarSign,
            count: notifications.filter(
              (notification) => notification.type === "fees",
            ).length,
          },
          {
            id: "transport",
            label: "Transport",
            icon: BusFront,
            count: notifications.filter(
              (notification) => notification.type === "transport",
            ).length,
          },
        ],
      },

      {
        key: "priority",
        title: "Priority",

        options: [
          {
            id: "all",
            label: "All Priorities",
            count: notifications.length,
          },

          {
            id: "high",
            label: "High",
            color: "bg-red-500",
            count: highCount,
          },

          {
            id: "medium",
            label: "Medium",
            color: "bg-orange-500",
            count: mediumCount,
          },

          {
            id: "low",
            label: "Low",
            color: "bg-green-500",
            count: lowCount,
          },
        ],
      },

      {
        key: "date",
        title: "Date",

        options: [
          {
            id: "all",
            label: "All Time",
            icon: CalendarDays,
          },

          {
            id: "today",
            label: "Today",
            icon: CalendarDays,
          },

          {
            id: "week",
            label: "This Week",
            icon: CalendarDays,
          },

          {
            id: "month",
            label: "This Month",
            icon: CalendarDays,
          },
        ],
      },
    ];
  }, [notifications]);

  return (
    <FilterPanel
      title="Filters"
      sections={filterSections}
      activeFilters={activeFilters}
      onFilterChange={onFilterChange}
      onClearFilters={onClearFilters}
    />
  );
};

export default NotificationFilters;
