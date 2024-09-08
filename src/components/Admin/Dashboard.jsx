import React from "react";

import GridViewIcon from "@mui/icons-material/GridView";
const Dashboard = () => {
  return (
    <div>
      <div className="max-w-sm p-4 bg-white shadow-lg rounded-lg m-6">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold">249</h2>
          <GridViewIcon sx={{ fontSize: 43, color: "lightGray" }} />
        </div>
        <p className="text-gray-500 text-sm">Total Category</p>

        <div className="mt-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="w-4 h-2 rounded-full bg-red-500 inline-block mr-2"></span>
              <p className="text-gray-700">Cellphones & Tabs</p>
            </div>
            <p className="text-gray-800 font-semibold">$1,494.000</p>
          </div>

          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <span className="w-4 h-2 rounded-full bg-yellow-500 inline-block mr-2"></span>
              <p className="text-gray-700">Men Clothing & Fas</p>
            </div>
            <p className="text-gray-800 font-semibold">$1,415.850</p>
          </div>

          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <span className="w-4 h-2 rounded-full bg-blue-500 inline-block mr-2"></span>
              <p className="text-gray-700">Computer & Access</p>
            </div>
            <p className="text-gray-800 font-semibold">$1,415.230</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
