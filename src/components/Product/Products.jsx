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
    <div>
      <div className="flex flex-wrap w-full mb-7 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Products
        </h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          All Products
        </p>
      </div>
      <ProductCard products={products} />
    </div>
  );
};

export default Products;
