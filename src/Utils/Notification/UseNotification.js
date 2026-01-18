import { useNotificationContext } from "./NotificationProvider";

const UseNotification = () => {
  const { showNotification } = useNotificationContext();

  return {
    success: (msg, duration) =>
      showNotification(msg, "success", duration),

    error: (msg, duration) =>
      showNotification(msg, "error", duration),

    warning: (msg, duration) =>
      showNotification(msg, "warning", duration),

    info: (msg, duration) =>
      showNotification(msg, "info", duration),
  };
};

export default UseNotification;
