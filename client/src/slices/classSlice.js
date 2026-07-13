import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  classes: [
    {
      _id: 1,

      // Class Information
      className: "Grade 10",
      section: "A",
      academicYear: "2026-2027",

      // Relationships
      classTeacherId: 1,

      // Capacity
      roomNumber: "101",
      capacity: 40,
      currentStrength: 35,

      // Status
      status: "Active",
    },
    {
      _id: 2,
      className: "Grade 10",
      section: "B",
      academicYear: "2026-2027",
      classTeacherId: 2,
      roomNumber: "102",
      capacity: 40,
      currentStrength: 38,
      status: "Active",
    },
  ],
  loading: false,
  error: null,
};

const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    addClass: (state, action) => {
      state.classes.push(action.payload);
    },

    updateClass: (state, action) => {
      const index = state.classes.findIndex(
        (cls) => cls._id === action.payload._id,
      );

      if (index !== -1) {
        state.classes[index] = {
          ...state.classes[index],
          ...action.payload,
        };
      }
    },

    deleteClass: (state, action) => {
      state.classes = state.classes.filter((cls) => cls._id !== action.payload);
    },

    changeClassStatus: (state, action) => {
      const cls = state.classes.find((cls) => cls._id === action.payload._id);

      if (cls) {
        cls.status = action.payload.status;
      }
    },
  },
});

export const { addClass, updateClass, deleteClass, changeClassStatus } =
  classSlice.actions;

export default classSlice.reducer;
