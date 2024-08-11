import {ProductActionTypes} from "./actionTypes.js";


export const fetchProductSuccess = product => ({
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: product,
})
