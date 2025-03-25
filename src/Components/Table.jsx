import React from "react";
import Packages_table_data from "./Packages_table_data"; // Import your data component

function Table() {
  return (
    <table
      style={{ width: "100%", borderCollapse: "collapse" }}
      className="mt-10 "
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
            Profit
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
        {/* Render the dynamic rows from Packages_table_data */}
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
        <Packages_table_data package_Name="Package 1" investment= "100"  profit="10" profit_rate="100" />
      </tbody>
    </table>
  );
}

export default Table;
