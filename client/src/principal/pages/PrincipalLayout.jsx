import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import TitleBar from "../components/TitleBar";

const PrincipalLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <SideBar />

      {/* Right Side */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Navbar */}
        <TitleBar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PrincipalLayout;
