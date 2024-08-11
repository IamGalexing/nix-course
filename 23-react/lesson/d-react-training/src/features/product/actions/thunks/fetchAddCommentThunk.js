import {postComment} from "../../../../api/comments.js";
import {fetchCommentsThunk} from "./fetchCommentsThunk.js";

export const fetchAddCommentThunk = (newComment) => async (dispatch) => {
    await postComment(newComment);
    dispatch(fetchCommentsThunk(newComment.productId));
}
