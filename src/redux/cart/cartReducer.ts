import { createReducer } from "@reduxjs/toolkit";
import { addItem, removeItem, updateQuantity } from "./cartActions";
import { CartItem } from "./cartTypes";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addItem, (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    })
    .addCase(removeItem, (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    })
    .addCase(updateQuantity, (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity = quantity;
      }
    });
});

export default cartReducer;
