import React from "react";
// import {
//   ContentContainer,
//   RightContent,
// } from "../../../reuseableComponents/containerStyle";
// import Sidebar from "../../sidebar";
import { BookingStyle, Book } from "./bookingStyle";
import { Button } from "../../../reuseableComponents/buttonStyle";
import bookingData from "./bookingData";

function Booking() {
  return (
    <BookingStyle>
      {bookingData.map((book) => {
        return (
          <Book key={book.id}>
            <div>
              <img src={book.icon} alt="icon" />
              <h4>{book.title}</h4>

              <Button to={book.link}>CREATE BOOKING</Button>
            </div>
          </Book>
        );
      })}
    </BookingStyle>
  );
}

export default Booking;
