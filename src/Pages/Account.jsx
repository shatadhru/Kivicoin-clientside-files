import { RiAccountBox2Fill } from "react-icons/ri";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
import { FiCreditCard } from "react-icons/fi"; // Add credit card icon

function Account() {
  return (
    <div className="max-w-7xl mx-auto lg:mt-6 px-4 sm:px-6 lg:px-8">
      <section className="py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-brand-gold mb-2 text-[#dfa741]">
            Account Overview
          </h1>
          <p className="text-lg">
            Welcome to your account dashboard - manage your profile, security
            settings, and preferences in one convenient location.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Wallet Section */}
          <div className="bg-white dark:bg-[#CCA354] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
            <div className="flex items-center mb-4">
              <div className="bg-brand-gold/10 p-3 rounded-lg ">
                <FiCreditCard size={56} />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Wallet Balance
              </h2>
            </div>
            <p className="mb-4">
              Your current wallet balance and available options for
              transactions.
            </p>
            <div className="space-y-3 mt-2">
              <p className="text-sm">
                <strong>Balance:</strong> $500.00
              </p>
              <div className="flex space-x-4 mt-4">
                <button className="w-1/2 py-2 px-4 bg-black text-[#CCA354] font-semibold rounded-lg hover:bg-[#333] transition duration-200">
                  Deposit
                </button>
                <button className="w-1/2 py-2 px-4 bg-black text-[#CCA354] font-semibold rounded-lg hover:bg-[#333] transition duration-200">
                  Withdraw
                </button>
              </div>
            </div>
          </div>
          {/* Profile Section */}
          <div className="bg-white dark:bg-[#CCA354] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
            <div className="flex items-center mb-4">
              <div className="bg-brand-gold/10 p-3 rounded-lg ">
                <RiAccountBox2Fill size={56} />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Profile Information
              </h2>
            </div>
            <p className="mb-4">
              Update your personal details and contact information.
            </p>
            <div className="space-y-2 mt-2">
              <p className="text-sm">
                <strong>Name:</strong> John Doe
              </p>
              <p className="text-sm">
                <strong>Email:</strong> john.doe@example.com
              </p>
            </div>
            {/* Manage Button */}
            <button className="mt-4 w-full py-2 px-4 bg-black text-[#CCA354] font-semibold rounded-lg hover:bg-[#333] transition duration-200">
              Manage Profile
            </button>
          </div>

          {/* Security Section */}
          <div className="bg-white dark:bg-[#CCA354] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
            <div className="flex items-center mb-4">
              <div className="bg-brand-gold/10 p-3 rounded-lg ">
                <AiOutlineSecurityScan size={56} />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Security Settings
              </h2>
            </div>
            <p className="mb-4">
              Manage password, two-factor authentication, and security alerts.
            </p>
            <div className="space-y-2 mt-2">
              <p className="text-sm">
                <strong>Password last updated:</strong> 3 months ago
              </p>
            </div>
            {/* Manage Button */}
            <button className="mt-8 w-full py-2 px-4 bg-black text-[#CCA354] font-semibold rounded-lg hover:bg-[#333] transition duration-200">
              Manage Security
            </button>
          </div>

          {/* Connected Accounts Section */}
          <div className="bg-white dark:bg-[#CCA354] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
            <div className="flex items-center mb-4">
              <div className="bg-brand-gold/10 p-3 rounded-lg ">
                <FaDollarSign size={52} />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Connected Services
              </h2>
            </div>
            <p className="mb-4">
              Manage third-party applications linked to your account.
            </p>
            <div className="space-y-3 mt-2">
              <p className="text-sm">No external services connected</p>
            </div>
            {/* Manage Button */}
            <button className="mt-8 w-full py-2 px-4 bg-black text-[#CCA354] font-semibold rounded-lg hover:bg-[#333] transition duration-200">
              Manage Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Account;
