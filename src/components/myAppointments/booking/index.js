import React from "react";
import {
  ContentContainer,
  RightContent,
} from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";
import { BookingStyle, Book } from "./bookingStyle";
import bookingData from "./bookingData";
import { Button } from "../../../reuseableComponents/buttonStyle";

function Booking() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <BookingStyle>
          <Book>
            {bookingData.map((item) => (
              <div key={item.id}>
                <div>
                  <img src={item.icon} alt="icon" />
                  <h4>{item.title}</h4>
                  <Button to={item.link}>CREATE BOOKING</Button>
                </div>
              </div>
            ))}
          </Book>
        </BookingStyle>
      </RightContent>
    </ContentContainer>
  );
}

export default Booking;
