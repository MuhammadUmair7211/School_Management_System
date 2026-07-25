import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exams: [
    {
      _id: 1,
      examName: "Mid Term Examination",
      class: 1,
      startDate: "2026-09-15",
      endDate: "2026-09-15",
      startTime: "09:00 AM",
      endTime: "12:00 PM",
      roomNumber: "Hall A",
      type: "theory",
      status: "upcoming",
    },
    {
      _id: 2,
      examName: "Mid Term Examination",
      class: 2,
      startDate: "2026-09-16",
      endDate: "2026-09-16",
      startTime: "09:00 AM",
      endTime: "12:00 PM",
      roomNumber: "Hall B",
      type: "theory",
      status: "upcoming",
    },
    {
      _id: 3,
      examName: "Mid Term Examination",
      class: 3,
      startDate: "2026-09-17",
      endDate: "2026-09-17",
      startTime: "09:00 AM",
      endTime: "12:00 PM",
      roomNumber: "Room 101",
      type: "theory",
      status: "upcoming",
    },
    {
      _id: 4,
      examName: "Mid Term Examination",
      class: 4,
      startDate: "2026-09-18",
      endDate: "2026-09-18",
      startTime: "09:00 AM",
      endTime: "12:00 PM",
      roomNumber: "Room 102",
      type: "theory",
      status: "upcoming",
    },
    {
      _id: 5,
      examName: "Mid Term Examination",
      class: 5,
      startDate: "2026-09-19",
      endDate: "2026-09-19",
      startTime: "09:00 AM",
      endTime: "12:00 PM",
      roomNumber: "Room 103",
      type: "theory",
      status: "upcoming",
    },
    {
      _id: 6,
      examName: "Mid Term Examination",
      class: 6,
      startDate: "2026-09-20",
      endDate: "2026-09-20",
      startTime: "09:00 AM",
      endTime: "12:00 PM",
      roomNumber: "Room 104",
      type: "theory",
      status: "upcoming",
    },
    {
      _id: 7,
      examName: "Mid Term Examination",
      class: 7,
      startDate: "2026-09-21",
      endDate: "2026-09-21",
      startTime: "09:00 AM",
      endTime: "12:00 PM",
      roomNumber: "Room 201",
      type: "theory",
      status: "upcoming",
    },
    {
      _id: 8,
      examName: "Mid Term Examination",
      class: 8,
      startDate: "2026-09-22",
      endDate: "2026-09-22",
      startTime: "09:00 AM",
      endTime: "12:00 PM",
      roomNumber: "Room 202",
      type: "theory",
      status: "upcoming",
    },
    {
      _id: 9,
      examName: "Board Preparation Test",
      class: 9,
      startDate: "2026-10-05",
      endDate: "2026-10-05",
      startTime: "09:00 AM",
      endTime: "12:00 PM",
      roomNumber: "Hall B",
      type: "theory",
      status: "upcoming",
    },
    {
      _id: 10,
      examName: "Board Preparation Test",
      class: 10,
      startDate: "2026-10-07",
      endDate: "2026-10-07",
      startTime: "09:00 AM",
      endTime: "12:00 PM",
      roomNumber: "Hall C",
      type: "theory",
      status: "upcoming",
    },
    {
      _id: 11,
      examName: "First Year Examination",
      class: 11,
      startDate: "2026-10-15",
      endDate: "2026-10-15",
      startTime: "09:00 AM",
      endTime: "12:00 PM",
      roomNumber: "Hall D",
      type: "theory",
      status: "upcoming",
    },
    {
      _id: 12,
      examName: "Second Year Pre-Board",
      class: 12,
      startDate: "2026-11-01",
      endDate: "2026-11-01",
      startTime: "09:00 AM",
      endTime: "12:00 PM",
      roomNumber: "Hall C",
      type: "theory",
      status: "upcoming",
    },
    {
      _id: 13,
      examName: "Monthly Test",
      class: 6,
      startDate: "2026-07-10",
      endDate: "2026-07-10",
      startTime: "09:00 AM",
      endTime: "10:30 AM",
      roomNumber: "Room 202",
      type: "theory",
      status: "completed",
    },
    {
      _id: 14,
      examName: "Monthly Test",
      class: 8,
      startDate: "2026-07-12",
      endDate: "2026-07-12",
      startTime: "09:00 AM",
      endTime: "10:30 AM",
      roomNumber: "Room 203",
      type: "theory",
      status: "completed",
    },
    {
      _id: 15,
      examName: "Monthly Test",
      class: 4,
      startDate: "2026-07-15",
      endDate: "2026-07-15",
      startTime: "09:00 AM",
      endTime: "10:30 AM",
      roomNumber: "Room 102",
      type: "theory",
      status: "cancelled",
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
