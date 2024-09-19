import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      {" "}
      <div className="bg-gray-900 text-white p-6  flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* Random emoji in place of SVG */}
          <span className="text-6xl">🎉</span>
          <div>
            <h2 className="text-3xl font-semibold">
              Save Upto 50% with our Coupons
            </h2>
            <p className="text-gray-300">
              Get huge discounts or save money by using coupons at checkout
            </p>
          </div>
        </div>
        <button className="px-6 py-2 bg-transparent border border-white text-white rounded-full transition-all hover:bg-white hover:text-black">
          View All Coupons
        </button>
      </div>
    </div>
  );
};

export default Footer;
