import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import SubjectStatistics from "../components/SubjectStatistics";
import SubjectFilterBar from "../components/SubjectFilterBar";
import SubjectTable from "../components/SubjectTable";
import Pagination from "../components/Pagination";
import { useState } from "react";
import { Plus } from "lucide-react";
const Subjects = () => {
  const { subjects } = useSelector((state) => state.subjects);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalSubjects = subjects?.length;

  // Total pages
  const totalPages = Math.ceil(totalSubjects / itemsPerPage);
  // Calculate starting index
  const startIndex = (currentPage - 1) * itemsPerPage;
  // Calculate ending index
  const endIndex = startIndex + itemsPerPage;
  // Subjects for current page
  const currentSubjects = subjects.slice(startIndex, endIndex);
  const navigate = useNavigate();
  return (
    <div>
      <Header
        heading="Subjects"
        buttonText="Add New Subject"
        details="Manage subjects, categories, classes, and academic details"
        icon={<Plus size={18} />}
        onClick={() => navigate("/subjects/add-new-subject")}
      />
      <SubjectStatistics subjects={subjects} />
      <SubjectFilterBar />
      <SubjectTable subjects={currentSubjects} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        totalItems={totalSubjects}
        setItemsPerPage={setItemsPerPage}
      />
    </div>
  );
};

export default Subjects;
