import {useCallback, useContext, useEffect, useState} from "react";
import {getComments, postComment} from "../api/comments.js";
import {UserContext} from "../context/User.jsx";


export const useComments = (productId) => {
    const [comments, setComments] = useState([])
    const { isLoggedIn, login } = useContext(UserContext);

    const fetchComments = useCallback(async () => {
        const res = await getComments(productId)
        setComments(res);
    }, [productId, setComments])

    useEffect(() => {
        fetchComments();
    }, [productId, fetchComments]);

    const [newComment, setNewComment] = useState("")

    const handleChange = event => {
        setNewComment(event.target.value);
    }

    const handleSubmit = async () => {
        if (!isLoggedIn) {
            login();
            return;
        }


        await postComment({ productId: Number(productId), text: newComment })
        await fetchComments();
    };

    return {comments, handleSubmit, handleChange, newComment}
}
