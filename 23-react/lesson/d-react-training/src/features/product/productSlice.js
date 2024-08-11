import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductById } from "../../api/products.js";
import { getComments, postComment } from "../../api/comments.js";

const initialState = {
  comments: [],
  info: null,
};

export const fetchProductThunk = createAsyncThunk(
  "product/fetchProduct",
  async (id) => {
    return await getProductById(id);
  }
);

export const fetchCommentThunk = createAsyncThunk(
  "product/fetchCommentThunk",
  async (id) => {
    return await getComments(id);
  }
);

export const fetchAddCommentThunk = createAsyncThunk(
  "product/fetchAddCommentThunk",
  async (newComment, thunkApi) => {
    await postComment(newComment, thunkApi.dispatch);
    thunkApi.dispatch(fetchCommentThunk(newComment.productId));
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearProduct: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductThunk.fulfilled, (state, action) => {
      state.info = action.payload;
    });
    builder.addCase(fetchCommentThunk.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});

export const { clearProduct } = productSlice.actions;

export const selectComments = (state) => state.product.comments;
export const selectProduct = (state) => state.product.info;
