import React, { useState } from "react";

function Withdrawal() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errors, setErrors] = useState({});
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = {
    "bank-transfer": {
      name: "Bank Transfer",
      processingTime: "2-5 Business Days",
      fee: "1.5%",
      minimum: 100,
      description: "Direct transfer to your registered bank account",
    },
    paypal: {
      name: "PayPal",
      processingTime: "Instant",
      fee: "2.9% + $0.30",
      minimum: 20,
      description: "Withdraw to your PayPal account",
    },
    crypto: {
      name: "Crypto Wallet",
      processingTime: "15-30 Minutes",
      fee: "0.5%",
      minimum: 10,
      description: "BTC/ETH/USDT withdrawals",
    },
    skrill: {
      name: "Skrill",
      processingTime: "24 Hours",
      fee: "1.0%",
      minimum: 50,
      description: "E-wallet transfers",
    },
  };

  const validateForm = () => {
    const newErrors = {};
    const numericAmount = parseFloat(amount);

    if (!amount || isNaN(numericAmount)) {
      newErrors.amount = "Please enter a valid amount";
    } else if (numericAmount <= 0) {
      newErrors.amount = "Amount must be positive";
    } else if (selectedMethod && numericAmount < selectedMethod.minimum) {
      newErrors.amount = `Minimum withdrawal: $${selectedMethod.minimum}`;
    }

    if (!paymentMethod) {
      newErrors.paymentMethod = "Please select a payment method";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleMethodChange = (e) => {
    const method = e.target.value;
    setPaymentMethod(method);
    setSelectedMethod(method ? paymentMethods[method] : null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle withdrawal submission
      console.log({
        amount,
        paymentMethod,
        details: paymentMethods[paymentMethod],
      });
    }
  };

  // Sample transaction data
  const recentWithdrawals = [
    {
      date: "2024-03-01",
      amount: 1500,
      method: "Bank Transfer",
      status: "Completed",
      fee: "$22.50",
    },
    {
      date: "2024-02-28",
      amount: 0.5,
      method: "Crypto",
      status: "Processing",
      fee: "0.0025 BTC",
    },
    {
      date: "2024-02-25",
      amount: 500,
      method: "PayPal",
      status: "Completed",
      fee: "$14.80",
    },
    {
      date: "2024-02-22",
      amount: 200,
      method: "Skrill",
      status: "Completed",
      fee: "$2.00",
    },
  ];

  const pendingWithdrawals = recentWithdrawals.filter(
    (withdrawal) => withdrawal.status === "Processing"
  );

  return (
    <div className="min-h-screen bg-gray-900 text-black">
      <section className="container mx-auto px-4 py-8">
        <div className="bg-[#cca354] rounded-lg p-6 mb-8 shadow-lg">
          <div className="flex items-center mb-6">
            <div className="bg-black p-3 rounded-full mr-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Request Withdrawal</h1>
              <p className="text-sm text-black opacity-80">
                Fast and Secure Withdrawals - Your Funds, Anytime, Anywhere!
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Amount ($)
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full p-3 rounded-lg border border-black focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Enter amount"
                  step="0.01"
                />
                {errors.amount && (
                  <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Payment Method
                </label>
                <select
                  value={paymentMethod}
                  onChange={handleMethodChange}
                  className="w-full p-3 rounded-lg border border-black focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                >
                  <option value="">Select method</option>
                  {Object.entries(paymentMethods).map(([key, method]) => (
                    <option key={key} value={key}>
                      {method.name} (Min: ${method.minimum})
                    </option>
                  ))}
                </select>
                {errors.paymentMethod && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.paymentMethod}
                  </p>
                )}
              </div>
            </div>

            {selectedMethod && (
              <div className="bg-gray-900 text-white p-4 rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="font-semibold">Processing Time</p>
                    <p>{selectedMethod.processingTime}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Transaction Fee</p>
                    <p>{selectedMethod.fee}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Minimum Amount</p>
                    <p>${selectedMethod.minimum}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Description</p>
                    <p>{selectedMethod.description}</p>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full md:w-auto bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Request Withdrawal
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#cca354] rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Recent Withdrawals</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Amount</th>
                    <th className="pb-2 hidden md:table-cell">Method</th>
                    <th className="pb-2">Fee</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentWithdrawals.map((withdrawal, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="py-3">{withdrawal.date}</td>
                      <td className="py-3">
                        $
                        {typeof withdrawal.amount === "number"
                          ? withdrawal.amount.toLocaleString(undefined, {
                              maximumFractionDigits: 2,
                            })
                          : withdrawal.amount}
                      </td>
                      <td className="py-3 hidden md:table-cell">
                        {withdrawal.method}
                      </td>
                      <td className="py-3">{withdrawal.fee}</td>
                      <td className="py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-sm ${
                            withdrawal.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {withdrawal.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#cca354] rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Pending Withdrawals</h2>
            {pendingWithdrawals.length === 0 ? (
              <p className="text-gray-500">No pending withdrawals</p>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Amount</th>
                    <th className="pb-2">Method</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingWithdrawals.map((withdrawal, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="py-3">{withdrawal.date}</td>
                      <td className="py-3">
                        $
                        {withdrawal.amount.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-3">{withdrawal.method}</td>
                      <td className="py-3">
                        <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm">
                          {withdrawal.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Withdrawal;
