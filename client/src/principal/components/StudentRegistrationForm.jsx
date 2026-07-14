import AcademicInformationForm from "./AcademicInformationForm";
import AddressInformationForm from "./AddressInformationForm";
import BasicInformationForm from "./BasicInformationForm";
import DocumentsForm from "./DocumentsForm";
import OtherInformationForm from "./OtherInformationForm";
import PersonalInformationForm from "./PersonalInformationForm";
import ProfilePhotoStudentRightSide from "./ProfilePhotoStudentRightSide";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

const StudentRegistrationForm = ({ currentStep, setCurrentStep }) => {
  return (
    <div className="mt-2 grid grid-cols-1 gap-2 lg:grid-cols-12">
      {/* Left Side */}
      <div className="space-y-4 lg:col-span-8">
        <div className="min-h-[50vh] w-full">
          {currentStep == 1 && <BasicInformationForm />}
          {currentStep == 2 && <PersonalInformationForm />}
          {currentStep == 3 && <AcademicInformationForm />}
          {currentStep == 4 && <AddressInformationForm />}
          {currentStep == 5 && <OtherInformationForm />}
          {currentStep == 6 && <DocumentsForm />}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Previous */}
          <button
            onClick={() => setCurrentStep((prev) => prev - 1)}
            disabled={currentStep == 1}
            className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-400 cursor-pointer disabled:cursor-not-allowed hover:bg-slate-50 hover:shadow disabled:opacity-50"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Previous
          </button>

          {currentStep == 6 && (
            <button className="px-6 py-2.5 bg-blue-500 text-white hover:bg-blue-600 duration-300 cursor-pointer">
              Submit Data
            </button>
          )}

          {/* Next */}
          <button
            onClick={() => setCurrentStep((prev) => prev + 1)}
            disabled={currentStep == 6}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all cursor-pointer duration-300 hover:bg-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="rounded-xl border border-slate-200 p-2 lg:col-span-4">
        <ProfilePhotoStudentRightSide />
      </div>
    </div>
  );
};

export default StudentRegistrationForm;
