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
import AddNewSubject from "./principal/pages/AddNewSubject";
import Activities from "./principal/pages/Activities";
import AddNewClass from "./principal/pages/AddNewClass";
import EditExistingClass from "./principal/pages/EditExistingClass";
import EditExistingTeacher from "./principal/pages/EditExistingTeacher";
import GeneralSettings from "./principal/pages/GeneralSettings";
import AcademicSettings from "./principal/pages/AcademicSettings";
import SystemSettings from "./principal/pages/SystemSettings";
import NotificationSettings from "./principal/pages/NotificationSettings";
import SecuritySettings from "./principal/pages/SecuritySettings";
import BackupSettings from "./principal/pages/BackupSettings";
import EditExistingSubject from "./principal/pages/EditExistingSubject";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PrincipalLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="students" element={<Students />} />
        <Route
          path="students/edit-existing-student/:id"
          element={<EditStudentProfilePage />}
        />
        <Route path="students/add-new-student" element={<AddNewStudent />} />

        <Route path="teachers" element={<Teachers />} />
        <Route
          path="/teachers/edit-existing-teacher/:id"
          element={<EditExistingTeacher />}
        />
        <Route path="/teachers/add-new-teacher" element={<AddNewTeacher />} />
        <Route path="classes" element={<Classes />} />
        <Route path="/classes/add-new-class" element={<AddNewClass />} />
        <Route
          path="/classes/edit-existing-class/:id"
          element={<EditExistingClass />}
        />
        <Route path="subjects" element={<Subjects />} />
        <Route path="/subjects/add-new-subject" element={<AddNewSubject />} />
        <Route
          path="/subjects/edit-existing-subject/:id"
          element={<EditExistingSubject />}
        />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/examinations" element={<Examinations />} />
        <Route path="/fee-management" element={<FeeManagement />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/notice-board" element={<NoticeBoard />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />}>
          <Route index element={<GeneralSettings />} />
          <Route path="academic-settings" element={<AcademicSettings />} />
          <Route path="system-settings" element={<SystemSettings />} />
          <Route
            path="notification-settings"
            element={<NotificationSettings />}
          />
          <Route path="security-settings" element={<SecuritySettings />} />
          <Route path="backup-settings" element={<BackupSettings />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/view-calendar" element={<Calendar />} />
        <Route path="/activities" element={<Activities />} />
      </Route>
    </Routes>
  );
};

export default App;
