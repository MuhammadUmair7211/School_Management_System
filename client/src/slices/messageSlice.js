import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversations: [
    {
      _id: 1,
      teacherId: 1,
      principalId: 1,
      messages: [
        {
          _id: 1,
          sentBy: "teacher",
          image: "",
          document: "",
          text: "Sir, I have completed the attendance.",
          createdAt: "2026-07-31",
          isRead: true,
        },
        {
          _id: 2,
          sentBy: "principal",
          image: "",
          document: "",
          text: "Good. Please submit the report.",
          createdAt: "2026-07-31",
          isRead: true,
        },
        {
          _id: 3,
          sentBy: "teacher",
          image: "",
          document: "",
          text: "Sure, sir.",
          createdAt: "2026-07-31",
          isRead: false,
        },
      ],
    },

    {
      _id: 2,
      teacherId: 2,
      principalId: 1,
      messages: [
        {
          _id: 4,
          sentBy: "teacher",
          image: "",
          document: "",
          text: "Sir, I wanted to discuss the upcoming examination schedule.",
          createdAt: "2026-07-30",
          isRead: false,
        },
        {
          _id: 5,
          sentBy: "principal",
          image: "",
          document: "",
          text: "Sure. Please come to my office after lunch.",
          createdAt: "2026-07-30",
          isRead: true,
        },
      ],
    },

    {
      _id: 3,
      teacherId: 3,
      principalId: 1,
      messages: [
        {
          _id: 6,
          sentBy: "teacher",
          image: "",
          document: "",
          text: "Sir, I have attached the monthly performance report.",
          createdAt: "2026-07-29",
          isRead: false,
        },
        {
          _id: 7,
          sentBy: "principal",
          image: "",
          document: "",
          text: "Thank you. The report looks good.",
          createdAt: "2026-07-29",
          isRead: true,
        },
      ],
    },

    {
      _id: 4,
      teacherId: 4,
      principalId: 1,
      messages: [
        {
          _id: 8,
          sentBy: "principal",
          image: "",
          document: "",
          text: "Please submit the class progress report by tomorrow.",
          createdAt: "2026-07-28",
          isRead: true,
        },
        {
          _id: 9,
          sentBy: "teacher",
          image: "",
          document: "",
          text: "Okay sir, I will submit it tomorrow morning.",
          createdAt: "2026-07-28",
          isRead: true,
        },
      ],
    },

    {
      _id: 5,
      teacherId: 5,
      principalId: 1,
      messages: [
        {
          _id: 10,
          sentBy: "teacher",
          image: "",
          document: "",
          text: "Sir, there is a problem with the computer lab.",
          createdAt: "2026-07-27",
          isRead: false,
        },
        {
          _id: 11,
          sentBy: "principal",
          image: "",
          document: "",
          text: "What seems to be the problem?",
          createdAt: "2026-07-27",
          isRead: true,
        },
      ],
    },
  ],

  loading: false,
  error: null,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    AddMessage: (state, action) => {
      const { conversationId, message } = action.payload;
      const conversation = state.conversations.find(
        (conversation) => conversation._id === conversationId,
      );
      if (conversation) {
        conversation.messages.push(message);
      }
    },
    startNewChat: (state, action) => {
      state.conversations.push(action.payload);
    },
    MarkAsRead: (state, action) => {
      const conversation = state.conversations.find(
        (conversation) => conversation._id === action.payload._id,
      );
      if (conversation) {
        conversation.messages.forEach((message) => {
          message.isRead = true;
        });
      }
    },
  },
});

export const { AddMessage, MarkAsRead, startNewChat } = messageSlice.actions;
export default messageSlice.reducer;
