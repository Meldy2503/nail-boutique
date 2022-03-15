import React from "react";
import {
  ContentContainer,
  RightContent,
} from "../../reuseableComponents/containerStyle";
import { Back } from "../../reuseableComponents/goBack/goBackStyle";
import Sidebar from "../sidebar";
import { NotificationContainer, Item, Span } from "./notificationStyle";
import { MdChevronLeft } from "react-icons/md";
import alertData from "../../components/notifications/notificationData";
import { HeadingStyle } from "../../reuseableComponents/headingStyle";
import { ScrollContainer } from "../../reuseableComponents/scrollStyle";

function Notification() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <NotificationContainer>
          <HeadingStyle>
            <h2>Notifications</h2>
            <Back to="/location">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>
          <ScrollContainer>
            {alertData.map((items) => (
              <Item key={items.id}>
                <div>
                  <Span />
                  <span>
                    <h3>{items.heading}</h3>
                    <p>{items.body}</p>
                  </span>
                </div>
              </Item>
            ))}
          </ScrollContainer>
        </NotificationContainer>
      </RightContent>
    </ContentContainer>
  );
}

export default Notification;
