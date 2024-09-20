import { createSlice } from "@reduxjs/toolkit";
import userSlice from "../user/userSlice";
const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },
    increaseQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.items.find((i) => i.id === id);

      if (item) {
        item.quantity += amount;
      }
    },
    decreaseQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity = Math.max(1, item.quantity - amount);
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    removeAllItem: (state, action) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  removeAllItem,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
