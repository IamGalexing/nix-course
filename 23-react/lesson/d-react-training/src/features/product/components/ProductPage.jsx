import { Grid } from "@mui/material";
import { ProductInfo } from "./ProductInfo.jsx";
import { CommentsPanel } from "./CommentsPanel.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../productSlice.js";
import { useEffect } from "react";
import { fetchProductThunk } from "../productSlice.js";
import { useParams } from "react-router-dom";
import { Page } from "../../../layout/Page.jsx";
import { Clock } from "../../../Clock.jsx";

export const ProductPage = () => {
  const notFound = false;
  const productData = useSelector(selectProduct);
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductThunk(params.productId));

    return () => {
      // todo: clear
    };
  }, [dispatch, params.productId]);

  let content;

  if (notFound) {
    content = "Product Not Found";
  } else if (productData === null) {
    content = "Loading";
  } else {
    content = (
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ProductInfo product={productData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <CommentsPanel productId={productData.id} />
        </Grid>
      </Grid>
    );
  }

  return (
    <Page>
      <Clock />
      {content}
    </Page>
  );
};
