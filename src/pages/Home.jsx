import React, { useState } from "react";
import Products from "../components/Product/Products";
import FeaturedProduct from "../components/Product/FeaturedProduct";
import FeaturedCategory from "../components/Product/FeaturedCategory";
const Home = () => {
  return (
    <div className="">
      <div className="w full h-96 lg:h-[35rem] xl:h-[36rem] 2xl:h-[37rem] 3xl:h-[50rem] 4  flex flex-row px-12 gap-3 mt-12">
        <div className="w-1/2 h-full bg--400 flex flex-col overflow-hidden gap-5  justify-between relative pt-20 ">
          <div className="pr-12">
            <h1 className="text-2xl lg:text-4xl 2xl:text-5xl  font-bold mb-2 text-blue-400">
              Welcome to Ecommerce websites
            </h1>
            <p className="mb-4 text-blue-900 font-semibold text-xs lg:text-sm 2xl:text-base ">
              Explore a wide range of products tailored to meet your needs. Shop
              the latest trends with great discounts and offers.
            </p>
            <input
              type="text"
              placeholder="Search for products..."
              className="w-2/3 p-2 border-2 border-blue-500 rounded-md"
            />
            <button className="mt-4  ml-1 px-4 py-2 bg-blue-500 text-white rounded-md">
              Search
            </button>
          </div>

          <div className="flex justify-between gap-4 w-full ">
            <div className="w-1/3">
              <img
                className="w-full h-auto rounded-lg shadow-lg"
                src="https://demo.activeitzone.com/ecommerce/uploads/all/pUqWgFks5gnKYO9I6e84rWL0WMiheaBq3LrknFtq.webp"
                alt="Category 1"
              />
            </div>
            <div className="w-1/3">
              <img
                className="w-full h-auto rounded-lg shadow-lg"
                src="https://demo.activeitzone.com/ecommerce/uploads/all/V7PbqhwELyJdDKTvtJq55KxmHhU1TCNN7XU2excd.webp"
                alt="Category 2"
              />
            </div>
            <div className="w-1/3">
              <img
                className="w-full h-auto rounded-lg shadow-lg"
                src="https://demo.activeitzone.com/ecommerce/uploads/all/gi8k2mSdLBFKM3TO08IGkyRZXiqUCF6PofaL6lbl.webp"
                alt="Category 3"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full bg-red-400 relative overflow-hidden">
          {" "}
          <img
            className=" object-cover rounded-lg shadow-lg object-center w-full h-full"
            src="https://demo.activeitzone.com/ecommerce/uploads/all/2cXgUZDtznvdWIguw3yRTo5owCO9ncHrFgqroExR.webp"
            alt="Large ecommerce image"
          />
        </div>
      </div>

      <section className="mt-28">
        <FeaturedCategory />
      </section>
      <section className="mt-24">
        <FeaturedProduct />
      </section>
      <section className="px-12 mt-20">
        <div className=" relative  overflow-hidden">
          <img
            className="w-full h-96 scale-100 hover:scale-105 transition-transform ease-in duration-500 object-cover"
            src="https://img.freepik.com/free-psd/e-commerce-flat-design-youtube-banner_23-2151267937.jpg?w=1380&t=st=1726570785~exp=1726571385~hmac=c1cd90e0ebb358b7143eeb6525b6c81aca968b234d927b471e38741d27b88dbf"
            alt=""
          />
        </div>
      </section>
      <section>
        <Products />
      </section>
    </div>
  );
};

export default Home;
