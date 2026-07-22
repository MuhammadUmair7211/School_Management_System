import { useState } from "react";
import Header from "../components/Header";
import StudentRegistrationForm from "../components/StudentRegistrationForm";
import TimeLine from "../components/TimeLine";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AddNewStudent = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        heading="Add New Student"
        buttonText="Back to Students"
        details="Fill in the details to register a new student in the system"
        onClick={() => navigate("/students")}
        icon={<ArrowLeft size={18} />}
      />
      <div className="hidden lg:block">
        <TimeLine currentStep={currentStep} />
      </div>
      <div className="flex-1 mt-2 overflow-y-auto">
        <StudentRegistrationForm
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
    </div>
  );
};

export default AddNewStudent;
