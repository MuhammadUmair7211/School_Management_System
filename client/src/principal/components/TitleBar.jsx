import { Bell, LogOut, MessageSquare, Search } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TitleBar = () => {
  const { notifications } = useSelector((state) => state.notifications);
  const filteredNotifications = notifications?.filter(
    (notification) =>
      notification.status === "unread" &&
      notification.receiverRole === "principal",
  );

  const { messages } = useSelector((state) => state.messages);
  const filteredMessages = messages?.filter(
    (message) => !message.isRead && message.receiverRole === "principal",
  );

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <header className="bg-white px-4 py-2 flex flex-wrap items-center justify-between">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Welcome back, Dr. John 👋
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Here's what's happening in your school today.
        </p>
      </div>

      {/* Search */}
      <div className="hidden lg:flex flex-1 justify-center px-6">
        <div className="relative w-full max-w-lg">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search students, teachers, classes..."
            className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 outline-none "
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Notification */}
        <Link
          to="/notifications"
          className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600 hover:bg-orange-100 transition"
        >
          <Bell size={20} />

          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
            {filteredNotifications.length}
          </span>
        </Link>

        {/* Messages */}
        <Link
          to="/messages"
          className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
        >
          <MessageSquare size={20} />
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center">
            {filteredMessages.length}
          </span>
        </Link>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="hidden md:flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2 text-red-600 hover:bg-red-100 transition cursor-pointer"
        >
          <LogOut size={18} />

          <span className="hidden lg:block font-medium">Logout</span>
        </button>
      </div>
    </header>
  );
};
export default TitleBar;
