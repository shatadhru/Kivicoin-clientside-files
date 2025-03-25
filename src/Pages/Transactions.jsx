import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Table from "../Components/Table";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import Transaction_Table from "../Components/Transaction_table";

function Transaction() {
  return (
    <div>
      <section className="mt-16 ml-2 lg:ml-16 mr-2 lg:mr-10">
        {/* Transaction Section */}
        <div className="Transaction h-[26vh] w-[100%] lg:h-[30vh] bg-[#cca354] rounded-lg mt-[40px] pt-6">
          {/* Icon Container */}
          <div className="icon_box ml-6 flex justify-center bg-black items-center h-10 sm:h-12 w-10 sm:w-12 rounded-full">
            <RiMoneyDollarCircleFill size={30} color="#CCA049" />
          </div>

          {/* Title and Description */}
          <h1 className="text-black text-2xl pt-4 pl-6 font-bold">
            Your Transaction
          </h1>
          <p className="text-[12px] pl-6 pt-1">
            Secure Your Future, Multiply Your Wealth – Smart Transactions Start
            Here!
          </p>
        </div>

        {/* Packages Table */}

        {/* Transaction Table */}
        <div className="Transaction mt-6">
<Transaction_Table />
        </div>
      </section>
    </div>
  );
}

export default Transaction;
