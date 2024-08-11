import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import tractor from "./tractor.jpg";

export const ProductInfo = ({ product }) => {
  const subheader = (
    <>
      {product.price}HUF qt:{product.quantity}
    </>
  );

  return (
    <Card>
      <CardHeader title={product.name} subheader={subheader} />
      <CardMedia component='img' image={tractor} alt='image' />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
