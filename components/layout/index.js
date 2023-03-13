import { Fragment, useContext } from "react";
import Header from "./header";
import NotificationSection from "../ui/notification";
import NotificationContext from "../../store/notification-context";

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      {activeNotification && (
        <NotificationSection
          title={activeNotification.title}
          status={activeNotification.status}
          message={activeNotification.message}
        />
      )}
    </Fragment>
  );
}

export default Layout;
