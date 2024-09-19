import React from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Link } from "react-router-dom"; // Use react-router-dom for navigation

const ProductCard = ({ products = [] }) => {
  return (
    <>
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          className="w-52 lg:w-56 2xl:w-72 overflow-hidden rounded-lg shadow-2xl block" // Make the link behave like a block element
        >
          <div className="relative overflow-hidden w-full group">
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
              alt={product.productName} // Use productName for alt text
            />
          </div>
          <div className="px-4 py-2">
            <h1 className="text-lg font-bold text-gray-800 uppercase">
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
            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </button>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductCard;
