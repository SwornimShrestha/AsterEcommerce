import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_PRODUCTS}${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleCart = (product, redirect) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.find((item) => item.id === product.id);
    if (isProductExist) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }
    alert("Product added to cart");
    if (redirect) {
      navigate("/cart");
    }
  };

  return (
    <section className="text-gray-700 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <img
              alt="ecommerce"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              src={product.image}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6">
            <h3 className="text-gray-500 text-xs tracking-widest uppercase font-medium mb-1 flex flex-wrap">
              {product.category.map((cat, index) => (
                <div key={index}>{cat} | </div>
              ))}
            </h3>

            <h1 className="text-gray-900 text-4xl font-bold mb-3">
              {product.productName}
            </h1>
            <div className="flex mb-4 items-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  fill={index < product.rating ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <span className="text-gray-600 ml-3">
                {product.reviews} Reviews
              </span>
            </div>
            <p className="leading-relaxed mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-semibold text-gray-900">
                NRS {product.price}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleCart(product, true)}
                  className="bg-indigo-500 text-white px-6 py-2 rounded-md shadow hover:bg-indigo-600 focus:outline-none"
                >
                  BUY IT NOW
                </button>
                <button
                  onClick={() => handleCart(product)}
                  className="bg-transparent text-indigo-500 border border-indigo-500 px-6 py-2 rounded-md shadow hover:bg-indigo-100 focus:outline-none"
                >
                  ADD TO CART
                </button>
              </div>
              <button className="w-10 h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center ml-4 hover:bg-gray-300">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
