import React, { useRef, useState } from "react";

import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import AddProductNavbar from "./AddProductNavbar";
import JoditEditor from "jodit-react";
const AddProduct = () => {
  const editor = useRef(null);
  const [formData, setFormData] = useState({
    id: uuidv4(),
    productName: "",
    brand: "",
    unit: "",
    weight: "",
    minPurchaseQty: "",
    barcode: "",
    description: "",
    tax: "",
    vat: "",
    image: "",
    category: [],
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "category") {
      setFormData((prevFormData) => {
        const updatedCategories = checked
          ? [...prevFormData.category, value]
          : prevFormData.category.filter((category) => category !== value);

        return {
          ...prevFormData,
          category: updatedCategories,
        };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_PRODUCTS}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setFormData({
        id: uuidv4(),
        productName: "",
        brand: "",
        unit: "",
        weight: "",
        minPurchaseQty: "",
        barcode: "",
        description: "",
        tax: "",
        vat: "",
        image: "",
        category: "",
      });
      alert("Form Submitted", response.data);
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };
  return (
    <div className="mt-6 ">
      <div className="mb-6">
        <h1 className="font-bold text-base ml-3">Add New Product</h1>
      </div>
      <div className="flex flex-row gap-5">
        <div className="mr-9">
          <AddProductNavbar />
        </div>
        <div className=" pt-12">
          {" "}
          <h1 className="font-bold text-base   mb-2"> Product Information</h1>
          {/* Add Form */}
          <div className="container  mb-20  bg-white rounded-lg  pr-12 ">
            <div className="grid  grid-cols-3 gap-2">
              <div className="grid grid-cols-3 col-span-2 gap-3 ">
                <label className="block text-gray-700 font-normal mb-2">
                  Product Name <span className="text-red-600">*</span>
                </label>
                <input
                  onChange={handleChange}
                  name="productName"
                  value={formData.productName}
                  type="text"
                  placeholder="title"
                  className=" outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
                />
                <label className="block text-gray-700 font-normal mb-2">
                  Brand <span className="text-red-600">*</span>
                </label>
                <input
                  onChange={handleChange}
                  name="brand"
                  value={formData.brand}
                  type="text"
                  placeholder="title"
                  className=" outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
                />{" "}
                <label className="block text-gray-700 font-normal mb-2">
                  Unit <span className="text-red-600">*</span>
                </label>
                <input
                  onChange={handleChange}
                  name="unit"
                  value={formData.unit}
                  type="text"
                  placeholder="unit"
                  className=" outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
                />
                <label className="block text-gray-700 font-normal mb-2">
                  Image <span className="text-red-600">*</span>
                </label>
                <input
                  onChange={handleChange}
                  name="image"
                  value={formData.image}
                  type="text"
                  placeholder="put image url"
                  className="outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
                />{" "}
                <label className="block text-gray-700 font-normal mb-2">
                  Weight(inkg) <span className="text-red-600">*</span>
                </label>
                <input
                  onChange={handleChange}
                  name="weight"
                  value={formData.weight}
                  type="text"
                  placeholder="title"
                  className="outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
                />{" "}
                <label className="block text-gray-700 font-normal mb-2">
                  Minimum <br />
                  Purchase Qty <span className="text-red-600">*</span>
                </label>
                <input
                  onChange={handleChange}
                  name="minPurchaseQty"
                  value={formData.minPurchaseQty}
                  type="text"
                  placeholder="title"
                  className="outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
                />{" "}
                <label className="block text-gray-700 font-normal mb-2">
                  Barcode<span className="text-red-600">*</span>
                </label>
                <input
                  onChange={handleChange}
                  name="barcode"
                  value={formData.barcode}
                  type="text"
                  placeholder="title"
                  className="outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
                />
                <label className="block text-gray-700 font-normal mr-4">
                  Refundable
                </label>
                <div className=" flex w-10 bg-slate-200 h-5 rounded-full">
                  <span className="w-5 h-5 bg-gray-400 rounded-full"></span>
                </div>
              </div>
              {/* Product Category */}
              <div className=" shadow-lg p-3 grid grid-cols-1 col-span-1 h-80 ml-4 ">
                <div className="overflow-y-auto">
                  <h3 className="text-base  font-semibold text-gray-700 sticky top-0 bg-white z-10 h-9">
                    Product Category
                  </h3>
                  <div className="flex flex-col gap-1">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="category"
                        value="Women Clothing & Fashion"
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Women Clothing & Fashion
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="category"
                        value="Men Clothing & Fashion"
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Men Clothing & Fashion
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="category"
                        value="Sports & Outdoor"
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Sports & Outdoor
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="category"
                        value="Computer & Accessories"
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Computer & Accessories
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="category"
                        value="Kids & Joy"
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Kids & Joy
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="category"
                        value="Jewelry & Tabs"
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Jewelry & Tabs
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="category"
                        value="Home Improvement & Table"
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Home Improvement & Table
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="category"
                        value="Home Decoration & Application"
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Home Decoration & Application
                    </label>

                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="category"
                        value="Toy"
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Toy
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="category"
                        value="Automobile & Motorcycle"
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Automobile & Motorcycle
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-span-3 mt-8">
                <label
                  className="block text-gray-700 font-normal mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <JoditEditor
                  ref={editor}
                  onChange={handleChange}
                  name="description"
                  value={formData.description}
                />
                {/* <textarea
                  onChange={handleChange}
                  name="description"
                  value={formData.description}
                  rows="8"
                  placeholder="Product description"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                ></textarea> */}
              </div>
            </div>
            <div>
              <h1 className="font-bold text-base mt-8">Tax & Vat</h1>

              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-gray-700 font-normal mb-2">
                    Tax
                  </label>
                  <input
                    onChange={handleChange}
                    name="tax"
                    value={formData.tax}
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
                    onChange={handleChange}
                    name="vat"
                    value={formData.vat}
                    type="number"
                    placeholder="xx"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end space-x-4">
              <button className="px-4 py-2 bg-gray-500 text-white rounded-lg">
                Save & Unpublish
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
              >
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
