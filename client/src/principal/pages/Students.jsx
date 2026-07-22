import Header from "../components/Header";
import { useSelector } from "react-redux";
import StudentTable from "../components/StudentTable";
import StudentFilterBar from "../components/StudentFilterBar";
import { useState } from "react";
import StudentProfileSideBar from "../components/StudentProfileSideBar";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import StudentStatistics from "../components/StudentStatistics";
import { Plus } from "lucide-react";

const Students = () => {
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");
  const [classSearch, setClassSearch] = useState("all");
  const [sectionSearch, setSectionSearch] = useState("all");
  const [statusSearch, setStatusSearch] = useState("all");
  const { students } = useSelector((state) => state.students);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalStudents = students?.length;

  // search functionality
  const filteredStudents = students.filter((student) => {
    const search = inputSearch.toLowerCase();
    const selectedClass = classSearch.toLowerCase();
    const selectedSection = sectionSearch.toLowerCase();
    const selectedStatus = statusSearch.toLowerCase();

    const matchesSearch =
      !search ||
      student.fullName?.toLowerCase().includes(search) ||
      student.fatherName?.toLowerCase().includes(search) ||
      student.studentId?.toLowerCase().includes(search) ||
      student.rollNo?.toLowerCase().includes(search) ||
      student.nationality?.toLowerCase().includes(search) ||
      student.gender?.toLowerCase().includes(search) ||
      student.address?.toLowerCase().includes(search) ||
      student.motherName?.toLowerCase().includes(search) ||
      String(student.class).toLowerCase().includes(search);

    const matchesClass =
      classSearch === "all" ||
      String(student.class).toLowerCase() === selectedClass;

    const matchesSection =
      sectionSearch === "all" ||
      student.section.toLowerCase() === selectedSection;

    const matchesStatus =
      statusSearch === "all" || student.status.toLowerCase() === selectedStatus;

    return matchesSearch && matchesClass && matchesSection && matchesStatus;
  });

  // Total pages
  const totalPages = Math.ceil(totalStudents / itemsPerPage);
  // Calculate starting index
  const startIndex = (currentPage - 1) * itemsPerPage;
  // Calculate ending index
  const endIndex = startIndex + itemsPerPage;
  // Subjects for current page
  const currentStudents = filteredStudents.slice(startIndex, endIndex);

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex flex-1 flex-col gap-2 overflow-hidden lg:flex-row">
        {/* Main Content */}
        <div className="min-w-0 flex-1 overflow-hidden">
          <Header
            heading="Students"
            details="Manage, view and edit students in your school"
            buttonText="Add Student"
            onClick={() => navigate("/students/add-new-student")}
            icon={<Plus size={18} />}
          />

          <StudentStatistics students={students} />

          <StudentFilterBar
            inputSearch={inputSearch}
            setInputSearch={setInputSearch}
            classSearch={classSearch}
            setClassSearch={setClassSearch}
            sectionSearch={sectionSearch}
            setSectionSearch={setSectionSearch}
            statusSearch={statusSearch}
            setStatusSearch={setStatusSearch}
          />

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
            setItemsPerPage={setItemsPerPage}
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
