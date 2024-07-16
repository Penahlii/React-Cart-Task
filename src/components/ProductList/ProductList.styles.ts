import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

export const ProductItem = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
