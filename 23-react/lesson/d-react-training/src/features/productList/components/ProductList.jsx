import {Table, TableBody, TableContainer} from "@mui/material";
import {ProductListTableHead} from "./ProductListTableHead.jsx";
import {ProductListRow} from "./ProductListRow.jsx";
import {useSelector} from "react-redux";
import {selectProductList} from "../productListSlice.js";


export const ProductList = () => {
    const products = useSelector(selectProductList)

    return (
        <TableContainer>
            {products.length === 0 && 'No Products'}
            <Table >
                <ProductListTableHead />
                <TableBody>
                    {products.map((product) => (
                        <ProductListRow key={product.id} row={product}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};
