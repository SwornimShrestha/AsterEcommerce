import React, { useState } from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import CartSidebar from "./CartSidebar";
import { addItem } from "../../redux/cart/cartSlice";

const ProductCard = ({ products = [] }) => {
  const dispatch = useDispatch();
  const [open, setopen] = useState(false);
  const handleOpenCart = () => {
    setopen(!open);
  };

  const handleAddToCart = (product) => {
    dispatch(
      addItem({
        id: product.id,
        name: product.productName,
        price: product.price,
        quantity: 1,
        imageSrc: product.image,
      })
    );
  };

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="w-52 lg:w-56 2xl:w-60 overflow-hidden rounded-lg shadow-2xl block"
        >
          <Link
            to={`/products/${product.id}`}
            className="relative overflow-hidden w-full group block"
          >
            <div className="w-8 h-5 absolute bg-red-600 left-4 top-3 text-white text-xs font-bold text-center rounded z-10">
              -2%
            </div>

            <div className="w-7 h-7 absolute bg-white/40 right-[-40px] top-3 transition-transform duration-300 ease-in-out group-hover:translate-x-[-50px] z-10 text-center">
              <FavoriteOutlinedIcon className="text-gray-900" />
            </div>
            <div className="w-7 h-7 absolute bg-white/40 right-[-40px] top-12 transition-transform duration-700 ease-in-out group-hover:translate-x-[-50px] z-10 text-center">
              <CompareArrowsIcon className="text-gray-800" />
            </div>
            <img
              className="object-cover w-full h-48 group-hover:scale-125 transition-transform ease-in-out duration-100"
              src={product.image}
            />
          </Link>
          <div className="px-4 py-2">
            <h1 className="text-lg font-bold text-gray-800 uppercase line-clamp-1">
              {product.productName}
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              {product.category.map((cat, index) => (
                <span key={index}>
                  {cat} {index < product.category.length - 1 ? "|" : ""}
                </span>
              ))}
            </p>
          </div>

          <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
            <h1 className="text-base font-bold text-gray-800">
              NRS {product.price}
            </h1>
            <IconButton
              onClick={() => {
                handleAddToCart(product);
                handleOpenCart();
              }}
              color="primary"
              aria-label="add to shopping cart"
            >
              <AddShoppingCartIcon />
            </IconButton>
          </div>
          <CartSidebar open={open} onClose={handleOpenCart} />
        </div>
      ))}
    </>
  );
};

export default ProductCard;
