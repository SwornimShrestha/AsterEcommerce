import Layout from "./Layout";
import Admin from "./pages/Admin";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./components/Admin/Products/AddProduct";
import AllProduct from "./components/Admin/Products/AllProduct";
import Category from "./components/Admin/ProductCategory/Category";
import AddCategory from "./components/Admin/ProductCategory/AddCategory";
import ProductDetails from "./components/Product/ProductDetails";
import Dashboard from "./components/Admin/Dashboard";
import EditProduct from "./components/Admin/Products/EditProduct";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="products/:id" element={<ProductDetails />} />

        <Route path="admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="product/create" element={<AddProduct />} />
          <Route path="product/edit/:id" element={<EditProduct />} />

          <Route path="product/view" element={<AllProduct />} />
          <Route path="product/category" element={<Category />} />
          <Route path="category/create" element={<AddCategory />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
