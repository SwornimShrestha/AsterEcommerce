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
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Switch } from "@mui/material";

export default function AllProduct() {
  const [Product, setProduct] = useState([]);
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
      await axios.delete(`${import.meta.env.VITE_PRODUCTS}${productId}`);
      toast.error(`Product   deleted.`);
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
        <h1 className="font-medium text-base ">All Product</h1>
        <Link to="/admin/product/create">
          <button className="bg-blue-400 text-white h-10 p-2 px-3 rounded-full text-base font-semibold">
            Add New Product
          </button>
        </Link>
      </div>
      <div className="  w-full h-96 flex-col">
        <div className="w-full h-auto   mb-5 flex justify-between flex-wrap px-3 gap-y-4">
          <h1 className="ml-10 font-medium">All Product</h1>
          <div className="flex flex-wrap  gap-4  items-center">
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
        <TableContainer component={Paper} sx={{ paddingLeft: 5 }}>
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
                <TableCell align="center" sx={{ width: "60px" }}>
                  Refundable
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
                        Base Price: Rs<span>{data.price}</span>{" "}
                      </h3>

                      <h3>
                        Rating: <span>0</span>{" "}
                      </h3>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <Switch color="success" />
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <Switch color="success" />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ color: data.refundable ? "green" : "red" }}
                  >
                    <Switch
                      color={data.refundable ? "success" : "default"}
                      checked={data.refundable}
                    />
                  </TableCell>

                  <TableCell align="center">
                    <Switch color="success" />
                  </TableCell>
                  <TableCell align="center">
                    <div className="flex items-center gap-2 ">
                      <Link to={`/products/${data.id}`}>
                        <RemoveRedEyeIcon
                          sx={{ color: "green", fontSize: 16 }}
                        />
                      </Link>
                      <button onClick={() => handleDelete(data.id)}>
                        <DeleteOutlineIcon
                          sx={{ color: "red", fontSize: 14 }}
                        />
                      </button>

                      <ContentCopyIcon sx={{ color: "orange", fontSize: 14 }} />
                      <Link to={`/admin/product/edit/${data.id}`}>
                        <BorderColorIcon
                          sx={{ color: "green", fontSize: 14 }}
                        />
                      </Link>
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
