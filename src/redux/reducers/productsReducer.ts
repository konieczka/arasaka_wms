import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "../actions/products";

interface ActionType {
  type: string;
  payload?: any;
}

const initialState = {
  isProductsMounted: false,
  isProductsLoading: false,
  isProductsError: null,
  products: [],
};

export default function productsReducer(
  state = initialState,
  action: ActionType
) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, isProductsLoading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isProductsMounted: true,
        isProductsLoading: false,
        products: action.payload,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isProductsLoading: false,
        isProductsError: action.payload,
      };
    default:
      return state;
  }
}
