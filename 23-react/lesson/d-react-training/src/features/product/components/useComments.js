import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectComments} from "../productSlice.js";
import {openLoginDialog, selectIsLoggedIn} from "../../user/userSlice.js";
import {fetchAddCommentThunk} from "../actions/thunks/fetchAddCommentThunk.js";
import {useParams} from "react-router-dom";
import {fetchCommentsThunk} from "../actions/thunks/fetchCommentsThunk.js";


export const useComments = () => {
    const { productId } = useParams();


    const [newComment, setNewComment] = useState("");
    const comments = useSelector(selectComments);
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setNewComment(event.target.value);
    }

    useEffect(() => {
        dispatch(fetchCommentsThunk(productId))
    }, []);

    function handleSubmit() {
        if (!isLoggedIn) {
            dispatch(openLoginDialog())
            return;
        }

        if (newComment.trim()) {
            dispatch(fetchAddCommentThunk({ productId, text: newComment}))
        }
    }

    return {comments, handleSubmit, handleChange, newComment }
}
