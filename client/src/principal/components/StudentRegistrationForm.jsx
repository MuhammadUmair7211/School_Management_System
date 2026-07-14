import AcademicInformationForm from "./AcademicInformationForm";
import BasicInformationForm from "./BasicInformationForm";
import PersonalInformationForm from "./PersonalInformationForm";
import ProfilePhotoStudentRightSide from "./ProfilePhotoStudentRightSide";

const StudentRegistrationForm = () => {
  return (
    <div className="mt-2 h-full grid grid-cols-1 gap-4 lg:grid-cols-12">
      {/* Left Side */}
      <div className="space-y-4 lg:col-span-8">
        <BasicInformationForm />
        <PersonalInformationForm />
        <AcademicInformationForm />
      </div>

      {/* Right Side */}
      <div className="rounded-xl border border-slate-200 p-2 lg:col-span-4">
        <ProfilePhotoStudentRightSide />
      </div>
    </div>
  );
};

export default StudentRegistrationForm;
