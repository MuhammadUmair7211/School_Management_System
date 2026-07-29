import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import ExaminationsTable from "../components/ExaminationTable";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UpcomingExaminations = () => {
  const navigate = useNavigate();
  const { exams } = useSelector((state) => state.exams);
  const upcomingExams = exams.filter((exam) => exam.status === "upcoming");

  return (
    <div>
      <Header
        heading="Upcoming Examinations"
        details="View Details of upcoming examination in your school"
        buttonText="Back to Examinations"
        icon={<ArrowLeft size={18} />}
        onClick={() => navigate("/examinations")}
      />

      <ExaminationsTable exams={upcomingExams} isStatusAllowed={false} />
    </div>
  );
};

export default UpcomingExaminations;
