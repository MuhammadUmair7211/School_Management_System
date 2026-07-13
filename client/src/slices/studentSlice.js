import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    {
      _id: 1,
      studentId: "STD001",
      // Admission Information
      admissionNo: "2026-001",
      admissionDate: "2026-04-01",
      rollNo: "10A-01",

      // Personal Information
      firstName: "Ali",
      lastName: "Khan",
      fullName: "Ali Khan",
      gender: "Male",
      dateOfBirth: "2010-05-15",
      bloodGroup: "B+",
      religion: "Islam",
      nationality: "Pakistani",
      cnicOrBForm: "12345-1234567-1",

      // Contact Information
      email: "ali@gmail.com",
      phone: "03001234567",
      address: "House #12, Peshawar",
      city: "Peshawar",
      province: "KPK",
      postalCode: "25000",

      // Academic Information
      classId: 1,
      sectionId: 2,
      house: "Iqbal House",
      session: "2026-2027",

      // Parent Information
      parentId: 10,
      fatherName: "Ahmad Khan",
      fatherContact: "03239385125",
      fatherOccupation: "Businessman",

      motherName: "Ayesha Khan",
      motherContact: "03001112222",
      motherOccupation: "Teacher",

      guardianName: "Ahmad Khan",
      guardianRelation: "Father",
      guardianPhone: "03239385125",

      // Emergency Contact
      emergencyContactName: "Ahmad Khan",
      emergencyContactNumber: "03239385125",

      // School Information
      profileImage: "",
      previousSchool: "ABC School",

      // Status
      status: "Active",
    },
  ],
  loading: false,
  error: null,
};
const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student._id !== action.payload._id,
      );
    },
    // Update student profile
    updateStudent: (state, action) => {
      const index = state.students.findIndex(
        (student) => student._id === action.payload._id,
      );

      if (index !== -1) {
        state.students[index] = {
          ...state.students[index],
          ...action.payload,
        };
      }
    },
    // Change student status
    changeStudentStatus: (state, action) => {
      const student = state.students.find(
        (student) => student._id === action.payload._id,
      );

      if (student) {
        student.status = action.payload.status;
      }
    },
  },
});

export const { addStudent, deleteStudent, changeStudentStatus, updateStudent } =
  studentSlice.actions;
export default studentSlice.reducer;
