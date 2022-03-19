import React from "react";
import {
  ContentContainer,
  RightContent,
} from "../../reuseableComponents/containerStyle";
import { Back } from "../../reuseableComponents/goBackStyle";
import Sidebar from "../sidebar";
import {
  NotificationContainer,
  Item,
  NotificationContents,
} from "./notificationStyle";
import { MdChevronLeft } from "react-icons/md";
import alertData from "../../components/notifications/notificationData";
import { HeadingStyle } from "../../reuseableComponents/headingStyle";

function Notification() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent display="block">
        <NotificationContainer>
          <HeadingStyle PdBottom="1rem" mPdTop="4rem">
            <h2>Notifications</h2>
            <Back to="/location">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>
          <NotificationContents>
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
