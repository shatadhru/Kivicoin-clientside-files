import React, { useState, useEffect } from "react";
import axios from "axios";

const CryptoPrice = ({ symbol = "BTCUSDT", cryptocoinName }) => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;

  // Define colors for different cryptocurrencies
  const coinColors = {
    BTCUSDT: "text-yellow-400",
    ETHUSDT: "text-blue-400",
    BNBUSDT: "text-orange-400",
    ADAUSDT: "text-green-400",
    XRPUSDT: "text-purple-400",
    SOLUSDT: "text-red-400",
    DOGEUSDT: "text-yellow-500",
    DOTUSDT: "text-pink-400",
    MATICUSDT: "text-indigo-400",
    LTCUSDT: "text-gray-400",
    AVAXUSDT: "text-teal-400",
    SHIBUSDT: "text-yellow-300",
    UNIUSDT: "text-fuchsia-400",
    LINKUSDT: "text-blue-500",
    ALGOUSDT: "text-green-500",
    XLMUSDT: "text-cyan-400",
    TRXUSDT: "text-rose-400",
    FTMUSDT: "text-blue-300",
    VETUSDT: "text-orange-300",
    ATOMUSDT: "text-purple-500",
  };

  useEffect(() => {
    const fetchCryptoPrice = async () => {
      try {
        const response = await axios.get(API_URL);
        setPrice(response.data.price);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
        console.log(err);
      }
    };

    fetchCryptoPrice();
    const interval = setInterval(fetchCryptoPrice, 3000); // Refresh every 3 sec

    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <div className="p-4 border rounded-xl bg-gray-800  mt-2">
      <h2 className="text-lg font-bold text-white ">{cryptocoinName} Price</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p className={`${coinColors[symbol] || "text-white"}`}>
          ${parseFloat(price).toFixed(2)} USDT
        </p>
      )}
    </div>
  );
};

export default CryptoPrice;
