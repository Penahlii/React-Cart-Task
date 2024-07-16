import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { removeItem, updateQuantity } from "../../redux/cart/cartActions";
import { CartContainer, CartItemContainer } from "./Cart.styles";

const Cart: React.FC = () => {
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <CartContainer>
      {items.map((item) => (
        <CartItemContainer key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>
            Quantity:
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, +e.target.value)}
              min="1"
            />
          </p>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </CartItemContainer>
      ))}
    </CartContainer>
  );
};

export default Cart;
