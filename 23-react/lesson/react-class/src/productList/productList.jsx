import { useEffect, useState } from "react";
import { Table, TableBody, TableContainer } from "@mui/material";
import { ProductListTableHead } from "./ProductListTableHead";
import { ProductListRow } from "./ProductListRow";
import { useProducts } from "./UseProducts";

export const ProductList = () => {
  const products = useProducts();

  return (
    <TableContainer>
      {!products.length && "No products"}

      <Table>
        <ProductListTableHead />
        <TableBody>
          {products.map((product) => (
            <ProductListRow key={product.id} row={product} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
