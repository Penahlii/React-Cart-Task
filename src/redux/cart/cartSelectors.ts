import { RootState } from "../store";
import { CartItem } from "./cartTypes";

export const selectCartItems = (state: RootState): CartItem[] =>
  state.cart.items;
export const selectTotalPrice = (state: RootState): number =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
