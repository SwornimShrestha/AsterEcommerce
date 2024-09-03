import React from "react";
import AdminSidebar from "../components/Admin/AdminSidebar";
import AllProduct from "../components/Admin/AllProduct";
import AddProduct from "../components/Admin/AddProduct";

const Admin = () => {
  return (
    <div className="flex flex-row ">
      <div>
        <AdminSidebar />
      </div>
      <div className="bg-white w-full px-6 relative">
        <div className="bg-slate-100  m-2 h-14  w-[99%]">swornim</div>
        <div className="ml-10">
          <AddProduct />
          {/* <AllProduct /> */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
