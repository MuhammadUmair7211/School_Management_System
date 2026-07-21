import Header from "../components/Header";
import TeacherRegistrationForm from "../components/TeacherRegistrationForm";

const AddNewTeacher = () => {
  const handleAddNewTeacher = () => {};
  return (
    <div className="flex flex-col min-h-screen">
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
