import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { Box, Grid2, Typography } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_LOGIN}`,
          formData
        );
        toast.success("Login Successfully!!!");
        setFormData({
          email: "",
          password: "",
        });
        setTimeout(() => {
          setOpen(false);
        }, 2000);
        console.log(response.data);
      } catch (error) {
        console.error("Error while login:", error);
      }
    };
    postData();
    console.log(formData);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          borderRadius: "20px",
          padding: "10px 20px",
          backgroundColor: "#c62828",
        }}
      >
        Login
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <Grid2 container>
          {/* Left Section */}

          <Box
            component="img"
            className="object-cover object-center hidden lg:block"
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1726648105~exp=1726648705~hmac=ae176f146c1fcbac5fe944606d7003d954459418bbb3eabb9e4d3434a15ac508"
            alt="Access Elite"
            sx={{ width: "400px" }}
          />
          {/* Right Section */}
          <Grid2 item xs={7}>
            <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
              Sign in
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                sx={{ textAlign: "center", marginBottom: "20px" }}
              >
                Sign in if you have an account in here
              </DialogContentText>
              <TextField
                autoFocus
                required
                margin="dense"
                name="email"
                label="Your email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                fullWidth
                variant="outlined"
                sx={{ marginBottom: "20px" }}
              />
              <TextField
                required
                margin="dense"
                name="password"
                value={formData.password}
                onChange={handleChange}
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
              />
            </DialogContent>
            <DialogActions sx={{ justifyContent: "center", padding: "20px" }}>
              <Button
                onClick={handleClose}
                variant="contained"
                color="error"
                sx={{ borderRadius: "20px", padding: "10px 20px" }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                type="submit"
                variant="contained"
                color="primary"
                sx={{ borderRadius: "20px", padding: "10px 20px" }}
              >
                Sign In
              </Button>
            </DialogActions>
            <Typography
              variant="body2"
              sx={{ textAlign: "center", marginBottom: "20px", color: "gray" }}
            >
              Not a member? <a href="/signup">Sign up</a>
            </Typography>
          </Grid2>
        </Grid2>
      </Dialog>
    </>
  );
}
