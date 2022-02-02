import { createStore, combineReducers, applyMiddleware } from "redux";
import productsReducer from "./reducers/productsReducer";
import logger from "redux-logger";

const store = createStore(
  combineReducers({ products: productsReducer }),
  applyMiddleware(logger)
);

export default store;
