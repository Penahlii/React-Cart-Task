import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 20px;
`;

export const CartItemContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }

  input {
    margin-left: 10px;
    width: 50px;
  }

  button {
    background-color: #ff4d4d;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #cc0000;
    }
  }
`;
