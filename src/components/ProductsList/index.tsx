import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "styled-components";
import { Primary, Secondary } from "components/Button";
import Loader from "components/Loader";
import ConfirmActionModal from "components/ConfirmActionModal";
import { ProductType } from "redux/reducers/productsReducer";
import {
  ProductsListContainer,
  ProductWrapper,
  ProductInfoBox,
  ProductDescriptionBox,
  ProductMaintainer,
  ProductsListWrapper,
  ProductButtonsGroup,
} from "./styles";
import { deleteProduct } from "utils/api";

interface Props {
  products: any;
  isProductsLoading: boolean;
  isProductsMounted: boolean;
}

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
    <ProductWrapper key={p.id}>
      {isConfirmDeleteModalVisible && (
        <ConfirmActionModal
          message="Are you sure you want to delete this item?"
          onConfirm={() => deleteProduct(p.id, navigate)}
          onToggle={toggleModal}
        />
      )}
      <h2>{p.name}</h2>
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
      <ProductButtonsGroup>
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
    </ProductWrapper>
  );
};

const ProductsList: React.FC<Props> = ({
  products,
  isProductsLoading,
  isProductsMounted,
}) => {
  const navigate = useNavigate();

  return (
    <ProductsListContainer>
      <h1>Stock</h1>
      {isProductsLoading && <Loader />}
      <ProductsListWrapper>
        {isProductsMounted &&
          products.length > 0 &&
          products.map((p: any) => (
            <ProductListItem p={p} navigate={navigate} />
          ))}
      </ProductsListWrapper>
      <Primary
        onClick={() => navigate(`/product/register`)}
        customCss={css`
          margin-top: 8px;
        `}
      >
        Register new item +
      </Primary>
    </ProductsListContainer>
  );
};

export default ProductsList;
