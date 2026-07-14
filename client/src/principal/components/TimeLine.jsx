import { useState } from "react";

const TimeLine = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    "Basic Information",
    "Parent Information",
    "Academic Information",
    "Address Information",
    "Other Information",
    "Documents",
  ];
  return (
    <div className="p-4 border border-slate-200 rounded-xl shadow-md mt-2">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              <h1
                className={`w-12 h-12 bg-black/20 rounded-full flex items-center justify-center ${currentStep === index ? "bg-green-500 text-white" : ""}`}
              >
                {index + 1}
              </h1>
              <p className={`${currentStep === index ? "text-green-500" : ""}`}>
                {step}
              </p>

              {/* Line */}
              {index !== steps.length - 1 && (
                <div
                  className={`ml-5 h-1 w-10 rounded-full ${
                    index < currentStep ? "bg-green-500" : "bg-slate-300"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeLine;
