import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

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
      <DeleteIcon />
    </IconButton>
  </div>
);

export default CartItem;
