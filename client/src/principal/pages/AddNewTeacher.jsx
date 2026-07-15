import Header from "../components/Header";
import TeacherRegistrationForm from "../components/TeacherRegistrationForm";
import TitleBar from "../components/TitleBar";

const AddNewTeacher = () => {
  const handleAddNewTeacher = () => {};
  return (
    <div className="flex flex-col min-h-screen">
      <TitleBar />
      <Header
        heading="Add New Teacher"
        buttonText="Create Teacher"
        details="Fill in the details below to register a new teacher in the system"
        onClick={handleAddNewTeacher}
      />
      <div className="flex-1 mt-2 overflow-y-auto">
        <TeacherRegistrationForm />
      </div>
    </div>
  );
};

export default AddNewTeacher;
