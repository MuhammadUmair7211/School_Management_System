import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    _id: 1,
    name: "Dr. John",
    designation: "Principal",
    email: "principal@school.com",
    phone: "03001234567",
    profileImage: "",
  },
  loading: false,
  error: null,
};
const principalSlice = createSlice({
  name: "principal",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    updatePhone: (state, action) => {
      state.profile.phone = action.payload;
    },

    updateEmail: (state, action) => {
      state.profile.email = action.payload;
    },
  },
});
export const { updateProfile, updatePhone, updateEmail } =
  principalSlice.actions;

export default principalSlice.reducer;
