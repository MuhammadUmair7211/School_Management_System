import { Plus } from "lucide-react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ExaminationStatistics from "../components/ExaminationStatistics";
import ExaminationFilterBar from "../components/ExaminationFilterBar";
import ExaminationTable from "../components/ExaminationTable";
import Pagination from "../components/Pagination";
import { useState } from "react";
import ExaminationRightSideBar from "../components/ExaminationRightSideBar";
import ExaminationFooterActionCard from "../components/ExaminationFooterActionCard";
import { updateExamStatus } from "../../slices/examSlice";

const Examinations = () => {
  const { exams } = useSelector((state) => state.exams);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputSearch, setInputSearch] = useState("");
  const [classSearch, setClassSearch] = useState("all");
  const [termSearch, setTermSearch] = useState("all");
  const [typeSearch, setTypeSearch] = useState("all");
  const [statusSearch, setStatusSearch] = useState("all");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStatusChange = (examId, status) => {
    dispatch(
      updateExamStatus({
        id: examId,
        status: status,
      }),
    );
  };
  const filteredExaminations = exams.filter((examination) => {
    const search = inputSearch.toLowerCase();
    const selectedClass = classSearch.toLowerCase();
    const selectedTerm = termSearch.toLowerCase();
    const selectedType = typeSearch.toLowerCase();
    const selectedStatus = statusSearch.toLowerCase();
    const matchesSearch =
      !search || examination.examinationName.toLowerCase().includes(search);
    const matchesClass =
      classSearch === "all" ||
      String(examination.class).includes(selectedClass);
    const matchesTerm =
      termSearch === "all" ||
      examination.term.toLowerCase().includes(selectedTerm);
    const matchesType =
      typeSearch === "all" ||
      examination.examinationType.toLowerCase().includes(selectedType);
    const matchesStatus =
      statusSearch === "all" ||
      examination.status.toLowerCase().includes(selectedStatus);

    return (
      matchesSearch &&
      matchesClass &&
      matchesTerm &&
      matchesType &&
      matchesStatus
    );
  });
  const totalExaminations = filteredExaminations.length;
  const totalPages = Math.ceil(totalExaminations / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentExaminations = filteredExaminations?.slice(startIndex, endIndex);
  return (
    <div>
      {/* Header */}
      <Header
        heading="Examinations"
        details="View, manage the examinations of your school"
        buttonText="Add New Exam"
        icon={<Plus className="svg" size={18} />}
        onClick={() => navigate("/examinations/add-new-examination")}
      />

      {/* Statistics */}
      <ExaminationStatistics exams={exams} />

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-2 xl:grid-cols-[minmax(0,1fr)_350px]">
        {/* Left Side */}
        <div className="min-w-0">
          <ExaminationFilterBar
            exams={currentExaminations}
            inputSearch={inputSearch}
            classSearch={classSearch}
            termSearch={termSearch}
            typeSearch={typeSearch}
            statusSearch={statusSearch}
            setClassSearch={setClassSearch}
            setInputSearch={setInputSearch}
            setTermSearch={setTermSearch}
            setTypeSearch={setTypeSearch}
            setStatusSearch={setStatusSearch}
          />

          <ExaminationTable
            exams={currentExaminations}
            onStatusChange={handleStatusChange}
            isStatusAllowed={true}
          />
          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            totalItems={totalExaminations}
            setItemsPerPage={setItemsPerPage}
          />
        </div>

        {/* Right Side */}
        <aside className="w-full mt-2">
          <ExaminationRightSideBar />
        </aside>
      </div>
      <ExaminationFooterActionCard />
    </div>
  );
};

export default Examinations;
