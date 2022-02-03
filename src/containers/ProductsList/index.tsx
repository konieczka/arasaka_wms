import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductsList from "components/ProductsList";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  LOAD_MORE_PRODUCTS,
  LOAD_MORE_PRODUCTS_FAILURE,
  LOAD_MORE_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_LOADED,
  RESET_PRODUCTS,
} from "redux/actions/products";
import { RootState } from "redux/store";
import apiCall from "utils/api";
import FullScreenMessage from "components/FullScreenMessage";

const filterset = ["name", "quantity", "description", "email", "date"];
const sortOrderOptions = ["desc", "asc"];

const ProductsListContainer = () => {
  const dispatch = useDispatch();
  const {
    isProductsMounted,
    isProductsLoading,
    products,
    isThereMoreProducts,
    isProductsError,
  } = useSelector((state: RootState) => state.products);
  const [sortFilter, setSortFilter] = useState("name");
  const [sortDirection, setSortDirection] = useState("DESC");
  const [searchFilter, setSearchFilter] = useState("");

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(2);

  const fetchNextBatch = () => {
    dispatch({ type: LOAD_MORE_PRODUCTS });
    apiCall(
      `/Products?filter[order]=${sortFilter}%20${sortDirection}&filter[skip]=${
        offset + limit
      }&filter[limit]=${limit}${
        searchFilter
          ? `&filter[where][name]=${searchFilter.replace(/ /g, "+")}`
          : ""
      }`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length < limit || data.length === 0) {
          dispatch({ type: ALL_PRODUCTS_LOADED });
        }
        dispatch({ type: LOAD_MORE_PRODUCTS_SUCCESS, payload: data });
      })
      .catch((e) => dispatch({ type: LOAD_MORE_PRODUCTS_FAILURE, payload: e }))
      .finally(() => setOffset((currentOffset) => currentOffset + limit));
  };

  useEffect(() => {
    setOffset(0);
    const fetchInitialBatch = () => {
      dispatch({ type: FETCH_PRODUCTS });
      apiCall(
        `/Products?filter[order]=${sortFilter}%20${sortDirection}&filter[skip]=0&filter[limit]=${limit}${
          searchFilter
            ? `&filter[where][name]=${searchFilter.replace(/ /g, "+")}`
            : ""
        }`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.length < limit || data.length === 0) {
            dispatch({ type: ALL_PRODUCTS_LOADED });
          }
          dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
        })
        .catch((e) => dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: e }));
    };

    fetchInitialBatch();

    return () => {
      dispatch({ type: RESET_PRODUCTS });
    };
  }, [sortFilter, sortDirection, searchFilter, limit]);

  if (isProductsError) {
    return (
      <FullScreenMessage message="An unknown error occured. Try refreshing the page." />
    );
  }

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
      searchFilter={searchFilter}
      onSearchChange={(newValue) => setSearchFilter(newValue)}
      itemsPerBatch={limit}
      changeItemsPerBatch={(newValue) => setLimit(newValue)}
      loadMoreItems={fetchNextBatch}
      isThereMoreItems={isThereMoreProducts}
    />
  );
};

export default ProductsListContainer;
