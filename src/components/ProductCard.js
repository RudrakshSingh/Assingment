import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card className="product-card">
      <CardMedia
        component="img"
        alt={product.name}
        height="140"
        image="https://media.istockphoto.com/id/1467199060/photo/cup-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.jpg?s=2048x2048&w=is&k=20&c=UpMMErTsJ4Pr4JeO5Wpcs16FofUlPv10zQPRonwWrNM="
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          ${product.price}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addToCart(product)}
          style={{ backgroundColor: "#ff6600" }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
