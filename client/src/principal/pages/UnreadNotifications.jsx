import NotificationList from "../components/NotificationList";
import { useOutletContext } from "react-router-dom";

const UnreadNotifications = () => {
  const { notifications } = useOutletContext();
  const unreadNotifications = notifications.filter(
    (notification) => notification.status === "unread",
  );

  return (
    <div className="mt-2">
      <main className="min-w-0 flex-1">
        <NotificationList
          notifications={unreadNotifications}
          emptyTitle="No unread notifications"
          emptyMessage="You're all caught up!"
          onMarkAsRead={(ids) => {
            console.log("Mark as read:", ids);
          }}
          onDelete={(ids) => {
            console.log("Delete:", ids);
          }}
        />
      </main>
    </div>
  );
};

export default UnreadNotifications;
