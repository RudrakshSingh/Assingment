import React, { useState } from "react";
import { Typography, Button, TextField, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CartItem from "./CartItems";

const Cart = ({
  cart,
  removeFromCart,
  calculateSubtotal,
  calculateDiscount,
  calculateTotal,
}) => {
  const [name, setName] = useState("Jimmy Sullivan");
  const [editing, setEditing] = useState(false);
  const [voucher, setVoucher] = useState("");

  const subtotal = calculateSubtotal();
  const discount = calculateDiscount(subtotal);
  const gratuity = 4.0; // Fixed gratuity for simplicity
  const total = calculateTotal(subtotal, discount, gratuity);

  const printReceipt = () => {
    const receipt = `
      Name: ${name}
      Subtotal: $${subtotal.toFixed(2)}
      Discount (10%): -$${discount.toFixed(2)}
      Gratuity: $${gratuity.toFixed(2)}
      Total: $${total.toFixed(2)}
    `;
    console.log(receipt);
    alert(receipt); // Simple alert to simulate printing receipt
  };

  return (
    <div className="cart-section">
      <div className="cart-header">
        {editing ? (
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setEditing(false)}
            autoFocus
          />
        ) : (
          <>
            <Typography variant="h6">{name}</Typography>
            <IconButton onClick={() => setEditing(true)}>
              <EditIcon />
            </IconButton>
          </>
        )}
      </div>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} removeFromCart={removeFromCart} />
      ))}
      <div className="cart-summary">
        <div>
          <Typography>Subtotal:</Typography>
          <Typography>${subtotal.toFixed(2)}</Typography>
        </div>
        <div>
          <Typography>Discount (10%):</Typography>
          <Typography>-${discount.toFixed(2)}</Typography>
        </div>
        <div>
          <Typography>Gratuity:</Typography>
          <Typography>${gratuity.toFixed(2)}</Typography>
        </div>
        <div>
          <Typography variant="h6">Total:</Typography>
          <Typography variant="h6">${total.toFixed(2)}</Typography>
        </div>
      </div>
      <div className="voucher-section">
        <TextField
          variant="outlined"
          placeholder="Add Voucher Code"
          value={voucher}
          onChange={(e) => setVoucher(e.target.value)}
        />
      </div>
      <Button
        variant="contained"
        color="secondary"
        className="button"
        style={{ backgroundColor: "#ff6600" }}
        onClick={printReceipt}
      >
        Print Receipt
      </Button>
    </div>
  );
};

export default Cart;
