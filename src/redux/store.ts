import { createStore, combineReducers } from "redux";
import productsReducer from "./reducers/productsReducer";

const store = createStore(combineReducers({ products: productsReducer }));

export default store;
