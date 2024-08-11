import {getProductById} from "../../../../api/products.js";
import {fetchProductSuccess} from "../fetchProductSuccess.js";


export function fetchProductThunk(id) {
    return async function (dispatch) {
        const product = await getProductById(id)
        dispatch(fetchProductSuccess(product))
    }
}
