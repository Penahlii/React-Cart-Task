import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";
import { ProductListContainer, ProductItem } from "./ProductList.styles";

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

const ProductList: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: {
    id: number;
    name: string;
    price: number;
  }) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductItem key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </ProductItem>
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
