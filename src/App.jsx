import Layout from "./Layout";
import Admin from "./pages/Admin";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./components/Admin/AddProduct";
import Dashboard from "./components/Admin/Dashboard";
import AllProduct from "./components/Admin/AllProduct";
import ProductDetails from "./components/Product/ProductDetails";
import Category from "./components/Admin/Category";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="products/:id" element={<ProductDetails />} />

        <Route path="admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="product/create" element={<AddProduct />} />
          <Route path="product/view" element={<AllProduct />} />
          <Route path="product/category" element={<Category />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
