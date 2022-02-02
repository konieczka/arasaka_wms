import { createStore, combineReducers, applyMiddleware } from "redux";
import productsReducer, { ProductsState } from "./reducers/productsReducer";
import logger from "redux-logger";

const store = createStore(
  combineReducers({ products: productsReducer }),
  applyMiddleware(logger)
);

export interface RootState {
  products: ProductsState;
}
export type AppDispatch = typeof store.dispatch;

export default store;
