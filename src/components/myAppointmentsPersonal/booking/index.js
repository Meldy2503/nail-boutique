import React from "react";
import {
  ContentContainer,
  RightContent,
} from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";
import { BookingStyle, Book } from "./bookingStyle";
import { Button } from "../../../reuseableComponents/buttonStyle";
import personal from "../../../images/personal.svg";
import group from "../../../images/group.svg";

function Booking() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent display="block">
        <BookingStyle>
          <Book>
            <div>
              <img src={personal} alt="icon" />
              <h4>Personal Booking</h4>
              <Button to="/select-location">CREATE BOOKING</Button>
            </div>
          </Book>
          <Book>
            <div>
              <img src={group} alt="icon" />
              <h4>Group Booking</h4>
              <Button to="/select-location">CREATE BOOKING</Button>
            </div>
          </Book>
        </BookingStyle>
      </RightContent>
    </ContentContainer>
  );
}

export default Booking;
