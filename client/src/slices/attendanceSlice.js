import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  attendances: [
    {
      _id: 1,

      // Relationships
      studentId: 1,
      classId: 1,

      // Attendance Details
      date: "2026-07-13",
      status: "Present", // Present | Absent | Late | Leave

      // Optional
      remarks: "",
      markedBy: 2, // Teacher ID
    },
  ],
  loading: false,
  error: null,
};

const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    markAttendance: (state, action) => {
      state.attendance.push(action.payload);
    },

    updateAttendance: (state, action) => {
      const index = state.attendance.findIndex(
        (record) => record._id === action.payload._id,
      );

      if (index !== -1) {
        state.attendance[index] = {
          ...state.attendance[index],
          ...action.payload,
        };
      }
    },

    deleteAttendance: (state, action) => {
      state.attendance = state.attendance.filter(
        (record) => record._id !== action.payload,
      );
    },
  },
});

export const { markAttendance, updateAttendance, deleteAttendance } =
  attendanceSlice.actions;

export default attendanceSlice.reducer;
