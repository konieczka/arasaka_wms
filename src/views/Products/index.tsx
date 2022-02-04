import React from "react";
import ProductsListContainer from "containers/ProductsList";
import GenericLayout from "components/GenericLayout";

const ProductsView = () => (
  <GenericLayout>
    <ProductsListContainer />
  </GenericLayout>
);

export default ProductsView;
