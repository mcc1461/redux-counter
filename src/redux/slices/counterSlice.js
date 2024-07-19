// slices/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = { number: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.number += 5;
    },
    decrement: (state) => {
      state.number = Math.max(0, state.number - 5);
    },
    incrementByValue: (state, action) => {
      state.number += action.payload;
    },
    reset: (state) => {
      state.number = 0;
    },
  },
});

export const { increment, decrement, incrementByValue, reset } =
  counterSlice.actions;

export default counterSlice.reducer;
