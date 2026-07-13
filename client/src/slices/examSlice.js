import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exams: [
    {
      _id: 1,

      // Exam Information
      examName: "Mid Term Examination",

      // Relationships
      classId: 1,
      subjectId: 1,

      // Schedule
      examDate: "2026-09-15",
      startTime: "09:00 AM",
      endTime: "12:00 PM",

      // Marks
      totalMarks: 100,
      passingMarks: 40,

      // Room
      roomNumber: "Hall A",

      // Status
      status: "Upcoming",
    },
  ],
  loading: false,
  error: null,
};

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    addExam: (state, action) => {
      state.exams.push(action.payload);
    },

    updateExam: (state, action) => {
      const index = state.exams.findIndex(
        (exam) => exam._id === action.payload._id,
      );

      if (index !== -1) {
        state.exams[index] = {
          ...state.exams[index],
          ...action.payload,
        };
      }
    },

    deleteExam: (state, action) => {
      state.exams = state.exams.filter((exam) => exam._id !== action.payload);
    },

    changeExamStatus: (state, action) => {
      const exam = state.exams.find((exam) => exam._id === action.payload._id);

      if (exam) {
        exam.status = action.payload.status;
      }
    },
  },
});

export const { addExam, updateExam, deleteExam, changeExamStatus } =
  examSlice.actions;

export default examSlice.reducer;
