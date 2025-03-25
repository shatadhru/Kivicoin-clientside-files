import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Table from "../Components/Table";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

function Investment() {
  return (
    <div>
      <section className="mt-16 ml-2 lg:ml-16 mr-2 lg:mr-10">
        {/* Investment Section */}
        <div className="investment h-[26vh] w-[100%] lg:h-[30vh] bg-[#cca354] rounded-lg mt-[40px] pt-6">
          {/* Icon Container */}
          <div className="icon_box ml-6 flex justify-center bg-black items-center h-10 sm:h-12 w-10 sm:w-12 rounded-full">
            <RiMoneyDollarCircleFill size={30} color="#CCA049" />
          </div>

          {/* Title and Description */}
          <h1 className="text-black text-2xl pt-4 pl-6 font-bold">
            Your Investment
          </h1>
          <p className="text-[12px] pl-6 pt-1">
            Secure Your Future, Multiply Your Wealth – Smart Investments Start
            Here!
          </p>
        </div>

        {/* Packages Table */}


        {/* Investment Table */}
        <div className="investment mt-6">
          <Table />
        </div>
      </section>
    </div>
  );
}

export default Investment;
