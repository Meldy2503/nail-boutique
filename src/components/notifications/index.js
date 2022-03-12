import React from "react";
import {
  ContentContainer,
  RightContent,
} from "../../reuseableComponents/containerStyle";
import { Back } from "../../reuseableComponents/goBack/goBackStyle";
import Sidebar from "../sidebar";
import {
  Alert,
  NotificationContainer,
  Row1,
  Row2,
  Item,
} from "./notificationStyle";
import { MdChevronLeft } from "react-icons/md";
import alertData from "../../components/notifications/notificationData";

function Notification() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <NotificationContainer>
          <Row1>
            <h2>Notifications</h2>
            <Back to="/location">
              <MdChevronLeft />
              Go back
            </Back>
          </Row1>
          <Row2>
            <Alert>
              {alertData.map((items) => (
                <Item>
                  <div key={items.id}>
                    <h3>{items.heading}</h3>
                    <p>{items.body}</p>
                  </div>
                </Item>
              ))}
            </Alert>
          </Row2>
        </NotificationContainer>
      </RightContent>
    </ContentContainer>
  );
}

export default Notification;
