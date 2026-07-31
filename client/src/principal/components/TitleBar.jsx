import { Bell, LogOut, MessageSquare, Search, Sparkles } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TitleBar = () => {
  const { notifications } = useSelector((state) => state.notifications);
  const { messages } = useSelector((state) => state.messages);
  const filteredNotifications = notifications?.filter(
    (notification) =>
      notification.status === "unread" &&
      notification.receiverRole === "principal",
  );

  const filteredMessages = messages?.filter(
    (message) => !message.isRead && message.receiverRole === "principal",
  );

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <header className="relative z-30 px-4">
      <div className="flex items-center justify-between gap-4">
        {/* LEFT - Welcome */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="truncate text-lg font-bold tracking-tight text-slate-800 md:text-2xl">
              <span style={{ fontFamily: "'Great Vibes', cursive" }}>
                Welcome back
              </span>
              , Dr. John
            </h1>

            <Sparkles
              size={19}
              className="hidden shrink-0 text-amber-500 sm:block"
            />
          </div>

          <p className="mt-1 hidden text-xs font-medium text-slate-400 sm:block md:text-sm">
            Here's what's happening in your school today.
          </p>
        </div>

        {/* CENTER - Search */}
        <div className="hidden flex-1 justify-center px-4 lg:flex xl:px-10">
          <div className="group relative w-full max-w-xl">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-200 group-focus-within:text-blue-500"
            />

            <input
              type="text"
              placeholder="Search students, teachers, classes..."
              className="h-11 w-full rounded-full border border-slate-200 bg-slate-50/70 pl-11 pr-20 text-sm font-medium text-slate-700 outline-none transition-all duration-200 "
            />
          </div>
        </div>

        {/* RIGHT - Actions */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Notifications */}
          <Link
            to="/notifications"
            title="Notifications"
            className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 hover:shadow-sm"
          >
            <Bell
              size={19}
              className="transition-transform duration-200 group-hover:scale-105"
            />

            {filteredNotifications.length > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-red-500 px-1 text-[9px] font-bold text-white shadow-sm">
                {filteredNotifications.length > 99
                  ? "99+"
                  : filteredNotifications.length}
              </span>
            )}
          </Link>

          {/* Messages */}
          <Link
            to="/messages"
            title="Messages"
            className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm"
          >
            <MessageSquare
              size={19}
              className="transition-transform duration-200 group-hover:scale-105"
            />

            {filteredMessages.length > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-blue-600 px-1 text-[9px] font-bold text-white shadow-sm">
                {filteredMessages.length > 99 ? "99+" : filteredMessages.length}
              </span>
            )}
          </Link>

          {/* Divider */}
          <div className="mx-1 hidden h-8 w-px bg-slate-200 sm:block" />

          {/* Logout */}
          <button
            onClick={handleLogout}
            title="Logout"
            className="group flex h-10 items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 px-3 text-red-600 transition-all duration-200 hover:border-red-200 hover:bg-red-100 hover:shadow-sm md:px-4"
          >
            <LogOut
              size={18}
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            />

            <span className="hidden text-sm font-semibold lg:block">
              Logout
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="mt-3 lg:hidden">
        <div className="group relative">
          <Search
            size={17}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500"
          />

          <input
            type="text"
            placeholder="Search students, teachers, classes..."
            className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
          />
        </div>
      </div>
    </header>
  );
};

export default TitleBar;
