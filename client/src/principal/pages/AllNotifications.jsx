import { useOutletContext } from "react-router-dom";
import NotificationList from "../components/NotificationList";
const AllNotifications = () => {
  const { notifications } = useOutletContext();

  return (
    <main className="min-w-0 flex-1">
      <NotificationList
        notifications={notifications}
        onMarkAsRead={(ids) => {
          console.log("Mark as read:", ids);
        }}
        onDelete={(ids) => {
          console.log("Delete:", ids);
        }}
      />
    </main>
  );
};

export default AllNotifications;
