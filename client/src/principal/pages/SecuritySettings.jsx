import SettingsHeader from "../components/SettingsHeader";

export default function SecuritySettings() {
  return (
    <div className="min-h-screen bg-gray-50/50 p-6 font-sans text-gray-700">
      {/* Page Header */}
      <SettingsHeader
        heading="Security Settings"
        details="Manage your security settings from here"
      />
      {/* Top 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Password Policy */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-gray-900">
              Password Policy
            </h2>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Minimum Length
              </label>
              <div className="relative">
                <input
                  type="number"
                  defaultValue={8}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs pr-20"
                />
                <span className="absolute right-3 top-2 text-xs text-gray-400 pointer-events-none">
                  characters
                </span>
              </div>
            </div>

            {/* Toggles */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-700">
                  Require Uppercase
                </span>
                <button
                  type="button"
                  className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none"
                >
                  <span className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-4" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-700">
                  Require Lowercase
                </span>
                <button
                  type="button"
                  className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none"
                >
                  <span className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-4" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-700">
                  Require Numbers
                </span>
                <button
                  type="button"
                  className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none"
                >
                  <span className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-4" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-700">
                  Require Special Characters
                </span>
                <button
                  type="button"
                  className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none"
                >
                  <span className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-4" />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Password Expiry (Days)
              </label>
              <input
                type="number"
                defaultValue={180}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
              />
            </div>
          </div>

          <div className="pt-2">
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-medium shadow-sm transition-colors">
              Save Password Policy
            </button>
          </div>
        </div>

        {/* Card 2: Login Security */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-gray-900">
              Login Security
            </h2>

            {/* Toggles */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-700">
                    Enable Two-Factor Authentication
                  </span>
                  <p className="text-[11px] text-gray-400">
                    Require 2FA for all admin users
                  </p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none"
                >
                  <span className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-4" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-700">
                    Allow Remember Me
                  </span>
                  <p className="text-[11px] text-gray-400">
                    Allow users to stay signed in
                  </p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none"
                >
                  <span className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-4" />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Maximum Login Attempts
              </label>
              <div className="relative">
                <input
                  type="number"
                  defaultValue={5}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs pr-16"
                />
                <span className="absolute right-3 top-2 text-xs text-gray-400 pointer-events-none">
                  attempts
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Lockout Duration (Minutes)
              </label>
              <input
                type="number"
                defaultValue={15}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Session Timeout (Minutes)
              </label>
              <input
                type="number"
                defaultValue={30}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
              />
            </div>
          </div>

          <div className="pt-2">
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-medium shadow-sm transition-colors">
              Save Login Security
            </button>
          </div>
        </div>

        {/* Card 3: Access Control */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-gray-900">
              Access Control
            </h2>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-700">
                    Admin Access Only
                  </span>
                  <p className="text-[11px] text-gray-400">
                    Restrict access to admin panel
                  </p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none"
                >
                  <span className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-4" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-700">
                    IP Whitelist
                  </span>
                  <p className="text-[11px] text-gray-400">
                    Restrict access to specific IP addresses
                  </p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none"
                >
                  <span className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-0" />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Allowed IP Addresses
              </label>
              <p className="text-[10px] text-gray-400 mb-1.5">
                Enter IP addresses (one per line)
              </p>
              <textarea
                rows={4}
                defaultValue={`192.168.1.1\n192.168.1.2`}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-mono text-gray-700 resize-none"
              />
            </div>
          </div>

          <div className="pt-2">
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-medium shadow-sm transition-colors">
              Save Access Control
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Active Sessions Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Active Sessions
          </h2>
          <p className="text-xs text-gray-400 mt-0.5">
            Manage active user sessions.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-gray-500 border-b border-gray-100">
                <th className="pb-3 font-semibold">User</th>
                <th className="pb-3 font-semibold">Device</th>
                <th className="pb-3 font-semibold">IP Address</th>
                <th className="pb-3 font-semibold">Login Time</th>
                <th className="pb-3 font-semibold">Status</th>
                <th className="pb-3 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr>
                <td className="py-3.5 font-medium text-gray-800">John Doe</td>
                <td className="py-3.5 text-gray-600">Chrome on Windows</td>
                <td className="py-3.5 text-gray-600 font-mono">
                  192.168.1.100
                </td>
                <td className="py-3.5 text-gray-600">12 July 2026, 10:30 AM</td>
                <td className="py-3.5">
                  <span className="px-2 py-0.5 text-[10px] font-semibold text-emerald-600 bg-emerald-50 rounded-full">
                    Active
                  </span>
                </td>
                <td className="py-3.5 text-right">
                  <button className="px-3 py-1 border border-red-200 text-red-500 hover:bg-red-50 rounded-md text-[11px] font-medium transition-colors">
                    Logout
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pt-2">
          <button className="px-3.5 py-1.5 border border-red-200 text-red-500 hover:bg-red-50 rounded-lg text-xs font-medium transition-colors">
            Logout All Other Sessions
          </button>
        </div>
      </div>
    </div>
  );
}
