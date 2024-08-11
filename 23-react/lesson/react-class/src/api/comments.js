import axios from "axios";

export async function getComments(productId) {
  const res = await axios.get("http://localhost:3001/comments", {
    params: {
      productId: Number(productId),
    },
  });

  return res.data;
}

export async function postComment(newComment) {
  const res = await axios.post(`http://localhost:3001/comments`, {
    data: newComment,
  });

  return res.data;
}
