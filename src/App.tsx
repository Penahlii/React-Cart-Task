import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default App;
