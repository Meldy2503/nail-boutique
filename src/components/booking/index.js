import React from "react";
import {
  ContentContainer,
  RightContent,
} from "../../reuseableComponents/containerStyle";
import Sidebar from "../sidebar";
import { BookingStyle, Book } from "./bookingStyle";
import { ButtonS } from "../../reuseableComponents/buttonStyle";
import bookingData from "./bookingData";

function Booking() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent display="block">
        <BookingStyle>
          {bookingData.map((book) => {
            return (
              <Book key={book.id}>
                <div>
                  <img src={book.icon} alt="icon" />
                  <h4>{book.title}</h4>

                  <ButtonS to={book.link}>CREATE BOOKING</ButtonS>
                </div>
              </Book>
            );
          })}
        </BookingStyle>
      </RightContent>
    </ContentContainer>
  );
}

export default Booking;
