import React from "react";
import { Typography, IconButton } from "@mui/material";
import DeleteForever from "@mui/icons-material/DeleteForever";

const CartItem = ({ item, removeFromCart }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px",
    }}
  >
    <Typography>{item.name}</Typography>
    <Typography>${item.price}</Typography>
    <IconButton onClick={() => removeFromCart(item)}>
      <DeleteForever />
    </IconButton>
  </div>
);

export default CartItem;
