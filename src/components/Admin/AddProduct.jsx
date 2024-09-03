import React from "react";

const AddProduct = () => {
  return (
    <div>
      <div>
        <h1 className="font-normal text-base ">Add New Product</h1>
      </div>
      <div className="flex flex-row gap-5">
        <div>
          {" "}
          <h1 className="font-normal text-base "> Product Information</h1>
          {/* Add Form */}
          <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
            <div className="grid  grid-cols-3 gap-2">
              <div className="grid grid-cols-2 col-span-2 gap-3">
                <label className="block text-gray-700 font-normal mb-2">
                  Product Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="title"
                  className=" outline-none w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
                <label className="block text-gray-700 font-normal mb-2">
                  Brand <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="title"
                  className=" outline-none w-full px-3 py-2 border border-gray-300 rounded-lg"
                />{" "}
                <label className="block text-gray-700 font-normal mb-2">
                  Unit <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="title"
                  className=" outline-none w-full px-3 py-2 border border-gray-300 rounded-lg"
                />{" "}
                <label className="block text-gray-700 font-normal mb-2">
                  Weight(inkg) <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="title"
                  className="outline-none w-full px-3 py-2 border border-gray-300 rounded-lg"
                />{" "}
                <label className="block text-gray-700 font-normal mb-2">
                  Minimum <br />
                  Purchase Qty <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="title"
                  className="outline-none w-full px-3 py-2 border border-gray-300 rounded-lg"
                />{" "}
                <label className="block text-gray-700 font-normal mb-2">
                  Barcode<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="title"
                  className="outline-none w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
                <label className="block text-gray-700 font-normal mr-4">
                  Refundable
                </label>
              </div>
              {/* Product Category */}
              <div className="mt-6 shadow-lg p-3 grid grid-cols-1 col-span-1 h-80   ">
                <div className="overflow-y-auto">
                  <h3 className="text-base  font-semibold text-gray-700 sticky top-0 bg-white z-10 h-9">
                    Product Category
                  </h3>
                  <div className="flex flex-col gap-1  ">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Women Clothing & Fashion
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Men Clothing & Fashion
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Sports & Outdoor
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Sports & Outdoor
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Sports & Outdoor
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Sports & Outdoor
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Sports & Outdoor
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Sports & Outdoor
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Sports & Outdoor
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Sports & Outdoor
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Sports & Outdoor
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-span-3">
                <label
                  className="block text-gray-700 font-normal mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  rows="4"
                  placeholder="Product description"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                ></textarea>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-gray-700 font-normal mb-2">
                  Tax
                </label>
                <input
                  type="number"
                  placeholder="xx"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-normal mb-2">
                  VAT
                </label>
                <input
                  type="number"
                  placeholder="xx"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end space-x-4">
              <button className="px-4 py-2 bg-gray-500 text-white rounded-lg">
                Save & Unpublish
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
                Save & Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
