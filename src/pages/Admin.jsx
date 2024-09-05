import React, { useState } from "react";
import AdminSidebar from "../components/Admin/AdminSidebar";
import PublicIcon from "@mui/icons-material/Public";
import { Outlet } from "react-router-dom";

const Admin = () => {
  const [sidebar, setSidebar] = useState(true);
  const toogleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <section className="flex  min-h-screen  overflow-hidden ">
      <AdminSidebar />
      <div className="bg-white w-full relative">
        <div className="bg-slate-100  h-14 flex items-center p-4  justify-between  ">
          <div className=" flex flex-row gap-6 items-center">
            <button onClick={toogleSidebar}>
              <img
                className="w-4"
                src="https://img.icons8.com/?size=100&id=3096&format=png&color=000000"
                alt=""
              />
            </button>
            <div className="flex gap-3 ">
              <div className="w-8 h-8 bg-slate-300 rounded-full px-1 relative">
                <PublicIcon />
              </div>
              <div className="w-8 h-8 bg-slate-300 rounded-full px-1 relative">
                <PublicIcon />
              </div>

              <div className="w-8 h-8 bg-slate-300 rounded-full px-1 relative">
                <PublicIcon />
              </div>
            </div>
            <ul className="flex gap-4 items-center text-xs font-medium">
              <li className=" ">Dashboard</li>
              <li>Order</li>
              <li>Earning</li>
              <li>Homepage Setting</li>
              <li>
                <button className=" ml-4 w-28 bg-sky-200 p-1 text-xs rounded text-black font-semibold">
                  Add New +
                </button>
              </li>
            </ul>
          </div>

          <div className="flex  items-center gap-3">
            <div className="flex gap-3 ">
              <div className="w-8 h-8 bg-slate-300 rounded-full px-1 relative">
                <PublicIcon />
              </div>
              <div className="w-8 h-8 bg-slate-300 rounded-full px-1 relative">
                <PublicIcon />
              </div>
            </div>
            <div className="flex flex-col items-end  ">
              <p className="text-xs font-semibold ">Swornim Shrestha.</p>
              <h1 className="text-xs font-medium text-blue-300">admin</h1>
            </div>
            <img
              className="w-10 h-10 rounded-full"
              src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="ml-2 h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Admin;
