import Header from "../components/Header";
import { useSelector } from "react-redux";
import StudentTable from "../components/StudentTable";
import StudentFilterBar from "../components/StudentFilterBar";
import { useState } from "react";
import StudentProfileSideBar from "../components/StudentProfileSideBar";
import { useNavigate } from "react-router-dom";
import TitleBar from "../components/TitleBar";
import Pagination from "../components/Pagination";
import StudentStatistics from "../components/StudentStatistics";

const Students = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const { students } = useSelector((state) => state.students);
  const navigate = useNavigate();
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <TitleBar />

      <div className="mt-2 flex flex-1 flex-col gap-2 overflow-hidden lg:flex-row">
        {/* Main Content */}
        <div className="min-w-0 flex-1 overflow-hidden">
          <Header
            heading="Students"
            buttonText="Add Student"
            onClick={() => navigate("/students/add-new-student")}
          />

          <StudentStatistics students={students} />

          <StudentFilterBar />

          <StudentTable
            students={students}
            setSelectedStudent={setSelectedStudent}
          />
          <Pagination
            currentPage={1}
            totalPages={8}
            itemsPerPage={10}
            totalStudents={78}
          />
        </div>

        {/* Sidebar */}
        {selectedStudent && (
          <aside className="w-full rounded-xl border border-slate-200 bg-white shadow-sm lg:w-md xl:w-120">
            <div className="p-2 h-[calc(100vh-120px)] overflow-y-auto">
              <StudentProfileSideBar
                student={selectedStudent}
                onClose={() => setSelectedStudent(null)}
              />
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default Students;
