import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import AddNewExamForm from "../components/AddNewExamForm";

const AddNewExamination = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header
        heading="Add New Examination"
        details="Fill in the details to add new examination to the system"
        buttonText="Back to Exams"
        icon={<ArrowLeft className="svg" size={18} />}
        onClick={() => navigate("/examinations")}
      />
      <AddNewExamForm />
    </div>
  );
};

export default AddNewExamination;
