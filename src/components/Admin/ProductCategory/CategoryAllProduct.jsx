import * as React from "react";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Switch } from "@mui/material";

export default function CategoryAllProduct() {
  const [Product, setProduct] = useState([
    // {
    //   id: 1,
    //   image:
    //     "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   title: "Gray Shirt",
    //   addedBY: "swornim",
    //   stock: 100,
    //   description: "lorem12 Lorem i",
    //   price: 200,
    //   category: "Men's ",
    // },
    // {
    //   id: 2,
    //   image:
    //     "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   title: "Gray Shirt",
    //   addedBY: "swornim",
    //   stock: 100,
    //   description: "lorem12 Lorem i",
    //   price: 200,
    //   category: "Men's ",
    // },
    // {
    //   id: 3,
    //   image:
    //     "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   title: "Gray Shirt",
    //   addedBY: "swornim",
    //   stock: 100,
    //   description: "lorem12 Lorem i",
    //   price: 200,
    //   category: "Men's ",
    // },
  ]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_PRODUCTS}`);
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.error("Error occured:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_PRODUCTS}/${productId}`);
      console.log(`Product with ID  deleted.`);
      setProduct((prevData) =>
        prevData.filter((data) => data.id !== productId)
      );
    } catch (error) {
      console.error("Error occurred while deleting:", error);
    }
  };

  return (
    <div className="mb-20">
      <div className="flex justify-between m-7 ">
        <h1 className="font-medium text-base ">All Category</h1>
        <Link to="/admin/category/create">
          <button className="bg-blue-400 text-white h-10 p-2 px-3 rounded-full text-base font-semibold">
            Add Category
          </button>
        </Link>
      </div>
      <div className="  w-full h-96 flex-col">
        <div className="w-full h-10   mb-5 flex justify-between">
          <h1 className="ml-10 font-medium">Category</h1>
          <div className="flex justify-center gap-4  items-center">
            <input
              type="text"
              placeholder="All sellers"
              className="  h-8 p-2 text-white outline-none border"
            />
            <input
              type="text"
              placeholder="Sort by"
              className="  h-8 p-2 text-white outline-none border "
            />
            <input
              type="text"
              placeholder="Type & Enter"
              className="  h-8 p-2 text-white outline-none border "
            />
          </div>
        </div>
        <TableContainer component={Paper} sx={{ paddingLeft: 3 }}>
          <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ width: "40px" }}>
                  #
                </TableCell>
                <TableCell align="center" sx={{ width: "90px" }}>
                  Name
                </TableCell>
                <TableCell align="center" sx={{ width: "60px" }}>
                  Parent Category
                </TableCell>
                <TableCell align="left" sx={{ width: "60px" }}>
                  Banner
                </TableCell>
                <TableCell align="left" sx={{ width: "60px" }}>
                  Icon
                </TableCell>
                <TableCell align="left" sx={{ width: "60px" }}>
                  Cover Image
                </TableCell>
                <TableCell align="center" sx={{ width: "60px" }}>
                  Featured
                </TableCell>
                <TableCell align="center" sx={{ width: "60px" }}>
                  Options
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Product.map((data, index) => (
                <TableRow
                  key={data.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    <h1>{index + 1}</h1>
                  </TableCell>
                  <TableCell align="center">{data.productName}</TableCell>
                  <TableCell align="center">swornim</TableCell>

                  {/* Image cells */}
                  <TableCell
                    align="center"
                    sx={{
                      paddingLeft: "",
                    }}
                  >
                    <img
                      className="w-12 h-12 object-center"
                      src={data.image}
                      alt="Cover Image"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <img
                      className="w-12 h-12 object-center"
                      src={data.image}
                      alt="Cover Image"
                    />
                  </TableCell>
                  <TableCell align="left">
                    <img
                      className="w-12 h-12 object-center"
                      src={data.image}
                      alt="Cover Image"
                    />
                  </TableCell>

                  {/* Featured switch */}
                  <TableCell align="center">
                    <Switch checked={data.isFeatured} color="success" />
                  </TableCell>

                  {/* Options buttons */}
                  <TableCell align="center">
                    <div className="flex justify-center items-center gap-2">
                      <button onClick={() => handleDelete(data.id)}>
                        <DeleteOutlineIcon
                          sx={{ color: "red", fontSize: 14 }}
                        />
                      </button>
                      <button
                        onClick={() => console.log("Edit product:", data.id)}
                      >
                        <BorderColorIcon
                          sx={{ color: "green", fontSize: 14 }}
                        />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
