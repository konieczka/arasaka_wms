import React from "react";
import ProductsListContainer from "containers/ProductsList";
import Header from "components/Header";
import { Container } from "./styles";

const ProductsView = () => (
  <Container>
    <Header />
    <ProductsListContainer />
  </Container>
);

export default ProductsView;
