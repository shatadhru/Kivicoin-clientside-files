import { LineChart } from "@mui/x-charts/LineChart";
import CryptoPrice from "../Components/CryptoPrice";


function Profits() {

  const dataset = [
  { x: 1, y: 2 },
  { x: 2, y: 5.5 },
  { x: 3, y: 2 },
  { x: 5, y: 8.5 },
  { x: 8, y: 1.5 },
  { x: 10, y: 5 },
];


const cryptoList = [
  { symbol: "BTCUSDT", name: "Bitcoin" },
  { symbol: "ETHUSDT", name: "Ethereum" },
  { symbol: "BNBUSDT", name: "Binance Coin" },
  { symbol: "ADAUSDT", name: "Cardano" },
  { symbol: "XRPUSDT", name: "Ripple" },
  { symbol: "SOLUSDT", name: "Solana" },
  { symbol: "DOGEUSDT", name: "Dogecoin" },
  { symbol: "DOTUSDT", name: "Polkadot" },
  { symbol: "MATICUSDT", name: "Polygon" },
  { symbol: "LTCUSDT", name: "Litecoin" },
  { symbol: "AVAXUSDT", name: "Avalanche" },
  { symbol: "SHIBUSDT", name: "Shiba Inu" },
  { symbol: "UNIUSDT", name: "Uniswap" },
  { symbol: "LINKUSDT", name: "Chainlink" },
  { symbol: "ALGOUSDT", name: "Algorand" },
  { symbol: "XLMUSDT", name: "Stellar" },
  { symbol: "TRXUSDT", name: "Tron" },
  { symbol: "FTMUSDT", name: "Fantom" },
  { symbol: "VETUSDT", name: "VeChain" },
  { symbol: "ATOMUSDT", name: "Cosmos" },
];

  return (
    <div className="">
      <section className="mt-16 ml-2 lg:ml-16 mr-2 lg:mr-10">
        <div className="flex flex-col items-center mt-10 bg-[#cca354] p-6 rounded-lg m-2 lg:m-4">
          <div className="w-full max-w-3xl p-4 shadow-lg rounded-lg">
            <h1 className="text-black text-xl  font-bold text-center">
              Our Profit Rate{" "}
            </h1>

            <p className="text-[12px] text-center
            ">
              We maintain a balanced profit rate, ensuring fairness and
              sustainability.
            </p>
            <div className="graph-of-profit -z-10 overflow-hidden">
              <LineChart
                dataset={dataset}
                xAxis={[{ dataKey: "x", label: "Time", stroke: "white" }]}
                series={[
                  { dataKey: "y", label: "Profits ($)", color: "white" },
                ]}
                height={260}
                margin={{ left: 0, right: 0, top: 30, bottom: 50 }}
                grid={{
                  vertical: true,
                  horizontal: true,
                  stroke: "rgba(255,255,255,0.3)",
                }}
                sx={{
                  backgroundColor: "#cca354",
                  zIndex: 1, // Reduce z-index here
                  position: "relative", // Ensure it's affected by z-index
                  "& .MuiChartsLegend-label": { fill: "white" },
                  "& .MuiChartsAxis-tickLabel": { fill: "white" },
                }}
              />
            </div>
          </div>
        </div>

        <div className="crypto_price">
          {cryptoList.map((crypto, index) => (
            <CryptoPrice
              key={index}
              symbol={crypto.symbol}
              cryptocoinName={crypto.name}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Profits;
