import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  classes: [
    {
      _id: 1,
      class: 6,

      sectionDetails: [
        {
          _id: 1,
          section: "A",
          teacher: "Mrs. Rizwana Malik",
          students: 32,
          status: "Active",
        },
        {
          _id: 2,
          section: "B",
          teacher: "Mr. Bilal Hassan",
          students: 31,
          status: "Active",
        },
        {
          _id: 3,
          section: "C",
          teacher: "Mrs. Sana Ali",
          students: 31,
          status: "Active",
        },
      ],

      academicYear: "2026-2027",
      classTeacher: "Ayesha Ali",
      email: "ayesha.ali@school.com",

      subjectAssignments: [
        { _id: 1, subject: "Mathematics", teacher: "Mrs. Rizwana Malik" },
        { _id: 2, subject: "English", teacher: "Mr. Bilal Hassan" },
        { _id: 3, subject: "Science", teacher: "Mrs. Sana Ali" },
        { _id: 4, subject: "Urdu", teacher: "Mrs. Nadia Rahman" },
        { _id: 5, subject: "Computer Science", teacher: "Mr. Usman Iqbal" },
        { _id: 6, subject: "Islamiyat", teacher: "Mr. Faisal Ahmed" },
        { _id: 7, subject: "Pakistan Studies", teacher: "Mr. Imran Khan" },
      ],

      subjects: [
        "English",
        "Urdu",
        "Mathematics",
        "Science",
        "Computer Science",
        "Islamiyat",
        "Pakistan Studies",
      ],

      roomNumber: "101",
      capacity: 100,
      currentStrength: 94,
      status: "Active",

      createdAt: "2026-01-10",
      updatedAt: "2026-02-05",
    },

    {
      _id: 2,
      class: 7,

      sectionDetails: [
        {
          _id: 1,
          section: "A",
          teacher: "Mr. Ahmed Khan",
          students: 30,
          status: "Active",
        },
        {
          _id: 2,
          section: "B",
          teacher: "Mrs. Sana Ali",
          students: 29,
          status: "Active",
        },
        {
          _id: 3,
          section: "C",
          teacher: "Mr. Bilal Hassan",
          students: 31,
          status: "Active",
        },
      ],

      academicYear: "2026-2027",
      classTeacher: "Ahmed Khan",
      email: "ahmed.khan@school.com",

      subjectAssignments: [
        { _id: 1, subject: "Mathematics", teacher: "Ahmed Khan" },
        { _id: 2, subject: "English", teacher: "Mrs. Nadia Rahman" },
        { _id: 3, subject: "Science", teacher: "Mrs. Sana Ali" },
        { _id: 4, subject: "Urdu", teacher: "Mr. Bilal Hassan" },
        { _id: 5, subject: "Computer Science", teacher: "Usman Iqbal" },
        { _id: 6, subject: "Islamiyat", teacher: "Mr. Faisal Ahmed" },
        { _id: 7, subject: "Pakistan Studies", teacher: "Mr. Imran Khan" },
      ],

      subjects: [
        "English",
        "Urdu",
        "Mathematics",
        "Science",
        "Computer Science",
        "Islamiyat",
        "Pakistan Studies",
      ],

      roomNumber: "102",
      capacity: 100,
      currentStrength: 90,
      status: "Active",

      createdAt: "2026-01-12",
      updatedAt: "2026-02-08",
    },

    {
      _id: 3,
      class: 8,

      sectionDetails: [
        {
          _id: 1,
          section: "A",
          teacher: "Mrs. Rizwana Malik",
          students: 32,
          status: "Active",
        },
        {
          _id: 2,
          section: "B",
          teacher: "Mr. Bilal Hassan",
          students: 31,
          status: "Active",
        },
        {
          _id: 3,
          section: "C",
          teacher: "Mrs. Sana Ali",
          students: 31,
          status: "Active",
        },
      ],

      academicYear: "2026-2027",
      classTeacher: "Mrs. Rizwana Malik",
      email: "rizwana.malik@school.com",

      subjectAssignments: [
        { _id: 1, subject: "Mathematics", teacher: "Mrs. Rizwana Malik" },
        { _id: 2, subject: "English", teacher: "Mr. Bilal Hassan" },
        { _id: 3, subject: "Science", teacher: "Mrs. Sana Ali" },
        { _id: 4, subject: "Urdu", teacher: "Mrs. Nadia Rahman" },
        { _id: 5, subject: "Computer Science", teacher: "Usman Iqbal" },
        { _id: 6, subject: "Islamiyat", teacher: "Mr. Faisal Ahmed" },
        { _id: 7, subject: "Pakistan Studies", teacher: "Mr. Imran Khan" },
      ],

      subjects: [
        "English",
        "Urdu",
        "Mathematics",
        "Science",
        "Computer Science",
        "Islamiyat",
        "Pakistan Studies",
      ],

      roomNumber: "201",
      capacity: 100,
      currentStrength: 94,
      status: "Active",

      createdAt: "2026-01-15",
      updatedAt: "2026-02-10",
    },

    {
      _id: 4,
      class: 9,

      sectionDetails: [
        {
          _id: 1,
          section: "A",
          teacher: "Mr. Imran Khan",
          students: 33,
          status: "Active",
        },
        {
          _id: 2,
          section: "B",
          teacher: "Mrs. Hina Fatima",
          students: 32,
          status: "Active",
        },
        {
          _id: 3,
          section: "C",
          teacher: "Mr. Faisal Ahmed",
          students: 31,
          status: "Active",
        },
      ],

      academicYear: "2026-2027",
      classTeacher: "Mr. Imran Khan",
      email: "imran.khan@school.com",

      subjectAssignments: [
        { _id: 1, subject: "Mathematics", teacher: "Ahmed Khan" },
        { _id: 2, subject: "English", teacher: "Mrs. Nadia Rahman" },
        { _id: 3, subject: "Physics", teacher: "Mrs. Sana Ali" },
        { _id: 4, subject: "Chemistry", teacher: "Mr. Faisal Ahmed" },
        { _id: 5, subject: "Biology", teacher: "Mrs. Hina Fatima" },
        { _id: 6, subject: "Computer Science", teacher: "Usman Iqbal" },
        { _id: 7, subject: "Pakistan Studies", teacher: "Mr. Imran Khan" },
      ],

      subjects: [
        "English",
        "Urdu",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Computer Science",
        "Pakistan Studies",
      ],

      roomNumber: "202",
      capacity: 100,
      currentStrength: 96,
      status: "Active",

      createdAt: "2026-01-18",
      updatedAt: "2026-02-12",
    },

    {
      _id: 5,
      class: 10,

      sectionDetails: [
        {
          _id: 1,
          section: "A",
          teacher: "Usman Iqbal",
          students: 34,
          status: "Active",
        },
        {
          _id: 2,
          section: "B",
          teacher: "Mr. Ahmed Khan",
          students: 33,
          status: "Active",
        },
        {
          _id: 3,
          section: "C",
          teacher: "Mrs. Sana Ali",
          students: 32,
          status: "Active",
        },
      ],

      academicYear: "2026-2027",
      classTeacher: "Usman Iqbal",
      email: "usman.iqbal@school.com",

      subjectAssignments: [
        { _id: 1, subject: "Mathematics", teacher: "Ahmed Khan" },
        { _id: 2, subject: "English", teacher: "Mrs. Nadia Rahman" },
        { _id: 3, subject: "Physics", teacher: "Mrs. Sana Ali" },
        { _id: 4, subject: "Chemistry", teacher: "Mr. Faisal Ahmed" },
        { _id: 5, subject: "Biology", teacher: "Mrs. Hina Fatima" },
        { _id: 6, subject: "Computer Science", teacher: "Usman Iqbal" },
        { _id: 7, subject: "Pakistan Studies", teacher: "Mr. Imran Khan" },
      ],

      subjects: [
        "English",
        "Urdu",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Computer Science",
        "Pakistan Studies",
      ],

      roomNumber: "301",
      capacity: 100,
      currentStrength: 99,
      status: "Active",

      createdAt: "2026-01-20",
      updatedAt: "2026-02-15",
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
