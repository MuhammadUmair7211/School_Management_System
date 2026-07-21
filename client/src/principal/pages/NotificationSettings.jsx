import SettingsHeader from "../components/SettingsHeader";

export default function NotificationSettings() {
  return (
    <div className="min-h-screen bg-gray-50/50 p-6 font-sans text-gray-700">
      {/* Page Header */}
      <SettingsHeader
        heading="Notification Settings"
        details="Manage how and when notifications are sent."
      />

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Notification Channels) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Email Notifications Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-semibold text-gray-900">
              Email Notifications
            </h2>

            <div className="space-y-4">
              {/* Item 1 */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-800">
                    New Student Admission
                  </span>
                  <p className="text-[11px] text-gray-400">
                    Notify when a new student is admitted
                  </p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none"
                >
                  <span className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-4" />
                </button>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-800">
                    Fee Payment
                  </span>
                  <p className="text-[11px] text-gray-400">
                    Notify when fee is paid
                  </p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none"
                >
                  <span className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-4" />
                </button>
              </div>

              {/* Item 3 */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-800">
                    Exam Results
                  </span>
                  <p className="text-[11px] text-gray-400">
                    Notify when exam results are published
                  </p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none"
                >
                  <span className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-4" />
                </button>
              </div>

              {/* Item 4 */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-800">
                    Attendance Alerts
                  </span>
                  <p className="text-[11px] text-gray-400">
                    Notify for low attendance
                  </p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none"
                >
                  <span className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-4" />
                </button>
              </div>

              {/* Item 5 */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-800">
                    System Announcements
                  </span>
                  <p className="text-[11px] text-gray-400">
                    Notify for system announcements
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
          </div>

          {/* SMS Notifications Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-semibold text-gray-900">
              SMS Notifications
            </h2>

            <div className="space-y-4">
              {/* Item 1 */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-800">
                    Fee Payment Reminders
                  </span>
                  <p className="text-[11px] text-gray-400">
                    Send SMS for fee payment reminders
                  </p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none"
                >
                  <span className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-4" />
                </button>
              </div>

              {/* Item 2 (Off) */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-800">
                    Attendance Alerts
                  </span>
                  <p className="text-[11px] text-gray-400">
                    Send SMS for low attendance
                  </p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none"
                >
                  <span className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-0" />
                </button>
              </div>

              {/* Item 3 */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-800">
                    Exam Results
                  </span>
                  <p className="text-[11px] text-gray-400">
                    Send SMS when results are published
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
          </div>

          {/* Push Notifications Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-semibold text-gray-900">
              Push Notifications
            </h2>

            <div className="space-y-4">
              {/* Item 1 */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-800">
                    Announcements
                  </span>
                  <p className="text-[11px] text-gray-400">
                    Send push notifications for announcements
                  </p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none"
                >
                  <span className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-4" />
                </button>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-800">
                    Schedule Reminders
                  </span>
                  <p className="text-[11px] text-gray-400">
                    Send reminders for upcoming events
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
          </div>
        </div>

        {/* Right Column (Email Configuration Settings) */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
            <h2 className="text-base font-semibold text-gray-900">
              Email Settings
            </h2>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  SMTP Host
                </label>
                <input
                  type="text"
                  defaultValue="smtp.gmail.com"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs text-gray-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  SMTP Port
                </label>
                <input
                  type="text"
                  defaultValue="587"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs text-gray-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="info@greenfieldschool.edu.pk"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs text-gray-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  defaultValue="••••••••••••"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs text-gray-700"
                />
              </div>

              {/* SSL/TLS Switch */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-semibold text-gray-700">
                  Use SSL/TLS
                </span>
                <button
                  type="button"
                  className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none"
                >
                  <span className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-4" />
                </button>
              </div>

              <div className="pt-2">
                <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-medium shadow-sm transition-colors">
                  Test Email Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
