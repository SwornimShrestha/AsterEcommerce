import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_PRODUCTS}`);
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="mt-7 px-12">
      <div className="flex flex-wrap w-full  flex-col items-center text-center mb-10  ">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 tracking-wide">
          Products
        </h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 font-medium underline underline-offset-8">
          All Products
        </p>
      </div>
      <div className="flex justify-start  flex-wrap md:flex-wrap 2xl:flex-nowrap gap-3 ">
        <ProductCard products={products} />
      </div>
    </div>
  );
};

export default Products;
