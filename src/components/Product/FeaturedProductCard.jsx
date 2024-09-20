import React from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
const FeaturedProductCard = () => {
  return (
    <div className="w-52 lg:w-56 2xl:w-60 overflow-hidden  rounded-lg shadow-2xl ">
      <div className="relative overflow-hidden  w-full  group">
        <div className="w-8 h-5 absolute bg-red-600 left-4 top-3 text-white text-xs  font-bold text-center rounded z-10">
          -2%
        </div>

        <div className=" w-7 h-7 absolute bg-white/40 right-[-40px] top-3 transition-transform duration-300 ease-in-out group-hover:translate-x-[-50px] z-10 text-center ">
          <FavoriteOutlinedIcon className="text-gray-900" />
        </div>
        <div className="w-7 h-7 absolute bg-white/40 right-[-40px] top-12 transition-transform duration-700 ease-in-out group-hover:translate-x-[-50px] z-10 text-center ">
          <CompareArrowsIcon className="text-gray-800" />
        </div>
        <img
          className="object-cover w-full h-48  group-hover:scale-125 transition-transform ease-in-out duration-100"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
          alt="NIKE AIR"
        />
      </div>
      <div className="px-4 py-2">
        <h1 className="text-LG font-bold text-gray-800 uppercase">NIKE AIR</h1>
        <p className="mt-1 text-sm text-gray-600 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
        <h1 className="text-base font-bold text-gray-800">Rs 129</h1>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
