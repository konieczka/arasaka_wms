import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductsList from "components/ProductsList";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
} from "redux/actions/products";
import { RootState } from "redux/store";
import apiCall from "utils/api";

const filterset = ["name", "quantity", "description", "email", "date"];
const sortOrderOptions = ["desc", "asc"];

const ProductsListContainer = () => {
  const dispatch = useDispatch();
  const { isProductsMounted, isProductsLoading, products } = useSelector(
    (state: RootState) => state.products
  );
  const [sortFilter, setSortFilter] = useState("name");
  const [sortDirection, setSortDirection] = useState("DESC");

  const fetchProducts = () => {
    dispatch({ type: FETCH_PRODUCTS });
    apiCall(`/Products?filter[order]=${sortFilter}%20${sortDirection}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data }))
      .catch((e) => dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: e }));
  };

  useEffect(() => {
    fetchProducts();
  }, [sortFilter, sortDirection]);

  return (
    <ProductsList
      products={products}
      isProductsLoading={isProductsLoading}
      isProductsMounted={isProductsMounted}
      filtersOptions={filterset}
      selectedFilter={sortFilter}
      onFilterSelect={(newValue) => setSortFilter(newValue)}
      orderOptions={sortOrderOptions}
      selectedOrder={sortDirection}
      onOrderSelect={(newValue) => setSortDirection(newValue)}
    />
  );
};

export default ProductsListContainer;
