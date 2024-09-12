import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="w-full bg-black text-white p-3 flex justify-end md:px-32">
        <Link to="/admin">
          <button
            className="rounded-md bg-amber-400 py-2 px-4 border border-transparent text-center text-sm font-semibold text-slate-800 transition-all shadow-md hover:shadow-lg  hover:bg-amber-500 hover:text-white  ml-2"
            type="button"
          >
            ADMIN
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
