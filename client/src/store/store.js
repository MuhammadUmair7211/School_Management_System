import { configureStore } from "@reduxjs/toolkit";
import principalReducer from "../slices/principalSlice";
import teacherReducer from "../slices/teacherSlice";
import studentReducer from "../slices/studentSlice";
import feeReducer from "../slices/feeSlice";
import notificationReducer from "../slices/notificationSlice";
import messageReducer from "../slices/messageSlice";
import subjectReducer from "../slices/subjectSlice";
import classReducer from "../slices/classSlice";
import examReducer from "../slices/examSlice";
import attendanceReducer from "../slices/attendanceSlice";
export const store = configureStore({
  reducer: {
    principal: principalReducer,
    students: studentReducer,
    teachers: teacherReducer,
    fees: feeReducer,
    notifications: notificationReducer,
    messages: messageReducer,
    subjects: subjectReducer,
    classes: classReducer,
    exams: examReducer,
    attendances: attendanceReducer,
  },
});
