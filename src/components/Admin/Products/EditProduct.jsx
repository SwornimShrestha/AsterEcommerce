import React, { useEffect, useRef, useState } from "react";

import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import AddProductNavbar from "./AddProductNavbar";
import JoditEditor from "jodit-react";
import { Switch, TextField } from "@mui/material";
import categoryData from "../../../data/categories.json";
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";

const EditProduct = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState(categoryData.category);
  const [toggleStates, setToggleStates] = useState({});
  const [errors, setErrors] = useState({});

  const handleToggleParentCat = (categoryId) => {
    setToggleStates((prevStates) => ({
      ...prevStates,
      [categoryId]: !prevStates[categoryId],
    }));
  };

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
    price: "",
    tax: "",
    vat: "",
    image: "",
    refundable: false,
    category: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_PRODUCTS}${id}`
        );

        const productData = response.data;
        console.log(productData);
        setFormData({
          id: productData.id || uuidv4(),
          productName: productData.productName || "",
          brand: productData.brand || "",
          unit: productData.unit || "",
          weight: productData.weight || "",
          minPurchaseQty: productData.minPurchaseQty || "",
          barcode: productData.barcode || "",
          description: productData.description || "",
          price: productData.price || "",
          tax: productData.tax || "",
          vat: productData.vat || "",
          image: productData.image || "",
          refundable: productData.refundable || false,
          category: productData.category || [],
        });
      } catch (error) {
        console.error("Error fetching the product data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRefundableChange = (e) => {
    setFormData({
      ...formData,
      refundable: e.target.checked,
    });
  };

  const handleCategoryChange = (e, categoryId) => {
    const { checked } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      category: checked
        ? [...prevFormData.category, categoryId]
        : prevFormData.category.filter((id) => id !== categoryId),
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.productName) {
      isValid = false;
      newErrors.productName = "Product Name is required";
    }
    if (!formData.brand) {
      isValid = false;
      newErrors.brand = "Brand is required";
    }
    if (!formData.unit) {
      isValid = false;
      newErrors.unit = "Unit is required";
    }
    if (!formData.weight) {
      isValid = false;
      newErrors.weight = "Weight is required";
    }
    if (!formData.minPurchaseQty) {
      isValid = false;
      newErrors.minPurchaseQty = "Minimum Purchase Qty is required";
    }

    if (!formData.image) {
      isValid = false;
      newErrors.image = "Image URL is required";
    }
    if (!formData.price) {
      isValid = false;
      newErrors.price = "Price is required";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_PRODUCTS}${formData.id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Product updated successfully", response.data);
    } catch (error) {
      console.error("There was an error updating the product:", error);
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
        <div className=" w-full  pt-12 mr-3">
          {" "}
          <h1 className="font-bold text-base   mb-2"> Product Information</h1>
          {/* Add Form */}
          <div className="w-full mb-20 rounded-lg">
            <div className="grid  md:grid-cols-3  gap-2">
              <div className="col-span-1 grid grid-cols-3  md:col-span-2 gap-3  pr-4">
                <label className="block text-gray-700 font-normal mb-2">
                  Product Name <span className="text-red-600">*</span>
                </label>
                <TextField
                  onChange={handleChange}
                  name="productName"
                  value={formData.productName}
                  type="text"
                  placeholder="title"
                  className=" outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
                  error={!!errors.productName}
                  helperText={errors.productName}
                />
                <label className="block text-gray-700 font-normal mb-2">
                  Brand <span className="text-red-600">*</span>
                </label>
                <TextField
                  onChange={handleChange}
                  name="brand"
                  value={formData.brand}
                  type="text"
                  placeholder="title"
                  className=" outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
                  error={!!errors.brand}
                  helperText={errors.brand}
                />{" "}
                <label className="block text-gray-700 font-normal mb-2">
                  Unit <span className="text-red-600">*</span>
                </label>
                <TextField
                  onChange={handleChange}
                  name="unit"
                  value={formData.unit}
                  type="text"
                  placeholder="unit"
                  className=" outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
                  error={!!errors.unit}
                  helperText={errors.unit}
                />
                <label className="block text-gray-700 font-normal mb-2">
                  Image <span className="text-red-600">*</span>
                </label>
                <TextField
                  onChange={handleChange}
                  name="image"
                  value={formData.image}
                  type="text"
                  placeholder="put image url"
                  className="outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
                  error={!!errors.image}
                  helperText={errors.image}
                />{" "}
                <label className="block text-gray-700 font-normal mb-2">
                  Weight(inkg) <span className="text-red-600">*</span>
                </label>
                <TextField
                  onChange={handleChange}
                  name="weight"
                  value={formData.weight}
                  type="text"
                  placeholder="title"
                  className="outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
                  error={!!errors.weight}
                  helperText={errors.weight}
                />{" "}
                <label className="block text-gray-700 font-normal mb-2">
                  Minimum <br />
                  Purchase Qty <span className="text-red-600">*</span>
                </label>
                <TextField
                  onChange={handleChange}
                  name="minPurchaseQty"
                  value={formData.minPurchaseQty}
                  type="text"
                  placeholder="title"
                  className="outline-none w-full px-3 py-2 border border-gray-300 rounded-lg col-span-2"
                  error={!!errors.minPurchaseQty}
                  helperText={errors.minPurchaseQty}
                />{" "}
                <label className="block text-gray-700 font-normal mb-2">
                  Barcode<span className="text-red-600">*</span>
                </label>
                <TextField
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
                <Switch
                  color="success"
                  checked={formData.refundable}
                  onChange={handleRefundableChange}
                />
              </div>
              {/* Product Category */}
              <div className="col-span-1 md:col-span-1 shadow-lg p-3 grid grid-cols-1   max-h-80  ">
                <div className="overflow-y-auto">
                  <h3 className="text-base  font-semibold text-gray-700 sticky top-0 bg-white z-10 h-9">
                    Product Category
                  </h3>
                  {categories &&
                    categories.map((category) => (
                      <div key={category.id}>
                        <div className="flex items-center gap-1 ">
                          <button
                            onClick={() => handleToggleParentCat(category.id)}
                          >
                            {toggleStates[category.id] ? "+" : "-"}
                          </button>
                          <input
                            type="checkbox"
                            checked={
                              formData.category?.includes(category.id) || false
                            }
                            onChange={(e) =>
                              handleCategoryChange(e, category.id)
                            }
                          />
                          <label>{category.name}</label>
                        </div>
                        {/* Render subcategories if needed */}
                        {!toggleStates[category.id] &&
                          category.subcategories && (
                            <div style={{ marginLeft: "20px" }}>
                              {category.subcategories.map((sub) => (
                                <div key={sub.id}>
                                  <input
                                    type="checkbox"
                                    checked={
                                      formData.category?.includes(sub.id) ||
                                      false
                                    }
                                    onChange={(e) =>
                                      handleCategoryChange(e, sub.id)
                                    }
                                  />
                                  <label>{sub.name}</label>
                                  {sub.subcategories?.map((subb) => (
                                    <div
                                      key={subb.id}
                                      style={{ marginLeft: "20px" }}
                                    >
                                      <input
                                        type="checkbox"
                                        checked={
                                          formData.category?.includes(
                                            subb.id
                                          ) || false
                                        }
                                        onChange={(e) =>
                                          handleCategoryChange(e, subb.id)
                                        }
                                      />
                                      <label>{subb.name}</label>
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                </div>
              </div>
              {/* description */}
              <div className="col-span-1 md:col-span-3 mt-8">
                <label
                  className="block text-gray-700 font-normal mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <JoditEditor
                  ref={editor}
                  onChange={(newContent) => {
                    setFormData({
                      ...formData,
                      description: newContent,
                    });
                  }}
                  name="description"
                  value={formData.description}
                />
              </div>
            </div>

            <div>
              <h1 className="font-bold text-base mt-8">Price</h1>

              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-gray-700 font-normal mb-2">
                    Price
                  </label>
                  <TextField
                    onChange={handleChange}
                    name="price"
                    value={formData.price}
                    type="number"
                    placeholder="xx"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    error={!!errors.price}
                    helperText={errors.price}
                  />
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-base mt-8">Tax & Vat</h1>

              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-gray-700 font-normal mb-2">
                    Tax
                  </label>
                  <TextField
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
                  <TextField
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

export default EditProduct;
