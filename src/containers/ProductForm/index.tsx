import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ProductType } from "redux/reducers/productsReducer";
import { sendProduct, deleteProduct } from "utils/api";
import ProductForm from "components/ProductForm";
import { validateEmail, validateName } from "utils/validate";

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

  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const validateInputFields = async () => {
    const validationResult = {
      email: validateEmail(productFields.email),
      name: newProduct ? await validateName(productFields.name) : "",
    };

    setFieldErrors(validationResult);

    return validationResult;
  };

  const onSubmit = async () => {
    validateInputFields().then((response) => {
      if (!response.name && !response.email) {
        sendProduct(productFields, navigate);
      }
    });
  };

  const onDelete = () => deleteProduct(product!.id, navigate);

  useEffect(() => {
    if (product) {
      setProductFields({ ...product, date: new Date(product.date) });
    }
  }, [product]);

  return (
    <ProductForm
      newProduct={newProduct}
      fieldErrors={fieldErrors}
      name={{
        value: productFields.name,
        setFunc: (newVal) =>
          setProductFields((prevState) => ({
            ...prevState,
            name: newVal.toLowerCase(),
          })),
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
          setProductFields((prevState) => ({
            ...prevState,
            email: newVal.toLowerCase(),
          })),
      }}
      date={{
        value: productFields.date,
        setFunc: (newVal) =>
          setProductFields((prevState) => ({ ...prevState, date: newVal })),
      }}
      onSubmit={onSubmit}
      onDelete={onDelete}
    />
  );
};

export default ProductFormContainer;
