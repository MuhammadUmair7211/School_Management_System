import {
  ArrowLeft,
  Calendar,
  CheckCheck,
  FileText,
  Image,
  Info,
  MoreVertical,
  Paperclip,
  Phone,
  Search,
  Send,
  Smile,
  Video,
} from "lucide-react";
import { useState } from "react";

const ChatApplication = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [message, setMessage] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Sarah Ahmed",
      role: "Mathematics Teacher",
      avatar: "https://i.pravatar.cc/100?img=47",
      lastMessage: "I have uploaded the exam results.",
      time: "10:30 AM",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "Ahmed Khan",
      role: "Science Teacher",
      avatar: "https://i.pravatar.cc/100?img=12",
      lastMessage: "Please review the examination schedule.",
      time: "Yesterday",
      unread: 0,
      online: true,
    },
    {
      id: 3,
      name: "Ayesha Malik",
      role: "English Teacher",
      avatar: "https://i.pravatar.cc/100?img=32",
      lastMessage: "Can you please share the meeting notes?",
      time: "Yesterday",
      unread: 1,
      online: false,
    },
    {
      id: 4,
      name: "Bilal Hussain",
      role: "Computer Science Teacher",
      avatar: "https://i.pravatar.cc/100?img=11",
      lastMessage: "Regarding the computer lab schedule.",
      time: "May 30",
      unread: 0,
      online: false,
    },
    {
      id: 5,
      name: "Sara Noor",
      role: "Class Teacher - 8A",
      avatar: "https://i.pravatar.cc/100?img=44",
      lastMessage: "Attendance report has been submitted.",
      time: "May 29",
      unread: 3,
      online: true,
    },
    {
      id: 6,
      name: "Usman Tariq",
      role: "Physical Education",
      avatar: "https://i.pravatar.cc/100?img=13",
      lastMessage: "Sports day arrangements are ready.",
      time: "May 28",
      unread: 0,
      online: false,
    },
  ];

  const activeConversation =
    conversations.find(
      (conversation) => conversation.id === selectedConversation,
    ) || conversations[0];

  const messages = [
    {
      id: 1,
      sender: "them",
      text: "Assalamualaikum Sir, I have completed the Mathematics exam results.",
      time: "10:25 AM",
    },
    {
      id: 2,
      sender: "me",
      text: "Walaikumsalam Sarah. Great! Please upload the final results to the system.",
      time: "10:26 AM",
      read: true,
    },
    {
      id: 3,
      sender: "them",
      text: "Sure Sir. I have uploaded the file. Please review it when you get a chance.",
      time: "10:27 AM",
    },
    {
      id: 4,
      sender: "me",
      text: "Thank you. I will review the results shortly.",
      time: "10:28 AM",
      read: true,
    },
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    console.log("Sending:", message);
    setMessage("");
  };

  return (
    <div className="mt-2 flex h-full min-h-0 flex-col overflow-hidden">
      {/* Main Chat Area */}
      <div className="flex min-h-0 flex-1 gap-2">
        {/* Conversations */}
        <aside
          className={`${
            selectedConversation ? "hidden lg:flex" : "flex"
          } w-full shrink-0 flex-col overflow-hidden rounded-xl border border-slate-200 shadow-sm lg:w-80 xl:w-96`}
        >
          {/* Search */}
          <div className="shrink-0 border-b border-slate-100 p-2">
            <div className="relative">
              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full border border-slate-200 pl-10 p-3 text-sm outline-none transition "
              />
            </div>
          </div>

          {/* Conversation List */}
          <div className="min-h-0 flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`flex w-full items-center gap-3 border-b border-slate-100 p-3 text-left transition ${
                  activeConversation.id === conversation.id
                    ? "bg-blue-50"
                    : "hover:bg-slate-50"
                }`}
              >
                {/* Avatar */}
                <div className="relative shrink-0">
                  <img
                    src={conversation.avatar}
                    alt={conversation.name}
                    className="h-11 w-11 rounded-full object-cover"
                  />

                  {conversation.online && (
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                  )}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="truncate text-sm font-semibold text-slate-800">
                      {conversation.name}
                    </h3>

                    <span className="shrink-0 text-[10px] text-slate-400">
                      {conversation.time}
                    </span>
                  </div>

                  <div className="mt-1 flex items-center justify-between gap-2">
                    <p className="truncate text-xs text-slate-400">
                      {conversation.lastMessage}
                    </p>

                    {conversation.unread > 0 && (
                      <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 px-1.5 text-[10px] font-bold text-white">
                        {conversation.unread}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Chat Window */}
        <section
          className={`${
            selectedConversation ? "flex" : "hidden lg:flex"
          } min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-slate-200 shadow-sm`}
        >
          {/* Chat Header */}
          <div className="flex shrink-0 items-center justify-between border-b border-slate-100 p-3">
            <div className="flex min-w-0 items-center gap-3">
              {/* Mobile Back */}
              <button
                onClick={() => setSelectedConversation(null)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 lg:hidden"
              >
                <ArrowLeft size={19} />
              </button>

              <div className="relative shrink-0">
                <img
                  src={activeConversation.avatar}
                  alt={activeConversation.name}
                  className="h-10 w-10 rounded-full object-cover"
                />

                {activeConversation.online && (
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                )}
              </div>

              <div className="min-w-0">
                <h2 className="truncate text-sm font-bold text-slate-800">
                  {activeConversation.name}
                </h2>

                <p className="truncate text-xs text-slate-400">
                  {activeConversation.online
                    ? "Online"
                    : activeConversation.role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button className="hidden h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 sm:flex">
                <Phone size={17} />
              </button>

              <button className="hidden h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 sm:flex">
                <Video size={18} />
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="min-h-0 flex-1 overflow-y-auto bg-slate-50/50 p-4 md:p-6">
            {/* Date */}
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200" />

              <span className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400">
                <Calendar size={12} />
                May 31, 2024
              </span>

              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="space-y-4">
              {messages.map((item) => (
                <div
                  key={item.id}
                  className={`flex ${
                    item.sender === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] md:max-w-[65%] ${
                      item.sender === "me"
                        ? "rounded-2xl rounded-br-md bg-blue-600 text-white"
                        : "rounded-2xl rounded-bl-md border border-slate-200 bg-white text-slate-700"
                    } px-4 py-3 shadow-sm`}
                  >
                    <p className="text-sm leading-5">{item.text}</p>

                    <div
                      className={`mt-1.5 flex items-center justify-end gap-1 text-[10px] ${
                        item.sender === "me"
                          ? "text-blue-100"
                          : "text-slate-400"
                      }`}
                    >
                      <span>{item.time}</span>

                      {item.sender === "me" && <CheckCheck size={13} />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Composer */}
          <div className="shrink-0 border-t border-slate-100 bg-white p-3">
            <div className="flex items-end gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-500/10">
              <div className="flex items-center gap-1">
                <button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-white hover:text-slate-600">
                  <Smile size={18} />
                </button>

                <button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-white hover:text-slate-600">
                  <Paperclip size={18} />
                </button>

                <button className="hidden h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-white hover:text-slate-600 sm:flex">
                  <Image size={18} />
                </button>
              </div>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                rows={1}
                placeholder="Type a message..."
                className="max-h-24 min-h-9 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              <button
                onClick={handleSendMessage}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-700"
              >
                <Send size={16} />
              </button>
            </div>

            <p className="mt-1.5 hidden text-[10px] text-slate-400 sm:block">
              Press Enter to send · Shift + Enter for a new line
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <aside className="hidden lg:w-80 xl:w-96 shrink-0 flex-col gap-2 xl:flex">
          {/* Contact Card */}
          <div className="rounded-xl border border-slate-200 p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-800">Contact Info</h3>

              <button className="text-slate-400 hover:text-slate-600">
                <MoreVertical size={17} />
              </button>
            </div>

            <div className="text-center">
              <div className="relative mx-auto mb-3 w-fit">
                <img
                  src={activeConversation.avatar}
                  alt={activeConversation.name}
                  className="h-20 w-20 rounded-full object-cover ring-4 ring-blue-50"
                />

                {activeConversation.online && (
                  <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500" />
                )}
              </div>

              <h3 className="text-sm font-bold text-slate-800">
                {activeConversation.name}
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                {activeConversation.role}
              </p>

              {activeConversation.online && (
                <span className="mt-2 inline-flex rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-600">
                  ● Online
                </span>
              )}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              <button className="flex flex-col items-center gap-1.5 rounded-xl bg-blue-50 py-3 text-blue-600 transition hover:bg-blue-100">
                <Phone size={17} />
                <span className="text-[10px] font-semibold">Call</span>
              </button>

              <button className="flex flex-col items-center gap-1.5 rounded-xl bg-violet-50 py-3 text-violet-600 transition hover:bg-violet-100">
                <Video size={17} />
                <span className="text-[10px] font-semibold">Video</span>
              </button>
            </div>
          </div>

          {/* Shared Media */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-800">Shared Files</h3>

              <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">
                View All
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="flex h-16 items-center justify-center rounded-lg bg-red-50 text-red-500">
                <FileText size={22} />
              </div>

              <div className="flex h-16 items-center justify-center rounded-lg bg-blue-50 text-blue-500">
                <FileText size={22} />
              </div>

              <div className="flex h-16 items-center justify-center rounded-lg bg-emerald-50 text-emerald-500">
                <Image size={22} />
              </div>
            </div>
          </div>

          {/* About */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Info size={16} className="text-slate-400" />

              <h3 className="text-sm font-bold text-slate-800">About</h3>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Email
                </p>

                <p className="mt-1 text-xs text-slate-600">
                  sarah.ahmed@school.com
                </p>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Phone
                </p>

                <p className="mt-1 text-xs text-slate-600">+92 300 1234567</p>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Department
                </p>

                <p className="mt-1 text-xs text-slate-600">Mathematics</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ChatApplication;
