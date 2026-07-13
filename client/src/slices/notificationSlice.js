import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [
    {
      _id: 1,
      receiverId: 101,
      receiverRole: "principal",
      title: "Meeting Reminder",
      message: "Staff meeting at 10:00 AM.",
      status: "unread",
      createdAt: "2026-07-13T10:00:00Z",
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
