import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductsView from "views/Products";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsView />} />
    </Routes>
  );
}

export default App;
