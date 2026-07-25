import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import ExaminationsTable from "../components/ExaminationTable";

const UpcomingExaminations = () => {
  const { exams } = useSelector((state) => state.exams);
  const upcomingExams = exams.filter((exam) => exam.status === "upcoming");
  return (
    <div>
      <Header
        heading="Upcoming Examinations"
        details="View Details of upcoming examination in your school"
        buttonText="Back to Examinations"
        icon={<ArrowLeft size={18} />}
      />

      <ExaminationsTable exams={upcomingExams} />
    </div>
  );
};

export default UpcomingExaminations;
