import NotificationList from "../components/NotificationList";
import { useOutletContext } from "react-router-dom";

const ImportantNotifications = () => {
  const { notifications } = useOutletContext();
  const importantNotifications = notifications.filter(
    (notification) => notification.priority === "high",
  );

  return (
    <main className="min-w-0 flex-1">
      <NotificationList
        notifications={importantNotifications}
        emptyTitle="No important notifications"
        emptyMessage="There are no high-priority notifications."
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

export default ImportantNotifications;
