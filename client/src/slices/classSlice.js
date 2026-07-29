import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  classes: [
    // =========================
    // CLASS 1
    // =========================
    {
      _id: 1,
      class: 1,

      sectionDetails: [
        {
          _id: 1,
          section: "A",
          teacher: "Mrs. Ayesha Khan",
          students: 28,
          status: "Active",
        },
        {
          _id: 2,
          section: "B",
          teacher: "Mrs. Nadia Rahman",
          students: 27,
          status: "Active",
        },
        {
          _id: 3,
          section: "C",
          teacher: "Mrs. Hina Fatima",
          students: 26,
          status: "Active",
        },
        {
          _id: 4,
          section: "D",
          teacher: "Mrs. Sana Ali",
          students: 25,
          status: "Active",
        },
      ],

      academicYear: "2026-2027",
      classTeacher: "Mrs. Ayesha Khan",
      email: "ayesha.khan@school.com",

      subjectAssignments: [
        { _id: 1, subject: "English", teacher: "Mrs. Ayesha Khan" },
        { _id: 2, subject: "Urdu", teacher: "Mrs. Nadia Rahman" },
        { _id: 3, subject: "Mathematics", teacher: "Mrs. Hina Fatima" },
        { _id: 4, subject: "Science", teacher: "Mrs. Sana Ali" },
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
      currentStrength: 106,
      status: "Active",

      createdAt: "2026-01-05",
      updatedAt: "2026-02-01",
    },

    // =========================
    // CLASS 2
    // =========================
    {
      _id: 2,
      class: 2,

      sectionDetails: [
        {
          _id: 1,
          section: "A",
          teacher: "Mrs. Nadia Rahman",
          students: 29,
          status: "Active",
        },
        {
          _id: 2,
          section: "B",
          teacher: "Mrs. Hina Fatima",
          students: 28,
          status: "Active",
        },
        {
          _id: 3,
          section: "C",
          teacher: "Mrs. Sana Ali",
          students: 27,
          status: "Active",
        },
        {
          _id: 4,
          section: "D",
          teacher: "Mrs. Ayesha Khan",
          students: 26,
          status: "Active",
        },
      ],

      academicYear: "2026-2027",
      classTeacher: "Mrs. Nadia Rahman",
      email: "nadia.rahman@school.com",

      subjectAssignments: [
        { _id: 1, subject: "English", teacher: "Mrs. Nadia Rahman" },
        { _id: 2, subject: "Urdu", teacher: "Mrs. Hina Fatima" },
        { _id: 3, subject: "Mathematics", teacher: "Mrs. Sana Ali" },
        { _id: 4, subject: "Science", teacher: "Mrs. Ayesha Khan" },
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

      roomNumber: "102",
      capacity: 100,
      currentStrength: 110,
      status: "Active",

      createdAt: "2026-01-06",
      updatedAt: "2026-02-02",
    },

    // =========================
    // CLASS 3
    // =========================
    {
      _id: 3,
      class: 3,

      sectionDetails: [
        {
          _id: 1,
          section: "A",
          teacher: "Mrs. Hina Fatima",
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
          teacher: "Mr. Usman Iqbal",
          students: 28,
          status: "Active",
        },
        {
          _id: 4,
          section: "D",
          teacher: "Mrs. Nadia Rahman",
          students: 27,
          status: "Active",
        },
      ],

      academicYear: "2026-2027",
      classTeacher: "Mrs. Hina Fatima",
      email: "hina.fatima@school.com",

      subjectAssignments: [
        { _id: 1, subject: "English", teacher: "Mrs. Hina Fatima" },
        { _id: 2, subject: "Urdu", teacher: "Mrs. Sana Ali" },
        { _id: 3, subject: "Mathematics", teacher: "Mr. Usman Iqbal" },
        { _id: 4, subject: "Science", teacher: "Mrs. Nadia Rahman" },
        { _id: 5, subject: "Computer Science", teacher: "Mr. Bilal Hassan" },
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

      roomNumber: "103",
      capacity: 100,
      currentStrength: 114,
      status: "Active",

      createdAt: "2026-01-07",
      updatedAt: "2026-02-03",
    },

    // =========================
    // CLASS 4
    // =========================
    {
      _id: 4,
      class: 4,

      sectionDetails: [
        {
          _id: 1,
          section: "A",
          teacher: "Mrs. Sana Ali",
          students: 31,
          status: "Active",
        },
        {
          _id: 2,
          section: "B",
          teacher: "Mr. Bilal Hassan",
          students: 30,
          status: "Active",
        },
        {
          _id: 3,
          section: "C",
          teacher: "Mrs. Nadia Rahman",
          students: 29,
          status: "Active",
        },
        {
          _id: 4,
          section: "D",
          teacher: "Mr. Usman Iqbal",
          students: 28,
          status: "Active",
        },
      ],

      academicYear: "2026-2027",
      classTeacher: "Mrs. Sana Ali",
      email: "sana.ali@school.com",

      subjectAssignments: [
        { _id: 1, subject: "English", teacher: "Mrs. Sana Ali" },
        { _id: 2, subject: "Urdu", teacher: "Mr. Bilal Hassan" },
        { _id: 3, subject: "Mathematics", teacher: "Mrs. Nadia Rahman" },
        { _id: 4, subject: "Science", teacher: "Mr. Usman Iqbal" },
        { _id: 5, subject: "Computer Science", teacher: "Mrs. Hina Fatima" },
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

      roomNumber: "104",
      capacity: 100,
      currentStrength: 118,
      status: "Active",

      createdAt: "2026-01-08",
      updatedAt: "2026-02-04",
    },

    // =========================
    // CLASS 5
    // =========================
    {
      _id: 5,
      class: 5,

      sectionDetails: [
        {
          _id: 1,
          section: "A",
          teacher: "Mr. Bilal Hassan",
          students: 32,
          status: "Active",
        },
        {
          _id: 2,
          section: "B",
          teacher: "Mrs. Sana Ali",
          students: 31,
          status: "Active",
        },
        {
          _id: 3,
          section: "C",
          teacher: "Mrs. Hina Fatima",
          students: 30,
          status: "Active",
        },
        {
          _id: 4,
          section: "D",
          teacher: "Mr. Usman Iqbal",
          students: 29,
          status: "Active",
        },
      ],

      academicYear: "2026-2027",
      classTeacher: "Mr. Bilal Hassan",
      email: "bilal.hassan@school.com",

      subjectAssignments: [
        { _id: 1, subject: "English", teacher: "Mr. Bilal Hassan" },
        { _id: 2, subject: "Urdu", teacher: "Mrs. Sana Ali" },
        { _id: 3, subject: "Mathematics", teacher: "Mrs. Hina Fatima" },
        { _id: 4, subject: "Science", teacher: "Mr. Usman Iqbal" },
        { _id: 5, subject: "Computer Science", teacher: "Mrs. Nadia Rahman" },
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

      roomNumber: "105",
      capacity: 100,
      currentStrength: 122,
      status: "Active",

      createdAt: "2026-01-09",
      updatedAt: "2026-02-05",
    },

    // =========================
    // CLASS 6
    // =========================
    {
      _id: 6,
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
        {
          _id: 4,
          section: "D",
          teacher: "Mrs. Sana Ali",
          students: 36,
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

      roomNumber: "201",
      capacity: 100,
      currentStrength: 130,
      status: "Active",

      createdAt: "2026-01-10",
      updatedAt: "2026-02-05",
    },

    // =========================
    // CLASS 7
    // =========================
    {
      _id: 7,
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
        {
          _id: 4,
          section: "D",
          teacher: "Mr. Bilal Hassan",
          students: 23,
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

      roomNumber: "202",
      capacity: 100,
      currentStrength: 113,
      status: "Active",

      createdAt: "2026-01-12",
      updatedAt: "2026-02-08",
    },

    // =========================
    // CLASS 8
    // =========================
    {
      _id: 8,
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
        {
          _id: 4,
          section: "D",
          teacher: "Mrs. Sana Ali",
          students: 34,
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

      roomNumber: "203",
      capacity: 100,
      currentStrength: 128,
      status: "Active",

      createdAt: "2026-01-15",
      updatedAt: "2026-02-10",
    },

    // =========================
    // CLASS 9
    // =========================
    {
      _id: 9,
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
        {
          _id: 4,
          section: "D",
          teacher: "Mr. Faisal Ahmed",
          students: 24,
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

      roomNumber: "301",
      capacity: 100,
      currentStrength: 120,
      status: "Active",

      createdAt: "2026-01-18",
      updatedAt: "2026-02-12",
    },

    // =========================
    // CLASS 10
    // =========================
    {
      _id: 10,
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
        {
          _id: 4,
          section: "D",
          teacher: "Mrs. Sana Ali",
          students: 34,
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

      roomNumber: "302",
      capacity: 100,
      currentStrength: 133,
      status: "Active",

      createdAt: "2026-01-20",
      updatedAt: "2026-02-15",
    },

    // =========================
    // CLASS 11
    // =========================
    {
      _id: 11,
      class: 11,

      sectionDetails: [
        {
          _id: 1,
          section: "A",
          teacher: "Mr. Faisal Ahmed",
          students: 30,
          status: "Active",
        },
        {
          _id: 2,
          section: "B",
          teacher: "Mrs. Hina Fatima",
          students: 29,
          status: "Active",
        },
        {
          _id: 3,
          section: "C",
          teacher: "Mr. Usman Iqbal",
          students: 28,
          status: "Active",
        },
        {
          _id: 4,
          section: "D",
          teacher: "Mr. Imran Khan",
          students: 27,
          status: "Active",
        },
      ],

      academicYear: "2026-2027",
      classTeacher: "Mr. Faisal Ahmed",
      email: "faisal.ahmed@school.com",

      subjectAssignments: [
        { _id: 1, subject: "English", teacher: "Mrs. Nadia Rahman" },
        { _id: 2, subject: "Urdu", teacher: "Mr. Imran Khan" },
        { _id: 3, subject: "Physics", teacher: "Mr. Faisal Ahmed" },
        { _id: 4, subject: "Chemistry", teacher: "Mrs. Hina Fatima" },
        { _id: 5, subject: "Biology", teacher: "Mr. Usman Iqbal" },
        { _id: 6, subject: "Computer Science", teacher: "Usman Iqbal" },
        { _id: 7, subject: "Pakistan Studies", teacher: "Mr. Imran Khan" },
      ],

      subjects: [
        "English",
        "Urdu",
        "Physics",
        "Chemistry",
        "Biology",
        "Computer Science",
        "Pakistan Studies",
      ],

      roomNumber: "401",
      capacity: 100,
      currentStrength: 114,
      status: "Active",

      createdAt: "2026-01-22",
      updatedAt: "2026-02-18",
    },

    // =========================
    // CLASS 12
    // =========================
    {
      _id: 12,
      class: 12,

      sectionDetails: [
        {
          _id: 1,
          section: "A",
          teacher: "Mr. Imran Khan",
          students: 29,
          status: "Active",
        },
        {
          _id: 2,
          section: "B",
          teacher: "Mr. Faisal Ahmed",
          students: 28,
          status: "Active",
        },
        {
          _id: 3,
          section: "C",
          teacher: "Mrs. Hina Fatima",
          students: 27,
          status: "Active",
        },
        {
          _id: 4,
          section: "D",
          teacher: "Mr. Usman Iqbal",
          students: 26,
          status: "Active",
        },
      ],

      academicYear: "2026-2027",
      classTeacher: "Mr. Imran Khan",
      email: "imran.khan@school.com",

      subjectAssignments: [
        { _id: 1, subject: "English", teacher: "Mrs. Nadia Rahman" },
        { _id: 2, subject: "Urdu", teacher: "Mr. Imran Khan" },
        { _id: 3, subject: "Physics", teacher: "Mr. Faisal Ahmed" },
        { _id: 4, subject: "Chemistry", teacher: "Mrs. Hina Fatima" },
        { _id: 5, subject: "Biology", teacher: "Mr. Usman Iqbal" },
        { _id: 6, subject: "Computer Science", teacher: "Usman Iqbal" },
        { _id: 7, subject: "Pakistan Studies", teacher: "Mr. Imran Khan" },
      ],

      subjects: [
        "English",
        "Urdu",
        "Physics",
        "Chemistry",
        "Biology",
        "Computer Science",
        "Pakistan Studies",
      ],

      roomNumber: "402",
      capacity: 100,
      currentStrength: 110,
      status: "Active",

      createdAt: "2026-01-25",
      updatedAt: "2026-02-20",
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
