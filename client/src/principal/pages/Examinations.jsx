import { Plus } from "lucide-react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ExaminationStatistics from "../components/ExaminationStatistics";
import ExaminationFilterBar from "../components/ExaminationFilterBar";
import ExaminationTable from "../components/ExaminationTable";
import Pagination from "../components/Pagination";
import { useState } from "react";
import ExaminationRightSideBar from "../components/ExaminationRightSideBar";
import ExaminationFooterActionCard from "../components/ExaminationFooterActionCard";

const Examinations = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const { exams = [] } = useSelector((state) => state.exams);

  const totalExaminations = exams.length;

  const totalPages = Math.ceil(totalExaminations / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  const currentExaminations = exams.slice(startIndex, endIndex);

  return (
    <div className="">
      {/* Header */}
      <Header
        heading="Examinations"
        details="View, manage the examinations of your school"
        buttonText="Add New Examination"
        icon={<Plus size={18} />}
        onClick={() => navigate("/examinations/add-new-examination")}
      />

      {/* Statistics */}
      <ExaminationStatistics />

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-2 xl:grid-cols-[minmax(0,1fr)_400px]">
        {/* Left Side */}
        <div className="min-w-0">
          <ExaminationFilterBar />

          <ExaminationTable exams={currentExaminations} />
          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            totalItems={totalExaminations}
            setItemsPerPage={setItemsPerPage}
          />
          <ExaminationFooterActionCard />
        </div>

        {/* Right Side */}
        <aside className="w-full mt-2">
          <ExaminationRightSideBar />
        </aside>
      </div>
    </div>
  );
};

export default Examinations;
