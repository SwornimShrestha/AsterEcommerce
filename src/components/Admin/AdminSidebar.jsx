import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import InventoryIcon from "@mui/icons-material/Inventory";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const [toggleProduct, setToggleProduct] = useState(false);

  const toggleChange = () => {
    setToggleProduct(!toggleProduct);
  };
  return (
    <section className="bg-gray-900 p-5 w-64  h-screen">
      <div className="flex flex-col  gap-8 mb-5">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded"
            src="https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h1 className=" uppercase text-yellow-400 font-semibold ">
            Ecommerce
          </h1>
        </div>
        <input
          type="text"
          placeholder="Search in menu"
          className=" bg-slate-900 h-10 p-2 text-white outline-none border border-gray-600 rounded"
        />
      </div>
      {/* Dashboard */}
      <div className="text-gray-300 text-base font-semibold    ">
        <ul className="cursor-pointer">
          <Link to="">
            <li className="flex items-center gap-2 mb-3">
              <GridViewIcon sx={{ fontSize: 20, color: "gray " }} />
              Dashboard
            </li>
          </Link>
          <li className="flex items-center justify-between  mb-3">
            <div className="flex items-center gap-2">
              <InventoryIcon sx={{ fontSize: 20, color: "gray " }} />
              Product
            </div>
            <button onClick={toggleChange}>
              {toggleProduct ? (
                <KeyboardArrowDownIcon sx={{ fontSize: 20, color: "gray" }} />
              ) : (
                <KeyboardArrowUpIcon sx={{ fontSize: 20, color: "gray" }} />
              )}{" "}
            </button>
          </li>
          {toggleProduct && (
            <ul className="list-disc ml-8 ">
              <li className="mb-1 text-sm text-gray-400">
                {" "}
                <Link to="/admin/product/create">Add New Product</Link>
              </li>
              <li className="mb-1 text-sm text-gray-400">
                <Link to="/admin/product/view">View All Product</Link>
              </li>
              <li className="mb-1 text-sm text-gray-400">Brand</li>
              <li className="mb-1 text-sm text-gray-400">
                <Link to="/admin/product/category">Category</Link>
              </li>
            </ul>
          )}
          <li className="flex items-center gap-2 mb-3">
            <Link to="/">
              <LogoutIcon sx={{ fontSize: 20, color: "gray " }} />
              Home
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AdminSidebar;
