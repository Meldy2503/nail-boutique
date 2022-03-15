import React from "react";
import {
  ContentContainer,
  RightContent,
} from "../../reuseableComponents/containerStyle";
import { Back } from "../../reuseableComponents/goBack/goBackStyle";
import Sidebar from "../sidebar";
import { Alert, NotificationContainer, Row2, Item } from "./notificationStyle";
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
            <div>
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
            </div>
          </ScrollContainer>
        </NotificationContainer>
      </RightContent>
    </ContentContainer>
  );
}

export default Notification;
