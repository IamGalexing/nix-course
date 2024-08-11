import {Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import PropTypes from "prop-types";
import tractor from "./tractor.jpeg"

export const ProductInfo = ({ product }) => {
    const subheader = (
        <>
            {product.price}HUF qt:{product.quantity}
        </>
    );


    return (
        <Card>
            <CardHeader title={product.name} subheader={subheader}/>
            <CardMedia component="img" image={tractor} alt="Product image"/>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
        </Card>
    )
}


ProductInfo.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    })
}
