import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/user/userSlice";
import { toast } from "react-toastify";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
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

  const handleLogout = () => {
    dispatch(signOut());
    toast.error("Logout !!");
  };

  return (
    <div
      className={`sticky top-0 w-full z-50 transition-all duration-300 px-12 py-1 shadow-xl ${
        isScrolled ? "bg-gray-600/50" : "bg-slate-600"
      }`}
    >
      <div className="w-full text-white py-1 flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded"
              src="https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ecommerce logo"
            />
            <h1 className="uppercase text-sm text-slate-100 font-semibold">
              Ecommerce
            </h1>
          </div>
        </Link>
        <div className="text-black hidden md:block lg:block 2xl:block">
          <ul
            className={`flex gap-8 font-semibold text-sm text-gray-100 transition-colors ${
              isScrolled ? "text-white" : "text-gray-100"
            }`}
          >
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
        <div className="">
          {currentUser ? (
            <>
              {currentUser.type === "admin" ? (
                <Link to="/admin">
                  <button
                    className="rounded-md bg-amber-400 py-1 px-2 border border-transparent text-center text-xs font-semibold text-slate-800 transition-all shadow-md hover:shadow-lg hover:bg-amber-500 hover:text-white ml-2"
                    type="button"
                  >
                    Admin Dashboard
                  </button>
                </Link>
              ) : (
                <div className="flex items-center">
                  <span className="text-white">{currentUser.email}</span>
                  <Link to="/">
                    <button
                      onClick={handleLogout}
                      className="rounded-md bg-red-600 py-1 px-2 border border-transparent text-center text-xs font-semibold text-gray-100 transition-all shadow-md hover:shadow-lg hover:bg-amber-500 hover:text-white ml-2"
                      type="button"
                    >
                      Logout
                    </button>
                  </Link>
                </div>
              )}
            </>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
