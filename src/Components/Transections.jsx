import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion"; // For animations
import { RiCloseLine } from "react-icons/ri"; // Importing the close icon from react-icons

function Transactions({ price, product_name, hidden }) {
  const [couponCode, setCouponCode] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(price);
  const [isVisible, setIsVisible] = useState(!hidden); // Control modal visibility

  const handleCouponSubmit = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscountedPrice(price * 0.9); // 10% discount
    } else {
      alert("Invalid coupon code!");
    }
  };

  const handleCancel = () => {
    setIsVisible(false); // Hide the modal on cancel
  };

  const handleClose = () => {
    setIsVisible(false); // Close the modal when close icon is clicked
  };

  return (
    <div>
      {isVisible && (
        <div className="package_controll fixed inset-0 backdrop-blur-md bg-opacity-80 flex items-center justify-center h-screen z-[9999]">
          <motion.div
            className="purchase-container w-full max-w-[900px] bg-black rounded-2xl p-6 relative" // Added relative positioning to position close icon
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Close Icon */}
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={handleClose}
            >
              <RiCloseLine style={{ color: "white", fontSize: 30 }} />
            </div>

            <div className="flex flex-col items-center text-center">
              {/* Logo Section */}
              <div className="img_box max-w-[200px] mb-4">
                <img src={Logo} alt="Company Logo" className="max-w-[200px]" />
              </div>

              {/* Slogan */}
              <p className="text-white text-xl mb-4">
                Empowering Your Future, One Investment at a Time.
              </p>

              <div className="mt-6"></div>

              {/* Package Name and Price Section */}
              <div className="package_name_section text-white text-2xl bg-[#CCA049] w-full py-3 rounded mb-4">
                <h2>{product_name || "Diamond"}</h2>
                <p className="text-lg mt-2">
                  Price: ${discountedPrice.toFixed(2) || "0.00"}
                </p>
              </div>

              {/* Coupon Code Section */}
              <div className="coupon-code-section w-full mb-4">
                <TextField
                  label="Enter Coupon Code"
                  variant="outlined"
                  fullWidth
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="mb-4"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#CCA049", // Normal border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#B08A3A", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#A07830", // Border color when focused
                      },
                      "& input": {
                        color: "#FFFFFF", // Input text color
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#FFFFFF", // Label text color
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#CCA049", // Label color when focused
                    },
                  }}
                />

                <div className="m-2 text-left text-[#CCA049]">
                  <p>Coupon Applied Successfully</p>
                </div>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#CCA049",
                    "&:hover": { backgroundColor: "#B08A3A" },
                  }}
                  onClick={handleCouponSubmit}
                  className="w-full"
                >
                  Apply Coupon
                </Button>
              </div>

              {/* Additional Buttons or Features */}
              <div className="flex justify-center gap-4 mt-6">
                <motion.button
                  className="bg-[#CCA049] text-white py-2 px-4 rounded-md hover:bg-[#cca049ee] transition duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  Proceed to Payment
                </motion.button>
                <motion.button
                  className="bg-white text-black py-2 px-4 rounded-md transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  onClick={handleCancel}
                >
                  Cancel Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Transactions;
