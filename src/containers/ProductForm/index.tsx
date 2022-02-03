import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ProductType } from "redux/reducers/productsReducer";
import apiCall from "utils/apiCall";
import ProductForm from "components/ProductForm";

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

  const navigate = useNavigate();

  const sendProduct = () => {
    apiCall("/Products", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productFields),
    })
      .then((response) => {
        if (response.ok) {
          navigate("/success");
        } else {
          navigate("/failure");
        }
      })
      .catch((e) => navigate("/failure"));
  };

  const deleteProduct = () => {
    apiCall(`/Products/${product!.id}`, { method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          navigate("/success");
        } else {
          navigate("/failure");
        }
      })
      .catch((e) => navigate("/failure"));
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
      onDelete={deleteProduct}
    />
  );
};

export default ProductFormContainer;
