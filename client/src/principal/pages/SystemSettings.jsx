import { useState } from "react";
import { RotateCcw, Zap, FileText, ChevronDown } from "lucide-react";
import SettingsHeader from "../components/SettingsHeader";

export default function SystemSettingsPage() {
  // General Preferences state
  const [generalPrefs, setGeneralPrefs] = useState({
    schoolName: "Greenfield School",
    schoolCode: "GS-2026",
    schoolMotto: "Excellence in Education",
    schoolLanguage: "English",
    timezone: "(GMT+05:00) Pakistan Standard Time",
    dateFormat: "DD MMM YYYY (12 July 2026)",
    timeFormat: "12 Hours",
    maintenanceMode: false,
  });

  // System Configuration state
  const [sysConfig, setSysConfig] = useState({
    sessionTimeout: "30",
    maxLoginAttempts: "5",
    passwordExpiry: "90",
    twoFactorAuth: true,
    allowMultipleSessions: false,
  });

  const handleGeneralChange = (field, value) => {
    setGeneralPrefs((prev) => ({ ...prev, [field]: value }));
  };

  const handleConfigChange = (field, value) => {
    setSysConfig((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <SettingsHeader
        heading=" System Settings"
        details="Configure general system preferences and school information."
      />

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Forms) */}
        <div className="lg:col-span-2 space-y-6">
          {/* General Preferences Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-semibold text-gray-900">
              General Preferences
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  School Name
                </label>
                <input
                  type="text"
                  value={generalPrefs.schoolName}
                  onChange={(e) =>
                    handleGeneralChange("schoolName", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  School Code / ID
                </label>
                <input
                  type="text"
                  value={generalPrefs.schoolCode}
                  onChange={(e) =>
                    handleGeneralChange("schoolCode", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  School Motto
                </label>
                <input
                  type="text"
                  value={generalPrefs.schoolMotto}
                  onChange={(e) =>
                    handleGeneralChange("schoolMotto", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  School Language
                </label>
                <div className="relative">
                  <select
                    value={generalPrefs.schoolLanguage}
                    onChange={(e) =>
                      handleGeneralChange("schoolLanguage", e.target.value)
                    }
                    className="w-full appearance-none px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs bg-white pr-8"
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-2.5 top-2.5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Timezone
                </label>
                <div className="relative">
                  <select
                    value={generalPrefs.timezone}
                    onChange={(e) =>
                      handleGeneralChange("timezone", e.target.value)
                    }
                    className="w-full appearance-none px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs bg-white pr-8"
                  >
                    <option value="(GMT+05:00) Pakistan Standard Time">
                      (GMT+05:00) Pakistan Standard Time
                    </option>
                    <option value="(GMT+00:00) UTC">(GMT+00:00) UTC</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-2.5 top-2.5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Date Format
                </label>
                <div className="relative">
                  <select
                    value={generalPrefs.dateFormat}
                    onChange={(e) =>
                      handleGeneralChange("dateFormat", e.target.value)
                    }
                    className="w-full appearance-none px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs bg-white pr-8"
                  >
                    <option value="DD MMM YYYY (12 July 2026)">
                      DD MMM YYYY (12 July 2026)
                    </option>
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-2.5 top-2.5 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Radio Group for Time Format */}
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-gray-700">
                Time Format
              </label>
              <div className="flex items-center space-x-6">
                <label className="inline-flex items-center text-xs text-gray-600 cursor-pointer">
                  <input
                    type="radio"
                    name="timeFormat"
                    value="12 Hours"
                    checked={generalPrefs.timeFormat === "12 Hours"}
                    onChange={(e) =>
                      handleGeneralChange("timeFormat", e.target.value)
                    }
                    className="text-indigo-600 focus:ring-indigo-500 h-3.5 w-3.5"
                  />
                  <span className="ml-2">12 Hours</span>
                </label>
                <label className="inline-flex items-center text-xs text-gray-600 cursor-pointer">
                  <input
                    type="radio"
                    name="timeFormat"
                    value="24 Hours"
                    checked={generalPrefs.timeFormat === "24 Hours"}
                    onChange={(e) =>
                      handleGeneralChange("timeFormat", e.target.value)
                    }
                    className="text-indigo-600 focus:ring-indigo-500 h-3.5 w-3.5"
                  />
                  <span className="ml-2">24 Hours</span>
                </label>
              </div>
            </div>

            {/* Maintenance Mode Toggle */}
            <div className="pt-2">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-700">
                    Maintenance Mode
                  </span>
                  <p className="text-[11px] text-gray-400">
                    System will be unavailable for other users
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    handleGeneralChange(
                      "maintenanceMode",
                      !generalPrefs.maintenanceMode,
                    )
                  }
                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    generalPrefs.maintenanceMode
                      ? "bg-indigo-600"
                      : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      generalPrefs.maintenanceMode
                        ? "translate-x-4"
                        : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-medium shadow-sm transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          {/* System Configuration Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-semibold text-gray-900">
              System Configuration
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Session Timeout (Minutes)
                </label>
                <input
                  type="number"
                  value={sysConfig.sessionTimeout}
                  onChange={(e) =>
                    handleConfigChange("sessionTimeout", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Maximum Login Attempts
                </label>
                <input
                  type="number"
                  value={sysConfig.maxLoginAttempts}
                  onChange={(e) =>
                    handleConfigChange("maxLoginAttempts", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Password Expiry (Days)
                </label>
                <input
                  type="number"
                  value={sysConfig.passwordExpiry}
                  onChange={(e) =>
                    handleConfigChange("passwordExpiry", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
                />
              </div>
            </div>

            <div className="space-y-4 pt-2">
              {/* 2FA Toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-700">
                    Enable Two-Factor Authentication
                  </span>
                  <p className="text-[11px] text-gray-400">
                    Require 2FA for admin users
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    handleConfigChange(
                      "twoFactorAuth",
                      !sysConfig.twoFactorAuth,
                    )
                  }
                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    sysConfig.twoFactorAuth ? "bg-indigo-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      sysConfig.twoFactorAuth
                        ? "translate-x-4"
                        : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Multiple Sessions Toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-700">
                    Allow Multiple Sessions
                  </span>
                  <p className="text-[11px] text-gray-400">
                    Allow users to login from multiple devices
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    handleConfigChange(
                      "allowMultipleSessions",
                      !sysConfig.allowMultipleSessions,
                    )
                  }
                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    sysConfig.allowMultipleSessions
                      ? "bg-indigo-600"
                      : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      sysConfig.allowMultipleSessions
                        ? "translate-x-4"
                        : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-medium shadow-sm transition-colors">
                Save Configuration
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (Info Widgets & Actions) */}
        <div className="space-y-6">
          {/* System Information Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
            <h2 className="text-base font-semibold text-gray-900">
              System Information
            </h2>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">System Version</span>
                <span className="font-medium text-gray-700">v2.4.1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Environment</span>
                <span className="font-medium text-gray-700">Production</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Server Time</span>
                <span className="font-medium text-gray-700">
                  12 July 2026, 10:30 AM
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Database Status</span>
                <span className="px-2 py-0.5 text-[10px] font-semibold text-emerald-600 bg-emerald-50 rounded-full">
                  Connected
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Server Status</span>
                <span className="px-2 py-0.5 text-[10px] font-semibold text-emerald-600 bg-emerald-50 rounded-full">
                  Running
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Last Backup</span>
                <span className="font-medium text-gray-700">
                  12 July 2026, 02:00 AM
                </span>
              </div>
            </div>
          </div>

          {/* Storage Usage Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
            <h2 className="text-base font-semibold text-gray-900">
              Storage Usage
            </h2>

            <div className="flex items-center space-x-6 py-2">
              {/* SVG Donut Chart */}
              <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  {/* Background Circle */}
                  <path
                    className="text-gray-100"
                    strokeWidth="3.8"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Progress Circle (49%) */}
                  <path
                    className="text-indigo-600"
                    strokeDasharray="49, 100"
                    strokeWidth="3.8"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="text-sm font-bold text-gray-900">49%</span>
                  <span className="text-[9px] text-gray-400 uppercase">
                    Used
                  </span>
                </div>
              </div>

              {/* Storage Legend */}
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                    <span className="text-gray-500">Used Space</span>
                  </div>
                  <span className="font-medium text-gray-700">24.5 GB</span>
                </div>

                <div className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    <span className="text-gray-500">Free Space</span>
                  </div>
                  <span className="font-medium text-gray-700">25.5 GB</span>
                </div>

                <div className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-gray-200"></span>
                    <span className="text-gray-500">Total Space</span>
                  </div>
                  <span className="font-medium text-gray-700">50 GB</span>
                </div>
              </div>
            </div>

            <div className="pt-1 text-right">
              <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
                Manage Storage &rarr;
              </button>
            </div>
          </div>

          {/* System Actions Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
            <h2 className="text-base font-semibold text-gray-900">
              System Actions
            </h2>

            <div className="space-y-2">
              <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-indigo-200 text-indigo-600 hover:bg-indigo-50 rounded-lg text-xs font-medium transition-colors">
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear Cache</span>
              </button>

              <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-indigo-200 text-indigo-600 hover:bg-indigo-50 rounded-lg text-xs font-medium transition-colors">
                <Zap className="w-3.5 h-3.5" />
                <span>Optimize Database</span>
              </button>

              <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-indigo-200 text-indigo-600 hover:bg-indigo-50 rounded-lg text-xs font-medium transition-colors">
                <FileText className="w-3.5 h-3.5" />
                <span>View System Logs</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
