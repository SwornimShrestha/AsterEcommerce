import * as React from "react";
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

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

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>

            <TableCell>Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Product.map((data) => (
            <TableRow
              key={data.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={data.image} className="w-16 " alt="" />
              </TableCell>

              <TableCell component="th" scope="row">
                {data.title}
              </TableCell>
              <TableCell align="right">{data.description}</TableCell>
              <TableCell align="right" sx={{ color: "green" }}>
                Rs {data.price}
              </TableCell>
              <TableCell align="right">{data.category}</TableCell>
              <TableCell align="right">
                <BorderColorIcon
                  sx={{ color: "green", fontSize: 20, marginRight: 1 }}
                />
                <DeleteOutlineIcon sx={{ color: "red", fontSize: 20 }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
