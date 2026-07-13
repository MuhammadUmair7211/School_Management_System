import { Route, Routes } from "react-router-dom";
import PrincipalLayout from "./principal/pages/PrincipalLayout";
import Dashboard from "./principal/pages/Dashboard";
import Students from "./principal/pages/Students";
import Classes from "./principal/pages/Classes";
import Subjects from "./principal/pages/Subjects";
import Attendance from "./principal/pages/Attendance";
import Examinations from "./principal/pages/Examinations";
import FeeManagement from "./principal/pages/FeeManagement";
import Reports from "./principal/pages/Reports";
import NoticeBoard from "./principal/pages/NoticeBoard";
import Messages from "./principal/pages/Messages";
import Settings from "./principal/pages/Settings";
import Profile from "./principal/pages/Profile";
import Calendar from "./principal/pages/Calendar";
import Teachers from "./principal/pages/Teachers";
import Notifications from "./principal/pages/Notifications";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PrincipalLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/examinations" element={<Examinations />} />
        <Route path="/fee-management" element={<FeeManagement />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/notice-board" element={<NoticeBoard />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/calendar" element={<Calendar />} />
      </Route>
    </Routes>
  );
};

export default App;
