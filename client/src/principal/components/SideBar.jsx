import { ChevronDown, GraduationCap, LogOut } from "lucide-react";
import NavigationLinks from "./NavigationLinks";
import { useSelector } from "react-redux";
import { useState } from "react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { profile } = useSelector((state) => state.principal);
  return (
    <aside className="px-2 w-20 md:w-72 min-h-screen bg-slate-900 flex flex-col items-center md:items-start text-white border-r border-slate-800">
      {/* Logo */}
      <div className="flex items-center justify-center md:justify-start gap-3 p-4 border-b border-slate-800">
        <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center">
          <GraduationCap size={24} />
        </div>

        <div className="hidden md:block">
          <h1 className="text-lg font-bold">Green Valley</h1>
          <p className="text-sm text-slate-400">High School</p>
        </div>
      </div>

      {/* navigation links */}
      <section className="flex-1 p-4">
        <NavigationLinks />
      </section>

      {/* Profile */}
      <div className="relative w-full pb-2">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-full md:border md:border-slate-800 flex items-center justify-between p-2 hover:bg-slate-800 cursor-pointer"
        >
          <div className="flex items-center gap-3 ">
            <img
              src={profile?.profileImage}
              className="w-10 h-10 rounded-full object-cover"
              alt="Profile"
            />

            <div className="hidden md:block">
              <h3 className="text-sm font-semibold">{profile?.name}</h3>
              <p className="text-xs text-slate-400">{profile?.designation}</p>
            </div>
          </div>

          <ChevronDown
            size={18}
            className={`md:hidden transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div className="md:hidden fixed bottom-20 left-0 w-42 bg-slate-800 border border-slate-700 overflow-visible z-50">
            <div className="p-4 border-b border-slate-700">
              <h4 className="font-semibold border-b border-slate-700 mb-1">
                {profile?.name}
              </h4>
              <p className="text-sm text-slate-400 ">{profile?.email}</p>
              <p className="text-sm text-slate-400">{profile?.phone}</p>
            </div>

            <button className="w-full text-left px-4 py-3 hover:bg-red-600 flex items-center gap-2 duration-300 cursor-pointer text-red-400 hover:text-white">
              <LogOut size={18} /> Logout
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default SideBar;
