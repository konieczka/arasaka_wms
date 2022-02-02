import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "components/Header";
import { Container } from "./styles";
import apiCall from "utils/apiCall";
import ProductFormContainer from "containers/ProductForm";

interface Props {
  newProduct?: boolean;
}

const ProductFormView: React.FC<Props> = ({ newProduct = false }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!newProduct) {
      apiCall(`/Products/${id}`, { method: "GET" })
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }
  }, [id, newProduct]);

  return (
    <Container>
      <Header />
      {newProduct ? (
        <ProductFormContainer newProduct={newProduct} />
      ) : (
        <ProductFormContainer product={product!} />
      )}
    </Container>
  );
};
export default ProductFormView;
