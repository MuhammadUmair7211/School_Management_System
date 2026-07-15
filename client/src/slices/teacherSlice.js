import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teachers: [
    {
      _id: 1,

      // Employee Information
      employeeId: "EMP001",
      joiningDate: "2025-01-10",

      // Personal Information
      firstName: "Ahmed",
      lastName: "Khan",
      gender: "Male",
      dateOfBirth: "1990-05-15",
      qualification: "M.Sc Mathematics",
      experience: "8 Years",

      // Contact Information
      email: "ahmed.khan@school.com",
      phone: "03001234567",
      address: "Peshawar",

      // Professional Information
      designation: "Mathematics Teacher",
      department: "Science",
      classTeacherOf: 1,
      subject: "Mathematics",

      // Salary
      salary: 70000,

      // Profile
      profileImage: "",

      // Status
      status: "Active",
    },

    {
      _id: 2,

      employeeId: "EMP002",
      joiningDate: "2024-08-05",

      firstName: "Ayesha",
      lastName: "Ali",
      gender: "Female",
      dateOfBirth: "1992-09-22",
      qualification: "M.A English",
      experience: "6 Years",

      email: "ayesha.ali@school.com",
      phone: "03019876543",
      address: "Islamabad",

      designation: "English Teacher",
      department: "Languages",
      classTeacherOf: 2,
      subject: "English",

      salary: 65000,

      profileImage: "",

      status: "Active",
    },

    {
      _id: 3,

      employeeId: "EMP003",
      joiningDate: "2023-03-15",

      firstName: "Bilal",
      lastName: "Shah",
      gender: "Male",
      dateOfBirth: "1988-12-10",
      qualification: "M.Sc Physics",
      experience: "10 Years",

      email: "bilal.shah@school.com",
      phone: "03112223344",
      address: "Nowshera",

      designation: "Physics Teacher",
      department: "Science",
      classTeacherOf: 3,
      subject: "Physics",

      salary: 75000,

      profileImage: "",

      status: "Active",
    },

    {
      _id: 4,

      employeeId: "EMP004",
      joiningDate: "2022-11-01",

      firstName: "Fatima",
      lastName: "Noor",
      gender: "Female",
      dateOfBirth: "1994-04-18",
      qualification: "M.A Urdu",
      experience: "5 Years",

      email: "fatima.noor@school.com",
      phone: "03221234567",
      address: "Mardan",

      designation: "Georaphy Teacher",
      department: "History",
      classTeacherOf: 4,
      subject: "Urdu",

      salary: 60000,

      profileImage: "",

      status: "Active",
    },

    {
      _id: 5,

      employeeId: "EMP005",
      joiningDate: "2021-06-20",

      firstName: "Usman",
      lastName: "Iqbal",
      gender: "Male",
      dateOfBirth: "1987-07-28",
      qualification: "M.Sc Computer Science",
      experience: "12 Years",

      email: "usman.iqbal@school.com",
      phone: "03331234567",
      address: "Swabi",

      designation: "Computer Science Teacher",
      department: "Computer Science",
      classTeacherOf: 5,
      subject: "Computer Science",

      salary: 80000,

      profileImage: "",

      status: "Active",
    },
  ],
  loading: false,
  error: null,
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    addTeacher: (state, action) => {
      state.teachers.push(action.payload);
    },

    updateTeacher: (state, action) => {
      const index = state.teachers.findIndex(
        (teacher) => teacher._id === action.payload._id,
      );

      if (index !== -1) {
        state.teachers[index] = {
          ...state.teachers[index],
          ...action.payload,
        };
      }
    },

    deleteTeacher: (state, action) => {
      state.teachers = state.teachers.filter(
        (teacher) => teacher._id !== action.payload,
      );
    },

    changeTeacherStatus: (state, action) => {
      const teacher = state.teachers.find(
        (teacher) => teacher._id === action.payload._id,
      );

      if (teacher) {
        teacher.status = action.payload.status;
      }
    },
  },
});

export const { addTeacher, updateTeacher, deleteTeacher, changeTeacherStatus } =
  teacherSlice.actions;

export default teacherSlice.reducer;
