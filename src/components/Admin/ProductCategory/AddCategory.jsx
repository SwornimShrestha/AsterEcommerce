import { Select } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AddCategory = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    category: "",
    banner: "",
    icon: "",
    coverImage: "",
    metaDescription: "",
  });

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_CATEGORYS}`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };
    fetchCategory();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="md:px-64 mt-8 mb-20">
      <form onSubmit={handleSubmit} className="p-5 shadow-xl">
        <h1 className="font-semibold text-base mb-4">Category Information</h1>
        <div className="grid grid-cols-3 col-span-2 gap-3 text-sm">
          <label className="block text-gray-700 font-normal mb-2">Name</label>
          <input
            onChange={handleChange}
            name="name"
            value={formData.name}
            type="text"
            placeholder="name"
            className="outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
          />
          <label className="block text-gray-700 font-normal mb-2">Type</label>
          <select
            onChange={handleChange}
            name="type"
            value={formData.type}
            type="text"
            placeholder="type"
            className="outline-none  w-full px-3 py-2  border border-gray-300 rounded-lg col-span-2"
          >
            <option value="Physical">Physical</option>
            <option value="Digital">Digital</option>
          </select>
          <label className="block text-gray-700 font-normal mb-2">
            Parent Category
          </label>
          <select
            onChange={handleChange}
            name="category"
            value={formData.category}
            className="outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
          >
            <option value="Null">No Parent</option>
            {categories.map((category) => (
              <option
                key={category.id}
                value={
                  category.parentCategory ? category.parentCategory.id : "null"
                }
              >
                {category.parentCategory
                  ? category.parentCategory.name
                  : "No Parent Category"}
              </option>
            ))}
          </select>

          <label className="block text-gray-700 font-normal mb-2">Banner</label>
          <input
            onChange={handleChange}
            name="banner"
            value={formData.banner}
            type="text"
            placeholder="put image url"
            className="outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
          />
          <label className="block text-gray-700 font-normal mb-2">Icon</label>
          <input
            onChange={handleChange}
            name="icon"
            value={formData.icon}
            type="text"
            placeholder="put image url"
            className="outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
          />
          <label className="block text-gray-700 font-normal mb-2">
            Cover Image
          </label>
          <input
            onChange={handleChange}
            name="coverImage"
            value={formData.coverImage}
            type="text"
            placeholder="put image url"
            className="outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
          />
          <label
            className="block text-gray-700 font-normal mb-2"
            htmlFor="description"
          >
            Meta Description
          </label>
          <textarea
            onChange={handleChange}
            name="metaDescription"
            value={formData.metaDescription}
            rows="8"
            placeholder="description"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
          ></textarea>
        </div>
        <div className="mt-8 flex justify-end space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-sky-500 text-white rounded-lg"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
