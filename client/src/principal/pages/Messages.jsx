import { Pen } from "lucide-react";
import Header from "../components/Header";
import ChatApplication from "../components/ChatApplication";
import { useState } from "react";

const Messages = () => {
  const [openNewMessageBox, setOpenNewMessageBox] = useState(false);

  return (
    <div>
      <Header
        heading="Messages"
        details="Communicate with teachers and school staff"
        buttonText="New Message"
        icon={<Pen className="svg" size={18} />}
        onClick={() => setOpenNewMessageBox((prev) => !prev)}
      />
      <ChatApplication
        openNewMessageBox={openNewMessageBox}
        setOpenNewMessageBox={setOpenNewMessageBox}
      />
    </div>
  );
};

export default Messages;
