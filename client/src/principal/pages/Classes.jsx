import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ClassStatistics from "../components/ClassStatistics";
import { useSelector } from "react-redux";
import ClassFilterBar from "../components/ClassFilterBar";
import ClassesTable from "../components/ClassesTable";
import Pagination from "../components/Pagination";
import { useState } from "react";
import ClassProfileRightSideBar from "../components/ClassProfileRightSideBar";
const Classes = () => {
  const { classes } = useSelector((state) => state.classes);
  const [selectedClass, setSelectedClass] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalClasses = classes?.length;
  const totalPages = Math.ceil(totalClasses / itemsPerPage);

  // Calculate starting index
  const startIndex = (currentPage - 1) * itemsPerPage;
  // Calculate ending index
  const endIndex = startIndex + itemsPerPage;
  // Subjects for current page
  const currentClasses = classes.slice(startIndex, endIndex);
  const navigate = useNavigate();
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex flex-1 flex-col gap-2 overflow-hidden lg:flex-row">
        <div className="min-w-0 flex-1 overflow-hidden">
          <Header
            heading="Classes"
            buttonText="Add New Class"
            details="Fill in the details to register a new class in the system"
            onClick={() => navigate("/classes/add-new-class")}
          />

          <ClassStatistics classes={classes} />
          <ClassFilterBar />
          <ClassesTable
            classes={currentClasses}
            setSelectedClass={setSelectedClass}
          />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            totalItems={totalClasses}
            setItemsPerPage={setItemsPerPage}
          />
        </div>
        {/* Sidebar */}
        {selectedClass && (
          <aside className="w-full rounded-xl border border-slate-200 bg-white shadow-sm lg:w-md xl:w-120">
            <div className="p-2 h-[calc(100vh-120px)] overflow-y-auto">
              <ClassProfileRightSideBar
                selectedClass={selectedClass}
                onClose={() => setSelectedClass(null)}
              />
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default Classes;
