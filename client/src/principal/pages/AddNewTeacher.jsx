import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import TeacherRegistrationForm from "../components/TeacherRegistrationForm";
import { ArrowLeft } from "lucide-react";

const AddNewTeacher = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        heading="Add New Teacher"
        buttonText="Back to Teachers"
        details="Fill in the details below to register a new teacher in the system"
        onClick={() => navigate("/teachers")}
        icon={<ArrowLeft size={18} />}
      />
      <div className="flex-1 mt-2 overflow-y-auto">
        <TeacherRegistrationForm />
      </div>
    </div>
  );
};

export default AddNewTeacher;
