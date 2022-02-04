import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiCall from "utils/api";
import ProductFormContainer from "containers/ProductForm";
import Loader from "components/Loader";
import GenericLayout from "components/GenericLayout";

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
    <GenericLayout>
      <>
        {isProductLoading && <Loader />}
        {newProduct ? (
          <ProductFormContainer newProduct={newProduct} />
        ) : (
          <ProductFormContainer product={product!} />
        )}
      </>
    </GenericLayout>
  );
};
export default ProductFormView;
