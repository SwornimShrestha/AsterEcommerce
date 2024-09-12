import React from "react";
import Products from "../components/Product/Products";

const Home = () => {
  return (
    <div className="">
      <div className="relative">
        <img
          className="w-full h-[80vh] object-cover object-left"
          src="https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Ecommerce banner"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold md:text-6xl">
              Welcome to Our Ecommerce Store
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Discover the latest products at unbeatable prices
            </p>
            <button className="mt-6 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-white font-semibold text-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
