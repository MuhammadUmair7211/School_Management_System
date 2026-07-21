import Header from "../components/Header";
import { useSelector } from "react-redux";
import StudentTable from "../components/StudentTable";
import StudentFilterBar from "../components/StudentFilterBar";
import { useState } from "react";
import StudentProfileSideBar from "../components/StudentProfileSideBar";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import StudentStatistics from "../components/StudentStatistics";

const Students = () => {
  const { students } = useSelector((state) => state.students);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalStudents = students?.length;

  // Total pages
  const totalPages = Math.ceil(totalStudents / itemsPerPage);
  // Calculate starting index
  const startIndex = (currentPage - 1) * itemsPerPage;
  // Calculate ending index
  const endIndex = startIndex + itemsPerPage;
  // Subjects for current page
  const currentStudents = students.slice(startIndex, endIndex);
  const navigate = useNavigate();
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex flex-1 flex-col gap-2 overflow-hidden lg:flex-row">
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
            students={currentStudents}
            setSelectedStudent={setSelectedStudent}
          />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            totalItems={totalStudents}
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
