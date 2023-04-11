import { createSlice } from "@reduxjs/toolkit";

const paypriceSlice = createSlice({
  name: "seatNum",
  initialState: {
    number: 0,
  },
  reducers: {
    setNumber: (state, action) => {
      state.number = action.payload;
      return state;
    },
  },
});

export const { setNumber } = paypriceSlice.actions;
export default paypriceSlice.reducer;
