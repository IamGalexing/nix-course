import { useState, useEffect } from "react";
import { getComments } from "../api/comments";

export const useComments = (productId) => {
  const [comments, setComments] = useState([]);

  const fetchCommets = async () => {
    const res = await getComments(productId);
    setComments(res);

    return res.data;
  };

  useEffect(() => {
    fetchCommets();
  }, [productId]);

  return { comments };
};
