import {
  ChevronDown,
  GraduationCap,
  LogOut,
  Settings,
  UserRound,
} from "lucide-react";
import NavigationLinks from "./NavigationLinks";
import { useSelector } from "react-redux";
import { useState } from "react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { profile } = useSelector((state) => state.principal);

  return (
    <aside className="flex h-screen w-20 shrink-0 flex-col overflow-visible border-r border-slate-800 bg-slate-950 text-white md:w-72">
      {/* Logo / Brand */}
      <div className="flex h-20 shrink-0 items-center justify-center border-b border-slate-800 px-4 md:justify-start">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 shadow-lg shadow-blue-600/20">
            <GraduationCap size={24} />
          </div>

          {/* School Name */}
          <div className="hidden min-w-0 md:block">
            <h1 className="truncate text-base font-bold tracking-tight text-white">
              Green Valley
            </h1>

            <p className="mt-0.5 text-xs font-medium text-slate-400">
              High School
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-700">
        <NavigationLinks />
      </nav>

      {/* Profile Section */}
      <div className="relative shrink-0 border-t border-slate-800 p-3">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-center rounded-xl p-2 transition-all duration-200 hover:bg-slate-800 md:justify-between md:px-3"
        >
          {/* Profile Info */}
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                profile?.name || "Principal",
              )}&background=2563eb&color=ffffff&bold=true`}
              alt={profile?.name || "Principal"}
              className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-slate-700"
            />

            <div className="hidden min-w-0 text-left md:block">
              <h3 className="truncate text-sm font-semibold text-white">
                {profile?.name || "Principal"}
              </h3>

              <p className="mt-0.5 truncate text-xs text-slate-400">
                {profile?.designation || "Principal"}
              </p>
            </div>
          </div>

          <ChevronDown
            size={17}
            className={`hidden text-slate-400 transition-transform duration-200 md:block ${
              isOpen ? "rotate-180" : ""
            }`}
          />

          <ChevronDown
            size={17}
            className={`text-slate-400 transition-transform duration-200 md:hidden ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Profile Dropdown */}
        {isOpen && (
          <div className="absolute bottom-[calc(100%+8px)] left-3 z-50 w-64 overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl shadow-black/30">
            {/* Profile Details */}
            <div className="border-b border-slate-800 p-4">
              <div className="mb-3 flex items-center gap-3">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    profile?.name || "Principal",
                  )}&background=2563eb&color=ffffff&bold=true`}
                  alt={profile?.name || "Principal"}
                  className="h-10 w-10 rounded-full"
                />

                <div className="min-w-0">
                  <h4 className="truncate text-sm font-semibold text-white">
                    {profile?.name || "Principal"}
                  </h4>

                  <p className="truncate text-xs text-slate-400">
                    {profile?.designation || "Principal"}
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="truncate text-xs text-slate-400">
                  {profile?.email}
                </p>

                <p className="text-xs text-slate-400">{profile?.phone}</p>
              </div>
            </div>

            {/* Profile Actions */}
            <div className="p-1.5">
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
              >
                <UserRound size={16} />
                My Profile
              </button>

              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
              >
                <Settings size={16} />
                Settings
              </button>

              <div className="my-1 border-t border-slate-800" />

              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10 hover:text-red-300"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default SideBar;
