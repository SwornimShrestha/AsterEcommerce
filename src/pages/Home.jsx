import React from "react";
import Products from "../components/Product/Products";

const Home = () => {
  return (
    <div className="md:mx-32">
      <div className=" w-full h-96 bg-red-600 mt-4 rounded-2xl overflow-hidden">
        <img
          className="w-full h-96 object-cover object-left  "
          src="https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <Products />
    </div>
  );
};

export default Home;
