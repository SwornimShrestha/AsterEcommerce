import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="w-full bg-black text-white">
        <Link to="/admin">
          <h1>Admin</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
