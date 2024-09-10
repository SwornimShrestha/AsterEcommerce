import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ products = [] }) => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-wrap gap-6 justify-center">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="lg:w-1/5 md:w-1/3 w-full p-4 border border-opacity-40 mb-3 cursor-pointer rounded-lg shadow-lg"
            >
              <div className="block relative h-48 rounded-lg overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-contain object-center w-full h-full block"
                  src={product.image}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category.join(" | ")}{" "}
                  {/* Join categories with a separator */}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.title}
                </h2>
                <p className="mt-1 text-green-400 font-semibold">
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
