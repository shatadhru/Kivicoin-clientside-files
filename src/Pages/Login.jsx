import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { TextField, Button, Box, Typography, Divider } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../Components/Authentication/Authcontext.jsx";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");
  const navigate = useNavigate(); // React Router এর হুক

  // Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  // Handle Facebook Login
  const handleFacebookLogin = async () => {
    try {
      await facebookLogin();
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  // Handle GitHub Login
  const handleGithubLogin = async () => {
    try {
      await githubLogin();
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const GoogleAuthSuccessFull = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/google/auth/kiviuser/data",
        userData
      );
      console.log("User data sent to backend:", response.data);
    } catch (error) {
      console.error("Error sending user data to backend:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.warn("Please fill in both fields", { position: "top-right" });
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (response.data?.token) {
        const { token, user_id, user_email } = response.data;
        localStorage.setItem("authToken", token);
        localStorage.setItem("userId", user_id);
        localStorage.setItem("userEmail", user_email);
        toast.success("Login successful!", { position: "top-right" });
        navigate("/dashboard");
      } else {
        toast.error("Invalid credentials!", { position: "top-right" });
      }
    } catch (error) {
      toast.error("Wrong Email or password.", { position: "top-right" });
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
      />

      {/* Go Back Icon */}
      <div
        className="backIcon absolute top-4 left-4 flex items-center gap-2 cursor-pointer"
        onClick={() => window.history.back()}
      >
        <IoArrowBackOutline color="white" size={26} />
        <p className="text-white">Go Back</p>
      </div>

      <div className="p-8 rounded-lg w-full sm:w-96">
        <section className="mb-8 text-center">
          <img src={logo} alt="Logo" className="w-40 mx-auto" />
        </section>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <Box mb={4}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                input: { color: "#cca354" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#cca354" },
                  "&:hover fieldset": { borderColor: "#cca354" },
                  "&.Mui-focused fieldset": { borderColor: "#cca354" },
                },
              }}
              InputLabelProps={{ style: { color: "#cca354" } }}
            />
          </Box>

          <Box mb={4}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                input: { color: "#cca354" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#cca354" },
                  "&:hover fieldset": { borderColor: "#cca354" },
                  "&.Mui-focused fieldset": { borderColor: "#cca354" },
                },
              }}
              InputLabelProps={{ style: { color: "#cca354" } }}
            />
          </Box>

          <Box mb={4}>
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#cca354" }}
              fullWidth
              size="large"
            >
              Log In
            </Button>
          </Box>
        </form>

        {/* Sign Up Link */}
        <div className="flex justify-center text-[14px]">
          <p className="text-white">Don't have an account?</p>
          <Link to="/register" className="text-[#cca354] ml-2">
            Sign Up
          </Link>
        </div>

        <Divider
          sx={{
            color: "white",
            margin: "10px 0",
            "&::before, &::after": { borderColor: "gray" },
          }}
        >
          <Typography variant="body1" sx={{ color: "gray" }}>
            or
          </Typography>
        </Divider>

        <p className="text-center text-gray-400">Continue with</p>

        {/* Social Login Icons */}
        <div className="social_login flex gap-6 items-center justify-center mt-3">
          <FcGoogle size={26} onClick={handleGoogleLogin} />
          <FaFacebook
            color="#2583FFFF"
            size={26}
            onClick={handleFacebookLogin}
          />
          <FaGithub color="#FFFFFFFF" size={26} onClick={handleGithubLogin} />
        </div>
      </div>
    </div>
  );
}

export default Login;
