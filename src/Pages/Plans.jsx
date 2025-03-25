import { useEffect, useState } from "react";
import Plan_Card from "../Components/Plan_Card";
import axios from "axios";
import { useData } from "../Components/Context/AuthenticateInvestor";

function Plans() {
  const [packages, setPackagesData] = useState([]);
  const { data } = useData();

  useEffect(() => {
    const fetchPackagesData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/packages/data");
        setPackagesData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPackagesData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pb-20">
      {/* Current Package Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] rounded-2xl shadow-2xl p-6 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#ffb52b] mb-6">
            Your Current Plan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-6">
            {/* Package Details */}
            <div className="space-y-4 bg-gray-800 p-6 rounded-xl">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">
                  {data.package_name}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full ${
                    data.is_Authorised ? "bg-green-500" : "bg-red-500"
                  } text-xs font-medium`}
                >
                  {data.is_Authorised ? "Active" : "Inactive"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <DetailItem label="Price" value={data.package_price} />
                <DetailItem label="Duration" value={data.package_duration} />
                <DetailItem
                  label="Start Date"
                  value={data.package_start_date}
                />
                <DetailItem label="End Date" value={data.package_end_date} />
                <DetailItem label="Discount" value={data.discount} />
                <DetailItem label="Status" value={data.package_status} />
              </div>
            </div>

            {/* Financial Overview */}
            <div className="grid grid-cols-1 gap-6">
              <MetricCard
                title="Total Profit"
                value={data.total_profit}
                color="text-green-400"
              />
              <MetricCard
                title="Total Investment"
                value={data.total_investment}
                color="text-blue-400"
              />
            </div>
          </div>
        </div>

        {/* Explore Packages Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white mb-10">
          Explore Our <span className="text-[#ffb52b]">Investment Plans</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
          {packages.length > 0 ? (
            packages.map((plandata, index) => (
              <Plan_Card key={index} {...plandata} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">Loading packages...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Reusable Detail Item Component
const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-400">{label}</p>
    <p className="text-white font-medium">{value || "-"}</p>
  </div>
);

// Reusable Metric Card Component
const MetricCard = ({ title, value, color }) => (
  <div className="bg-gray-800 p-6 rounded-xl">
    <h3 className="text-sm text-gray-400 mb-2">{title}</h3>
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
  </div>
);

export default Plans;
