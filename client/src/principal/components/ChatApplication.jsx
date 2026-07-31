import {
  ArrowLeft,
  Calendar,
  Check,
  CheckCheck,
  FileText,
  ImageIcon,
  Info,
  MessageSquare,
  Paperclip,
  Search,
  Send,
  SendIcon,
  User,
  UserRound,
  X,
} from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddMessage,
  MarkAsRead,
  startNewChat,
} from "../../slices/messageSlice";
const ChatApplication = ({ openNewMessageBox, setOpenNewMessageBox }) => {
  const dispatch = useDispatch();
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [chatSearch, setChatSearch] = useState("");
  const { conversations } = useSelector((state) => state.messages);
  const { teachers } = useSelector((state) => state.teachers);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    const newMessage = {
      _id: Date.now() + 1,
      sentBy: "principal",
      image: "",
      document: "",
      text: message.trim(),
      createdAt: new Date().toISOString(),
      isRead: false,
    };
    dispatch(AddMessage(newMessage));
    setMessage("");
  };
  const selectedTeacherDetails = teachers.find(
    (teacher) => teacher._id === selectedConversation?.teacherId,
  );
  const teacherConversations = conversations?.filter(
    (conversation) =>
      conversation.teacherId === selectedConversation?.teacherId,
  );

  const teacherDetails = { ...selectedTeacherDetails, teacherConversations };
  const conversation = teacherDetails?.teacherConversations?.[0];
  const firstMessage = conversation?.messages?.[0];
  const allImages =
    teacherDetails?.teacherConversations
      ?.flatMap((conversation) => conversation.messages || [])
      .filter((message) => message.image)
      .map((message) => message.image) || [];

  const allDocuments =
    teacherDetails?.teacherConversations
      ?.flatMap((conversation) => conversation.messages || [])
      .filter((message) => message.document)
      .map((message) => message.document) || [];
  const docsAndImageArray = [...allImages, ...allDocuments];

  const handleSelectedConversation = (conversation) => {
    setSelectedConversation(conversation);
    dispatch(MarkAsRead(conversation));
  };

  const handleNewChatFormSubmit = (e) => {
    e.preventDefault();
    if (!selectedTeacher) {
      alert("please select a teacher to send message");
      return;
    }
    if (!newMessage.trim()) {
      alert("Please write a message");
      return;
    }

    const newConversations = [
      {
        _id: Date.now(),
        teacherId: Number(selectedTeacher),
        principalId: 1,
        messages: [
          {
            _id: Date.now() + 1,
            sentBy: "principal",
            image: "",
            document: "",
            text: newMessage.trim(),
            createdAt: new Date().toISOString(),
            isRead: false,
          },
        ],
      },
    ];
    dispatch(startNewChat(newConversations));
    setSelectedConversation(newConversations);
    // Reset form
    setSelectedTeacher("");
    setNewMessage("");
    console.log(newConversations);
    setOpenNewMessageBox(false);
  };

  return (
    <div className="mt-1 flex h-[85vh] min-h-0 flex-col overflow-hidden">
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
                value={chatSearch}
                onChange={(e) => setChatSearch(e.target.value)}
                placeholder="Search conversations..."
                className="w-full border border-slate-200 pl-10 p-3 text-sm outline-none transition "
              />
            </div>
          </div>

          {/* Conversation List */}
          <div className="min-h-0 flex-1 overflow-y-auto">
            {conversations.map((conversation) => {
              const teacher = teachers.find(
                (teacher) => teacher._id === conversation.teacherId,
              );
              const lastMessage =
                conversation?.messages?.[conversation.messages.length - 1];
              const unreadMessages = conversation.messages?.filter(
                (message) => message.isRead === false,
              ).length;

              return (
                <button
                  key={conversation._id}
                  onClick={() => handleSelectedConversation(conversation)}
                  className={`flex w-full items-center gap-3 border-b border-slate-100 p-3 cursor-pointer text-left transition ${
                    selectedConversation?._id === conversation._id
                      ? "bg-blue-50"
                      : "hover:bg-slate-50"
                  }`}
                >
                  {/* Avatar */}
                  <div className="relative shrink-0">
                    <img
                      src={teacher?.profileImage}
                      alt={teacher?.firstName + teacher?.lastName}
                      className="h-11 w-11 rounded-full object-cover"
                    />

                    {teacher?.isOnline && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="truncate text-sm font-semibold text-slate-800">
                        {teacher?.firstName + " " + teacher?.lastName}
                      </h3>

                      <span className="shrink-0 text-[10px] text-slate-400">
                        {new Date(lastMessage?.createdAt).toDateString()}
                      </span>
                    </div>

                    <div className="mt-1 flex items-center justify-between gap-2">
                      <p className="truncate text-xs text-slate-400">
                        {lastMessage?.text}
                      </p>

                      {unreadMessages > 0 && (
                        <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 px-1.5 text-[10px] font-bold text-white">
                          {unreadMessages}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Chat Window */}
        {selectedConversation ? (
          <section className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-slate-200 shadow-sm">
            {/* Chat Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-slate-100 bg-white p-2">
              <div className="flex min-w-0 items-center gap-2">
                {/* Mobile Back */}
                <button
                  onClick={() => setSelectedConversation(null)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 lg:hidden"
                >
                  <ArrowLeft size={19} />
                </button>

                {/* Profile Image */}
                <div className="relative shrink-0">
                  <img
                    src={teacherDetails?.profileImage || "/default-avatar.png"}
                    alt={`${teacherDetails?.firstName || ""} ${
                      teacherDetails?.lastName || ""
                    }`}
                    className="h-10 w-10 rounded-full object-cover"
                  />

                  {teacherDetails?.isOnline && (
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                  )}
                </div>

                {/* Teacher Details */}
                <div className="min-w-0">
                  <h2 className="truncate text-sm font-bold text-slate-800">
                    {teacherDetails?.firstName} {teacherDetails?.lastName}
                  </h2>

                  <p className="text-xs text-slate-400">
                    {teacherDetails?.isOnline ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="min-h-0 flex-1 overflow-y-auto bg-slate-50/50 p-4">
              {conversations.length > 0 ? (
                <>
                  {/* Conversation Start Date */}
                  {firstMessage?.createdAt && (
                    <div className="mb-4 flex items-center gap-3">
                      <div className="h-px flex-1 bg-slate-200" />

                      <span className="flex shrink-0 items-center gap-1.5 text-[10px] font-semibold text-slate-400">
                        <Calendar size={12} />

                        {new Date(firstMessage.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          },
                        )}
                      </span>

                      <div className="h-px flex-1 bg-slate-200" />
                    </div>
                  )}

                  {/* Messages */}
                  <div className="h-full space-y-2">
                    {teacherConversations.length > 0 ? (
                      teacherConversations.map((conversation) => {
                        return (
                          <div key={conversation._id} className="space-y-2">
                            {conversation.messages?.map((message) => (
                              <div
                                key={message._id}
                                className={`flex ${
                                  message.sentBy == "teacher"
                                    ? "justify-start"
                                    : "justify-end"
                                }`}
                              >
                                <div
                                  className={`max-w-[80%] px-4 py-3 shadow-sm md:max-w-[65%] ${
                                    message.sentBy == "teacher"
                                      ? "rounded-2xl rounded-bl-md border border-slate-200 bg-white text-slate-700"
                                      : "rounded-2xl rounded-br-md bg-blue-600 text-white"
                                  }`}
                                >
                                  {/* Message Text */}
                                  <p className="text-sm leading-5">
                                    {message.text}
                                  </p>

                                  {/* Message Time */}
                                  <div
                                    className={`mt-1.5 flex items-center justify-end gap-1 text-[10px] ${
                                      message.sentBy == "teacher"
                                        ? "text-slate-400"
                                        : "text-blue-100"
                                    }`}
                                  >
                                    <span>
                                      {message.createdAt
                                        ? new Date(
                                            message.createdAt,
                                          ).toLocaleTimeString("en-US", {
                                            hour: "numeric",
                                            minute: "2-digit",
                                          })
                                        : ""}
                                    </span>

                                    {message.isRead ? (
                                      <CheckCheck size={13} />
                                    ) : (
                                      <Check size={13} />
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        );
                      })
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <p className="text-sm text-slate-400">
                          No messages yet.
                        </p>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                /* No Messages */
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                    <MessageSquare size={24} className="text-slate-400" />
                  </div>

                  <h3 className="text-sm font-semibold text-slate-700">
                    No messages yet
                  </h3>

                  <p className="mt-1 max-w-xs text-xs text-slate-400">
                    Start the conversation by sending a message below.
                  </p>
                </div>
              )}
            </div>

            {/* Composer */}
            <div className="shrink-0 border-t border-slate-100 bg-white p-3">
              <div className="flex items-end gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2">
                {/* Message Input */}
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
                  className="max-h-24 min-h-9 flex-1 resize-none bg-transparent p-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
                {/* Document Input */}
                <label
                  htmlFor="document-upload"
                  className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl text-slate-500 transition hover:bg-white hover:text-blue-600"
                  title="Attach document"
                >
                  <Paperclip size={20} />

                  <input
                    id="document-upload"
                    type="file"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];

                      if (file) {
                        console.log("Document selected:", file);
                      }
                    }}
                  />
                </label>

                {/* Image Input */}
                <label
                  htmlFor="image-upload"
                  className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl text-slate-500 transition hover:bg-white hover:text-blue-600"
                  title="Attach image"
                >
                  <ImageIcon size={19} />

                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];

                      if (file) {
                        console.log("Image selected:", file);
                      }
                    }}
                  />
                </label>

                {/* Send */}
                <button
                  type="button"
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </section>
        ) : (
          /* No Conversation Selected */
          <section className="hidden min-w-0 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-slate-50/50 shadow-sm lg:flex">
            <div className="flex max-w-sm flex-col items-center px-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                <MessageSquare size={28} className="text-blue-500" />
              </div>

              <h2 className="text-base font-bold text-slate-800">
                Select a conversation
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Choose a teacher from the conversation list to view your
                messages.
              </p>
            </div>
          </section>
        )}

        {/* Contact Info Sidebar */}
        <aside className="hidden w-80 shrink-0 flex-col gap-2 overflow-y-auto xl:flex xl:w-80 2xl:w-96">
          {selectedTeacherDetails ? (
            <>
              {/* Profile Card */}
              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                {/* Profile Cover */}
                <div className="relative h-20 bg-linear-to-br from-blue-500 via-blue-600 to-indigo-700">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_40%)]" />
                </div>

                {/* Profile Content */}
                <div className="relative px-5 pb-5">
                  {/* Avatar */}
                  <div className="-mt-10 mb-3 flex justify-center">
                    <div className="relative">
                      <img
                        src={
                          selectedTeacherDetails?.profileImage ||
                          "/default-avatar.png"
                        }
                        alt={`${selectedTeacherDetails?.firstName || ""} ${
                          selectedTeacherDetails?.lastName || ""
                        }`}
                        className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-md"
                      />

                      {selectedTeacherDetails?.isOnline && (
                        <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500" />
                      )}
                    </div>
                  </div>

                  {/* Name */}
                  <div className="text-center">
                    <h3 className="text-base font-bold text-slate-800">
                      {selectedTeacherDetails?.firstName}{" "}
                      {selectedTeacherDetails?.lastName}
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-500">
                      {selectedTeacherDetails?.designation || "Teacher"}
                    </p>

                    <div className="mt-2 flex items-center justify-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          selectedTeacherDetails?.isOnline
                            ? "bg-emerald-500"
                            : "bg-slate-300"
                        }`}
                      />

                      <span
                        className={`text-[11px] font-medium ${
                          selectedTeacherDetails?.isOnline
                            ? "text-emerald-600"
                            : "text-slate-400"
                        }`}
                      >
                        {selectedTeacherDetails?.isOnline
                          ? "Online"
                          : "Offline"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Shared Files */}
              <div className="rounded-xl border border-slate-200 p-2 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">
                      Shared Files
                    </h3>

                    <p className="mt-0.5 text-[10px] text-slate-400">
                      Documents shared in this chat
                    </p>
                  </div>

                  <button
                    type="button"
                    className="text-[11px] font-semibold text-blue-600 transition hover:text-blue-700"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-2">
                  {docsAndImageArray?.length > 0 ? (
                    docsAndImageArray.map((item, index) => (
                      <div key={index} className="space-y-2">
                        {/* Image */}
                        {item.image && (
                          <a
                            href={item.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block overflow-hidden rounded-xl"
                          >
                            <img
                              src={item.image}
                              alt="Shared"
                              className="h-24 w-full rounded-xl object-cover"
                            />
                          </a>
                        )}

                        {/* Document */}
                        {item.document && (
                          <a
                            href={item.document}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:bg-slate-50"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-500">
                              <FileText size={20} />
                            </div>

                            <div className="min-w-0">
                              <p className="truncate text-xs font-semibold text-slate-700">
                                Shared Document
                              </p>

                              <p className="text-[10px] text-slate-400">
                                Click to open
                              </p>
                            </div>
                          </a>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center py-6 text-center">
                      <FileText size={24} className="mb-2 text-slate-300" />

                      <p className="text-xs font-medium text-slate-500">
                        No Media Shared
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* About Teacher */}
              <div className="rounded-xl border border-slate-200 p-4 shadow-sm">
                {/* Header */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
                    <Info size={15} className="text-slate-500" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-800">
                      About Teacher
                    </h3>

                    <p className="text-[10px] text-slate-400">
                      Professional information
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-3 divide-y divide-slate-100">
                  {/* Email */}
                  <div className="py-3 first:pt-0">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Email
                    </p>

                    <p className="break-all text-xs font-medium text-slate-700">
                      {selectedTeacherDetails?.email || "Not provided"}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="py-3">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Phone
                    </p>

                    <p className="text-xs font-medium text-slate-700">
                      {selectedTeacherDetails?.phone || "Not provided"}
                    </p>
                  </div>

                  {/* Address */}
                  <div className="py-3">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Address
                    </p>

                    <p className="text-xs font-medium leading-5 text-slate-700">
                      {selectedTeacherDetails?.address || "Not provided"}
                    </p>
                  </div>

                  {/* Qualification */}
                  <div className="py-3">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Qualification
                    </p>

                    <p className="text-xs font-medium text-slate-700">
                      {selectedTeacherDetails?.qualification || "Not provided"}
                    </p>
                  </div>

                  {/* Experience */}
                  <div className="py-3">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Experience
                    </p>

                    <p className="text-xs font-medium text-slate-700">
                      {selectedTeacherDetails?.experience
                        ? `${selectedTeacherDetails.experience} years`
                        : "Not provided"}
                    </p>
                  </div>

                  {/* Designation */}
                  <div className="py-3">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Designation
                    </p>

                    <p className="text-xs font-medium text-slate-700">
                      {selectedTeacherDetails?.designation || "Not provided"}
                    </p>
                  </div>

                  {/* Department */}
                  <div className="py-3">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Department
                    </p>

                    <p className="text-xs font-medium text-slate-700">
                      {selectedTeacherDetails?.department || "Not provided"}
                    </p>
                  </div>

                  {/* Salary */}
                  <div className="py-3">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Salary
                    </p>

                    <p className="text-xs font-medium text-slate-700">
                      {selectedTeacherDetails?.salary
                        ? `Rs ${selectedTeacherDetails.salary.toLocaleString()}`
                        : "Not provided"}
                    </p>
                  </div>

                  {/* Joining Date */}
                  <div className="py-3 last:pb-0">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Joined School
                    </p>

                    <p className="text-xs font-medium text-slate-700">
                      {selectedTeacherDetails?.joiningDate
                        ? new Date(
                            selectedTeacherDetails.joiningDate,
                          ).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : "Not provided"}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* No Teacher Selected */
            <div className="flex min-h-100 flex-1 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                <UserRound size={24} className="text-slate-400" />
              </div>

              <h3 className="text-sm font-bold text-slate-700">
                No Contact Selected
              </h3>

              <p className="mt-1 max-w-xs text-xs leading-5 text-slate-400">
                Select a teacher from your conversations to view their contact
                information.
              </p>
            </div>
          )}
        </aside>
      </div>

      {openNewMessageBox && (
        <div
          onClick={() => setOpenNewMessageBox(false)}
          className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-black/30 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                setOpenNewMessageBox(false);
                setSelectedTeacher("");
              }}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="mb-6 pr-10">
              <h1 className="text-sm font-bold text-slate-800">
                Select a teacher to start a new conversation
              </h1>
            </div>

            {/* Teacher Selection */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <User size={16} />
                Select Teacher
              </label>

              <select
                value={selectedTeacher}
                required
                onChange={(e) => setSelectedTeacher(e.target.value)}
                className="w-full cursor-pointer border border-slate-200 p-3 text-sm text-slate-700 outline-none "
              >
                <option value="">Choose a teacher</option>

                {teachers.map((teacher) => (
                  <option key={teacher._id} value={teacher._id}>
                    {teacher.firstName} {teacher.lastName}
                  </option>
                ))}
              </select>
            </div>

            {/* Message Composer */}
            <form
              onSubmit={handleNewChatFormSubmit}
              className="mt-2 flex items-end gap-2 rounded-2xl border border-slate-200 p-2 shadow-sm"
            >
              {/* Message Input */}
              <textarea
                rows={1}
                value={newMessage}
                required
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Start writing a message..."
                className="max-h-32 min-h-10 flex-1 resize-none bg-transparent px-2 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
              {/* Document Input */}
              <label
                htmlFor="document-upload"
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl text-slate-500 transition hover:bg-white hover:text-blue-600"
                title="Attach document"
              >
                <Paperclip size={20} />

                <input
                  id="document-upload"
                  type="file"
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];

                    if (file) {
                      console.log("Document selected:", file);
                    }
                  }}
                />
              </label>

              {/* Image Input */}
              <label
                htmlFor="image-upload"
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl text-slate-500 transition hover:bg-white hover:text-blue-600"
                title="Attach image"
              >
                <ImageIcon size={19} />

                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];

                    if (file) {
                      console.log("Image selected:", file);
                    }
                  }}
                />
              </label>

              {/* Send Button */}
              <button
                type="submit"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm transition hover:bg-blue-700 active:scale-95 cursor-pointer"
                title="Send message"
              >
                <SendIcon size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatApplication;
