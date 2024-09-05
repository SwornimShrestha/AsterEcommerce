import React from "react";

const navData = [
  { label: "General", active: true },
  { label: "Files & Media", active: false },
  { label: "Price & Stock", active: false },
  { label: "SEO", active: false },
  { label: "Shipping", active: false },
  { label: "Frequently Bought", active: false },
];

const AddProductNavbar = () => {
  return (
    <div className="w-60 h-56 p-2 text-gray-600">
      <ul className="flex flex-col text-sm font-medium">
        {navData.map((item, index) => (
          <li
            key={index}
            className={`h-8 p-2 ${
              item.active ? "text-blue-600 bg-sky-100" : ""
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddProductNavbar;
