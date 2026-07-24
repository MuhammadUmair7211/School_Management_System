import {
  Bell,
  Bus,
  GraduationCap,
  Mail,
  Megaphone,
  Trash2,
  UserRound,
  WalletCards,
} from "lucide-react";
import { useState } from "react";

const defaultIconConfig = {
  announcement: {
    icon: Megaphone,
    bg: "bg-blue-50",
    text: "text-blue-600",
  },

  academic: {
    icon: GraduationCap,
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },

  fees: {
    icon: WalletCards,
    bg: "bg-orange-50",
    text: "text-orange-600",
  },

  event: {
    icon: UserRound,
    bg: "bg-violet-50",
    text: "text-violet-600",
  },

  transport: {
    icon: Bus,
    bg: "bg-purple-50",
    text: "text-purple-600",
  },
};

const defaultPriorityStyles = {
  high: "bg-red-50 text-red-600 ring-1 ring-inset ring-red-100",

  medium: "bg-orange-50 text-orange-600 ring-1 ring-inset ring-orange-100",

  low: "bg-emerald-50 text-emerald-600 ring-1 ring-inset ring-emerald-100",
};

const NotificationList = ({
  notifications,
  iconConfig = defaultIconConfig,
  priorityStyles = defaultPriorityStyles,
  onMarkAsRead,
  onDelete,
  showPriority = true,
  showDate = true,
  showActions = true,
  showSelection = true,
  emptyTitle = "No notifications found",
  emptyMessage = "You don't have any notifications matching your current filters.",
}) => {
  const [selectedIds, setSelectedIds] = useState([]);

  const allSelected =
    notifications.length > 0 && selectedIds.length === notifications.length;

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(notifications.map((notification) => notification._id));
    }
  };

  const handleSelect = (id) => {
    setSelectedIds((previousIds) =>
      previousIds.includes(id)
        ? previousIds.filter((item) => item !== id)
        : [...previousIds, id],
    );
  };

  const handleMarkAsRead = () => {
    if (selectedIds.length === 0) return;
    onMarkAsRead?.(selectedIds);
    setSelectedIds([]);
  };

  const handleDelete = () => {
    if (selectedIds.length === 0) return;
    onDelete?.(selectedIds);
    setSelectedIds([]);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
      {showActions && (
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-slate-50/50 p-4">
          {/* Select All */}

          {showSelection ? (
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={handleSelectAll}
                className="h-4 w-4 cursor-pointer rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />

              <span className="text-sm font-semibold text-slate-700">
                Select All
              </span>

              {selectedIds.length > 0 && (
                <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-indigo-600">
                  {selectedIds.length} selected
                </span>
              )}
            </label>
          ) : (
            <div />
          )}

          {/* Actions */}

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleMarkAsRead}
              disabled={selectedIds.length === 0}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Mail size={16} />

              <span className="hidden sm:inline">Mark as read</span>
            </button>

            <button
              type="button"
              onClick={handleDelete}
              disabled={selectedIds.length === 0}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Trash2 size={16} />

              <span className="hidden sm:inline">Delete</span>
            </button>
          </div>
        </div>
      )}

      <div className="divide-y divide-slate-100">
        {notifications.map((notification) => {
          const config =
            iconConfig[notification.type] || iconConfig.announcement;
          const Icon = config.icon;
          const isUnread = notification.status === "unread";
          const isSelected = selectedIds.includes(notification._id);

          return (
            <div
              key={notification._id}
              className={`group relative flex items-center gap-4 p-4 cursor-pointer transition-all duration-200 ${
                isSelected
                  ? "bg-blue-100"
                  : isUnread
                    ? "bg-white hover:bg-slate-50/70"
                    : "bg-slate-50/20 hover:bg-slate-50/60"
              }`}
            >
              {/* Unread Indicator */}

              {isUnread && (
                <span className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-blue-600" />
              )}

              {/* Checkbox */}

              {showSelection && (
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleSelect(notification._id)}
                  className="h-4 w-4 shrink-0 cursor-pointer rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
              )}

              {/* Notification Icon */}
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${config.bg} ${config.text} transition-transform group-hover:scale-105`}
              >
                <Icon size={21} strokeWidth={2} />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3
                    className={`truncate text-sm ${
                      isUnread
                        ? "font-bold text-slate-800"
                        : "font-semibold text-slate-600"
                    }`}
                  >
                    {notification.title}
                  </h3>
                  <span className="text-sm text-slate-500">
                    ({notification.type})
                  </span>

                  {isUnread && (
                    <span className="hidden h-2 w-2 shrink-0 rounded-full bg-blue-600 sm:block" />
                  )}
                </div>

                <p className="mt-1 line-clamp-2 max-w-3xl text-sm leading-5 text-slate-500">
                  {notification.message}
                </p>
              </div>

              {/* Priority */}

              {showPriority && (
                <div className="hidden shrink-0 lg:block">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                      priorityStyles[notification.priority] ||
                      priorityStyles.low
                    }`}
                  >
                    {notification.priority}
                  </span>
                </div>
              )}

              {/* Date */}

              {showDate && (
                <div className="hidden w-28 shrink-0 text-right md:block">
                  <p
                    className={`text-xs ${
                      isUnread
                        ? "font-bold text-slate-700"
                        : "font-medium text-slate-500"
                    }`}
                  >
                    {new Date(notification.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {new Date(notification.createdAt).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      },
                    )}
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {/* =================================
            EMPTY STATE
        ================================== */}

        {notifications.length === 0 && (
          <div className="flex min-h-100 flex-col items-center justify-center px-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
              <Bell size={28} className="text-slate-400" />
            </div>

            <h3 className="mt-5 text-base font-semibold text-slate-800">
              {emptyTitle}
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              {emptyMessage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationList;
