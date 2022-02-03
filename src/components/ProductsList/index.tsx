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
  ProductsListHeader,
  ProductInfoBox,
  ProductDescriptionBox,
  ProductMaintainer,
  ProductsListWrapper,
  ProductButtonsGroup,
  SearchByName,
  ChangeBatchSize,
} from "./styles";
import { deleteProduct } from "utils/api";
import FilterSelect from "components/FilterSelect";

interface Props {
  products: any;
  isProductsLoading: boolean;
  isProductsMounted: boolean;
  selectedFilter: string;
  filtersOptions: string[];
  onFilterSelect: (newValue: string) => void;
  selectedOrder: string;
  orderOptions: string[];
  onOrderSelect: (newValue: string) => void;
  searchFilter: string;
  onSearchChange: (newValue: string) => void;
  itemsPerBatch: number;
  changeItemsPerBatch: (val: number) => void;
  loadMoreItems: () => void;
  isThereMoreItems: boolean;
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

const ProductsList: React.FC<Props> = ({
  products,
  isProductsLoading,
  isProductsMounted,
  selectedFilter,
  filtersOptions,
  onFilterSelect,
  onOrderSelect,
  orderOptions,
  selectedOrder,
  searchFilter,
  onSearchChange,
  itemsPerBatch,
  loadMoreItems,
  changeItemsPerBatch,
  isThereMoreItems,
}) => {
  const navigate = useNavigate();

  return (
    <ProductsListContainer>
      <ProductsListHeader>
        <h1>Stock</h1>
        <span>
          <SearchByName
            placeholder="Search product"
            value={searchFilter}
            min={3}
            onChange={({ target }) => onSearchChange(target.value)}
          />
          <FilterSelect
            options={filtersOptions}
            selectedFilter={selectedFilter}
            onSelect={onFilterSelect}
            label="Sort by"
            customCss="margin-right: 8px;"
          />
          <FilterSelect
            options={orderOptions}
            selectedFilter={selectedOrder}
            onSelect={onOrderSelect}
            label="Order"
          />
        </span>
      </ProductsListHeader>
      {isProductsLoading && <Loader />}
      <ProductsListWrapper>
        {isProductsMounted &&
          products.length > 0 &&
          products.map((p: any) => (
            <ProductListItem key={p.id} p={p} navigate={navigate} />
          ))}
      </ProductsListWrapper>
      <ProductButtonsGroup>
        <Primary
          onClick={() => navigate(`/product/register`)}
          customCss={css`
            margin-top: 8px;
            margin-right: 8px;
          `}
        >
          Register new item +
        </Primary>
        {isThereMoreItems && (
          <>
            <Primary
              onClick={loadMoreItems}
              customCss={css`
                margin-top: 8px;
                margin-right: 8px;
              `}
            >
              Load {itemsPerBatch} more items
            </Primary>
            <ChangeBatchSize
              type="number"
              value={itemsPerBatch}
              onChange={({ target }) =>
                changeItemsPerBatch(parseInt(target.value))
              }
              onKeyDown={(e) => e.preventDefault()}
              min={1}
              max={20}
              step={1}
            />
          </>
        )}
      </ProductButtonsGroup>
    </ProductsListContainer>
  );
};

export default ProductsList;
