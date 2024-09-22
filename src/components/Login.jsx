import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";

const schema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password cannot exceed 20 characters"),
  type: z.enum(["admin", "user"], { required_error: "Please select a type" }),
});

export default function Login() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      type: "",
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_LOGIN}`, data);
      dispatch(signInSuccess(response.data));
      toast.success("Login Successfully!!!");
      reset();
      setTimeout(() => setOpen(false), 2000);
    } catch (error) {
      toast.error("Login failed!");
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          fontWeight: 10,
          fontSize: 13,
          borderRadius: "4px",
          padding: "1px 2px",
          backgroundColor: "#3f73af",
        }}
      >
        Login
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <div className="flex flex-row">
          {/* Left Section */}
          <div className="object-cover object-center w-[40rem] hidden md:block lg:block 2xl:block">
            <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1726648105~exp=1726648705~hmac=ae176f146c1fcbac5fe944606d7003d954459418bbb3eabb9e4d3434a15ac508" />
          </div>
          {/* Right Section */}
          <div>
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
                {...register("email")}
                margin="dense"
                name="email"
                label="Your email"
                type="email"
                fullWidth
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                {...register("password")}
                margin="dense"
                name="password"
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password?.message}
                sx={{ marginBottom: "14px" }}
              />
              <FormControl
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
                error={!!errors.type}
              >
                <InputLabel>Type</InputLabel>
                <Select
                  {...register("type")}
                  name="type"
                  value={watch("type") || ""}
                >
                  <MenuItem value="admin">admin</MenuItem>
                  <MenuItem value="user">user</MenuItem>
                </Select>
              </FormControl>
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
                onClick={handleSubmit(onSubmit)}
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
          </div>
        </div>
      </Dialog>
    </>
  );
}
