import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      state.push(action.payload); // This is the correct way to update the state
    },
    removeCart: (state, action) => {
      state.pop(); // This is the correct way to update the state
    },
  },
});

export const { addCart, removeCart } = CartSlice.actions;
export default CartSlice.reducer;
