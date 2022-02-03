import ConfirmActionModal from "components/ConfirmActionModal";
import React, { useState } from "react";
import { Primary, Secondary } from "components/Button";
import {
  FormContainer,
  FormInput,
  CustomDatePicker,
  ButtonGroup,
} from "./styles";

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
  onDelete?: () => void;
  fieldErrors: {
    name: string;
    email: string;
  };
}

const ProductForm: React.FC<Props> = ({
  name,
  quantity,
  description,
  email,
  date,
  newProduct,
  onSubmit,
  onDelete,
  fieldErrors,
}) => {
  const [isConfirmDeleteModalVisible, setIsConfirmDeleteModalVisible] =
    useState(false);

  const toggleConfirmationModal = () =>
    setIsConfirmDeleteModalVisible((prevState) => !prevState);

  return (
    <FormContainer>
      {isConfirmDeleteModalVisible && (
        <ConfirmActionModal
          message="Are you sure you want to delete this item?"
          onConfirm={onDelete!}
          onToggle={toggleConfirmationModal}
        />
      )}
      <h1>{newProduct ? "Register item" : "Edit item"}</h1>

      <label style={{ color: fieldErrors.name ? "red" : "white" }}>
        {fieldErrors.name || "Name"}
      </label>
      <FormInput
        type="text"
        value={name.value}
        disabled={!newProduct}
        isError={Boolean(fieldErrors.name)}
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

      <label style={{ color: fieldErrors.email ? "red" : "white" }}>
        {fieldErrors.email || "Maintainer email"}
      </label>
      <FormInput
        type="text"
        value={email.value}
        isError={Boolean(fieldErrors.email)}
        onChange={({ target }) => email.setFunc(target.value)}
      />

      <label>Delivery date</label>
      <CustomDatePicker value={date.value} onChange={date.setFunc} />
      <ButtonGroup>
        <Primary onClick={onSubmit} customCss="margin-right: 16px;">
          Submit
        </Primary>
        {!newProduct && (
          <Secondary onClick={toggleConfirmationModal}>Delete record</Secondary>
        )}
      </ButtonGroup>
    </FormContainer>
  );
};

export default ProductForm;
