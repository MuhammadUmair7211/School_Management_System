import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // ALL SUBJECTS

  subjects: [
    // CLASSES 1-8 | GENERAL SUBJECTS
    {
      _id: 1,
      subjectCode: "MTH101",
      subjectName: "Mathematics",
      description: "Fundamental Mathematics concepts and problem solving.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 6,
      category: "general",
      classes: [1, 2, 3, 4, 5, 6, 7, 8],
      status: "Active",
    },

    {
      _id: 2,
      subjectCode: "SCI101",
      subjectName: "Science",
      description:
        "Basic scientific concepts and understanding of the natural world.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 4,
      category: "general",
      classes: [1, 2, 3, 4, 5, 6, 7, 8],
      status: "Active",
    },

    {
      _id: 3,
      subjectCode: "COM101",
      subjectName: "Computer",
      description:
        "Introduction to computers and basic information technology.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 2,
      category: "general",
      classes: [1, 2, 3, 4, 5, 6, 7, 8],
      status: "Active",
    },

    {
      _id: 4,
      subjectCode: "SST101",
      subjectName: "Social Studies",
      description: "Study of society, culture, history, and geography.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 3,
      category: "general",
      classes: [1, 2, 3, 4, 5, 6, 7, 8],
      status: "Active",
    },

    {
      _id: 5,
      subjectCode: "ISL101",
      subjectName: "Islamiat",
      description: "Study of Islamic teachings, values, and principles.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 2,
      category: "general",
      classes: [1, 2, 3, 4, 5, 6, 7, 8],
      status: "Active",
    },

    {
      _id: 6,
      subjectCode: "URD101",
      subjectName: "Urdu",
      description: "Urdu language, grammar, literature, and communication.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 4,
      category: "general",
      classes: [1, 2, 3, 4, 5, 6, 7, 8],
      status: "Active",
    },

    {
      _id: 7,
      subjectCode: "ENG101",
      subjectName: "English",
      description: "English language, grammar, literature, and communication.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 5,
      category: "general",
      classes: [1, 2, 3, 4, 5, 6, 7, 8],
      status: "Active",
    },

    {
      _id: 8,
      subjectCode: "ART101",
      subjectName: "Arts",
      description: "Basic drawing, creativity, and artistic expression.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 2,
      category: "arts",
      classes: [1, 2, 3, 4, 5, 6, 7, 8],
      status: "Active",
    },

    // CLASSES 9-12 | SCIENCE SUBJECTS

    {
      _id: 9,
      subjectCode: "PHY101",
      subjectName: "Physics",
      description:
        "Study of matter, energy, motion, forces, and physical phenomena.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 5,
      category: "science",
      classes: [9, 10, 11, 12],
      status: "Active",
    },

    {
      _id: 10,
      subjectCode: "CHE101",
      subjectName: "Chemistry",
      description:
        "Study of matter, elements, compounds, and chemical reactions.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 5,
      category: "science",
      classes: [9, 10, 11, 12],
      status: "Active",
    },

    {
      _id: 11,
      subjectCode: "BIO101",
      subjectName: "Biology",
      description: "Study of living organisms and biological systems.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 5,
      category: "science",
      classes: [9, 10, 11, 12],
      status: "Active",
    },

    {
      _id: 12,
      subjectCode: "CSC101",
      subjectName: "Computer Science",
      description:
        "Study of programming, algorithms, computer systems, and information technology.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 5,
      category: "science",
      classes: [9, 10, 11, 12],
      status: "Active",
    },

    // CLASSES 9-12 | ARTS / HUMANITIES SUBJECTS

    {
      _id: 13,
      subjectCode: "GEO101",
      subjectName: "Geography",
      description: "Study of the Earth's physical features and environment.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 3,
      category: "arts",
      classes: [9, 10, 11, 12],
      status: "Active",
    },

    {
      _id: 14,
      subjectCode: "ECO101",
      subjectName: "Economics",
      description:
        "Study of economic principles, markets, production, and financial systems.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 4,
      category: "arts",
      classes: [9, 10, 11, 12],
      status: "Active",
    },

    {
      _id: 15,
      subjectCode: "HIS101",
      subjectName: "History",
      description: "Study of historical events, civilizations, and societies.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 3,
      category: "arts",
      classes: [9, 10, 11, 12],
      status: "Active",
    },

    {
      _id: 16,
      subjectCode: "CIV101",
      subjectName: "Civics",
      description: "Study of government, citizenship, and political systems.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 3,
      category: "arts",
      classes: [9, 10, 11, 12],
      status: "Active",
    },

    // COMMON SUBJECTS | CLASSES 9-12

    {
      _id: 17,
      subjectCode: "ENG201",
      subjectName: "English",
      description: "English language, literature, grammar, and communication.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 5,
      category: "general",
      classes: [9, 10, 11, 12],
      status: "Active",
    },

    {
      _id: 18,
      subjectCode: "URD201",
      subjectName: "Urdu",
      description: "Urdu language, literature, grammar, and poetry.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 4,
      category: "general",
      classes: [9, 10, 11, 12],
      status: "Active",
    },

    {
      _id: 19,
      subjectCode: "ISL201",
      subjectName: "Islamiat",
      description:
        "Study of Islamic teachings, Quran, Hadith, and Islamic principles.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 2,
      category: "general",
      classes: [9, 10, 11, 12],
      status: "Active",
    },

    {
      _id: 20,
      subjectCode: "PAK101",
      subjectName: "Pakistan Studies",
      description:
        "Study of Pakistan's history, geography, culture, and development.",
      totalMarks: 100,
      passingMarks: 40,
      weeklyPeriods: 2,
      category: "general",
      classes: [9, 10, 11, 12],
      status: "Active",
    },
  ],
  // SUBJECT CATEGORIES / GROUPS
  groups: [
    {
      id: "general",
      name: "General",
      description: "General and compulsory subjects available for students.",
      classes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },

    {
      id: "science",
      name: "Science",
      description:
        "Science subjects available for secondary and higher secondary classes.",
      classes: [9, 10, 11, 12],
    },

    {
      id: "arts",
      name: "Arts",
      description: "Arts and humanities subjects available for students.",
      classes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
