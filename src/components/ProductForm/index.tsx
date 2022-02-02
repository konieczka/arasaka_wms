import ConfirmActionModal from "components/ConfirmActionModal";
import React, { useState } from "react";
import { Primary, Secondary } from "components/Button";
import { FormContainer, FormInput, CustomDatePicker } from "./styles";

interface Props {
  name: {
    value: string;
    setFunc: (v: string) => void;
    error?: boolean;
  };
  quantity: {
    value: number;
    setFunc: (v: number) => void;
    error?: boolean;
  };
  description: {
    value: string;
    setFunc: (v: string) => void;
    error?: boolean;
  };
  email: {
    value: string;
    setFunc: (v: string) => void;
    error?: boolean;
  };
  date: {
    value: Date;
    setFunc: (v: Date) => void;
    error?: boolean;
  };
  newProduct?: boolean;
  onSubmit: () => void;
}

const ProductForm: React.FC<Props> = ({
  name,
  quantity,
  description,
  email,
  date,
  newProduct,
  onSubmit,
}) => {
  const [isConfirmDeleteModalVisible, setIsConfirmDeleteModalVisible] =
    useState(false);

  return (
    <FormContainer>
      {isConfirmDeleteModalVisible && (
        <ConfirmActionModal
          message="Are you sure you want to delete this item?"
          onConfirm={() => {}}
          onToggle={() =>
            setIsConfirmDeleteModalVisible((prevState) => !prevState)
          }
        />
      )}
      <h1>{newProduct ? "Register item" : "Edit item"}</h1>

      <label>Name</label>
      <FormInput
        type="text"
        value={name.value}
        onChange={({ target }) => name.setFunc(target.value)}
      />

      <label>Quantity</label>
      <FormInput
        type="number"
        value={quantity.value}
        onChange={({ target }) => quantity.setFunc(parseInt(target.value))}
      />

      <label>Description</label>
      <FormInput
        type="text"
        value={description.value}
        onChange={({ target }) => description.setFunc(target.value)}
      />

      <label>Maintainer email</label>
      <FormInput
        type="text"
        value={email.value}
        onChange={({ target }) => email.setFunc(target.value)}
      />

      <label>Delivery date</label>
      <CustomDatePicker value={date.value} onChange={date.setFunc} />
      <Primary onClick={onSubmit}>Submit</Primary>
      <Secondary
        onClick={() =>
          setIsConfirmDeleteModalVisible((prevState) => !prevState)
        }
      >
        Delete record
      </Secondary>
    </FormContainer>
  );
};

export default ProductForm;
