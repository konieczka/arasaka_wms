import React from "react";
import { useNavigate } from "react-router-dom";
import { css } from "styled-components";
import { Primary } from "components/Button";
import Loader from "components/Loader";
import ProductListItem from "./ProductListItem";
import {
  ProductsListContainer,
  ProductsListHeader,
  ProductsListWrapper,
  ProductButtonsGroup,
  SearchByName,
  ChangeBatchSize,
} from "./styles";
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
