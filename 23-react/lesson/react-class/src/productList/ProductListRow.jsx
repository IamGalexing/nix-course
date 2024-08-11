import { TableCell, TableRow } from "@mui/material";

export function ProductListRow({ row }) {
  return (
    <TableRow>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.price}</TableCell>
      <TableCell>{row.quantity}</TableCell>
    </TableRow>
  );
}
