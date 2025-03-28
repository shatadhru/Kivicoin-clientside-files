import { useEffect, useState } from "react";
import io from "socket.io-client";
import "../assets/css/all.min.css";
import "../assets/css/line-awesome.min.css";
import "../assets/css/main.css";
import "../assets/css/vendor/animate.min.css";
import "../assets/css/vendor/dots.css";
import "../assets/css/vendor/slick.css";
import {
  FaTachometerAlt,
  FaChartLine,
  FaUsers,
  FaMoneyBillWave,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";



import { IoPower } from "react-icons/io5";
import { BsJournalCode } from "react-icons/bs";
import { RiDashboardFill, RiMenuUnfold4Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { FaBeer } from "react-icons/fa";
import Logo from "../assets/images/logo.png";
import Logo2 from "../assets/images/logo2.png";
import Dashboard from "../Pages/Dashboard";
import Investment from "../Pages/Investment";
import Users from "./Profits";
import Transactions from "../Pages/Transactions";
import Settings from "../Pages/Settings";
import Profits from "./Profits";
import Refers from "./Refers";


import { useNavigate } from "react-router-dom"; // To redirect after logout
import Plans from "./Plans";
import Account from "./Account";
import Contact from "./ContactUs";


const socket = io.connect("http://localhost:5000");

function Home(props) {
  const { user_id, user_email } = props;
  const [page, setPage] = useState(
    <Dashboard Userid={user_id} Useremail={user_email} />
  );
  const [heading, setHeading] = useState("Dashboard");
  const [inMobileMood, setInMobileMood] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(true); // Track login status
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Function to handle logout
  const handleLogout = () => {
    // Clear authentication data (for example, localStorage or token)
    localStorage.removeItem("authToken"); // Assuming you're storing authToken in localStorage

    // Update login state
    setIsLoggedIn(false);

    // Redirect user to login page
    navigate("/login");
  };

  const dashboardMenus = [
    {
      title: "Dashboard",
      icon: FaTachometerAlt,
      pageLink: () =>
        setPage(<Dashboard Userid={user_id} Useremail={user_email} />) &&
        setHeading("Dashboard"),
    },
    {
      title: "Investments",
      icon: FaChartLine,
      pageLink: () =>
        setPage(<Investment UserEmail={user_email} />) &&
        setHeading("Investments"),
    },
    {
      title: "Profit Rate",
      icon: MdTrendingUp,
      pageLink: () => setPage(<Profits />),
    },
    {
      title: "Plans",
      icon: FaClipboardList,
      pageLink: () => setPage(<Plans UserEmail={user_email} />),
    },
    {
      title: "Refers",
      icon: FiUsers,
      pageLink: () => setPage(<Refers />),
    },
    {
      title: "Accounts",
      icon: FaUsers,
      pageLink: () => setPage(<Account setPage={setPage} userId={user_id} />),
    },
    {
      title: "Transactions",
      icon: FaMoneyBillWave,
      pageLink: () => setPage(<Transactions />),
    },
    {
      title: "Settings",
      icon: FaCog,
      pageLink: () => setPage(<Settings />),
    },
  ];

  const toggleMobileMood = () => setInMobileMood((prev) => !prev);

  return (
    <div>
      <section>
        <div className="container flex gap-2 lg:p-[10px] items-center justify-center">
          {/* Sidebar for Desktop */}
          <div className="container_part_1 hidden lg:block w-[20%] h-[96vh] overflow-hidden bg-gray-900 lg:rounded-2xl flex flex-col shadow-[0px_4px_10px_rgba(255,255,255,0.25)]">
            <div className="logo_box max-w-[160px] pt-[20px] pl-[20px]">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="devider w-[100%] h-[0.5px] bg-gray-800 mt-2"></div>
            <div className="menu_box mt-2 ml-6">
              <ul>
                {dashboardMenus.map((menu, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="menu_box flex items-center justify-center gap-2 pt-6">
                      <menu.icon />
                      <button
                        onClick={menu.pageLink}
                        className="text-[#fff] hover:text-[#ff9100] active:text-[#ff9100]"
                      >
                        {menu.title}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="text-box mt-[20px] flex gap-2 items-center">
                {isLoggedIn && (
                  <button
                    className="text-white p-2 rounded text-[14px] bg-red-500 flex items-center gap-2"
                    onClick={handleLogout}
                  >
                    <IoPower /> Logout
                  </button>
                )}

                <button
                  className="text-white p-2 rounded text-[14px] bg-green-500 flex items-center gap-2"
                  onClick={() => setPage(<Contact />)}
                >
                  <FaBeer /> Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Drawer */}
          <div
            className={`mobile_drawer absolute ${
              inMobileMood ? "block" : "hidden"
            } z-[200000000000000] top-0 left-0 lg:hidden w-[300px] h-[100%] overflow-hidden bg-gray-900 rounded-2xl flex flex-col shadow-[0px_4px_10px_rgba(255,255,255,0.25)]`}
          >
            <IoClose
              className="absolute top-6 left-65"
              color="white"
              size={26}
              onClick={toggleMobileMood}
            />
            <div className="logo_box max-w-[160px] pt-[20px] pl-[20px]">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="devider w-[100%] h-[0.5px] bg-gray-800 mt-2"></div>
            <div className="menu_box mt-2 ml-6">
              <ul>
                {dashboardMenus.map((menu, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="menu_box flex items-center justify-center gap-2 pt-6">
                      <menu.icon />
                      <button
                        onClick={menu.pageLink}
                        className="text-[#fff] hover:text-[#ff9100] active:text-[#ff9100]"
                      >
                        {menu.title}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="text-box mt-[20px] flex gap-2 items-center">
                <button className="text-white p-2 rounded text-[14px] bg-red-500 flex items-center gap-2">
                  <IoPower /> Logout
                </button>
                <button
                  className="text-white p-2 rounded text-[14px] bg-green-500 flex items-center gap-2"
                  onClick={() => setPage(<Contact />)}
                >
                  <FaBeer /> Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="container_part_2 w-[100%] lg:w-[90%] h-[96vh] overflow-y-auto bg-gray-900 lg:rounded-2xl lg:shadow-[0px_4px_10px_rgba(255,255,255,0.25)]">
            <div className="title-box max-w-[160px] pt-[20px]">
              <div className="heading_box absolute top-0 bg-gray-900 z-[10] fixed w-[100%] h-[80px] flex pl-[20px]">
                <div className="text-[#fff] mt-6 text-[30px] font-bold h-[38px] flex items-center gap-3">
                  <RiMenuUnfold4Line
                    className="lg:hidden"
                    size={24}
                    onClick={toggleMobileMood}
                  />
                  <h1 className="text-2xl lg:text-[30px]">✨</h1>
                  <h1 className="text-2xl lg:text-[30px]">{heading}</h1>
                  <button
                    type="button"
                    className="text-white gap-2 bg-[#cca354] mt-2 hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:ml-160 inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
                 onClick={() => setPage(<Plans />)}
                 
                 >
                    <FaChartLine color="black" />
                    Invest Now
                  </button>
                </div>
              </div>
            </div>
            <div className="devider w-[%] h-[0.5px] bg-gray-800 mt-6"></div>
            {page}


          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
