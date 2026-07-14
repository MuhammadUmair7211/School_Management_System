const TimeLine = ({ currentStep }) => {
  const stepTitles = [
    "Basic Information",
    "Parent Information",
    "Academic Information",
    "Address Information",
    "Other Information",
    "Documents",
  ];

  return (
    <div className="mt-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        {stepTitles.map((step, index) => {
          const stepNumber = index + 1;

          return (
            <div key={stepNumber} className="flex items-center">
              {/* Step */}
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full font-semibold transition-all
                    ${
                      currentStep >= stepNumber
                        ? "bg-green-500 text-white"
                        : "bg-slate-200 text-slate-600"
                    }`}
                >
                  {stepNumber}
                </div>

                <p
                  className={`mt-2 text-sm text-center ${
                    currentStep >= stepNumber
                      ? "font-medium text-green-600"
                      : "text-slate-500"
                  }`}
                >
                  {step}
                </p>
              </div>

              {/* Connector */}
              {index !== stepTitles.length - 1 && (
                <div
                  className={`ml-5 h-1 w-16 rounded-full transition-all ${
                    currentStep > stepNumber ? "bg-green-500" : "bg-slate-300"
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
