import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "components/Header";
import { Container } from "./styles";
import apiCall from "utils/api";
import ProductFormContainer from "containers/ProductForm";
import Loader from "components/Loader";

interface Props {
  newProduct?: boolean;
}

const ProductFormView: React.FC<Props> = ({ newProduct = false }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isProductLoading, setIsProductLoading] = useState(false);

  useEffect(() => {
    if (!newProduct) {
      setIsProductLoading(true);
      apiCall(`/Products/${id}`, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          setIsProductLoading(false);
        });
    }
  }, [id, newProduct]);

  return (
    <Container>
      <Header />
      {isProductLoading && <Loader />}
      {newProduct ? (
        <ProductFormContainer newProduct={newProduct} />
      ) : (
        <ProductFormContainer product={product!} />
      )}
    </Container>
  );
};
export default ProductFormView;
