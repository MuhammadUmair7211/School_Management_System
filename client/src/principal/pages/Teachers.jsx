import { useSelector } from "react-redux";
import Header from "../components/Header";
import TeacherStatistics from "../components/TeacherStatistics";
import TeacherFilterBar from "../components/TeacherFilterBar";
import TeacherTable from "../components/TeacherTable";
import Pagination from "../components/Pagination";
import TeacherProfileSideBar from "../components/TeacherProfileSideBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Teachers = () => {
  const { teachers } = useSelector((state) => state.teachers);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalTeachers = teachers?.length;
  // Total pages
  const totalPages = Math.ceil(totalTeachers / itemsPerPage);
  // Calculate starting index
  const startIndex = (currentPage - 1) * itemsPerPage;
  // Calculate ending index
  const endIndex = startIndex + itemsPerPage;
  // Subjects for current page
  const currentTeachers = teachers.slice(startIndex, endIndex);
  const navigate = useNavigate();
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex flex-1 flex-col gap-2 overflow-hidden lg:flex-row">
        <div className="min-w-0 flex-1 overflow-hidden">
          <Header
            heading="Teachers"
            buttonText="Add New Teacher"
            onClick={() => navigate("/teachers/add-new-teacher")}
          />
          <TeacherStatistics teachers={teachers} />
          <TeacherFilterBar />
          <TeacherTable
            teachers={currentTeachers}
            setSelectedTeacher={setSelectedTeacher}
          />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            totalItems={totalTeachers}
            setItemsPerPage={setItemsPerPage}
          />
        </div>
        {/* Sidebar */}
        {selectedTeacher && (
          <aside className="w-full rounded-xl border border-slate-200 bg-white shadow-sm lg:w-md xl:w-120">
            <div className="p-2 h-[calc(100vh-120px)] overflow-y-auto">
              <TeacherProfileSideBar
                teacher={selectedTeacher}
                onClose={() => setSelectedTeacher(null)}
              />
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default Teachers;
