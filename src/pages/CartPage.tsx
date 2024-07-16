import React from "react";
import Cart from "../components/Cart/Cart";
import Total from "../components/Total/Total";

const CartPage: React.FC = () => {
  return (
    <>
      <Cart />
      <Total />
    </>
  );
};

export default CartPage;
