import { useState, useEffect } from "react";
import { getProductById } from "../api/products";
import { useParams } from "react-router-dom";
import { usePageTitle } from "../context/PageTitle";

export const useProduct = () => {
  const [productData, setProductData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const params = useParams();

  const title = usePageTitle();

  useEffect(() => {
    if (productData !== null) {
      title.setTitle(productData.name);
    }
  }, [productData]);

  useEffect(() => {
    getProductById(params.productId)
      .then((data) => {
        setProductData(data);
      })
      .catch(() => setNotFound(true));
  }, [params.productId]);

  return { productData, notFound };
};
