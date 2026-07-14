import Header from "../components/Header";
import StudentsStats from "../components/StudentStats";
import { useSelector } from "react-redux";
import StudentTable from "../components/StudentTable";
import StudentFilterBar from "../components/StudentFilterBar";
import { useState } from "react";
import StudentProfileSideBar from "../components/StudentProfileSideBar";
import { useNavigate } from "react-router-dom";
const Students = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const { students } = useSelector((state) => state.students);
  const navigate = useNavigate();

  const handleAddButton = () => {
    navigate("/students/add-new-student");
  };

  return (
    <div className="flex flex-col md:flex-row gap-2">
      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          selectedStudent ? "w-[calc(100%-30rem)]" : "w-full"
        }`}
      >
        <Header
          heading="Students"
          buttonText="Add Student"
          onClick={handleAddButton}
        />
        <StudentsStats students={students} />
        <StudentFilterBar />
        <StudentTable
          students={students}
          setSelectedStudent={setSelectedStudent}
        />
      </div>

      {/* Sidebar */}
      <aside
        className={`transition-all duration-300 overflow-hidden  rounded-xl ${
          selectedStudent ? "w-120 border border-slate-200 shadow-sm" : "w-0"
        }`}
      >
        <div className="w-full p-2">
          {selectedStudent && (
            <StudentProfileSideBar
              student={selectedStudent}
              onClose={() => setSelectedStudent(null)}
            />
          )}
        </div>
      </aside>
    </div>
  );
};

export default Students;
