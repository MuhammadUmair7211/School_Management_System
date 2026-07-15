import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subjects: [
    {
      _id: 1,
      subjectCode: "MTH101",
      subjectName: "Mathematics",
      description: "Fundamental Mathematics concepts and problem solving.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 6,
      status: "Active",
    },
    {
      _id: 2,
      subjectCode: "ENG101",
      subjectName: "English",
      description: "English language, grammar, reading and writing skills.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 5,
      status: "Active",
    },
    {
      _id: 3,
      subjectCode: "URD101",
      subjectName: "Urdu",
      description: "Urdu language, literature and grammar.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 5,
      status: "Active",
    },
    {
      _id: 4,
      subjectCode: "PHY101",
      subjectName: "Physics",
      description: "Concepts of mechanics, electricity and modern physics.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 4,
      status: "Active",
    },
    {
      _id: 5,
      subjectCode: "CHE101",
      subjectName: "Chemistry",
      description: "Study of matter, chemical reactions and laboratory work.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 4,
      status: "Active",
    },
    {
      _id: 6,
      subjectCode: "BIO101",
      subjectName: "Biology",
      description: "Study of living organisms and life sciences.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 4,
      status: "Active",
    },
    {
      _id: 7,
      subjectCode: "CSC101",
      subjectName: "Computer Science",
      description: "Computer fundamentals, programming and practical skills.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 4,
      status: "Active",
    },
    {
      _id: 8,
      subjectCode: "ISL101",
      subjectName: "Islamiyat",
      description: "Islamic teachings, ethics and history.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 2,
      status: "Active",
    },
    {
      _id: 9,
      subjectCode: "PST101",
      subjectName: "Pakistan Studies",
      description: "History, geography and culture of Pakistan.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 2,
      status: "Active",
    },
    {
      _id: 10,
      subjectCode: "GSC101",
      subjectName: "General Science",
      description: "Basic concepts of physical and biological sciences.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 4,
      status: "Active",
    },
    {
      _id: 11,
      subjectCode: "GEO101",
      subjectName: "Geography",
      description: "Study of the Earth's physical features and environment.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 3,
      status: "Active",
    },
    {
      _id: 12,
      subjectCode: "HIS101",
      subjectName: "History",
      description: "World and regional historical events and civilizations.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 3,
      status: "Active",
    },
    {
      _id: 13,
      subjectCode: "ART101",
      subjectName: "Arts",
      description: "Drawing, painting and creative arts.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 2,
      status: "Active",
    },
    {
      _id: 14,
      subjectCode: "MUS101",
      subjectName: "Music",
      description: "Music theory, vocals and instrumental practice.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 2,
      status: "Active",
    },
    {
      _id: 15,
      subjectCode: "PE101",
      subjectName: "Physical Education",
      description: "Sports, fitness and physical activities.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 2,
      status: "Active",
    },
  ],
  loading: false,
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
