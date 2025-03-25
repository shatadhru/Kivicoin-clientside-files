import React from "react";

function Transaction_Table() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-brand-gold mb-2">
            Transaction History
          </h1>
          <p className="text-lg">
            View the details of all your transactions in one place.
          </p>
        </header>

        <table
          style={{ width: "100%", borderCollapse: "collapse" }}
          className="mt-10"
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "10px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                }}
              >
                Transaction ID
              </th>
              <th
                style={{
                  padding: "10px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                }}
              >
                Amount
              </th>
              <th
                style={{
                  padding: "10px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                }}
              >
                Date
              </th>
              <th
                style={{
                  padding: "10px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                }}
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Replace this section with your actual transaction data */}
            <tr>
              <td
                style={{
                  padding: "10px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                }}
              >
                TX12345
              </td>
              <td
                style={{
                  padding: "10px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                }}
              >
                $500
              </td>
              <td
                style={{
                  padding: "10px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                }}
              >
                2025-03-19
              </td>
              <td
                style={{
                  padding: "10px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                }}
              >
                Completed
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "10px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                }}
              >
                TX12346
              </td>
              <td
                style={{
                  padding: "10px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                }}
              >
                $200
              </td>
              <td
                style={{
                  padding: "10px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                }}
              >
                2025-03-18
              </td>
              <td
                style={{
                  padding: "10px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                }}
              >
                Pending
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transaction_Table;
