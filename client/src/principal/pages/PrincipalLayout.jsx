import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const PrincipalLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-2">
        <Outlet />
      </main>
    </div>
  );
};

export default PrincipalLayout;
