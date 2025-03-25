import React, { useState } from "react";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState("public");
  const [accountStatus, setAccountStatus] = useState(true);
  const [language, setLanguage] = useState("English");
  const [security, setSecurity] = useState("high");
  const [theme, setTheme] = useState("light");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, like making an API call to save the settings.
    alert("Settings updated successfully!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-brand-gold mb-2">Settings</h1>
          <p className="text-lg">
            Update your account settings including notifications, privacy, and
            more.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Notification Control Section */}
          <div className="bg-[#CCA354] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Notification Control
            </h2>
            <p className="mb-4">
              Manage your email and app notifications preferences.
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Enable Notifications
              </label>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setNotifications(true)}
                  className={`${
                    notifications ? "bg-black text-white" : "bg-green-600"
                  } py-2 px-4 rounded-md`}
                >
                  Enabled
                </button>
                <button
                  onClick={() => setNotifications(false)}
                  className={`${
                    !notifications ? "bg-black text-white" : "bg-red-600"
                  } py-2 px-4 rounded-md`}
                >
                  Disabled
                </button>
              </div>
            </div>
            <button
              className="bg-black text-white py-2 px-4 rounded-md"
              onClick={() => alert("Notification settings updated!")}
            >
              Save Notifications
            </button>
          </div>

          {/* Privacy Settings Section */}
          <div className="bg-[#CCA354] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Privacy Settings
            </h2>
            <p className="mb-4">
              Control who can view your profile and personal information.
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Profile Visibility
              </label>
              <select
                value={privacy}
                onChange={(e) => setPrivacy(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="friends">Friends Only</option>
              </select>
            </div>
            <button
              className="bg-black text-white py-2 px-4 rounded-md"
              onClick={() => alert("Privacy settings updated!")}
            >
              Save Privacy Settings
            </button>
          </div>

          {/* Account Preferences Section */}
          <div className="bg-[#CCA354] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Account Preferences
            </h2>
            <p className="mb-4">
              Set your preferences for your account status and settings.
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Account Status
              </label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setAccountStatus(true)}
                  className={`${
                    accountStatus ? "bg-black text-white" : "bg-green-600"
                  } py-2 px-4 rounded-md`}
                >
                  Active
                </button>
                <button
                  onClick={() => setAccountStatus(false)}
                  className={`${
                    !accountStatus ? "bg-black text-white" : "bg-red-600"
                  } py-2 px-4 rounded-md`}
                >
                  Deactivated
                </button>
              </div>
            </div>
            <button
              className="bg-black text-white py-2 px-4 rounded-md"
              onClick={() => alert("Account preferences updated!")}
            >
              Save Preferences
            </button>
          </div>

          {/* Language Preferences Section */}
          <div className="bg-[#CCA354] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Language Preferences
            </h2>
            <p className="mb-4">Choose your preferred language.</p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Select Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
            </div>
            <button
              className="bg-black text-white py-2 px-4 rounded-md"
              onClick={() => alert("Language preferences updated!")}
            >
              Save Language Preferences
            </button>
          </div>

          {/* Security Settings Section */}
          <div className="bg-[#CCA354] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Security Settings
            </h2>
            <p className="mb-4">Control your account security settings.</p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Security Level
              </label>
              <select
                value={security}
                onChange={(e) => setSecurity(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <button
              className="bg-black text-white py-2 px-4 rounded-md"
              onClick={() => alert("Security settings updated!")}
            >
              Save Security Settings
            </button>
          </div>

          {/* Theme Settings Section */}
          <div className="bg-[#CCA354] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Theme Settings
            </h2>
            <p className="mb-4">Choose your theme preference.</p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Select Theme
              </label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <button
              className="bg-black text-white py-2 px-4 rounded-md"
              onClick={() => alert("Theme settings updated!")}
            >
              Save Theme Settings
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Settings;
