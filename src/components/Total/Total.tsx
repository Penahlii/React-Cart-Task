import React from "react";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../../redux/cart/cartSelectors";
import { TotalContainer } from "./Total.styles";

const Total: React.FC = () => {
  const total = useSelector(selectTotalPrice);

  return (
    <TotalContainer>
      <h2>Total: ${total}</h2>
    </TotalContainer>
  );
};

export default Total;
