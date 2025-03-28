import React, { useState, useEffect } from "react";
import axios from "axios";
import Packages_table_data from "./Packages_table_data"; // Import your data component

function Table({ UserEmail }) {
  const [packagesData, setPackagesData] = useState([]);

  

  // Function to fetch the package data
  const PackageData = async (email) => {
    try {
      const response = await axios.post("http://localhost:5000/packages/data/register/user", { email });
      setPackagesData(response.data.packages); // Assuming response.data contains the package data
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  // UseEffect to call the PackageData function when the component mounts or when UserEmail changes
  useEffect(() => {
    if (UserEmail) {
      PackageData(UserEmail);
    }
  }, [UserEmail]);

  return (
    <div>
      <table
        style={{ width: "100%", borderCollapse: "collapse" }}
        className="mt-10"
      >
        <thead>
          <tr>
            <th
              className="ml-2"
              style={{
                padding: "10px",
                textAlign: "left",
                border: "1px solid #ddd",
              }}
            >
              Package Name
            </th>
            <th
              className="ml-2"
              style={{
                padding: "10px",
                textAlign: "left",
                border: "1px solid #ddd",
              }}
            >
              Investment
            </th>
            <th
              className="ml-2"
              style={{
                padding: "10px",
                textAlign: "left",
                border: "1px solid #ddd",
              }}
            >
              Order ID
            </th>
            <th
              className="ml-2"
              style={{
                padding: "10px",
                textAlign: "left",
                border: "1px solid #ddd",
              }}
            >
              Profit Rate
            </th>
          </tr>
        </thead>
        <tbody>
          {packagesData.length > 0 ? (
            packagesData.map((pkg, index) => (
              <Packages_table_data
                key={index}
                package_Name={pkg.Package_Name}
                investment={pkg.price}
                profit={pkg.Order_ID}
                profit_rate={pkg.Return_Persentage}
              />
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
