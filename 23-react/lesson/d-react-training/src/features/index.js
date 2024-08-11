import { combineReducers } from "redux";
import { userSlice } from "./user/userSlice.js";
import { productListSlice } from "./productList/productListSlice.js";
import { productSlice } from "./product/productSlice.js";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  productList: productListSlice.reducer,
  product: productSlice.reducer,
});
