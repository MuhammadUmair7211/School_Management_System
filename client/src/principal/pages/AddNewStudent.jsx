import { useState } from "react";
import Header from "../components/Header";
import StudentRegistrationForm from "../components/StudentRegistrationForm";
import TimeLine from "../components/TimeLine";

const AddNewStudent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const handleAddButton = () => {};
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        heading="Add New Student"
        buttonText="Create Student"
        details="Fill in the details to register a new student in the system"
        onClick={handleAddButton}
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
