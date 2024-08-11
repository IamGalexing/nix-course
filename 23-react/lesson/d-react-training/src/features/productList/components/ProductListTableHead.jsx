import {TableCell, TableHead, TableRow} from "@mui/material";


export function ProductListTableHead() {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>In Stock</TableCell>
            </TableRow>
        </TableHead>
    );
}
