import ProductForm from "components/ProductForm";
import React, { useState, useEffect } from "react";
import { ProductType } from "redux/reducers/productsReducer";
import apiCall from "utils/apiCall";

export interface Props {
  product?: ProductType;
  newProduct?: boolean;
}

const ProductFormContainer: React.FC<Props> = ({ product, newProduct }) => {
  const [productFields, setProductFields] = useState({
    name: "",
    quantity: 0,
    description: "",
    email: "",
    date: new Date(),
  });

  const sendProduct = () => {
    apiCall("/Products", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productFields),
    });
  };

  useEffect(() => {
    if (product) {
      setProductFields({ ...product, date: new Date(product.date) });
    }
  }, [product]);

  return (
    <ProductForm
      newProduct={newProduct}
      name={{
        value: productFields.name,
        setFunc: (newVal) =>
          setProductFields((prevState) => ({ ...prevState, name: newVal })),
      }}
      quantity={{
        value: productFields.quantity,
        setFunc: (newVal) =>
          setProductFields((prevState) => ({ ...prevState, quantity: newVal })),
      }}
      description={{
        value: productFields.description,
        setFunc: (newVal) =>
          setProductFields((prevState) => ({
            ...prevState,
            description: newVal,
          })),
      }}
      email={{
        value: productFields.email,
        setFunc: (newVal) =>
          setProductFields((prevState) => ({ ...prevState, email: newVal })),
      }}
      date={{
        value: productFields.date,
        setFunc: (newVal) =>
          setProductFields((prevState) => ({ ...prevState, date: newVal })),
      }}
      onSubmit={sendProduct}
    />
  );
};

export default ProductFormContainer;
