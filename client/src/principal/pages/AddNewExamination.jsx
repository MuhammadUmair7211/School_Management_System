import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const AddNewExamination = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header
        heading="Add New Examination"
        details="Fill in the details to add new examination to the system"
        buttonText="Back to Examinations"
        icon={<ArrowLeft size={18} />}
        onClick={() => navigate("/examinations")}
      />
    </div>
  );
};

export default AddNewExamination;
