import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const PrincipalLayout = () => {
  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 p-2">
        <Outlet />
      </main>
    </div>
  );
};

export default PrincipalLayout;
