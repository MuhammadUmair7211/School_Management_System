import { ChevronDown, Calendar } from "lucide-react";
import SettingsHeader from "../components/SettingsHeader";

export default function BackupSettings() {
  return (
    <div className="min-h-screen bg-gray-50/50 p-6 font-sans text-gray-700">
      {/* Top Row: Create New Backup + Backup Information */}
      <SettingsHeader
        heading="Backup Settings"
        details="Backup your data or create a restore file"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Block: Create New Backup */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-5">
          <h2 className="text-base font-semibold text-gray-900">
            Create New Backup
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Select Data to Backup Checkboxes */}
            <div className="space-y-3">
              <label className="block text-xs font-semibold text-gray-700">
                Select Data to Backup
              </label>
              <div className="bg-gray-50/70 rounded-xl p-4 space-y-3 border border-gray-100">
                {/* Database */}
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                  />
                  <div>
                    <span className="block text-xs font-semibold text-gray-800">
                      Database
                    </span>
                    <span className="text-[11px] text-gray-400">
                      Complete database backup
                    </span>
                  </div>
                </label>

                {/* Files */}
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                  />
                  <div>
                    <span className="block text-xs font-semibold text-gray-800">
                      Files
                    </span>
                    <span className="text-[11px] text-gray-400">
                      Uploaded files and documents
                    </span>
                  </div>
                </label>

                {/* Images */}
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                  />
                  <div>
                    <span className="block text-xs font-semibold text-gray-800">
                      Images
                    </span>
                    <span className="text-[11px] text-gray-400">
                      School images and media files
                    </span>
                  </div>
                </label>

                {/* Configurations */}
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                  />
                  <div>
                    <span className="block text-xs font-semibold text-gray-800">
                      Configurations
                    </span>
                    <span className="text-[11px] text-gray-400">
                      System configurations and settings
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Backup Description */}
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-gray-700">
                Backup Description (Optional)
              </label>
              <textarea
                rows={7}
                placeholder="Enter backup description..."
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs text-gray-700 resize-none"
              />
            </div>
          </div>

          <div className="pt-2">
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-medium shadow-sm transition-colors">
              Create Backup Now
            </button>
          </div>
        </div>

        {/* Right Block: Backup Information */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-gray-900">
              Backup Information
            </h2>

            <div className="space-y-3.5 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Last Backup</span>
                <span className="font-medium text-gray-700">
                  12 July 2026, 02:00 AM
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500">Backup Size</span>
                <span className="font-medium text-gray-700">2.45 GB</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500">Backup Type</span>
                <span className="font-medium text-gray-700">Full Backup</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500">Status</span>
                <span className="px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600 bg-emerald-50 rounded-full">
                  Completed
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button className="w-full py-2 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-medium transition-colors">
              View Backup History
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row: Recent Backups + Auto Backup Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Backups Table */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-gray-900">
              Recent Backups
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-gray-500 border-b border-gray-100">
                    <th className="pb-3 font-semibold">Backup Name</th>
                    <th className="pb-3 font-semibold">Date & Time</th>
                    <th className="pb-3 font-semibold">Type</th>
                    <th className="pb-3 font-semibold">Size</th>
                    <th className="pb-3 font-semibold">Status</th>
                    <th className="pb-3 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-gray-600">
                  {/* Row 1 */}
                  <tr>
                    <td className="py-3.5 font-medium text-gray-800">
                      backup_20260712_0200
                    </td>
                    <td className="py-3.5">12 July 2026, 02:00 AM</td>
                    <td className="py-3.5">Full Backup</td>
                    <td className="py-3.5">2.45 GB</td>
                    <td className="py-3.5">
                      <span className="px-2 py-0.5 text-[10px] font-semibold text-emerald-600 bg-emerald-50 rounded-full">
                        Completed
                      </span>
                    </td>
                    <td className="py-3.5 text-right">
                      <button className="px-3 py-1 border border-indigo-200 text-indigo-600 hover:bg-indigo-50 rounded-md text-[11px] font-medium transition-colors">
                        Download
                      </button>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr>
                    <td className="py-3.5 font-medium text-gray-800">
                      backup_20260711_0200
                    </td>
                    <td className="py-3.5">11 July 2026, 02:00 AM</td>
                    <td className="py-3.5">Full Backup</td>
                    <td className="py-3.5">2.32 GB</td>
                    <td className="py-3.5">
                      <span className="px-2 py-0.5 text-[10px] font-semibold text-emerald-600 bg-emerald-50 rounded-full">
                        Completed
                      </span>
                    </td>
                    <td className="py-3.5 text-right">
                      <button className="px-3 py-1 border border-indigo-200 text-indigo-600 hover:bg-indigo-50 rounded-md text-[11px] font-medium transition-colors">
                        Download
                      </button>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr>
                    <td className="py-3.5 font-medium text-gray-800">
                      backup_20260710_0200
                    </td>
                    <td className="py-3.5">10 July 2026, 02:00 AM</td>
                    <td className="py-3.5">Full Backup</td>
                    <td className="py-3.5">2.28 GB</td>
                    <td className="py-3.5">
                      <span className="px-2 py-0.5 text-[10px] font-semibold text-emerald-600 bg-emerald-50 rounded-full">
                        Completed
                      </span>
                    </td>
                    <td className="py-3.5 text-right">
                      <button className="px-3 py-1 border border-indigo-200 text-indigo-600 hover:bg-indigo-50 rounded-md text-[11px] font-medium transition-colors">
                        Download
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-2 text-center">
            <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
              View All Backups
            </button>
          </div>
        </div>

        {/* Auto Backup Settings */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
          <h2 className="text-base font-semibold text-gray-900">
            Auto Backup Settings
          </h2>

          <div className="space-y-4 text-xs">
            {/* Enable Switch */}
            <div className="flex items-center justify-between pb-1">
              <span className="font-semibold text-gray-700">
                Enable Auto Backup
              </span>
              <button
                type="button"
                className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none"
              >
                <span className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-4" />
              </button>
            </div>

            {/* Frequency */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Backup Frequency
              </label>
              <div className="relative">
                <select
                  defaultValue="Daily"
                  className="w-full appearance-none px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs bg-white text-gray-700 pr-8"
                >
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-2.5 top-2.5 pointer-events-none" />
              </div>
            </div>

            {/* Backup Time */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Backup Time
              </label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue="02:00 AM"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs text-gray-700 pr-8"
                />
                <Calendar className="w-3.5 h-3.5 text-gray-400 absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Keep Backups for */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Keep Backups for
              </label>
              <div className="relative">
                <input
                  type="number"
                  defaultValue={30}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs text-gray-700 pr-12"
                />
                <span className="absolute right-3 top-2 text-xs text-gray-400 pointer-events-none">
                  days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
