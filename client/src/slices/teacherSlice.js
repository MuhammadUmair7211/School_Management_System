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
      classTeacherOf: 1, // Class ID
      subjectIds: [1, 2], // Mathematics, Physics

      // Salary
      salary: 70000,

      // Profile
      profileImage: "",

      // Status
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
