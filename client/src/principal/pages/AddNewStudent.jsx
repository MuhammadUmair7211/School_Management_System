import Header from "../components/Header";
import StudentRegistrationForm from "../components/StudentRegistrationForm";
import TimeLine from "../components/TimeLine";

const AddNewStudent = () => {
  const handleAddButton = () => {};
  return (
    <div className="h-full">
      <Header
        heading="Add New Student"
        buttonText="Create Student"
        onClick={handleAddButton}
      />
      <TimeLine />
      <StudentRegistrationForm />
    </div>
  );
};

export default AddNewStudent;
