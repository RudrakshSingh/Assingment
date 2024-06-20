import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import ProductCard from "./ProductCard";

const categories = [
  "Ice Coffee",
  "Hot Coffee",
  "Artisan Tea",
  "Ice Mojito",
  "Beverage",
];

const ProductList = ({ products, search, setSearch, addToCart }) => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="search-bar">
        <TextField
          fullWidth
          label="Search all product here..."
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          style={{
            backgroundColor: "#ff6600",
            color: "white",
            marginLeft: "10px",
          }}
        >
          Search
        </Button>
      </div>
      <div className="categories">
        {categories.map((category) => (
          <Button variant="contained" key={category}>
            {category}
          </Button>
        ))}
      </div>
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={4} key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;
