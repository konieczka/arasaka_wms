import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  LOAD_MORE_PRODUCTS,
  LOAD_MORE_PRODUCTS_FAILURE,
  LOAD_MORE_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_LOADED,
  RESET_PRODUCTS,
} from "../actions/products";

interface ActionType {
  type: string;
  payload?: any;
}

export interface ProductType {
  name: string;
  quantity: number;
  date: string;
  description: string;
  email: string;
  id: number;
}

export interface ProductsState {
  isProductsMounted: boolean;
  isProductsLoading: boolean;
  isProductsError: any;
  isThereMoreProducts: boolean;
  products: ProductType[];
}

const initialState: ProductsState = {
  isProductsMounted: false,
  isProductsLoading: false,
  isProductsError: null,
  isThereMoreProducts: true,
  products: [],
};

export default function productsReducer(
  state = initialState,
  action: ActionType
) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...initialState, isProductsLoading: true };
    case LOAD_MORE_PRODUCTS:
      return { ...state, isProductsLoading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isProductsMounted: true,
        isProductsLoading: false,
        products: action.payload,
      };
    case FETCH_PRODUCTS_FAILURE:
    case LOAD_MORE_PRODUCTS_FAILURE:
      return {
        ...state,
        isProductsLoading: false,
        isProductsError: action.payload,
      };
    case LOAD_MORE_PRODUCTS_SUCCESS:
      return {
        ...state,
        isProductsMounted: true,
        isProductsLoading: false,
        products: Array.from(new Set([...state.products, ...action.payload])),
      };
    case ALL_PRODUCTS_LOADED:
      return { ...state, isThereMoreProducts: false };
    case RESET_PRODUCTS:
      return initialState;
    default:
      return state;
  }
}
