import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ products = [] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap gap-8 justify-center">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="lg:w-1/5 md:w-1/3 w-full p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out border border-gray-200 hover:border-gray-400"
            >
              <div className="block relative h-48 rounded-lg overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full"
                  src={product.image}
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest uppercase font-medium mb-1">
                  {product.category.join(" | ")}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.title}
                </h2>
                <p className="mt-1 text-green-500 font-semibold text-base">
                  NRS {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
