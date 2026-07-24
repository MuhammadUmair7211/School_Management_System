import {
  ArrowLeft,
  Bell,
  ChevronDown,
  FileText,
  Info,
  Megaphone,
  Send,
  Users,
} from "lucide-react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddNewNotification = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    message: "",

    type: "announcement",
    priority: "medium",

    targetAudience: "all",
    targetClass: "all",
    targetSection: "all",

    publishType: "now",
    publishDate: "",
    publishTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePublish = (e) => {
    e.preventDefault();

    const newNotification = {
      _id: crypto.randomUUID(),

      receiverId: "101",
      receiverRole: "principal",

      senderId: "principal-001",
      senderRole: "principal",

      title: formData.title,
      message: formData.message,

      type: formData.type,
      priority: formData.priority,

      status: "unread",

      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    console.log("Published:", newNotification);
  };
  return (
    <div>
      <Header
        heading="Add New Notification"
        details="Create and send an announcement to your school community."
        buttonText="Back to Notifications"
        icon={<ArrowLeft size={18} />}
        onClick={() => navigate("/notifications")}
      />

      <main className="mt-2">
        <form onSubmit={handlePublish}>
          <div className="grid grid-cols-1 gap-2 xl:grid-cols-[minmax(0,1fr)_420px]">
            {/* -------------------------LEFT SIDE---------------------------- */}
            <div className="space-y-2">
              {/* -------------------BASIC INFORMATION-------------------------- */}
              <section className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                {/* Section Header */}
                <div className="border-b border-slate-100 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Megaphone size={21} />
                    </div>

                    <div>
                      <h2 className="font-bold text-slate-900">
                        Notification Details
                      </h2>

                      <p className="mt-0.5 text-sm text-slate-500">
                        Add the main information for your notification.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section Body */}
                <div className="space-y-2 p-5">
                  {/* Title */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Notification Title
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Enter a clear notification title"
                      className=" w-full border border-slate-200 bg-slate-50 p-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300"
                    />

                    <p className="mt-2 text-xs text-slate-400">
                      Keep the title short and easy to understand.
                    </p>
                  </div>

                  {/* Type + Priority */}
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    {/* Type */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Notification Type
                        <span className="ml-1 text-red-500">*</span>
                      </label>

                      <div className="relative">
                        <select
                          name="type"
                          value={formData.type}
                          onChange={handleChange}
                          className=" w-full appearance-none border border-slate-200 bg-slate-50 p-3 text-sm capitalize text-slate-700 cursor-pointer outline-none"
                        >
                          <option value="announcement">Announcement</option>
                          <option value="academic">Academic</option>
                          <option value="event">Event</option>
                          <option value="fees">Fees</option>
                          <option value="attendance">Attendance</option>
                          <option value="examination">Examination</option>
                          <option value="transport">Transport</option>
                        </select>

                        <ChevronDown
                          size={18}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Priority */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Priority
                        <span className="ml-1 text-red-500">*</span>
                      </label>

                      <div className="relative">
                        <select
                          name="priority"
                          value={formData.priority}
                          onChange={handleChange}
                          className="h-12 w-full appearance-none border border-slate-200 bg-slate-50 p-3 text-sm capitalize text-slate-700 outline-none cursor-pointer"
                        >
                          <option value="low">Low Priority</option>
                          <option value="medium">Medium Priority</option>
                          <option value="high">High Priority</option>
                        </select>

                        <ChevronDown
                          size={18}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="block text-sm font-semibold text-slate-700">
                        Message
                        <span className="ml-1 text-red-500">*</span>
                      </label>

                      <span className="text-xs text-slate-400">
                        {formData.message?.length}/500
                      </span>
                    </div>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) => {
                        if (e.target.value.length <= 500) {
                          handleChange(e);
                        }
                      }}
                      rows={4}
                      placeholder="Write your notification message here..."
                      className="w-full resize-none border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-800 outline-none"
                    />
                  </div>
                </div>
              </section>

              {/* ---------------------------AUDIENCE-------- */}
              <section className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                <div className="border-b border-slate-100 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Users size={21} />
                    </div>

                    <div>
                      <h2 className="font-bold text-slate-900">
                        Select Audience
                      </h2>

                      <p className="mt-0.5 text-sm text-slate-500">
                        Choose who should receive this notification.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                    {/* Audience */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Send To
                      </label>

                      <select
                        name="targetAudience"
                        value={formData.targetAudience}
                        onChange={handleChange}
                        className="w-full border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 outline-none cursor-pointer"
                      >
                        <option value="all">Everyone</option>
                        <option value="students">Students</option>
                        <option value="parents">Parents</option>
                        <option value="teachers">Teachers</option>
                        <option value="staff">Staff</option>
                      </select>
                    </div>

                    {/* Class */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Class
                      </label>

                      <select
                        name="targetClass"
                        value={formData.targetClass}
                        onChange={handleChange}
                        className="w-full border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 outline-none"
                      >
                        <option value="all">All Classes</option>

                        {Array.from({ length: 12 }, (_, index) => (
                          <option key={index + 1} value={index + 1}>
                            Class {index + 1}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Section */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Section
                      </label>

                      <select
                        name="targetSection"
                        value={formData.targetSection}
                        onChange={handleChange}
                        className="p-3 w-full border border-slate-200 bg-slate-50 text-sm text-slate-700 outline-none "
                      >
                        <option value="all">All Sections</option>
                        <option value="A">Section A</option>
                        <option value="B">Section B</option>
                        <option value="C">Section C</option>
                        <option value="D">Section D</option>
                      </select>
                    </div>
                  </div>

                  {/* Audience Info */}
                  <div className="mt-2 flex gap-3 border border-blue-100 bg-blue-50 p-2">
                    <Info size={18} className="mt-0.5 shrink-0 text-blue-600" />

                    <p className="text-xs leading-5 text-blue-700">
                      Your notification will be targeted to{" "}
                      <strong>
                        {formData.targetAudience === "all"
                          ? "everyone"
                          : formData.targetAudience}
                      </strong>
                      {formData.targetClass !== "all" &&
                        ` in Class ${formData.targetClass}`}
                      {formData.targetSection !== "all" &&
                        ` - Section ${formData.targetSection}`}
                      .
                    </p>
                  </div>
                </div>
              </section>

              {/* ---------------------------BOTTOM ACTIONS----------------------------- */}
              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm cursor-pointer duration-300 hover:bg-slate-50"
                >
                  <FileText size={18} />
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 cursor-pointer duration-300 hover:bg-blue-700"
                >
                  <Send size={18} />
                  Publish Notification
                </button>
              </div>
            </div>

            {/* -------------------RIGHT SIDE - LIVE PREVIEW-------------------- */}
            <aside className="xl:sticky xl:top-6 xl:h-fit">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                {/* Preview Header */}
                <div className="border-b border-slate-100 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-bold text-slate-900">Live Preview</h2>

                      <p className="mt-1 text-xs text-slate-500">
                        This is how recipients will see it.
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <Bell size={19} />
                    </div>
                  </div>
                </div>

                {/* Notification Preview */}
                <div className="p-4">
                  <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                    {/* Preview Top */}
                    <div className="bg-blue-600 p-4">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white">
                          <Bell size={21} />
                        </div>

                        <span
                          className={`rounded-full px-3 py-1.5 text-xs font-bold capitalize ${
                            formData.priority === "high"
                              ? "bg-red-500 text-white"
                              : formData.priority === "medium"
                                ? "bg-amber-400 text-slate-900"
                                : "bg-white/20 text-white"
                          }`}
                        >
                          {formData.priority}
                        </span>
                      </div>

                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-indigo-200">
                        {formData.type}
                      </p>

                      <h3 className="wrap-break-words text-xl font-bold leading-7 text-white">
                        {formData.title || "Your notification title"}
                      </h3>
                    </div>

                    {/* Preview Body */}
                    <div className="p-5">
                      {/* Audience */}
                      <div className="mb-5">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Recipients
                        </p>

                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold capitalize text-slate-600">
                            {formData.targetAudience === "all"
                              ? "Everyone"
                              : formData.targetAudience}
                          </span>

                          {formData.targetClass == "all" ? (
                            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                              All Classes
                            </span>
                          ) : (
                            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                              {formData.targetClass} Class
                            </span>
                          )}

                          {formData.targetSection == "all" ? (
                            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                              All Sections
                            </span>
                          ) : (
                            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                              {formData.targetSection} Section
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <p className="whitespace-pre-wrap wrap-break-words text-sm leading-6 text-slate-600">
                          {formData.message ||
                            "Your notification message will appear here as you type. Make sure your message is clear and informative."}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="mt-6 border-t border-slate-100 pt-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs font-semibold text-slate-600">
                              Principal Office
                            </p>

                            <p className="mt-0.5 text-[11px] text-slate-400">
                              Just now
                            </p>
                          </div>

                          <span className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                            <Bell size={13} />
                            Notification
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="mt-2 rounded-xl border border-indigo-100 bg-blue-50 p-4">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-indigo-600 shadow-sm">
                    <Info size={18} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-indigo-900">
                      Notification Tips
                    </h3>

                    <ul className="mt-2 space-y-1.5 text-xs leading-5 text-indigo-700">
                      <li>• Keep the title short and specific.</li>

                      <li>• Use high priority for urgent updates.</li>

                      <li>• Select the correct class and section.</li>

                      <li>• Include important dates in the message.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddNewNotification;
