import { createAction } from "@reduxjs/toolkit";
import { CartItem } from "./cartTypes";

export const addItem = createAction<CartItem>("cart/addItem");
export const removeItem = createAction<number>("cart/removeItem");
export const updateQuantity = createAction<{ id: number; quantity: number }>(
  "cart/updateQuantity"
);
