import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  DialogContentText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeAllItem,
  removeItem,
} from "../../redux/cart/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";

export default function CartSidebar({ open, onClose }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const [confirmCheckoutOpen, setConfirmCheckoutOpen] = useState(false);
  const [checkoutSuccessOpen, setCheckoutSuccessOpen] = useState(false);
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity({ id, amount: +1 }));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity({ id, amount: +1 }));
  };

  const handleCheckout = () => {
    setConfirmCheckoutOpen(true);
  };

  const handleConfirmCheckout = () => {
    dispatch(removeAllItem());
    setConfirmCheckoutOpen(false);
    setCheckoutSuccessOpen(true);
  };

  return (
    <>
      {/* Main Cart Sidebar */}
      <Dialog
        open={open}
        onClose={onClose}
        fullScreen
        PaperProps={{
          style: {
            position: "fixed",
            right: 0,
            top: 0,
            height: "100%",
            width: "100%",
            maxWidth: 600,
            transition: "transform 0.3s ease-in-out",
            transform: open ? "translateX(0)" : "translateX(100%)",
            boxShadow: "none",
          },
        }}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} // Ensure it appears on top
      >
        <DialogTitle>
          Shopping Cart
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
            style={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <List>
            {items.map((product) => (
              <ListItem key={product.id}>
                <ListItemAvatar>
                  <Avatar variant="square" src={product.imageSrc} />
                </ListItemAvatar>
                <ListItemText
                  primary={<a href={product.href}>{product.name}</a>}
                  secondary={`  Qty ${product.quantity} | Total Price:     NRs${
                    product.quantity * product.price
                  }`}
                />
                <IconButton
                  color="error"
                  onClick={() => handleDecrease(product.id)}
                >
                  <RemoveIcon sx={{ fontSize: 15 }} />
                </IconButton>{" "}
                <IconButton
                  color="success"
                  variant="contained"
                  onClick={() => handleIncrease(product.id)}
                >
                  <AddIcon fontSize="15" />
                </IconButton>{" "}
                <Button
                  color="error"
                  variant="text"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </Button>
              </ListItem>
            ))}
          </List>
        </DialogContent>

        <Divider />

        <DialogActions>
          <div className="flex flex-col w-full items-center gap-3">
            <div className="flex flex-col items-center ">
              <div>
                Subtotal:
                {items.reduce((total, product) => {
                  return total + product.quantity * product.price;
                }, 0)}
              </div>
              <div>Shipping and taxes calculated at checkout.</div>
            </div>
            {items.length > 0 && (
              <Button
                color="primary"
                variant="contained"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            )}
            <Link to="/">
              <Button onClick={onClose} color="primary">
                Continue Shopping &rarr;
              </Button>
            </Link>
          </div>
        </DialogActions>
      </Dialog>

      {/* Confirmation Dialog box for checkoutt */}
      <Dialog
        open={confirmCheckoutOpen}
        onClose={() => setConfirmCheckoutOpen(false)}
      >
        <DialogTitle>Confirm Checkout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to proceed with checkout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setConfirmCheckoutOpen(false)}
            variant="contained"
            color="error"
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirmCheckout}
            variant="contained"
            color="success"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Dialog   for checkoutt*/}
      <Dialog
        open={checkoutSuccessOpen}
        onClose={() => setCheckoutSuccessOpen(false)}
      >
        <IconButton aria-label="success" color="success">
          <CheckCircleOutlineIcon sx={{ fontSize: 70 }} />
        </IconButton>
        <DialogTitle align="center">Checkout Successful</DialogTitle>
        <DialogContent align="center">
          <DialogContentText>
            Your order has been successfully placed! Thank you for shopping with
            us.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
