import React, { useState } from "react";

const AddCategory = () => {
  const [formData, setFormData] = useState("");
  const handleChange = () => {};
  return (
    <div className="md:px-64 mt-8 mb-20">
      <div className=" p-5 - shadow-xl">
        <h1 className="font-semibold text-base   mb-4">
          {" "}
          Category Information
        </h1>
        <div className="grid grid-cols-3 col-span-2 gap-3 text-sm ">
          <label className="block text-gray-700 font-normal mb-2 ">Name</label>
          <input
            onChange={handleChange}
            name="productName"
            value={formData.productName}
            type="text"
            placeholder="name"
            className=" outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2 "
          />
          <label className="block text-gray-700 font-normal mb-2">Type</label>
          <input
            onChange={handleChange}
            name="brand"
            value={formData.brand}
            type="text"
            placeholder="type"
            className=" outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
          />{" "}
          <label className="block text-gray-700 font-normal mb-2">
            Parent Category
          </label>
          <select
            onChange={handleChange}
            name="unit"
            value={formData.unit}
            type="text"
            placeholder="category"
            className=" outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
          >
            <option value="">No Parent</option>
            <option value="women-clothing">Women Clothing & Fashion</option>
            <option value="hot-categories" data-parent="women-clothing">
              --Hot Categories
            </option>
            <option value="party-dress" data-parent="hot-categories">
              ----Party Dress
            </option>
            <option value="beauty-health" data-parent="hot-categories">
              ----Beauty & Health
            </option>
          </select>
          <label className="block text-gray-700 font-normal mb-2">Banner</label>
          <input
            onChange={handleChange}
            name="image"
            value={formData.image}
            type="text"
            placeholder="put image url"
            className="outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
          />
          <label className="block text-gray-700 font-normal mb-2">Icon</label>
          <input
            onChange={handleChange}
            name="image"
            value={formData.image}
            type="text"
            placeholder="put image url"
            className="outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
          />
          <label className="block text-gray-700 font-normal mb-2">
            Cover Image
          </label>
          <input
            onChange={handleChange}
            name="image"
            value={formData.image}
            type="text"
            placeholder="put image url"
            className="outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
          />{" "}
          <label
            className="block text-gray-700 font-normal mb-2"
            htmlFor="description"
          >
            Meta Description
          </label>
          <textarea
            onChange={handleChange}
            name="description"
            value={formData.description}
            rows="8"
            placeholder=" description"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
          ></textarea>
        </div>
        <div className="mt-8 flex justify-end space-x-4">
          <button className="px-4 py-2 bg-sky-500 text-white rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
