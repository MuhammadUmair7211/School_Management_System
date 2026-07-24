import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [
    {
      _id: "1",

      // Who receives it
      receiverId: "101",
      receiverRole: "principal",

      // Who created it
      senderId: "admin-001",
      senderRole: "principal",

      // Notification content
      title: "School Annual Day Celebration",
      message:
        "We are excited to announce that our Annual Day celebration will be held on June 15, 2024. All students and parents are invited to attend.",

      // Classification
      type: "announcement",
      priority: "high",

      // Status
      status: "unread",

      createdAt: "2024-05-31T10:30:00Z",
      updatedAt: "2024-05-31T10:30:00Z",
    },

    {
      _id: "2",

      receiverId: "101",
      receiverRole: "principal",

      senderId: "admin-002",
      senderRole: "principal",

      title: "Mid-Term Exam Schedule Released",
      message:
        "Mid-term examination schedule for all classes has been published. Please check the examination section for detailed timetable.",

      type: "academic",
      priority: "medium",

      status: "unread",

      createdAt: "2024-05-31T09:15:00Z",
      updatedAt: "2024-05-31T09:15:00Z",
    },

    {
      _id: "3",

      receiverId: "101",
      receiverRole: "principal",

      senderId: "admin-003",
      senderRole: "principal",

      title: "Fee Payment Reminder",
      message:
        "This is a friendly reminder that the last date for fee payment for May month is June 5, 2024.",

      type: "fees",
      priority: "high",

      status: "unread",

      createdAt: "2024-05-30T10:00:00Z",
      updatedAt: "2024-05-30T10:00:00Z",
    },

    {
      _id: "4",

      receiverId: "101",
      receiverRole: "principal",

      senderId: "admin-004",
      senderRole: "principal",

      title: "Parent-Teacher Meeting",
      message:
        "PTM is scheduled for June 8, 2024. Please confirm your availability with the class teacher.",

      type: "event",
      priority: "low",

      status: "unread",

      createdAt: "2024-05-30T10:00:00Z",
      updatedAt: "2024-05-30T10:00:00Z",
    },

    {
      _id: "5",

      receiverId: "101",
      receiverRole: "principal",

      senderId: "teacher-005",
      senderRole: "teacher",

      title: "Assignment Submitted",
      message:
        'Your assignment "Science Project" has been submitted successfully by Class 8 - Section A students.',

      type: "academic",
      priority: "low",

      status: "read",

      createdAt: "2024-05-29T15:45:00Z",
      updatedAt: "2024-05-29T15:45:00Z",
    },

    {
      _id: "6",

      receiverId: "101",
      receiverRole: "principal",

      senderId: "admin-008",
      senderRole: "principal",

      title: "Sports Day Event",
      message:
        "Inter-class Sports Day will be held on June 12, 2024. All students are encouraged to participate.",

      type: "event",
      priority: "medium",

      status: "read",

      createdAt: "2024-05-29T11:20:00Z",
      updatedAt: "2024-05-29T11:20:00Z",
    },

    {
      _id: "7",

      receiverId: "101",
      receiverRole: "principal",

      senderId: "admin-009",
      senderRole: "principal",

      title: "New Library Books Added",
      message:
        "New books have been added to the school library. Check out the latest collection!",

      type: "announcement",
      priority: "low",

      status: "read",

      createdAt: "2024-05-28T16:30:00Z",
      updatedAt: "2024-05-28T16:30:00Z",
    },

    {
      _id: "8",
      receiverId: "101",
      receiverRole: "principal",
      senderId: "admin-0010",
      senderRole: "principal",
      title: "Transport Route Update",
      message:
        "Route 5 timings have been updated from next week. Please check the transport section for details.",
      type: "transport",
      priority: "medium",
      status: "read",
      createdAt: "2024-05-28T09:10:00Z",
      updatedAt: "2024-05-28T09:10:00Z",
    },
    {
      _id: "9",
      receiverId: "102",
      receiverRole: "principal",
      senderId: "admin-0011",
      senderRole: "principal",
      title: "Attendance is mandatory",
      message:
        "80% attendance is mandatory for all students,  Please check the attendance section for details.",
      type: "attendance",
      priority: "medium",
      status: "read",
      createdAt: "2024-05-28T09:10:00Z",
      updatedAt: "2024-05-28T09:10:00Z",
    },
    {
      _id: "10",
      receiverId: "103",
      receiverRole: "principal",
      senderId: "admin-0011",
      senderRole: "principal",
      title: "Send up examination",
      message:
        "Students are to take their send up examination from next month, keep checking the examination section for updated time table.",
      type: "examination",
      priority: "high",
      status: "unread",
      createdAt: "2024-05-28T09:10:00Z",
      updatedAt: "2024-05-28T09:10:00Z",
    },
  ],
  loading: false,
  error: null,
};
const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducer: {
    addNotification: () => {},
    deleteNotification: () => {},
    editNotification: () => {},
  },
});
export const { addNotification, deleteNotification, editNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
