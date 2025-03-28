import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { TextField, Button, Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";  // Importing axios

import { useNavigate } from "react-router-dom";
  // React Router's hook to navigate programmatically

 import { Link } from "react-router-dom";


 import { auth, providor } from "../Components/Authentication/Firebase.jsx";
 import { signInWithPopup } from "firebase/auth";


function Register() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();


const GoogleAuthSuccessFull = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/google/auth/kiviuser/data",
      userData
    );

    // Assuming the response contains the necessary user info and token
    if (response.data?.token) {
      const { token, user_id, user_email } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("userId", user_id);
      localStorage.setItem("userEmail", user_email);
      toast.success("Login successful!", { position: "top-right" });
      navigate("/dashboard"); // Redirect user to dashboard after successful Google login
    }

    console.log("User data sent to backend:", response.data);
  } catch (error) {
    console.error("Error sending user data to backend:", error);
    toast.error("Google login failed. Please try again.", {
      position: "top-right",
    });
  }
};


// Handle Google Login
const handleGoogleLogin = async () => {
  try {
    signInWithPopup(auth, providor).then((data) => {
      const userData = {
        uid: data.user.uid,
        displayName: data.user.displayName,
        email: data.user.email,
        photoURL: data.user.photoURL,
      };
      setUserData(userData);
      GoogleAuthSuccessFull(userData);
      console.log(userData);
    });
  } catch (error) {
    console.log(error);
  }
};


  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !mobile || !email || !password || !confirmPassword) {
      toast.warn("Please fill all fields!", { position: "top-right" });
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", { position: "top-right" });
      return;
    }

    try {
      // Making the POST request with Axios
      const response = await axios.post("http://localhost:5000/register", {
        name,
        mobile,
        email,
        password,
      });

      // সফল হলে ডাটা সেট করা
      toast.success(response.data.msg, { position: "top-right" });

      // সফলভাবে রেজিস্ট্রেশন হলে ১ সেকেন্ড পর ড্যাশবোর্ডে রিডাইরেক্ট করানো
      setTimeout(() => {
        navigate("/login");
      }, 1000); // 1 সেকেন্ড delay
    } catch (error) {
      console.error(error);
      toast.error("Registration failed! Please try again.", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
      />

      <div
        className="backIcon absolute top-4 left-4 flex items-center gap-2 cursor-pointer"
        onClick={() => window.history.back()}
      >
        <IoArrowBackOutline color="white" size={26} />
        <p className="text-white">Go Back</p>
      </div>

      <div className="p-8 rounded-lg w-full sm:w-96 mt-10">
        <section className="mb-8 text-center">
          <img src={logo} alt="Logo" className="w-40 mx-auto" />
        </section>

        <form onSubmit={handleRegister}>
          {/* Name Field */}
          <Box mb={3}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                input: {
                  color: "#cca354",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#cca354",
                  },
                  "&:hover fieldset": {
                    borderColor: "#cca354",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#cca354",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "#cca354" },
              }}
            />
          </Box>

          {/* Email Field */}
          <Box mb={3}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                input: {
                  color: "#cca354",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#cca354",
                  },
                  "&:hover fieldset": {
                    borderColor: "#cca354",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#cca354",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "#cca354" },
              }}
            />
          </Box>

          {/* Mobile Number Field */}
          <Box mb={3}>
            <TextField
              fullWidth
              label="Mobile Number"
              type="tel"
              variant="outlined"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              sx={{
                input: {
                  color: "#cca354",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#cca354",
                  },
                  "&:hover fieldset": {
                    borderColor: "#cca354",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#cca354",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "#cca354" },
              }}
            />
          </Box>

          {/* Password Field */}
          <Box mb={3}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                input: {
                  color: "#cca354",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#cca354",
                  },
                  "&:hover fieldset": {
                    borderColor: "#cca354",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#cca354",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "#cca354" },
              }}
            />
          </Box>

          {/* Confirm Password Field */}
          <Box mb={3}>
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              variant="outlined"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{
                input: {
                  color: "#cca354",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#cca354",
                  },
                  "&:hover fieldset": {
                    borderColor: "#cca354",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#cca354",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "#cca354" },
              }}
            />
          </Box>

          {/* reCAPTCHA */}
          <Box mb={3} className="flex justify-center"></Box>

          {/* Register Button */}
          <Box mb={3}>
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#cca354" }}
              fullWidth
              size="large"
            >
              Register
            </Button>
          </Box>
        </form>

        <div className="flex justify-center text-[14px] ">
          <p className="text-white">Already have an account?</p>
          <Link to="/login" className="text-[#cca354] ml-2">
            Login{" "}
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
        <div className="social_login flex gap-6 items-center justify-center mt-3">
          <FcGoogle
            size={26}
            onClick={handleGoogleLogin}
            className="cursor-pointer"
          />
          <FaFacebook color="#2583FFFF" size={26} />
          <FaGithub color="#FFFFFFFF" size={26} />
        </div>
      </div>
    </div>
  );
}

export default Register;
