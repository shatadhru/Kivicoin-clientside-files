import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Preloader from "../Components/Preloader";
import Home from "../Pages/Home";

function LoadingComponentsOfDashboard() {
  const [userData, setUserData] = useState(null); // null represents loading state
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");
    const email = localStorage.getItem("userEmail");

    if (token && userId && email) {
      setUserData({ userId, email });
    } else {
      navigate("/login"); // Redirect to login if no user data is found
    }
  }, [navigate]);

  if (userData === null) {
    return <Preloader />; // Show Preloader while loading
  }

  return <Home user_id={userData.userId} user_email={userData.email} />;
}

export default LoadingComponentsOfDashboard;
