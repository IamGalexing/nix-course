import {getComments} from "../../../../api/comments.js";
import {fetchCommentsSuccess} from "../fetchCommentsSuccess.js";


export const fetchCommentsThunk  = id => async dispatch => {
    const comments = await getComments(id);
    dispatch(fetchCommentsSuccess(comments));
}
