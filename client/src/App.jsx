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
import EditStudentProfilePage from "./principal/pages/EditStudentProfilePage";
import AddNewStudent from "./principal/pages/AddNewStudent";
import AddNewTeacher from "./principal/pages/AddNewTeacher";
import AddClass from "./principal/pages/AddClass";
import AddNewSubject from "./principal/pages/AddNewSubject";
import Activities from "./principal/pages/Activities";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PrincipalLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="students" element={<Students />} />
        <Route
          path="students/edit-student-profile/:id"
          element={<EditStudentProfilePage />}
        />
        <Route path="students/add-new-student" element={<AddNewStudent />} />

        <Route path="teachers" element={<Teachers />} />
        <Route path="teachers/add-new-teacher" element={<AddNewTeacher />} />
        <Route path="classes" element={<Classes />} />
        <Route path="/classes/add-new-class" element={<AddClass />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path="/subjects/add-new-subject" element={<AddNewSubject />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/examinations" element={<Examinations />} />
        <Route path="/fee-management" element={<FeeManagement />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/notice-board" element={<NoticeBoard />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/view-calendar" element={<Calendar />} />
        <Route path="/activities" element={<Activities />} />
      </Route>
    </Routes>
  );
};

export default App;
