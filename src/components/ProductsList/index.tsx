import React from "react";
import { useNavigate } from "react-router-dom";
import { css } from "styled-components";
import { Primary } from "components/Button";
import Loader from "components/Loader";
import {
  ProductsListContainer,
  ProductWrapper,
  ProductInfoBox,
  ProductDescriptionBox,
  ProductMaintainer,
  ProductsListWrapper,
} from "./styles";

interface Props {
  products: any;
  isProductsLoading: boolean;
  isProductsMounted: boolean;
}

const displayFormattedDate = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US");
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
            <ProductWrapper
              key={p.id}
              onClick={() => navigate(`/product/${p.id}`)}
            >
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
            </ProductWrapper>
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
