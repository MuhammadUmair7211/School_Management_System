import EmployeeInformationForm from "./EmployeeInformationForm";
import ProfilePhotoTeacherRightSide from "./ProfilePhotoTeacherRightSide";
import TeacherContactInformationForm from "./TeacherContactInformationForm";
import TeacherPersonalInformationForm from "./TeacherPersonalInformationForm";
import TeacherProfessionalInformationForm from "./TeacherProfessionalInformationForm";
import TeacherSalaryInformationForm from "./TeacherSalaryInformationForm";

const TeacherRegistrationForm = () => {
  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
      <div className="flex flex-col space-y-2 lg:col-span-8">
        <EmployeeInformationForm />
        <TeacherPersonalInformationForm />
        <TeacherContactInformationForm />
        <TeacherProfessionalInformationForm />
        <TeacherSalaryInformationForm />
      </div>
      {/* Right Side */}
      <div className="rounded-xl border border-slate-200 p-2 lg:col-span-4">
        <ProfilePhotoTeacherRightSide />
      </div>
    </div>
  );
};

export default TeacherRegistrationForm;
