import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState("Hello, World!");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userEmail = localStorage.getItem("userEmail");
        if (!userEmail) return; // যদি userEmail না থাকে, তাহলে API কল করবে না

        const response = await axios.post(
          "http://localhost:5000/package/verification",
          { email: userEmail } // Data Body হিসাবে পাঠানো উচিত
        );

        setData(response.data.data); // API থেকে পাওয়া ডাটা সেট করা
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // useEffect এর মধ্যে ফাংশন কল করা
  }, []); // Dependency array খালি রাখা, যেন শুধু একবার রান হয়

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

// Custom Hook তৈরি করা (ডাটা এক্সেস করার জন্য)
export const useData = () => useContext(DataContext);
