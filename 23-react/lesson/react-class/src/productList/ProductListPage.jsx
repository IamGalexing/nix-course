import { useContext, useEffect } from "react";
import { Page } from "../layout/Page";
import { ProductList } from "./productList";
import { usePageTitle } from "../context/PageTitle";

export function ProductListPage() {
  const titleContext = usePageTitle();

  useEffect(() => {
    titleContext.setTitle("Product List");
  }, []);

  return (
    <Page>
      <ProductList />
    </Page>
  );
}
