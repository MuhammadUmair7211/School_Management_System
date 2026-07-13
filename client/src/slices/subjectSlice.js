import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subjects: [
    {
      _id: 1,
      subjectCode: "MTH101",
      subjectName: "Mathematics",
      classId: 1,
      teacherId: 5,
      description: "Basic Mathematics for Grade 10",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 6,
      status: "Active",
    },
  ],
  leading: false,
  error: null,
};
const subjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {
    addSubject: (state, action) => {
      state.subjects.push(action.payload);
    },

    updateSubject: (state, action) => {
      const index = state.subjects.findIndex(
        (subject) => subject._id === action.payload._id,
      );

      if (index !== -1) {
        state.subjects[index] = {
          ...state.subjects[index],
          ...action.payload,
        };
      }
    },

    deleteSubject: (state, action) => {
      state.subjects = state.subjects.filter(
        (subject) => subject._id !== action.payload,
      );
    },

    changeSubjectStatus: (state, action) => {
      const subject = state.subjects.find(
        (subject) => subject._id === action.payload._id,
      );

      if (subject) {
        subject.status = action.payload.status;
      }
    },
  },
});
export const { addSubject, updateSubject, deleteSubject, changeSubjectStatus } =
  subjectSlice.actions;
export default subjectSlice.reducer;
