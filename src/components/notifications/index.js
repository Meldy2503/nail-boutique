import React from "react";
import {
  ContentContainer,
  RightContent,
} from "../../reuseableComponents/containerStyle";
import Sidebar from "../sidebar";
import {
  NotificationContainer,
  Item,
  NotificationContents,
} from "./notificationStyle";
import { MdChevronLeft } from "react-icons/md";
import alertData from "../../components/notifications/notificationData";
import { HeadingStyle, Back } from "../../reuseableComponents/headingStyle";

function Notification() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent display="block">
        <NotificationContainer>
          <HeadingStyle data-aos="zoom-in">
            <h2>Notifications</h2>
            <Back to="/location">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>
          <NotificationContents data-aos="fade-up">
            {alertData.map((items) => (
              <Item key={items.id}>
                <div>
                  <h3>{items.heading}</h3>
                  <p>{items.body}</p>
                </div>
              </Item>
            ))}
          </NotificationContents>
        </NotificationContainer>
      </RightContent>
    </ContentContainer>
  );
}

export default Notification;
