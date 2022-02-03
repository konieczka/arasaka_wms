import React, { useState } from "react";
import { Primary, Secondary } from "components/Button";
import ConfirmActionModal from "components/ConfirmActionModal";
import { ProductType } from "redux/reducers/productsReducer";
import {
  ProductWrapper,
  ProductInfoBox,
  ProductDescriptionBox,
  ProductMaintainer,
  ProductButtonsGroup,
} from "./styles";
import { deleteProduct } from "utils/api";

const displayFormattedDate = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US");
};

const ProductListItem: React.FC<{
  p: ProductType;
  navigate: (path: string) => void;
}> = ({ p, navigate }) => {
  const [isConfirmDeleteModalVisible, setIsConfirmDeleteModalVisible] =
    useState(false);

  const toggleModal = () =>
    setIsConfirmDeleteModalVisible((prevState) => !prevState);

  return (
    <ProductWrapper>
      {isConfirmDeleteModalVisible && (
        <ConfirmActionModal
          message="Are you sure you want to delete this item?"
          onConfirm={() => deleteProduct(p.id, navigate)}
          onToggle={toggleModal}
        />
      )}
      <ProductButtonsGroup>
        <h2>{p.name}</h2>
        <Primary
          onClick={() => navigate(`/product/${p.id}`)}
          customCss="padding: 4px; height: fit-content; margin-right: 16px;"
        >
          Edit item
        </Primary>
        <Secondary
          onClick={toggleModal}
          customCss="padding: 4px; height: fit-content;"
        >
          Remove item
        </Secondary>
      </ProductButtonsGroup>
      <ProductMaintainer>
        <small>Maintainer</small>
        <strong>{p.email}</strong>
      </ProductMaintainer>
      <ProductDescriptionBox>
        <small>Info</small>
        <p>{p.description}</p>
      </ProductDescriptionBox>
      <ProductInfoBox>
        <div>
          <b>Delivered:</b> {displayFormattedDate(p.date)}
        </div>
        &nbsp; | &nbsp;
        <div>
          <b>In stock:</b> {p.quantity}
        </div>
      </ProductInfoBox>
    </ProductWrapper>
  );
};

export default ProductListItem;
