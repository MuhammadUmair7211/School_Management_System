import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fees: [
    {
      _id: 1,
      studentId: "STD001",
      feeType: "Monthly Fee",
      month: "July",
      academicYear: "2026-2027",
      amount: 3000,
      dueDate: "2026-07-10",
      paidDate: null,
      status: "unpaid",
    },
    {
      _id: 2,
      studentId: "STD002",
      feeType: "Monthly Fee",
      month: "May",
      academicYear: "2026-2027",
      amount: 3000,
      dueDate: "2026-07-10",
      paidDate: "2026-07-08",
      status: "paid",
    },
    {
      _id: 3,
      studentId: "STD003",
      feeType: "Monthly Fee",
      month: "June",
      academicYear: "2026-2027",
      amount: 3000,
      dueDate: "2026-07-25",
      paidDate: null,
      status: "unpaid",
    },
  ],
  loading: false,
  error: null,
};
const feeSlice = createSlice({
  name: "fees",
  initialState,
  reducers: {
    addFees: () => {},
    editStatus: () => {},
  },
});
export const { addFees, editStatus } = feeSlice.actions;
export default feeSlice.reducer;
