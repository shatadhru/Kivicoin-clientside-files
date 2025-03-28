import Card from "../Components/Card";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { SiBitcoincash } from "react-icons/si";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaHistory, FaMoneyBillWave } from "react-icons/fa";
import { useEffect, useState } from "react";
import io from "socket.io-client";

import { useData } from "../Components/Context/AuthenticateInvestor";

const socket = io.connect("http://localhost:5000")
function Dashboard({ Userid, Useremail }) {
  const [totaluser, setTotalUser] = useState(0);
  const [ User_data , setUser_data ] = useState("");


    const { data, setData } = useData();
  

  useEffect(() => {
    socket.on("total-users", (totalUsers) => {
      setTotalUser(totalUsers);
    });


    //Important Data Fetching 
    
    socket.emit("user-email", Useremail);


    socket.on("user-data" , (User_data_) =>{

    setUser_data(User_data_);

    });

    console.log(User_data);





















  }, [socket]);

  return (
    <div>
      <section className="flex justify-center flex-col">
        <div className="text-container mt-10 ml-5 lg:ml-16">
          <h1 className="text-[30px] sm:text-[40px] font-bold">
            Hello, {User_data.name}
          </h1>
          

          <p className="text-sm sm:text-base">
            Your financial journey is growing stronger every day. 😊{" "}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 m-5 sm:m-10">
          <Card
            color_container="#cca354"
            title="Total Transactions"
            value={User_data.total_transactions}
            Icon={RiSecurePaymentLine}
            color_icon_container="black"
          />
          <Card
            color_container="#cca354"
            title="Total Investment"
            value={User_data.total_investment}
            Icon={BsCashCoin}
            color_icon_container="black"
          />
          <Card
            color_container="#cca354"
            title="Total Profits"
            value={User_data.total_profit}
            Icon={SiBitcoincash}
            color_icon_container="black"
          />
          <Card
            color_container="#cca354"
            title="Pending Withdrawals"
            value={User_data.total_pending_withdrawal}
            Icon={BiMoneyWithdraw}
            color_icon_container="black"
          />
          <Card
            color_container="#cca354"
            title="Recent Transactions Amount"
            value={User_data.recent_transactions_ammount}
            Icon={FaHistory}
            color_icon_container="black"
          />
          <Card
            color_container="#cca354"
            title="Total Withdrawals"
            value={User_data.total_withdrawal}
            Icon={FaMoneyBillWave}
            color_icon_container="black"
          />
        </div>

        <div className="flex justify-center items-center h-auto mb-10">
          <div className="current-packages bg-[#cca354] rounded-2xl h-auto mt-2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[89%]">
            <div className="flex flex-col sm:flex-row justify-between items-center h-full px-4 sm:px-6 md:px-8 py-4">
              <div className="flex flex-col sm:w-2/3">
                <h1 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium truncate">
                  Current Packages: {data.package_name}
                </h1>
                <div className="text-[12px] sm:text-[14px] mt-2 text-white">
                  <strong>Price:</strong> {data.package_price} <br />
                  <strong>Duration:</strong> {data.package_duration} <br />
                  <strong>Status:</strong> {data.package_status} <br />
                  <strong>Start Date:</strong> {data.package_start_date} <br />
                  <strong>End Date:</strong> {data.package_end_date} <br />
                  <strong>Discount:</strong> {data.discount} <br />
                  <div className="flex gap-2 mt-2  items-center">
                    <strong>Authorization:</strong>
                    <p className="bg-green-400 text-white py-1 px-3 rounded-lg">
                      {data.is_Authorised}
                    </p>
                  </div>
                </div>
              </div>
              <button className="bg-black text-[12px] sm:text-[14px] lg:text-[16px] text-[#eeb447] px-6 sm:px-8 py-2 mt-4 sm:mt-0 rounded-lg">
                Premium Plan
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
