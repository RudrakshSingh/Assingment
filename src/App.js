import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./App.css";

const products = [
  { id: 1, name: "ORI GIMBER 700ml", price: 24.95, image: "path_to_image" },
  { id: 2, name: "GIMBER N°2 700 ml", price: 25.85, image: "path_to_image" },
  { id: 3, name: "SML GIMBER 500ml", price: 20.45, image: "path_to_image" },
  { id: 4, name: "GIMBER N°2 500 ml", price: 26.0, image: "path_to_image" },
  { id: 5, name: "GIMBER N°2 500 ml", price: 26.0, image: "path_to_image" },
  { id: 6, name: "GIMBER N°2 500 ml", price: 26.0, image: "path_to_image" },
  { id: 7, name: "GIMBER N°2 500 ml", price: 26.0, image: "path_to_image" },
  // Add more products as needed
];

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };

  const calculateDiscount = (subtotal) => {
    return subtotal * 0.1;
  };

  const calculateTotal = (subtotal, discount, gratuity) => {
    return subtotal - discount + gratuity;
  };

  return (
    <div>
      <Container className="container">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <ProductList
              products={products}
              search={search}
              setSearch={setSearch}
              addToCart={addToCart}
            />
          </Grid>
          <Grid item xs={4}>
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              calculateSubtotal={calculateSubtotal}
              calculateDiscount={calculateDiscount}
              calculateTotal={calculateTotal}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
