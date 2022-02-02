import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductFormView from "views/ProductForm";
import ProductsView from "views/Products";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsView />} />
      <Route path="/product/:id" element={<ProductFormView />} />
      <Route
        path="/product/register"
        element={<ProductFormView newProduct />}
      />
    </Routes>
  );
}

export default App;
