import { useState } from "react";
import Background from "../assets/images/bg-4.png";
import Transections from "./transections";

function Plan_Card({
  Package_Name,
  Return_Persentage,
  Time_Every,
  For__time,
  Capital_span,
  price,
}) {
  const [ForPurchasePRoductName, setForPurchasePRoductName] =
    useState("Diamond");
  const [ForPurchasePRoductPrice, setForPurchasePRoductPrice] = useState(price);
  const [showTransactionBox, setShowTransactionBox] = useState(false);

  const invdest_now_button_handler = (productname, productprice) => {
    setForPurchasePRoductName(productname);
    setForPurchasePRoductPrice(productprice);

    // Toggle the transaction box visibility only if it's false
    if (showTransactionBox) {
      setShowTransactionBox(false); // Close the transaction box
    } else {
      setShowTransactionBox(true); // Open the transaction box
    }
  };

  console.log(
    ForPurchasePRoductName,
    ForPurchasePRoductPrice,
    showTransactionBox
  );

  return (
    <div className="flex justify-center mb-1">
      <div
        className="rounded-xl p-6 shadow-[5px_5px_15px_rgba(102,81,42,0.5)] border-2 border-[#66512A] h-[479px] w-[310px] flex flex-col text-center relative"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-center">
          <h4 className="text-xl font-semibold text-[#CCA354] ">
            {Package_Name}
          </h4>

          <div className="mt-10">
            <ul className="text-gray-300 mt-10">
              <li>
                Return
                <span className="font-bold text-yellow-500 pl-2">
                  {Return_Persentage}%
                </span>
              </li>
              <span className="w-[80%] h-[1px] bg-amber-500 opacity-45 "></span>
              <li>{Time_Every}</li>
              <span className="w-[80%] h-[1px] bg-amber-500 opacity-45 "></span>
              <li>For {For__time}</li>
              <span className="w-[80%] h-[1px] bg-amber-500 opacity-45 "></span>
              <li className="flex gap-2 justify-center">
                <h1 className="text-center"> Lifetime Earning</h1>
                <span>
                  {Capital_span && (
                    <span className="bg-yellow-400 text-[12px] text-black px-2 py-1 rounded ">
                      {Capital_span}
                    </span>
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="mt-5 text-xl font-bold text-yellow-500">${price}</div>
          <div className="flex justify-center">
            <button
              className="bg-yellow-500 hover:bg-orange-400 text-black py-2 mt-10 px-4 rounded transition"
              onClick={() => invdest_now_button_handler(Package_Name, price)}
            >
              Invest Now
            </button>
          </div>
        </div>
      </div>

      {/* Conditional rendering for Transections component */}
      {showTransactionBox && (
        <Transections
          price={ForPurchasePRoductPrice}
          product_name={ForPurchasePRoductName}
        />
      )}
    </div>
  );
}

export default Plan_Card;
