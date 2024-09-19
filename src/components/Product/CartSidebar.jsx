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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../redux/cart/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

export default function CartSidebar({ open, onClose }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity({ id, amount: +1 }));
  };
  const handleDecrease = (id) => {
    dispatch(decreaseQuantity({ id, amount: +1 }));
  };
  return (
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
                secondary={`  Qty ${product.quantity}    NRs${product.price}`}
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
            <div>Subtotal: $262.00</div>
            <div>Shipping and taxes calculated at checkout.</div>
          </div>
          <Button color="primary" variant="contained">
            Checkout
          </Button>
          <Button onClick={() => setOpen(false)} color="primary">
            Continue Shopping &rarr;
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
}
