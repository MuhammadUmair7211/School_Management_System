import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [
    {
      _id: 1,
      senderId: 5,
      senderRole: "teacher",

      receiverId: 1,
      receiverRole: "principal",

      text: "Can we reschedule tomorrow's meeting?",

      isRead: false,
      createdAt: "2026-07-13T10:30:00Z",
    },
  ],
  loading: false,
  error: null,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
});

export const {} = messageSlice.actions;
export default messageSlice.reducer;
