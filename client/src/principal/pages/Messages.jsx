import { Pen } from "lucide-react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import ChatApplication from "../components/ChatApplication";

const Messages = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header
        heading="Messages"
        details="Communicate with teachers and school staff"
        buttonText="New Message"
        icon={<Pen className="svg" size={18} />}
        onClick={() => navigate("/messages")}
      />
      <ChatApplication />
    </div>
  );
};

export default Messages;
