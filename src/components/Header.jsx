import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.05) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 px-12 ${
        isScrolled ? "bg-gray-600/50" : "bg-transparent"
      }`}
    >
      <div className="w-full text-white py-3 flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded"
              src="https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ecommerce logo"
            />
            <h1 className="uppercase text-yellow-400 font-semibold">
              Ecommerce
            </h1>
          </div>
        </Link>
        <div className="text-black hidden md:block">
          <ul
            className={`flex gap-8 font-semibold text-black transition-colors ${
              isScrolled ? "text-white" : "text-yellow-400"
            }`}
          >
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
        <div className="">
          <Login />
          <Link to="/admin">
            <button
              className="rounded-md bg-amber-400 py-2 px-4 border border-transparent text-center text-sm font-semibold text-slate-800 transition-all shadow-md hover:shadow-lg hover:bg-amber-500 hover:text-white ml-2"
              type="button"
            >
              ADMIN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
