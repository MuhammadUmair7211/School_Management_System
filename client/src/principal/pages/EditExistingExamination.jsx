import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EditExistingExamination = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { exams } = useSelector((state) => state.exams);
  const filteredEditExamById = exams.find((exam) => exam._id === Number(id));
  console.log(filteredEditExamById);

  return (
    <div>
      <Header
        heading="Edit Existing Examination"
        details="view, edit and modify existing examination"
        buttonText="Back to Upcoming Examinations"
        icon={<ArrowLeft size={18} />}
        onClick={() => navigate("/examinations/upcoming-examinations")}
      />
    </div>
  );
};

export default EditExistingExamination;
