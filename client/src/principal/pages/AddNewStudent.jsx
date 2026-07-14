import { useState } from "react";
import Header from "../components/Header";
import StudentRegistrationForm from "../components/StudentRegistrationForm";
import TimeLine from "../components/TimeLine";

const AddNewStudent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const handleAddButton = () => {};
  return (
    <div className="h-full">
      <Header
        heading="Add New Student"
        buttonText="Create Student"
        onClick={handleAddButton}
      />
      <div className="hidden lg:block">
        <TimeLine currentStep={currentStep} />
      </div>
      <StudentRegistrationForm
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </div>
  );
};

export default AddNewStudent;
