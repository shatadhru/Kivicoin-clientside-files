import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Preloader from "../Components/Preloader";
import Home from "../Pages/Home";

function Loading_components_of_dashboard() {
  const [userdata, setUserdata] = useState(null); // null represents loading state
  const [user_id, setUser_id] = useState("");
  const [user_email, set_user_email] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");
    const email = localStorage.getItem("userEmail");

    if (token && userId && email) {
      setUserdata({ userId, email });
      setUser_id(userId);
      set_user_email(email);
    } else {
      // If no data found, redirect to login page
      navigate("/login");
    }
  }, [navigate]);

  if (userdata === null) {
    return <Preloader />; // Show Preloader while loading
  }

  return <Home user_id={user_id} user_email={user_email} />;
}

export default Loading_components_of_dashboard;
