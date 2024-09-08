import React, { useState } from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AdminSidebar from "../components/Admin/AdminSidebar";
import PublicIcon from "@mui/icons-material/Public";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import { Outlet } from "react-router-dom";

const Admin = () => {
  const [sidebar, setSidebar] = useState(true);
  const toogleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <section className="flex  h-screen overflow-hidden ">
      <div
        className={`transition-transform duration-300 ${
          sidebar ? "block" : "hidden"
        } w-64 bg-gray-800`}
      >
        <AdminSidebar />
      </div>
      <div className="bg-white w-full relative overflow-auto ">
        {/* top-bar */}
        <div className="bg-slate-100  h-14 flex items-center p-4  justify-between  sticky top-0 z-50  ">
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
                <WysiwygIcon />
              </div>

              <div className="w-8 h-8 bg-slate-300 rounded-full px-1 relative">
                <ClearAllIcon />
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
                <NotificationsActiveIcon />
              </div>
              <div className="w-8 h-8 bg-slate-300 rounded-full px-1 relative">
                <EmojiFlagsIcon />
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

        <div className="ml-2  ">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Admin;
