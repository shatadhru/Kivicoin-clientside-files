import React, { useState } from 'react';

function Deposit() {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [errors, setErrors] = useState({});

 const validateForm = () => {
   const newErrors = {};

   if (!amount || isNaN(amount)) {
     newErrors.amount = "Please enter a valid amount";
   }

   if (amount <= 0) {
     newErrors.amount = "Amount must be positive";
   }

   if (!paymentMethod) {
     newErrors.paymentMethod = "Please select a payment method";
   }

   setErrors(newErrors);

   return Object.keys(newErrors).length === 0;
 };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle deposit submission
      console.log({ amount, paymentMethod, promoCode });
    }
  };

  // Sample transaction data
  const recentDeposits = [
    { date: '2024-02-15', amount: 5000, method: 'Bank Transfer', status: 'Completed' },
    { date: '2024-02-14', amount: 2500, method: 'Credit Card', status: 'Pending' },
    { date: '2024-02-13', amount: 10000, method: 'Crypto', status: 'Completed' },
  ];

  const pendingDeposits = recentDeposits.filter(deposit => deposit.status === 'Pending');

  return (
    <div className="min-h-screen bg-gray-900 text-black" >
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold ">Make a Deposit</h1>
              <p className="text-sm text-black opacity-80">
                Secure Your Future, Multiply Your Wealth – Smart Transactions
                Start Here!
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Amount ($)
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full p-3 rounded-lg border border-black focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Enter amount"
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
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full p-3 rounded-lg border border-black focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                >
                  <option value="">Select method</option>
                  
                  <option value="crypto">Crypto</option>
                </select>
                {errors.paymentMethod && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.paymentMethod}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Promo Code (optional)
                </label>
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full p-3 rounded-lg border border-black focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Enter promo code"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Process Deposit
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#cca354] rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Recent Deposits</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Amount</th>
                    <th className="pb-2 hidden md:table-cell">Method</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentDeposits.map((deposit, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="py-3">{deposit.date}</td>
                      <td className="py-3">
                        ${deposit.amount.toLocaleString()}
                      </td>
                      <td className="py-3 hidden md:table-cell">
                        {deposit.method}
                      </td>
                      <td className="py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-sm ${
                            deposit.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {deposit.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#cca354] rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Pending Deposits</h2>
            {pendingDeposits.length === 0 ? (
              <p className="text-gray-500">No pending deposits</p>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Amount</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingDeposits.map((deposit, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="py-3">{deposit.date}</td>
                      <td className="py-3">
                        ${deposit.amount.toLocaleString()}
                      </td>
                      <td className="py-3">
                        <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm">
                          {deposit.status}
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

export default Deposit;