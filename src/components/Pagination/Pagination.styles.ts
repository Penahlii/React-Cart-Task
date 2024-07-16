import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const PageButton = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#007bff" : "#f8f8f8")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  border: 1px solid #ccc;
  padding: 10px 15px;
  margin: 0 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;
