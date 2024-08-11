import {ProductActionTypes} from "./actionTypes.js";


export const fetchCommentsSuccess = (comments) => ({
    type: ProductActionTypes.FETCH_COMMENTS_SUCCESS,
    payload: comments
})
