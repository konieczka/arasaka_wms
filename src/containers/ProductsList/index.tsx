import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductsList from "components/ProductsList";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
} from "redux/actions/products";
import { RootState } from "redux/store";

const apiBaseUrl = "http://onglnakbsy.cdprojektred.com:3000/api";

const ProductsListContainer = () => {
  const dispatch = useDispatch();
  const { isProductsMounted, isProductsLoading, products } = useSelector(
    (state: RootState) => state.products
  );

  const fetchProducts = () => {
    dispatch({ type: FETCH_PRODUCTS });
    fetch(`${apiBaseUrl}/Products`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data }))
      .catch((e) => dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: e }));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsList
      products={products}
      isProductsLoading={isProductsLoading}
      isProductsMounted={isProductsMounted}
    />
  );
};

export default ProductsListContainer;
