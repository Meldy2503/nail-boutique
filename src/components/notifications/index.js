import React from "react";
import { RightContent } from "../../reuseableComponents/containerStyle";
import { Back } from "../../reuseableComponents/goBack/goBackStyle";
import Sidebar from "../sidebar";
import { Alert, NotificationContainer, Row1 } from "./notificationStyle";
import { MdChevronLeft } from "react-icons/md";

function Notification() {
  return (
    <div>
      <Sidebar />
      <RightContent>
        <NotificationContainer>
          <Row1>
            <h2>Notification</h2>
            <Back to="/location">
              <MdChevronLeft />
              Go back
            </Back>
          </Row1>
          <Alert></Alert>
        </NotificationContainer>
      </RightContent>
    </div>
  );
}

export default Notification;
