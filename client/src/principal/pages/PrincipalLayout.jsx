import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const PrincipalLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <SideBar />

      <main className="min-w-0 flex-1 overflow-y-auto overflow-x-hidden p-2">
        <div className="mx-auto w-full max-w-[1920px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default PrincipalLayout;
