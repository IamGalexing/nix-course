import { Grid } from "@mui/material";
import { Page } from "../layout/Page";
import { useProduct } from "./useProduct";
import { ProductInfo } from "./ProductInfo";
import { CommnetsPanel } from "./CommentsPanel";

export const ProductPage = () => {
  const { productData, notFound } = useProduct();

  return (
    <Page>
      {productData === null ? (
        "Loading"
      ) : notFound ? (
        "Product not found"
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ProductInfo product={productData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <CommnetsPanel productId={productData.id} />
          </Grid>
        </Grid>
      )}
    </Page>
  );
};
