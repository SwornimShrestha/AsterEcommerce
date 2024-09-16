import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_PRODUCTS}${id}`
        );
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="text-gray-700 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            {product.image && (
              <img
                alt="ecommerce"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                src={product.image}
              />
            )}
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6">
            {product.category && (
              <h3 className="text-gray-500 text-xs tracking-widest uppercase font-medium mb-1 flex flex-wrap">
                {Array.isArray(product.category) &&
                  product.category.map((cat, index) => (
                    <div key={index}>{cat} | </div>
                  ))}
              </h3>
            )}

            <h1 className="text-gray-900 text-4xl font-bold mb-3">
              {product.productName || "Product Name"}
            </h1>
            <div className="flex mb-4 items-center">
              <span className="text-gray-600 ml-3">
                {product.reviews || "0"} Reviews
              </span>
            </div>
            <p
              className="leading-relaxed mb-4"
              dangerouslySetInnerHTML={{
                __html: product.description || "No description available.",
              }}
            ></p>

            <div className="flex justify-between items-center">
              <span className="text-2xl font-semibold text-gray-900">
                NRS {product.price || "0"}
              </span>
              <div className="flex space-x-2">
                <button
                  // onClick={() => handleCart(product, true)}
                  className="bg-indigo-500 text-white px-6 py-2 rounded-md shadow hover:bg-indigo-600 focus:outline-none"
                >
                  BUY IT NOW
                </button>
                <button
                  // onClick={() => handleCart(product)}
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
