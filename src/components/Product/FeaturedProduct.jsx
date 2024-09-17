import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import FeaturedProductCard from "./FeaturedProductCard";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
const FeaturedProduct = () => {
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

  const featuredProducts = products.filter((product) => product.featured);

  return (
    <section className="p-12  ">
      <div className="flex justify-between">
        <h1 className="font-semibold text-xl mb-4">Featured Product</h1>
        <button className="font-semibold text-sm mb-4 bg-yellow-400 px-2 py-1 rounded-md flex items-center gap-2">
          View All <ArrowForwardIosOutlinedIcon sx={{ fontSize: 12 }} />
        </button>
      </div>

      {/* {featuredProducts.length > 0 ? (
        <ProductCard products={featuredProducts} />
      ) : (
        <p>No featured products available at the moment.</p>
      )} */}
      <div className="flex justify-start flex-wrap gap-3">
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
      </div>
    </section>
  );
};

export default FeaturedProduct;
