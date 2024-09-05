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

export default function AllProduct() {
  const [Product, setProduct] = useState([
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Gray Shirt",
      addedBY: "swornim",
      stock: 100,
      description: "lorem12 Lorem i",
      price: 200,
      category: "Men's ",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Gray Shirt",
      addedBY: "swornim",
      stock: 100,
      description: "lorem12 Lorem i",
      price: 200,
      category: "Men's ",
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Gray Shirt",
      addedBY: "swornim",
      stock: 100,
      description: "lorem12 Lorem i",
      price: 200,
      category: "Men's ",
    },
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Gray Shirt",
      addedBY: "swornim",
      stock: 100,
      description: "lorem12 Lorem i",
      price: 200,
      category: "Men's ",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Gray Shirt",
      addedBY: "swornim",
      stock: 100,
      description: "lorem12 Lorem i",
      price: 200,
      category: "Men's ",
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Gray Shirt",
      addedBY: "swornim",
      stock: 100,
      description: "lorem12 Lorem i",
      price: 200,
      category: "Men's ",
    },
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Gray Shirt",
      addedBY: "swornim",
      stock: 100,
      description: "lorem12 Lorem i",
      price: 200,
      category: "Men's ",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Gray Shirt",
      addedBY: "swornim",
      stock: 100,
      description: "lorem12 Lorem i",
      price: 200,
      category: "Men's ",
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Gray Shirt",
      addedBY: "swornim",
      stock: 100,
      description: "lorem12 Lorem i",
      price: 200,
      category: "Men's ",
    },
  ]);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get(`${import.meta.env.VITE_PRODUCTS}`);
  //       console.log(response.data);
  //       setProduct(response.data);
  //     } catch (error) {
  //       console.error("Error occured:", error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <div className="mb-20">
      <div className="flex justify-between m-7 ">
        <h1 className="font-medium text-base ">All Product</h1>
        <Link to="product/create">
          <button className="bg-blue-400 text-white h-10 p-2 px-3 rounded-full text-base font-semibold">
            Add New Product
          </button>
        </Link>
      </div>
      <div className="  w-full h-96 flex-col">
        <div className="w-full h-10   mb-5 flex justify-between">
          <h1 className="ml-10 font-medium">All Product</h1>
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
        <TableContainer component={Paper} sx={{ paddingLeft: 15 }}>
          <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: "40px" }}>Name</TableCell>

                <TableCell sx={{ width: "240px" }}></TableCell>
                <TableCell align="center" sx={{ width: "80px" }}>
                  Added By
                </TableCell>
                <TableCell align="center" sx={{ width: "120px" }}>
                  Info
                </TableCell>
                <TableCell align="center" sx={{ width: "60px" }}>
                  Total Stock
                </TableCell>
                <TableCell align="center" sx={{ width: "60px" }}>
                  Total Deal
                </TableCell>
                <TableCell align="left" sx={{ width: "60px" }}>
                  Published
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
              {Product.map((data) => (
                <TableRow
                  key={data.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={data.image} className="w-12 h-15 " alt="" />
                  </TableCell>

                  <TableCell component="th" scope="row">
                    {data.productName}
                  </TableCell>
                  <TableCell align="center">swornim</TableCell>

                  <TableCell align="left">
                    <div className="flex flex-col text-xs font-bold">
                      <h3>
                        Num of Sale: <span>0 times</span>{" "}
                      </h3>
                      <h3>
                        Base Price: Rs<span>{data.minPurchaseQty}</span>{" "}
                      </h3>

                      <h3>
                        Rating: <span>0</span>{" "}
                      </h3>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div className=" flex w-10 bg-slate-200 h-5 rounded-full">
                      <span className="w-5 h-5 bg-gray-400 rounded-full"></span>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <div className=" flex justify-end w-10 bg-slate-200 h-5 rounded-full">
                      <span className="w-5 h-5 bg-green-400 rounded-full"></span>
                    </div>
                  </TableCell>
                  <TableCell align="right" sx={{ color: "green" }}>
                    <div className=" flex w-10 bg-slate-200 h-5 rounded-full">
                      <span className="w-5 h-5 bg-gray-400 rounded-full"></span>
                    </div>{" "}
                  </TableCell>
                  <TableCell align="center">
                    <div className=" flex justify-end w-10 bg-slate-200 h-5 rounded-full">
                      <span className="w-5 h-5 bg-green-400 rounded-full"></span>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div className="flex items-center gap-2 ">
                      <RemoveRedEyeIcon sx={{ color: "green", fontSize: 16 }} />
                      <DeleteOutlineIcon sx={{ color: "red", fontSize: 14 }} />

                      <ContentCopyIcon sx={{ color: "orange", fontSize: 14 }} />
                      <BorderColorIcon sx={{ color: "green", fontSize: 14 }} />
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
